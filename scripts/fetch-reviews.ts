// scripts/fetch-reviews.ts
//
// Fetches reviews from the Final Touch Cleaning Company Google Business Profile
// using the legacy GBP v4 API (mybusiness.googleapis.com/v4/) and writes the
// raw result to data/google-reviews.staged.json.
//
// NEVER commits google-reviews.staged.json — it is gitignored.
// Run curate-reviews.ts next to approve reviews and write google-reviews.json.
//
// Usage (PowerShell from repo root):
//   npm run fetch-reviews
//
// First run: opens a browser for OAuth consent.
// Subsequent runs: reuses the saved refresh token in scripts/tokens.json.

import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';
import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

// --------------------------------------------------------------------------
// Constants — update LOCATION_ID after first successful fetch
// --------------------------------------------------------------------------

const PLACE_ID = 'ChIJq6qq6ql0yIARonMQkF8BczI';
const PLACE_URL = 'https://www.google.com/maps?cid=5303198646776788086';

/**
 * GBP numeric location ID for Final Touch, taken from the business.google.com
 * dashboard URL. The location lives in a Business Group, so it does NOT enumerate
 * via accounts.list → locations.list. locations.get (Business Information v1) looks
 * it up directly by this ID and bypasses that enumeration problem.
 */
const LOCATION_ID = '8309093515519409240';

const OAUTH_PORT = 3333;
const REDIRECT_URI = `http://localhost:${OAUTH_PORT}/oauth2callback`;

// --------------------------------------------------------------------------
// Paths
// --------------------------------------------------------------------------

// Launched via `npm run fetch-reviews` from the repo root, so cwd is the project
// root. Use cwd rather than __dirname: Node 24 runs this .ts file as an ES module
// (native type stripping + ESM detection), where __dirname is undefined.
const ROOT = process.cwd();
const CREDENTIALS_PATH = path.join(ROOT, 'credentials.json');
const TOKENS_PATH = path.join(ROOT, 'scripts', 'tokens.json');
const STAGED_PATH = path.join(ROOT, 'data', 'google-reviews.staged.json');

// --------------------------------------------------------------------------
// OAuth helpers
// --------------------------------------------------------------------------

function loadCredentials(): { client_id: string; client_secret: string } {
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    console.error(
      '\n❌  credentials.json not found at project root.\n' +
        '   Download it from Google Cloud Console → APIs & Services → Credentials.\n' +
        '   See scripts/README.md for setup instructions.\n'
    );
    process.exit(1);
  }
  const raw = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));
  const creds = raw.installed ?? raw.web;
  if (!creds) {
    console.error('❌  Unrecognized credentials.json format. Expected "installed" key.');
    process.exit(1);
  }
  return { client_id: creds.client_id, client_secret: creds.client_secret };
}

function buildOAuthClient(): OAuth2Client {
  const { client_id, client_secret } = loadCredentials();
  return new OAuth2Client({ clientId: client_id, clientSecret: client_secret, redirectUri: REDIRECT_URI });
}

async function getAuthorizedClient(): Promise<OAuth2Client> {
  const client = buildOAuthClient();

  if (fs.existsSync(TOKENS_PATH)) {
    const saved = JSON.parse(fs.readFileSync(TOKENS_PATH, 'utf8'));
    client.setCredentials(saved);
    console.log('✅  Loaded saved OAuth tokens.');
    return client;
  }

  const authUrl = client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/business.manage'],
    prompt: 'consent',
  });

  console.log('\n🔐  OAuth consent required.');
  console.log('   Opening browser for Google sign-in...');
  console.log(`   If the browser does not open, paste this URL manually:\n\n   ${authUrl}\n`);

  try {
    const { exec } = await import('child_process');
    exec(`start "" "${authUrl}"`);
  } catch {
    // Non-fatal
  }

  const code = await new Promise<string>((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const url = new URL(req.url ?? '/', `http://localhost:${OAUTH_PORT}`);
      const authCode = url.searchParams.get('code');
      if (authCode) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(
          '<html><body style="font-family:sans-serif;padding:2rem">' +
            '<h2>✅ Authorization complete.</h2><p>You can close this tab and return to the terminal.</p>' +
            '</body></html>'
        );
        server.close();
        resolve(authCode);
      } else {
        res.writeHead(400);
        res.end('No authorization code found.');
        server.close();
        reject(new Error('No auth code in callback URL.'));
      }
    });
    server.listen(OAUTH_PORT, () => {
      console.log(`   Listening for OAuth callback on port ${OAUTH_PORT}...`);
    });
    server.on('error', reject);
  });

  const { tokens } = await client.getToken(code);
  client.setCredentials(tokens);
  fs.writeFileSync(TOKENS_PATH, JSON.stringify(tokens, null, 2));
  console.log('✅  OAuth tokens saved to scripts/tokens.json');
  return client;
}

// --------------------------------------------------------------------------
// GBP API helpers
// --------------------------------------------------------------------------

type GBPReviewRaw = {
  reviewId: string;
  reviewer: { displayName: string; profilePhotoUrl?: string; isAnonymous?: boolean };
  starRating: 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE';
  comment?: string;
  createTime: string;
  updateTime: string;
  name: string;
};

type GBPListResponse = {
  reviews?: GBPReviewRaw[];
  averageRating?: number;
  totalReviewCount?: number;
  nextPageToken?: string;
};

const STAR_MAP: Record<GBPReviewRaw['starRating'], 1 | 2 | 3 | 4 | 5> = {
  ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5,
};

// Raw fetch against the legacy v4 reviews endpoint for one account. Returns the
// reviews on success, or { ok: false } on the FIRST page so the caller can try the
// next account (the location lives in a Business Group, so the owning account is
// not necessarily accounts[0]).
async function fetchReviewsForAccount(
  accountName: string,
  token: string,
): Promise<
  | { ok: true; reviews: GBPReviewRaw[]; averageRating: number | null; totalReviewCount: number | null }
  | { ok: false; status: number; body: string }
> {
  const base = `https://mybusiness.googleapis.com/v4/${accountName}/locations/${LOCATION_ID}/reviews`;
  const all: GBPReviewRaw[] = [];
  let averageRating: number | null = null;
  let totalReviewCount: number | null = null;
  let pageToken: string | undefined;
  let firstPage = true;

  do {
    const url = new URL(base);
    url.searchParams.set('pageSize', '50');
    if (pageToken) url.searchParams.set('pageToken', pageToken);

    const res = await fetch(url.toString(), { headers: { Authorization: `Bearer ${token}` } });
    if (!res.ok) {
      const body = await res.text();
      // First-page failure → let the caller try the next account.
      if (firstPage) return { ok: false, status: res.status, body };
      // Mid-pagination failure under an account that already worked → fatal.
      throw new Error(`Reviews page failed: ${res.status} ${res.statusText}\n${body}`);
    }
    firstPage = false;

    const data = (await res.json()) as GBPListResponse;
    const { reviews = [], nextPageToken, averageRating: avg, totalReviewCount: total } = data;
    all.push(...reviews);
    if (avg !== undefined) averageRating = avg;
    if (total !== undefined) totalReviewCount = total;
    pageToken = nextPageToken;
    console.log(`   [${accountName}] fetched ${all.length} review(s) so far...`);
  } while (pageToken);

  return { ok: true, reviews: all, averageRating, totalReviewCount };
}

async function fetchAllReviews(client: OAuth2Client): Promise<{
  reviews: GBPReviewRaw[];
  averageRating: number | null;
  totalReviewCount: number | null;
}> {
  // 1. Account(s) via Account Management v1.
  const accountMgmt = google.mybusinessaccountmanagement({ version: 'v1', auth: client });
  const accountsRes = await accountMgmt.accounts.list({});
  const accounts = accountsRes.data.accounts ?? [];
  if (accounts.length === 0) {
    console.error('\n❌  accounts.list returned no accounts for this Google user.\n');
    process.exit(1);
  }
  console.log(`✅  ${accounts.length} account(s):`);
  accounts.forEach((a) => console.log(`   - ${a.name} (${a.accountName ?? 'n/a'}, type: ${a.type ?? 'n/a'})`));

  // 2. Location directly by ID via Business Information v1 (bypasses the
  //    Business-Group enumeration problem). Confirms title + placeId.
  const bizInfo = google.mybusinessbusinessinformation({ version: 'v1', auth: client });
  const locationRes = await bizInfo.locations.get({
    name: `locations/${LOCATION_ID}`,
    readMask: 'name,title,metadata',
  });
  const locationTitle = locationRes.data.title ?? '(no title)';
  const fetchedPlaceId = locationRes.data.metadata?.placeId ?? null;
  console.log(`✅  Location: "${locationTitle}"  (id: ${LOCATION_ID}, placeId: ${fetchedPlaceId ?? 'n/a'})`);
  if (fetchedPlaceId && fetchedPlaceId !== PLACE_ID) {
    console.warn(`⚠️   placeId mismatch — expected ${PLACE_ID}, got ${fetchedPlaceId}.`);
  }

  // 3. Reviews via raw fetch against v4. Try each account until one owns the location.
  const tokenRes = await client.getAccessToken();
  const token = tokenRes.token;
  if (!token) {
    console.error('\n❌  Could not obtain an OAuth access token.\n');
    process.exit(1);
  }

  let lastError = '';
  for (const acct of accounts) {
    const accountName = acct.name;
    if (!accountName) continue;
    console.log(`   Trying reviews under ${accountName}...`);
    const result = await fetchReviewsForAccount(accountName, token);
    if (result.ok) {
      console.log(`✅  Reviews retrieved under ${accountName}.`);
      return {
        reviews: result.reviews,
        averageRating: result.averageRating,
        totalReviewCount: result.totalReviewCount,
      };
    }
    lastError = `${result.status} — ${result.body}`;
    console.warn(`   ✗ ${accountName}: HTTP ${result.status}`);
  }

  console.error(
    `\n❌  Reviews fetch failed under all ${accounts.length} account(s). Last response:\n${lastError}\n`,
  );
  process.exit(1);
}

// --------------------------------------------------------------------------
// Main
// --------------------------------------------------------------------------

async function main() {
  console.log('\n🔄  Final Touch GBP Reviews Fetch\n');
  const client = await getAuthorizedClient();
  const { reviews, averageRating, totalReviewCount } = await fetchAllReviews(client);
  const now = new Date().toISOString();

  const staged = {
    fetchedAt: now,
    placeId: PLACE_ID,
    placeUrl: PLACE_URL,
    summary: { averageRating, totalReviewCount, lastFetchedAt: now },
    reviews: reviews.map((r) => ({
      id: r.reviewId,
      reviewerName: r.reviewer.isAnonymous ? 'Anonymous' : r.reviewer.displayName,
      avatarUrl: r.reviewer.profilePhotoUrl ?? null,
      reviewText: r.comment ?? '',
      starCount: STAR_MAP[r.starRating],
      publishedAt: r.createTime,
      reviewDate: '',
      city: '',
      reviewUrl: null,
      verified: false,
      permissionToPublish: false,
    })),
  };

  fs.writeFileSync(STAGED_PATH, JSON.stringify(staged, null, 2));
  console.log(`\n✅  Staged ${reviews.length} review(s) to data/google-reviews.staged.json`);
  console.log('   Run: npm run curate-reviews\n');
}

main().catch((err) => {
  console.error('\n❌  Fetch failed:', err.message ?? err);
  process.exit(1);
});
