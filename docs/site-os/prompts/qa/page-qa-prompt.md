# Page QA Prompt

## Purpose

QA a single built page (or batch of pages) against design, content, accessibility, and no-fake-data standards. Run after Claude Code finishes a build and before commit.

## When to Use

- Immediately after a Batch 2–6 build, before the report is finalized.
- After any content gap fix.
- As a pre-deploy spot check on a page that has been live.

## Required Inputs

- Target route(s)
- Source-of-truth doc references (brand guide, build context, design standards)
- Live `npm run dev` available for visual checks

## QA Categories

### 1. Route Existence and Rendering

- [ ] `npm run dev` serves the route without errors
- [ ] No 404 / 500 on the route
- [ ] No duplicate route (the file system has exactly one source for this URL)
- [ ] The route is linked from at least one other page (no orphan)

### 2. H1 and Heading Hierarchy

- [ ] Exactly one `<h1>` on the page
- [ ] H1 reflects the page's primary intent + (if local) the location
- [ ] H2/H3 hierarchy is sequential — no skipped levels (e.g., no H4 without an H3)
- [ ] Heading text is human-readable (not keyword-stuffed)

### 3. Metadata

- [ ] `metadata` export exists in `page.tsx` (or layout for shared metadata)
- [ ] Unique meta title (different from every other page on the site)
- [ ] Meta title 50–60 chars including primary keyword
- [ ] Meta description 140–160 chars, unique, includes primary keyword + phone + verified differentiator
- [ ] `alternates.canonical` is set (self-referencing canonical) where applicable
- [ ] `openGraph` block is populated

### 4. CTA Visibility

- [ ] Primary CTA visible above the fold on desktop AND mobile
- [ ] CTA label drawn from `CTAS` constants (not hardcoded)
- [ ] Tap-to-call uses `tel:+17024445077`
- [ ] One primary CTA per view (skill: `primary-action`)
- [ ] Final CTA section present at page bottom (route to `/free-quote`)

### 5. Internal Links

- [ ] At least 3 internal links per page (target: 5–8)
- [ ] Anchor text is natural (no "click here", no "learn more" without context)
- [ ] Every internal link resolves (no 404 in `npm run dev`)
- [ ] Links to related services / locations are present where the section calls for them
- [ ] No external links without `rel="noopener noreferrer"` on `target="_blank"`

### 6. Mobile Layout

- [ ] Layout renders correctly at 375px, 414px, 768px viewports
- [ ] No horizontal scroll
- [ ] Touch targets ≥ 44px (preferably 48px for primary actions)
- [ ] Mobile menu opens and closes; body scroll locks when open
- [ ] Hero stacks content first, then form (per the two-column standard)

### 7. Accessibility

- [ ] `lang="en"` on `<html>` (inherited from root layout)
- [ ] Skip-to-content link works
- [ ] Focus ring visible on every interactive element (`:focus-visible`)
- [ ] `aria-current="page"` on active nav item
- [ ] Form labels visible above inputs (not placeholder-only)
- [ ] Disabled inputs have both `disabled` and `aria-disabled="true"`
- [ ] Decorative images (placeholder areas) have `aria-hidden="true"`
- [ ] Color contrast meets WCAG AA (body ≥ 4.5:1, large text ≥ 3:1)
- [ ] Reduced-motion respected (MotionConfig `reducedMotion="user"` at root)

### 8. No-Fake-Data Compliance

- [ ] No reviews, ratings, testimonials, star displays
- [ ] No license numbers, insurance details, "Licensed & insured" claims (unless owner-verified)
- [ ] No years-in-business, jobs-completed counts (unless owner-verified)
- [ ] No awards, certifications, accreditations (unless owner-verified)
- [ ] No pricing claims, satisfaction guarantees (unless owner-verified)
- [ ] No customer photos, team photos, project photos, before/after photos
- [ ] No same-day, emergency, 24/7 availability claims (unless owner-verified)
- [ ] No `AggregateRating` / `Review` schema
- [ ] All TODO-VERIFY comments are intact (not silently filled with invented values)

### 9. Form Status

- [ ] If the page is a conversion surface (hero on `/free-quote`, `/contact`, etc.), the form is visible
- [ ] `QuoteFormPlaceholder` shows disabled inputs, intercepted submit, and "form not yet active" note (until live endpoint lands)
- [ ] Phone fallback is prominent inside the form

### 10. Service Card Image Placeholders

If the page renders any `<ServiceCard>` grid:
- [ ] Each card has a visible image placeholder area at the top
- [ ] Aspect ratio is consistent across the grid (default `aspect-[16/10]`)
- [ ] Placeholder is `aria-hidden="true"`
- [ ] No baked-in text inside the placeholder

### 11. Two-Column Hero / CTA (Where Applicable)

- [ ] If the page is service-business conversion-focused, the hero uses two-column split with the form on the right (per `docs/site-os/reference/service-business-design-standards.md`)
- [ ] Container is `max-w-[1440px]` with progressive padding
- [ ] Mobile stacks content first then form
- [ ] Final CTA section (if separate from hero) doesn't duplicate the hero form

### 12. Schema

- [ ] `BreadcrumbList` JSON-LD reflects the visible breadcrumb (if breadcrumbs exist)
- [ ] `FAQPage` JSON-LD matches visible FAQ text exactly
- [ ] `LocalBusiness` JSON-LD does NOT include a street address (Final Touch is service-area only)
- [ ] `Service` JSON-LD `areaServed` matches verified service area
- [ ] No invented values in any schema field

## Output Format

Return a markdown report:

```
# Page QA — <route>

## Status
PASS / NEEDS FIXES / FAIL

## Categories
### 1. Route Existence and Rendering
- Status:
- Notes:

### 2. H1 and Heading Hierarchy
- Status:
- Notes:

... (one block per category 1–12)

## Top Issues
- ...

## Recommended Next
- ...

## Ready for commit?
YES / NO
```

## Stop Conditions

- If any category FAILS no-fake-data compliance (invented review, license, etc.), mark the page as STOP-SHIP regardless of other category scores. Remove the invented content before any further work.
- If the page is missing a primary CTA, mark NEEDS FIXES before commit.
