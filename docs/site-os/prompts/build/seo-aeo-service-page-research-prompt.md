# SEO/AEO Service Page Research Prompt

Research half (Prompt A) for individual service pages. Outputs a plan only.

## Routing

- Page type: Individual Service Page
- AI depth: Level 3 Core SEO/AEO, or Level 5 for core revenue services
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
  - `docs/service-business-conversion-layout.md`
  - `docs/service-card-image-placeholder-standard.md`

## Required Pre-Build Deliverables

### 1. Page Type Classification

```
- Page type: Service Page (<service slug>)
- Page value: High
- Search intent: Transactional / Commercial Investigation
- AI depth selected: Level 3 or Level 5 (based on revenue importance)
- QA gate: docs/pass-fail-page-quality-gates.md
```

### 2. Service Keyword Map

- Primary service keyword (e.g., "post-construction cleanup Las Vegas")
- Secondary service keywords
- Long-tail terms (e.g., "post-construction cleaning checklist Las Vegas")
- Local modifiers (city, county, neighborhood — verified only)
- Pain points and pain-point keywords
- Transactional terms (quote, estimate, call, schedule)
- Informational terms (what is, what's included, how often)
- Service-specific FAQ question targets
- Internal link anchor targets

### 3. Service Pain Points

What problems trigger a customer to search for this service. 3–6 pain points minimum.

### 4. AEO FAQ Map

Minimum 5–8 service-specific FAQs. Coverage required:

- "What does this service include?"
- "How is this service different from [related service]?"
- "Who hires this service?"
- "Where do you offer this service?" (service area affirmation)
- "How do I get a quote for this service?"
- Service-specific transactional question
- Service-specific objection handler

### 5. Section Plan

Service page section structure (per `page-templates/service-page-template.md` + Service Business Conversion Layout):

- Hero (split with form) with H1 including service + primary location
- Quick-answer paragraph in the first 100 words
- Who this service is for
- What is included
- Why Final Touch / Why this service
- Service process (optional `HowTo` schema only if visible steps match exactly)
- Service areas (links to Tier 3 city pages)
- Related services (`ServiceCard` grid with image placeholders)
- AEO FAQ section
- Final CTA section

### 6. Metadata Plan

- `title`: "<Service> Services in <Location>, NV | <Brand>"
- `description`: 140–160 chars, includes service, area, phone, verified differentiator
- `canonical` set

### 7. Schema Plan

- `Service` JSON-LD: `name`, `serviceType`, `provider` (Organization), `areaServed`
- `FAQPage` JSON-LD generated from visible FAQ array (no schema-only Q/A)
- `BreadcrumbList` JSON-LD
- No `AggregateRating` / `Review` schema unless owner-supplied verified data
- `HowTo` only if visible numbered steps exist and match exactly

### 8. Internal Link Plan

- 6+ outbound internal links: cities + related services + free quote + contact
- Anchor text natural and descriptive

### 9. Related Services Plan

The Related Services grid uses `ServiceCard` + `ServiceImagePlaceholder` per `docs/service-card-image-placeholder-standard.md`. Image placeholder required on every card.

## Customer-Facing Copy Rules

- No em dashes, no double hyphens
- No fake claims (license, insurance, awards, years, certifications, pricing, guarantees, response times, same-day, emergency, 24/7)
- No doorway content (city-swapping)
- Natural keyword placement (2–4× primary, 1–2× each secondary)

## Output Format

Return one structured markdown block with all 9 deliverables. No file changes.

---

Site OS Master — SEO/AEO Service Page Research Prompt v1.0
