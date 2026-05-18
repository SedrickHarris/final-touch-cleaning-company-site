# Service Business Design Standards (Client-Side Reference)

Client-side reference for design standards that apply to every Final Touch page. Mirrors the universal primitives in Site OS Master (`docs/site-os/service-business-conversion-layout.md` and `docs/site-os/service-card-image-placeholder-standard.md` upstream) and consolidates them as one client-side reference.

## 1. Two-Column Hero / CTA Conversion Layout

For service-based business pages, hero and primary CTA sections default to a two-column layout: content on the left, quote/contact/booking form (or approved placeholder) on the right, in an expanded container.

### When Applied

- Hero on `/`, every service page, every location page, every neighborhood page, every service+city page
- Hero on `/free-quote`, `/contact`
- Optionally on landing pages with a form
- **Not applied to:** blog posts, legal pages, About, FAQ Hub, 404 (these use the standard single-column layout)

### Required Structure

**Left column:**
- Eyebrow (optional)
- Headline / H1 (with optional italic emphasis)
- Subheadline
- Optional verified trust bullets
- Primary CTA
- Optional secondary CTA (tap-to-call)

**Right column:**
- Quote form / contact form / booking form / approved placeholder

**Mobile:**
- Single column. Content first, form second.

### Technical Pattern

```tsx
<section className="relative overflow-hidden bg-light-gray">
  <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24 xl:py-28">
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.75fr)] gap-10 lg:gap-14 xl:gap-20 items-start">
      <div>{/* content */}</div>
      <div className="w-full lg:max-w-xl lg:justify-self-end">
        <QuoteFormPlaceholder />
      </div>
    </div>
  </div>
</section>
```

### Component API

`HeroSection` and `CTASection` both accept:

```ts
{
  formSlot?: ReactNode;
  layout?: 'standard' | 'split';
  container?: 'normal' | 'wide';
}
```

`formSlot` presence implies `layout: 'split'`; split implies `container: 'wide'`. Existing call sites without these props get the original single-column behavior.

### Heading Sizing in Split Mode

```
text-[2.25rem] sm:text-5xl lg:text-[3.25rem] xl:text-6xl 2xl:text-7xl
```

Smaller at `lg` than full-width hero because the content column is narrower. Scales up at `xl` / `2xl` once room exists.

### Final CTA Discipline

- If the hero contains a form, the final CTA section is text + primary CTA + optional tap-to-call **only — no second form**.
- Do not duplicate forms across a single page.

## 2. Service Card Image Placeholder Standard

Every service card on a service-business build ships with a visual image placeholder area at the top by default. The placeholder is decorative until a real owner-supplied photo replaces it.

### When Applied

- Homepage service preview
- Services hub (`/services`)
- Related-services grids on individual service pages
- Location-page service grids
- Service + city matrix pages
- Any reusable `ServiceCard` component

### Required Card Structure

1. Image placeholder area (top)
2. Service title (H3)
3. Short description (1–2 sentences)
4. CTA link or button with arrow affordance

### Image Placeholder Requirements

- Consistent aspect ratio across a grid: `aspect-[16/10]` default (alternatives: `4/3`, `3/2`)
- Brand-token background — `soft-blue`, `light-gray`, subtle radial / linear gradient. Never raw hex; never stock photography.
- `aria-hidden="true"` when decorative
- No baked-in text inside the image area
- TODO comment in code noting future owner-supplied photo replacement
- Card wrapper has `overflow-hidden` so rounded top corners clip correctly

### Reusable Components

- `<ServiceCard href name description />` — composes placeholder + body
- `<ServiceImagePlaceholder aspect />` — pure visual, reusable elsewhere

### Anti-Patterns

- Text-only service cards on a service-business build (looks thin)
- Emoji as substitute for the placeholder
- Stock photos as "temporary" filler (invented imagery; placeholder is the right temporary)
- Mixed aspect ratios in one grid
- Missing `aria-hidden` on decorative placeholders
- Baked-in service-name text in the placeholder image

## 3. Wide Containers

- **Conversion sections** (hero, CTA in split mode): `max-w-[1440px]` with `px-4 sm:px-6 lg:px-10 xl:px-12` (optionally `2xl:px-16`)
- **Standard sections** (TrustBar, services preview, FAQ, footer): keep at `max-w-7xl` (1280px) or project default

## 4. Mobile Stack Behavior

- All two-column layouts collapse to single column at `<lg` (1024px)
- Source DOM order: content first, form second (correct screen-reader linear order)
- Mobile hero never hides the form behind a "click to expand" toggle — the form is visible and operable on first scroll
- Mobile menu locks body scroll when open

## 5. Quote / Contact Form Placement

Until a live form endpoint is owner-confirmed:

- Use `<QuoteFormPlaceholder />` in the form slot
- Inputs disabled (`disabled` + `aria-disabled="true"`)
- Submit intercepted (`onSubmit={(e) => e.preventDefault()}`)
- Clear "form not yet active — call or email" note
- Phone fallback prominent inside the form
- TODO comment in code noting future endpoint wiring

## 6. Accessibility Standards

- One `<h1>` per page
- Sequential heading hierarchy (no skipped levels)
- `lang="en"` on `<html>` (inherited from root layout)
- Skip-to-content link in root layout
- Visible focus ring on every interactive element (2px brand-blue with 2px offset)
- `aria-current="page"` on active nav item
- Form labels visible above inputs (never placeholder-only)
- Decorative images `aria-hidden="true"`
- Color contrast: body ≥ 4.5:1, large text ≥ 3:1 (WCAG AA)
- Reduced-motion respected via `<MotionConfig reducedMotion="user">` at root

## 7. Motion Discipline

- All animations transform / opacity only (no animated width / height / top / left)
- Durations < 300ms (typically 180ms micro / 280ms short)
- Ease-out curves (`[0.22, 1, 0.36, 1]` shared across the site)
- In-view trigger with `viewport.once: true` — single-fire, never looping
- No scroll-jacking, no parallax (or only the most subtle, reduced-motion safe)
- Stagger: 60ms between siblings in a list
- Mobile menu, FAQ accordion: AnimatePresence with auto-height (bounded, user-initiated)

Shared motion tokens live in `lib/motion.ts`:
- `DURATION = { micro: 0.18, short: 0.28, medium: 0.4 }`
- `EASE_OUT = [0.22, 1, 0.36, 1]`
- `fadeUp`, `fadeIn`, `stagger()` variants

`MotionConfig reducedMotion="user"` at the root (`components/motion/MotionProvider.tsx`) means OS reduce-motion automatically reduces every animation site-wide. Component authors don't need to call `useReducedMotion` individually.

## 8. No Fake Visual Claims

- No fake before/after photos
- No AI-generated photography of staff, customers, completed work
- No stock photos misrepresenting the business
- No readable logos / signage / business names in placeholder images
- No "trust badges" for unverified partnerships
- No "5-star rated" / star-rating visuals unless verified review data exists

When a visual asset is needed but no verified asset exists, ship the decorative placeholder and leave a TODO for owner-supplied replacement.

## 9. Brand Token Discipline

Every color, font, radius, and shadow in component markup uses an `@theme` token from `app/globals.css`:

- Colors: `brand-blue`, `brand-blue-hover`, `soft-blue`, `brand-black`, `brand-white`, `light-gray`, `border-subtle`, `muted`, `success`
- Fonts: `font-display` (Fraunces), `font-body` (Manrope)
- Radii: card 14px, button 10px
- Shadow: `0 6px 24px rgba(26,26,26,0.06)` (rest) / `0 10px 30px rgba(26,26,26,0.08)` (hover)

Raw hex outside `@theme` is a smell — refactor to a token.

## Cross-References

- `docs/brand-guide.md` — brand identity, voice, type scale
- `docs/site-os/no-fake-data-policy.md` — content / claim safety that applies inside every layout
- `docs/site-os/file-scope-and-git-safety-policy.md` — file-scope discipline when iterating these patterns
- `lib/motion.ts` — motion tokens
- `app/globals.css` — `@theme` token source
- `components/shared/HeroSection.tsx`, `CTASection.tsx` — split-layout reference impl
- `components/shared/ServiceCard.tsx`, `ServiceImagePlaceholder.tsx` — image-placeholder reference impl
