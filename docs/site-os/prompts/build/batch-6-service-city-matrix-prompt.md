# Batch 6 — Service + City Matrix Build Prompt

## Purpose

Build the 35 Tier 4 service + city pages (7 services × 5 cities) per `docs/site-build-plan.md` Batch 6.

## When to Use

After Batch 5 (priority neighborhood pages) is committed and pushed.

## Workflow

Fast Build Batch. This batch is programmatic in scale; the safeguards below prevent doorway-page content.

## Source-of-Truth Docs

- `docs/brand-guide.md`
- `docs/site-build-plan.md`
- `docs/site-os/reference/seo-aeo-content-standards.md`
- `docs/site-os/reference/service-business-design-standards.md`
- `docs/site-os/no-fake-data-policy.md`
- `lib/constants/routes.ts` — services list
- `lib/constants/site.ts` — service area cities

## Pages to Build (35)

7 services × 5 cities at pattern `/services/<service-slug>/<city-slug>`.

Services: `commercial-office-cleaning`, `janitorial-services`, `post-construction-cleanup`, `move-in-cleaning`, `move-out-cleaning`, `deep-cleaning`, `retail-space-cleaning`.

Cities: `las-vegas`, `henderson`, `north-las-vegas`, `boulder-city`, `clark-county`.

## Programmatic Generation Safeguards

This is the highest-volume batch. Use a reusable `ServiceCityPage` component or dynamic route — but the **content must vary per page**. Programmatic content is allowed only when the source data is verified (per `docs/site-os/no-fake-data-policy.md` Programmatic Content Rule).

Per-page variable inputs:
- Service name + slug
- City name + slug
- Service-specific scope description (from Batch 3 service pages)
- City-specific context (from Batch 4 city pages)
- A short, hand-written 2–3 sentence intro that specifically blends the service with that city's character

Do NOT:
- Generate all 35 pages with identical body copy and a city-name swap.
- Use a single generic "Final Touch provides [service] in [city]" template across all 35 pages.
- Render the same FAQ list with only the city name swapped.

DO:
- Vary the FAQ section by 1–2 city-relevant items per page (35 × at-least-one-unique-FAQ).
- Vary the "who hires this service in [city]" paragraph based on the city's character (residential luxury, commercial corridor, growth area, established suburb, recreational).
- Render different `ServiceCard` ordering on the Related Services grid based on what's locally relevant.

## Section Structure

1. **Hero (split, with form)** — H1: "[Service Name] in [City], NV". Sub blends service + city context.
2. **Direct-answer paragraph** — What this specific service looks like in this specific city.
3. **Who hires this service in [City]** — City-specific customer segments.
4. **What's included** — Service scope (consistent across cities for the same service, drawn from Batch 3).
5. **Local context** — 2–3 sentences on city-specific factors (construction activity, dust/climate, rental turnover, business density) that affect this service.
6. **Related services in [City]** — `<ServiceCard>` grid with image placeholders, linking to other Batch 6 pages for the same city.
7. **Related cities for this service** — Internal links to other Batch 6 pages for the same service.
8. **FAQ section** — 4–6 FAQs, with 1–2 unique per (service, city) combination.
9. **Final CTA section** — `<CTASection tone="blue" />`.

## SEO / AEO Requirements

- H1: "[Service Name] Services in [City], NV"
- Meta title: "[Service] in [City], NV | Final Touch"
- Meta description: 140–160 chars, includes service, city, phone, and a verified differentiator.
- Direct-answer paragraph in first 100 words.
- FAQs with `FAQPage` JSON-LD matching visible text exactly.
- `LocalBusiness` JSON-LD with `areaServed = [city + Clark County]`. No street address.
- `Service` JSON-LD: name, serviceType, provider, areaServed = [city].
- `BreadcrumbList`: `/services` → `/services/<service>` → `/services/<service>/<city>`.
- Each page links back to its Tier 2 service parent AND its Tier 3 city parent.

## No-Doorway-Page Discipline

For each of the 35 pages, verify before commit:
- At least 250 words of body content beyond boilerplate.
- At least 1 paragraph that mentions the city by name in a non-templated sentence.
- At least 1 FAQ whose answer would not be correct on a different city.
- Service-card ordering and / or specific phrasing varies meaningfully.

## Component Reuse

- `<HeroSection formSlot={...} />`
- `<QuoteFormPlaceholder />`
- `<ServiceCard>` / `<ServiceImagePlaceholder>`
- `<FAQSection>`, `<CTASection>`, `<SectionHeader>`

Consider extracting `<ServiceCityPage>` if the implementation pattern is identical except for content — but only if the content variation is genuinely per-page driven by data, not by template.

## No-Fake-Data Rules

- No invented city-specific stats, customer counts, market share, or local-rank claims.
- No invented same-day / 24/7 / emergency availability per city.
- No invented partnerships with named local businesses.
- No `AggregateRating` / `Review` schema per page.

## Validation Commands

```
npm run lint
npm run type-check
npm run build
```

Then spot-check 5 random (service, city) pages in `npm run dev` to verify content actually varies.

## Implementation Log Update

Append `### Batch 6 — Service + City Matrix` entry. Note: this is the largest batch by file count; the log should summarize patterns, not list all 35 routes individually.

## Final Report Format

1. Files Created (summary; not all 35 routes individually)
2. Routes Live (range + spot-checked entries)
3. Per-(Service, City) Content Variation Audit (random sample of 5 pages, show how each differs)
4. SEO/AEO Coverage (pattern-level)
5. Schema Coverage
6. Internal Links Added (linking back to Tier 2 + Tier 3 parents)
7. Service Card Image Placeholders Confirmed
8. Two-Column Hero with Form Confirmed
9. No-Doorway-Page Compliance
10. No-Fake-Data Compliance
11. Validation Results
12. Remaining TODOs
13. Git Status
14. Ready for Review?

## Stop Conditions

- Do not commit until review.
- Do not ship if any spot-checked page reads like a city-name-swap doorway page.
- Do not deploy.
