# Client Repo Prompt Standard

**Status:** Adopted 2026-05-17
**Scope:** All current and future client website repos managed by Site OS Master.

## Standard

Every client website repo must include a client-side Site OS prompt and documentation system under `docs/site-os/`. This system makes the repo self-contained for ongoing build, content, SEO/AEO, QA, and update workflows — no reliance on Claude Project memory, no reliance on the master repo as the only source of prompts.

## Required Folders

```
docs/site-os/
├── prompts/
│   ├── build/                    # Per-batch build prompts
│   ├── content/                  # Content generation + strengthening
│   ├── seo-aeo/                  # SERP analysis + AEO gap analysis
│   ├── qa/                       # Page QA + SEO/AEO QA + pre-commit QA
│   └── updates/                  # Content gap fixes + content updates
├── reference/                    # Standards and indexes
├── checklists/                   # Pre-build, post-build, content quality
├── outputs/                      # Per-batch deliverable outputs
├── qa/                           # QA reports (per-page, per-batch)
└── decisions/                    # Decision docs (this file lives here)
```

Already-required workflow / policy docs at `docs/site-os/` root (copied from Site OS Master at onboarding):

- `fast-build-batch-workflow.md`
- `new-client-startup-workflow.md`
- `file-scope-and-git-safety-policy.md`
- `no-fake-data-policy.md`
- `<client>-build-context.md` (per-client facts)
- `implementation-log.md`

## Reason

The client repo must be able to continue optimized website builds, content creation, SEO/AEO improvement, gap fixing, content updating, and QA without relying only on Claude Project memory or the master repo. Specifically:

1. **Continuity across sessions.** Claude Project memory is session-scoped and may not persist across machines, projects, or weeks. The client repo carries its own playbooks.
2. **Continuity across operators.** A new contractor or teammate joining the client engagement should be able to read the repo and run a Batch 2 build without separate onboarding.
3. **Continuity if Site OS Master diverges.** Master may evolve (new standards, prompt revisions). The client repo's copy of the relevant prompts is a known-good baseline that won't silently shift under the client's feet.
4. **Audit trail.** Every build, content change, QA pass, and data update produces an entry in `implementation-log.md` and (optionally) `outputs/`. The repo tells the story of how the site got built.

## Required Standard Prompts

The minimum prompt set every client repo must include:

### Build prompts (`docs/site-os/prompts/build/`)

- `batch-2-core-brand-pages-prompt.md`
- `batch-3-service-pages-prompt.md`
- `batch-4-city-location-pages-prompt.md`
- `batch-5-neighborhood-pages-prompt.md`
- `batch-6-service-city-matrix-prompt.md`

(Adapt page lists and slugs to the specific client. The prompt *shape* — Purpose / When / Source-of-Truth / Pages / Design Rules / SEO-AEO / Validation / Log / Report / Stop Conditions — stays the same.)

### Content prompts (`docs/site-os/prompts/content/`)

- `seo-aeo-content-generation-prompt.md` — project-agnostic, copy verbatim
- `content-strengthening-prompt.md` — project-agnostic, copy verbatim

### SEO/AEO prompts (`docs/site-os/prompts/seo-aeo/`)

- `serp-analysis-prompt.md` — project-agnostic
- `aeo-gap-analysis-prompt.md` — project-agnostic

### QA prompts (`docs/site-os/prompts/qa/`)

- `page-qa-prompt.md` — project-agnostic (with client-specific phone / brand checks)
- `seo-aeo-qa-prompt.md` — project-agnostic
- `pre-commit-qa-prompt.md` — project-agnostic

### Update prompts (`docs/site-os/prompts/updates/`)

- `content-gap-fix-prompt.md` — project-agnostic
- `content-update-prompt.md` — project-agnostic (typical update patterns reference the client's constants files)

### Reference docs (`docs/site-os/reference/`)

- `client-build-prompt-index.md` — catalog of all client-side prompts
- `seo-aeo-content-standards.md` — page-level SEO/AEO rules
- `service-business-design-standards.md` — design rules (two-column hero/CTA, service card image placeholder, etc.)

### Checklists (`docs/site-os/checklists/`)

- `page-before-build-checklist.md`
- `page-after-build-checklist.md`
- `content-quality-checklist.md`

### Decisions (`docs/site-os/decisions/`)

- `client-repo-prompt-standard.md` (this file)

## Adoption Rule for Future Client Repos

This standard should be added to **future client repos at project startup** as part of `docs/new-client-startup-workflow.md` Phase B (Repo Scaffold). Specifically:

1. After scaffolding `docs/site-os/{inputs, outputs, qa, changelog}` per the existing workflow.
2. Add the full prompt-system structure described in this doc.
3. Adapt the build prompts (`batch-2` through `batch-6`) to the new client's page architecture (routes, services, cities).
4. Keep the content / SEO-AEO / QA / update prompts and reference docs verbatim — they are project-agnostic.

## Content Rules

All prompt files in the system must:

- Be **specific enough to be useful** (mention the client's services, cities, routes, contact info where applicable).
- Not be **bloated** (each prompt fits in one focused read; cross-references handle depth).
- Reference **Final Touch details where needed** but stay reusable as a client-repo standard pattern. Bracket-able details (slugs, cities, contact) sit in clearly-marked sections so future clients can swap.
- Use **markdown** with clear headings.
- Include **copy-paste-ready Claude Code instructions** where relevant.
- **Avoid raw citations or external links** to volatile sources.
- **Do not invent business information.** All references to verified client facts come from `<client>-build-context.md` and `lib/constants/site.ts`.

## Maintenance

When Site OS Master ships a new layout standard, content standard, or workflow improvement:

1. The change lands in Site OS Master.
2. Existing client repos do NOT auto-update — their copy of the prompts is intentionally a baseline.
3. When a client repo opens its next major batch, the operator reviews Site OS Master changes since the last sync and pulls the relevant updates into the client repo via a `chore(site-os): sync prompts from master` commit.
4. The sync is opt-in per client. Master can move forward without forcing every client repo to follow.

## Related Files

- `docs/site-os/new-client-startup-workflow.md` — onboarding flow this standard plugs into
- `docs/site-os/fast-build-batch-workflow.md` — default workflow mode for the prompts in this system
- `docs/site-os/file-scope-and-git-safety-policy.md` — staging discipline that applies inside every prompt
- `docs/site-os/no-fake-data-policy.md` — content safety that applies inside every prompt
- `docs/site-os/reference/client-build-prompt-index.md` — full catalog of the prompts this standard requires
