// scripts/fetch-reviews.ts
//
// Fetches Google Business Profile reviews for Final Touch via OAuth 2.0 and writes an
// UNVERIFIED snapshot to data/google-reviews.staged.json (gitignored). Nothing is
// published automatically — to approve, copy the reviews you want into
// data/google-reviews.json by hand and set verified + permissionToPublish to true.
// (There is no separate curate step; manual promotion keeps this minimal.)
//
// Endpoint: GET https://mybusiness.googleapis.com/v4/accounts/{acct}/locations/{loc}/reviews
// (the legacy GBP v4 API — reviews were never migrated to the newer Business Profile
// APIs). Scope: business.manage.
//
// ─── KNOWN BLOCKER (confirmed 2026-06-18) ─────────────────────────────────────────
// This script and endpoint are CORRECT, but currently cannot fetch for Final Touch:
// the v4 reviews method is allowlist-gated PER GOOGLE CLOUD PROJECT, and the Final
// Touch project (final-touch-cleaning-gbp-api / 825790152921) is not on Google's
// legacy allowlist — the request returns 404 "Method not found". The identical code
// returned 48 reviews under an allowlisted project (sirius-systems-gbp-api), proving
// the gap is purely project access, not the code, scope, quota, or URL format. To
// unblock: get this project allowlisted via the Business Profile API access request
// (Google has largely closed new legacy access), OR run with an already-allowlisted
// project's credentials. Until then, reviews are maintained by hand in
// data/google-reviews.json. See scripts/README.md and docs/site-os/implementation-log.md.
// ──────────────────────────────────────────────────────────────────────────────────
//
// Usage (from repo root):
//   npm run fetch-reviews
//
// First run: opens a browser for OAuth consent.
// Subsequent runs: reuses the saved refresh token in scripts/tokens.json.

import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';
import { OAuth2Client } from 'google-auth-library';

// --------------------------------------------------------------------------
// Constants — update LOCATION_ID after first successful fetch
// --------------------------------------------------------------------------

const PLACE_ID = 'ChIJq6qq6ql0yIARonMQkF8BczI';
const PLACE_URL = 'https://www.google.com/maps?cid=5303198646776788086';

// GBP resource ids for Final Touch (both numeric). The account/location lookup
// APIs are quota-blocked and unnecessary — we hit the v4 reviews endpoint directly
// with these hardcoded ids and no googleapis calls.
//   ACCOUNT_ID  — owning account/business-group id (from OAuth Playground accounts.list)
//   LOCATION_ID — from the business.google.com dashboard URL
const ACCOUNT_ID = '106772819283746152';
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

// Raw fetch against the legacy v4 reviews endpoint with the hardcoded account +
// location ids. No googleapis / Account Management / Business Information calls —
// those APIs are quota-blocked and unnecessary for reading reviews.
async function fetchAllReviews(client: OAuth2Client): Promise<{
  reviews: GBPReviewRaw[];
  averageRating: number | null;
  totalReviewCount: number | null;
}> {
  const tokenRes = await client.getAccessToken();
  const token = tokenRes.token;
  if (!token) {
    console.error('\n❌  Could not obtain an OAuth access token.\n');
    process.exit(1);
  }

  const base = `https://mybusiness.googleapis.com/v4/accounts/${ACCOUNT_ID}/locations/${LOCATION_ID}/reviews`;
  console.log(`✅  Reviews endpoint: accounts/${ACCOUNT_ID}/locations/${LOCATION_ID}/reviews`);

  const allReviews: GBPReviewRaw[] = [];
  let averageRating: number | null = null;
  let totalReviewCount: number | null = null;
  let pageToken: string | undefined;

  do {
    const url = new URL(base);
    url.searchParams.set('pageSize', '50');
    if (pageToken) url.searchParams.set('pageToken', pageToken);

    const res = await fetch(url.toString(), { headers: { Authorization: `Bearer ${token}` } });
    if (!res.ok) {
      const body = await res.text();
      console.error(`\n❌  Reviews request failed: ${res.status} ${res.statusText}\n${body}\n`);
      process.exit(1);
    }

    const data = (await res.json()) as GBPListResponse;
    const { reviews = [], nextPageToken, averageRating: avg, totalReviewCount: total } = data;
    allReviews.push(...reviews);
    if (avg !== undefined) averageRating = avg;
    if (total !== undefined) totalReviewCount = total;
    pageToken = nextPageToken;
    console.log(`   Fetched ${allReviews.length} review(s) so far...`);
  } while (pageToken);

  return { reviews: allReviews, averageRating, totalReviewCount };
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
  console.log('   Review them, then copy approved entries into data/google-reviews.json');
  console.log('   (set verified + permissionToPublish to true). See scripts/README.md.\n');
}

main().catch((err) => {
  console.error('\n❌  Fetch failed:', err.message ?? err);
  process.exit(1);
});
