# GBP Reviews

How Google Business Profile reviews are sourced and rendered for this site.

- **Source of truth:** `data/google-reviews.json` — the approved data file the site renders from.
- **Access layer:** `lib/google-reviews.ts` — every page/component imports from here, never the JSON directly. It enforces verified-only rendering.
- **Display:** `components/reviews/` — carousel (homepage), grid + summary (reviews page), neutral fallback when nothing is verified.
- **Fetch:** `scripts/fetch-reviews.ts` — OAuth, one direct call to the reviews endpoint, write the approved data file.

Verified-only gate: the site renders reviews only when top-level `verified` is true **and** every review carries `verified: true` + `permissionToPublish: true`. Otherwise the neutral "Read our reviews on Google" fallback shows. No fake or placeholder content.

---

## The flow

One path: **OAuth → direct reviews fetch → write `data/google-reviews.json`.** No staged file, no curate step, no account-management call.

```
npm run fetch-reviews
```

1. **OAuth** — refreshes the saved token in `scripts/tokens.json`, or opens a browser for consent on first run (sign in as the GBP owner, scope `business.manage`).
2. **Direct fetch** — calls the legacy v4 reviews endpoint with the configured ids:
   `GET https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews`
3. **Write** — on success, writes the returned reviews to `data/google-reviews.json` (marked verified) and stops. On failure, prints the exact endpoint + error and leaves the existing file untouched.

The account/location ids are configured directly in `scripts/fetch-reviews.ts`, so there are **no** `accounts.list` / `locations.get` / `/v1/accounts` calls — the only live GBP call is the reviews fetch.

---

## ⚠️ Current state

The fetch script is **correct but blocked for this project.** The v4 reviews method is
allowlist-gated **per Google Cloud project**, and the Final Touch project
(`final-touch-cleaning-gbp-api` / `825790152921`) is not on Google's legacy allowlist —
the request returns `404 "Method not found"`. The identical code returns reviews under an
already-allowlisted project, proving the gap is project access, **not** the code, scope,
quota, or URL.

To unblock, one of:
1. Get this project allowlisted via the **Business Profile API access request**
   (https://support.google.com/business/contact/api_default).
2. Run the fetch with an **already-allowlisted project's** OAuth credentials.

Until then, `data/google-reviews.json` is maintained by hand (real, owner-approved reviews
only — set `verified: true` + `permissionToPublish: true` per the verified-only gate above).

---

## One-time setup

1. Create / use a Google Cloud project at https://console.cloud.google.com.
2. Enable the **Google My Business API** (legacy v4 — reviews live here).
3. **Credentials → Create OAuth client ID → Desktop app.** Desktop clients
   support loopback redirects automatically, so no redirect URI needs to be
   added in Cloud Console.
4. On the **OAuth consent screen** (Testing mode), add the GBP owner Google account
   under **Test users** (`business.manage` is restricted; non-test users are hard-blocked).
   Testing-mode refresh tokens expire after ~7 days.
5. Download the client JSON, rename it `credentials.json`, place it at the **repo root**.
6. Confirm `ACCOUNT_ID` and `LOCATION_ID` in `scripts/fetch-reviews.ts`.

---

## Files never committed (see .gitignore)

- `credentials.json` — OAuth client secret
- `scripts/tokens.json` — OAuth tokens

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `404 "Method not found"` on the reviews call | Project isn't allowlisted for the legacy GMB API. See "Current state" above — the code is correct; this is a Google project-access gate. |
| `404 "Requested entity was not found"` | Wrong `ACCOUNT_ID`/`LOCATION_ID`, or the signed-in user can't access that location. |
| Browser does not open | Paste the printed URL manually; the callback on port 3333 still works. |
| Access blocked / app not verified | Add your account under OAuth consent screen → Test users. |
| Tokens stop working | Delete `scripts/tokens.json` and re-run (Testing-mode tokens expire after ~7 days). |
| Port 3333 in use | Kill the stale node process holding the port, or change `OAUTH_PORT` in `fetch-reviews.ts` (no Cloud Console change needed — Desktop clients allow loopback on any port). |
