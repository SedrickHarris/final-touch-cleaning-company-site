# SERP Analysis Prompt

## Purpose

Review competitor patterns, search intent, and SERP signals for a target keyword before creating or improving a Final Touch page. Output is a structured analysis that informs the page outline, FAQ list, schema strategy, and trust-signal plan — without inventing competitor data.

## When to Use

- Before building a new service, location, neighborhood, or service+city page.
- Before strengthening an underperforming page.
- When choosing between two possible primary keywords for a page.

## Required Inputs

- Target keyword (primary)
- Target location if applicable
- Page type intent (service, location, neighborhood, service+city, landing, hub)
- Whether real SERP data has been provided (manual SERP inspection, search-tool export, screenshots) — if yes, use it; if no, mark the analysis as **strategy-based** rather than data-based

## Analysis Structure

### 1. SERP Intent Classification

For the target keyword, classify the intent:

- Informational (what is X / how does X work)
- Transactional (buy / hire / book X)
- Local / commercial-investigation (X near me / best X in [city])
- Navigational (specific brand)
- Mixed

State the dominant intent and any secondary intent.

### 2. Page-Type Expectations

What types of pages rank for this keyword?

- Service provider pages (local business websites)
- Directory listings (Yelp, Google Maps, Angi)
- Editorial / blog content
- Aggregator / comparison sites
- Q&A pages (Quora, Reddit)

State the dominant page type and how Final Touch should position itself among them.

### 3. Competitor Pattern Review

If real competitor pages are provided, summarize patterns across the top 5–10 results:

- Typical H1 phrasing
- Typical opening paragraph structure
- Sections most pages include (service scope, "what's included", FAQ, gallery, etc.)
- CTA placement and phrasing
- Trust-signal types competitors lean on (reviews / ratings / years / license / certifications / awards)
- Schema markup observed
- Approximate content length range

If real competitor pages are NOT provided, note this as a gap and recommend manual SERP inspection before drafting copy. Do not invent competitor patterns.

### 4. Topic Gaps

Topics that competitors cover that Final Touch's existing strategy may not address:

- Process / how-it-works content
- Specific service inclusions or exclusions
- Local-context content (neighborhoods, climate, housing types)
- Objection-handling content (cost, scheduling, access, trust)
- Pain-point-driven framing (move-out deposit, post-construction dust, etc.)
- AEO-style direct-answer Q&A

### 5. Heading Gaps

Suggested H2/H3 additions based on observed competitor structure or AEO best practice. Do not copy competitor wording — adapt the structure to Final Touch's voice.

### 6. FAQ Gaps

Questions competitors answer that Final Touch's existing FAQ list doesn't cover. Phrase as natural customer questions, not as keyword stuffing.

### 7. Local Modifiers

Local modifiers commonly appended to the keyword in the SERP:

- "near me"
- "[city] / [neighborhood]"
- "in [zip code]"
- "[city] reviews / cost / pricing"

Note which modifiers are realistic for Final Touch to target (verified service area only) and which to ignore.

### 8. Trust Signals Competitors Use

Observed trust-signal types (reviews, ratings, license numbers, insurance badges, certifications, years-in-business, before/after galleries, named clients, partner badges).

**Critical:** Note which of these competitors use — but do NOT recommend Final Touch fabricate equivalents. Recommend only:

- Pursuing owner-verified equivalents where appropriate (e.g., if competitors lean on real Google reviews, recommend setting up GBP review velocity per `docs/site-os/no-fake-data-policy.md` rather than fabricating reviews).
- Leaning on Final Touch's verified differentiators (family-owned, Scott & Nicole, local team, Clark County focus, detail-focused work) where competitors don't.

### 9. Schema Opportunities

Schema types competitors use that may be appropriate for Final Touch's page:

- `LocalBusiness` (service-area-only, no street address)
- `Service`
- `FAQPage` (exact text match)
- `BreadcrumbList`
- `HowTo` (only if visible step content exists)
- `Organization` (Final Touch parent)
- `AggregateRating` / `Review` — flag for later; do not include until owner provides verified review data

### 10. No-Invent Rules

Do not invent:

- Competitor rankings, traffic, backlinks, domain authority
- Competitor review counts or ratings
- Competitor market share or pricing
- Competitor service-area or capacity claims

If the analysis is strategy-based (no real SERP data provided), label every finding "strategy-based" and recommend a real SERP review before treating any pattern as confirmed.

## Output Format

Return a markdown report with sections 1–10 above. Each finding is either:

- **VERIFIED** — derived from provided SERP data
- **STRATEGY-BASED** — derived from page-type / intent reasoning without observed SERP data
- **GAP** — known unknown, requires manual SERP inspection

Conclude with:

- Recommended primary keyword (confirm or revise)
- Recommended page-type approach
- Recommended H2/H3 outline (3–8 sections)
- Recommended FAQ list (5–8 questions)
- Recommended trust-signal strategy (using only verified differentiators)
- Open items requiring owner confirmation or real SERP review

## Stop Conditions

- If neither the target keyword nor the page type is provided, stop and request the missing input.
- If the analysis would require inventing competitor data to complete, label the gap clearly and recommend manual SERP inspection.
