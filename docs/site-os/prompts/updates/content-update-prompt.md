# Content Update Prompt

## Purpose

Safely update existing pages, components, or constants when verified business details change — phone, email, service area, owner names, primary CTAs, offers, legal copy, or service additions/removals. Use when the change is data-driven, not design-driven.

## When to Use

- Owner supplies a verified phone change, email change, or new service area addition.
- A service is added, renamed, or retired.
- A CTA label or offer phrasing changes ("Free Quote" → "Get a Free Estimate").
- A new owner-verified trust signal lands (license number confirmed, insurance details confirmed, etc.) and should appear on relevant pages.
- Legal copy is updated (Privacy Policy, Terms of Service, Accessibility Statement).

## Required Inputs

- The specific change (before / after)
- Source of the verified data (owner email / call / signed brief — for the audit trail in the implementation log)
- Pages affected (or "let me identify them based on the change")
- Whether the change is launch-critical (immediate) or batched (next deploy)

## Workflow

Fast Build Batch.

## Implementation Rules

1. **Inspect source docs first.** Always read:
   - `lib/constants/site.ts` — most data lives here
   - `lib/constants/routes.ts` — service / route data
   - `lib/constants/seo.ts` — metadata defaults
   - `docs/brand-guide.md` — verified differentiators and voice
   - `docs/site-os/final-touch-build-context.md` — owner-verified facts
2. **Update at the source of truth first.** If phone changes, update `lib/constants/site.ts` — the change cascades to every component that reads from it. Don't hardcode the new value in 30 individual pages.
3. **Identify affected pages programmatically when possible.** Search for the old value across the repo before patching to confirm scope.
4. **Update only what changed.** No broad rewrites. No "while we're in here" improvements.
5. **No fake data.** A "verified" detail must actually be verified — owner signoff in writing, not assumption.
6. **Update the implementation log.**

## Typical Update Patterns

### Phone change

1. Update `SITE.phone.display` and `SITE.phone.href` in `lib/constants/site.ts`.
2. Grep the repo for the old display value to confirm no hardcoded copies remain.
3. Run validation.

### Email change

1. Update `SITE.email.display` and `SITE.email.href` in `lib/constants/site.ts`.
2. Grep / verify.

### Service area expansion

1. Add the new city to `SITE.serviceArea.cities` in `lib/constants/site.ts`.
2. Consider whether new location pages (`/locations/<new-city>`) should be added — that's a Batch 4 follow-up, not part of this update.
3. Verify the footer's service-area list shows the new city automatically.

### Service rename

1. Update the service entry in `SERVICES` in `lib/constants/routes.ts` (name + shortDescription; the slug stays the same to preserve the URL unless the user explicitly requests a URL change with 301 redirect plan).
2. If the slug changes, plan a redirect from old to new and update internal links across the site.

### CTA label change

1. Update `CTAS` in `lib/constants/site.ts`.
2. Confirm the new label fits the existing button width (longer labels may need a per-page check at narrower viewports).

### Legal copy update

1. Update the relevant page (`/privacy-policy`, `/terms-of-service`, `/accessibility-statement`, `/cookie-policy`) directly.
2. Flag with a timestamp comment: `{/* Updated YYYY-MM-DD per [source]. */}`

### Trust signal becoming verified

When the owner confirms a previously TODO-VERIFY trust signal (e.g., "Licensed & insured" with license number):

1. Grep for the `TODO-VERIFY` comment for that signal.
2. Add the verified claim to the appropriate place (TrustBar item, About page, legal page).
3. Remove the `TODO-VERIFY` comment.
4. Note the source of verification in the implementation log.
5. Consider whether `AggregateRating` / `Review` schema is now appropriate (only if visible review content also appears).

## File-Touch Scope

Most data updates touch:

- `lib/constants/site.ts` (NAP, owners, service area, CTAs)
- `lib/constants/routes.ts` (services data)
- `lib/constants/seo.ts` (metadata defaults)

Page files touch only when:
- A specific page's copy includes the changed value as inline content (not pulled from constants)
- A new section needs to be added that didn't exist (e.g., a trust block for a newly verified license)

Out of scope for this prompt:
- Layout or design changes (use a design batch)
- New page builds (use Batch 2–6 prompts)
- Bulk content rewrites (use `content-strengthening-prompt.md`)

## Validation Commands

```
npm run lint
npm run type-check
npm run build
```

Plus a manual `npm run dev` smoke test for the affected surfaces (header phone, footer, contact page, etc.).

## Implementation Log Update

Append a `### Content Update — <date> — <change summary>` entry to `docs/site-os/implementation-log.md` with:

- Change (before / after)
- Source of verified data
- Files changed
- Pages affected (if not obvious from files)
- Validation results
- Any follow-up batches recommended (e.g., "add new city location page in next batch")

## Output Format

Return a markdown report:

1. Change applied
2. Source of verified data
3. Files changed (with diffs or before/after)
4. Pages affected
5. Validation results
6. No-fake-data confirmation (this was an owner-verified update, not an invention)
7. Follow-up recommended (if any)
8. Git status
9. Ready for review?

## Stop Conditions

- If the "verified detail" is actually unverified, stop and request owner confirmation in writing before updating.
- If the change has cascading implications (e.g., service rename affects 30+ pages or a Tier 4 matrix), stop and recommend a dedicated batch rather than a quick update.
