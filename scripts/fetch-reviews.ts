// scripts/fetch-reviews.ts
//
// One working path: OAuth → direct GBP reviews fetch → write the approved data file.
// The site renders from data/google-reviews.json through lib/google-reviews.ts, which
// enforces verified-only display. There is no staged file, no curate step, and no
// account-management call.
//
//   GET https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews
//   Scope: business.manage   (legacy v4 API — reviews were never migrated)
//
// Note: this endpoint is allowlist-gated per Google Cloud project. The Final Touch
// project is not on Google's legacy allowlist, so the call currently returns
// 404 "Method not found" until the project is allowlisted (or allowlisted credentials
// are used). The code path is correct; only Google's gate is missing.
//
// Usage (from repo root):
//   npm run fetch-reviews
//
// First run opens a browser for OAuth consent; later runs refresh the saved token.

import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';
import { OAuth2Client } from 'google-auth-library';

// --------------------------------------------------------------------------
// Config — known Final Touch GBP identity (no discovery calls)
// --------------------------------------------------------------------------

const PLACE_ID = 'ChIJq6qq6ql0yIARonMQkF8BczI';
const PLACE_URL = 'https://www.google.com/maps?cid=5303198646776788086';
const ACCOUNT_ID = '106772819283746152';
const LOCATION_ID = '8309093515519409240';

const OAUTH_PORT = 3333;
const CALLBACK_PATH = '/oauth2callback';
const REDIRECT_URI = `http://localhost:${OAUTH_PORT}${CALLBACK_PATH}`;
const SCOPES = ['https://www.googleapis.com/auth/business.manage'];

const ROOT = process.cwd();
const CREDENTIALS_PATH = path.join(ROOT, 'credentials.json');
const TOKENS_PATH = path.join(ROOT, 'scripts', 'tokens.json');
const DATA_PATH = path.join(ROOT, 'data', 'google-reviews.json');

// --------------------------------------------------------------------------
// OAuth — load/refresh the saved token, else run the consent flow once
// --------------------------------------------------------------------------

function loadCredentials(): { client_id: string; client_secret: string } {
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    throw new Error('credentials.json not found at project root. See scripts/README.md.');
  }
  const raw = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));
  const creds = raw.installed ?? raw.web;
  if (!creds) throw new Error('Unrecognized credentials.json (expected an "installed" or "web" key).');
  return { client_id: creds.client_id, client_secret: creds.client_secret };
}

async function getAuthorizedClient(): Promise<OAuth2Client> {
  const { client_id, client_secret } = loadCredentials();
  const client = new OAuth2Client({ clientId: client_id, clientSecret: client_secret, redirectUri: REDIRECT_URI });

  if (fs.existsSync(TOKENS_PATH)) {
    try {
      const saved = JSON.parse(fs.readFileSync(TOKENS_PATH, 'utf8'));
      client.setCredentials(saved);
      const { credentials } = await client.refreshAccessToken();
      const merged = { ...saved, ...credentials }; // keep refresh_token if Google omits it
      client.setCredentials(merged);
      fs.writeFileSync(TOKENS_PATH, JSON.stringify(merged, null, 2));
      return client;
    } catch {
      // fall through to a fresh consent flow
    }
  }

  const authUrl = client.generateAuthUrl({ access_type: 'offline', scope: SCOPES, prompt: 'consent' });
  console.log(`Open this URL to authorize:\n${authUrl}\n`);
  try {
    const { exec } = await import('child_process');
    exec(`start "" "${authUrl}"`);
  } catch {
    // non-fatal
  }

  const code = await new Promise<string>((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const url = new URL(req.url ?? '/', `http://localhost:${OAUTH_PORT}`);
      if (url.pathname !== CALLBACK_PATH) {
        res.writeHead(404);
        res.end();
        return;
      }
      const authCode = url.searchParams.get('code');
      res.writeHead(authCode ? 200 : 400, { 'Content-Type': 'text/html' });
      res.end(authCode ? '<p>Authorized. Return to the terminal.</p>' : 'No authorization code.');
      server.close();
      if (authCode) resolve(authCode);
      else reject(new Error('No auth code in callback URL.'));
    });
    server.listen(OAUTH_PORT);
    server.on('error', reject);
  });

  const { tokens } = await client.getToken(code);
  client.setCredentials(tokens);
  fs.writeFileSync(TOKENS_PATH, JSON.stringify(tokens, null, 2));
  return client;
}

// --------------------------------------------------------------------------
// Direct reviews fetch
// --------------------------------------------------------------------------

type GBPReviewRaw = {
  reviewId: string;
  reviewer: { displayName: string; profilePhotoUrl?: string; isAnonymous?: boolean };
  starRating: 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE';
  comment?: string;
  createTime: string;
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

const ENDPOINT = `https://mybusiness.googleapis.com/v4/accounts/${ACCOUNT_ID}/locations/${LOCATION_ID}/reviews`;

async function fetchAllReviews(client: OAuth2Client): Promise<{
  reviews: GBPReviewRaw[];
  averageRating: number | null;
  totalReviewCount: number | null;
}> {
  const { token } = await client.getAccessToken();
  if (!token) throw new Error('Could not obtain an OAuth access token.');

  const all: GBPReviewRaw[] = [];
  let averageRating: number | null = null;
  let totalReviewCount: number | null = null;
  let pageToken: string | undefined;

  do {
    const url = new URL(ENDPOINT);
    url.searchParams.set('pageSize', '50');
    if (pageToken) url.searchParams.set('pageToken', pageToken);

    const res = await fetch(url.toString(), { headers: { Authorization: `Bearer ${token}` } });
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Reviews request failed.\n  Endpoint: GET ${ENDPOINT}\n  Status:   ${res.status} ${res.statusText}\n  Body:     ${body}`);
    }

    const data = (await res.json()) as GBPListResponse;
    all.push(...(data.reviews ?? []));
    if (data.averageRating !== undefined) averageRating = data.averageRating;
    if (data.totalReviewCount !== undefined) totalReviewCount = data.totalReviewCount;
    pageToken = data.nextPageToken;
  } while (pageToken);

  return { reviews: all, averageRating, totalReviewCount };
}

// --------------------------------------------------------------------------
// Write the approved data file (lib/google-reviews.ts renders from this)
// --------------------------------------------------------------------------

function reviewDateFrom(createTime: string): string {
  const d = new Date(createTime);
  return Number.isNaN(d.getTime()) ? '' : d.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

function writeApprovedFile(
  reviews: GBPReviewRaw[],
  averageRating: number | null,
  totalReviewCount: number | null,
): void {
  // Preserve the existing top-level fields (writeReviewUrl, source, place ids).
  const existing = fs.existsSync(DATA_PATH)
    ? (JSON.parse(fs.readFileSync(DATA_PATH, 'utf8')) as Record<string, unknown>)
    : {};

  const mapped = reviews.map((r) => ({
    id: r.reviewId,
    reviewerName: r.reviewer.isAnonymous ? 'Anonymous' : r.reviewer.displayName,
    avatarUrl: r.reviewer.profilePhotoUrl ?? null,
    reviewText: r.comment ?? '',
    starCount: STAR_MAP[r.starRating],
    reviewDate: reviewDateFrom(r.createTime),
    publishedAt: r.createTime,
    city: '',
    reviewUrl: null,
    verified: true,
    permissionToPublish: true,
  }));

  const computedAvg = mapped.length
    ? Number((mapped.reduce((s, r) => s + r.starCount, 0) / mapped.length).toFixed(1))
    : null;
  const now = new Date().toISOString();

  const output = {
    verified: mapped.length > 0,
    lastVerifiedAt: now,
    source: (existing.source as string) ?? 'google-business-profile',
    placeId: (existing.placeId as string) ?? PLACE_ID,
    placeUrl: (existing.placeUrl as string) ?? PLACE_URL,
    writeReviewUrl: (existing.writeReviewUrl as string) ?? null,
    summary: {
      averageRating: averageRating ?? computedAvg,
      totalReviewCount: totalReviewCount ?? mapped.length,
      lastFetchedAt: now,
    },
    reviews: mapped,
  };

  fs.writeFileSync(DATA_PATH, JSON.stringify(output, null, 2) + '\n');
}

// --------------------------------------------------------------------------
// Main — one path in, one path out
// --------------------------------------------------------------------------

async function main(): Promise<void> {
  const client = await getAuthorizedClient();
  const { reviews, averageRating, totalReviewCount } = await fetchAllReviews(client);
  writeApprovedFile(reviews, averageRating, totalReviewCount);
  console.log(`Wrote ${reviews.length} review(s) to data/google-reviews.json`);
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exitCode = 1;
});
