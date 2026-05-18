# Individual Homepage Implementation Prompt

The implementation half (Prompt B) of the two-step Beyond-Elite homepage workflow. Implements the approved plan from `individual-homepage-research-prompt.md`.

## When to Use

After `individual-homepage-research-prompt.md` has produced an approved plan. This prompt writes code.

## Routing

- Page type: Homepage
- AI depth: Level 5 Beyond-Elite
- Prompt type: Individual Homepage Implementation Prompt
- Per `docs/prompt-router-and-ai-depth-standard.md`

## Source-of-Truth Docs

Same as the research prompt. Plus the approved plan output from Prompt A.

## Implementation Steps

1. Implement the approved sections in `app/page.tsx`:
   - Split hero with form (uses `HeroSection` with `formSlot={<QuoteFormPlaceholder />}`)
   - TrustBar with verified items only
   - Services preview (reuses `ServicesPreview` + `ServiceCard` + `ServiceImagePlaceholder`)
   - Who we help
   - Why choose us
   - Quote process steps
   - Service area section
   - FAQ section (matches Prompt A AEO FAQ map exactly)
   - Final CTA
2. Confirm CTA classes use Tailwind built-in color tokens (`text-white`, `border-white`) on dark backgrounds.
3. Generate `FAQPage` JSON-LD from the same array as the visible FAQ.
4. Add `Organization` JSON-LD if applicable. Omit `streetAddress` for service-area-only businesses.
5. Update `docs/site-os/implementation-log.md` with the build entry.

## Customer-Facing Copy Rules (Hard Enforce)

- No em dashes in any customer-facing string (`—`, U+2014).
- No double hyphens in any customer-facing string.
- No fake claims (full list in `docs/no-fake-data-policy.md`).
- Direct-answer FAQ format (sentence 1 answers the question).

## Internal Link Requirements

- 3–8 outbound internal links per the approved plan
- All links resolve (or are `TODO-BATCH-N` flagged forward links to known future routes)
- Natural anchor text

## CTA Visibility Checks

After build:

```
grep -o "Request a Free Quote\|Get My Cleaning Estimate\|Call Now\|View Services\|View details" out/index.html | sort | uniq -c
```

Every expected CTA label must appear with a count ≥ 1 in the built HTML.

## Em Dash Check

After build:

```
grep -c "—" out/index.html out/*.html
```

Every value must be **0** for customer-facing pages.

## Validation Commands

```
npm run lint
npm run type-check
npm run build
```

All three must pass clean.

## Pass/Fail Gate

Run `docs/pass-fail-page-quality-gates.md` at the end. Return PASS only if every required item checks. Otherwise return FAIL with the specific list to fix.

## Implementation Log Entry

Append to `docs/site-os/implementation-log.md`:

- Routing (page type, page value, AI depth, prompt selected)
- Keyword map summary
- AEO FAQ count and category groups
- Content gaps fixed
- Validation results
- Pass/fail gate result
- Remaining TODOs

## Stop Conditions

- No approved plan from Prompt A → stop, request the plan first.
- Any pre-build deliverable missing → return INCOMPLETE.
- Any pass/fail gate item fails → return FAIL with the specific items.

## Do Not

- Do not commit until the report is approved.
- Do not deploy.
- Do not install new packages unless explicitly approved.
- Do not invent claims to fill sections.

---

Site OS Master — Individual Homepage Implementation Prompt v1.0
