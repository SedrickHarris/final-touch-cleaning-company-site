# GoHighLevel (GHL) MVP Environment Setup

Safe configuration of GoHighLevel environment variables for the Final Touch
Cleaning Company site. Pairs with `.env.example` at the repo root.

## When to Use This Doc

- Before wiring the live quote form to GHL.
- Before wiring a GHL calendar embed.
- Before adding any backend function that talks to the GHL API.
- Before adding production environment variables in Cloudflare Pages.

## What is Configured

Seven environment variables, split into two trust zones:

| Variable | Trust zone | Where it can run |
|---|---|---|
| `GHL_API_KEY` | Private | Server-side only |
| `GHL_LOCATION_ID` | Private | Server-side only |
| `GHL_FORM_ID` | Private | Server-side only |
| `GHL_CALENDAR_ID` | Private | Server-side only |
| `GHL_WEBHOOK_URL` | Private (recommended) | Server-side preferred; browser POST acceptable for inbound webhook URLs |
| `NEXT_PUBLIC_GHL_FORM_URL` | Public | Browser bundle |
| `NEXT_PUBLIC_GHL_CALENDAR_URL` | Public | Browser bundle |

## Where `.env.local` Lives

For local development, copy the template:

```
# Repo root
C:\Users\Welcome\Desktop\client-sites\final-touch-cleaning-company-site\.env.local
```

PowerShell:

```
Copy-Item .env.example .env.local
```

macOS / Linux:

```
cp .env.example .env.local
```

Fill in real values in `.env.local`. The file is gitignored
(see `.gitignore` rules `.env`, `.env.local`, `.env.*.local`,
`.env.development.local`, `.env.production.local`) and must never be
committed. Only `.env.example` is committed (via the `!.env.example`
negation rule in `.gitignore`).

Next.js reads `.env.local` automatically on `npm run dev` and during
local `npm run build`. The static export pipeline does NOT bundle the
contents of `.env.local` into the output unless a value is referenced
with the `NEXT_PUBLIC_` prefix; non-public values stay outside the
bundle and remain server-only.

## What Variables Are Private

The following variables must NEVER appear in client JavaScript and must
NEVER be prefixed with `NEXT_PUBLIC_`:

- `GHL_API_KEY` - Bearer token (v1) or Private Integration token (v2).
  Treat as a password. Anyone with this key can read or modify the
  GHL sub-account. Rotate immediately if it leaks.
- `GHL_LOCATION_ID` - Identifies which sub-account the API key has
  access to. Not secret by itself, but pairs with `GHL_API_KEY` and is
  not needed in the browser, so keep it server-side.
- `GHL_FORM_ID` - Identifies the form. Used by backend code when
  posting submissions or fetching responses programmatically. Not
  needed in the browser when the form is hosted in GHL.
- `GHL_CALENDAR_ID` - Identifies the calendar. Used by backend code
  for slot lookups or appointment creation. Not needed in the browser
  when the calendar is hosted in GHL.
- `GHL_WEBHOOK_URL` - Inbound webhook URL. Technically callable from
  the browser (GHL inbound webhooks accept unauthenticated public POSTs
  by design), but keeping the URL server-side allows the URL to rotate
  without a frontend redeploy and prevents abuse-scrapers from
  harvesting the endpoint out of the JS bundle. **Default: keep
  server-side.**

## What Variables Are Public

The following variables are intentionally exposed to the browser bundle
via the `NEXT_PUBLIC_` prefix. Only values that are SAFE to be visible
in client JavaScript should live here:

- `NEXT_PUBLIC_GHL_FORM_URL` - Public URL of the GHL-hosted form embed
  (iframe `src` or redirect target). GHL form embed URLs are designed
  to be visible to end users.
- `NEXT_PUBLIC_GHL_CALENDAR_URL` - Public URL of the GHL-hosted calendar
  embed (iframe `src` or redirect target). Same reasoning as above.

If a variable is NEVER exposed in the rendered HTML or in the JS bundle,
do NOT prefix it with `NEXT_PUBLIC_`.

## Static Export and Private GHL API Calls

The site is built with `output: "export"` in `next.config.ts`. The build
produces static HTML in `/out` and is deployed to Cloudflare Pages. There
is **no Next.js server runtime** at request time.

That means a private GHL API call cannot run inside a Next.js route
handler in production - because there is no Node server to run it on.
Calling `api.gohighlevel.com` directly from a React component with a
private key would ship the key inside the JS bundle, which is a
publishable secret leak.

To use a private GHL key safely, route the call through a backend
layer. Pick one:

1. **Cloudflare Pages Functions** (preferred for this repo)
   - Add a file under `functions/api/<route>.ts` in the repo.
   - Cloudflare Pages auto-deploys Pages Functions alongside the
     static export.
   - Configure environment variables in the Cloudflare Pages dashboard
     (see next section) so the function reads `GHL_API_KEY` from
     `env.GHL_API_KEY`.
   - The frontend posts to `/api/<route>`; the Pages Function holds
     the key and forwards to GHL.

2. **Standalone Cloudflare Worker**
   - Deploy a separate Worker on the same Cloudflare account.
   - Same secret-handling pattern as Pages Functions, but lives
     outside the site repo.
   - Useful when you want the API surface shared across multiple
     sites or when you need Worker features the Pages runtime
     doesn't expose.

3. **GHL inbound webhook**
   - The browser POSTs directly to `GHL_WEBHOOK_URL`.
   - GHL handles routing and credential enforcement at the GHL side.
   - Acceptable for simple form-to-GHL submissions where no
     response data is needed in the frontend.
   - Even here, prefer proxying through a Pages Function so the
     webhook URL is hidden and rotatable.

4. **External automation tool (Zapier / Make / n8n)**
   - A third-party service hosts the API key and brokers the
     call. The frontend POSTs to the automation tool's webhook;
     the tool calls GHL.
   - Adds latency and a third-party dependency. Acceptable when
     orchestration with other systems is also desired.

## Production Environment Variables in Cloudflare Pages

To configure the same variables for production:

1. Sign in to the Cloudflare dashboard.
2. Navigate to **Workers & Pages** -> select the Final Touch project.
3. Open **Settings** -> **Environment variables**.
4. Add each variable with the appropriate scope:
   - **Production** (deploys from `main`) - the live site.
   - **Preview** (deploys from PR branches) - mirror of production
     values, or test values, depending on your workflow.
5. For private variables, click **Encrypt** so the value is stored
   as a secret and is not visible in the dashboard after save.
6. Save and trigger a redeploy. The new variables are read on the
   next build (for `NEXT_PUBLIC_*`) and on the next request (for
   Pages Function-scoped variables).

Cloudflare Pages variable types:

| Type | Used by | Encrypted? |
|---|---|---|
| Plaintext | Build (Next.js build script) and Pages Functions | No |
| Secret | Pages Functions only | Yes (recommended for `GHL_API_KEY` and other private values) |

`NEXT_PUBLIC_*` variables must be set as Plaintext so the Next.js
build can inline them into the JS bundle. Private variables
(`GHL_API_KEY`, `GHL_LOCATION_ID`, etc.) should be set as Secret
so they are read only by Pages Functions at request time and never
inlined into the static output.

## Warning - Do Not Call Private GHL APIs From Frontend Code

Never write code like this in a React component or a `'use client'`
module:

```ts
// WRONG - leaks GHL_API_KEY to every visitor
const res = await fetch('https://services.leadconnectorhq.com/contacts/', {
  headers: {
    Authorization: `Bearer ${process.env.GHL_API_KEY}`,
  },
});
```

Why it is wrong:

- Next.js inlines any `process.env.X` reference accessible to client
  code at build time. If the variable is not `NEXT_PUBLIC_*`, the
  reference becomes `undefined` in the browser bundle, and the call
  fails. If the variable IS `NEXT_PUBLIC_*`, the value is inlined
  into the JS bundle and is visible to anyone who views the page
  source.
- Either outcome is wrong: a private GHL key prefixed with
  `NEXT_PUBLIC_` is a publishable secret leak; an unprefixed private
  key in client code is dead code that breaks at runtime.

Correct pattern:

```ts
// Browser-side - calls our own backend
const res = await fetch('/api/quote', {
  method: 'POST',
  body: JSON.stringify(form),
});
```

```ts
// functions/api/quote.ts (Cloudflare Pages Function)
export const onRequestPost: PagesFunction<{
  GHL_API_KEY: string;
  GHL_LOCATION_ID: string;
}> = async ({ request, env }) => {
  const form = await request.json();
  const res = await fetch('https://services.leadconnectorhq.com/contacts/', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.GHL_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...form, locationId: env.GHL_LOCATION_ID }),
  });
  return new Response(await res.text(), { status: res.status });
};
```

The browser never sees the key. The key is read from Cloudflare Pages
encrypted environment variables at request time.

## Verification Checklist

Before any GHL wiring lands in code, confirm:

- [ ] `.env.local` is NOT in `git status` (gitignore working)
- [ ] `.env.example` IS in `git status` if new, or matches the
      committed template if existing
- [ ] No variable starting with `NEXT_PUBLIC_GHL_API_*` or
      `NEXT_PUBLIC_GHL_LOCATION_*` exists anywhere in the codebase
- [ ] Private variables are configured as Secret in Cloudflare Pages
      production environment
- [ ] No `fetch('https://services.leadconnectorhq.com/...')` or
      `fetch('https://rest.gohighlevel.com/...')` call exists in
      any file under `app/`, `components/`, or `lib/` that runs
      in the browser

## Related Files

- `.env.example` - committed template (root of repo)
- `.gitignore` - blocks all real `.env*` files except the template
- `next.config.ts` - sets `output: "export"` and `images.unoptimized`
- `docs/site-os/no-fake-data-policy.md` - section 9 (external data
  sources / no auto-pulls without owner consent)
- `docs/site-os/final-touch-build-context.md` - exception list
  including "live form integrations" and "custom APIs or webhooks"
  as items requiring deeper review

---

Final Touch Cleaning Company - GHL MVP Environment Setup v1.0
Status: Documented 2026-05-17. No live keys configured yet. Update
this doc when the chosen backend layer (Pages Function, Worker, or
external automation) is wired.
