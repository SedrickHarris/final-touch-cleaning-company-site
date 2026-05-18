# Internal Link Map Prompt

## Purpose

Build and enforce the site-wide internal link map for a client website. Operates in two modes:

- **Mode 1 — Pre-Build:** Produce the required outbound and inbound link list for a target page before copy is written or code is built.
- **Mode 2 — Post-Build Audit:** After a batch ships, verify every new page has its required outbound links in place and at least one inbound link from an existing page. Flag orphans.

Internal linking is the primary mechanism for passing topical authority between pages, signaling site structure to search engines and LLMs, and preventing orphaned pages that receive no crawl equity. This prompt enforces those connections at both the planning and verification stages.

---

## Source of Truth

Before running either mode, confirm the following files are available:

- `docs/site-build-plan.md` — page architecture, tiers, URL slug rules, internal linking architecture table
- `docs/site-os/reference/internal-link-map.md` — the client's populated link map (must exist before Mode 2 can run)
- `lib/constants/site.ts` — canonical routes, service slugs, city slugs, phone, contact info
- `docs/site-os/<client>-build-context.md` — verified service area and business facts

If `docs/site-os/reference/internal-link-map.md` does not exist yet, run Mode 1 for the homepage first to seed the map, then expand it one batch at a time.

---

## Mode 1 — Pre-Build Link Plan

### When to Use

Run Mode 1 before writing copy or building code for any page. It feeds the "Internal-link anchor targets" field in the keyword map (`docs/site-os/reference/keyword-research-and-aeo-depth-standard.md`) so anchor text is planted correctly in the first draft — not patched in later.

### Required Inputs

- Target page route (e.g., `/services/deep-cleaning`)
- Page tier and type (Tier 1 brand / Tier 2 service / Tier 3 city / Tier 3 neighborhood / Tier 4 service+city / other)
- List of already-built routes that can provide inbound links to this page
- List of routes this page should link out to (confirm each exists or is being built in the same batch)

### Output — Required Outbound Links

List every outbound internal link this page must contain:

```
Outbound links for: <route>

| Destination Route | Anchor Text | Section Placement | Priority |
|---|---|---|---|
| /free-quote | Request a free quote | Hero CTA, final CTA | Required |
| /services | View all cleaning services | Body or nav | Required |
| ... | ... | ... | ... |
```

Placement options: Hero, Body, Service card, FAQ answer, Final CTA, Footer nav.
Priority: Required (must be present for QA to pass) or Recommended (adds value, not a QA blocker).

Minimum required outbound links per page type:

- Tier 1 brand pages: 5–8
- Tier 2 service pages: 5–8 (must include parent hub + at least 3 service+city combos for this service)
- Tier 3 city pages: 5–8 (must include parent hub + at least 3 service+city combos for this city + 2–3 neighborhood children)
- Tier 3 neighborhood pages: 4–6 (must include parent city + at least 2 service+city combos)
- Tier 4 service+city pages: 4–6 (must include Tier 2 service parent + Tier 3 city parent + 1–2 sibling service+city pages)
- Legal / utility pages: 2–3 (homepage, privacy policy, contact)

### Output — Required Inbound Links

List every already-built page that must link to this new page:

```
Inbound links required for: <route>

| Source Route | Anchor Text | Section Placement | Status |
|---|---|---|---|
| / | Deep cleaning services | Services preview section | TODO — add when building homepage |
| /services | Deep Cleaning | Service card | Already present via ServiceCard component |
| ... | ... | ... | ... |
```

Status options:
- Already present (link exists in a built page)
- TODO — add in this batch (link must be added to an existing page as part of this build)
- TODO — deferred (route that will link to this page is not yet built; mark with TODO-BATCH-N comment in code)

If any required inbound link is not already present and cannot be added in the current batch, add a `{/* TODO-BATCH-N: Add inbound link from <source> to <this route> */}` comment in the target page file.

### Output — Link Map Row

After completing the pre-build plan, append a row to `docs/site-os/reference/internal-link-map.md` for this page:

```
| <route> | <tier> | <required outbound routes, comma-separated> | <required inbound routes, comma-separated> | Planned |
```

---

## Mode 2 — Post-Build Audit

### When to Use

Run Mode 2 after a batch is committed, as part of the QA sequence alongside `page-qa-prompt.md` and `seo-aeo-qa-prompt.md`. It verifies the link map was executed correctly and flags any orphans introduced by the batch.

### Required Inputs

- List of routes built in this batch
- Current state of `docs/site-os/reference/internal-link-map.md`
- Access to the built page files (to inspect actual `<Link href="...">` usage)

### Audit Checks

For each page built in this batch, verify:

**1. Outbound link count**
Does the page contain the minimum required outbound links for its tier?
- PASS: count meets or exceeds the minimum for this page type
- FAIL: count is below minimum — list missing links

**2. Required outbound links present**
Do all Required-priority outbound links from the Mode 1 plan exist in the built page?
- PASS: all Required links found
- FAIL: list each missing Required link with the anchor text and recommended placement

**3. Anchor text quality**
Is every internal link anchor descriptive? No "click here," no "learn more" without context, no raw URLs as anchor text.
- PASS: all anchors are descriptive
- FAIL: list offending anchors with suggested replacements

**4. Inbound link coverage**
Does this page have at least one inbound link from an already-built page?
- PASS: at least one inbound link confirmed
- FAIL: page is an orphan — list which existing page should be updated to add the inbound link

**5. TODO-BATCH-N comments**
For deferred inbound links, are `TODO-BATCH-N` comments present in the built page files?
- PASS: all deferred inbound links have TODO comments
- FAIL: list deferred links with no TODO comment

**6. Link resolution**
Do all outbound internal links point to routes that exist (built) or are being built in the same batch?
- PASS: all links resolve or have TODO comments
- FAIL: list broken links (pointing to unbuilt routes with no TODO comment)

**7. Link map sync**
Does `docs/site-os/reference/internal-link-map.md` reflect the state of all pages built in this batch?
- PASS: all rows updated to Built status
- FAIL: list rows still showing Planned status that should now be Built

### Orphan Audit

After checking all pages in the batch, run a broader orphan check:

Review the internal link map for any page marked Built with zero confirmed inbound links. For each orphan found:
- Name the orphaned route
- Identify the most logical source page to add an inbound link
- Recommend anchor text
- Flag as a TODO for the next batch if it cannot be fixed immediately

### Output Format

```
## Internal Link Audit — Batch <N> — <date>

### Pages Audited
- <route> (Tier <N>, <page type>)
- ...

### Per-Page Results

#### <route>
- Outbound count: <N> / <minimum required> — PASS / FAIL
- Required outbound links: PASS / FAIL — <missing links if FAIL>
- Anchor text quality: PASS / FAIL — <offending anchors if FAIL>
- Inbound coverage: PASS / FAIL — <recommended source if FAIL>
- TODO-BATCH-N comments: PASS / FAIL
- Link resolution: PASS / FAIL — <broken links if FAIL>
- Link map sync: PASS / FAIL

...

### Orphan Report
- <orphaned route> — recommended inbound source: <route> — anchor text: <text> — priority: High / Medium / Low

### Summary
- Total pages audited: <N>
- Pages with all checks PASS: <N>
- Pages with one or more FAIL: <N>
- Orphans found: <N>
- Link map updated: Yes / No
- Ready to proceed to next batch: Yes / No — <blockers if No>
```

---

## Integration With Existing Workflow

### Where This Prompt Runs in the Build Sequence

```
1. prompt-router-and-ai-depth-standard.md     — classify page type and AI depth
2. internal-link-map-prompt.md (Mode 1)       — produce outbound + inbound link plan
3. keyword-research-and-aeo-depth-standard.md — build keyword map (uses link plan output)
4. seo-aeo-content-generation-prompt.md       — generate copy (anchors planted from link plan)
5. [batch build prompt]                        — implement page
6. page-qa-prompt.md                          — structural QA
7. seo-aeo-qa-prompt.md                       — AEO QA
8. internal-link-map-prompt.md (Mode 2)       — link audit
9. pre-commit-qa-prompt.md                    — final safety check
```

Mode 1 output is a required input to step 3 (keyword map). Do not skip it.
Mode 2 output is required before the pre-commit QA on any batch that introduces new routes.

### Connection to Pass/Fail Gate

The `docs/site-os/reference/pass-fail-page-quality-gates.md` internal link checks require:

- Minimum 3 internal outbound links per page (target 5–8)
- At least 1 inbound link from another built page
- No orphan status
- No "click here" or "learn more" anchor text without context
- All links resolve (no permanent 404s)

Mode 2 of this prompt is the mechanism that produces evidence for those gate items. A FAIL on any of those items in the pass/fail gate should be traced back to this prompt's audit output.

---

## Anti-Patterns to Prevent

- Do not add internal links in bulk at the end of a batch as an afterthought. Plant anchors in copy during content generation (step 4 above).
- Do not create service+city pages (Tier 4) without ensuring their Tier 2 and Tier 3 parents already link to them or will link to them in the same batch.
- Do not defer all inbound links to "a future batch" without TODO comments in code.
- Do not use keyword-stuffed anchor text. "deep cleaning services in Henderson" is acceptable once per page. Repeating the exact phrase as every anchor is a spam signal.
- Do not link to routes that will 404 in production without a TODO-BATCH-N comment. Broken internal links waste crawl budget and hurt user experience.

---

## Stop Conditions

- If `docs/site-build-plan.md` is missing or the internal linking architecture table is incomplete, stop and request the missing document before running either mode.
- If `lib/constants/site.ts` does not contain the canonical route list, stop and request it.
- If Mode 2 produces more than 3 orphaned pages with no inbound links and no TODO comments, flag as a batch-level issue and do not proceed to pre-commit QA until at least the highest-traffic orphans are resolved.

---

## Related Files

- `docs/site-os/reference/internal-link-map.md` — the client's populated link map (populated per client, not stored in Site OS Master)
- `docs/site-os/reference/keyword-research-and-aeo-depth-standard.md` — keyword map that consumes Mode 1 output
- `docs/site-os/reference/pass-fail-page-quality-gates.md` — gate that verifies Mode 2 results
- `docs/site-os/prompts/qa/pre-commit-qa-prompt.md` — final check that follows Mode 2
- `docs/site-os/reference/seo-aeo-content-standards.md` — internal linking rules (minimum counts, anchor text rules)
- `docs/site-os/no-fake-data-policy.md` — applies to any anchor text or linked content (no invented routes)

---

Site OS Master — Internal Link Map Prompt v1.0
Status: Adopted 2026-05-18
Reason for creation: enforce site-wide internal link architecture at both the pre-build planning stage and the post-build audit stage, closing the gap where page-level link rules existed but no prompt operationalized them across the full 280+ page build.
