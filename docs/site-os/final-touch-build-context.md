# Final Touch Cleaning Company Build Context

## Client
Final Touch Cleaning Company

## Owners
Scott & Nicole Maland

## Current URL
https://www.finaltouchcleaningteam.com/

## GitHub Repo
https://github.com/SedrickHarris/final-touch-cleaning-company-site.git

## Local Repo Path
C:\Users\Welcome\Desktop\client-sites\final-touch-cleaning-company-site

## Phone
(702) 444-5077

## Email
info@finaltouchcleaningteam.com

## Service Area
Clark County, Las Vegas, Henderson, North Las Vegas, Boulder City

## Build Workflow
Use Fast Build Batch by default.
Do not use Gate 1, Gate 2, or Gate 3 for normal page, layout, component, styling, metadata draft, or copy work.

## Exception-Only Deeper Review
Use deeper review only for:
- schema validity changes
- real business data
- real reviews or ratings
- live form integrations
- custom APIs or webhooks
- payment logic
- auth or accounts
- database changes
- package/config changes
- Cloudflare/Wrangler config
- deployment planning
- unclear compliance risk

## Brand Source of Truth
Use:
- docs/brand-guide.md
- docs/site-build-plan.md

Do not recreate those files unless they are missing.

## Approved Brand Colors
- Primary Blue: #1A5FB4
- Black: #1A1A1A
- White: #FFFFFF
- Primary Hover: #164F96
- Soft Blue: #EAF3FF
- Light Gray: #F7F8FA
- Border: #E5E7EB
- Muted: #6B7280
- Success: #1F8A5B

## Fonts
- Fraunces for headlines
- Manrope for body, UI, nav, buttons, and forms

## Brand Personality
Professional, trustworthy, family-owned, local, detail-focused, premium but approachable.

## Core Message
Where small details bring BIG RESULTS.

## Conversion Goal
Generate quote requests and phone calls.

## Primary CTAs
- Request a Free Quote
- Call Now
- Get My Cleaning Estimate
- Schedule Cleaning
- View Services

## Do Not Invent
Do not invent:
- reviews
- star ratings
- license numbers
- insurance details
- years in business
- certifications
- awards
- before/after results
- customer testimonials
- pricing guarantees
- team member details beyond Scott and Nicole
- emergency availability unless confirmed

## Confirmed Service Exclusions (Owner-Verified)

Bloodborne pathogen cleanup, blood cleanup, and biological waste remediation are confirmed owner exclusions. Final Touch does not offer these services. Do not claim or imply this scope on any page.

## Confirmed Service Exclusions — Restaurant Cleaning (Owner-Verified 2026-06-02)

Restaurant Cleaning Scope:
IN SCOPE: dining room, tables and chairs, booth surfaces, host stand,
entry area, waiting area, bar tops and bar-facing surfaces, restrooms,
offices, customer-facing high-touch surfaces.

OUT OF SCOPE: commercial kitchens, food preparation areas, back-of-house
production zones.

Do not claim kitchen, food prep, or back-of-house scope on any restaurant
cleaning page. Do not add health code compliance, food safety certification,
inspection pass rate, or regulatory compliance claims.

## Nav Hierarchy Decision (2026-06-02)

Builders and Industries are audience-specific subsets of Services. Neither
belongs as a PRIMARY_NAV top-level item.

Approved nav placement:
- PRIMARY_NAV (header): Services, Locations, About, Reviews, Contact (5 items;
  Builders removed)
- Services dropdown panel: Builders + Industries rendered under a "Specialty"
  group section using the NavDropdown existing groups prop (same pattern as the
  Locations neighborhoods dropdown)
- FOOTER_NAV.company: Builders + Industries both present (Industries added this
  session)

Do not add Builders or Industries back to PRIMARY_NAV in future sessions without
explicit owner approval.

## Seasonal Cluster Decisions (2026-06-02)

Hub page: /seasonal hub confirmed. Build before leaf pages. Mirrors the /builders
and /industries hub pattern. File: app/seasonal/page.tsx

Footer placement: /seasonal link folds into FOOTER_NAV.services via spread append
after the 7 core service links:

```ts
services: [
  ...SERVICES.map((s) => ({ label: s.name, href: s.href })),
  { label: 'Seasonal Cleaning', href: ROUTES.seasonal },
],
```

The SERVICES constant itself is NOT modified. It drives ServiceCard grids,
dropdowns, and related-service blocks site-wide and must contain only the 7 core
service types.

ROUTES.seasonal must be added to lib/constants/routes.ts before the hub page is
built. This is a gated constants change requiring explicit approval.

Same spread-append footer pattern applies when the urgency (/urgent-cleaning) and
problem-based (/cleaning-solutions) clusters are built.
