# Internal Link Map

State file for the Mode 2 audit prompt. Records every outbound internal link on every committed page: the source page, the anchor text, the destination route, and whether that destination is confirmed live in the current static export.

## How to Use

Before committing a page, add its row(s) here. Before running a Mode 2 audit, read this file to know which links are intentional, which are deferred, and which need to be restored when a destination page ships.

**Live** = confirmed present in `out/` at last build.
**Deferred** = destination not yet built; link intentionally withheld from JSX until the page ships.
**Forward** = link exists in JSX but destination is a known future route (will 404 until that batch lands; documented in a TODO comment in source).

---

## Status Key

| Status | Meaning |
|--------|---------|
| Live | Destination confirmed in `out/` at last build |
| Deferred | Destination not built; link withheld from JSX; TODO comment in source names the condition for restoring |
| Forward | Link in JSX; destination not yet built; TODO comment names the batch |

---

## Link Map

### `/` — Homepage (`app/page.tsx`)

Last audited: 2026-05-18
Last build confirmed: 13 static routes in `out/`

| Anchor text | Destination | ROUTES key | Status | Notes |
|---|---|---|---|---|
| View all cleaning services | /services | ROUTES.services | Live | Services hub |
| Learn about our team | /about | ROUTES.about | Live | About page |
| Read all frequently asked questions | /faq | ROUTES.faq | Live | Below FAQ accordion |
| View full service area | /locations | ROUTES.locations | Live | Service area section |
| Las Vegas (city pill) | /locations | ROUTES.locations | Forward | TODO-BATCH-4: fallback to /locations until /locations/las-vegas ships |
| Henderson (city pill) | /locations | ROUTES.locations | Forward | TODO-BATCH-4: fallback to /locations until /locations/henderson ships |
| North Las Vegas (city pill) | /locations | ROUTES.locations | Forward | TODO-BATCH-4: fallback to /locations until /locations/north-las-vegas ships |
| Boulder City (city pill) | /locations | ROUTES.locations | Forward | TODO-BATCH-4: fallback to /locations until /locations/boulder-city ships |
| Clark County (city pill) | /locations | ROUTES.locations | Forward | TODO-BATCH-4: fallback to /locations until /locations/clark-county ships |
| Request a Free Quote (hero CTA) | /free-quote | ROUTES.freeQuote | Live | Hero primary CTA |
| Get My Cleaning Estimate (final CTA) | /free-quote | ROUTES.freeQuote | Live | Final CTASection primary CTA |
| Read client reviews | /reviews | ROUTES.reviews | Deferred | TODO-DEFERRED-TIER1: /reviews not in static export; link withheld; restore in Why Final Touch block once page ships |
| How our pricing works | /pricing | ROUTES.pricing | Deferred | TODO-DEFERRED-TIER1: /pricing not in static export; link withheld; restore in Why Final Touch block once page ships |
| All 7 service cards | /services | ROUTES.services | Forward | TODO-BATCH-3: cards use ROUTES.services fallback; restore individual hrefs from SERVICES constant once Batch 3 ships |

**Live link count:** 7 distinct destinations (all confirmed in `out/`)
**Forward link count:** 5 (all pointing to ROUTES.locations as fallback; will resolve to city slugs in Batch 4)
**Deferred link count:** 2 (/reviews, /pricing — withheld until pages ship)

---

## Pages Not Yet Audited

Add a row for each page as it is committed and its link plan is confirmed stable.

| Page | Route | Status |
|---|---|---|
| About | /about | Pending audit |
| Services hub | /services | Pending audit |
| Locations hub | /locations | Pending audit |
| FAQ hub | /faq | Pending audit |
| Free Quote | /free-quote | Pending audit |
| Contact | /contact | Pending audit |
| Thank You | /thank-you | Pending audit |
| Privacy Policy | /privacy-policy | Pending audit |
| Terms of Service | /terms-of-service | Pending audit |
| Accessibility Statement | /accessibility-statement | Pending audit |
| Cookie Policy | /cookie-policy | Pending audit |

---

## Deferred Links Registry

All links intentionally withheld from JSX across the whole site. A Mode 2 audit should check this list and prompt restoration when the destination page ships.

| Source page | Anchor text | Destination | Condition for restore |
|---|---|---|---|
| / | Read client reviews | /reviews | /reviews built, in static export, has real content |
| / | How our pricing works | /pricing | /pricing built, in static export, has owner-confirmed pricing structure |

---

## Forward Links Registry

Links present in JSX that will 404 until their target batch ships. Expected; documented here so audits don't flag them as bugs.

| Source page | Anchor text | Current href | Real destination | Unblocked by |
|---|---|---|---|---|
| / | Las Vegas (city pill) | /locations | /locations/las-vegas | Batch 4 |
| / | Henderson (city pill) | /locations | /locations/henderson | Batch 4 |
| / | North Las Vegas (city pill) | /locations | /locations/north-las-vegas | Batch 4 |
| / | Boulder City (city pill) | /locations | /locations/boulder-city | Batch 4 |
| / | Clark County (city pill) | /locations | /locations/clark-county | Batch 4 |
| / | All 7 service cards | /services | /services/<slug> | Batch 3 |

---

## Locations & Neighborhoods (built routes)

Last audited: 2026-05-29 (Batch 5 Mode 2 internal-link audit). Rows verified read-only against the built page files. Verification notes: many links render via constants/template literals (so they are present even though they are not literal `href="/..."` strings) — city-page service cards link service+city Tier 4 combos (`/services/<slug>/<city>`), neighborhood-page service cards link Tier 2 (`/services/<slug>`), neighborhood children render via `{n.href}` and the Clark County city grid via `{l.href}`. `/contact` is reachable on every page via the global footer (`FOOTER_NAV.company`); the nine Batch-5 neighborhood pages additionally carry a body "Contact us" link.

| Route | Tier | Required Outbound (summary) | Required Inbound (summary) | Status |
|---|---|---|---|---|
| /locations/las-vegas | Tier 3 city | /services + 7 service pages; built LV neighborhood children; /free-quote; /contact | /locations hub; header dropdown; footer; LV neighborhood children | Built |
| /locations/henderson | Tier 3 city | /services + 7 service pages; built Henderson neighborhood children; /free-quote; /contact | /locations hub; header dropdown; footer; Henderson neighborhood children | Built |
| /locations/north-las-vegas | Tier 3 city | /services + 7 service pages; built NLV neighborhood children; /free-quote; /contact | /locations hub; header dropdown; footer; NLV neighborhood children | Built |
| /locations/boulder-city | Tier 3 city | /services + 7 service pages; /free-quote; /contact | /locations hub; header dropdown; footer | Built |
| /locations/clark-county | Tier 3 city | /services + 7 service pages; 4 city pages; /free-quote; /contact | /locations hub; header dropdown; footer | Built |
| /locations/las-vegas/summerlin | Tier 3 neighborhood | /locations/las-vegas; 4 service pages; /free-quote; /contact | LV chips; /locations hub; header dropdown | Built |
| /locations/las-vegas/southern-highlands | Tier 3 neighborhood | /locations/las-vegas; 4 service pages; /free-quote; /contact | LV chips; /locations hub; header dropdown | Built |
| /locations/las-vegas/downtown-las-vegas | Tier 3 neighborhood | /locations/las-vegas; 4 service pages; /free-quote; /contact | LV chips; /locations hub; header dropdown | Built |
| /locations/las-vegas/spring-valley | Tier 3 neighborhood | /locations/las-vegas; commercial-office, janitorial, retail, deep; /free-quote; /contact | LV chips; /locations hub; header dropdown | Built |
| /locations/las-vegas/centennial-hills | Tier 3 neighborhood | /locations/las-vegas; commercial-office, post-construction, move-in, janitorial; /free-quote; /contact | LV chips; /locations hub; header dropdown | Built |
| /locations/las-vegas/sunrise-manor | Tier 3 neighborhood | /locations/las-vegas; commercial-office, janitorial, move-out, deep; /free-quote; /contact | LV chips; /locations hub; header dropdown | Built |
| /locations/las-vegas/paradise-strip | Tier 3 neighborhood | /locations/las-vegas; commercial-office, janitorial, retail, post-construction; /free-quote; /contact | LV chips; /locations hub; header dropdown | Built |
| /locations/las-vegas/arts-district | Tier 3 neighborhood | /locations/las-vegas; commercial-office, retail, janitorial, post-construction; /free-quote; /contact | LV chips; /locations hub; header dropdown | Built |
| /locations/henderson/anthem | Tier 3 neighborhood | /locations/henderson; 4 service pages; /free-quote; /contact | Henderson chips; /locations hub; header dropdown | Built |
| /locations/henderson/green-valley-ranch | Tier 3 neighborhood | /locations/henderson; 4 service pages; /free-quote; /contact | Henderson chips; /locations hub; header dropdown | Built |
| /locations/henderson/seven-hills | Tier 3 neighborhood | /locations/henderson; 4 service pages; /free-quote; /contact | Henderson chips; /locations hub; header dropdown | Built |
| /locations/henderson/macdonald-highlands | Tier 3 neighborhood | /locations/henderson; 4 service pages; /free-quote; /contact | Henderson chips; /locations hub; header dropdown | Built |
| /locations/henderson/inspirada | Tier 3 neighborhood | /locations/henderson; 4 service pages; /free-quote; /contact | Henderson chips; /locations hub; header dropdown | Built |
| /locations/henderson/cadence | Tier 3 neighborhood | /locations/henderson; 4 service pages; /free-quote; /contact | Henderson chips; /locations hub; header dropdown | Built |
| /locations/henderson/lake-las-vegas | Tier 3 neighborhood | /locations/henderson; 4 service pages; /free-quote; /contact | Henderson chips; /locations hub; header dropdown | Built |
| /locations/henderson/green-valley | Tier 3 neighborhood | /locations/henderson; commercial-office, janitorial, deep, move-out; /free-quote; /contact | Henderson chips; /locations hub; header dropdown | Built |
| /locations/henderson/tuscany-village | Tier 3 neighborhood | /locations/henderson; deep, move-in, move-out, commercial-office; /free-quote; /contact | Henderson chips; /locations hub; header dropdown | Built |
| /locations/north-las-vegas/aliante | Tier 3 neighborhood | /locations/north-las-vegas; commercial-office, janitorial, move-in, deep; /free-quote; /contact | NLV chips; /locations hub; header dropdown | Built |
| /locations/north-las-vegas/nellis-area | Tier 3 neighborhood | /locations/north-las-vegas; commercial-office, move-out, move-in, janitorial; /free-quote; /contact | NLV chips; /locations hub; header dropdown | Built |

Note: `/locations/las-vegas/aliante` is intentionally retired (`built: false`, doorway/geo decision) and has NO page or row. Aliante is served by `/locations/north-las-vegas/aliante`. Future audits should treat the LV aliante leaf as deliberately unbuilt, not an orphan.

TODO-BATCH-6: when the service + city matrix ships, swap the "4 service pages" Tier-2 anchors in each neighborhood/city row for the corresponding `/services/<service>/<city>` combos.

## Service + City Matrix (built routes)

All 35 `/services/<service>/<city>` pages are built (commits 81e0c2d + 20678de).

Pattern (applies to every matrix page):
- Outbound (Required): Tier 2 service parent `/services/<service>`, Tier 3 city parent `/locations/<city>`, sibling service+city combos, `/free-quote`, `/contact`.
- Inbound: each service hub `/services/<service>` links to its 5 city combos; each city page links to its 7 service combos (via `${s.href}/<city>` template literals); 10 neighborhood pages link to relevant service+city combos.
- Verified 2026-05-29: 0 unresolved internal hrefs; 0 orphans.

---

Site OS — Internal Link Map v1.0
Created: 2026-05-18
Reason: provide a state file for Mode 2 audit prompts so link integrity checks have a source of truth to read against rather than re-inferring intent from source code and TODO comments.
