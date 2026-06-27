// scripts/check-gbp-access.ts
//
// Read-only pre-flight diagnostic for the GBP (Google Business Profile) API setup.
// It verifies every layer in order — credentials → saved token → OAuth refresh →
// the legacy v4 reviews endpoint — and prints a clear pass/fail report.
//
// This script NEVER writes data/google-reviews.json and never modifies any site
// data. The only file it may write is scripts/tokens.json, and only to persist a
// freshly refreshed OAuth token (same behavior as scripts/fetch-reviews.ts).
//
// Usage (from repo root):
//   npm run check-gbp
//
// Exit code 0 only if the v4 reviews endpoint returns 200; exit code 1 otherwise.

import * as fs from 'fs';
import * as path from 'path';
import { OAuth2Client } from 'google-auth-library';

// --------------------------------------------------------------------------
// Config — known Final Touch GBP identity (no discovery calls)
// --------------------------------------------------------------------------

const ACCOUNT_ID = '106772819283746152';
const LOCATION_ID = '8309093515519409240';

const OAUTH_PORT = 3333;
const CALLBACK_PATH = '/oauth2callback';
const REDIRECT_URI = `http://localhost:${OAUTH_PORT}${CALLBACK_PATH}`;

const ROOT = process.cwd();
const CREDENTIALS_PATH = path.join(ROOT, 'credentials.json');
const TOKENS_PATH = path.join(ROOT, 'scripts', 'tokens.json');

const ENDPOINT = `https://mybusiness.googleapis.com/v4/accounts/${ACCOUNT_ID}/locations/${LOCATION_ID}/reviews`;

// --------------------------------------------------------------------------
// Status tracking for the final summary block
// --------------------------------------------------------------------------

type StepStatus = 'PASS' | 'WARN' | 'FAIL';
type EndpointStatus = 'ALLOWLISTED' | 'NOT ALLOWLISTED' | 'ERROR' | 'PENDING';

const summary = {
  credentials: 'FAIL' as StepStatus,
  tokens: 'FAIL' as StepStatus,
  oauth: 'FAIL' as StepStatus,
  endpoint: 'PENDING' as EndpointStatus,
};

// --------------------------------------------------------------------------
// Step 1 — credentials.json
// --------------------------------------------------------------------------

function checkCredentials(): { client_id: string; client_secret: string } | null {
  console.log('\n[1/4] CREDENTIALS');
  try {
    if (!fs.existsSync(CREDENTIALS_PATH)) {
      console.log(`  ❌ credentials.json not found at ${CREDENTIALS_PATH}`);
      summary.credentials = 'FAIL';
      return null;
    }
    const raw = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));
    const creds = raw.installed ?? raw.web;
    if (!creds || !creds.client_id || !creds.client_secret) {
      console.log('  ❌ credentials.json found but missing an "installed"/"web" key with client_id and client_secret');
      summary.credentials = 'FAIL';
      return null;
    }
    console.log(`  ✅ credentials.json found at ${CREDENTIALS_PATH}`);
    summary.credentials = 'PASS';
    return { client_id: creds.client_id, client_secret: creds.client_secret };
  } catch (err) {
    console.log(`  ❌ credentials.json could not be parsed: ${err instanceof Error ? err.message : String(err)}`);
    summary.credentials = 'FAIL';
    return null;
  }
}

// --------------------------------------------------------------------------
// Step 2 — saved token (scripts/tokens.json)
// --------------------------------------------------------------------------

function checkSavedToken(): Record<string, unknown> | null {
  console.log('\n[2/4] SAVED TOKEN');
  try {
    if (!fs.existsSync(TOKENS_PATH)) {
      console.log(`  ⚠️  tokens.json not found at ${TOKENS_PATH}`);
      console.log('     Run "npm run fetch-reviews" first to complete the OAuth consent flow.');
      summary.tokens = 'WARN';
      return null;
    }
    const saved = JSON.parse(fs.readFileSync(TOKENS_PATH, 'utf8')) as Record<string, unknown>;
    if (!saved.access_token || !saved.refresh_token) {
      console.log('  ⚠️  tokens.json found but missing access_token and/or refresh_token');
      console.log('     Delete scripts/tokens.json and re-run "npm run fetch-reviews".');
      summary.tokens = 'WARN';
      return null;
    }
    console.log(`  ✅ tokens.json found at ${TOKENS_PATH}`);
    summary.tokens = 'PASS';
    return saved;
  } catch (err) {
    console.log(`  ⚠️  tokens.json could not be parsed: ${err instanceof Error ? err.message : String(err)}`);
    summary.tokens = 'WARN';
    return null;
  }
}

// --------------------------------------------------------------------------
// Step 3 — OAuth token refresh
// --------------------------------------------------------------------------

async function refreshOAuth(
  creds: { client_id: string; client_secret: string },
  saved: Record<string, unknown>,
): Promise<string | null> {
  console.log('\n[3/4] OAUTH TOKEN REFRESH');
  try {
    const client = new OAuth2Client({
      clientId: creds.client_id,
      clientSecret: creds.client_secret,
      redirectUri: REDIRECT_URI,
    });
    client.setCredentials(saved);

    // getAccessToken() auto-refreshes when the saved token is expired.
    const { token } = await client.getAccessToken();
    if (!token) {
      throw new Error('getAccessToken() returned no token.');
    }

    // Persist the (possibly refreshed) credentials, keeping refresh_token if
    // Google omits it on refresh.
    const merged = { ...saved, ...client.credentials };
    fs.writeFileSync(TOKENS_PATH, JSON.stringify(merged, null, 2));

    console.log('  ✅ OAuth token valid/refreshed (scripts/tokens.json updated)');
    summary.oauth = 'PASS';
    return token;
  } catch (err) {
    console.log(`  ❌ OAuth refresh failed: ${err instanceof Error ? err.message : String(err)}`);
    console.log('     Delete scripts/tokens.json and re-run "npm run fetch-reviews" to re-authorize.');
    summary.oauth = 'FAIL';
    return null;
  }
}

// --------------------------------------------------------------------------
// Step 4 — GBP v4 reviews endpoint
// --------------------------------------------------------------------------

async function checkReviewsEndpoint(accessToken: string): Promise<void> {
  console.log('\n[4/4] GBP v4 REVIEWS ENDPOINT');
  console.log(`  GET ${ENDPOINT}?pageSize=1`);
  try {
    const res = await fetch(`${ENDPOINT}?pageSize=1`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const body = await res.text();

    if (res.status === 200) {
      let count: number | string = 'unknown';
      let avg: number | string = 'unknown';
      try {
        const data = JSON.parse(body) as { totalReviewCount?: number; averageRating?: number };
        if (typeof data.totalReviewCount === 'number') count = data.totalReviewCount;
        if (typeof data.averageRating === 'number') avg = data.averageRating;
      } catch {
        // body wasn't JSON; leave defaults
      }
      console.log('  ✅ ALLOWLISTED — reviews endpoint is accessible.');
      console.log(`     Total review count: ${count}`);
      console.log(`     Average rating:     ${avg}`);
      summary.endpoint = 'ALLOWLISTED';
      return;
    }

    if (res.status === 404 && body.includes('Method not found')) {
      console.log('  ❌ NOT ALLOWLISTED — project is not on Google\'s legacy v4 allowlist.');
      console.log(`     Status: ${res.status} ${res.statusText}`);
      console.log(`     Body:   ${body}`);
      summary.endpoint = 'NOT ALLOWLISTED';
      return;
    }

    if (res.status === 403) {
      console.log('  ❌ PERMISSION DENIED — the API may not be enabled in the GCP console.');
      console.log(`     Status: ${res.status} ${res.statusText}`);
      console.log(`     Body:   ${body}`);
      summary.endpoint = 'ERROR';
      return;
    }

    if (res.status === 401) {
      console.log('  ❌ UNAUTHORIZED — token issue despite the refresh step passing.');
      console.log(`     Status: ${res.status} ${res.statusText}`);
      console.log(`     Body:   ${body}`);
      summary.endpoint = 'ERROR';
      return;
    }

    console.log('  ❌ UNEXPECTED — unhandled response from the reviews endpoint.');
    console.log(`     Status: ${res.status} ${res.statusText}`);
    console.log(`     Body:   ${body}`);
    summary.endpoint = 'ERROR';
  } catch (err) {
    console.log(`  ❌ ERROR — request to the reviews endpoint failed: ${err instanceof Error ? err.message : String(err)}`);
    summary.endpoint = 'ERROR';
  }
}

// --------------------------------------------------------------------------
// Step 5 — summary block
// --------------------------------------------------------------------------

function printSummary(): void {
  console.log('\n─────────────────────────────────────────');
  console.log('GBP ACCESS DIAGNOSTIC — Final Touch');
  console.log('─────────────────────────────────────────');
  console.log(`credentials.json     [${summary.credentials}]`);
  console.log(`tokens.json          [${summary.tokens}]`);
  console.log(`OAuth refresh        [${summary.oauth}]`);
  console.log(`v4 reviews endpoint  [${summary.endpoint === 'PENDING' ? 'ERROR' : summary.endpoint}]`);
  console.log('─────────────────────────────────────────');

  if (summary.endpoint === 'NOT ALLOWLISTED') {
    console.log('');
    console.log('NEXT STEPS — Get this project allowlisted:');
    console.log('1. Go to: https://support.google.com/business/contact/api_default');
    console.log('2. GCP Project ID:     final-touch-cleaning-gbp-api');
    console.log('3. GCP Project number: 825790152921');
    console.log('4. Account ID:         106772819283746152');
    console.log('5. Location ID:        8309093515519409240');
    console.log('6. Use case:           Reading Google Business Profile reviews via the GBP API');
    console.log('                       to display verified customer reviews on our business website.');
    console.log('Once approved, run: npm run fetch-reviews');
  }
}

// --------------------------------------------------------------------------
// Main — run each layer in order; never throw
// --------------------------------------------------------------------------

async function main(): Promise<void> {
  const creds = checkCredentials();
  const saved = checkSavedToken();

  if (!creds || !saved) {
    // Cannot attempt OAuth without both credentials and a saved token.
    console.log('\n[3/4] OAUTH TOKEN REFRESH');
    console.log('  ❌ Skipped — credentials and/or saved token unavailable (see above).');
    console.log('\n[4/4] GBP v4 REVIEWS ENDPOINT');
    console.log('  ❌ Skipped — no valid access token to test with.');
    printSummary();
    process.exitCode = 1;
    return;
  }

  const accessToken = await refreshOAuth(creds, saved);
  if (!accessToken) {
    console.log('\n[4/4] GBP v4 REVIEWS ENDPOINT');
    console.log('  ❌ Skipped — OAuth refresh failed, so no valid access token to test with.');
    printSummary();
    process.exitCode = 1;
    return;
  }

  await checkReviewsEndpoint(accessToken);
  printSummary();

  process.exitCode = summary.endpoint === 'ALLOWLISTED' ? 0 : 1;
}

main().catch((err) => {
  // Final backstop — main() handles its own errors, but never let one escape.
  console.error(`Unexpected fatal error: ${err instanceof Error ? err.message : String(err)}`);
  process.exitCode = 1;
});
