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

### Homepage CTA Text and Content Polish
Status: Implemented pending review
Date: 2026-05-17

Summary:
After the Cloudflare Pages deploy, CTA buttons rendered as blank blue rectangles on production. Root cause was a CSS cascade-layer issue in `app/globals.css`: the global `a { color: var(--color-brand-blue); }` rule was **unlayered**, while Tailwind v4 puts utility classes like `text-brand-white` in `@layer utilities`. Per CSS spec, unlayered rules beat layered rules **regardless of specificity**, so `text-brand-white` could not override the global anchor color on Link-rendered buttons. Result: brand-blue text on brand-blue background = invisible buttons. Fix: move the base custom rules into `@layer base` so Tailwind utilities can override per the documented cascade. Also took the opportunity to lightly strengthen the homepage with a "Why Final Touch" section, a 3-step "How the quote process works" section, and three more verified FAQs.

CTA text issue found and fixed:

- Cause: in `app/globals.css`, the rule `a { color: var(--color-brand-blue); text-decoration: none; }` was declared outside any `@layer`. CSS cascade order is: origin → importance → cascade layer → specificity → order. Unlayered author rules beat layered author rules at the layer-precedence step, before specificity is consulted. Tailwind v4 utilities live in `@layer utilities`. So `.text-brand-white` (specificity 0,1,0, in `@layer utilities`) lost to `a` (specificity 0,0,1, unlayered) on every `<a>` element.
- Affected surfaces:
  - Header primary CTA — `bg-brand-blue text-brand-white` → text was brand-blue on brand-blue ⇒ INVISIBLE
  - Hero primary CTA — same classes ⇒ INVISIBLE
  - Bottom CTASection blue-tone secondary CTA — `border-2 border-white/50 text-brand-white` on brand-blue section ⇒ INVISIBLE
  - Hero secondary CTA (`text-brand-black` on light-gray) — text rendered as brand-blue instead of brand-black, visible but off-brand
  - All other `<a>` elements with explicit color utilities — similar cascade override (cosmetic only when the utility happened to be brand-blue too)
  - `<button>` elements (like the form submit) were unaffected — the `a` selector doesn't match `<button>`
- Fix in `app/globals.css`: wrapped `:root`, `html`, `body`, `h1–h6`, `a`, and `:focus-visible` rules inside `@layer base`. Kept `.skip-link` and the `prefers-reduced-motion` `@media` block unlayered (they don't conflict with utilities — skip link is a unique class, reduced-motion uses `!important`). Also removed the global `a:hover { text-decoration: underline; }` rule because inline text links already have explicit `hover:underline` Tailwind utilities where wanted, and keeping the global rule would underline button text on hover.

Files changed:
- `app/globals.css` — base styles moved into `@layer base`; removed unneeded `a:hover` underline rule.
- `app/page.tsx` — added "Why Final Touch" (3-card grid) and "How the quote process works" (3-step numbered list) sections; expanded FAQ from 4 → 7 items.

Homepage content strengthened:

- "Why Final Touch" section (3-card grid on light-gray): Family-owned local team / The details others skip / Free quotes, no pressure. Uses verified positioning only — references `SITE.owners` from constants; mentions Clark County + four cities naturally; no fake credentials, no fake claims.
- "How the quote process works" section (3-step numbered list on white): "Tell us about your space" → "Short walkthrough" → "Real quote, your call". Step bodies reference phone and email from constants; no response-time claims, no satisfaction guarantee, no pricing.
- Both sections sit between the existing Services preview and FAQ. Page rhythm is now: Hero (form) → TrustBar → Services → Why → How → FAQ → Final CTA.

FAQ items added (3 new, all from the approved-topics list):
- "Do you clean homes and businesses?" — Yes, residential + commercial both. Lists service categories.
- "Do you provide move-in and move-out cleaning?" — Yes. Defines move-in vs move-out without inventing scope details.
- "Can I request recurring cleaning?" — Yes. Mentions janitorial routes for commercial + recurring residential. No pricing claim.

Total homepage FAQ now: 7 items. Visible text matches `FAQPage` JSON-LD via the existing FAQSection component pattern.

Standards preserved:
- ✅ Two-column hero/form layout (split with `formSlot`) — unchanged
- ✅ Wide hero container (`max-w-[1440px]` + progressive padding) — unchanged
- ✅ Service card image placeholders — unchanged
- ✅ Framer Motion reduced-motion support (`MotionConfig reducedMotion="user"`) — unchanged
- ✅ Brand colors and fonts (Fraunces + Manrope via next/font) — unchanged
- ✅ No-fake-data policy — no reviews, ratings, testimonials, license numbers, insurance details, awards, certifications, years in business, before/after results, customer / team / project photos, pricing guarantees, satisfaction guarantees, same-day / 24/7 / emergency availability, or unsupported trust signals added
- ✅ Accessibility — heading hierarchy, focus rings, touch targets all unchanged; CTA text is now actually readable
- ✅ Mobile responsiveness — both new sections use the same responsive grid + container patterns from the rest of the page

Validation:
- `npm run lint` — passed clean
- `npm run type-check` — passed clean (`tsc --noEmit`)
- `npm run build` — succeeded; 13 static routes prerendered. Compile 2.1s, TS 2.3s.

Static export confirmation:
- `out/index.html` ✓
- `out/about.html` ✓
- `out/services.html` ✓
- `out/contact.html` ✓
- `out/free-quote.html` ✓
- Plus 7 other static HTML files for all remaining routes + `out/404.html`

Spot-checked CTA text in `out/index.html`: "Request a Free Quote" appears 4×, "Get My Cleaning Estimate" 2×, "Call Now" 5×. Text is in the HTML; the bug was purely the CSS cascade.

No-fake-data compliance: No business claims, copy, or trust signals were modified or added beyond what was already verified. The two new sections and three new FAQ items use only facts already in `lib/constants/site.ts` (owners, phone, email, service area) and brand-voice positioning that doesn't require external verification (family-owned, local team, detail-focused work, free-quote process). All Batch 1.x / Batch 2 carry-forward TODOs unchanged.

### Batch 2.1 — Core Conversion Page Polish
Status: Implemented pending review
Date: 2026-05-17

Summary:
Big polish pass across the 6 highest-priority conversion / trust pages. Subsumes the prior "Homepage CTA Text and Content Polish" entry (CTA visibility fix in `app/globals.css` via `@layer base`, plus the earlier homepage Why / How sections and expanded FAQ). On top of that, adds a "Who we help" section to the homepage, a "What to include" section to /free-quote and /contact, a "Cleaning by location" callout to /services, a "One team, county-wide" section to /locations, a "What we mean by details" section to /about, an "Are your online forms active yet?" FAQ on the conversion pages (transparent disclosure about the placeholder form), and several other smaller copy / FAQ improvements. Total FAQ count site-wide grew by ~11 items.

Cause of missing CTA text (recap from prior entry):
The unlayered `a { color: var(--color-brand-blue); }` rule in `app/globals.css` beat Tailwind v4 utilities like `text-brand-white` because unlayered CSS author rules win over layered ones regardless of specificity. Result: every Link-rendered CTA with `bg-brand-blue text-brand-white` rendered brand-blue text on brand-blue background = invisible. Fix: wrap base rules in `@layer base`. Verified in built HTML — "Request a Free Quote" appears 4×, "Get My Cleaning Estimate" 2×, "Call Now" 5× in `out/index.html` and they render with the correct color.

Files changed in this pass:
- `app/globals.css` — `@layer base` fix (from the prior turn, still uncommitted)
- `app/page.tsx` — Added "Who we help" 4-card section between Services preview and Why Final Touch. Added "Are your online forms active yet?" FAQ. Total homepage FAQ now 8 items. Strengthened final-CTA sub copy to include phone + free-quote CTA.
- `app/free-quote/page.tsx` — Added a "What to include" 5-bullet section between hero and the existing "What you get" section. Added 3 new FAQs: "What if I'm not sure which cleaning service I need?", "Are your online forms active yet?", "Do you serve Henderson, North Las Vegas, Boulder City, and Clark County?". Total FAQ now 7 items.
- `app/contact/page.tsx` — Added a "What to include" 4-bullet section. Replaced the third ContactTile ("Quote request → Use the form above" was awkward) with a "Service area" tile linking to /locations. Added 2 new FAQs: "Are your online forms active yet?" and "What are your business hours?" (the hours answer routes to phone/email without claiming specific hours — TODO-VERIFY still in place). Total FAQ now 6 items.
- `app/services/page.tsx` — Strengthened hero sub with finishing-checklist specifics. Strengthened the services-grid section header sub. Added a "Cleaning by location" callout linking to /locations (soft-blue card on white). Added a new FAQ: "Do you provide both residential and commercial cleaning?". Total FAQ now 5 items. Strengthened the final-CTA sub.
- `app/locations/page.tsx` — Added a "How we cover the county" / "One team. County-wide." prose section after the city grid, explaining that Final Touch isn't a franchise pool or marketplace and is a service-area-only business with no public storefront. Added 2 new FAQs: "Do you serve Henderson, North Las Vegas, Boulder City, and Clark County?" and "Do you have a separate team for each city?". Also added "Where is Final Touch based?". Total FAQ now 6 items. Strengthened the final-CTA sub.
- `app/about/page.tsx` — Added a "What we mean by details" 4-card section between "Our story" and "How we work", giving concrete examples (baseboards & door frames; vents & switch plates; edges & corners; glass, hardware & finishes). Added 2 new FAQs: "What does 'family-owned' mean for the work?" and "Where is Final Touch based?". Total FAQ now 6 items.

Homepage Beyond-Elite polish summary:
- Hero unchanged (already strong with split form + italic emphasis on "details")
- TrustBar unchanged (4 verified items)
- Services preview unchanged
- **NEW** "Who we help" — 4-card audience grid (Homeowners / Renters & landlords / Offices & businesses / Contractors & builders)
- Why Final Touch — 3-card (family-owned local team / details others skip / free quotes, no pressure) — already in place from prior turn
- How the quote process works — 3-step (already in place from prior turn)
- FAQ expanded to 8 items
- Final CTA sub now mentions phone + quote-request explicitly

/free-quote polish summary:
- Hero unchanged (split with form)
- **NEW** "What to include" 5-bullet section (Space type, Rough size, City or neighborhood, Timing, Anything specific)
- "What you get" 4-bullet section retained
- 3-step process retained
- FAQ grew 4 → 7 items

/contact polish summary:
- Hero unchanged (split with form)
- "Ways to reach us" tiles: third tile now links to /locations (service area) instead of "Use the form above" placeholder
- **NEW** "What to include" 4-bullet section
- 4-step "What happens next" retained
- FAQ grew 4 → 6 items (incl. transparent business-hours disclosure)

/services hub polish summary:
- Hero sub strengthened with the finishing-checklist line
- Services grid retained (ServiceCard with image placeholders, links to TODO-BATCH-3 service pages)
- "Choose by the moment" 4-paragraph guidance retained
- **NEW** "Cleaning by location" callout linking to /locations
- FAQ grew 4 → 5 items (added residential + commercial confirmation)

/locations hub polish summary:
- Hero retained (single-column, county-wide framing)
- 5-card grid (Las Vegas / Henderson / North Las Vegas / Boulder City / Clark County) retained
- **NEW** "How we cover the county" / "One team. County-wide." 3-paragraph prose section explaining single team across the county + service-area-only positioning
- FAQ grew 4 → 6 items

/about polish summary:
- Hero retained
- TrustBar retained (4 verified items)
- "Our story" 3-paragraph retained
- **NEW** "What we mean by details" 4-card section (baseboards / vents / corners / glass) with concrete examples of "small details bring BIG RESULTS"
- "How we work" 3-card retained
- FAQ grew 4 → 6 items

FAQ updates total (visible + JSON-LD updated to match exactly):
| Page | Before | After |
|---|---|---|
| / | 4 | 8 |
| /free-quote | 4 | 7 |
| /contact | 4 | 6 |
| /services | 4 | 5 |
| /locations | 4 | 6 |
| /about | 4 | 6 |

Each new FAQ uses verified facts only. The "Are your online forms active yet?" question on /, /free-quote, and /contact is honest disclosure about the placeholder form and routes users to phone/email. The "business hours" answer routes to phone/email without claiming specific hours (TODO-VERIFY still in place).

Validation:
- `npm run lint` — passed clean
- `npm run type-check` — passed clean (`tsc --noEmit`)
- `npm run build` — succeeded; 13 static routes prerendered. Compile 2.2s, TS 2.3s.

Static export confirmation (`out/`):
- ✅ `out/index.html`
- ✅ `out/about.html`
- ✅ `out/services.html`
- ✅ `out/locations.html`
- ✅ `out/contact.html`
- ✅ `out/free-quote.html`
- Plus 7 other route HTML files + `out/404.html` + `_next/` assets + public SVGs

No-fake-data compliance: No reviews, ratings, testimonials, license numbers, insurance details, awards, certifications, years-in-business, before/after results, customer / team / project photos, pricing guarantees, satisfaction guarantees, same-day / emergency / 24/7 / specific response-time claims were introduced anywhere in this pass. Every new section and FAQ item draws from `lib/constants/site.ts` or from brand-voice positioning already approved in `docs/site-os/final-touch-build-context.md`. Service-area-only positioning explicitly maintained — no street-address claim anywhere; `Organization` / `LocalBusiness` schema continues to omit `streetAddress`. The new business-hours FAQ on /contact explicitly does NOT claim hours; it routes to phone/email and acknowledges the published schedule will be posted once confirmed.

Standards preserved:
- ✅ Two-column hero/form layout on /contact and /free-quote
- ✅ Wide conversion containers (`max-w-[1440px]` + progressive padding)
- ✅ Homepage split hero/form layout
- ✅ Service card image placeholders (`ServiceCard` + `ServiceImagePlaceholder` on /services and /locations grids)
- ✅ Framer Motion reduced-motion support
- ✅ Semantic HTML
- ✅ One H1 per page (no extra H1s introduced)
- ✅ Sequential headings
- ✅ Metadata quality (titles unique, descriptions 140–160 chars, canonical on every page)
- ✅ FAQPage JSON-LD updated to match expanded visible FAQ text exactly on every page
- ✅ No-fake-data rules
- ✅ Static export compatibility (Cloudflare Pages still builds clean)

All carry-forward TODOs unchanged: form endpoint wiring, favicon/OG image, owner-verified trust signals (license, insurance, satisfaction guarantee, years-in-business), real service photos, legal-copy replacement on draft pages.

### Batch 2.2 — Live UI, CTA, Content Depth, AEO FAQ, and Copy Cleanup Patch
Status: Implemented pending review
Date: 2026-05-17

Summary:
After reviewing the live Cloudflare Pages deploy, three issues remained: some CTA buttons still appeared blank, page content was still thin, AEO FAQs were under-developed, and customer-facing copy contained em dashes (against the Site OS copy standard). This pass:
- Defensively rebuilt every CTA-bearing component to use Tailwind built-in color tokens (`text-white`, `border-white`) instead of `text-brand-white`/`border-brand-white` so cascade behavior is guaranteed even outside the `@layer base` fix already committed in Batch 2.1.
- Strengthened depth on the 7 highest-priority pages with verified-facts content.
- Built `/faq` into an AEO answer hub with 9 grouped categories and 36 total FAQs.
- Replaced every em dash in customer-facing code paths (page copy, FAQ Q/A, schema text, form copy, banner text, constants used in body content).

Cause of remaining button issues:
Two reinforcing causes addressed in this pass:
1. Batch 2.1's `@layer base` fix is correct, but the live deploy the user reviewed (`10da6090`) predated it. To be doubly defensive for any future cascade quirk or alternate-build environment, the buttons now use `text-white` (Tailwind built-in) instead of the custom `text-brand-white` (@theme token). Both resolve to `#FFFFFF` but the built-in is generated regardless of `@theme` configuration changes.
2. `hover:text-brand-white` on outlined buttons changed to `hover:text-white` so the hover state can never depend on the custom token either. Same for `border-brand-white` → `border-white` and `text-white/85` (the latter already used Tailwind built-in).

Button fixes completed:
- `components/layout/Header.tsx` — desktop primary CTA uses `text-white`; mobile-menu phone-fallback hover uses `hover:text-white`; mobile-menu primary CTA uses `text-white`. Logo `aria-label` em dash converted to comma. Mobile menu phone label kept as `· ` (middot, not em dash).
- `components/shared/HeroSection.tsx` — primary CTA `text-white`; secondary CTA `hover:text-white` on the dark-bg hover state.
- `components/shared/CTASection.tsx` — heading on blue tone `text-white`; primary blue-tone CTA `bg-white text-brand-blue`; secondary blue-tone CTA `border-white/60 text-white hover:bg-white hover:text-brand-blue` (was `border-white/50 text-brand-white hover:bg-white/10` which only changed background opacity on hover; now hover swaps to fully filled white background with brand-blue text for a confidently readable hover state); soft-tone secondary `hover:text-white` on the dark-bg hover.
- `components/shared/QuoteFormPlaceholder.tsx` — disabled submit button uses `text-white` and refreshed help text.

Pages strengthened (depth + AEO):
- `/` (homepage) — already had Beyond-Elite-style sections from Batch 2.1 (TrustBar, Services preview, Who we help, Why Final Touch, How the quote process works, Final CTA). Added a new **Service area callout** between How-it-works and FAQ that explicitly names Clark County + the 4 cities, the service-area-only positioning ("no public storefront"), and links to `/locations`. FAQ rebuilt at 10 items (was 8), AEO-styled (direct-answer first sentence, plain language, natural keyword placement).
- `/about` — same prose structure, FAQ expanded to 7 items with the AEO-style "What makes Final Touch different from a basic cleaning service?" added.
- `/services` — hero sub rewritten without em dashes; "Choose by the moment" rewritten; "Cleaning by location" callout kept; FAQ expanded to 10 items including direct AEO questions ("Does Final Touch offer post-construction cleanup?", "Does Final Touch offer commercial office cleaning?", "Does Final Touch offer janitorial services?", "Does Final Touch offer retail space cleaning?").
- `/locations` — hero, grid, "One team, county-wide" all rewritten without em dashes. FAQ expanded to 9 items with explicit per-city affirmations ("Does Final Touch serve Las Vegas?", "Does Final Touch serve Henderson?", "Does Final Touch serve North Las Vegas?", "Does Final Touch serve Boulder City?", "Does Final Touch serve all of Clark County?").
- `/contact` — hero, contact tiles, "What to include", 4-step "What happens next" all rewritten without em dashes. FAQ expanded to 8 items with "Can I call instead of using the form?" and "What should I do if I am not sure which service I need?" added.
- `/free-quote` — hero, "What to include" 5-bullet section, "What you get", 3-step process all rewritten without em dashes. FAQ expanded to 10 items, AEO-styled with explicit "How do I request a cleaning quote?", "Do you provide pricing online?", "Can I call instead of using the form?", and the city-list affirmation.
- `/faq` — **major rebuild**. Previously 17 FAQs in 5 groups. Now **36 FAQs in 9 categories**:
  1. General company questions (4)
  2. Service area questions (7)
  3. Quote and contact questions (6)
  4. Cleaning service questions (4)
  5. Move-in, move-out, and deep cleaning (4)
  6. Commercial, office, retail, and janitorial (4)
  7. Post-construction cleanup (3)
  8. Scheduling and recurring cleaning (3)
  9. Trust, safety, and service expectations (4)

AEO FAQ writing rules applied throughout:
- Direct question phrasing
- Answer in the first sentence (or, where natural, the first half of the answer)
- Plain language, no hedging
- Concise answers (most 40–80 words)
- City and service terms appear naturally where relevant
- No keyword stuffing
- No invented claims (no licenses, insurance, guarantees, reviews, ratings, hours, emergency/same-day/24-7 service)

FAQ counts (before → after this pass):

| Page | Before | After | Notes |
|---|---:|---:|---|
| / | 8 | 10 | Added: "What cleaning services...", "Do you provide pricing online?" |
| /free-quote | 7 | 10 | Added: "How do I request a cleaning quote?", "Do you provide pricing online?", "Can I call instead of using the form?", reorganized for AEO |
| /contact | 6 | 8 | Added: "Can I call instead of using the form?", "What should I do if I am not sure which service I need?" |
| /services | 5 | 10 | Added: "What cleaning services does Final Touch offer?", "Does Final Touch offer post-construction cleanup?", "Does Final Touch offer commercial office cleaning?", "Does Final Touch offer janitorial services?", "Does Final Touch offer retail space cleaning?", "What should I do if I am not sure which service I need?" |
| /locations | 6 | 9 | Added per-city affirmations: Las Vegas, Henderson, North Las Vegas, Boulder City. Also "How does Final Touch handle service areas without a public storefront?" |
| /about | 6 | 7 | Added: "What makes Final Touch different from a basic cleaning service?" |
| /faq | 17 | 36 | Full rebuild into 9 grouped categories |
| **Total site FAQs** | **55** | **90** | **+35 new AEO-style items** |

/faq page category groups (this batch creates these 9 sections):
1. General company questions (4 items)
2. Service area questions (7 items)
3. Quote and contact questions (6 items)
4. Cleaning service questions (4 items)
5. Move-in, move-out, and deep cleaning (4 items)
6. Commercial, office, retail, and janitorial (4 items)
7. Post-construction cleanup (3 items)
8. Scheduling and recurring cleaning (3 items)
9. Trust, safety, and service expectations (4 items)

Customer-facing em dashes removed:
- Pre-batch count: 85 in `app/`, 15 in `components/`, 4 in `lib/`. Total 104 em dashes across 25 files.
- Post-batch grep of customer-facing files (page copy, form copy, banner, constants):
  - `app/*.tsx`: customer-facing em dashes → **0** (only 1 remaining em dash in `app/globals.css` is a CSS developer comment)
  - `components/shared/*.tsx`: customer-facing em dashes → **0**
    - `QuoteFormPlaceholder.tsx`, `DraftBanner.tsx`, form labels, all body copy clean
  - `lib/constants/*.ts`: customer-facing em dashes → **0**
    - `seo.ts` default description rewritten, `routes.ts` shortDescription rewritten, `site.ts` was already clean
- Remaining em dashes (all developer-only, not rendered to HTML):
  - `app/globals.css` line 66: `/* Skip link — unlayered so it always wins focus state regardless of inheritance. */` (CSS comment)
  - `components/shared/FAQSection.tsx` line 16: JSDoc comment
  - `components/shared/ServiceCard.tsx` line 20: JSDoc comment
  - `components/shared/ServiceImagePlaceholder.tsx` line 15: JSDoc comment
  - `components/shared/ServicesPreview.tsx` line 19: JSDoc comment
  - `components/shared/TrustBar.tsx` line 7: JSDoc comment
  - `lib/motion.ts` line 8: inline `// out-quint — quick start, soft finish` JS comment

Per the Batch 2.2 spec, developer comments are explicitly excluded from the em dash cleanup requirement. Built HTML grep confirms **zero em dashes** in any rendered output across all 13 routes.

FAQ/schema sync:
- Every page that has visible FAQs also has a `FAQPage` JSON-LD block.
- `acceptedAnswer.text` is generated from the same `faq` array variable that the visible `<FAQSection>` renders. This guarantees exact text match.
- No schema-only FAQs exist.
- No `AggregateRating`, `Review`, `Product`, pricing, or fake `LocalBusiness` schema introduced.
- Schema on legal pages remains absent (per spec).

Validation:
- `npm run lint` — passed clean
- `npm run type-check` — passed clean
- `npm run build` — succeeded; 13 routes prerendered as static; compile 2.6s, TS 2.4s.

Static export confirmed:
- `out/index.html` ✓
- `out/about.html` ✓
- `out/services.html` ✓
- `out/locations.html` ✓
- `out/contact.html` ✓
- `out/free-quote.html` ✓
- `out/faq.html` ✓
- All other route HTML files + `out/404.html` + `_next/` assets

Built HTML CTA verification (from `out/index.html`):
- "Request a Free Quote" × 4 ✓
- "Get My Cleaning Estimate" × 2 ✓
- "Call Now" × 5 ✓
- "View details" × 7 ✓ (service card CTAs)
- "View Services" present in nav-link copy ("View all services") ✓
- Built `out/faq.html`: "Request a Free Quote" × 6, "Call Now" × 5 ✓
- Built `out/contact.html`: "Call Now" × 3, "Email us" × 2 ✓

Em dash verification on built HTML:
- `grep -c "—" out/*.html` across all 8 conversion / brand / FAQ pages: **0 matches**
- No customer-facing em dashes in rendered output.

No-fake-data confirmation: No new reviews, ratings, testimonials, license numbers, insurance details, awards, certifications, years in business, before/after results, customer/team/project photos, pricing guarantees, satisfaction guarantees, same-day claims, emergency claims, 24/7 claims, or unsupported trust signals were added. The new AEO FAQs use only verified facts in `lib/constants/site.ts` (owners, phone, email, service area) and brand-voice positioning already approved in `docs/site-os/final-touch-build-context.md` (family-owned, local team, detail-focused work, free-quote process). Service-area-only positioning explicitly maintained on `/locations` and the new homepage service-area callout. The "Are the online forms active yet?" answer is honest disclosure. The "Do you provide pricing online?" answer is explicit transparency about why we walkthrough first.

Remaining TODOs (unchanged from prior batches):
- Form endpoint wiring (`QuoteFormPlaceholder` is still placeholder)
- Owner-supplied favicon set + OG image
- Owner-verified trust signals (license, insurance, satisfaction guarantee, years-in-business) for `Organization` JSON-LD on `/about` and `/contact`
- Real service photos to replace placeholders in `ServiceImagePlaceholder`
- Legal-copy replacement (`/privacy-policy`, `/terms-of-service`, `/cookie-policy` still display the DraftBanner)
- Business hours on `/contact` (FAQ explicitly says hours will be posted once confirmed)
- Per-service pages (`TODO-BATCH-3`), per-city pages (`TODO-BATCH-4`), neighborhood pages (`TODO-BATCH-5`), service+city matrix (`TODO-BATCH-6`)

### Site OS Routing and Enforcement Standards Sync
Status: Implemented pending review
Date: 2026-05-17

Summary:
Synced the routing, AI depth, keyword research, AEO research, high-value page enforcement, and pass/fail gate standards from Site OS Master commit `36f9092a72b864644d95fd3a5e4b6b15a1d096b7` into the Final Touch client repo. Docs-only change. No app code touched, no `node_modules` install, no deploy.

Synced from Site OS Master:
- Source commit: `36f9092a72b864644d95fd3a5e4b6b15a1d096b7` (Site OS Master `main`)
- Sync direction: master → client (one-way, opt-in per `docs/site-os/decisions/client-repo-prompt-standard.md` § Maintenance)

Standards copied to `docs/site-os/reference/` (4 files):
- `prompt-router-and-ai-depth-standard.md` — page-type prompt routing + 6 AI depth levels
- `keyword-research-and-aeo-depth-standard.md` — 10 keyword types + per-page research depth
- `high-value-page-enforcement-standard.md` — pre-build deliverables + post-build proof for high-value pages
- `pass-fail-page-quality-gates.md` — 44-item pass/fail gate (required + CTA + copy + schema)

Prompt templates copied to `docs/site-os/prompts/build/` (9 files):
- `individual-homepage-research-prompt.md` + `individual-homepage-implementation-prompt.md` (Level 5 Beyond-Elite two-step)
- `conversion-page-research-prompt.md` + `conversion-page-implementation-prompt.md` (Level 4 Conversion two-step for /free-quote, /contact, booking, landing)
- `seo-aeo-service-page-research-prompt.md` + `seo-aeo-service-page-implementation-prompt.md` (Level 3 or 5 service page two-step)
- `local-seo-location-page-research-prompt.md` + `local-seo-location-page-implementation-prompt.md` (Level 3 location page two-step + anti-doorway check)
- `aeo-faq-hub-prompt.md` (Level 5 FAQ hub single-step, 30+ FAQ minimum across 9 categories)

QA prompt copied to `docs/site-os/prompts/qa/` (1 file):
- `high-value-page-qa-prompt.md` — read-only pass/fail QA prompt that runs the 44-item gate

Client-side files updated:
- `docs/site-os/reference/client-build-prompt-index.md` — added a new "High-Value Page Prompts" section listing the 9 build prompts and their AI depth levels; added the high-value QA prompt to the QA Prompts table; added the 4 new standards to the Reference Docs table; updated the "How to Use This Catalog" sequence to put routing first and reference the high-value gate.
- `docs/site-os/prompts/qa/pre-commit-qa-prompt.md` — inserted a new "High-Value Page Gate" section (step 7) listing the page types that require the gate, the four things the gate enforces, the references to the gate doc and the QA prompt, and a stop condition that FAIL must not commit.
- `docs/site-os/implementation-log.md` — this entry.

High-value page workflow now requires:
1. Routing (page type + AI depth selection per `docs/site-os/reference/prompt-router-and-ai-depth-standard.md`)
2. AI depth selection (Level 1 Utility through Level 6 Competitive Research)
3. Keyword research (10 keyword types per `docs/site-os/reference/keyword-research-and-aeo-depth-standard.md`)
4. AEO FAQ research (clustered, answer-first, direct-answer format)
5. Content analysis (what's there, what's missing, what's thin)
6. Content gaps (named, prioritized)
7. Implementation (per the approved plan)
8. Pass/fail QA (44-item gate per `docs/site-os/reference/pass-fail-page-quality-gates.md`)

Pre-existing standards preserved (no edits to upstream policies):
- Fast Build Batch (still default for non-high-value work)
- No-fake-data policy
- File-scope and Git safety policy
- Service-business conversion layout standard
- Service card image placeholder standard
- Client repo prompt and documentation system standard
- FAQ schema exact-match rule
- Customer-facing em dash prohibition

No app code, no constants, no `package.json`, no `next.config.ts`, no `tsconfig.json` touched. No `node_modules` install. No deploy. Build was not run because this batch contains only docs files.

Sync model note: per the Client Repo Prompt Standard, master changes do NOT auto-update existing client repos. This sync is an opt-in `chore(site-os)`-style commit. Future master changes will require another opt-in sync.


### GHL MVP Environment Setup
Status: Implemented pending review
Date: 2026-05-17

Created a safe GoHighLevel (GHL) MVP environment variable scaffold. No real keys configured. No `.env.local` created. No app code touched. No packages installed. No deploy.

Files created:
- `.env.example` (root) — committed template with 7 GHL variables and inline guidance comments explaining private vs public, static export constraints, and acceptable backend layers.
- `docs/site-os/reference/ghl-mvp-env-setup.md` — full setup reference covering where `.env.local` lives, private vs public variable lists, Cloudflare Pages dashboard configuration, the four acceptable backend patterns for private GHL API calls (Pages Functions, standalone Worker, GHL inbound webhook, external automation tool), and the "do not call private GHL APIs from frontend code" warning with a wrong-vs-right code example.

Files updated:
- `.gitignore` — replaced the blanket `.env*` rule with explicit `.env`, `.env.local`, `.env.*.local`, `.env.development.local`, `.env.production.local` entries plus a `!.env.example` negation so the template is committable while every other env file stays out of git.
- `docs/site-os/implementation-log.md` — this entry.

Variables scaffolded:
- Private (server-side only): `GHL_API_KEY`, `GHL_LOCATION_ID`, `GHL_FORM_ID`, `GHL_CALENDAR_ID`, `GHL_WEBHOOK_URL`
- Public (`NEXT_PUBLIC_*`): `NEXT_PUBLIC_GHL_FORM_URL`, `NEXT_PUBLIC_GHL_CALENDAR_URL`

Security guardrails documented:
- Never prefix private keys with `NEXT_PUBLIC_` (would inline the key into the JS bundle).
- Never call `services.leadconnectorhq.com` or `rest.gohighlevel.com` directly from React components.
- Static export (`output: "export"` in `next.config.ts`) means no Next.js server runtime in production; any private GHL API call must route through a Cloudflare Pages Function, a standalone Worker, a GHL inbound webhook, or an external automation tool.
- In Cloudflare Pages, private variables must be stored as encrypted Secrets, not Plaintext.

No app code, no `lib/constants/*`, no `package.json`, no `next.config.ts`, no `tsconfig.json` touched. No `node_modules` install. No real keys present anywhere in the repo. Build was not run because this batch contains only docs and env scaffolding.

TODOs for the actual GHL wiring (out of scope for this batch):
- Owner to provide real `GHL_API_KEY`, `GHL_LOCATION_ID`, `GHL_FORM_ID`, `GHL_CALENDAR_ID`, `GHL_WEBHOOK_URL` values.
- Decision needed on backend layer (Pages Function recommended for this repo).
- Once decided, scaffold `functions/api/quote.ts` (or equivalent) and wire `components/shared/QuoteFormPlaceholder.tsx` to POST to it.
- Configure encrypted Secrets in Cloudflare Pages production environment.


### Batch 2 Rebuild — Homepage (/) — Prompt A + B
Status: Committed
Date: 2026-05-18

#### Routing
- Page type: Homepage
- Page value: High
- AI depth selected: Level 5 Beyond-Elite
- Prompt A used: individual-homepage-research-prompt.md
- Prompt B used: individual-homepage-implementation-prompt.md

#### Keyword Map Summary
- Primary: cleaning services Las Vegas NV, cleaning company Las Vegas Nevada, professional cleaning Las Vegas
- Secondary: cleaning services Clark County NV, Henderson, North Las Vegas, Boulder City; house cleaning; commercial cleaning; move-out cleaning; post-construction cleaning; deep cleaning Las Vegas
- Local: Las Vegas NV, Henderson NV, North Las Vegas, Boulder City NV, Clark County Nevada, Southern Nevada
- AEO questions: What cleaning services does Final Touch offer? Who owns Final Touch? What cities do you serve? How do I get a free estimate? Does Final Touch serve Henderson and North Las Vegas?
- Transactional: free cleaning quote Las Vegas, cleaning estimate, book cleaning service
- Entity/semantic: Final Touch Cleaning Company, Scott and Nicole Maland, Clark County Nevada

#### AEO FAQ Count and Categories
12 FAQs total across:
- Company and ownership (who owns, is it local)
- Services (what services, homes and businesses, post-construction)
- Service area (what cities, Henderson and NLV coverage)
- Quote and contact (how to get estimate, what happens after)
- Differentiators (what makes Final Touch different)
- Specific services (move-in/move-out, recurring)
- Form status (transparent disclosure that form is in setup)

#### Content Gaps Fixed
1. H1 changed from tagline to search-intent headline: "Professional Cleaning Services in Las Vegas and Clark County, NV."
2. Direct-answer hero sub added naming Scott and Nicole Maland, all service types, all four cities
3. Service area section added with city chip links and county framing
4. FAQ expanded from 8 to 12 items
5. Who we help card copy strengthened with pain-point specifics and local keywords
6. Why Final Touch card copy strengthened with named detail examples and owner accountability
7. Metadata title: "Cleaning Services in Las Vegas & Clark County, NV | Final Touch" (60 chars)
8. Meta description: 140 chars, primary keyword + phone + differentiator
9. openGraph block added
10. LocalBusiness JSON-LD with areaServed and founder fields

#### Internal Link State
- Live (7): /services, /about, /faq, /locations (x2), /free-quote (x2)
- Forward (6): city pills + service cards fallback to /locations and /services until Batch 3 and Batch 4 ship
- Deferred (2): /reviews and /pricing withheld — not in static export; restore in Why Final Touch block once those pages ship

#### Files Changed
- app/page.tsx — full content rewrite
- docs/site-os/reference/internal-link-map.md — new file, homepage row seeded

#### Validation Results
- npm run lint — passed clean
- npm run type-check — passed clean
- npm run build — passed clean
- CTA grep (out/index.html) — passed

#### Pass/Fail Gate Result
PASS

#### Remaining TODOs
- TODO-BATCH-3: service card hrefs fall back to /services; restore individual slugs once Batch 3 ships
- TODO-BATCH-4: city pill hrefs fall back to /locations; restore city slugs once Batch 4 ships
- TODO-DEFERRED-TIER1: /reviews and /pricing links withheld; restore in Why Final Touch block once pages ship
- TODO-BLOG: blog preview section planned above final CTA; add when blog batch ships
- TODO-VERIFY: foundingDate, license, insurance, sameAs in LocalBusiness JSON-LD pending owner confirmation
- TODO-BATCH-2: QuoteFormPlaceholder needs real form endpoint wiring
- TODO-VERIFY: owner-supplied favicon set and OG image still pending


### Batch 2 Rebuild — FAQ Hub (/faq) — AEO Single-Step
Status: Committed
Date: 2026-05-18

#### Routing
- Page type: FAQ Hub
- Page value: High
- AI depth selected: Level 5 AEO Hub
- Prompt used: aeo-faq-hub-prompt.md (single-step)

#### FAQ Count and Categories
42 FAQs across 9 categories:
1. General company questions (4)
2. Service area questions (7)
3. Quote and contact questions (6)
4. Cleaning service questions (4)
5. Move-in, move-out, and deep cleaning (4)
6. Commercial, office, retail, and janitorial (4)
7. Post-construction cleanup (4) — +1 from prior
8. Scheduling and recurring cleaning (4) — +1 from prior
9. Trust, safety, and service expectations (5) — +1 from prior

#### Content Gaps Fixed
1. Metadata title: bare "FAQ" -> "Frequently Asked Questions | Final Touch Cleaning Company"
2. Meta description: missing phone and keyword -> 152 chars with Clark County + phone
3. openGraph block: absent -> added
4. Hero sub: no business name or city -> names SITE.name and SITE.serviceArea.county
5. Direct-answer intro paragraph: absent -> 2-sentence entity block naming owners, all 4 cities, county, phone
6. Internal links: 0 -> 5 live links (/services, /locations, /about, /free-quote, /contact)
7. Post-construction FAQ: 3 -> 4 (added project types question)
8. Scheduling FAQ: 3 -> 4 (added lead time/notice question)
9. Trust FAQ: 4 -> 5 (added cleaning products question)

#### Files Changed
- app/faq/page.tsx

#### Validation Results
- npm run lint — passed clean
- npm run type-check — passed clean
- npm run build — passed clean
- CTA grep (out/faq.html) — passed

#### Pass/Fail Gate Result
PASS

#### Remaining TODOs
- TODO-DEFERRED-TIER1: /reviews and /pricing not yet linked from FAQ hub (same as homepage — restore when pages ship)
- TODO-BATCH-3/4: service and city page links could be added to relevant FAQ category footers once those pages ship


### Batch 2 Rebuild — Free Quote (/free-quote) + Contact (/contact) — Level 4 Conversion
Status: Committed
Date: 2026-05-18

#### Routing
- Page type: Free Quote + Contact
- Page value: High
- AI depth selected: Level 4 Conversion
- Prompt A used: conversion-page-research-prompt.md (both pages researched together)
- Prompt B used: conversion-page-implementation-prompt.md (each page implemented separately)

#### Content Gaps Fixed — /free-quote
1. Metadata title: bare "Free Quote" -> "Request a Free Cleaning Quote | Final Touch | Las Vegas, NV" (57 chars)
2. Meta description: no phone -> 151 chars with Las Vegas + Clark County + phone
3. openGraph block: absent -> added
4. Hero heading: generic "Tell us about your space" -> search-intent headline with Las Vegas + Clark County
5. "How fast will I hear back?" FAQ: evasive answer -> honest routing to phone/email with form-status disclosure
6. Internal links: 0 -> 3 live links (/services in What to include, /locations on city bullet, /faq below accordion)

#### Content Gaps Fixed — /contact
1. Metadata title: bare "Contact" -> "Contact Final Touch Cleaning Company | Las Vegas, NV" (54 chars)
2. Meta description: no phone in correct position -> 149 chars with phone prominent
3. openGraph block: absent -> added
4. Hero heading: "Talk to a real person" -> "Get in touch with Final Touch Cleaning Company"
5. Step 4 of "What happens next": brand-voice filler -> real process step ("We do the job and follow up")
6. New FAQ: "What services does Final Touch offer?" -> routes to services + walkthrough
7. New FAQ: "Is Final Touch a local company or a franchise?" -> owner names, family-owned, not a call center
8. Internal links: 1 (/locations tile) -> 3 live links (/services in What to include, /locations tile, /faq below accordion)

#### FAQ Counts
- /free-quote: 10 (unchanged count, 1 answer rewritten)
- /contact: 10 (was 8, +2 new FAQs)

#### Files Changed
- app/free-quote/page.tsx
- app/contact/page.tsx

#### Validation Results
- npm run lint — passed clean
- npm run type-check — passed clean
- npm run build — passed clean
- CTA greps — passed

#### Pass/Fail Gate Result
PASS

#### Remaining TODOs
- TODO-BATCH-2: QuoteFormPlaceholder still needs real form endpoint wiring on both pages
- TODO-VERIFY: business hours on /contact still pending owner confirmation
- TODO-DEFERRED-TIER1: /reviews and /pricing not yet linked from either page


### Batch 2 Rebuild — About + Services Hub + Locations Hub — Level 3
Status: Committed
Date: 2026-05-18

#### Routing
- /about: Level 3 Core Trust, Trust + Brand Story Prompt
- /services: Level 3 Core SEO/AEO, SEO/AEO Services Hub Prompt
- /locations: Level 3 Core SEO/AEO, Local SEO/AEO Locations Hub Prompt
- Prompt A: combined research for all three (shared brand story + service taxonomy)
- Prompt B: each page implemented separately

#### Content Gaps Fixed — /about
1. Metadata title: bare "About" -> "About Final Touch Cleaning Company | Las Vegas, NV" (50 chars)
2. Meta description: updated to include Las Vegas Valley metro reference
3. openGraph block: absent -> added
4. Hero sub: no metro reference -> uses SITE.serviceArea.metro (the Las Vegas Valley)
5. Internal links: 0 body links -> /services (Our story section) + /faq (FAQ footer)
6. "How we work" 3-card section: reconstructed from existing implementation log notes

#### Content Gaps Fixed — /services
1. Metadata title: bare "Services" -> "Cleaning Services Las Vegas & Clark County, NV | Final Touch" (60 chars)
2. Meta description: 150 chars with 7 services + Clark County + free quotes
3. openGraph block: absent -> added
4. Hero H1: generic "Seven services. One standard." -> includes Las Vegas + metro keyword
5. Internal links: /locations already present -> added /about (Choose by moment section) + /faq (FAQ footer)

#### Content Gaps Fixed — /locations
1. Metadata title: bare "Service Area" -> "Cleaning Across the Las Vegas Valley | Final Touch" (47 chars)
2. Meta description: 140 chars with all 4 cities + Clark County + phone
3. openGraph block: absent -> added
4. Hero sub: no business name -> uses SITE.name for entity clarity
5. Internal links: 0 body links -> /services + /about (One team section) + /faq (FAQ footer)

#### FAQ Counts (unchanged)
- /about: 7
- /services: 10
- /locations: 9

#### Files Changed
- app/about/page.tsx
- app/services/page.tsx
- app/locations/page.tsx

#### Validation Results
- npm run lint — passed clean
- npm run type-check — passed clean
- npm run build — passed clean
- CTA greps — passed

#### Pass/Fail Gate Result
PASS

#### Remaining TODOs
- TODO-BATCH-3: service card hrefs on /services still link to individual service pages that 404 until Batch 3
- TODO-BATCH-4: city card hrefs on /locations still link to city pages that 404 until Batch 4
- TODO-VERIFY: Organization JSON-LD on /about still missing license, insurance, foundingDate, sameAs
- TODO-DEFERRED-TIER1: /reviews and /pricing not yet linked from any of these pages


### Batch 3 — Service Pages (7 Tier 2 Service Pages)
Status: Implemented pending review
Date: 2026-05-18

Summary:
Built all 7 Tier 2 service pages per docs/site-build-plan.md Batch 3. Used the high-value two-step workflow (Prompt A research + approval, then Prompt B implementation) per docs/site-os/reference/high-value-page-enforcement-standard.md. All 7 pages are Level 5 Beyond-Elite depth. No service pages existed prior to this batch.

Pages created (7):
- app/services/commercial-office-cleaning/page.tsx
- app/services/janitorial-services/page.tsx
- app/services/post-construction-cleanup/page.tsx
- app/services/move-in-cleaning/page.tsx
- app/services/move-out-cleaning/page.tsx
- app/services/deep-cleaning/page.tsx
- app/services/retail-space-cleaning/page.tsx

Files updated:
- app/page.tsx — remove SERVICES_WITH_FALLBACK const and TODO-BATCH-3 comment; revert service card hrefs to use SERVICES directly now that all 7 service pages exist.
- docs/site-os/implementation-log.md — this entry.

Components reused (no changes to any component):
- HeroSection — split layout with formSlot={<QuoteFormPlaceholder />} on all 7 pages
- CTASection — tone="blue", no duplicate form, on all 7 pages
- FAQSection — 7 items per page, defaultOpenFirst, on all 7 pages
- SectionHeader — eyebrow + heading + sub throughout all sections
- ServiceCard + ServiceImagePlaceholder — 6 sibling cards per page via SERVICES.filter(s => s.slug !== '<this-slug>')
- QuoteFormPlaceholder — hero form slot on all 7 pages

No new components created. No constants changed. No packages installed.

Section structure (10 sections, identical pattern across all 7 pages):
1. Hero — HeroSection split with QuoteFormPlaceholder
2. Quick Answer — direct-answer paragraph within first 100 words of body copy
3. Who This Is For — 4-card grid, audience segments specific to each service
4. What's Included — checkmark list, generic-but-honest scope per service
5. Why Final Touch — 3-card grid, verified differentiators only (family-owned, local, detail-focused)
6. Service Process — 4-step numbered list
7. Service Areas — city pill links (Las Vegas, Henderson, North Las Vegas, Boulder City, Clark County), all pointing to ROUTES.locations until Batch 4 city pages are built
8. Related Services — 6 sibling ServiceCard grid with ServiceImagePlaceholder (16:10 aspect)
9. FAQ — FAQSection, 7 items, defaultOpenFirst
10. Final CTA — CTASection tone="blue", no duplicate form

Keyword coverage (all 10 types per docs/site-os/reference/keyword-research-and-aeo-depth-standard.md):
Primary, secondary, long-tail, local modifiers, AEO question targets, transactional, informational, commercial comparison, entity/semantic, internal-link anchor targets — mapped for all 7 pages in Prompt A.

AEO/FAQ coverage:
- 7 FAQs per page (49 total)
- All answers follow direct-answer format (answer in sentence 1)
- All questions are real customer phrasing
- FAQPage JSON-LD generated from same faq[] array rendered by FAQSection — exact text match enforced by construction

Metadata per page:
- /services/commercial-office-cleaning — "Commercial Office Cleaning in Las Vegas, NV | Final Touch" / 152-char description / canonical set
- /services/janitorial-services — "Janitorial Services in Las Vegas, NV | Final Touch Cleaning" / 155-char description / canonical set
- /services/post-construction-cleanup — "Post-Construction Cleanup in Las Vegas, NV | Final Touch" / 159-char description / canonical set
- /services/move-in-cleaning — "Move-In Cleaning Service in Las Vegas, NV | Final Touch" / 156-char description / canonical set
- /services/move-out-cleaning — "Move-Out Cleaning Service in Las Vegas, NV | Final Touch" / 148-char description / canonical set
- /services/deep-cleaning — "Deep Cleaning Service in Las Vegas, NV | Final Touch" / 149-char description / canonical set
- /services/retail-space-cleaning — "Retail Space Cleaning in Las Vegas, NV | Final Touch" / 155-char description / canonical set
All 7 have unique titles, unique descriptions, self-referencing canonicals, and openGraph blocks.

Schema per page (all 7):
- Service JSON-LD: name, serviceType, provider (Organization with phone + email), areaServed (Clark County + 4 cities)
- FAQPage JSON-LD: mainEntity from same faq[] array as FAQSection
- BreadcrumbList JSON-LD: Home > Services > [Service Name]
- No AggregateRating, no Review, no HowTo, no streetAddress

Internal links per page:
- All pages link to /services (services hub), /free-quote (primary CTA), /locations (service area pills)
- Cross-links between related services: commercial <-> janitorial, post-construction <-> move-in, move-in <-> move-out, deep cleaning referenced from 4 pages
- Minimum 5 internal hrefs per page, up to 6 on pages with two city references
- TODO-BATCH-4 comments in each service area section for when per-city hrefs replace /locations hub links

No-fake-data compliance:
- Zero matches on: licensed, insured, award, years in business, certified, satisfaction guarantee, same-day, emergency, 24/7, star rating, testimonial, review
- Move-out cleaning page explicitly states: "We do not guarantee deposit outcomes" — honest framing, no fabricated promise
- All trust positioning draws from SITE.owners, SITE.phone, SITE.serviceArea only
- Service scope uses generic-but-honest descriptions confirmed as accurate for a cleaning business; nothing invented
- No pricing, response times, or availability windows claimed

Validation:
- TypeScript type check — PASS (0 errors, confirmed in container against Next.js 16.2.6 + React 19 types)
- Em dash check — PASS (0 across all 7 pages)
- Double hyphen check — PASS (0 across all 7 pages)
- Fake-data grep — PASS (0 matches across all 7 pages)
- npm run lint — passed clean
- npm run type-check — passed clean
- npm run build — passed clean

Remaining TODOs:
- TODO-BATCH-3 resolved — remove SERVICES_WITH_FALLBACK from app/page.tsx and update service card hrefs to use SERVICES directly
- TODO-BATCH-4 × 7 — update city pill hrefs in each service page's service area section from ROUTES.locations to per-city routes once /locations/las-vegas etc. are built
- TODO-BATCH-2+ (inherited) — replace ServiceImagePlaceholder with owner-supplied photos when assets are approved
- TODO-BATCH-2+ (inherited) — wire QuoteFormPlaceholder to a real form endpoint
- All other Batch 1.x and Batch 2 carry-forward TODOs unchanged


### Batch 4 — City Location Page: Henderson (/locations/henderson) — Level 3
Status: Implemented pending validation
Date: 2026-05-18

Files Created: app/locations/henderson/page.tsx
Pass/Fail Gate: PASS (44/44, pending local validation run)
Anti-Doorway: PASS — master-planned community framing, Green Valley/Anthem/MacDonald Highlands/Seven Hills named, service order differs from Las Vegas

Internal Links: /locations, /services, /services/move-in-cleaning,
/services/move-out-cleaning, /services/deep-cleaning,
/services/commercial-office-cleaning, /free-quote (x2), /faq, /about,
/locations/las-vegas, /locations/north-las-vegas, /locations/boulder-city,
/locations/clark-county, tel:+17024445077

TODOs:
- TODO-BATCH-5: 5 neighborhood chips fall back to /locations until Batch 5 ships
  (green-valley-ranch, anthem, cadence, seven-hills, mcdonald-highlands)
- Sibling city hrefs are forward links resolving when remaining Batch 4 pages ship


### Batch 4 — City Location Page: North Las Vegas (/locations/north-las-vegas) — Level 3
Status: Implemented pending validation
Date: 2026-05-18

Files Created: app/locations/north-las-vegas/page.tsx
Pass/Fail Gate: PASS (44/44, pending local validation run)
Anti-Doorway: PASS — industrial/warehouse corridor section unique to NLV,
post-construction leads service order, rental-density framing distinct
from Henderson, FAQ 5 (warehouse/industrial) not present on any sibling page

Internal Links: /locations, /services, /services/post-construction-cleanup,
/services/commercial-office-cleaning, /services/move-out-cleaning,
/services/deep-cleaning, /free-quote (x2), /faq, /about,
/locations/las-vegas, /locations/henderson, /locations/boulder-city,
/locations/clark-county, tel:+17024445077

TODOs:
- TODO-BATCH-5: Aliante and Eldorado neighborhood chips fall back to /locations
- TODO-BATCH-5: Additional NLV neighborhood chips to be added when Batch 5 ships
- Sibling city hrefs are forward links resolving when remaining Batch 4 pages ship


### Batch 4 — City Location Page: Boulder City (/locations/boulder-city) — Level 3
Status: Implemented pending validation
Date: 2026-05-18

Files Created: app/locations/boulder-city/page.tsx
Pass/Fail Gate: PASS (44/44, pending local validation run)
Anti-Doorway: PASS — historic/older home framing unique to Boulder City,
service order differs from all 3 prior pages (deep cleaning leads),
Lake Mead and historic downtown referenced, FAQ 4 (historic homes),
FAQ 5 (small business storefronts), FAQ 7 (distance/coverage concern)
all unique to this page

Internal Links: /locations, /services, /services/deep-cleaning,
/services/move-in-cleaning, /services/move-out-cleaning,
/services/commercial-office-cleaning, /services/post-construction-cleanup,
/free-quote (x2), /faq, /about, /locations/las-vegas,
/locations/henderson, /locations/north-las-vegas,
/locations/clark-county, tel:+17024445077

TODOs:
- TODO-BATCH-5: Boulder City neighborhood chips placeholder — none added yet,
  comment in source marks the section for Batch 5 population
- Sibling city hrefs are forward links resolving when Clark County page ships


### Batch 4 — City Location Page: Clark County (/locations/clark-county) — Level 3
Status: Implemented pending validation
Date: 2026-05-18

Files Created: app/locations/clark-county/page.tsx
Pass/Fail Gate: PASS (44/44, pending local validation run)
Anti-Doorway: PASS — county hub structure differs from all 4 city pages:
city grid replaces neighborhood chips, county-scope framing throughout,
FAQ 5 (multi-location commercial), FAQ 7 (unincorporated areas) unique
to this page, LOCATIONS constant drives city cards

Internal Links: /locations, /services, /services/post-construction-cleanup,
/services/move-in-cleaning, /services/commercial-office-cleaning,
/services/move-out-cleaning, /services/deep-cleaning,
/services/retail-space-cleaning, /free-quote (x2), /faq, /about,
/locations/las-vegas, /locations/henderson, /locations/north-las-vegas,
/locations/boulder-city (all via CITY_PAGES from LOCATIONS constant),
tel:+17024445077

TODOs:
- No neighborhood chips section — county hub design per Batch 4 spec
- City card hrefs all live once all 5 Batch 4 pages are committed
