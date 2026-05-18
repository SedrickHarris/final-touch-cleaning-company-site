# AEO Gap Analysis Prompt

## Purpose

Audit whether a page is ready to be cited by answer engines (Google AI Overviews, ChatGPT, Perplexity, Claude, Bing AI), featured snippets, People Also Ask, and voice assistants. Output is a structured gap list and a fix plan.

## When to Use

- After a page is built but before launch.
- After a page has been live but isn't surfacing in AI search results or featured snippets.
- Before running `content-strengthening-prompt.md` to focus the strengthening on AEO weaknesses.

## Required Inputs

- Target page route and current content (paste live copy or point to the file)
- Primary keyword and search intent
- Target audience
- Verified facts available for trust-building

## Analysis Categories

### 1. Direct-Answer Check

- Does the opening paragraph answer the page's primary search intent in the first 1–2 sentences?
- Is the direct answer within the first 100 words?
- Is the direct answer factually defensible without unverified claims?

Score: 1–5 (1 = no direct answer, 5 = clean direct answer in sentence 1).

### 2. Entity Clarity

- Does the page name the business (Final Touch Cleaning Company), the service/topic, and the location (where applicable) explicitly in the body?
- Is the entity authority block (per `docs/site-os/no-fake-data-policy.md` §1) visible, not hidden?
- Are key entities (service name, location, service area) repeated in a citation-friendly way without keyword stuffing?

### 3. Service-Area Clarity

For local pages:
- Is the service area stated clearly? (Clark County + 4 cities + named neighborhood if applicable)
- Does the service area match `lib/constants/site.ts`?
- Are there any invented service areas? (FAIL if yes)

### 4. Question / Answer Formatting

- Are question-shaped headings used where natural? (H2/H3 phrased as a question)
- Does each Q/A pair follow the direct-answer format (answer first, clarify second, optional CTA third)?
- Are answers concise (40–80 words)?
- Is at least 1 Q/A phrased in conversational / voice-search-friendly form?

### 5. FAQ Quality

- FAQ count (target: 4–6 for service/location pages, 5–8 for high-value pages)
- Each FAQ answers a real customer question (not a keyword-stuffed phrase)
- No FAQ has a vague or evasive answer
- No FAQ duplicates content already covered in the body
- `FAQPage` JSON-LD matches visible text exactly (no schema-only Q&A)

### 6. Snippet-Ready Sections

- Is there at least one section that could be lifted as a featured snippet (40–60 word direct answer, optionally formatted as a numbered list, table, or definition block)?
- Are key numbered/bulleted sections clean enough to be extracted (no embedded asides, no inline CTAs)?
- Are tables used where comparison content exists?

### 7. Voice-Search Readiness

- Conversational phrasing in at least 1 H2 and 1 FAQ
- Long-tail keyword coverage ("how much does X cost in [city]", "do you clean after construction")
- Natural-language answers, not keyword strings

### 8. AI / LLM Citation Readiness

- Citation-worthy factual sentences (clearly attributable, neither hyped nor hedged)
- Plain-language entity statements ("Final Touch is a family-owned cleaning company serving Clark County, Nevada")
- No hidden text, no schema-only claims, no unsupported numerical assertions
- Internal links to related Final Touch pages that the LLM can follow to build context

### 9. Internal Link Clarity

- 3–6 internal links per page minimum
- Natural anchor text (no "click here" or "learn more" without context)
- Links resolve (no 404s)
- No orphan-page status

### 10. No-Fake-Data Carry-Through

- Confirm: no invented reviews, ratings, license numbers, insurance details, awards, certifications, years-in-business, customer photos, team photos, before/after results, satisfaction guarantees, response-time claims.
- Confirm: `AggregateRating` / `Review` schema omitted unless owner-supplied verified review data + visible matching content.

## Output Format

Return a markdown report with one section per category 1–10:

```
### [Category Name]
Status: PASS / NEEDS WORK / FAIL
Evidence: <what was observed>
Gap: <what's missing>
Recommended fix: <specific change>
Carry forward to: <content-strengthening-prompt.md | content-gap-fix-prompt.md | manual>
```

Conclude with:

- Overall AEO readiness score (1–10)
- Top 3 highest-leverage fixes
- Stop-ship items (anything that fails no-fake-data carry-through)
- Recommended next prompt (`content-strengthening-prompt.md` or `content-gap-fix-prompt.md` typically)

## Stop Conditions

- If the page has not been built yet, stop and recommend `serp-analysis-prompt.md` + `seo-aeo-content-generation-prompt.md` instead.
- If the page contains invented claims (reviews, license numbers, awards, etc.), flag as STOP-SHIP regardless of other AEO scores. Remove the invented content before any further AEO work.
