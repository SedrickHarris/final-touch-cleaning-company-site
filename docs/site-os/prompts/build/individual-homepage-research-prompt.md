# Individual Homepage Research Prompt

A Beyond-Elite homepage research and planning prompt (Prompt A of the two-step high-value workflow). Outputs a plan only. No file changes.

## When to Use

Before any homepage build or rebuild. Pair with `individual-homepage-implementation-prompt.md` as Prompt B.

## Routing

- Page type: **Homepage**
- Page value: **High**
- AI depth: **Level 5 Beyond-Elite**
- Per `docs/prompt-router-and-ai-depth-standard.md` — do not use a generic batch prompt for the homepage without explicit approval.

## Source-of-Truth Docs (Required Reads)

- `docs/brand-guide.md` (client repo)
- `docs/site-build-plan.md` (client repo)
- `docs/site-os/final-touch-build-context.md` (or equivalent `<client>-build-context.md`)
- `docs/site-os/no-fake-data-policy.md`
- `docs/site-os/reference/seo-aeo-content-standards.md`
- `docs/site-os/reference/service-business-design-standards.md`
- `docs/site-os/implementation-log.md`
- Site OS Master cross-references:
  - `docs/prompt-router-and-ai-depth-standard.md`
  - `docs/keyword-research-and-aeo-depth-standard.md`
  - `docs/high-value-page-enforcement-standard.md`
  - `docs/pass-fail-page-quality-gates.md`
  - `docs/service-business-conversion-layout.md`
  - `docs/service-card-image-placeholder-standard.md`

## Required Pre-Build Deliverables

Produce all of the following. No file changes during this prompt.

### 1. Page Type Classification

```
- Page type: Homepage
- Page value: High
- Search intent: <transactional / mixed / informational>
- Conversion importance: High
- SEO/AEO importance: High
- Compliance / risk level: <none/low/medium/high>
- Prompt type selected: Individual Homepage Beyond-Elite Prompt
- AI depth selected: Level 5 Beyond-Elite
- QA gate: docs/pass-fail-page-quality-gates.md
```

### 2. Keyword Type Map

Per `docs/keyword-research-and-aeo-depth-standard.md`:

- Primary keywords
- Secondary keywords
- Long-tail keywords
- Local keywords (verified service area only)
- AEO question keywords
- Transactional keywords
- Informational keywords
- Commercial comparison keywords
- Entity / semantic keywords
- Internal-link anchor targets

### 3. AEO FAQ Map

- Question clusters (4–6 clusters typical for the homepage)
- 8–12 individual question / answer pairs
- Each Q in real customer phrasing
- Each A in direct-answer format (answer in sentence 1)
- All answers ≤ 100 words

### 4. Content Analysis (Current Homepage)

- What sections currently exist
- What's working
- What feels thin
- What's missing
- Any banned copy patterns (em dashes, double hyphens, fake claims) currently present

### 5. Content Gap List

- Prioritized list of gaps to close
- Each gap mapped to a specific section or copy block

### 6. Implementation Plan

Required homepage section structure:

- Split hero with form (per `docs/service-business-conversion-layout.md`)
- Trust / value bar
- Services preview (with service card image placeholders per `docs/service-card-image-placeholder-standard.md`)
- Who we help
- Why choose us
- Quote process steps
- Service area section
- AEO FAQ section
- Final CTA

For each section, name the copy lead, the call to action, and the components reused.

### 7. Metadata Plan

- Unique `title` (50–60 chars, includes primary keyword + brand)
- Unique `description` (140–160 chars, includes primary keyword + phone + verified differentiator)
- `alternates.canonical` set
- `openGraph` block populated
- No `viewport` overrides beyond default

### 8. Schema Plan

- `FAQPage` JSON-LD generated from the same visible-FAQ array (no schema-only items)
- `Organization` or `LocalBusiness` JSON-LD that omits `streetAddress` for service-area-only businesses
- No `AggregateRating` / `Review` schema unless owner has supplied verified review data
- `BreadcrumbList` only if visible breadcrumb exists

### 9. Internal Link Plan

3–8 outbound internal links, with named anchor text and destination route.

### 10. CTA Visibility Check Plan

- Source CTAs must use Tailwind built-in color tokens (`text-white`, `border-white`) on dark backgrounds to avoid `@theme` cascade quirks
- Plan a built-HTML grep verification step for every CTA label

### 11. QA Plan

Pre-build deliverable approval. Then implementation, then the post-build pass/fail gate from `docs/pass-fail-page-quality-gates.md`.

## Customer-Facing Copy Rules (Applied at Implementation)

- **No em dashes** in any customer-facing string. Use comma, colon, semicolon, period, or rephrase.
- **No double hyphens** in any customer-facing string.
- **No fake claims**: no reviews, ratings, testimonials, license numbers, insurance details, awards, certifications, years in business, before/after results, customer / team / project photos, pricing guarantees, emergency claims, same-day claims, 24/7 claims, or unsupported trust signals.
- **No keyword stuffing**: primary keyword 2–4× in body, secondaries 1–2× each.
- **No doorway content**: no city-name-swap copy.

## Stop Conditions

Stop and surface if:

- The keyword map is incomplete (missing one of the 10 required types)
- The AEO FAQ map has fewer than 8 items
- The content gap list is empty (no real gaps named)
- The implementation plan doesn't cover the 9 required sections
- A fake claim would be required to "complete" a section — leave the section honest and surface the gap as `TODO-VERIFY`

## Output Format

Return one structured markdown block containing all 11 deliverables. Do not modify files.

## Pass/Fail Gate Reference

`docs/pass-fail-page-quality-gates.md` is the gate Prompt B will run after implementation. Plan toward it.

---

Site OS Master — Individual Homepage Research Prompt v1.0
