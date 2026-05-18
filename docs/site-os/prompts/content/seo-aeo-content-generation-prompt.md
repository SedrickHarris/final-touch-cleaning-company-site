# SEO/AEO Content Generation Prompt

## Purpose

Generate optimized body copy for any Final Touch page (homepage, service page, location page, neighborhood, service+city, landing). Output is paste-ready content that meets SEO, AEO, GEO, voice-search, and AI-search standards without inventing business data.

## When to Use

- During Batch 2–6 builds when copy needs to be drafted.
- When refreshing an existing page that scores poorly on direct-answer or FAQ standards.
- When generating per-page copy for the service+city matrix.

## Required Inputs

Provide these before generating content:

- Page name / type (e.g., "Service page — Post-Construction Cleanup", "Location page — Henderson")
- Route (e.g., `/services/post-construction-cleanup`)
- Primary keyword
- 2–4 secondary keywords
- Target audience (e.g., contractors and new homeowners, office managers, families moving in)
- Target location if applicable
- Verified differentiators only (drawn from `docs/site-os/final-touch-build-context.md` — family-owned, local team, detail-focused, free quotes; no fake reviews / license / years-in-business)
- Existing FAQs from `app/page.tsx` (or other live pages) to avoid duplication
- Internal-link targets (3–6 routes the page should link to)

## Output Structure

Generate the following, in this order:

### 1. H1

Single line. Includes primary keyword and (if local) the target location naturally. No keyword stuffing.

### 2. Meta Title

50–60 chars. Format: "[Service or Topic] in [Location], NV | Final Touch" or equivalent. Unique across the site.

### 3. Meta Description

140–160 chars. Includes the primary keyword, the service area, the phone number `(702) 444-5077`, and one verified differentiator. No fake claims.

### 4. Direct-Answer Opening Paragraph

2–3 sentences. Answers the page's primary search intent immediately. Sentence 1 names the business, the service/topic, and the location. Sentence 2 adds clarifying context. Sentence 3 (optional) reinforces the primary CTA.

### 5. Body Section Outline

For each H2/H3, provide:

- Heading text
- 2–3 sentence body draft
- Natural keyword placement (do not stuff)

Section types to choose from (use the subset that fits the page type):

- "Who this is for"
- "What's included"
- "Why Final Touch"
- "Our process"
- "Service areas we cover"
- "Common cleaning needs in [location]"
- "Move-in / move-out specifics"
- "Post-construction specifics"
- "Related services"

### 6. FAQ Section

4–6 questions with concise answers (40–80 words each). Each answer follows this structure:

1. First sentence: direct answer.
2. Second sentence: clarification or trust-building detail using only verified facts.
3. Third sentence (optional): local detail or CTA.

Generate questions that:
- Match real customer search behavior (use natural question phrasing).
- Avoid duplicating questions already on the page or in other live pages.
- Support PAA, voice search, and AI-citation extraction.

### 7. CTA Copy

- Primary CTA button label (use the approved list in `lib/constants/site.ts`: "Request a Free Quote", "Get My Cleaning Estimate", "Schedule Cleaning").
- Secondary CTA: tap-to-call "(702) 444-5077".
- Final CTA section heading + sub.

### 8. Internal Link Plan

List the 3–6 internal link targets, with anchor text and where each fits in the body.

## Style Rules

- Concrete over abstract — name what's wiped, vacuumed, sanitized; don't say "thorough cleaning".
- Confident, warm, never corporate-stiff. Family-owned voice.
- One primary CTA per view. Phone is secondary.
- Local-first where natural — reference Clark County / Vegas / Henderson by name in body where it fits the topic.
- Avoid: hype words ("amazing", "best", "world-class"), exclamation overload, generic stock language, "industry-leading", "premium quality".
- Don't keyword-stuff. Primary keyword appears 2–4 times in body naturally; secondary keywords appear 1–2 times each.

## Local SEO / AEO / GEO Rules

If the page has a local focus:

- Target location appears in H1 or first paragraph.
- Sub-localities (nearby neighborhoods or cities) mentioned only when relevant — no list dumps.
- Service-area cities drawn from `lib/constants/site.ts` (Las Vegas, Henderson, North Las Vegas, Boulder City, Clark County). Do not invent additional cities.

## No-Fake-Data Rules

Do not generate:

- Reviews, ratings, testimonials, star displays, "rated 4.9 by..." copy
- License numbers, insurance details, "Licensed & insured" — unless owner-confirmed
- Years in business, jobs completed, customers served counts
- Certifications, awards, "Best of..." claims
- Pricing claims, satisfaction guarantees, money-back terms
- Same-day, emergency, 24/7 availability — unless owner-confirmed
- Customer or team names beyond Scott & Nicole Maland
- Before/after outcome claims attached to specific customers

If any of the above would strengthen the copy, generate the surrounding section without it and flag with a `<!-- TODO-VERIFY: ... -->` HTML comment in the draft.

## Output Format

Return the content as a single markdown block per page, with sections numbered 1–8 as above. Do not return raw JSX — leave that to the build prompt (Batch 2–6).

## Stop Conditions

- If the input is missing the primary keyword, target audience, or verified differentiators, stop and request the missing input before generating.
- If a section would require an unverified claim to feel complete, generate it with the claim omitted and flag with TODO-VERIFY.
