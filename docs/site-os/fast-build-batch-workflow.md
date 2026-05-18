# Fast Build Batch Workflow

The default operating workflow for Site OS Master client website work. Streamlined for low-risk client polish so simple work ships fast. Multi-gate workflows are exception-only, reserved for true high-risk changes.

## Purpose

Fast Build Batch exists to reduce approval friction, protect profit margins, and prevent simple work from being routed through unnecessary multi-gate workflows.

Most weekly client website work after the initial build is low-risk polish — copy edits, wording cleanup, style updates, layout refinements, brand consistency passes, CTA tweaks, metadata updates, basic form embeds, basic consent placement, footer updates. Running each of these through a 4-message Gate 1 → Gate 2 → Gate 3 → commit cycle burns approval turns, slows delivery, delays deployment, and erodes the profitability of recurring client work without adding safety. Fast Build Batch collapses that cycle to a single inspect-implement-commit pass while preserving every existing R1–R3-5 safety discipline.

## Default Rule

**Fast mode is default. Multi-gate is exception-only.**

The default routing for any new batch of client website work is Fast Build Batch. Multi-gate (Gate 1 → Gate 2 → Gate 3) is selected only when the work explicitly matches the Multi-Gate criteria in § "Use Multi-Gate only for" below.

## Use Fast Build Batch For

- Copy changes
- Wording cleanup
- Style and brand polish
- Layout polish
- Component polish
- CTA changes
- Basic page edits
- SEO title and description updates
- Basic GHL form embed swaps
- Basic consent / link placement
- Contact detail updates
- Footer and header updates
- Simple redirects when the target is already known

## Fast Build Batch Process

1. Inspect exact files
2. Apply approved changes
3. Run `npm run lint`
4. Run `npm run type-check`
5. Run `npm run build`
6. Commit approved files only (explicit per-file `git add <path>` per `docs/file-scope-and-git-safety-policy.md` §5)
7. Deploy only when the batch is meaningful — defer the deploy decision until enough is batched to be worth shipping

The single commit approval at the end of the batch replaces the Gate 1 inspection approval, Gate 2 plan approval, and Gate 3 implementation approval that multi-gate would require.

## Fast Integration Checklist (basic forms)

Use when wiring a confirmed third-party form (for example, a GoHighLevel embed) into an existing placeholder. Not multi-gate.

1. Confirm the embed code or endpoint URL with the owner
2. Replace the placeholder
3. Confirm consent and link placement near the form
4. Run `npm run build`
5. Test render in browser
6. Test a real lead submission if possible
7. Commit and deploy

## Fast Compliance Checklist (basic legal / consent placement)

Use when adding owner-approved legal or consent text near a form, or linking the approved Privacy Policy and Terms. Not multi-gate.

1. Confirm the required text with the owner or legal counsel
2. Add the text near the form
3. Link the approved Privacy Policy and Terms
4. Run `npm run build`
5. Commit and deploy

## Use Multi-Gate Only For

Multi-gate (Gate 1 → Gate 2 → Gate 3) is reserved exclusively for high-risk work that touches any of:

- Real listing data
- `lib/data/listings.ts`
- Schema validity changes
- Custom backend or API logic
- Custom webhook logic
- Payment collection
- Authentication or user accounts
- Database changes
- Package or config file changes (`package.json`, `package-lock.json`, `wrangler.jsonc`, `open-next.config.ts`, `next.config.mjs`, `tailwind.config.ts`, `postcss.config.mjs`)
- Cloudflare or Wrangler config changes
- Major routing logic changes
- Unclear compliance risk
- Large deployment or release planning

If the work matches any item above, run full Gate 1 → Gate 2 → Gate 3. If the work does not match any item above, run Fast Build Batch.

## Anti-Waste Rules

- Do not create Gate 1, Gate 2, Gate 3 cycles for simple wording, style, or brand polish
- Do not split a proven repeated pattern into many small approval cycles
- Do not keep polishing wording when deployment, forms, listings, or launch blockers are pending
- Do not update `docs/prompt-master-status.md` for every small workflow patch
- Do not over-document work that is already validated by lint, type-check, and build

## Output Format for Fast Build Batch

A Fast Build Batch report produces exactly:

1. Files changed
2. Changes made
3. Verification results (lint, type-check, build)
4. Commit message
5. Deploy recommendation
6. Remaining real blockers only

No separate Gate 1 inspection report, no separate Gate 2 plan, no separate Gate 3 implementation report. The Fast Build Batch report is all three combined into one.

## Working Examples

- **702Xchange brand and style polish** → Fast Build Batch
- **702Xchange wording cleanup after the migration pattern is proven** → Fast Build Batch
- **GoHighLevel embed replacement with an owner-provided URL** → Fast Integration Checklist
- **Basic consent text placement near a form** → Fast Compliance Checklist
- **Seed listings into `lib/data/listings.ts`** → Multi-Gate
- **Schema changes** (`lib/schema/*`, JSON-LD field shape, structured-data validity) → Multi-Gate
- **Cloudflare or Wrangler config changes** → Multi-Gate

## Required Discipline (Applies Inside Every Mode)

The following remain in force inside Fast Build Batch, Fast Integration Checklist, Fast Compliance Checklist, and Multi-Gate:

- File-scope discipline per `docs/file-scope-and-git-safety-policy.md` — explicit per-file `git add <path>`, never `git add .` or `git add -A`
- No-fake-data discipline per `docs/no-fake-data-policy.md` — no invented data, schema must match visible content, no auto-pulls without owner consent
- Hard Stop List from `docs/standing-approval-rule-template.md` always applies
- Build-before-deploy per `checklists/deploy-workflow-checklist.md` if a deploy is approved separately
- Post-deploy verification per `checklists/post-deploy-production-verification-checklist.md` after every deploy

Speed comes from skipping unnecessary planning ceremony, not from skipping safety.

## Cross-references

- `docs/standing-approval-rule-template.md` — Hard Stop List that the routing rules above inherit unchanged
- `docs/file-scope-and-git-safety-policy.md` — explicit per-file `git add` discipline that applies inside every mode
- `docs/no-fake-data-policy.md` — fabrication-prevention rules that apply inside every mode
- `docs/new-client-startup-workflow.md` — first-time onboarding; initial client builds use Multi-Gate because pattern, data, and stack decisions are all new
- `docs/continue-existing-client-workflow.md` — resume workflow; the routing rules above determine Fast Build Batch vs. Multi-Gate per session
- `checklists/deploy-workflow-checklist.md` — required when a deploy is approved separately
- `checklists/post-deploy-production-verification-checklist.md` — required after every deploy

---

Site OS Master — Fast Build Batch Workflow v1.0
Status: Tier R4 Final Readiness Patch — implemented 2026-05-17
Reason for creation: prevent wasted time and money by making Fast Build Batch the default workflow for low-risk client website work and reserving multi-gate workflows only for true high-risk changes
