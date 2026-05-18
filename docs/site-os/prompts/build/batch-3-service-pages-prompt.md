# Batch 3 — Service Pages Build Prompt

## Purpose

Build all 7 Tier 2 service pages for Final Touch Cleaning Company per `docs/site-build-plan.md`.

## When to Use

After Batch 2 (core brand pages) is committed and pushed.

## Workflow

Fast Build Batch. Reference `docs/site-os/fast-build-batch-workflow.md`.

## Source-of-Truth Docs

- `docs/brand-guide.md`
- `docs/site-build-plan.md`
- `docs/site-os/final-touch-build-context.md`
- `docs/site-os/reference/seo-aeo-content-standards.md`
- `docs/site-os/reference/service-business-design-standards.md`
- `docs/site-os/no-fake-data-policy.md`
- `lib/constants/routes.ts` — `SERVICES` already contains slug, name, href, `shortDescription` for each service

## Services to Build (7)

| Service | Route | Primary Keyword |
|---|---|---|
| Commercial & Office Cleaning | `/services/commercial-office-cleaning` | commercial cleaning services Las Vegas |
| Janitorial Services | `/services/janitorial-services` | janitorial services Las Vegas |
| Post-Construction Cleanup | `/services/post-construction-cleanup` | post construction cleaning Las Vegas |
| Move-In Cleaning | `/services/move-in-cleaning` | move in cleaning service Las Vegas |
| Move-Out Cleaning | `/services/move-out-cleaning` | move out cleaning service Las Vegas |
| Deep Cleaning | `/services/deep-cleaning` | deep cleaning service Las Vegas |
| Retail Space Cleaning | `/services/retail-space-cleaning` | retail cleaning services Las Vegas |

## Reusable Service Page Template

Create a single dynamic route or per-route file that renders the same section structure:

1. **Hero (split, with form)** — `<HeroSection formSlot={<QuoteFormPlaceholder />} ... />`. H1 per service + location ("Commercial & Office Cleaning in Las Vegas, NV"). Eyebrow = service category. Two CTAs: Request a Free Quote + Call.
2. **Quick Answer** — One-paragraph direct definition of the service.
3. **Who this service is for** — Customer segments (e.g., office managers, property managers, families moving in/out, contractors).
4. **What's included** — Bulleted scope, drawn from owner-confirmed checklist or generic-but-honest description.
5. **Why Final Touch** — Verified differentiators only (family-owned, local, detail-focused). No fake credentials.
6. **Service process** — Step-by-step. `HowTo` schema only if the steps are visible verbatim.
7. **Service areas** — Internal links to Tier 3 city pages (when those land in Batch 4) and Tier 4 service+city pages (Batch 6).
8. **Related services** — `ServiceCard` grid (image placeholders) showing the other 6 services.
9. **FAQ section** — 5–8 service-specific FAQs. `FAQPage` JSON-LD matching visible content.
10. **Final CTA section** — `<CTASection tone="blue" />` (no duplicate form; hero carries the form).

## Component Reuse

- `<HeroSection formSlot={...} />` (split layout from Batch 1.2)
- `<QuoteFormPlaceholder />`
- `<SectionHeader />`
- `<FAQSection />`
- `<CTASection />`
- `<ServiceCard />` + `<ServiceImagePlaceholder />` (for the Related Services grid; uses all six other services)

Extract a `<ServicePageLayout>` only if the same section structure is being duplicated more than 3 times. Otherwise inline the sections per page so per-service tuning stays straightforward.

## SEO/AEO Requirements

- H1 includes service name + primary location ("in Las Vegas, NV").
- Meta title: "<Service Name> Services in Las Vegas, NV | Final Touch".
- Meta description: 140–160 chars, includes service, service area, contact phone.
- Direct-answer paragraph in the first 100 words of body.
- FAQ section with 5–8 items, all answered in 1–3 sentences.
- Internal links: at least 6 (cities + related services + free quote + contact).
- `Service` JSON-LD: name, serviceType, provider (Organization), areaServed (Clark County + 4 cities).
- `FAQPage` JSON-LD — exact text match.
- `BreadcrumbList` JSON-LD reflecting `/services` → `/services/<slug>`.

## Service Card Image Placeholders (Related Services)

Use the `<ServiceCard>` component already in `components/shared/ServiceCard.tsx`. Each card on the Related Services grid renders with the `<ServiceImagePlaceholder>` at the top (16:10 aspect, brand-token gradient, `aria-hidden`).

## No-Fake-Data Rules

- No reviews, ratings, testimonials, license numbers, insurance details, awards, certifications, years-in-business, pricing claims, same-day/emergency availability claims, or before/after photos.
- Where service-specific scope content would benefit from a customer-story example but no verified story exists, write the section generically and add a `TODO-VERIFY` for owner-supplied examples.

## Validation Commands

```
npm run lint
npm run type-check
npm run build
```

Then manually navigate `/services/<each-slug>` in `npm run dev` to confirm:
- Page renders, hero form visible
- Internal links resolve (some Tier 3/4 targets may 404 until those batches ship — that's expected)
- Related services grid shows the other six with image placeholders

## Implementation Log Update

Append `### Batch 3 — Service Pages` entry: files, validation, internal-link summary, schema coverage, TODOs.

## Final Report Format

1. Files Created (7 page files + any extracted template)
2. Files Updated
3. SEO/AEO Coverage per route (H1, meta title, meta description, FAQ count)
4. Schema Coverage per route (Service, FAQPage, BreadcrumbList)
5. Internal Links Added (per page)
6. Service Card Image Placeholders Confirmed on Related Services grids
7. Two-Column Hero with Form Confirmed on All 7 Pages
8. No-Fake-Data Compliance
9. Validation Results
10. Remaining TODOs
11. Git Status
12. Ready for Review?

## Stop Conditions

- Do not commit until review.
- Do not deploy.
- Do not invent service-area cities outside the verified list (Las Vegas, Henderson, North Las Vegas, Boulder City, Clark County).
- Do not promise turnaround times, response times, or availability windows that haven't been owner-confirmed.
