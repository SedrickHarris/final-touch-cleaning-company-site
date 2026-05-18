# Pre-Commit QA Prompt

## Purpose

Final safety check before staging and committing a batch. Pairs lint / type-check / build with a scope and content audit. Use immediately before running the `git add` sequence.

## When to Use

- After every batch implementation, before committing.
- After any content gap fix or content update.
- Before pushing if validation hasn't been run since the last edit.

## Required Inputs

- The list of files changed in this batch (from the batch's final report)
- Confirmation that lint, type-check, build have been run

## Steps

### 1. Working Tree State

Run:

```
git status
git status -s
git diff --stat
git diff --name-only
```

Confirm:
- Working tree contains only the expected changes for this batch
- No unexpected modifications (especially in unrelated `docs/`, `app/`, or `components/` files)
- No build artifacts (`.next/`, `node_modules/`, `out/`, `dist/`) appearing in the diff
- No secrets, no `.env*` files, no credential files

### 2. Validation

Confirm these commands have been run and passed clean:

```
npm run lint
npm run type-check
npm run build
```

If any of these haven't run since the last edit, run them now. Stop here if any fail.

### 3. No-Secrets Check

Grep the staged diff for common secret patterns:

```
git diff --cached | grep -iE "(api[_-]?key|secret|token|password|bearer|aws_|firebase|stripe_)" | grep -v "TODO\|placeholder\|comment"
```

Expected output: empty (or only comment-context matches). If a real-looking secret appears, stop and remove before commit.

### 4. No-Build-Artifact Check

Confirm none of these paths appear in the staged scope:

- `node_modules/...`
- `.next/...`
- `out/...`
- `dist/...`
- `build/...`
- `*.tsbuildinfo`
- `next-env.d.ts`
- `.env*` (any environment file)
- `*.pem`
- `.vercel/...`

The repo's `.gitignore` should already block these — this check confirms.

### 5. No-Fake-Data Spot Check

Grep the staged diff for high-risk fake-data patterns:

```
git diff --cached | grep -iE "(rated [0-9]|[0-9]+\s*reviews|[0-9]+\s*stars|licensed|insured|certified|award|[0-9]+\s*years|guarantee|[0-9]+\s*satisfaction)"
```

For each match, confirm:
- The claim is owner-verified (cite the source in the implementation log)
- OR the claim is wrapped in a TODO-VERIFY comment
- OR the match is a false positive (e.g., a placeholder comment, a generic word usage)

If an unverified claim appears in real body copy or schema, stop and remove before commit.

### 6. Implementation Log Updated

Confirm `docs/site-os/implementation-log.md` contains a new entry for this batch with:
- Batch identifier (`### Batch X — <name>` or `### <Action> — <date> — <scope>`)
- Status (Implemented pending review)
- Date
- Files changed
- Validation results
- TODOs

### 7. High-Value Page Gate

Before committing any of the following page types, run the high-value page QA prompt and the pass/fail gate:

- Homepage (`/`)
- Free quote page (`/free-quote`)
- Contact page (`/contact`)
- Services hub (`/services`)
- Locations hub (`/locations`)
- About page (`/about`)
- FAQ hub (`/faq`)
- Core service pages (`/services/<service>`)
- Core location pages (`/locations/<city>`)
- Service + location pages (`/services/<service>/<city>`)
- Revenue-critical landing pages

The high-value gate enforces:

- Correct prompt routing and AI depth selection (per `docs/site-os/reference/prompt-router-and-ai-depth-standard.md`)
- Keyword type research and AEO FAQ research (per `docs/site-os/reference/keyword-research-and-aeo-depth-standard.md`)
- Pre-build deliverables and post-build proof (per `docs/site-os/reference/high-value-page-enforcement-standard.md`)
- 44-item pass/fail checklist across required gate, CTA visibility, copy cleanup, and schema quality (per `docs/site-os/reference/pass-fail-page-quality-gates.md`)

Run:

```
# 1. Read-only high-value page QA prompt against the built output
docs/site-os/prompts/qa/high-value-page-qa-prompt.md
```

If the gate returns FAIL, do not stage. Fix the listed items and re-run.

References:

- `docs/site-os/reference/pass-fail-page-quality-gates.md` — the 44-item gate
- `docs/site-os/prompts/qa/high-value-page-qa-prompt.md` — the read-only QA prompt that runs the gate

### 8. Staged Scope Review

Run:

```
git diff --cached --name-only
```

Confirm the staged list matches the batch's expected file scope. No extra files, no missing files. If the scope is wrong, unstage and re-stage explicitly per `docs/site-os/file-scope-and-git-safety-policy.md` §5.

### 9. Commit Message

Confirm the commit message follows the repo's conventional-commits style (`feat`, `fix`, `chore`, `docs`, `refactor`, etc.) and has a clear short subject:

- `feat(batch-2): build core brand pages`
- `fix(seo): tighten direct-answer paragraph on /services/deep-cleaning`
- `chore(constants): update service area cities`

## Output Format

```
# Pre-Commit QA — <batch>

## Validation
- Lint: PASS / FAIL
- Type-check: PASS / FAIL
- Build: PASS / FAIL

## Working Tree
- Modified files: <count>
- Untracked files: <count>
- Unexpected paths: NONE / <list>

## Safety Checks
- Secrets: NONE / <details>
- Build artifacts: NONE / <details>
- No-fake-data spot check: PASS / FAIL / NEEDS REVIEW
- `.env` files staged: NO / YES — STOP

## Implementation Log
- Entry present: YES / NO
- Batch identifier:
- Status:

## Staged Scope
- Expected: <count> files
- Actual: <count> files
- Diff: NONE / <list of unexpected staged or missing-expected files>

## Commit Message
Proposed: <message>
Style match: YES / NO

## Recommendation
GO / WAIT / STOP

## Reason
<one paragraph>
```

## Stop Conditions

- Any of lint / type-check / build failing → STOP, fix, re-run this QA.
- Any unverified claim or invented data in the staged diff → STOP, remove, re-run.
- Any `.env*` / `node_modules/` / `.next/` / secret pattern in the staged diff → STOP, unstage, re-stage explicitly without it.
- Implementation log not updated → STOP, update, re-run.
- Staged scope doesn't match expected → STOP, unstage and re-stage with the correct list.
- **High-value page gate returned FAIL** → STOP, fix the listed items, re-run `prompts/qa/high-value-page-qa-prompt.md` until it returns PASS.
