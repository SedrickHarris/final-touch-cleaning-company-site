# Conversion Page Implementation Prompt

Implementation half (Prompt B) for conversion pages: `/free-quote`, `/contact`, booking, offer, landing. Implements the approved plan from `conversion-page-research-prompt.md`.

## When to Use

After the conversion research prompt has produced an approved plan.

## Routing

- Page type: Conversion (Free Quote / Contact / Booking / Landing)
- AI depth: Level 4 Conversion

## Source-of-Truth Docs

Same as the research prompt, plus the approved plan from Prompt A.

## Implementation Steps

1. Implement section structure:
   - Split hero with `HeroSection` (`formSlot={<QuoteFormPlaceholder />}` or live form)
   - "What to include" bullet section
   - "What happens next" or numbered process section
   - FAQ section (matches Prompt A FAQ map)
2. Update FAQPage JSON-LD to match visible FAQ exactly.
3. On `/contact`, include `Organization` with `contactPoint` (no street address for service-area-only).
4. Confirm CTA classes use Tailwind built-in `text-white` / `bg-white` / `border-white` on dark backgrounds.
5. Update `docs/site-os/implementation-log.md` with the build entry.

## Customer-Facing Copy Rules

- No em dashes in customer-facing strings.
- No double hyphens.
- No fake claims (reviews, ratings, license, insurance, hours, response times, emergency, 24/7, pricing guarantees).
- Honest form-status disclosure if the form is placeholder.

## CTA Visibility Check

After build, grep the built HTML:

```
grep -o "Request a Free Quote\|Get My Cleaning Estimate\|Call Now\|Email us" out/<route>.html | sort | uniq -c
```

Every expected label must appear with a count ≥ 1.

## Em Dash Check

```
grep -c "—" out/<route>.html
```

Must equal **0**.

## Validation Commands

```
npm run lint
npm run type-check
npm run build
```

All three must pass clean.

## Pass/Fail Gate

Run `docs/pass-fail-page-quality-gates.md`. Return PASS only if every required item checks.

## Stop Conditions

- No approved plan → stop, request the plan.
- Form endpoint must not be invented. Use `QuoteFormPlaceholder` (or equivalent) until owner confirms the endpoint.

## Do Not

- Do not commit until review.
- Do not deploy.

---

Site OS Master — Conversion Page Implementation Prompt v1.0
