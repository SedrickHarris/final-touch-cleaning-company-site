# SEO/AEO Service Page Implementation Prompt

Implementation half (Prompt B) for individual service pages.

## When to Use

After `seo-aeo-service-page-research-prompt.md` has produced an approved plan.

## Routing

- Page type: Individual Service Page
- AI depth: Level 3 Core SEO/AEO, or Level 5 for core revenue services

## Implementation Steps

1. Create `app/services/<slug>/page.tsx` with the approved section structure.
2. Hero uses `HeroSection` with `formSlot={<QuoteFormPlaceholder />}` (split layout).
3. Related Services grid uses `ServiceCard` + `ServiceImagePlaceholder` per `docs/service-card-image-placeholder-standard.md`. No empty image slots.
4. Generate `Service` + `FAQPage` + `BreadcrumbList` JSON-LD from the visible content.
5. Confirm CTA classes use Tailwind built-in `text-white` on dark backgrounds.
6. Update `docs/site-os/implementation-log.md`.

## Customer-Facing Copy Rules

- No em dashes in customer-facing strings.
- No double hyphens.
- No fake claims.
- Direct-answer FAQ format.

## CTA Visibility Check

```
grep -o "Request a Free Quote\|Get My Cleaning Estimate\|Call Now\|View details" out/services/<slug>.html | sort | uniq -c
```

## Em Dash Check

```
grep -c "—" out/services/<slug>.html
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
- Any required image-placeholder card → must use `ServiceImagePlaceholder` (no empty card visuals).

## Do Not

- Do not commit until review.
- Do not deploy.
- Do not invent service inclusions, pricing, response times, or credentials.

---

Site OS Master — SEO/AEO Service Page Implementation Prompt v1.0
