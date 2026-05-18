# Batch 4 — City Location Pages Build Prompt

## Purpose

Build the 5 Tier 3 city pages (4 cities + the county hub) per `docs/site-build-plan.md`.

## When to Use

After Batch 3 (service pages) is committed and pushed.

## Workflow

Fast Build Batch.

## Source-of-Truth Docs

- `docs/brand-guide.md`
- `docs/site-build-plan.md`
- `docs/site-os/final-touch-build-context.md`
- `docs/site-os/reference/seo-aeo-content-standards.md`
- `docs/site-os/reference/service-business-design-standards.md`
- `docs/site-os/no-fake-data-policy.md`
- `lib/constants/site.ts` — verified service area
- `lib/constants/routes.ts` — services list

## Cities to Build (5)

| Page | Route | Primary Keyword |
|---|---|---|
| Las Vegas | `/locations/las-vegas` | cleaning services Las Vegas NV |
| Henderson | `/locations/henderson` | cleaning services Henderson NV |
| North Las Vegas | `/locations/north-las-vegas` | cleaning services North Las Vegas NV |
| Boulder City | `/locations/boulder-city` | cleaning services Boulder City NV |
| Clark County | `/locations/clark-county` | cleaning services Clark County NV |

## Location Page Section Structure

1. **Hero (split, with form)** — H1: "Cleaning Services in [City], NV". Sub mentions local context (housing stock, business corridors, common needs). Form on the right.
2. **Quick local answer** — One paragraph defining what Final Touch does for this specific city.
3. **Local cleaning needs** — Real housing stock, business types, climate considerations (Las Vegas dust, dry climate, etc.). Each claim must be factually defensible (general public knowledge about the city is fine; specific client volume / job counts must be verified).
4. **Popular services in this area** — `<ServiceCard>` grid linking to Tier 2 service pages, with image placeholders. May reorder cards by local relevance (e.g., post-construction first in growth areas, move-in/out first in rental-heavy areas).
5. **Why Final Touch serves this area well** — Brand-aligned, no invented claims (no "we've cleaned 1,000+ homes in this area").
6. **Nearby neighborhoods** — Internal links to Tier 3 neighborhood pages (will land in Batch 5; for Clark County, omit this section).
7. **FAQ section** — 4–6 FAQs about service in this city.
8. **Final CTA section** — `<CTASection tone="blue" />`.

## Component Reuse

Use existing components. No new components required. If a `LocationCard` is needed for the Nearby Neighborhoods section (matches `ServiceCard` shape but for neighborhoods), extract it during Batch 5 instead — Batch 4 can use simple `<Link>` chips for nearby-neighborhoods.

## Local SEO / AEO Requirements

- H1 includes city name.
- Meta title: "Cleaning Services in [City], NV | Final Touch".
- Meta description references city, county, phone, and 1 differentiator (family-owned, detail-focused — never invented credentials).
- Direct-answer paragraph in the first 100 words including the city name.
- 4–6 FAQs, each with city-specific context where natural.
- `LocalBusiness` JSON-LD with `areaServed` matching the city + Clark County. **Do not** include a street address — Final Touch is a service-area business (per `docs/site-os/no-fake-data-policy.md` §2 service-area-only businesses must not display or schema-mark a street address).
- `Service` JSON-LD per service mentioned, with `areaServed = [city]`.
- `FAQPage` JSON-LD — exact match.
- `BreadcrumbList` reflecting `/locations` → `/locations/<city>`.

## No Fake Location Claims

- Do not invent neighborhoods, zip codes, or sub-areas that aren't in `docs/site-build-plan.md`.
- Do not claim Final Touch has served a specific number of customers in a city.
- Do not name specific buildings, properties, HOAs, or developments as past clients unless owner-confirmed.
- Do not invent local awards, chamber memberships, or partnerships.
- General factual public knowledge about the city (population scale, climate, housing trends) is acceptable when phrased generically.

## Validation Commands

```
npm run lint
npm run type-check
npm run build
```

Verify in `npm run dev`:
- All 5 routes render.
- Service card grids show image placeholders.
- Internal links resolve (some Tier 3 neighborhood links will 404 until Batch 5).

## Implementation Log Update

Append `### Batch 4 — City Location Pages` entry.

## Final Report Format

1. Files Created
2. Routes Live
3. SEO/AEO Coverage per city
4. Schema Coverage per city
5. Internal Links Added
6. Service Card Image Placeholders Confirmed
7. Two-Column Hero with Form Confirmed on All 5 Pages
8. No-Fake-Data Compliance (especially no street address in `LocalBusiness` schema)
9. Validation Results
10. Remaining TODOs
11. Git Status
12. Ready for Review?

## Stop Conditions

- Do not commit until review.
- Do not deploy.
- Do not display or schema-mark a street address — Final Touch is service-area only.
- Do not invent local customer stories, named clients, or specific job counts.
