# Content Gap Fix Prompt

## Purpose

Apply targeted fixes to a page after `aeo-gap-analysis-prompt.md` or `seo-aeo-qa-prompt.md` has flagged specific gaps. Scope is limited to the flagged items — no broad rewrites, no scope creep, no design changes.

## When to Use

- After running an AEO gap analysis that produced a structured fix list.
- After QA flagged content-specific issues (missing direct answer, weak FAQ, etc.).
- After owner supplies a newly verified fact that should land in an existing section.

## Required Inputs

- The prior analysis or QA report (paste the full gap list with "Recommended fix" lines)
- Target page file path (e.g., `app/services/deep-cleaning/page.tsx`)
- Any newly verified facts the owner has supplied
- Explicit list of gaps to fix in this pass (the user picks which ones; this prompt does NOT silently expand scope)

## Workflow

Fast Build Batch. Reference `docs/site-os/fast-build-batch-workflow.md`.

## Implementation Rules

1. **Touch only the identified gaps.** If the analysis flagged 3 gaps and you fix the 3 + "also improve X while we're here," that's scope creep. Don't.
2. **Preserve the design system.** Do not change component imports, hero layout, CTA structure, brand tokens, or motion behavior. This is a content patch, not a design pass.
3. **Preserve metadata** unless the gap explicitly requires a meta-title or meta-description update (and even then, surface the change in the report).
4. **Strengthen SEO/AEO** within each fixed gap — direct-answer format for new FAQ items, natural keyword placement in new body copy, citation-friendly factual sentences.
5. **No-fake-data discipline applies.** If a gap can only be closed by inventing a credential, review, or guarantee, leave the gap open and surface a `TODO-VERIFY` instead.
6. **Run validation after the patch.**

## File-Touch Scope

Typically the fix touches only `app/<route>/page.tsx`. Acceptable to also touch:
- `lib/constants/routes.ts` — only if a service `shortDescription` or similar shared field is being updated
- `components/shared/<Component>.tsx` — only if a presentational tweak is required for the fix to land cleanly

Out of scope:
- Global config files (`tailwind.config.*`, `next.config.*`, `package.json`)
- Layout files (`app/layout.tsx`)
- Hero / CTA / Section / Form components — these are design primitives; changes to them require a design-batch prompt, not a content patch

## Validation Commands

```
npm run lint
npm run type-check
npm run build
```

All three must pass clean. If the fix is content-only and zero code files were touched (e.g., only an MD/MDX file changed), the build step can be skipped — but lint/type-check still run.

## Implementation Log Update

Append a short entry to `docs/site-os/implementation-log.md` under a `### Content Gap Fix — <date> — <page>` heading with:

- Files changed
- Gaps fixed (cross-referenced to the source analysis)
- Validation results
- Any TODOs left open
- Whether ready for review

## Output Format

Return a markdown report with these sections:

1. Page targeted (route + file path)
2. Gaps fixed (with line-level diff or before/after snippets)
3. Gaps left open (with reason)
4. New TODOs created (typically TODO-VERIFY for owner-supplied facts)
5. Validation results
6. No-fake-data confirmation
7. Git status
8. Ready for review?

## Stop Conditions

- If the gap list is empty or vague, stop and run `aeo-gap-analysis-prompt.md` or `seo-aeo-qa-prompt.md` first.
- If closing a gap would require unverified data, stop, surface the missing data, and leave the gap open.
- If the requested fix would change design primitives (hero layout, CTA structure, motion behavior), stop and redirect to a design-batch prompt — that's outside this prompt's scope.
