# Conversion Page Research Prompt

The research half (Prompt A) of the two-step workflow for conversion pages: `/free-quote`, `/contact`, booking pages, offer pages, conversion landing pages.

## When to Use

Before any conversion page build or rebuild. Pair with `conversion-page-implementation-prompt.md`.

## Routing

- Page type: Free Quote / Contact / Booking / Landing
- Page value: High
- AI depth: Level 4 Conversion
- Prompt type: Conversion Page Prompt
- Per `docs/prompt-router-and-ai-depth-standard.md`

## Source-of-Truth Docs

- `docs/brand-guide.md`
- `docs/site-build-plan.md`
- `docs/site-os/final-touch-build-context.md` (or client equivalent)
- `docs/site-os/no-fake-data-policy.md`
- `docs/site-os/reference/seo-aeo-content-standards.md`
- `docs/site-os/reference/service-business-design-standards.md`
- Site OS Master:
  - `docs/prompt-router-and-ai-depth-standard.md`
  - `docs/keyword-research-and-aeo-depth-standard.md`
  - `docs/high-value-page-enforcement-standard.md`
  - `docs/pass-fail-page-quality-gates.md`

## Required Pre-Build Deliverables

### 1. Page Type Classification

```
- Page type: <Free Quote / Contact / Booking / Landing>
- Page value: High
- Search intent: Transactional
- Conversion importance: High
- AI depth selected: Level 4 Conversion
- QA gate: docs/pass-fail-page-quality-gates.md
```

### 2. Keyword Map

- Conversion keywords (quote, estimate, schedule, book, call)
- Local modifiers (verified service area)
- Quote-process question keywords
- Form-status question keywords
- Objection-handling phrases

### 3. AEO FAQ Map

Minimum 7–10 FAQs. Coverage required:

- Quote intent (e.g., "How do I request a cleaning quote?")
- Form behavior (e.g., "Are the online forms active yet?")
- Pricing transparency (no fake prices)
- Service area affirmations
- Call alternative (e.g., "Can I call instead of using the form?")
- Process expectations (e.g., "What happens after I request a quote?")
- Service-uncertainty handling (e.g., "What should I do if I am not sure which service I need?")

### 4. Form Flow Plan

- Form fields (only those the live endpoint will accept; placeholder form is acceptable)
- Form status copy ("not yet active" disclosure required if endpoint is not wired)
- Phone and email fallback prominent
- Submit button label, color, hover state

### 5. Objection Handling Plan

- Common objections (cost, timing, scope uncertainty, form vs. phone preference)
- Where each objection is addressed in copy

### 6. Section Plan

Conversion page section structure:

- Split hero with form (per `docs/service-business-conversion-layout.md`)
- "What to include" guidance (5 bullets typical)
- "What you get" or "What happens next" section
- 3-step or 4-step process visualization
- AEO FAQ section
- (Skip final CTA section if the hero form already carries the page's primary conversion — avoid duplicate forms)

### 7. Metadata Plan

- Unique `title`, `description`, `canonical`
- Conversion intent in `description`
- Phone in `description` if it fits

### 8. Schema Plan

- `FAQPage` JSON-LD from visible FAQ
- `Organization` with `contactPoint` (especially on `/contact`)
- No `streetAddress` for service-area-only businesses

### 9. CTA Visibility Plan

- Primary CTA (call or quote button) uses Tailwind built-in `text-white` on `bg-brand-blue`
- Phone link uses `tel:+1...` with display text in `tabular-nums`
- Secondary CTA reachable and readable

## Customer-Facing Copy Rules

- No em dashes
- No double hyphens
- No fake response-time claims
- No fake hours unless verified
- No fake pricing
- Honest disclosure when form is placeholder

## Output Format

Return one structured markdown block with all 9 deliverables. No file changes.

## Pass/Fail Gate Reference

`docs/pass-fail-page-quality-gates.md` is the gate Prompt B runs.

---

Site OS Master — Conversion Page Research Prompt v1.0
