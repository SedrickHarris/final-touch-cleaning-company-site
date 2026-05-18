# Content Strengthening Prompt

## Purpose

Improve weak, thin, generic, or under-optimized content on an existing page. Use after a page is built but feels shallow or generic, or after `seo-aeo-qa-prompt.md` flags content quality issues.

## When to Use

- The page has been live but the body copy reads as templated or boilerplate.
- A QA review flagged thin content, missing direct answers, weak FAQs, or generic differentiators.
- A SERP analysis showed competitors covering depth that this page doesn't.
- An owner adds new verified facts (e.g., a confirmed differentiator, a new service inclusion, a new neighborhood served) that should land in existing copy.

## Required Inputs

- Target page route and current content snapshot (paste the live copy or point to the file)
- Specific weaknesses identified (or paste a `seo-aeo-qa-prompt.md` report)
- Any newly verified facts the owner has supplied
- Primary keyword and target audience (so the strengthening stays on-intent)

## Strengthening Areas

Address each area only if it applies to the specific weakness:

### 1. Content Depth

- Replace generic descriptions with concrete specifics (what gets cleaned, in what sequence, with what attention to detail).
- Add a "what's included" subsection if missing.
- Add a "what's NOT included" or scope-clarification section if relevant.

### 2. Local Relevance

- Replace generic city-name swaps with content that references real local context (master-planned communities, downtown business district, growth corridors, climate-driven needs like dust accumulation).
- Add nearby-neighborhood mentions where natural.
- Avoid invented neighborhood facts; use generic public knowledge only.

### 3. Customer Pain Points

- Identify the 2–3 most common reasons a customer searches for this service or location.
- Address each pain point with a 1–2 sentence response in the body or in the FAQ.
- Examples: "the corners other crews skip", "deposit-ready move-out", "post-construction dust on every surface", "scheduling around tenant turnover".

### 4. Service Intent Specificity

- For a service page: name what's done step-by-step, what surfaces are touched, what tools or methods are used (in factual terms).
- For a location page: state who hires Final Touch in this area, what types of properties or businesses, what the local market looks like generically.

### 5. Direct-Answer Sections

- Tighten the opening paragraph to a 1–2 sentence direct answer in the first 100 words.
- Replace abstract intro phrasing ("we provide cleaning solutions") with concrete-direct ("Final Touch is a family-owned cleaning company serving Clark County, Nevada, focused on the small finishing details that make a space feel done").

### 6. FAQ Expansion

- Increase FAQ count from < 4 to at least 5 if the page warrants.
- Replace any vague FAQ answer ("yes, we do that") with a concise 40–80-word answer using the direct-answer format.
- Add at least 1 voice-search-friendly question phrasing ("How much does deep cleaning cost in Las Vegas?", "Do you clean after construction?").

### 7. Trust-Building Without Fake Claims

- Lean on verified family-owned, local, detail-focused positioning.
- Replace "Licensed & insured" / "5-star rated" / "Best of [city]" claims with verified language unless the owner has confirmed those specifics.
- Add a `TODO-VERIFY` comment where a stronger trust claim would help but is unconfirmed.

### 8. Stronger CTAs

- Audit every CTA on the page. Replace passive language ("Contact us") with action-led ("Request a Free Quote", "Get My Cleaning Estimate", "Call (702) 444-5077").
- Ensure exactly one primary CTA per view; phone is secondary.
- Confirm tap-to-call uses `tel:+17024445077`.

### 9. Internal Linking

- Add 2–4 internal links to relevant related services, locations, or neighborhood pages where they support user journey.
- Remove links that don't help (too many distracting links is a conversion drag).
- Use natural anchor text (avoid "click here", "learn more" — use the destination's name or topic).

## Output Format

Return a unified diff or a clearly-marked "before / after" block per section being changed. Don't rewrite the whole page if only 2–3 sections need work — focus the change.

For each change:
1. Section name
2. Reason for change (referencing the QA / weakness input)
3. Before (current copy)
4. After (improved copy)
5. Any TODOs created

## No-Fake-Data Rules

Same as `seo-aeo-content-generation-prompt.md`. Do not strengthen content by inventing a credential, a review, a year, a count, an award, or a guarantee. If the only way to improve a section is with a verified fact the owner hasn't supplied, surface it as a `TODO-VERIFY` and leave the section honest.

## Stop Conditions

- If the page's underlying strategy is wrong (wrong primary keyword, wrong audience, wrong page type), stop and recommend re-running `serp-analysis-prompt.md` and the page outline rather than patching weak content over a wrong foundation.
- If strengthening would require unverified claims to feel complete, stop and request owner-supplied facts before drafting.
