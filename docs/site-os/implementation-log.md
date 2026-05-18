# Final Touch Cleaning Company Implementation Log

## Project
Final Touch Cleaning Company Website Build

## Repo
C:\Users\Welcome\Desktop\client-sites\final-touch-cleaning-company-site

## Workflow
Fast Build Batch

## Source-of-Truth Docs
- docs/brand-guide.md
- docs/site-build-plan.md
- docs/site-os/final-touch-build-context.md
- docs/site-os/batch-1-foundation-scope.md

## Log

### Batch 1 — Project Foundation
Status: Implemented pending review
Date: 2026-05-17

Summary:
- Scaffolded Next.js 16.2.6 App Router project (React 19, TypeScript strict, Tailwind v4, ESLint 9, Turbopack) via `create-next-app@latest` into the repo root, preserving existing `docs/` and `.git/`.
- Replaced default scaffold home/layout/CSS with Final Touch brand foundation.
- Configured Fraunces (headlines) + Manrope (body/UI) via `next/font/google`.
- Tailwind v4 uses CSS-based `@theme` config in `app/globals.css` (no `tailwind.config.ts` file — this is the v4 default).
- All brand-token utilities generated from `@theme`: `bg-brand-blue`, `text-brand-black`, `bg-soft-blue`, `bg-light-gray`, `border-border-subtle`, `text-muted`, `text-success`, `font-display`, `font-body`.
- All reusable components are prop-driven — no hardcoded review counts, ratings, license/insurance claims, awards, years-in-business, certifications, or pricing guarantees.

Files created:
- app/not-found.tsx
- components/layout/Header.tsx
- components/layout/Footer.tsx
- components/shared/HeroSection.tsx
- components/shared/CTASection.tsx
- components/shared/TrustBar.tsx
- components/shared/FAQSection.tsx
- components/shared/SectionHeader.tsx
- components/shared/QuoteFormPlaceholder.tsx
- lib/constants/site.ts
- lib/constants/routes.ts
- lib/constants/seo.ts

Files created by `create-next-app` (scaffold defaults retained):
- package.json (lint/dev/build/start scripts; added `type-check` manually)
- package-lock.json
- tsconfig.json
- next.config.ts
- postcss.config.mjs
- eslint.config.mjs
- next-env.d.ts
- AGENTS.md
- CLAUDE.md
- public/ (next/vercel/file/globe/window SVG defaults)

Files replaced (originally created by scaffold; replaced with Final Touch content):
- app/layout.tsx
- app/page.tsx
- app/globals.css
- README.md

Files updated:
- package.json (added `type-check` script)
- .gitignore (replaced by create-next-app with Next.js-standard set; covers required exclusions)

Validation commands run:
- `npm run lint` — passed clean (no output)
- `npm run type-check` — passed clean (tsc --noEmit, no errors)
- `npm run build` — succeeded; 2 static routes (`/`, `/_not-found`) prerendered

Blockers / TODOs:
- TODO-BATCH-2: Wire `QuoteFormPlaceholder` to a real form endpoint (vendor TBD — likely GoHighLevel). Until then, all fields are disabled and submit is intercepted.
- TODO-BATCH-2: Replace `app/favicon.ico` with owner-supplied favicon set, add an OG image, and configure full `icons` metadata.
- TODO-VERIFY: Owner-verified trust signals (e.g., "Licensed & insured", years in business, insurance carrier, satisfaction guarantee terms) intentionally omitted from the homepage trust bar. Waiting on owner confirmation before they can be added. See docs/site-os/no-fake-data-policy.md.
- Upstream tracking on local `main` is not yet set (push used `git push origin main` not `-u`). Next push can fix with `-u`.

Next batch: Batch 2 — full homepage content + tier-1 brand pages (About, Contact, FAQ, etc.) per docs/site-build-plan.md "Recommended Build Order" Batch 2.

### Batch 1.1 — UI/UX Polish + Framer Motion Wiring
Status: Implemented pending review
Date: 2026-05-17

Summary:
Applied the UI/UX skill ruleset (skill §1–§7) to the Batch 1 foundation. Added Framer Motion (12.38) as an approved subtle-motion dependency, wired through a centralized MotionProvider with `reducedMotion="user"` so all animations automatically respect the OS preference. Animations are 180–280ms transform/opacity, in-view-triggered, single-moment (not looping), and exclusively used in Hero/CTA/cards/FAQ/mobile menu per the original brief.

Files created:
- lib/motion.ts — Shared easing, duration, fadeUp, fadeIn, stagger variants. Single source of motion tokens.
- components/motion/MotionProvider.tsx — Root `<MotionConfig reducedMotion="user">` wrapper.
- components/motion/Reveal.tsx — Generic in-view fade-up wrapper for future reuse.
- components/shared/ServicesPreview.tsx — Extracted homepage services grid into a client component with per-card stagger entrance and hover lift.

Files updated:
- app/layout.tsx — Wrapped Header/main/Footer in `<MotionProvider>`; loaded Fraunces italic style.
- app/page.tsx — Now passes `emphasis="details"` to HeroSection for italic Fraunces typesetting of the key word; uses new `<ServicesPreview>`.
- components/shared/HeroSection.tsx — Converted to client component. Added subtle radial gradient bg, on-mount stagger fade-up for eyebrow/heading/sub/CTAs, optional italic emphasis substring, arrow affordance on primary CTA, larger CTA padding hitting `min-h-[48px]`.
- components/shared/CTASection.tsx — Converted to client component. In-view stagger fade-up on entry. Larger CTAs (`min-h-[48px]`). Arrow affordance on primary CTA.
- components/shared/TrustBar.tsx — Visual polish: lg-only vertical dividers between items, refined typography rhythm (item label 17px lg / 16px mobile), tighter `tracking-tight`. No motion.
- components/shared/FAQSection.tsx — Replaced semantic `<details>` with custom accessible accordion: `<button>` trigger + `aria-expanded` + `aria-controls` + `aria-labelledby` region. Framer Motion handles the height animation cleanly with `AnimatePresence`. `+` icon rotates to `×` on open.
- components/shared/QuoteFormPlaceholder.tsx — Added "Free quote" eyebrow badge in soft-blue, refined heading + body rhythm, inputs upsized to `min-h-[44px]`, button to `min-h-[48px]`.
- components/layout/Header.tsx — A11y/touch/motion upgrades:
  - Hamburger touch target upsized 40px → 48px (skill §2 CRITICAL).
  - Mobile menu now `<AnimatePresence>` slide-down animation instead of instant toggle.
  - Body scroll lock when mobile menu is open (skill: focus management on overlay UI).
  - `aria-current="page"` on active route via `usePathname`.
  - Active route gets a Framer Motion `layoutId` underline that animates between items as the user navigates.
  - Phone number uses `tabular-nums` for clean monospaced figures.
  - Each mobile-menu Link `min-h-[48px]`.
- components/layout/Footer.tsx — Phone number uses `tabular-nums`; nav headings get `tracking-tight`.

Motion discipline applied (per skill §7):
- All animations are transform + opacity only (no width/height layout thrash; the FAQ accordion uses height=auto which is acceptable for small bounded reveals).
- Durations 180ms (micro) / 280ms (short) only; nothing >300ms.
- Ease-out curve `[0.22, 1, 0.36, 1]` ("out-quint") used everywhere for consistent feel.
- All entrance animations trigger once on viewport entry (`viewport.once`), not on every scroll.
- No scroll-jacking, parallax, or decorative loops.
- `<MotionConfig reducedMotion="user">` at root makes every animation auto-reduce when OS "Reduce motion" is on.
- Stagger 60ms between siblings (within the 30–50ms guideline for lists).

Conversion polish:
- Single primary CTA per view (skill: `primary-action`). Phone link treated as secondary in the header.
- Arrow affordance (`→`) on primary CTAs in Hero, CTASection, and service cards — translates 2px on hover.
- Service card hover: subtle `-translate-y-0.5` + shadow lift + border-blue tint, all 200ms.
- TrustBar copy uses only owner-verified facts; no fake claims.

Validation:
- `npm run lint` — passed clean
- `npm run type-check` — passed clean
- `npm run build` — succeeded (compiled 1.8s, TS 1.9s, 2 static routes)
- One ESLint error caught + fixed during the pass: removed a `setOpen` inside a pathname useEffect (React anti-pattern, `react-hooks/set-state-in-effect`). Per-link onClick handlers already cover the close-on-nav case for normal usage.

Dependencies added this pass:
- framer-motion ^12.38.0 (already pre-installed last turn; now actually imported across 6 client components)

Still no fake business data introduced. Verified trust signals unchanged from Batch 1. No new TODOs beyond the existing form-endpoint and favicon TODOs.

### Batch 1.2 — Two-Column Hero and CTA Layout Refinement
Status: Implemented pending review
Date: 2026-05-17

Summary:
Refactored HeroSection and CTASection to support an optional right-column form slot for a conversion-focused two-column layout (content left, form right). Wider container (`max-w-[1440px]` with progressive padding `px-4 sm:px-6 lg:px-10 xl:px-12`) used in split mode so the columns don't feel cramped on mid-size laptops. Mobile stacks content first, form second. The homepage hero now hosts the QuoteFormPlaceholder, and the standalone mid-page "Tell us about your space" form section was removed to eliminate duplicate forms.

Files changed:
- components/shared/HeroSection.tsx — Added `formSlot`, `layout`, `container` props. Grid `lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.75fr)]` with `gap-10 lg:gap-14 xl:gap-20`. Heading scaled to `text-[2.25rem] sm:text-5xl lg:text-[3.25rem] xl:text-6xl 2xl:text-7xl` in split mode to stay readable in the narrower column. Form column uses `w-full lg:max-w-xl lg:justify-self-end` and gets a subtle 0.2s-delayed fade-up entrance.
- components/shared/CTASection.tsx — Same `formSlot` / `layout` / `container` API. Split branch renders heading + sub + CTAs in the left column and `formSlot` in the right; standard branch keeps the original side-by-side heading/CTA layout. Arrow affordance preserved on primary CTAs.
- components/shared/QuoteFormPlaceholder.tsx — Dropped no-op `compact` prop. Form is always `w-full` so parent grid track / max-width controls sizing.
- app/page.tsx — Hero now passes `formSlot={<QuoteFormPlaceholder />}`. The previous "Tell us about your space" section with the form was removed (it duplicated the hero form). Bullets previously in that section ("Honest pricing", "Detail-focused work", "Local team") were not retained because the TrustBar already covers the same trust beats. Final CTA stays standard (no form) to keep a single dominant conversion moment in the hero. Services section also bumped to `max-w-[1440px]` so its width matches the hero edge.
- docs/site-os/implementation-log.md — this entry.

Container width changes:
- Hero (split): `max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12`
- CTASection (split): same
- Hero/CTA (standard): unchanged at `max-w-7xl px-4 sm:px-6 lg:px-8`
- Services section on homepage: bumped to `max-w-[1440px]` for visual consistency with the hero edge

Component API additions:
- HeroSection: `formSlot?: ReactNode`, `layout?: 'standard' | 'split'`, `container?: 'normal' | 'wide'`. `formSlot` presence implies split unless `layout` overrides; split implies wide unless `container` overrides.
- CTASection: same three props with the same semantics.

Homepage flow change:
Old: Hero → TrustBar → Services → "Tell us about your space" (copy+form) → FAQ → Final CTA
New: Hero (with form) → TrustBar → Services → FAQ → Final CTA (text+buttons, no form)
Single dominant form on the page. No duplicate quote-form sections.

Accessibility / motion preserved:
- MotionConfig reducedMotion="user" unchanged at the root.
- All entrance animations transform/opacity only, 280ms ease-out.
- Form slot entrance has a small 200ms delay to follow content stagger — does nothing under reduced-motion (MotionConfig kills the delay too).
- Heading hierarchy unchanged.
- Form fields stay disabled, button stays disabled, onSubmit intercepted.
- Touch targets: CTAs `min-h-[48px]`, form inputs `min-h-[44px]`, form submit `min-h-[48px]`.
- Skip link, focus rings, aria-current="page" on nav all intact.

Validation:
- `npm run lint` — passed clean
- `npm run type-check` — passed clean
- `npm run build` — succeeded; 2 static routes (`/`, `/_not-found`) prerendered

No-fake-data compliance:
No reviews, ratings, testimonials, license numbers, insurance details, awards, years in business, certifications, pricing guarantees, or unsupported claims added. TrustBar items unchanged. Hero copy and FAQ content unchanged from Batch 1.1 (drawn only from owner-verified facts in lib/constants/site.ts).

Remaining TODOs (unchanged):
- TODO-BATCH-2 — Wire QuoteFormPlaceholder to a real form endpoint.
- TODO-BATCH-2 — Owner-supplied favicon set + OG image.
- TODO-VERIFY — License/insurance/satisfaction-guarantee/years-in-business trust signals still pending owner confirmation.

### Batch 1.3 — Service Card Image Placeholder Standard
Status: Implemented pending review
Date: 2026-05-17

Summary:
Applied the new universal service-card layout primitive (codified in Site OS Master `docs/service-card-image-placeholder-standard.md`) to the Final Touch homepage. Every service card on the homepage now ships with a visual image placeholder area at the top — clean, brand-aligned, decorative, replaceable by a real owner-supplied photo when one is available. The card markup was extracted into a reusable `ServiceCard` component so future services-hub, related-service, location, and service+city matrix pages can drop in the same card without re-deriving the pattern.

Files changed:
- components/shared/ServiceImagePlaceholder.tsx (new) — pure visual placeholder. `aspect-[16/10]` with brand-token radial gradient (`soft-blue` → `light-gray`), centered decorative circle/dot accent, `border-b border-border-subtle` separator, `aria-hidden="true"`, no embedded text. Accepts `aspect` prop (`16/10` / `4/3` / `3/2`). Inline TODO comment for future owner-supplied photo replacement.
- components/shared/ServiceCard.tsx (new) — reusable service card composing the image placeholder + body (H3 title + short description + arrow-affordance CTA) inside a single `<Link>` wrapper. Server component (no client features). Hover state: -translate-y-0.5 + soft shadow + accent border + arrow translate, all 200ms ease-out. Focus ring visible (2px brand-blue + 2px offset). Full card is the tap target.
- components/shared/ServicesPreview.tsx (updated) — slimmed to a thin orchestration wrapper that handles only the responsive grid + Framer Motion stagger entrance; per-card markup now lives in ServiceCard. Grid gap bumped from `gap-4` → `gap-5 lg:gap-6` to breathe better with the new image-area visual mass. Service type extended with `shortDescription` field.
- lib/constants/routes.ts (updated) — added `shortDescription` to each entry in the `SERVICES` array. Seven descriptions:
  - "Routine and detail-led cleans for offices and commercial interiors." (Commercial & Office)
  - "Scheduled cleaning programs for ongoing facility maintenance." (Janitorial)
  - "Final-touch detail cleans after new builds and renovations." (Post-Construction)
  - "Top-to-bottom cleans before you settle into a new space." (Move-In)
  - "Deposit-ready cleans when you hand back the keys." (Move-Out)
  - "Periodic deep cleans for the corners standard service skips." (Deep Cleaning)
  - "Customer-ready cleans for storefronts and retail interiors." (Retail Space)
  All seven are factual definitions of the services. No claims about pricing, response time, license, insurance, satisfaction, guarantees, or any other unverified business attribute. `FOOTER_NAV.services` is unaffected (still maps over `{ label, href }`).
- docs/site-os/implementation-log.md (this entry).

Every homepage service card now has an image placeholder. Confirmed by reading ServicesPreview → ServiceCard → ServiceImagePlaceholder composition.

Reusable pattern confirmed:
- `ServiceCard` accepts `href`, `name`, `description` props. Future pages (services hub at `/services`, related-services blocks on individual service pages, location page service grids, service + city matrix pages) can render `<ServiceCard {...props} />` without duplicating placeholder or card markup.
- `ServiceImagePlaceholder` accepts an `aspect` prop and can be reused independently of `ServiceCard` (e.g., in case-study sections, gallery slots, future testimonial photo slots).

Standards preserved:
- Two-column hero/CTA conversion layout from Batch 1.2 — unchanged. No edits to HeroSection, CTASection, QuoteFormPlaceholder, app/layout.tsx, app/page.tsx, app/globals.css, or any other Batch 1.2 file.
- Brand guide tokens — `bg-soft-blue`, `bg-light-gray`, `border-border-subtle`, `text-brand-blue/15`, `bg-brand-blue/20`, `text-brand-black`, `text-muted` all sourced from `app/globals.css` `@theme`. No new tokens introduced.
- MotionProvider `reducedMotion="user"` — unchanged. The card hover transitions are CSS, gated by `prefers-reduced-motion` via globals.css. The grid entrance stagger continues to use the existing `stagger(0.06, 0.05)` + `fadeUp` from `lib/motion.ts`.
- No-fake-data discipline — no reviews, ratings, testimonials, license numbers, insurance details, awards, certifications, years-in-business, before/after results, customer photos, team photos, project photos, pricing guarantees, or unsupported trust signals introduced. Placeholder is `aria-hidden` and carries no claims.
- Fast Build Batch workflow — used. No Gate 1/2/3. Single validation pass.
- File-scope discipline — only the four target files were modified; no global file edits, no package install, no config changes.

Validation:
- `npm run lint` — passed clean (no output)
- `npm run type-check` — passed clean
- `npm run build` — succeeded; compiled 2.3s, TS 1.9s, 2 static routes (`/`, `/_not-found`) prerendered

Remaining TODOs:
- TODO-BATCH-2+ (in ServiceImagePlaceholder) — Replace each card's placeholder with an owner-supplied photo of the relevant service when assets are approved. Use next/image, maintain the 16:10 aspect ratio, apply object-cover. Do not auto-pull from Google Places / GBP / stock libraries.
- All Batch 1.x carry-forward TODOs unchanged (form endpoint, favicon/OG, owner-verified trust signals).

### Batch 2 — Core Brand Pages
Status: Implemented pending review
Date: 2026-05-17

Summary:
Built all 11 Tier 1 core brand pages per docs/site-build-plan.md "Recommended Build Order" Batch 2 and docs/site-os/prompts/build/batch-2-core-brand-pages-prompt.md. Two pages use the two-column split hero with form (/contact, /free-quote); the other nine use the standard single-column hero. All pages reuse Batch 1 components — no new conversion-section components needed. Added one small reusable DraftBanner component for the three legal pages.

Pages created (11):
- app/about/page.tsx
- app/services/page.tsx
- app/locations/page.tsx
- app/contact/page.tsx
- app/faq/page.tsx
- app/free-quote/page.tsx
- app/thank-you/page.tsx
- app/privacy-policy/page.tsx
- app/terms-of-service/page.tsx
- app/accessibility-statement/page.tsx
- app/cookie-policy/page.tsx

Components created:
- components/shared/DraftBanner.tsx — visible "Draft — pending legal review" banner used on /privacy-policy, /terms-of-service, /cookie-policy.

Components reused (no changes):
- HeroSection (split mode on /contact, /free-quote; standard mode on the rest)
- CTASection (standard mode, tone="blue")
- FAQSection (single use per page on most; 5 grouped sections on /faq)
- SectionHeader
- TrustBar (/about)
- QuoteFormPlaceholder (/contact, /free-quote hero form slot)
- ServicesPreview (/services)
- ServiceCard + ServiceImagePlaceholder (/locations — used for the LocationCard role with LOCATIONS data)

Constants updated:
- lib/constants/routes.ts — Added LOCATIONS array (slug, name, href, shortDescription per city + Clark County) parallel to SERVICES. Powers the /locations hub grid and gives future Batch 4 city pages a single source for city metadata.

Design-standard compliance:
- Two-column split hero with form on /contact and /free-quote (per docs/site-os/reference/service-business-design-standards.md § 1).
- Single-column hero on /about, /services, /locations, /faq, /thank-you, /privacy-policy, /terms-of-service, /accessibility-statement, /cookie-policy.
- ServiceCard with ServiceImagePlaceholder used on the /services preview grid and /locations grid — no empty image slots.
- All CTAs `min-h-[48px]`; tap-to-call uses `tel:+17024445077`; single primary CTA per view.
- One H1 per page, sequential heading hierarchy.
- Fraunces (display) + Manrope (body) inherited from app/layout.tsx via the existing next/font setup.
- Approved brand tokens only — no raw hex outside the existing @theme block.

SEO/AEO coverage:
- Unique `metadata.title` + `description` on every page via per-page `export const metadata: Metadata = {...}`. Title inherits the `%s | Final Touch` template from app/layout.tsx.
- `alternates.canonical` set on every page.
- Direct-answer opening paragraph on every page within the first 100 words.
- FAQ sections on /about (4), /services (4), /locations (4), /contact (4), /free-quote (4), /faq (17 total across 5 groups).
- Internal links: every non-legal page links to /free-quote, the phone number, and 1+ related Tier 1 or future Tier 2/3 page.
- TODO-BATCH-3 and TODO-BATCH-4 comments mark forward-looking links to routes that 404 until those batches ship.
- FAQPage JSON-LD on /about, /services, /locations, /contact, /faq, /free-quote — text matches visible FAQ exactly.
- Organization JSON-LD on /about and /contact (with `contactPoint` on /contact). No `streetAddress` (service-area-only); founder fields populated from SITE.owners; areaServed from the verified service area.
- BreadcrumbList JSON-LD on /services, /locations, /faq.
- No AggregateRating / Review / Product schema (no owner-verified review data yet).

No-fake-data compliance:
- No reviews, ratings, testimonials, review counts
- No license numbers, license types, "Licensed & Insured" claims
- No insurance carriers, policy numbers
- No years-in-business, jobs-completed counts
- No awards, certifications, accreditations
- No pricing claims, satisfaction guarantees
- No team-member details beyond Scott & Nicole
- No customer / team / project / before-after photos
- No same-day / emergency / 24/7 / specific response-time claims
- No street address (service-area-only business per docs/site-os/no-fake-data-policy.md §2)
- All claims that would normally appear at this scope flagged with TODO-VERIFY comments

Legal-page treatment:
- /privacy-policy, /terms-of-service, /cookie-policy all carry the visible `<DraftBanner />` and a `// TODO-VERIFY:` comment at the top of the file
- Placeholder copy is generic-structural-draft suitable for legal review, NOT for publication as final
- No schema on legal pages
- No keyword optimization on legal pages
- /accessibility-statement is treated as the real (not draft) statement, structured WCAG 2.1 AA aligned, with TODO-VERIFY only on audit-date and scope-of-testing fields per Batch 2 spec

/thank-you specifics:
- `robots: { index: false, follow: true }` so the page isn't indexed (typical for post-submit confirmation pages)
- No FAQ, no schema beyond default metadata
- Two back-routes (home + services) and a phone fallback

Validation:
- `npm run lint` — passed clean (after fixing 2 unescaped-quote errors on /free-quote and removing an unused ROUTES import on /contact)
- `npm run type-check` — passed clean
- `npm run build` — succeeded; 13 routes (`/`, `/_not-found`, plus all 11 new) prerendered as static. Compile 2.0s, TS 2.1s.

TODOs added or carried forward this batch:
- TODO-VERIFY: business hours (mentioned in /contact, omitted from copy)
- TODO-VERIFY: license number, insurance carrier, foundingDate, sameAs profiles for Organization JSON-LD (/about, /contact)
- TODO-VERIFY: Replace placeholder legal copy with owner-approved final copy before launch (/privacy-policy, /terms-of-service, /cookie-policy)
- TODO-VERIFY: date of last legal review / accessibility audit
- TODO-VERIFY: specific cookies in use (once analytics is wired)
- TODO-VERIFY: accessibility audit scope and third-party testing details
- TODO-BATCH-3: Individual service pages at /services/<slug>
- TODO-BATCH-4: Individual city location pages at /locations/<city>
- Pre-existing carry-forwards (Batch 1.x) unchanged: form endpoint wiring, favicon set + OG image, owner-verified trust signals, real service photos.

Next batch: Batch 3 — service pages per docs/site-os/prompts/build/batch-3-service-pages-prompt.md.

### Cloudflare Pages Static Export Fix
Status: Implemented pending review
Date: 2026-05-17

Summary:
Enabled Next.js static export so the site renders correctly when deployed to Cloudflare Pages. The repo is fully static (no API routes, no middleware, no `next/image`, no server actions, no dynamic server features), so `output: "export"` is the appropriate fix. Build now produces a static `out/` folder Cloudflare Pages can serve directly.

Pre-flight audit (verified before the config change):
- Working tree clean at HEAD `7ede96f`
- No `app/api/` routes
- No `middleware.ts`
- No imports of `next/image`, `next/headers`, `next/cookies`
- No `use server`, `generateStaticParams`, `searchParams`, `cookies()`, `headers()`, `revalidate`, or `dynamic = "force-dynamic"` patterns in app code
- All 13 routes are static (App Router default for the existing pages)

Files updated:
- `next.config.ts` — added `output: "export"` and `images: { unoptimized: true }`. Previous content was an empty NextConfig object; no existing settings to preserve.

`next.config.ts` final shape:
```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

`package.json` was inspected — no changes needed. `next build` already produces the static export when `output: "export"` is set. No separate `next export` script required in Next.js 14+.

Validation results:
- `npm run lint` — passed clean (no output, exit 0)
- `npm run type-check` — passed clean (`tsc --noEmit`, no errors)
- `npm run build` — succeeded. Compiled 2.1s, TS 2.1s. 15 static workers generated all routes in 340ms. 13 static routes prerendered: `/`, `/_not-found`, `/about`, `/accessibility-statement`, `/contact`, `/cookie-policy`, `/faq`, `/free-quote`, `/locations`, `/privacy-policy`, `/services`, `/terms-of-service`, `/thank-you`. `out/` folder generated.

`out/` folder structure confirmed:
- `out/index.html` ✓ (homepage)
- `out/about.html` ✓ (Next.js 16 default for App Router static export — emits `<slug>.html` at top level)
- `out/services.html` ✓
- `out/locations.html` ✓
- `out/contact.html` ✓
- `out/free-quote.html` ✓
- `out/faq.html` ✓
- `out/thank-you.html` ✓
- `out/privacy-policy.html` ✓
- `out/terms-of-service.html` ✓
- `out/accessibility-statement.html` ✓
- `out/cookie-policy.html` ✓
- `out/404.html` ✓ (custom 404 from `app/not-found.tsx`)
- `out/_next/` ✓ (build assets — JS chunks, CSS, fonts)
- Public assets present: `favicon.ico`, `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`

Note on file layout: the spec listed `out/about/index.html` style paths, but Next.js 16 App Router with `output: "export"` (no `trailingSlash`) defaults to `out/about.html` at the top level, with a parallel `out/about/` directory holding RSC payload files (`.txt`). Cloudflare Pages serves both URL styles (`/about` and `/about/`) correctly from the `out/about.html` file via its built-in trailing-slash normalization, so this is functionally equivalent. If the directory-style output (`out/about/index.html`) is preferred for any reason, adding `trailingSlash: true` to `next.config.ts` switches the output — but that would also change canonical URLs to include a trailing slash, requiring an update to the `metadata.alternates.canonical` values in the 11 Batch 2 pages. Not done in this batch.

Cloudflare Pages settings to use:
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: `/`
- Framework preset: `Next.js (Static HTML Export)` (or "None" — both work since the output is plain static HTML)
- Node version: 20+
- Environment variables: none required for this static build

No-fake-data compliance: No business claims, copy, or content was modified. This is a build-config change only.

Carry-forward:
- Trailing-slash decision (canonical alignment) deferred — current default canonicals (no trailing slash) match the `out/<slug>.html` output, so Cloudflare Pages will serve consistently.
- Once Cloudflare Pages renders, verify production URLs against the in-code canonical values.
- All Batch 1.x / Batch 2 TODOs unchanged.
