# SEO / AEO Content Standards (Client-Side Reference)

The standards every Final Touch page must meet for SEO and answer-engine readiness. Pairs with `docs/site-os/no-fake-data-policy.md` (which governs *what* can be claimed) — this doc governs *how* content is structured.

## Page-Level SEO Standards

### URL Slugs

- All lowercase, hyphen-separated
- No trailing slash
- No stop words unless keyword-critical
- Max 5–6 words per slug
- No dates in service or location slugs

### One H1 Per Page

- Exactly one `<h1>` per route
- H1 includes the primary keyword naturally
- H1 includes the target location (if local)
- H1 is human-readable, not a keyword string

### Heading Hierarchy

- H1 → H2 → H3, no skipped levels
- 3–8 H2s per page (homepage may have more sections, FAQ may have fewer)
- H3s nest under H2s where subsections exist

### Meta Title

- 50–60 characters
- Unique across the site
- Format: `<Specific Topic> in <Location>, NV | Final Touch`
- Primary keyword present
- Brand name at the end

### Meta Description

- 140–160 characters
- Unique across the site
- Includes primary keyword + service area + phone
- Includes one verified differentiator (family-owned, Clark County, detail-focused)
- No fake claims (no "5-star rated", no "Licensed & insured" unless verified)

### Canonical URL

- Self-referencing canonical on every indexable page
- Set via `alternates.canonical` in the Next.js metadata export

### Internal Linking

- Minimum 3 internal outbound links per page (target: 5–8)
- Anchor text is natural and descriptive (never "click here" or "learn more")
- Links resolve in production (no permanent 404s)
- Each page has at least 1 inbound link from another page (no orphans)
- Internal links support topical authority (link from service page → location pages and vice versa)

## AEO (Answer Engine Optimization) Standards

### Direct-Answer Format

The opening paragraph (first 100 words) must answer the page's primary search intent directly.

Required structure:
1. **Sentence 1:** Names the business, the service or topic, and the location (where applicable).
2. **Sentence 2:** Clarifies or adds trust-building detail using verified facts only.
3. **Sentence 3 (optional):** Restates the primary CTA or routes the visitor.

Example for a service page:
> Final Touch Cleaning Company provides post-construction cleanup across Clark County, Nevada — including Las Vegas, Henderson, North Las Vegas, and Boulder City. Our team focuses on the small details that make a new build feel finished: dust on every surface, residue around fixtures, paint flecks on baseboards. Request a free quote or call (702) 444-5077.

### Question-Based Headings

Where natural, phrase H2/H3 as questions. Examples:
- "What's included in our deep cleaning service?"
- "How do you handle post-construction dust?"
- "Do you serve [neighborhood]?"

Question headings make content easier for featured snippets, PAA, and voice assistants to extract.

### FAQ Standards

Every service / location / neighborhood / service+city page includes a FAQ section.

- **Count:** 4–6 minimum for service / location / neighborhood / service+city; 5–8 for homepage / hub.
- **Question phrasing:** Real customer questions, in natural language. No keyword-stuffed Qs.
- **Answer length:** 40–80 words each.
- **Answer structure:** Direct answer first, clarification second, optional CTA third.
- **Voice-search readiness:** At least 1 FAQ phrased as a conversational question.
- **No duplication:** FAQs don't repeat body content verbatim.
- **Visible match:** `FAQPage` JSON-LD matches visible FAQ text exactly. No schema-only Q&A.

### Snippet-Ready Sections

Most pages should include at least one section that could be lifted as a featured snippet:
- 40–60 word definitions
- Numbered process steps
- Comparison tables (where data exists)
- Clean bullet lists

Keep snippet candidates free of embedded CTAs and side-conversations.

### Voice Search Readiness

- Conversational phrasing in at least 1 H2 + 1 FAQ
- Long-tail keyword coverage ("how much does deep cleaning cost in Las Vegas", "do you clean after construction")
- Natural-language answers, not keyword stacks

### AI / LLM Citation Readiness

- Plain-language entity statements
- Citation-worthy factual sentences (defensible, neither hyped nor hedged)
- No hidden text, no schema-only claims, no unsupported numerical assertions
- Internal links that an LLM can follow to build a fuller picture of the business

## Local SEO Standards

### Service Area

- Service area drawn from `lib/constants/site.ts` — Clark County + Las Vegas, Henderson, North Las Vegas, Boulder City
- Service area named in body of every local page
- No invented cities, neighborhoods, or zip codes outside the verified list
- No street address (Final Touch is service-area only — no `address` in `LocalBusiness` schema)

### Local Modifiers

- Use natural local phrasing ("cleaning services in Henderson") not keyword stacks ("Henderson cleaning service Henderson cleaning")
- Target one location per page (city or neighborhood)
- Mention nearby areas only when relevant

### Local Entities

- Reference real, publicly known local landmarks / districts only ("downtown Las Vegas", "Lake Las Vegas", "Henderson Hospital corridor") — never invent
- Avoid claiming partnerships with named local businesses unless owner-confirmed

## No-Doorway-Page Discipline

For location, neighborhood, and service+city pages:

- At least 250 words of body content per page beyond boilerplate
- Local context section references something specific to the area (not a literal city-name swap)
- At least 1 FAQ per page has a city-specific answer that wouldn't be correct on a sibling page
- Service-card ordering or phrasing varies meaningfully across sibling pages

## No-Keyword-Stuffing Discipline

Avoid:
- Primary keyword repeated 5+ times in a single paragraph
- H1 + H2 + H3 all using the exact same keyword
- Footer / nav using exact-match anchor 10+ times
- Hidden text (`display: none`, `visibility: hidden`, `color: transparent`)
- Awkward "for X in Y, the best X in Y is Y's X" constructions

Target keyword density: primary 2–4× in body, secondaries 1–2× each.

## Schema Standards

### Always Include (Where Applicable)

- `BreadcrumbList` — when the URL has hierarchy
- `FAQPage` — when a visible FAQ section exists (exact text match)
- `LocalBusiness` — on local pages (no street address, accurate `areaServed`)
- `Service` — on service / service+city pages
- `Organization` — on About page
- `WebPage` — base type, optional

### Conditional

- `Person` — Scott & Nicole on About page, only with consent
- `HowTo` — only if visible numbered steps exist and match exactly

### Never Include (Until Owner-Verified)

- `AggregateRating` — only with verified rating value + count + visible matching content
- `Review` — only with verified attributed review + consent + visible matching content
- `Offer` with `price` — only with owner-confirmed pricing

### Schema-Matches-Visible-Content Rule

Every property emitted in JSON-LD must correspond to verified data AND (where applicable) visible page content. If a value would be invented to fill a schema field, omit the field entirely.

## Final Touch–Specific Conventions

- Phone format: `(702) 444-5077` in display, `tel:+17024445077` in links
- Email format: `info@finaltouchcleaningteam.com`
- Service area: Clark County, Nevada — Las Vegas, Henderson, North Las Vegas, Boulder City
- Owners: Scott & Nicole Maland (always paired, not solo)
- Core message: "Where small details bring BIG RESULTS."
- Voice: professional, trustworthy, family-owned, local, detail-focused, premium but approachable
- Avoid: hype words, exclamation overload, "world-class", "industry-leading", "best of"
