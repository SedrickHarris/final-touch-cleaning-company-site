# Client Build Prompt Index

The full client-side Site OS prompt catalog for the Final Touch Cleaning Company repo (and the template pattern for future client repos). Each entry lists the prompt path, its purpose, when to use it, and what it produces.

## Build Prompts (`docs/site-os/prompts/build/`)

| Prompt | Purpose | When to Use | Expected Output | Workflow |
|---|---|---|---|---|
| `batch-2-core-brand-pages-prompt.md` | Build Tier 1 brand pages (About, Contact, FAQ, Free Quote, Thank You, legal, hubs) | After Batch 1 foundation is committed | New route files under `app/`, metadata, internal links, schema, implementation log entry | Build |
| `batch-3-service-pages-prompt.md` | Build 7 service pages | After Batch 2 | 7 new `app/services/<slug>/page.tsx` files with split hero + form, related-services card grid, FAQ, schema | Build |
| `batch-4-city-location-pages-prompt.md` | Build 5 city pages | After Batch 3 | 5 new `app/locations/<city>/page.tsx` files with service card grids, local FAQ, LocalBusiness schema (no street address) | Build |
| `batch-5-neighborhood-pages-prompt.md` | Build 10 priority neighborhood pages | After Batch 4 | 10 nested neighborhood pages with city-parent linking, neighborhood-specific local context | Build |
| `batch-6-service-city-matrix-prompt.md` | Build 35 service+city pages programmatically | After Batch 5 | 35 routes at `/services/<service>/<city>`, with per-page content variation | Build |

## Content Prompts (`docs/site-os/prompts/content/`)

| Prompt | Purpose | When to Use | Expected Output | Workflow |
|---|---|---|---|---|
| `seo-aeo-content-generation-prompt.md` | Generate optimized copy for any page | During build, or when refreshing copy | H1, meta title, meta description, direct-answer paragraph, H2/H3 body, FAQs, CTA copy, internal-link plan | Content |
| `content-strengthening-prompt.md` | Improve thin or weak content on existing pages | After QA flags content issues or owner supplies new facts | Before/after diffs per section, new TODOs, validation | Content |

## SEO/AEO Prompts (`docs/site-os/prompts/seo-aeo/`)

| Prompt | Purpose | When to Use | Expected Output | Workflow |
|---|---|---|---|---|
| `serp-analysis-prompt.md` | Analyze SERP and competitor patterns for a target keyword | Before creating or strengthening a page | Intent classification, competitor patterns, topic / heading / FAQ gaps, schema opportunities | SEO/AEO |
| `aeo-gap-analysis-prompt.md` | Audit answer-engine readiness on a built page | After build, or when a page isn't ranking in AI results | Per-category PASS/NEEDS WORK/FAIL with recommended fixes | SEO/AEO |

## QA Prompts (`docs/site-os/prompts/qa/`)

| Prompt | Purpose | When to Use | Expected Output | Workflow |
|---|---|---|---|---|
| `page-qa-prompt.md` | Structural / design / accessibility QA on a built page | After every page build | Per-category checklist, top issues, ready-for-commit verdict | QA |
| `seo-aeo-qa-prompt.md` | SEO/AEO QA on a built page | After build, paired with `page-qa-prompt.md` | Per-category score, top 3 leverage fixes, recommended next prompt | QA |
| `pre-commit-qa-prompt.md` | Final safety check before staging and committing | Immediately before `git add` | Validation results, safety checks, scope review, GO/WAIT/STOP | QA |

## Update Prompts (`docs/site-os/prompts/updates/`)

| Prompt | Purpose | When to Use | Expected Output | Workflow |
|---|---|---|---|---|
| `content-gap-fix-prompt.md` | Apply targeted fixes from a gap analysis report | After AEO or SEO QA flags specific gaps | Section-level before/after diffs, validation, log entry | Update |
| `content-update-prompt.md` | Safely update data-driven content (phone, email, service area, services, CTAs, legal copy) | When verified business details change | Updated constants and pages, log entry, validation | Update |

## Reference Docs (`docs/site-os/reference/`)

| Doc | Purpose |
|---|---|
| `client-build-prompt-index.md` | This file. Catalog of all client-side prompts. |
| `seo-aeo-content-standards.md` | Client-side SEO/AEO content standards (page-level rules, FAQ standards, no-doorway, no-stuffing). |
| `service-business-design-standards.md` | Client-side design standards (two-column hero/CTA, service card image placeholder, wide containers, motion). |

## Checklists (`docs/site-os/checklists/`)

| Checklist | Purpose |
|---|---|
| `page-before-build-checklist.md` | Confirm page strategy is ready before sending to Claude Code |
| `page-after-build-checklist.md` | Confirm a built page meets standards |
| `content-quality-checklist.md` | Confirm page content is optimized and conversion-focused |

## Decisions (`docs/site-os/decisions/`)

| Decision | Purpose |
|---|---|
| `client-repo-prompt-standard.md` | Documents the standard that every client repo must include a client-side Site OS prompt system |

## Workflow & Policy Docs (already present in `docs/site-os/`)

| Doc | Purpose |
|---|---|
| `fast-build-batch-workflow.md` | Default workflow — reduces approval friction for low-risk work |
| `new-client-startup-workflow.md` | First-time client onboarding workflow |
| `file-scope-and-git-safety-policy.md` | Explicit-staging, chained-cd, force-push rules |
| `no-fake-data-policy.md` | Fabrication-prevention rules across content, schema, images, listings |
| `final-touch-build-context.md` | Final Touch–specific facts (contact, owners, service area, do-not-invent list) |
| `batch-1-foundation-scope.md` | Batch 1 scope reference |
| `implementation-log.md` | Running build log |

## How to Use This Catalog

1. **Starting a new batch?** Pick the relevant build prompt under `prompts/build/`.
2. **Drafting copy?** Use `prompts/content/seo-aeo-content-generation-prompt.md`.
3. **Improving live content?** Run `prompts/seo-aeo/aeo-gap-analysis-prompt.md` first, then `prompts/content/content-strengthening-prompt.md` or `prompts/updates/content-gap-fix-prompt.md`.
4. **Updating business data (phone, services, etc.)?** Use `prompts/updates/content-update-prompt.md`.
5. **About to commit?** Run `prompts/qa/page-qa-prompt.md` + `prompts/qa/seo-aeo-qa-prompt.md` + `prompts/qa/pre-commit-qa-prompt.md` in sequence.

## How to Use in Future Client Repos

This catalog is reusable as a template:

1. Copy the entire `docs/site-os/` directory into the new client repo.
2. Adapt `final-touch-build-context.md` to the new client's facts (rename appropriately).
3. Update the batch prompts (`batch-2` through `batch-6`) with the new client's routes, services, cities.
4. Keep the SEO/AEO, content, QA, and update prompts unchanged — they are project-agnostic.
5. Keep the reference docs, checklists, and decision docs unchanged.
