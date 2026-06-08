# Final Touch Cleaning Company — Website Build Plan
**finaltouchcleaningteam.com · URL Slug Strategy · 280+ Pages**

Prepared for Scott & Nicole Maland, Owners
Serving: Clark County · Las Vegas · Henderson · North Las Vegas · Boulder City
Contact: (702) 444-5077 · info@finaltouchcleaningteam.com

---

## Build Goal

Build a modern, SEO-optimized local service website that:

1. Generates quote requests and phone calls
2. Ranks for cleaning service searches across Southern Nevada
3. Builds topical authority around all seven core services
4. Supports Google, Bing, Apple Maps, voice search, AI search, and LLM visibility
5. Creates a scalable page system that grows from launch (~75 pages) to 280+

This is not a brochure site. It is a programmatic local SEO service site built on reusable templates for every page category.

---

## Rollout Milestones

| Phase | Timeline | Pages | Focus |
|-------|----------|-------|-------|
| Phase 1 | Weeks 1–4 | 0 (off-site) | GBP, Apple Business Connect, Bing Places, Yelp, call tracking, Microsoft Clarity |
| Phase 2 | Weeks 5–12 | ~75 at launch | Core brand, 7 services, 5 cities, 10 neighborhoods, builder pages, blog |
| Phase 3 | Months 3–6 | ~150 cumulative | Full Tier 4 city matrix, industry pages, seasonal, urgency, problem-based, Spanish |
| Phase 4 | Months 6–12 | 280+ total | Neighborhood service matrix, case studies, content assets, community presence |

---

## URL Slug Rules

These rules apply to every page on the site.

**Formatting**
- All lowercase, hyphen-separated
- No trailing slashes
- No stop words (a, the, in, for) unless keyword-critical
- Maximum 5–6 words per slug
- No dates in service or location slugs

**Structural Rules by Page Type**

| Page type | Pattern | Example |
|-----------|---------|---------|
| Core brand pages | `/[page]` | `/about` |
| Service pages | `/services/[service-name]` | `/services/deep-cleaning` |
| City pages | `/locations/[city]` | `/locations/henderson` |
| Neighborhood pages | `/locations/[city]/[neighborhood]` | `/locations/henderson/cadence` |
| Service + city pages | `/services/[service]/[city]` | `/services/deep-cleaning/henderson` |
| Service + neighborhood | `/services/[service]/[neighborhood]` | `/services/post-construction-cleanup/cadence` |
| Builder pages | `/builders/[builder]-post-construction-cleaning` | `/builders/pulte-homes-post-construction-cleaning` |
| Industry pages | `/industries/[industry]-cleaning/[city]` | `/industries/medical-office-cleaning/las-vegas` |
| Seasonal pages | `/seasonal/[topic]` | `/seasonal/spring-cleaning-las-vegas` |
| Urgency pages | `/urgent-cleaning/[topic]` | `/urgent-cleaning/same-day-cleaning-las-vegas` |
| Problem-based pages | `/cleaning-solutions/[problem]` | `/cleaning-solutions/pet-hair-removal-cleaning` |
| Community pages | `/communities/[community]-cleaning-services` | `/communities/sun-city-anthem-cleaning-services` |
| Spanish pages | `/es/[slug-en-espanol]` | `/es/limpieza-profunda-las-vegas` |
| Blog posts | `/blog/[post-slug]` | `/blog/post-construction-cleaning-checklist-las-vegas` |

**Canonical & Redirect Rules**
- Self-referencing canonical tag on every page
- 301 redirects for any legacy URLs (current GreenGeeks placeholder has none — clean slate)
- Enforce www or non-www consistently — pick one at launch and redirect the other
- HTTP → HTTPS enforced at server level

**Slug Decision Notes**

Service + location pages use the `/services/[service]/[city]` nested pattern. This keeps the structure organized and crawlable as the page count scales toward 280+. Internal linking and schema compensate for nesting depth at this scale.

Neighborhoods are nested under their parent city (`/locations/henderson/cadence`) to signal geographic hierarchy to Google and prevent slug collisions. There are two neighborhoods named Aliante — one in Las Vegas, one in North Las Vegas — and nesting resolves the ambiguity cleanly.

Specialized categories (builders, industries, seasonal, urgency, problem-based, communities) use dedicated subfolders. These pages are not targeting exact-match head terms, so subfolder organization carries no SEO penalty and improves site structure clarity.

Spanish pages use `/es/` as a subfolder, not a subdomain. This keeps all domain authority consolidated. All pages carry `hreflang="es"` tags with cross-references to their English equivalents.

---

## Tier 1 — Core Brand Pages
*Launch phase · ~19 pages*

Foundation pages linked from global navigation on every page of the site.

### Static Brand Pages

| Page | Slug |
|------|------|
| Home | `/` |
| About | `/about` |
| Services hub | `/services` |
| Locations hub | `/locations` |
| Reviews & Testimonials | `/reviews` |
| Before & After Gallery | `/gallery` |
| Pricing & Packages | `/pricing` |
| FAQ Hub | `/faq` |
| Contact | `/contact` |
| Free Quote | `/free-quote` |

### Trust & Credibility Pages

| Page | Slug |
|------|------|
| Our Team | `/our-team` |
| Our Cleaning Process | `/cleaning-process` |
| Certifications & Licensing | `/certifications` |
| Privacy Policy | `/privacy-policy` |
| Terms of Service | `/terms-of-service` |
| Accessibility Statement | `/accessibility-statement` |
| Cookie Policy | `/cookie-policy` |

### Technical / Utility Pages

| Page | Slug |
|------|------|
| HTML Sitemap | `/sitemap` |
| Custom 404 | `/404` |
| Thank You / Confirmation | `/thank-you` |

### Infrastructure Files (root-level, not pages)

- `robots.txt` — crawl directives
- `sitemap.xml` — submitted to GSC and Bing Webmaster at launch
- `llms.txt` — declares which pages AI crawlers should prioritize (ChatGPT, Perplexity, Claude)

---

## Tier 2 — Service Pages
*Launch phase · 7 pages*

One dedicated page per service. Each targets a specific high-intent keyword and speaks directly to that service's customer. Every service page links to all city-level combinations for that service (Tier 4).

Pattern: `/services/[service-name]`

| Page | Slug | H1 | Primary Keyword |
|------|------|-----|-----------------|
| Commercial & Office Cleaning | `/services/commercial-office-cleaning` | Commercial & Office Cleaning Services in Las Vegas, NV | commercial cleaning services Las Vegas |
| Janitorial Services | `/services/janitorial-services` | Janitorial Services in Las Vegas, NV | janitorial services Las Vegas |
| Post-Construction Cleanup | `/services/post-construction-cleanup` | Post-Construction Cleanup in Las Vegas, NV | post construction cleaning Las Vegas |
| Move-In Cleaning | `/services/move-in-cleaning` | Move-In Cleaning Services in Las Vegas, NV | move in cleaning service Las Vegas |
| Move-Out Cleaning | `/services/move-out-cleaning` | Move-Out Cleaning Services in Las Vegas, NV | move out cleaning service Las Vegas |
| Deep Cleaning | `/services/deep-cleaning` | Deep Cleaning Services in Las Vegas, NV | deep cleaning service Las Vegas |
| Retail Space Cleaning | `/services/retail-space-cleaning` | Retail Space Cleaning Services in Las Vegas, NV | retail cleaning services Las Vegas |

### Service Page Template

Each service page includes:

- Hero with service-specific H1 and CTA
- Who this service is for
- What is included
- Common cleaning needs
- Why Final Touch
- Service process (with HowTo schema)
- Service areas (linking to Tier 3 and Tier 4 pages)
- FAQ section (with FAQPage schema)
- Free quote CTA
- Internal links to related locations and related services

---

## Tier 3 — Location Pages
*Launch phase · 25 pages*

Pure informational location pages. Every page contains unique, research-backed content referencing each area's housing stock, construction activity, demographics, local landmarks, and specific cleaning needs.

Every city page links to all neighborhood children and all Tier 4 service combinations for that city. Every neighborhood page links to its parent city and relevant Tier 4 service combinations.

### City Pages

Pattern: `/locations/[city-name]`

| Page | Slug |
|------|------|
| Las Vegas | `/locations/las-vegas` |
| Henderson | `/locations/henderson` |
| North Las Vegas | `/locations/north-las-vegas` |
| Boulder City | `/locations/boulder-city` |
| Clark County | `/locations/clark-county` |

### Neighborhood Pages

Pattern: `/locations/[city]/[neighborhood]`

**Las Vegas**

| Neighborhood | Slug |
|--------------|------|
| Summerlin | `/locations/las-vegas/summerlin` |
| Downtown Las Vegas | `/locations/las-vegas/downtown-las-vegas` |
| Spring Valley | `/locations/las-vegas/spring-valley` |
| Centennial Hills | `/locations/las-vegas/centennial-hills` |
| Sunrise Manor | `/locations/las-vegas/sunrise-manor` |
| Paradise / Strip | `/locations/las-vegas/paradise-strip` |
| Arts District | `/locations/las-vegas/arts-district` |
| Southern Highlands | `/locations/las-vegas/southern-highlands` |
| Aliante (LV) | `/locations/las-vegas/aliante` |

**Henderson**

| Neighborhood | Slug |
|--------------|------|
| Green Valley | `/locations/henderson/green-valley` |
| Green Valley Ranch | `/locations/henderson/green-valley-ranch` |
| Anthem | `/locations/henderson/anthem` |
| MacDonald Highlands | `/locations/henderson/macdonald-highlands` |
| Seven Hills | `/locations/henderson/seven-hills` |
| Lake Las Vegas | `/locations/henderson/lake-las-vegas` |
| Cadence | `/locations/henderson/cadence` |
| Tuscany Village | `/locations/henderson/tuscany-village` |
| Inspirada | `/locations/henderson/inspirada` |

**North Las Vegas**

| Neighborhood | Slug |
|--------------|------|
| Nellis Area | `/locations/north-las-vegas/nellis-area` |
| Aliante (NLV) | `/locations/north-las-vegas/aliante` |

### Location Page Template

Each location page includes:

- Hero with location-specific headline
- Cleaning needs specific to the area
- Popular services in that location
- Local housing and business context
- Nearby neighborhoods (internal links)
- Why Final Touch serves this area well
- FAQ section
- Free quote CTA
- Internal links to all service + location pages for that area

---

## Tier 4 — Service + Location Matrix
*Phase 3–4 · 85+ pages*

The most important layer for local search dominance. Each service paired with a city or neighborhood creates a hyper-local page that national franchises cannot target. Every Tier 4 page links back to its Tier 2 service parent and its Tier 3 location parent.

### Phase 3 — Service + City Pages (35 pages)

Pattern: `/services/[service]/[city]`

| Service | Las Vegas | Henderson | N. Las Vegas | Boulder City |
|---------|-----------|-----------|--------------|--------------|
| Commercial & Office | `/services/commercial-office-cleaning/las-vegas` | `/services/commercial-office-cleaning/henderson` | `/services/commercial-office-cleaning/north-las-vegas` | `/services/commercial-office-cleaning/boulder-city` |
| Janitorial | `/services/janitorial-services/las-vegas` | `/services/janitorial-services/henderson` | `/services/janitorial-services/north-las-vegas` | `/services/janitorial-services/boulder-city` |
| Post-Construction | `/services/post-construction-cleanup/las-vegas` | `/services/post-construction-cleanup/henderson` | `/services/post-construction-cleanup/north-las-vegas` | `/services/post-construction-cleanup/boulder-city` |
| Move-In | `/services/move-in-cleaning/las-vegas` | `/services/move-in-cleaning/henderson` | `/services/move-in-cleaning/north-las-vegas` | `/services/move-in-cleaning/boulder-city` |
| Move-Out | `/services/move-out-cleaning/las-vegas` | `/services/move-out-cleaning/henderson` | `/services/move-out-cleaning/north-las-vegas` | `/services/move-out-cleaning/boulder-city` |
| Deep Cleaning | `/services/deep-cleaning/las-vegas` | `/services/deep-cleaning/henderson` | `/services/deep-cleaning/north-las-vegas` | `/services/deep-cleaning/boulder-city` |
| Retail Space | `/services/retail-space-cleaning/las-vegas` | `/services/retail-space-cleaning/henderson` | `/services/retail-space-cleaning/north-las-vegas` | `/services/retail-space-cleaning/boulder-city` |

*Clark County hub: `/services/[service]/clark-county` for each of the 7 services (7 additional pages).*

### Phase 4 — Service + Neighborhood Pages (50+ pages)

Pattern: `/services/[service]/[neighborhood]`

**Post-Construction Cleanup** (active new construction zones)

| Location | Slug |
|----------|------|
| Cadence | `/services/post-construction-cleanup/cadence` |
| Summerlin | `/services/post-construction-cleanup/summerlin` |
| Inspirada | `/services/post-construction-cleanup/inspirada` |
| Southern Highlands | `/services/post-construction-cleanup/southern-highlands` |
| Centennial Hills | `/services/post-construction-cleanup/centennial-hills` |

**Deep Cleaning & Move-In** (luxury residential)

| Location | Slug |
|----------|------|
| MacDonald Highlands | `/services/deep-cleaning/macdonald-highlands` |
| Seven Hills | `/services/deep-cleaning/seven-hills` |
| Anthem | `/services/deep-cleaning/anthem` |
| Lake Las Vegas | `/services/deep-cleaning/lake-las-vegas` |
| Green Valley Ranch | `/services/move-in-cleaning/green-valley-ranch` |
| Tuscany Village | `/services/move-in-cleaning/tuscany-village` |

**Commercial & Retail** (business corridors)

| Location | Slug |
|----------|------|
| Downtown Las Vegas | `/services/commercial-office-cleaning/downtown-las-vegas` |
| Arts District | `/services/commercial-office-cleaning/arts-district` |
| Paradise / Strip | `/services/retail-space-cleaning/paradise-strip` |
| Green Valley Ranch | `/services/retail-space-cleaning/green-valley-ranch` |

**Move-Out & Move-In** (high-turnover rental markets)

| Location | Slug |
|----------|------|
| Spring Valley | `/services/move-out-cleaning/spring-valley` |
| Sunrise Manor | `/services/move-out-cleaning/sunrise-manor` |
| Nellis Area | `/services/move-out-cleaning/nellis-area` |

**Janitorial Services** (commercial districts)

| Location | Slug |
|----------|------|
| Downtown Las Vegas | `/services/janitorial-services/downtown-las-vegas` |
| Paradise / Strip | `/services/janitorial-services/paradise-strip` |
| Green Valley Ranch | `/services/janitorial-services/green-valley-ranch` |

### Service + Location Page Template

Each service + location page includes:

- Hero with exact service + location H1
- Local need explanation (specific to that area's housing or business context)
- Who hires this service in that specific area
- What is included
- Local proof or context
- Related services (internal links)
- Related nearby locations (internal links)
- FAQ section (with FAQPage schema)
- Free quote CTA
- LocalBusiness + Service schema

---

## Specialized Pages
*Phase 3–4 · 60+ pages*

### Builder-Specific Post-Construction Pages (10 pages)

Pattern: `/builders/[builder-name]-post-construction-cleaning`

These pages capture contractors and new homeowners searching by builder name. No local competitor is currently targeting this category. They also function as B2B sales tools for outreach to each builder's project management teams.

| Builder | Slug |
|---------|------|
| Toll Brothers | `/builders/toll-brothers-post-construction-cleaning` |
| Pulte Homes | `/builders/pulte-homes-post-construction-cleaning` |
| D.R. Horton | `/builders/dr-horton-post-construction-cleaning` |
| Lennar Homes | `/builders/lennar-post-construction-cleaning` |
| KB Home | `/builders/kb-home-post-construction-cleaning` |
| Taylor Morrison | `/builders/taylor-morrison-post-construction-cleaning` |
| Tri Pointe Homes | `/builders/tri-pointe-homes-post-construction-cleaning` |
| Century Communities | `/builders/century-communities-post-construction-cleaning` |
| Shea Homes | `/builders/shea-homes-post-construction-cleaning` |
| Taylor Morrison at Ascension | `/builders/taylor-morrison-ascension-post-construction-cleaning` |

### Industry-Specific Commercial Pages (18 pages)

Pattern: `/industries/[industry]-cleaning/[city]`

Commercial decision-makers search by industry, not by the word "commercial." Targeting 6 industries across 3 cities.

| Industry | Las Vegas | Henderson | N. Las Vegas |
|----------|-----------|-----------|--------------|
| Medical & Dental | `/industries/medical-office-cleaning/las-vegas` | `/industries/medical-office-cleaning/henderson` | `/industries/medical-office-cleaning/north-las-vegas` |
| Law Firms | `/industries/law-firm-cleaning/las-vegas` | `/industries/law-firm-cleaning/henderson` | `/industries/law-firm-cleaning/north-las-vegas` |
| Restaurants | `/industries/restaurant-cleaning/las-vegas` | `/industries/restaurant-cleaning/henderson` | `/industries/restaurant-cleaning/north-las-vegas` |
| Retail Stores | `/industries/retail-store-cleaning/las-vegas` | `/industries/retail-store-cleaning/henderson` | `/industries/retail-store-cleaning/north-las-vegas` |
| Property Management | `/industries/property-management-cleaning/las-vegas` | `/industries/property-management-cleaning/henderson` | `/industries/property-management-cleaning/north-las-vegas` |
| Chiropractic & PT | `/industries/chiropractic-cleaning/las-vegas` | `/industries/chiropractic-cleaning/henderson` | `/industries/chiropractic-cleaning/north-las-vegas` |

### Seasonal Pages (7 pages)

Pattern: `/seasonal/[topic]`

Evergreen pages that rank year-round and capture major traffic spikes during their specific seasons.

| Page | Slug | Peak Traffic Window |
|------|------|---------------------|
| Spring Cleaning Las Vegas | `/seasonal/spring-cleaning-las-vegas` | March–May (+400–500%) |
| Holiday Cleaning Services | `/seasonal/holiday-cleaning-services` | November–December |
| Post-Holiday Cleanup | `/seasonal/post-holiday-cleanup` | January |
| Summer Deep Cleaning | `/seasonal/summer-deep-cleaning` | June–August |
| Back-to-School Home Reset | `/seasonal/back-to-school-home-reset` | August |
| Move-Out Cleaning for College Students | `/seasonal/move-out-cleaning-for-college-students` | May–June (UNLV) |
| New Year's Clean Start | `/seasonal/new-years-clean-start` | Late December–January |

### Emergency & Urgency Pages (4 pages)

Pattern: `/urgent-cleaning/[topic]`

High commercial intent — customers ready to book immediately. Higher conversion rates than standard service pages because urgency is already established.

| Page | Slug |
|------|------|
| Same-Day Cleaning Las Vegas | `/urgent-cleaning/same-day-cleaning-las-vegas` |
| Emergency Cleaning Services | `/urgent-cleaning/emergency-cleaning-services` |
| Last-Minute Move-Out Cleaning | `/urgent-cleaning/last-minute-move-out-cleaning` |
| Weekend Cleaning Services | `/urgent-cleaning/weekend-cleaning-services` |

### Problem-Based Pages (5 pages)

Pattern: `/cleaning-solutions/[problem]`

Target the reason a customer needs cleaning rather than the service type. Captures searches that service pages miss entirely.

| Page | Slug |
|------|------|
| Pet Hair Removal | `/cleaning-solutions/pet-hair-removal-cleaning` |
| Allergy & Dust Mitigation | `/cleaning-solutions/allergy-dust-mitigation-cleaning` |
| Hard Water Stain Removal | `/cleaning-solutions/hard-water-stain-removal` |
| Smoke & Odor Removal | `/cleaning-solutions/smoke-odor-removal` |
| Post-Illness Deep Sanitation | `/cleaning-solutions/post-illness-deep-sanitation-cleaning` |

### 55+ Community Pages (3 pages)

Pattern: `/communities/[community]-cleaning-services`

Active adult communities represent a highly profitable residential segment — retirees who own their homes, value reliability, and generate consistent move-in and move-out demand.

| Community | Slug |
|-----------|------|
| Sun City Anthem | `/communities/sun-city-anthem-cleaning-services` |
| Sun City Summerlin | `/communities/sun-city-summerlin-cleaning-services` |
| Heritage at Cadence | `/communities/heritage-at-cadence-cleaning-services` |

### Spanish-Language Pages (7 pages)

Pattern: `/es/[slug-en-espanol]`

Clark County's Hispanic population is approximately 30%, with significant Spanish-language search volume. Near-zero local competitors maintain Spanish-language content. All pages carry `hreflang="es"` tags with cross-references to their English equivalents.

| Page | Slug |
|------|------|
| Limpieza Comercial | `/es/servicio-de-limpieza-comercial-las-vegas` |
| Limpieza Post-Construcción | `/es/servicio-de-limpieza-post-construccion-las-vegas` |
| Limpieza Profunda | `/es/servicio-de-limpieza-profunda-las-vegas` |
| Limpieza para Mudanza | `/es/servicio-de-limpieza-para-mudanza-las-vegas` |
| Limpieza Residencial | `/es/servicio-de-limpieza-residencial-las-vegas` |
| Preguntas Frecuentes | `/es/preguntas-frecuentes` |
| Contacto y Cotización | `/es/contacto-cotizacion-gratis` |

---

## Blog & Content
*Launch phase + ongoing*

Pattern: `/blog/[post-slug]`

### Blog Hub & Category Pages

| Page | Slug |
|------|------|
| Blog home | `/blog` |
| Post-Construction category | `/blog/post-construction-cleaning` |
| Move-In / Move-Out category | `/blog/move-in-move-out-cleaning` |
| Commercial Cleaning category | `/blog/commercial-cleaning` |
| Neighborhood Guides category | `/blog/neighborhood-cleaning-guides` |
| Cleaning FAQs category | `/blog/cleaning-faqs` |

### Launch Blog Posts

| Post | Slug |
|------|------|
| Post-construction cleaning checklist Las Vegas | `/blog/post-construction-cleaning-checklist-las-vegas` |
| Move-out cleaning checklist for renters | `/blog/move-out-cleaning-checklist-for-renters` |
| How often should an office be cleaned | `/blog/how-often-should-an-office-be-cleaned` |
| Deep cleaning vs regular cleaning | `/blog/deep-cleaning-vs-regular-cleaning` |
| Summerlin move-in cleaning guide | `/blog/summerlin-move-in-cleaning-guide` |
| Cadence post-construction cleaning guide | `/blog/cadence-post-construction-cleaning-guide` |

Publishing cadence: 2 posts per month at launch, scaling over time. Every post links to 2–3 relevant service or location pages.

---

## Internal Linking Architecture

| From | Links To |
|------|----------|
| Home | All 7 Tier 2 service pages + all 5 Tier 3 city pages |
| Every Tier 2 service page | All city-level Tier 4 combos for that service |
| Every Tier 3 city page | All neighborhood children + all Tier 4 combos for that city |
| Every Tier 3 neighborhood page | Parent city page + relevant Tier 4 service combos |
| Every Tier 4 page | Its Tier 2 service parent + its Tier 3 location parent |
| Builder pages | Post-construction service page + relevant city page |
| Industry pages | Commercial cleaning service page + relevant city page |
| Blog posts | 2–3 relevant service and/or location pages |
| Spanish pages | Corresponding English page (`hreflang` cross-reference) |

---

## Conversion Elements (Every Major Page)

- Click-to-call phone button (mobile-optimized)
- Free quote CTA above the fold
- Short quote request form
- Mobile sticky CTA bar
- Blue Ribbon Guarantee callout (100% satisfaction or return within 24 hours)
- Licensed & insured trust signal
- Owner-led family business trust signal (Scott & Nicole)
- Service area clearly stated
- FAQ section

---

## Brand & Design Direction

| Element | Specification |
|---------|--------------|
| Primary Blue | `#1A5FB4` — CTAs, headlines, buttons, accents |
| Black | `#1A1A1A` — body text, contrast elements |
| White | `#FFFFFF` — backgrounds, breathing room |
| Headline font | Fraunces (warm modern serif — authority + approachability) |
| Body font | Manrope (clean geometric sans-serif — navigation, buttons, body copy) |
| Aesthetic | Clean, premium, white-space heavy, family-owned warmth |
| Photography | Cleaning teams, homes, offices, construction cleanup, finished spaces |

---

## Search Coverage (12 Surfaces)

| Surface | Strategy |
|---------|----------|
| Google organic | Tiered architecture creates topical authority; each page targets one keyword |
| Google Map Pack | GBP optimization, review velocity, weekly posts, Q&A population |
| Google AI Overviews | Structured Q&A format, FAQPage schema, entity-rich content |
| Featured snippets / PAA | Question-based H2s with 40–60 word answers, HowTo schema |
| ChatGPT / Claude / Perplexity | Citation-worthy factual content, `llms.txt` file, third-party mentions |
| Bing organic | Bing Webmaster Tools, IndexNow for fast indexing, Bing Places |
| Voice (Siri, Alexa, Google) | Conversational long-tail keywords, Speakable schema, fast load speeds |
| Apple Maps / Spotlight | Apple Business Connect full optimization, Apple-specific structured data |
| Google Images | Descriptive filenames, alt text, ImageObject schema, WebP format |
| YouTube | Before/after videos, neighborhood tours, testimonials, proper video SEO |
| Yelp | Full profile optimization, systematic review generation |
| Google Local Services Ads | Google Guaranteed certification, per-lead bidding, fast response protocol |

---

## Schema Markup Plan

| Schema Type | Applied To |
|-------------|------------|
| `LocalBusiness` | Every page (NAP, hours, service area, payment) |
| `Service` | Every Tier 2, Tier 4, and specialized service page |
| `FAQPage` | Every page with a FAQ section |
| `HowTo` | Process content (move-out checklist, post-construction prep) |
| `AggregateRating` + `Review` | Reviews hub and service pages |
| `BreadcrumbList` | Every page |
| `Organization` | About page |
| `Person` | About page (Scott & Nicole) |
| `Article` | Every blog post |
| `Speakable` | FAQ and key content sections |
| `ImageObject` | Gallery and before/after pages |
| `VideoObject` | Any page with embedded video |

---

## Technical SEO Checklist (Launch)

- Core Web Vitals: LCP under 2.5s, FID under 100ms, CLS under 0.1
- HTTPS / SSL certificate active
- XML sitemap generated and submitted to GSC and Bing Webmaster
- `robots.txt` configured
- `llms.txt` file at domain root
- Self-referencing canonical tag on every page
- Breadcrumb navigation with BreadcrumbList schema
- Image optimization: WebP format, lazy loading, responsive `srcset`
- Server response time under 200ms
- IndexNow protocol for instant Bing indexing of new pages
- Google Indexing API for priority page submission
- Custom 404 page with navigation and quote CTA
- Mobile-first design validated in Safari / iOS

---

## Recommended Build Order

### Batch 1 — Project Foundation
- Repo setup and Next.js app structure
- Global layout, header, footer
- Design tokens (colors, typography, spacing)
- Core reusable components (CTA block, quote form, FAQ block, trust signals)
- SEO constants and route constants

### Batch 2 — Core Brand Pages
- Home
- About
- Contact
- FAQ
- Thank You
- Privacy Policy, Terms of Service, Accessibility Statement

### Batch 3 — Service Pages (7)
- Service page template
- All 7 service pages
- Service schema pattern
- FAQ blocks and CTA blocks per service

### Batch 4 — City Location Pages (5)
- Las Vegas, Henderson, North Las Vegas, Boulder City, Clark County
- Location page template

### Batch 5 — Priority Neighborhood Pages (10)
- Summerlin, Cadence, Inspirada, Southern Highlands, MacDonald Highlands
- Seven Hills, Anthem, Lake Las Vegas, Downtown Las Vegas, Green Valley Ranch

### Batch 6 — Service + City Pages (35)
- 7 services × 5 cities
- Service + location page template

### Batch 7 — Specialized Pages
- 10 builder pages
- 15 industry pages
- 7 seasonal pages
- 4 urgency pages
- 5 problem-based pages
- 3 community pages
- 7 Spanish pages

### Batch 8 — Technical SEO & Launch
- Schema implementation across all page types
- `robots.txt` and `llms.txt`
- Metadata patterns
- GSC and Bing Webmaster setup
- Microsoft Clarity and GA4
- IndexNow integration
- Final QA and deploy

---

## Page Count Summary

| Category | Pages |
|----------|-------|
| Tier 1 — Core brand | ~19 |
| Tier 2 — Service pages | 7 |
| Tier 3 — City pages | 5 |
| Tier 3 — Neighborhood pages | 20+ |
| Tier 4 — Service + city | 35 |
| Tier 4 — Service + neighborhood | 50+ |
| Builder pages | 10 |
| Industry pages | 15 |
| Seasonal pages | 7 |
| Urgency pages | 4 |
| Problem-based pages | 5 |
| Community pages | 3 |
| Spanish pages | 7 |
| Blog hub + categories | 6 |
| Blog posts (ongoing) | growing |
| **Total at full build** | **280+** |
