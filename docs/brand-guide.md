# Final Touch Cleaning Company — Brand Guide

> **Where small details bring BIG RESULTS.**

This document defines the visual and verbal identity for Final Touch Cleaning Company. All web, print, and marketing assets must follow this guide.

---

## 1. Brand Essence

**Personality:** Professional · Trustworthy · Family-owned · Local · Detail-focused · Premium but approachable

**Core message:** *Where small details bring BIG RESULTS.*

**Promise:** We treat every home and business like our own — finishing the job with the care, polish, and attention that the average cleaning crew skips. We are local, family-run, and built on referrals from neighbors who trust us.

**Tone of voice:**
- Confident, warm, never corporate-stiff
- Speaks to homeowners and business owners as peers, not prospects
- Concrete over abstract ("we wipe baseboards, light switches, and door frames" beats "we provide thorough service")
- Local-first: references Clark County, Vegas, Henderson by name where natural
- Avoids: jargon, hype words ("amazing!", "best!"), exclamation overload, generic stock language

---

## 2. Color System

### Primary Palette

| Token            | Hex       | Usage                                                                 |
|------------------|-----------|----------------------------------------------------------------------|
| `--brand-blue`   | `#1A5FB4` | Primary brand color. CTAs, links, headlines accents, key UI elements |
| `--brand-black`  | `#1A1A1A` | Body text, dark surfaces, headlines (default)                        |
| `--brand-white`  | `#FFFFFF` | Backgrounds, surfaces, reverse text on dark/blue                     |

### Usage Rules

- **One primary action per view.** CTAs use `--brand-blue` on white, or white on `--brand-blue`.
- **Body text** is `--brand-black` on `--brand-white`. Never pure `#000` on `#FFF`.
- **Reverse contexts** (dark hero, blue band): use `--brand-white` for text and a white or blue-tint CTA.
- **Do not** introduce additional accent colors (no greens, oranges, golds) without explicit approval.
- **Minimum contrast:** WCAG AA — body text ≥ 4.5:1, large text/UI ≥ 3:1.

### Tints & Neutrals (derived, for UI only)

These are not brand colors — they're functional shades for backgrounds, borders, and muted text. Keep usage minimal.

| Token              | Hex       | Usage                                  |
|--------------------|-----------|----------------------------------------|
| `--surface-soft`   | `#F6F8FB` | Section backgrounds, card surfaces     |
| `--border-subtle`  | `#E5E9F0` | Dividers, card borders                 |
| `--text-muted`     | `#5A6675` | Captions, helper text, metadata        |
| `--blue-tint`      | `#EAF1FB` | Blue-washed surfaces, badge backgrounds|

---

## 3. Typography

### Typefaces

| Role            | Font     | Weights to load        | Notes                                    |
|-----------------|----------|------------------------|------------------------------------------|
| Headlines       | Fraunces | 400, 500, 600, 700     | Serif, expressive, gives the premium feel |
| Body & UI       | Manrope  | 400, 500, 600, 700     | Sans, clean, modern, highly readable     |

Load via `next/font` (or equivalent) with `display=swap`. Subset to `latin`.

### Type Scale (web)

Use a fluid, modular scale. Reference values at desktop (≥1024px):

| Role            | Font     | Size      | Line height | Weight | Tracking  |
|-----------------|----------|-----------|-------------|--------|-----------|
| Display (H1)    | Fraunces | 56–72px   | 1.05        | 600    | -0.02em   |
| Section (H2)    | Fraunces | 40–48px   | 1.1         | 600    | -0.015em  |
| Subsection (H3) | Fraunces | 28–32px   | 1.2         | 500    | -0.01em   |
| Eyebrow         | Manrope  | 13–14px   | 1.2         | 600    | 0.12em UC |
| Body            | Manrope  | 16–18px   | 1.6         | 400    | 0         |
| Body small      | Manrope  | 14px      | 1.55        | 400    | 0         |
| Button / UI     | Manrope  | 15–16px   | 1           | 600    | 0.01em    |

**Rules**
- Headlines: **Fraunces only**. Never set headlines in Manrope.
- Body, buttons, nav, forms, captions: **Manrope only**.
- Eyebrows (small tags above headlines) are uppercase Manrope with letter-spacing.
- Avoid italics in body. Use italics sparingly in Fraunces headlines for emphasis ("*detail*").

---

## 4. Logo & Wordmark

- Wordmark: "Final Touch Cleaning Company" — set in Fraunces 600, `--brand-black` on light, `--brand-white` on dark/blue.
- Maintain a clear-space buffer equal to the cap-height on all sides.
- Minimum size: 120px wide on web, 1 inch wide in print.
- Do not stretch, recolor outside the brand palette, add drop shadows, or place on busy photography without a solid plate behind it.

---

## 5. Photography & Imagery

- **Subject:** Real spaces — kitchens, bathrooms, offices, vacation rentals — clean, bright, lived-in (not staged-empty).
- **Style:** Natural daylight, neutral white balance, crisp focus on the detail (a wiped baseboard, a folded towel, a streak-free window).
- **Avoid:** Stock photos of models in cartoon-yellow gloves, sparkle/shine overlay graphics, harsh studio lighting.
- **Crops:** Favor close-ups of the "finishing touch" — the moment a detail makes the room.
- If real photography is unavailable for a section, use a clean blue or soft-gray surface rather than a generic stock image.

---

## 6. Iconography

- Line icons, 1.5px stroke, rounded caps, in `--brand-black` or `--brand-blue`.
- Recommended sources: Lucide or Phosphor (Regular). Pick one and use it everywhere — do not mix icon sets.
- Icons support text, they don't replace it. Always label.

---

## 7. Layout & Spacing

- **Grid:** 12-column desktop, 4-column mobile. Max content width: 1200px.
- **Spacing scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96px. Avoid arbitrary values.
- **Section vertical rhythm:** 96–128px desktop, 64–80px mobile.
- **Card radius:** 12–16px. Buttons: 8–10px. No fully rounded (pill) buttons except for tags/chips.
- **Shadows:** Soft, single-layer, low opacity (`0 6px 24px rgba(26, 26, 26, 0.06)`). No hard drop shadows.

---

## 8. Buttons & Interaction

### Primary CTA
- Background: `--brand-blue` · Text: `--brand-white` · Weight: 600
- Hover: darken background ~8% · Active: darken ~14%
- Focus: 2px outline in `--brand-blue` with 2px white offset (visible on any background)

### Secondary CTA
- Background: transparent · Border: 1.5px `--brand-black` · Text: `--brand-black`
- Hover: fill `--brand-black`, text `--brand-white`

### Link
- `--brand-blue`, underline on hover. Underline offset 2–3px.

### Motion
- Transitions 150–250ms, `ease-out`.
- Respect `prefers-reduced-motion` — disable non-essential transitions.

---

## 9. Voice — Do / Don't

| ✓ Do                                                          | ✗ Don't                                                       |
|----------------------------------------------------------------|---------------------------------------------------------------|
| "Family-owned and run from right here in Henderson."           | "We are a leading provider of premium cleaning solutions."    |
| "We finish what others skip: baseboards, vents, switch plates."| "Top-quality service guaranteed!!!"                           |
| "Get a free quote — text or call (702) 444-5077."              | "Click here for a quote today!"                               |
| "Trusted by neighbors across Clark County."                    | "World-class. Industry-leading. Unmatched."                   |

---

## 10. Service Area

Final Touch serves **Clark County, Nevada**, including:

- Las Vegas
- Henderson
- North Las Vegas
- Boulder City

Reference these by name in copy when relevant (hero, service area sections, footer, schema markup). Do not claim coverage outside Clark County without confirmation.

---

## 11. Contact

| Channel | Value                                  |
|---------|----------------------------------------|
| Phone   | **(702) 444-5077**                     |
| Email   | **info@finaltouchcleaningteam.com**    |
| Area    | Clark County, NV (see §10)             |

**Display conventions**
- Phone is always formatted `(702) 444-5077` in display copy. Use `tel:+17024445077` in links.
- Email links use `mailto:info@finaltouchcleaningteam.com`.
- Phone and email are present in the site header (or sticky CTA), every page footer, and the contact page.

---

## 12. CSS Tokens (reference)

```css
:root {
  /* Brand */
  --brand-blue:    #1A5FB4;
  --brand-black:   #1A1A1A;
  --brand-white:   #FFFFFF;

  /* Functional neutrals */
  --surface-soft:  #F6F8FB;
  --border-subtle: #E5E9F0;
  --text-muted:    #5A6675;
  --blue-tint:     #EAF1FB;

  /* Type */
  --font-display:  'Fraunces', Georgia, serif;
  --font-body:     'Manrope', system-ui, -apple-system, sans-serif;

  /* Radius */
  --radius-button: 10px;
  --radius-card:   14px;

  /* Shadow */
  --shadow-card:   0 6px 24px rgba(26, 26, 26, 0.06);
}
```

---

*This guide is the source of truth. If a design choice isn't covered here, default to the simplest option that reinforces "small details, big results."*
