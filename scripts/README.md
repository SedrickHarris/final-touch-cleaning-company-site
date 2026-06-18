# GBP Reviews

How Google Business Profile reviews are sourced and rendered for this site.

- **Source of truth:** `data/google-reviews.json` — only verified, owner-approved reviews.
- **Access layer:** `lib/google-reviews.ts` — every page/component imports from here, never the JSON directly.
- **Display:** `components/reviews/` — carousel (homepage), grid + summary (reviews page), neutral fallback when nothing is verified.
- **Fetch (optional):** `scripts/fetch-reviews.ts` — OAuth fetch of raw reviews into a staged file. Approval is manual.

Nothing renders unless `data/google-reviews.json` is marked verified and each review is approved. There is no fake/placeholder content.

---

## ⚠️ Current state of the fetch script

The fetch script is **correct but blocked for this project.** The v4 reviews method is
allowlist-gated **per Google Cloud project**, and the Final Touch project
(`final-touch-cleaning-gbp-api` / `825790152921`) is not on Google's legacy allowlist —
the request returns `404 "Method not found"`. The identical code returned 48 reviews under
an already-allowlisted project, which proves the gap is project access, **not** the code,
scope, quota, or URL format.

To unblock, one of:
1. Get this project allowlisted via the **Business Profile API access request**
   (https://support.google.com/business/contact/api_default). Google has largely closed
   new legacy access, so this may be denied or slow.
2. Run the fetch with an **already-allowlisted project's** OAuth credentials.

Until then, **reviews are maintained by hand** in `data/google-reviews.json` (see below).
This is the active, supported path and needs no API, token, or Google project.

---

## Adding reviews manually (active path)

1. Open `data/google-reviews.json`.
2. Add an entry to `reviews[]` following the `VerifiedReview` shape in
   `lib/google-reviews.ts`. Use the real reviewer name, star count, and verbatim text —
   never invent or paraphrase.
3. Set `verified: true` and `permissionToPublish: true` only for genuine,
   owner-approved reviews.
4. Update `summary.averageRating` and `summary.totalReviewCount`, and the top-level
   `verified` flag / `lastVerifiedAt`.
5. `npm run build` to confirm, then commit `data/google-reviews.json`.

If `verified` is false or any review lacks approval, the site shows the neutral
"Read our reviews on Google" fallback — never partial or unverified content.

---

## Running the fetch script (once the project is allowlisted)

One-time setup:

1. Create / use a Google Cloud project at https://console.cloud.google.com.
2. Enable the **Google My Business API** (legacy v4 — reviews live here) and the
   **My Business Account Management** + **Business Information** APIs.
3. **Credentials → Create OAuth client ID → Desktop app.** Add
   `http://localhost:3333/oauth2callback` as an authorized redirect URI.
4. On the **OAuth consent screen** (Testing mode), add the GBP owner Google account
   under **Test users** (`business.manage` is a restricted scope; non-test users are
   hard-blocked). Note: Testing-mode refresh tokens expire after ~7 days.
5. Download the client JSON, rename it `credentials.json`, place it at the **repo root**.
6. Confirm `ACCOUNT_ID` and `LOCATION_ID` in `scripts/fetch-reviews.ts` (numeric GBP
   ids; the location id is in the business.google.com dashboard URL).

Run it:

```
npm run fetch-reviews
```

- First run opens a browser for consent (sign in as the GBP owner); the token is saved
  to `scripts/tokens.json` (gitignored). Later runs reuse it.
- Output is written to `data/google-reviews.staged.json` (gitignored). It is **not**
  published automatically.

Approve: review the staged file, then copy the entries you approve into
`data/google-reviews.json` and set `verified` + `permissionToPublish` to true, as in
"Adding reviews manually" above.

---

## Files never committed (see .gitignore)

- `credentials.json` — OAuth client secret
- `scripts/tokens.json` — OAuth tokens
- `data/google-reviews.staged.json` — raw, unapproved fetch output

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `404 "Method not found"` on the reviews call | Project isn't allowlisted for the legacy GMB API. See "Current state" above — code is correct; this is a Google project-access gate. |
| `404 "Requested entity was not found"` | Wrong `ACCOUNT_ID`/`LOCATION_ID`, or the signed-in user can't access that location. |
| Browser does not open | Paste the printed URL manually; the callback on port 3333 still works. |
| Access blocked / app not verified | Add your account under OAuth consent screen → Test users. |
| Tokens stop working | Delete `scripts/tokens.json` and re-run (Testing-mode tokens expire after ~7 days). |
| Port 3333 in use | Kill the stale node process holding the port, or change `OAUTH_PORT` in `fetch-reviews.ts` and update the redirect URI in Cloud Console. |
