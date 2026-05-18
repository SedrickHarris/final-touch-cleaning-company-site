# High-Value Page QA Prompt

The QA prompt that runs `docs/pass-fail-page-quality-gates.md` against a built high-value page. Read-only; produces a structured PASS / FAIL report.

## When to Use

After any high-value page implementation, before commit. Pairs with each high-value implementation prompt's pass/fail gate requirement.

## Routing

- Mode: Read-only QA
- AI depth: Level 5 inspection on Level 5 builds; Level 3 inspection on Level 3 builds
- Per `docs/prompt-router-and-ai-depth-standard.md`

## Source-of-Truth Docs

- `docs/pass-fail-page-quality-gates.md` (the gate this prompt runs)
- `docs/prompt-router-and-ai-depth-standard.md`
- `docs/keyword-research-and-aeo-depth-standard.md`
- `docs/high-value-page-enforcement-standard.md`
- `docs/no-fake-data-policy.md`
- `docs/service-business-conversion-layout.md`
- `docs/service-card-image-placeholder-standard.md`

## Required Inputs

- Target route(s) being QA'd
- Page type and AI depth that was used
- The implementation report from the build prompt
- Built static output (`out/<route>.html`) available

## QA Pass/Fail Gate

Run every checkbox in `docs/pass-fail-page-quality-gates.md`:

### Required PASS/FAIL Gate (24 items)

- [ ] Correct page-type prompt was used
- [ ] Correct AI depth level was selected
- [ ] Keyword types were identified
- [ ] Keyword map was created
- [ ] AEO FAQ research was completed
- [ ] Content analysis was completed
- [ ] Content gaps were identified
- [ ] Content gaps were fixed
- [ ] Required section structure exists
- [ ] Required FAQ count is met
- [ ] FAQ schema matches visible FAQ text exactly
- [ ] Metadata is unique and optimized
- [ ] Internal links are present (3+ outbound)
- [ ] CTA text is visible in source AND in built HTML
- [ ] No customer-facing em dashes remain
- [ ] No customer-facing double hyphens remain
- [ ] No fake claims were added
- [ ] No fake review/rating/testimonial schema added
- [ ] No fake `LocalBusiness` street address on service-area-only businesses
- [ ] `npm run lint` passed
- [ ] `npm run type-check` passed
- [ ] `npm run build` passed
- [ ] Static export files confirmed when applicable

### Visual CTA Gate (6 items)

- [ ] Button labels exist in source
- [ ] Button labels exist in built HTML
- [ ] Text color contrasts with background
- [ ] Hover states preserve readability
- [ ] Global anchor styles do not override CTA text
- [ ] Mobile menu CTAs remain readable

### Copy Cleanup Gate (7 items)

- [ ] No em dashes in customer-facing strings
- [ ] No double hyphens in customer-facing strings
- [ ] No fake claims
- [ ] No placeholder claims shown as final
- [ ] No schema-only FAQs
- [ ] No unsupported service/location claims
- [ ] No hidden text

### Schema Quality Gate (7 items)

- [ ] `FAQPage` JSON-LD generated from same source as visible FAQ
- [ ] Every `acceptedAnswer.text` matches visible text
- [ ] `BreadcrumbList` reflects visible breadcrumb (if any)
- [ ] `LocalBusiness` / `Organization` omits `streetAddress` for service-area-only
- [ ] No `AggregateRating` / `Review` schema without verified data
- [ ] No `Offer` with hardcoded price unless owner-confirmed
- [ ] No `HowTo` unless visible steps match exactly

## Output Format

```
PASS / FAIL Gate Result
Status: PASS | FAIL
Page: <route>
Page type: <type>
AI depth: <Level 1–6>

Required gate (24 items): <count>/24 checked
Visual CTA gate (6 items): <count>/6 checked
Copy cleanup gate (7 items): <count>/7 checked
Schema quality gate (7 items): <count>/7 checked

Failures (if any):
- <item> — <reason> — <where to fix>

Required fixes before PASS:
- <ordered list of remediations>
```

## Verification Commands

```
# Em dash check (customer-facing rendered HTML)
grep -c "—" out/<route>.html

# Double hyphen check
grep " -- " out/<route>.html

# CTA label check
grep -o "Request a Free Quote\|Get My Cleaning Estimate\|Call Now\|View details" out/<route>.html | sort | uniq -c

# Validation
npm run lint
npm run type-check
npm run build
```

## Stop Conditions

- If any item fails, return FAIL with the specific list. Do not approve commit.
- If a fake-data item is detected, return STOP-SHIP regardless of other scores. Remove the invented content before any further work.

## Do Not

- Do not modify files during QA. This prompt is read-only.
- Do not approve commit on FAIL.

---

Site OS Master — High-Value Page QA Prompt v1.0
