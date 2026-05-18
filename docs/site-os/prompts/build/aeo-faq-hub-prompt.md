# AEO FAQ Hub Prompt

Single-step prompt for building or rebuilding the `/faq` page as a comprehensive AEO answer hub. This is the highest AEO-density page on the site.

## Routing

- Page type: FAQ Hub
- Page value: High
- AI depth: Level 5 AEO Hub
- Prompt type: AEO FAQ Hub Prompt
- Per `docs/prompt-router-and-ai-depth-standard.md`

## Source-of-Truth Docs

- `docs/brand-guide.md`
- `docs/site-build-plan.md`
- `docs/site-os/final-touch-build-context.md` (or client equivalent)
- `docs/site-os/no-fake-data-policy.md`
- `docs/site-os/reference/seo-aeo-content-standards.md`
- Site OS Master:
  - `docs/prompt-router-and-ai-depth-standard.md`
  - `docs/keyword-research-and-aeo-depth-standard.md`
  - `docs/high-value-page-enforcement-standard.md`
  - `docs/pass-fail-page-quality-gates.md`

## Required Pre-Build Deliverables

### 1. Page Type Classification

```
- Page type: FAQ Hub
- Page value: High
- AI depth selected: Level 5 AEO Hub
- QA gate: docs/pass-fail-page-quality-gates.md
```

### 2. Question Clustering

Group questions into categories. Minimum 7–9 categories on the FAQ hub:

1. General Company Questions
2. Service Area Questions
3. Quote and Contact Questions
4. Cleaning Service Questions (or industry-appropriate equivalent)
5. Move-In, Move-Out, and Deep Cleaning (or equivalent service-cluster group)
6. Commercial, Office, Retail, and Janitorial (or equivalent)
7. Post-Construction Cleanup (or equivalent specialty cluster)
8. Scheduling and Recurring Cleaning
9. Trust, Safety, and Service Expectations

### 3. FAQ Count Plan

- Minimum 30 FAQs total across the hub
- 3–7 FAQs per category
- Total target: 35–45 FAQs for a typical service-business hub

### 4. Answer-First Format

Every Q/A pair must:

- Be phrased as a real customer question
- Answer in the first sentence
- Be 40–100 words (most answers)
- Use plain language, confident tone
- Reference verified facts only
- Avoid keyword stuffing
- Avoid claims requiring verification the owner hasn't supplied

### 5. Voice Search Coverage

At least 4–6 FAQs across the hub should use voice-search-friendly conversational phrasing (e.g., "Does Final Touch serve Henderson?" instead of "Henderson cleaning services").

### 6. FAQ Schema Plan

- `FAQPage` JSON-LD with `mainEntity` array generated from the same Q/A arrays as visible content
- Every `acceptedAnswer.text` matches its visible answer exactly
- **No schema-only FAQs.** If a Q/A isn't visible on the page, it must not appear in JSON-LD.

### 7. Entity Clarity

The page must repeatedly and naturally reference:

- Business name (e.g., "Final Touch Cleaning Company")
- Owners (e.g., "Scott & Nicole Maland") at least once
- Service area (county + cities) at least once
- Service categories

This builds entity authority for AI search.

### 8. Section Plan

- Hero (single-column, eyebrow + H1 + sub + 2 CTAs)
- One `<FAQSection>` per category, each with its own heading
- Final CTA section

### 9. Metadata Plan

- `title`: "FAQ | <Brand>"
- `description`: 140–160 chars, mentions categories covered + service area
- `canonical` set

### 10. Schema Plan

- `FAQPage` (combined across all categories)
- `BreadcrumbList`

## Customer-Facing Copy Rules

- **No em dashes** in any Q or A
- **No double hyphens**
- **No fake claims** (no review counts, ratings, license numbers, insurance details, response times, hours, emergency or same-day claims unless owner-verified)
- **No schema-only FAQs**
- **No keyword stuffing** in question phrasing

## Implementation Steps (One-Step Prompt)

1. Output the pre-build deliverables (1–10) at the top of the response
2. Implement `app/faq/page.tsx` with the approved structure
3. Generate combined `FAQPage` JSON-LD
4. Confirm visible Q/A exactly matches `acceptedAnswer.text`
5. Run validation
6. Run pass/fail gate

## CTA Visibility Check

```
grep -o "Request a Free Quote\|Call Now" out/faq.html | sort | uniq -c
```

## Em Dash Check

```
grep -c "—" out/faq.html
```

Must equal **0**.

## Validation Commands

```
npm run lint
npm run type-check
npm run build
```

## Pass/Fail Gate

Run `docs/pass-fail-page-quality-gates.md`. Required FAQ count for the hub is **≥ 30**.

## Stop Conditions

- Fewer than 30 FAQs across the categories → return FAIL with "FAQ count below minimum."
- Any schema-only Q/A → return FAIL.
- Any fake claim in an answer → return FAIL.

## Do Not

- Do not commit until review.
- Do not invent claims to fill question count.

---

Site OS Master — AEO FAQ Hub Prompt v1.0
