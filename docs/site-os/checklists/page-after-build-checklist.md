# Page After-Build Checklist

Use this checklist after Claude Code finishes a page build and before commit. Pairs with the QA prompts under `docs/site-os/prompts/qa/`.

## 1. Route Works

- [ ] Route renders in `npm run dev` without errors
- [ ] Route is correct (slug matches `docs/site-build-plan.md`)
- [ ] No duplicate route was created
- [ ] No unrelated route was modified
- [ ] Navigation still works

## 2. Metadata Present

- [ ] `export const metadata` in `page.tsx` (or layout)
- [ ] Unique meta title (50–60 chars)
- [ ] Unique meta description (140–160 chars)
- [ ] `alternates.canonical` set
- [ ] Open Graph fields populated

## 3. H1 Present

- [ ] Exactly one `<h1>` per page
- [ ] H1 includes primary keyword
- [ ] H1 includes target location (if local)
- [ ] H1 is human-readable

## 4. Headings Logical

- [ ] H1 → H2 → H3 sequential
- [ ] No skipped levels (no H4 without H3)
- [ ] Heading text supports user scanning
- [ ] Heading text supports SEO/AEO without stuffing

## 5. CTAs Visible

- [ ] Primary CTA above the fold (desktop AND mobile)
- [ ] CTA label from `CTAS` constant (not hardcoded)
- [ ] Tap-to-call uses `tel:+17024445077`
- [ ] One primary CTA per view
- [ ] Final CTA section at page bottom

## 6. Internal Links Valid

- [ ] Minimum 3 internal outbound links
- [ ] All links resolve in `npm run dev`
- [ ] Anchor text is natural and descriptive
- [ ] Links to Tier 2 parent and/or Tier 4 children where appropriate
- [ ] Page is not orphaned

## 7. Mobile Layout OK

- [ ] No horizontal scroll at 375px, 414px, 768px
- [ ] Two-column hero stacks content first, form second (where applicable)
- [ ] Touch targets ≥ 44px (preferably 48px for primary actions)
- [ ] Mobile menu opens, closes, locks body scroll

## 8. Form Behavior Correct

- [ ] `QuoteFormPlaceholder` (or equivalent) renders with disabled inputs
- [ ] Submit intercepted with `preventDefault()` — no live submission yet
- [ ] "Form not yet active" note visible
- [ ] Phone fallback visible inside the form
- [ ] TODO-BATCH comment for form endpoint wiring in code

## 9. Service Card Image Placeholders (Where Applicable)

- [ ] Every `<ServiceCard>` shows an image placeholder area
- [ ] Consistent aspect ratio (`aspect-[16/10]` default)
- [ ] `aria-hidden="true"` on decorative placeholder
- [ ] No baked-in text inside the placeholder
- [ ] TODO comment for future real-image replacement

## 10. Two-Column Hero / CTA (Where Applicable)

- [ ] Conversion-focused page uses two-column hero with form on the right
- [ ] Container is `max-w-[1440px]` with progressive padding
- [ ] Heading sizing scales correctly at `lg`/`xl`/`2xl`
- [ ] Final CTA does not duplicate the hero form

## 11. No Fake Claims

- [ ] No reviews / ratings / testimonials / star displays
- [ ] No license numbers / insurance details / certifications / awards
- [ ] No years-in-business / jobs-completed counts
- [ ] No pricing claims / satisfaction guarantees
- [ ] No customer / team / project / before-after photos
- [ ] No same-day / 24/7 / emergency availability claims
- [ ] No `AggregateRating` / `Review` schema
- [ ] All `TODO-VERIFY` comments intact

## 12. Schema

- [ ] `BreadcrumbList` matches visible breadcrumb (if breadcrumbs exist)
- [ ] `FAQPage` matches visible FAQ text exactly
- [ ] `LocalBusiness` — no street address
- [ ] `Service` — name, serviceType, provider, areaServed populated
- [ ] No invented values

## 13. Validation Run

- [ ] `npm run lint` — passed clean
- [ ] `npm run type-check` — passed clean
- [ ] `npm run build` — passed clean

## 14. Implementation Log Updated

- [ ] New entry in `docs/site-os/implementation-log.md`
- [ ] Files changed listed
- [ ] Validation results recorded
- [ ] TODOs carried forward

## 15. Final Decision

- [ ] **Ready for commit** — staged scope verified, `pre-commit-qa-prompt.md` passes
- [ ] **Needs minor fixes** — small content / SEO / a11y patches
- [ ] **Needs major fixes** — strategy or design revision needed before commit
- [ ] **STOP-SHIP** — invented data detected, must be removed before any further work
