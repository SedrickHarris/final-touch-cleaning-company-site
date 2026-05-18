# Batch 2 — Core Brand Pages Build Prompt

## Purpose

Build the Tier 1 core brand pages for the Final Touch Cleaning Company website per `docs/site-build-plan.md` "Recommended Build Order" Batch 2.

## When to Use

After Batch 1 (project foundation) is committed and pushed and the homepage is verified. Run once for the whole batch; do not split per page unless a page is blocked.

## Workflow

Fast Build Batch. No Gate 1/2/3 ceremony for normal page/copy/style/component/metadata work. Reference: `docs/site-os/fast-build-batch-workflow.md`.

## Source-of-Truth Docs

- `docs/brand-guide.md`
- `docs/site-build-plan.md`
- `docs/site-os/final-touch-build-context.md`
- `docs/site-os/no-fake-data-policy.md`
- `docs/site-os/file-scope-and-git-safety-policy.md`
- `docs/site-os/reference/seo-aeo-content-standards.md`
- `docs/site-os/reference/service-business-design-standards.md`

## Pages to Build

| Page | Route | Notes |
|---|---|---|
| About | `/about` | Family-owned story, owners (Scott & Nicole), local focus, service area. No fake awards/years. |
| Contact | `/contact` | Phone (`tel:+17024445077`), email, service area, placeholder form, hours TBD if not confirmed. |
| FAQ Hub | `/faq` | Top-level FAQs across services, locations, billing, scheduling. |
| Free Quote | `/free-quote` | Full-page quote intent. Reuse `QuoteFormPlaceholder` in split layout. |
| Thank You | `/thank-you` | Post-submit confirmation page (used when form goes live). |
| Privacy Policy | `/privacy-policy` | Owner-supplied or boilerplate flagged for legal review. |
| Terms of Service | `/terms-of-service` | Same legal-review flag. |
| Accessibility Statement | `/accessibility-statement` | Standard WCAG-aligned statement. |
| Services Hub | `/services` | Lists 7 services using `ServiceCard` grid (image placeholders + descriptions from `lib/constants/routes.ts`). |
| Locations Hub | `/locations` | Lists 5 cities + Clark County. |

Defer: `/reviews`, `/gallery`, `/pricing`, `/our-team`, `/cleaning-process`, `/certifications`, `/cookie-policy`, `/sitemap` — owner data not yet confirmed.

## Design Rules (Service Business Defaults)

- **Hero on `/free-quote`:** two-column split per `docs/site-os/reference/service-business-design-standards.md` — content left, `QuoteFormPlaceholder` right.
- **Hero on `/contact`:** two-column split — contact methods + service area left, form placeholder right.
- **Hero on `/about`, `/faq`, legal pages:** standard single-column hero (no form column needed; these are informational, not primary conversion surfaces).
- **Final CTA on `/about`, `/services`, `/locations`:** standard blue CTA section, no duplicate form (the hero or free-quote page carries the form).
- **`/services` and `/locations` hubs:** use `<ServiceCard>` (or a `LocationCard` if extracted) with image placeholders per `docs/site-os/reference/service-business-design-standards.md`.

## SEO/AEO Requirements

Every page gets:
- Unique `<title>` and meta description (use the `titleTemplate` in `lib/constants/seo.ts`).
- Single H1, sequential H2/H3.
- Direct-answer opening paragraph (1–2 sentences) addressing the page's intent.
- Natural keyword placement — no stuffing.
- FAQ section (3–6 items) on `/about`, `/faq`, `/free-quote`, `/services`, `/locations` minimum.
- Internal links to relevant Tier 2 / Tier 3 pages.
- `BreadcrumbList` JSON-LD where hierarchy exists (`/services` is parent of future `/services/<slug>`).
- `Organization` JSON-LD on `/about`. `Person` for Scott & Nicole only if both consent.
- `FAQPage` JSON-LD that **exactly matches** visible FAQ text — no schema-only Q&A.

Do not add `AggregateRating` / `Review` schema until owner-verified reviews land.

## No-Fake-Data Rules

Per `docs/site-os/no-fake-data-policy.md`, do not invent:

- Reviews, ratings, testimonials, review counts
- License numbers, license types
- Insurance carriers, policy numbers, "Licensed & insured" claims
- Years in business, jobs-completed counts
- Awards, certifications, accreditations
- Pricing claims, satisfaction guarantees
- Team-member details beyond Scott & Nicole
- Customer photos, team photos, project photos
- Response-time, same-day, or 24/7 availability claims

Where any of the above would normally appear, leave a `// TODO-VERIFY:` comment and omit the claim.

## Implementation Sequence

1. Read source-of-truth docs above.
2. Create new route files under `app/<route>/page.tsx` (App Router, server components by default).
3. Reuse existing shared components (`HeroSection`, `CTASection`, `SectionHeader`, `FAQSection`, `QuoteFormPlaceholder`, `ServiceCard`, `ServiceImagePlaceholder`).
4. Add per-page metadata via `export const metadata: Metadata = { ... }` in each `page.tsx`.
5. Add internal links to / from existing pages (e.g., footer already covers most legal/utility routes; verify the links resolve after creating pages).
6. For `Privacy Policy` / `Terms of Service` / `Accessibility Statement` / `Cookie Policy`: use placeholder copy clearly labeled "Draft — pending legal review" and leave a TODO comment.

## Validation Commands

Run after implementation:

```
npm run lint
npm run type-check
npm run build
```

All three must pass clean before reporting.

## Implementation Log Update

Append a `### Batch 2 — Core Brand Pages` entry to `docs/site-os/implementation-log.md` with:

- Status: Implemented pending review
- Date
- Files created (list each `app/<route>/page.tsx`)
- Files updated (constants, layout, etc. if touched)
- Validation results
- TODOs (legal review for policies, owner-verified trust signals, etc.)

## Final Report Format

Return a markdown report with these sections:

1. Files Created
2. Files Updated
3. Routes Now Live (with route → page.tsx mapping)
4. Reused Components
5. New Components (if any)
6. Metadata Coverage (per-page title + description)
7. Schema Added (per page)
8. SEO/AEO Coverage (direct answers, FAQ count, internal link count per page)
9. Design-Standard Compliance (two-column on `/free-quote` + `/contact`; single-column elsewhere; service cards with image placeholders on `/services` and `/locations`)
10. No-Fake-Data Compliance
11. Validation Results (lint / type-check / build)
12. Remaining TODOs
13. Git Status
14. Ready for Review?

## Stop Conditions

- Do not commit until the report is approved.
- Do not deploy.
- Do not install new packages unless explicitly approved.
- If a page would require unverified business data (license number, years in business, reviews) to feel complete, surface the gap as a `TODO-VERIFY` and ship the page without the claim.
