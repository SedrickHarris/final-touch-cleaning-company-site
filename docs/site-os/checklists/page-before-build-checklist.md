# Page Before-Build Checklist

Use this checklist before sending a page to a Claude Code build prompt or starting copy generation. Adapted from the Site OS Master canonical checklist, slimmed for Fast Build Batch flow.

## 1. Source Docs Reviewed

- [ ] `docs/brand-guide.md` — colors, type, voice
- [ ] `docs/site-build-plan.md` — page architecture and tier
- [ ] `docs/site-os/final-touch-build-context.md` — owner-verified facts
- [ ] `docs/site-os/no-fake-data-policy.md` — what cannot be invented
- [ ] `docs/site-os/reference/seo-aeo-content-standards.md` — content rules
- [ ] `docs/site-os/reference/service-business-design-standards.md` — design rules

## 2. Page Type Confirmed

- [ ] Homepage / Service / Location / Neighborhood / Service+City / Landing / Hub / Brand / Legal
- [ ] Tier (1 brand / 2 service / 3 location / 4 service+city / 5+ specialized)

## 3. Route Confirmed

- [ ] Slug matches `docs/site-build-plan.md` URL slug rules
- [ ] No duplicate route exists
- [ ] Parent route exists (for nested pages) or is being built in the same batch

## 4. Page Goal Confirmed

- [ ] Primary intent stated in one sentence
- [ ] Primary CTA chosen (from `CTAS` in `lib/constants/site.ts`)
- [ ] Secondary CTA (typically tap-to-call) chosen
- [ ] Conversion goal: lead form / phone call / next-page navigation

## 5. SEO Intent Confirmed

- [ ] Primary keyword selected
- [ ] 2–4 secondary keywords selected
- [ ] Target audience identified (homeowner / renter / property manager / contractor / business owner / etc.)
- [ ] Local intent: applicable / not applicable
- [ ] Target location (if local) drawn from `lib/constants/site.ts`

## 6. AEO Readiness Planned

- [ ] Direct-answer paragraph drafted or planned
- [ ] 4–6 FAQs planned (or 5–8 for hub / homepage)
- [ ] At least 1 voice-search-friendly FAQ phrasing
- [ ] Citation-worthy entity statements identified

## 7. Internal Links Planned

- [ ] Outbound links list (3–6) ready
- [ ] Link targets all resolve OR are being built in the same batch
- [ ] Anchor text is natural (no "click here")
- [ ] Page won't be an orphan (at least 1 inbound link planned)

## 8. CTA / Form Plan Confirmed

- [ ] If conversion-focused: two-column hero with form per `service-business-design-standards.md`
- [ ] If not conversion-focused: single-column hero, final CTA section without form
- [ ] No duplicate forms on the same page
- [ ] Form placement: hero / mid-page / final-CTA (pick one primary)

## 9. Component Reuse Plan

- [ ] Existing shared components identified (`HeroSection`, `CTASection`, `ServiceCard`, `FAQSection`, etc.)
- [ ] New components needed: NONE / `<list>`
- [ ] If new components needed, they're justified (reusable across other pages) — not single-use

## 10. Schema Plan

- [ ] `BreadcrumbList` planned where hierarchy exists
- [ ] `FAQPage` planned if FAQ section exists (visible text exact-match required)
- [ ] `LocalBusiness` planned where applicable (NO street address — service-area-only)
- [ ] `Service` planned where applicable
- [ ] `Organization` / `Person` planned (Person only with consent)
- [ ] `AggregateRating` / `Review` — OMIT (no verified reviews yet)
- [ ] `HowTo` — only if visible step content exists

## 11. No-Fake-Data Risks Checked

- [ ] No section requires unverified reviews, ratings, testimonials, license numbers, insurance details, awards, certifications, years-in-business, pricing claims, satisfaction guarantees, customer photos, team photos, project photos, before/after results, same-day / 24/7 / emergency availability
- [ ] Any gap that would benefit from an unverified claim has a `TODO-VERIFY` plan

## 12. Final Decision

- [ ] **Ready for build prompt** — proceed to `docs/site-os/prompts/build/batch-N-...prompt.md`
- [ ] **Needs minor refinement** — fix specific gap before sending to build
- [ ] **Needs owner input** — pause and request verified data before drafting
- [ ] **Not ready** — significant strategy work needed first (run `serp-analysis-prompt.md`)
