# Batch 5 — Priority Neighborhood Pages Build Prompt

## Purpose

Build the 10 priority Tier 3 neighborhood pages per `docs/site-build-plan.md` Batch 5.

## When to Use

After Batch 4 (city location pages) is committed and pushed.

## Workflow

Fast Build Batch.

## Source-of-Truth Docs

- `docs/brand-guide.md`
- `docs/site-build-plan.md`
- `docs/site-os/reference/seo-aeo-content-standards.md`
- `docs/site-os/reference/service-business-design-standards.md`
- `docs/site-os/no-fake-data-policy.md`
- `lib/constants/site.ts`

## Neighborhoods to Build (10)

| Neighborhood | Route |
|---|---|
| Summerlin | `/locations/las-vegas/summerlin` |
| Cadence | `/locations/henderson/cadence` |
| Inspirada | `/locations/henderson/inspirada` |
| Southern Highlands | `/locations/las-vegas/southern-highlands` |
| MacDonald Highlands | `/locations/henderson/macdonald-highlands` |
| Seven Hills | `/locations/henderson/seven-hills` |
| Anthem | `/locations/henderson/anthem` |
| Lake Las Vegas | `/locations/henderson/lake-las-vegas` |
| Downtown Las Vegas | `/locations/las-vegas/downtown-las-vegas` |
| Green Valley Ranch | `/locations/henderson/green-valley-ranch` |

## Neighborhood Page Section Structure

1. **Hero (split, with form)** — H1 includes neighborhood + city. Sub references the housing or business character (master-planned community, luxury hillside, downtown business district, etc.) **using only generic, publicly known characteristics**.
2. **Quick neighborhood answer** — One paragraph defining what Final Touch does in this specific area.
3. **Local context** — Real, generic, public-knowledge characteristics of the neighborhood (e.g., "master-planned community in west Las Vegas with newer construction"). Never invent population numbers, dates, or named developments unless verified.
4. **Popular services in this neighborhood** — `<ServiceCard>` grid with image placeholders, reordered by neighborhood character (post-construction first in new-build zones, deep cleaning first in luxury residential, etc.).
5. **Why families and businesses in [neighborhood] hire Final Touch** — Verified brand attributes only (family-owned, detail-focused, local team).
6. **Parent city link** — Back-link to `/locations/<city>` per `docs/site-build-plan.md` internal-linking architecture.
7. **FAQ section** — 3–5 neighborhood-specific FAQs.
8. **Final CTA section** — `<CTASection tone="blue" />`.

## Avoid Doorway-Page Content

A doorway page is a thin city-swap of another page. To avoid:

- Each page must contain at least 200 words of neighborhood-specific content beyond the boilerplate sections.
- Local context section must reference something specific to the neighborhood (master-planned status, downtown character, hillside terrain, lake proximity, etc.).
- FAQs must include at least 1 question whose answer is meaningfully different from the parent city's FAQs.
- Do not literally swap the city name in identical paragraphs — rewrite at least the local context and the differentiator phrasing per neighborhood.
- Service ordering in the Popular Services grid should reflect neighborhood character.

## Unique Local Relevance Rules

- Acceptable claims: master-planned community status, named anchor businesses or landmarks only if those are public knowledge (Lake Las Vegas, Henderson Hospital, Smith Center), construction era (new-build / older established / mixed), residential vs. mixed-use character.
- Not acceptable without owner verification: number of homes served, named past clients, specific HOA partnerships, neighborhood-specific certifications, exclusive contracts.

## SEO / AEO Requirements

- H1 includes neighborhood + parent city.
- Meta title: "[Neighborhood] Cleaning Services | Final Touch".
- Meta description: 140–160 chars, references neighborhood, parent city, phone.
- Direct-answer in first 100 words.
- 3–5 FAQs with `FAQPage` JSON-LD matching visible content exactly.
- `LocalBusiness` JSON-LD with `areaServed = [neighborhood + parent city + Clark County]`. No street address.
- `BreadcrumbList`: `/locations` → `/locations/<city>` → `/locations/<city>/<neighborhood>`.

## Component Reuse

Same components as Batch 4. No new components required for this batch.

## No-Fake-Data Rules

- Do not invent neighborhood populations, household income, family demographics, or census-style stats.
- Do not name developments, HOAs, or business clients as past customers unless owner-confirmed.
- Do not invent local awards, "Best of [neighborhood]" mentions, or partnerships.
- Do not invent emergency or same-day service claims specific to the neighborhood.

## Validation Commands

```
npm run lint
npm run type-check
npm run build
```

## Implementation Log Update

Append `### Batch 5 — Priority Neighborhood Pages` entry.

## Final Report Format

1. Files Created
2. Routes Live
3. Per-Neighborhood Content Differentiation (1–2 sentence summary per page of what makes it not a doorway page)
4. SEO/AEO Coverage
5. Schema Coverage
6. Internal Links Added
7. Service Card Image Placeholders Confirmed
8. Two-Column Hero with Form Confirmed on All 10 Pages
9. No-Fake-Data Compliance
10. Validation Results
11. Remaining TODOs
12. Git Status
13. Ready for Review?

## Stop Conditions

- Do not commit until review.
- Do not deploy.
- Reject any draft where neighborhood pages read like literal city-name swaps. Rewrite local context until each page reads as written for that neighborhood.
