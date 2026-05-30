> **Companion document.** This is a companion to `docs/site-build-plan.md`, which remains the **canonical** 280+ page architecture and source of truth. Where this file and the live plan conflict, the live plan wins. This doc records current build status and reconciles the uploaded *Master Page Site Build List* against the live plan.

# Final Touch Cleaning Company — Build-Status & Reconciliation Companion

**What this is:** A companion to the canonical `docs/site-build-plan.md` (the authoritative 280+ page architecture). It records current build status, reconciles the uploaded *Master Page Site Build List* against the live plan, and tracks owner-verified facts + content gates.

**Source of truth:** `docs/site-build-plan.md`. Where the uploaded Master List conflicts, the live plan wins.

---

## 0. Owner-Confirmed Facts (verified this session + from live docs)

| Fact | Status | Usage rule |
|------|--------|-----------|
| Legal name | **Final Touch Cleaning Company LLC** | Schema, footer, legal pages |
| Owners | Scott & Nicole Maland | No other team members |
| Family-owned, owner-led, local | Confirmed | Use |
| Service area | Clark County · Las Vegas · Henderson · North Las Vegas · Boulder City | Service-area framing; no street address |
| Scope & focus | Residential + commercial, **lead with commercial + post-construction** | Residential pages stay; commercial leads hero/nav/CTAs/metadata |
| **Licensed (NV)** | **Owner-confirmed** | General "Licensed & insured" only; NO license number |
| **Insured** | **Owner-confirmed** | General statement; NO carrier/coverage amounts |
| **GBP** | **Verified** — 5.0★, 3 reviews; North LV + nearby; no public address | `sameAs` = `https://www.google.com/maps?cid=5303198646776788086`; rating as attributed display text only, NOT schema |
| 24-hour service | **Confirmed** — around-the-clock so client ops aren't interrupted | Commercial differentiator: "cleaning on your schedule, incl. after-hours/overnight." NOT "emergency." |
| Phone | (702) 444-5077 = `+17024445077` | `tel:+17024445077` |
| Email | **info@finaltouchcleaningteam.com** (per live plan) | Schema `email`, contact |

**Action — log it:** Record this session's confirmations (licensed, insured, GBP data, 24-hr meaning, focus) in `docs/site-os/implementation-log.md` with date before trust signals ship.

**Blue Ribbon Guarantee — APPROVED.** Owners approved the wording: "100% satisfaction or return within 24 hours." Cleared to ship in copy/TrustBar. Nothing else outstanding.

---

## 1. KEY FINDING — the uploaded Master List ≠ the live plan

The uploaded *Master Page Site Build List* is a **separate, conflicting architecture**, not an increment of the live plan. Adopting it would break the built site.

| Dimension | Live plan (canonical, being built) | Uploaded Master List | Resolution |
|-----------|-----------------------------------|----------------------|------------|
| URLs | Nested: `/services/{s}`, `/locations/{city}/{hood}`, `/es/` for Spanish | Flat: `/commercial-cleaning/`, `/service-areas/{city}-nv/` | **Live (nested) wins.** Already built; flat = full-site 301. |
| Services | **Fixed 7** (commercial-office-cleaning, janitorial-services, post-construction-cleanup, move-in, move-out, deep-cleaning, retail-space-cleaning) | ~11+ (commercial, office, construction-cleanup, builders-clean, turnover, tenant-improvement, etc.) | **Live wins.** The extras live as Batch-7 *builder* (10) + *industry* (15) specialized pages, not new services. |
| `commercial-office-cleaning` | **Combined** (D3) | Split into two | **Combined.** (Retracts my earlier "split / Batch 3b expansion" suggestion — that was from the uploaded doc and is wrong vs the live plan.) |
| Cities | 5 (LV, Henderson, NLV, Boulder City, Clark County) | 8 "Tier 1" incl. Enterprise/Paradise/Spring Valley/Summerlin/Centennial Hills | **Live wins.** Spring Valley, Centennial Hills, Summerlin, Paradise = **neighborhoods** under LV; Enterprise not in plan. |
| Neighborhoods | 20 specific (see live plan) + service×neighborhood matrix | ~55 across 4 tiers | **Live 20 are canonical.** Uploaded extras → §A backlog. |

**Net:** the uploaded list's only forward value is a pool of *candidate extra neighborhoods/communities* for Phase 4 expansion — captured in Appendix A.

---

## 1a. Neighborhood wording & parent linking

Some "Las Vegas" neighborhoods sit outside the City of Las Vegas, but all are in the **Las Vegas Valley** and use Las Vegas postal addresses. Handle via copy + linking, **not** URL changes (keep nested slugs).

**Copy rule (all neighborhood pages):**
- Describe each as **"a community in the Las Vegas Valley"** (or "the Las Vegas metro").
- Do **NOT** use "unincorporated Clark County" in customer-facing copy.
- Do **NOT** assert "in the City of Las Vegas" for the off-city ones.
- Keep it simple and local: the Las Vegas Valley framing is accurate for every neighborhood and reads naturally.

**Parent linking — one canonical parent per neighborhood.** Each neighborhood links up to its assigned city; that city's page lists it as a child card. Clark County stays the county hub that links to the 4 cities (not to individual neighborhoods).

| Parent city | Neighborhood children (slug under `/locations/{city}/`) |
|-------------|----------------------------------------------------------|
| `las-vegas` | summerlin ✅, downtown-las-vegas ✅, southern-highlands ✅, spring-valley, centennial-hills, sunrise-manor, paradise-strip, arts-district, aliante |
| `henderson` | cadence ✅, inspirada ✅, macdonald-highlands ✅, seven-hills ✅, anthem ✅, lake-las-vegas ✅, green-valley-ranch ✅, green-valley, tuscany-village |
| `north-las-vegas` | nellis-area, aliante |

(✅ = built. Two "Aliante" pages — one under LV, one under NLV — disambiguated by nesting per the live plan.)

**Integrate it in the build structure (recommended), don't hardcode:**
- Add a `NEIGHBORHOODS` array to `lib/constants/routes.ts` (parallel to the existing `LOCATIONS`): `{ slug, name, parentCity, href, shortDescription }`.
- City pages render their "Nearby neighborhoods" cards by filtering `NEIGHBORHOODS` on `parentCity` — so the correct children appear automatically.
- Each neighborhood page derives its parent-city link from its own `parentCity` field — single source of truth, scales as new neighborhoods are added, no mis-parenting.

**URLs:** unchanged (`/locations/{city}/{slug}`). Enterprise, if ever added (Phase 4), has no parent city — give it a standalone `/locations/enterprise` rather than forcing it under a city.

---

## 2. Build Status (current)

| Batch | Scope | Status |
|-------|-------|--------|
| 1 + 1.1 | Foundation, components, motion | ✅ Done |
| 2 | Core brand — 12 routes built: `/`, /about, /services, /locations, /contact, /faq, /free-quote, /thank-you, /privacy-policy, /terms-of-service, /accessibility-statement, /cookie-policy + /404 | ✅ Mostly done |
| 2 (deferred) | /reviews, /gallery, /pricing, /our-team, /cleaning-process, /certifications, /sitemap | ⏳ Held pending owner data — several now unblocked (see §4) |
| 3 | 7 service pages | ✅ Done |
| 4 | 5 city pages | ✅ Done |
| 5 | 10 priority neighborhoods: Summerlin, Downtown LV, Southern Highlands (LV); Cadence, Inspirada, MacDonald Highlands, Seven Hills, Anthem, Lake Las Vegas, Green Valley Ranch (Henderson) — now have hero photos | ✅ Done |
| 5 (remaining 10) | LV: spring-valley, centennial-hills, sunrise-manor, paradise-strip, arts-district, aliante · Henderson: green-valley, tuscany-village · NLV: nellis-area, aliante | ✅ Done — 9 built with hero photos wired 2026-05-29 (LV aliante intentionally retired, not built) |
| 6 | Service + city matrix (35: 7×4 cities + 7 Clark County) | ✅ Done (committed 81e0c2d + 20678de) |
| 7 | Specialized: builders (10), industries (15), seasonal (7), urgency (4), problem-based (5), community (3), Spanish (7), service×neighborhood (50+) | ⏳ |
| 8 | Tech SEO + launch (schema, robots/sitemap/llms.txt, GSC/Bing/Clarity/GA4, IndexNow, QA, deploy) | ⏳ |

**Image convention (from this batch):** `public/images/locations/` = neighborhood hero photos; `public/images/heroes/locations/` = city hero photos. Shared `HeroSection` takes `image={{ src, alt }}`.

---

## 3. Recommended near-term order
1. Finish **Batch 5** (remaining 10 neighborhoods) as photos arrive.
2. **Batch 6** service×city matrix (highest local-SEO value; lead with commercial-office + post-construction × LV/Henderson).
3. Build the now-unblocked **deferred brand pages** (§4) as a small scoped batch.
4. Ship the **trust-signal + schema** gated change (§5) once confirmations are logged.

---

## 4. No-Fake-Data Content Gates — UPDATED

| Page / element | Status now | Guidance |
|----------------|-----------|----------|
| Licensed & insured (TrustBar, /about, schema) | **Done (copy + TrustBar 2026-05-29)** | General statement; no numbers. Log first. |
| GBP `sameAs` | **Done (schema 2026-05-29)** | Add CID URL to `LocalBusiness` schema. |
| Logo `image` | **Done (schema 2026-05-29)** | Logo URL added to `LocalBusiness`/`Organization` schema site-wide. |
| `/reviews` | **Built (TODO-VERIFY: owner-supplied review content)** | Show 3 real Google reviews via live source; "5.0 on Google" as attributed text; **no** AggregateRating/Review schema (self-serving). |
| `/our-team` | **Built (pending review)** | Scott & Nicole only. |
| `/cleaning-process` | **Built (pending review)** | Process description; no fake data. |
| `/certifications` | **Partial** | Can state licensed & insured; no certs/awards/numbers. Consider folding into /about unless real certs exist. |
| `/pricing` | **Built (pending review)** | "How pricing works → request a quote." Matches live FAQ stance. |
| `/gallery` | **STILL BLOCKED** | Needs owner-supplied before/after photos; cannot invent. Keep deferred. |
| `/sitemap` | Utility | Build in Batch 8. |
| Blue Ribbon Guarantee | **APPROVED** | Ship: "100% satisfaction or return within 24 hours." |

---

## 5. Business Schema Spec (GATED — real data + schema)

Single `LocalBusiness` node, service-area (no address), NO rating markup.

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Final Touch Cleaning Company LLC",
  "url": "https://www.finaltouchcleaningteam.com/",
  "telephone": "+17024445077",
  "email": "info@finaltouchcleaningteam.com",
  "image": "<owner-supplied logo/photo URL>",
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Clark County, NV" },
    { "@type": "City", "name": "North Las Vegas" },
    { "@type": "City", "name": "Las Vegas" },
    { "@type": "City", "name": "Henderson" },
    { "@type": "City", "name": "Boulder City" }
  ],
  "sameAs": ["https://www.google.com/maps?cid=5303198646776788086"],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  }
}
```
Rules: no `aggregateRating`/`review` (self-serving), no `address`, 24-hour hours OK (frame as after-hours scheduling, not emergency), licensed/insured in copy not schema numbers.

---

## Appendix A — Expansion Backlog (from uploaded Master List)

Candidate **additional neighborhoods/communities** NOT in the live plan, for Phase 4 neighborhood-matrix expansion. Convert to nested `/locations/{city}/{slug}` if adopted. Not canonical until added to `site-build-plan.md`.

- **Summerlin sub-areas:** summerlin-north, summerlin-west, summerlin-south, the-lakes, red-rock-country-club
- **NW/North LV:** skye-canyon, skye-hills, providence, eldorado, craig-ranch, ardiente, del-webb-at-north-ranch, heartland-at-tule-springs, sun-city-aliante, tule-springs, twin-lakes, lone-mountain, east-las-vegas, downtown-south
- **Henderson:** calico-ridge, legacy, madeira-canyon, foothills-at-macdonald-ranch, mission-hills, macdonald-ranch
- **SW Valley:** mountains-edge, rhodes-ranch, silverado-ranch
- **Corridors / high-value:** strip-corridor, chinatown, southern-highlands-estates, green-valley-core
- **Tier 4 (later):** angel-park, venus, valley-vista, providence-phases

Note: validate each against the live plan's existing 20 before adding; some uploaded names duplicate live neighborhoods under different labels.
