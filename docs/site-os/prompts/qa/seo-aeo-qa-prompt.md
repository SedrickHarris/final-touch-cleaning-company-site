# SEO/AEO QA Prompt

## Purpose

Audit a page's SEO and answer-engine readiness. Pairs with `page-qa-prompt.md` (structural QA) and `aeo-gap-analysis-prompt.md` (deeper AEO-only analysis). Use this prompt for a focused pass on keyword discipline, intent alignment, and AEO basics.

## When to Use

- After a build, alongside `page-qa-prompt.md`.
- Before a content batch goes to commit.
- When a page is being prepared for SEO/AEO refresh.

## Required Inputs

- Target route
- Primary keyword + 2–4 secondary keywords for that page
- Target audience
- Page type (service, location, neighborhood, service+city, landing, hub, homepage, brand)

## QA Categories

### 1. Target Keyword Intent Match

- [ ] Primary keyword maps to the page type (service keyword → service page, local keyword → local page, etc.)
- [ ] The page's content shape matches the keyword's dominant SERP intent (informational / transactional / local / mixed)
- [ ] H1 includes the primary keyword naturally
- [ ] No mismatch between meta title intent and body intent

### 2. Natural Keyword Use

- [ ] Primary keyword appears 2–4 times in body, distributed naturally
- [ ] Secondary keywords each appear 1–2 times
- [ ] No keyword stuffing (3+ consecutive keyword repetitions, awkward anchor density, exact-match anchors stacked)
- [ ] Headings include keyword variants, not exact-match repeats
- [ ] Alt text on real images is descriptive, not keyword-stuffed

### 3. Local SEO (If Applicable)

- [ ] Target location in H1 or first paragraph
- [ ] Service area listed in body (Clark County + relevant cities)
- [ ] Service area matches `lib/constants/site.ts`
- [ ] No invented cities, neighborhoods, or zip codes
- [ ] `LocalBusiness` schema `areaServed` matches visible service area
- [ ] No street address in schema or visible content (Final Touch is service-area only)

### 4. Direct-Answer Quality

- [ ] Page answers its primary intent in the first 100 words
- [ ] Direct-answer paragraph is 2–3 sentences
- [ ] Direct-answer sentence 1 names business + service + location
- [ ] Direct-answer is factually defensible without invented claims

### 5. FAQ Quality

- [ ] FAQ count: 4–6 minimum for service / location / neighborhood / service+city pages
- [ ] Each Q phrased as a real customer question (no keyword-stuffed Qs)
- [ ] Each A follows the direct-answer format (answer first, clarify second, optional CTA third)
- [ ] Each A is 40–80 words
- [ ] No FAQ duplicates body content
- [ ] At least 1 FAQ is voice-search-friendly phrasing
- [ ] `FAQPage` JSON-LD matches visible Q+A text exactly

### 6. Metadata Quality

- [ ] Meta title unique across the site
- [ ] Meta title 50–60 chars, includes primary keyword + location (if local) + brand
- [ ] Meta description unique, 140–160 chars, includes primary keyword + phone + 1 differentiator
- [ ] Open Graph title and description match or extend the meta values
- [ ] `alternates.canonical` is set (self-referencing canonical)

### 7. Internal Links

- [ ] 3+ internal outbound links from this page
- [ ] Links to Tier 2 parents (service / location) where appropriate
- [ ] Links to Tier 4 children (service+city) where appropriate
- [ ] Anchor text is natural and descriptive
- [ ] All links resolve (no 404 in `npm run dev`)
- [ ] Page is not orphaned (at least 1 inbound link from another page)

### 8. Schema Readiness

- [ ] `BreadcrumbList` reflects visible breadcrumb
- [ ] `FAQPage` matches visible FAQ exactly
- [ ] `LocalBusiness` (where applicable) — no street address, `areaServed` accurate
- [ ] `Service` (where applicable) — name, serviceType, provider, areaServed populated
- [ ] No `AggregateRating` / `Review` schema unless owner-verified review data exists AND visible review content matches
- [ ] No `HowTo` schema unless visible step content exists and matches

### 9. No Keyword Stuffing

Red flags to check:
- [ ] Exact-match keyword repeated 5+ times in a single paragraph
- [ ] H1 + H2 + H3 all use the exact same keyword
- [ ] Footer / nav links use exact-match anchor 10+ times
- [ ] Body has obvious "for X in Y, contact us about X in Y" patterns
- [ ] Hidden keyword text (`display: none`, `visibility: hidden`, `color: transparent`)

### 10. No Doorway-Page Risk

For location / neighborhood / service+city pages:
- [ ] Page contains at least 250 words of body content beyond boilerplate
- [ ] Local context section references something specific to the area (not a city-name swap)
- [ ] At least 1 FAQ is unique to this (service, location) combination
- [ ] Service ordering / phrasing varies meaningfully from sibling pages

## Output Format

```
# SEO/AEO QA — <route>

## Overall
Score: 1–10
Status: PASS / NEEDS WORK / FAIL

## Categories
### 1. Target Keyword Intent Match
- Status:
- Notes:

... (one block per category 1–10)

## Top 3 Issues (Highest Leverage)
1. ...
2. ...
3. ...

## Recommended Next
- Run `content-strengthening-prompt.md` for: ...
- Run `content-gap-fix-prompt.md` for: ...
- Manual SERP review needed: ...

## Ready for commit?
YES / NO
```

## Stop Conditions

- If invented data is detected (review, rating, license, certification, year, count), mark STOP-SHIP and route to content-update or content-gap-fix to remove the invented claim before any further SEO work.
- If keyword stuffing or doorway-page risk is detected, mark FAIL and recommend `content-strengthening-prompt.md` before commit.
