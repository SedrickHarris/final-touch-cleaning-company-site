# Local SEO/AEO Location Page Research Prompt

Research half (Prompt A) for individual city / location pages.

## Routing

- Page type: Individual Location Page
- AI depth: Level 3 Core SEO/AEO
- Per `docs/prompt-router-and-ai-depth-standard.md`

## Source-of-Truth Docs

- `docs/brand-guide.md`
- `docs/site-build-plan.md`
- `docs/site-os/final-touch-build-context.md` (or client equivalent)
- `docs/site-os/no-fake-data-policy.md`
- `docs/site-os/reference/seo-aeo-content-standards.md`
- `docs/site-os/reference/service-business-design-standards.md`
- Site OS Master:
  - `docs/prompt-router-and-ai-depth-standard.md`
  - `docs/keyword-research-and-aeo-depth-standard.md`
  - `docs/high-value-page-enforcement-standard.md`
  - `docs/pass-fail-page-quality-gates.md`

## Required Pre-Build Deliverables

### 1. Page Type Classification

```
- Page type: Location Page (<city slug>)
- Page value: High
- Search intent: Local commercial
- AI depth selected: Level 3 Core SEO/AEO
- QA gate: docs/pass-fail-page-quality-gates.md
```

### 2. Local Keyword Map

- Primary local keyword (e.g., "cleaning services Henderson NV")
- Secondary local keywords
- City modifiers + service term combinations
- Near-me terms
- Neighborhood references (only those documented in `lib/constants/routes.ts` / `site-build-plan.md`)
- AEO question targets ("Does X serve Henderson?")

### 3. Local Relevance Plan

- Real local context (public-knowledge characteristics: master-planned, downtown, hillside, lake-adjacent)
- Customer segments specific to this city
- Service types in highest demand for this city
- Internal link to parent county / hub page

### 4. AEO FAQ Map

Minimum 5–8 city-specific FAQs. Coverage required:

- "Does Final Touch serve <City>?"
- "What areas of <City> do you cover?"
- "What services do you offer in <City>?"
- City-specific scheduling / coverage question
- "Where is Final Touch based?" (service-area-only positioning, no street address)
- At least 1 unique-to-this-city FAQ (anti-doorway)

### 5. Section Plan

- Hero (split with form) with H1 including service + city
- Quick local answer (first 100 words)
- Local cleaning needs (specific to this city's housing or business context)
- Popular services in this area (`ServiceCard` grid with image placeholders)
- Why Final Touch serves this area well (verified positioning, no invented credentials)
- Nearby neighborhoods or related cities (internal links)
- AEO FAQ section
- Final CTA section

### 6. Metadata Plan

- `title`: "Cleaning Services in <City>, NV | <Brand>"
- `description`: 140–160 chars, includes city + service + phone
- `canonical` set

### 7. Schema Plan

- `LocalBusiness` JSON-LD: NO `streetAddress` for service-area-only businesses
- `areaServed` set to verified city + county
- `FAQPage` JSON-LD from visible FAQ
- `BreadcrumbList` JSON-LD
- No `AggregateRating` / `Review` unless owner-supplied verified data

### 8. Internal Link Plan

- Service pages relevant to this city
- Parent county / locations hub
- Free quote page
- Contact page
- (TODO-BATCH-N for forward-looking neighborhood pages)

## Customer-Facing Copy Rules

- No em dashes, no double hyphens
- No fake street address (service-area-only)
- No invented neighborhoods or city districts
- No fake response-time, same-day, emergency claims
- No fake customer counts ("we've cleaned 1,000+ homes in Henderson")
- Generic public-knowledge city facts are acceptable (population scale, climate, master-planned status)

## Output Format

Return one structured markdown block with all 8 deliverables. No file changes.

---

Site OS Master — Local SEO/AEO Location Page Research Prompt v1.0
