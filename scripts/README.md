# GBP Reviews Pipeline

Fetches real Google Business Profile reviews, routes them through a human curation step, and renders them on the site. Nothing renders until a review is manually approved.

## Setup

1. Create a Google Cloud project at https://console.cloud.google.com
2. Enable the **Google My Business API (legacy v4)** under APIs & Services → Library
   (search this name exactly). This is the only API the reviews fetch needs.
   - Note: the v4 reviews endpoint is gated behind a per-project allowlist
     application Google must approve. Enabling the API is not the same as being
     granted access; an unapproved project returns `403 PERMISSION_DENIED`.
3. Create OAuth credentials: APIs & Services → Credentials → Create Credentials → OAuth 2.0 Client ID → Desktop app
4. Add `http://localhost:3333/oauth2callback` to Authorized redirect URIs
5. On the OAuth consent screen (Testing mode), add your Google account under
   **Test users** — `business.manage` is a restricted scope and is hard-blocked
   for non-test users. (Testing-mode refresh tokens expire after 7 days.)
6. Download the JSON file, rename it `credentials.json`, place it in the repo root
7. Run `npm install` from the repo root
8. Set `LOCATION_RESOURCE_NAME` in `scripts/fetch-reviews.ts` — see below

## Finding your location resource name

The fetch script skips the account/location lookup APIs and calls the reviews
endpoint directly, so it needs the full resource name hardcoded:

```
accounts/{accountId}/locations/{locationId}
```

Both are numeric IDs. The lookup APIs that return them (Account Management,
Business Information) may not be enabled on your project, so the easiest way to
get the two IDs is the **Google OAuth 2.0 Playground**
(https://developers.google.com/oauthplayground) — it runs against Google's own
project, so it works regardless of which APIs you enabled:

1. In the Playground, click the gear (top right) → optionally "Use your own OAuth
   credentials" (paste the client ID/secret from `credentials.json`).
2. In "Input your own scopes", enter
   `https://www.googleapis.com/auth/business.manage` → Authorize APIs → sign in as
   the **GBP owner account** (the same test user you added above).
3. Step 2 → in the request URL field, run:
   `GET https://mybusinessaccountmanagement.googleapis.com/v1/accounts`
   → in the response, copy `accounts[].name` → that is `accounts/{accountId}`.
4. Then run:
   `GET https://mybusinessbusinessinformation.googleapis.com/v1/accounts/{accountId}/locations?readMask=name,title,metadata`
   → find the entry whose `metadata.placeId` is
   `ChIJq6qq6ql0yIARonMQkF8BczI` (Final Touch) → its `name` is `locations/{locationId}`.
5. Combine into `accounts/{accountId}/locations/{locationId}` and paste it into
   `LOCATION_RESOURCE_NAME`.

(If business.google.com shows the location, the numeric location ID is also in the
dashboard URL — but the Playground is the reliable way to get both IDs together.)

## Running the pipeline

First run (browser opens for OAuth consent — must sign in as the GBP owner account):
```
npm run fetch-reviews
npm run curate-reviews
```

After curation:
```
git add data/google-reviews.json
git commit -m "reviews: curate GBP reviews"
git push
```

Subsequent runs reuse the saved token in scripts/tokens.json (no browser prompt).

## Keys during curation

| Key | Action |
|-----|--------|
| y | Approve and publish |
| n | Skip |
| e | Edit display name, then approve |
| q | Quit without saving |

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Browser does not open | Paste the printed URL manually. Callback on port 3333 still works. |
| `LOCATION_RESOURCE_NAME is still a placeholder` | Set it in fetch-reviews.ts — see "Finding your location resource name". |
| `404 Not Found` on `/v4/accounts` | Decommissioned endpoint. This script no longer calls it; ensure you're on the updated fetch-reviews.ts. |
| `403 PERMISSION_DENIED` on `/reviews` | The legacy GMB API isn't allowlisted for your project yet. Apply for access via the Google My Business API request form; approval is required to read reviews. |
| `404` on the reviews call | Check `LOCATION_RESOURCE_NAME` — wrong accountId/locationId. Re-derive both via the Playground steps above. |
| Access blocked / app not verified | Add your account under OAuth consent screen → Test users (business.manage is restricted). |
| Tokens stop working | Delete scripts/tokens.json and re-run (Testing-mode tokens expire after 7 days). |
| Port 3333 in use | Kill the stale node process holding the port, or change OAUTH_PORT in fetch-reviews.ts and update the redirect URI in Cloud Console. |
