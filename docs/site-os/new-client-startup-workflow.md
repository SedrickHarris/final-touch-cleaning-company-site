# New-Client Startup Workflow

A standalone workflow orchestrator for starting a brand-new Site OS Master client website build from scratch. References the canonical intake, brief, mode-selection, scaffolding, policy, build, and deploy docs without duplicating them. Applies regardless of stack, vertical, or workflow mode.

## Purpose

Orchestrate the end-to-end client-onboarding journey so a new build can begin without re-deriving the sequence each time. This doc is the universal entry point that other Site OS Master startup docs cross-reference. It walks a new client build from prerequisites through deploy in six numbered phases (A–F), referencing the canonical doc at every step rather than duplicating its content.

## When to Use

- A new client has signed and the build is ready to begin
- An internal greenfield project is starting and Site OS Master will manage it
- A recovered or restarted project where prior repo state is unknown or unusable and a clean Site OS Master onboarding is the chosen path
- A migration from another agency or platform where a fresh Site OS Master build is the chosen path
- A contractor or teammate is being onboarded to a new client engagement and needs a single discoverable startup sequence

## What This Doc Is and Is Not

**Is:**

- A client-onboarding workflow (intake → repo scaffold → policy invocation → strategy → build → deploy)
- A reference orchestrator that points at the canonical existing docs
- A consistent, predictable startup sequence repeatable across clients

**Is not:**

- A page-build workflow — see `docs/page-build-workflow.md`
- A continue-existing-client workflow — deferred to Tier R3-5
- A replacement for any existing doc (intake gate, project brief, mode guide, scaffold doc, R2/R3-N policies, deploy/post-deploy checklists)
- A stack tutorial — the default stack is named, but other stacks add their own deploy subsection per `checklists/deploy-workflow-checklist.md` §5

## Phase A — Pre-Build

### 1. Confirm prerequisites

Before invoking the intake gate, confirm:

- Project owner is reachable for intake (synchronous or async)
- Cloudflare account exists if the default reference stack will be used
- GitHub access is confirmed for both the project owner and the build operator
- Domain decision is available (production domain confirmed or pending)
- Local environment is ready: Node, npm, Git, PowerShell or Bash, VS Code or equivalent editor
- Working filesystem path convention is established (default: `C:\Users\Welcome\Desktop\client-sites\<client>\` or platform equivalent)

Skip the rest of this workflow until these are present or explicitly deferred.

### 2. Run the Client Intake Gate

Invoke `efficiency-governor/client-intake-gate.md` v1.2. Mark every field CONFIRMED, APPROVED PLACEHOLDER, or MISSING — FLAGGED per the three-status framework defined there. Resolve build blockers before continuing; launch blockers may carry forward as TODOs.

The gate is the hard readiness check. The project brief (step 3) is a separate artifact.

### 3. Capture the project brief

Fill out `docs/project-brief-template.md`. The brief is a structured form that captures business identity, primary and secondary offers, target audience, pain points, CTAs, service areas, brand voice, website goals, and main competitors. It informs every downstream prompt but does not replace the intake gate.

### 4. Select the project type

Use the Project Type selector at the top of `efficiency-governor/client-intake-gate.md`. Common types:

- **Local service business** — the intake gate applies fully
- **Directory or marketplace** — directory intake supplement applies
- **SaaS or product site** — SaaS intake supplement applies
- **Landing page or funnel** — simplified intake applies
- **Other** — describe and assemble custom intake

The project type drives which page types apply (homepage, service, location, category, directory, business profile, blog, landing) and which workflow mode tier is appropriate per page.

### 5. Choose the workflow mode

Use `docs/site-os-prompt-operating-guide.md` to choose among Fast Mode, Core Mode, Beyond-Elite Mode, and Full Competitive Build Mode. The guide lists best-fit page types, prompt sequences, success standards, and risks per mode. The mode may differ per page.

### 6. Decide Phase 1 launch pages

Decide which pages will ship in the Phase 1 launch. The list becomes the page-list inventory stored at `docs/site-os/inputs/page-list.md` in the client repo (Phase B step 12). The list informs build sequencing, Prompt 05 build briefs, and Prompt 10 client data collection.

## Phase B — Repo Scaffold

### 7. Decide the stack

The default reference stack is Next.js 14 + `@opennextjs/cloudflare` + Cloudflare Workers, as proven on the 702Xchange client repo (see Working Example below). Other stacks are supported. Per `checklists/deploy-workflow-checklist.md` §5, other stacks add their own deploy subsection as they are first used; the rest of this workflow is stack-agnostic.

### 8. Create the client repo at the conventional path

Create the client repo at `C:\Users\Welcome\Desktop\client-sites\<client>\` (or platform equivalent). The path convention enables consistent chained-`cd` commands and prevents cross-repo confusion. Per `docs/file-scope-and-git-safety-policy.md` §2 Correct Repo Discipline, never deploy from Site OS Master and never modify a different client repo from inside the current client-build session.

### 9. `git init` and create the GitHub remote

PowerShell (Windows):

```powershell
cd "C:\Users\Welcome\Desktop\client-sites\<client>"; git init
cd "C:\Users\Welcome\Desktop\client-sites\<client>"; git remote add origin <github-remote-url>
```

Bash:

```bash
cd "<client repo>" && git init && git remote add origin <github-remote-url>
```

Credential setup is out of scope for this doc. Use the GitHub CLI, SSH key, or PAT per the team's convention. Per `docs/file-scope-and-git-safety-policy.md` §3, every command uses the chained-`cd` pattern on Windows because the shell harness resets cwd between invocations.

### 10. Scaffold `docs/site-os/{inputs, outputs, qa, changelog}`

Use the scaffolding commands in `docs/client-repo-doc-structure.md` § Scaffolding — PowerShell or § Scaffolding — Bash. The scaffolding creates the four standard subfolders with `.gitkeep` files so the structure is tracked from day one.

### 11. Create `docs/site-os/README.md`

Paste the sample README block from `docs/client-repo-doc-structure.md` § Sample docs/site-os/README.md Content into the new client repo's `docs/site-os/README.md`. The README establishes the convention from day one and tells future operators what each subfolder is for.

### 12. Create `docs/site-os/inputs/page-list.md`

Create the canonical page-list inventory. A page-list captures: route inventory, page type per route, launch tier (MVP / deferred / post-launch), primary keyword and user intent, current status, and notes. The page-list is the source of truth that Prompts 01 through 05, Prompt 10, and Prompt 20 reference as the authoritative page inventory and build-sequencing input.

**Working Example Callout.** The 702Xchange client repo at `C:\Users\Welcome\Desktop\client-sites\702xchange-site` is the reference implementation of Phase B steps 8–12. See `docs/site-os/README.md` and `docs/site-os/inputs/page-list.md` in that repo for a fully populated example. 702Xchange-specific decisions (8-category MVP launch set, ≥5/≥8 listing thresholds, 7 primary location pages, GoHighLevel form vendor, directory project type) are illustrative only — other clients will have different page lists, thresholds, and integrations.

## Phase C — Policy Invocation

### 13. Invoke the session-scoped standing approval rule

If the build will use standing approval to reduce yes/no friction between low-risk internal workflow gates, paste the copy-paste-ready language from `docs/standing-approval-rule-template.md` § Copy-Paste-Ready Standing Approval Language into the first relevant prompt of the session. Standing approval is session-scoped — it does not persist across sessions and must be re-invoked explicitly each time it applies. The Hard Stop List always requires explicit approval regardless of standing approval status.

### 14. Confirm file-scope and Git safety discipline

`docs/file-scope-and-git-safety-policy.md` is the universal policy. Highlights to observe from day one: cross-repo separation (Site OS Master is workflow source-of-truth; the client repo is where the website code lives), chained-`cd` rule on Windows, explicit per-file `git add`, never `git add .` or `git add -A`, never force-push to `main` or `master`. The full §12 Copy-Paste-Ready Verification Commands list is paste-ready for status, scope, post-stage, post-commit, and unaffected-repo checks.

### 15. Confirm no-fake-data discipline

`docs/no-fake-data-policy.md` is the universal policy. Highlights to observe from day one: 12 categories of fake-data prevention (business identity, contact data, service data, reviews and ratings, trust signals, performance claims, schema markup, image and media, external data sources, listings and directory data, CTAs and social proof, competitor claims), the schema-matches-visible-content rule, no Places API or GBP auto-pulls without owner consent, no fake reviews or listings, programmatic content allowed only when source data is verified.

## Phase D — Strategy and Build

### 16. Run the upstream strategy prompts (Prompts 01 through 05)

Run the upstream strategy prompts per the chosen workflow mode. Each mode has its own prompt sequence in `docs/site-os-prompt-operating-guide.md` (Fast Mode skips SERP/entity/moat/AI-citation/template-eval; Core Mode adds 10-metric and gap fix; Beyond-Elite adds SERP, entity, alignment, linking, schema, conversion; Full Competitive Build adds variant battle, search-intent defense, moat, AI citation, content-quality editor, template eval).

The Prompts 01–05 v2 carry-forward rule from `docs/core-mode-workflow-map.md` applies: unresolved client data does not stop strategy. Missing items are FLAGGED, NEEDS CONFIRMATION, or CARRY FORWARD and passed to the next prompt. Prompt 05 converts unresolved items into safe Prompt 06 TODOs or FLAGs.

### 17. For each page, run Prompt 06 with strict Gate 1 → Gate 2 → Gate 3

For each page in the build sequence, invoke `prompts/06-claude-code-build-prompt.md` with strict gate discipline:

- **Gate 1 — Inspection.** Read the relevant files; identify scope; surface blockers
- **Gate 2 — Planning.** Declare the exact file scope; produce the implementation plan; await explicit approval
- **Gate 3 — Implementation.** Touch only the approved files; validate via lint/type-check/build; produce the implementation report

Gate discipline is a hard contract. Never expand scope mid-phase; pause and re-approve.

### 18. Run Prompt 07 QA after each Gate 3

Invoke `prompts/07-qa-review-prompt.md` immediately after each Gate 3 implementation. Outcomes are typically APPROVED, CONDITIONALLY APPROVED (when carry-forward items remain), or NOT APPROVED. Unresolved production-facing TODOs prevent APPROVED.

### 19. Stage explicitly, commit, push

After Prompt 07 QA passes, stage with explicit per-file `git add <path>` commands per `docs/file-scope-and-git-safety-policy.md` §5. Verify the staged scope with `git diff --cached --name-only` before commit. Use a conventional-commits prefix (`feat(scope):`, `docs(scope):`, `fix(scope):`, `chore(scope):`) matching the surrounding repo style. Push with the simplest form: `git push origin main`. Confirm `git status` is clean and HEAD matches the new commit after push completes (§6 and §7 of the policy).

### 20. Record per-tier completions in `docs/site-os/changelog/`

Per `docs/client-repo-doc-structure.md`, write one changelog entry per major tier or per launch event into `docs/site-os/changelog/`. Each entry summarizes scope, commits, validation results, and follow-up items. Changelog cadence is per tier or per launch — not per commit.

## Phase E — Deploy

### 21. Follow `checklists/deploy-workflow-checklist.md`

When the build is ready for production, follow the safe-deploy procedure in `checklists/deploy-workflow-checklist.md`. The most important rule is build-before-deploy: for the default reference stack the required two-command sequence is `npm run cf:build` then `npm run cf:deploy`. Running `cf:deploy` alone publishes whatever artifacts are already in `.open-next/` — §6 explains why this is unsafe and references the 702Xchange Tier 6A stale-artifact incident that produced this rule.

### 22. Run `checklists/post-deploy-production-verification-checklist.md` immediately after

Immediately after every deploy, run the post-deploy production verification checklist. The CTA wording spot-check in §4 catches stale-artifact deploys; the canonical URL, www→apex redirect, robots.txt, sitemap.xml, and Worker Version ID recording checks confirm production matches source. Do not announce the deploy as live until verification passes.

### 23. Record the deploy in `docs/site-os/changelog/<date>-<tier>.md`

Add a changelog entry recording: source commit hash, Worker Version ID (or platform-equivalent deployment ID), previous Worker Version ID, verification status (PASS / FAIL / PASS WITH NOTES), deployed-by (Claude / human / CI), and any follow-up items. The format is documented in the post-deploy checklist §11.

### 24. Hand off to `checklists/seo-indexing-checklist.md`

Only after production verification passes, hand off to `checklists/seo-indexing-checklist.md` for indexing submission and ongoing monitoring. Do not submit a stale or unverified deploy to indexing.

## Phase F — Carry-Forward

### 25. Resolve any MISSING — FLAGGED intake items before Prompt 09 Final Launch QA

Per `efficiency-governor/client-intake-gate.md` § Launch Blocker Reference, the gate enumerates fields that block production launch when unresolved. Use Prompt 09 as the final readiness gate; do not approve production launch with unresolved launch-critical TODOs.

### 26. Resolve any APPROVED PLACEHOLDER items per the launch plan

APPROVED PLACEHOLDER fields are explicitly allowed during build but should transition to CONFIRMED values per the launch plan agreed with the project owner. Document each placeholder transition in `docs/site-os/changelog/` so the audit trail is preserved.

### 27. Re-invoke standing approval per session

Standing approval is session-scoped per `docs/standing-approval-rule-template.md` § Session-Scoped Nature. It does not persist across sessions or between Claude conversations. Re-invoke explicitly at the start of each new session that will use it.

### 28. Hand off to the future Continue-Existing-Client Workflow (Tier R3-5)

Ongoing maintenance, mid-tier resumption, and incremental builds on an established client repo are a distinct workflow. Tier R3-5 will cover that workflow. Until R3-5 lands, treat ongoing work as a fresh session that re-invokes standing approval (step 27), confirms the current HEAD, reviews carry-forward items from the most recent changelog entry, and proceeds with strict gate discipline.

## Common Pitfalls

Observed in real Site OS Master client builds (mostly from the 702Xchange Tier 6A through Tier 7A-1 session timeline recorded in `docs/prompt-master-status.md` Tier R1, R2, R3-1, and R3-3 appendices):

- Deploying without rebuilding (stale-artifact deploys publish pre-current code while CLI reports success)
- Treating standing approval as cross-session (it is session-scoped and must be re-invoked)
- Editing files outside the approved phase scope ("scope drift")
- Confusing the Site OS Master repo with the client repo on Windows because the shell harness resets cwd between commands
- Auto-pulling Google Places or Google Business Profile data into production without owner consent
- Inventing reviews, ratings, or trust signals to fill gaps in client data
- Treating the project brief as the intake gate (the brief is a form; the gate is the readiness check)
- Building before the intake gate is cleared or has explicit placeholder approval

## Anti-Patterns to Avoid

- Deploying from Site OS Master (Site OS Master has no production website)
- Copying Site OS Master prompts, skills, routing, token-control, schemas, page templates, evals, benchmarks, workflow tests, versions, or checklists into the client repo (workflow source-of-truth must stay singular per `docs/client-repo-doc-structure.md` § Source-of-Truth Rule)
- Using `git add .` or `git add -A` in either repo
- Force-pushing to `main` or `master`
- Editing `lib/data/listings.ts` or any equivalent listings data file with fake or invented data
- Adding API integrations (GHL, Supabase, Stripe, Google Places API, Google Business Profile API) without explicit owner approval
- Skipping post-deploy production verification because the deploy CLI reported success
- Generalizing client-specific decisions (for example, 702Xchange's GoHighLevel form vendor, ≥5/≥8 listing thresholds, 8-category MVP launch set, directory project type) to other clients

## Stop Conditions

Pause and surface to the project owner if any of these are true:

- Client Intake Gate is NOT CLEARED and no launch-critical placeholder approval exists
- Minimum viable intake is incomplete and no APPROVED PLACEHOLDER decision exists for missing fields
- Production domain is unresolved (cannot finalize canonical URL, sitemap, robots.txt, OG URLs)
- Form endpoint path is unresolved and a conversion form is in scope
- Legal copy (privacy policy or terms) is unresolved and a personal-data form is in scope
- Index / noindex launch decision is unresolved
- Client repo path is ambiguous (multiple candidate repos on the same machine)
- Working tree is dirty in unexpected ways at the start of any phase
- Standing approval has lapsed (new session) and has not been re-invoked
- Gate 2 plan or Gate 3 diff reveals an unexpected file modification outside the approved scope

## Copy-Paste-Ready First-Session Kickoff Prompt Template

Paste the following template into the first session of a new client build. Fill in the bracketed `<ANGLE-BRACKET-PLACEHOLDER>` values. The template is a starting point, not a contract — the body of this doc remains authoritative.

```
New-client startup kickoff — <CLIENT NAME>

Site OS Master repo: C:\Users\Welcome\Desktop\site-os-master
Client repo: C:\Users\Welcome\Desktop\client-sites\<client-slug>
Project type: <local service / directory / SaaS / landing page / other>
Default reference stack: <Next.js 14 + OpenNext + Cloudflare Workers / other — describe>
Production domain decision: <CONFIRMED <domain> / pending>
Workflow mode (per page-type plan): <Fast / Core / Beyond-Elite / Full Competitive Build>

Client Intake Gate status (per efficiency-governor/client-intake-gate.md v1.2):
- CONFIRMED count: <N>
- APPROVED PLACEHOLDER count: <N>
- MISSING — FLAGGED count: <N>
- Gate decision: <CLEARED / CLEARED WITH FLAGS / NOT CLEARED>
- Build blockers present: <Yes — list / No>
- Launch blockers present: <Yes — list / No>

Phase A first-session scope:
- Confirm prerequisites (per docs/new-client-startup-workflow.md Phase A step 1)
- Run Client Intake Gate
- Capture project brief at docs/project-brief-template.md
- Select project type and workflow mode
- Decide Phase 1 launch pages

I am invoking the standing approval rule per docs/standing-approval-rule-template.md
§ Copy-Paste-Ready Standing Approval Language for this session.

File-scope and Git safety discipline applies per docs/file-scope-and-git-safety-policy.md.
No-fake-data discipline applies per docs/no-fake-data-policy.md.

Please run Phase A only. Do not scaffold the client repo until I approve moving to Phase B.
```

## Working Example: 702Xchange

The 702Xchange client repo at `C:\Users\Welcome\Desktop\client-sites\702xchange-site` is the reference implementation of Phases A through E. As of 2026-05-17 it contains the canonical `docs/site-os/README.md`, `docs/site-os/inputs/page-list.md`, and the four `docs/site-os/{inputs, outputs, qa, changelog}` subfolders scaffolded per `docs/client-repo-doc-structure.md`. The build session timeline (Tier 6A styling foundation through Tier 7A-1 visual polish, plus production deploys to `https://702xchange.com`) produced the R1, R2, R3-1, and R3-3 patches recorded in `docs/prompt-master-status.md`.

702Xchange-specific decisions are illustrative only — other clients will have different stacks, project types, and launch scopes. Specifically, do not generalize: the Next.js 14 + OpenNext + Cloudflare Workers stack choice, the directory / marketplace project type, the 8-category MVP launch set, the ≥5 listings per category and ≥8 listings per location publication thresholds, the 7 primary location set, the GoHighLevel form vendor for Add Business / Claim Listing / Contact, or the `LISTINGS = []` MVP seed pattern in `lib/data/listings.ts`. Each of those is a 702Xchange decision made during the 702Xchange intake and build, not a Site OS Master requirement.

## Related Files

- `README.md` — top-level Site OS Master overview, folder structure, prompt operating guide pointer, deploy and client handoff discipline
- `CLAUDE.md` — primary behavioral contract; working rules; content rules; competitive standards
- `efficiency-governor/client-intake-gate.md` — intake gate (the hard gate this workflow invokes in Phase A step 2)
- `docs/project-brief-template.md` — project brief form filled out in Phase A step 3
- `docs/site-os-prompt-operating-guide.md` — workflow mode selection guide referenced in Phase A step 5
- `docs/page-build-workflow.md` — page-level workflow invoked once per page in Phase D
- `docs/client-repo-doc-structure.md` — scaffolding for `docs/site-os/{inputs, outputs, qa, changelog}` in Phase B steps 10–12
- `docs/standing-approval-rule-template.md` — session-scoped rule invoked in Phase C step 13
- `docs/file-scope-and-git-safety-policy.md` — universal file-scope and Git discipline invoked in Phase C step 14 and applied throughout
- `docs/no-fake-data-policy.md` — universal no-fake-data discipline invoked in Phase C step 15 and applied throughout
- `checklists/deploy-workflow-checklist.md` — safe-deploy procedure followed in Phase E step 21
- `checklists/post-deploy-production-verification-checklist.md` — production verification followed in Phase E step 22

---

Site OS Master — New-Client Startup Workflow v1.0
Status: Tier R3-4 Final Readiness Patch — implemented 2026-05-17
Reason for creation: provide a standalone universal client-onboarding workflow orchestrator that references the canonical intake, brief, mode-selection, scaffolding, policy, build, and deploy docs without duplicating them
