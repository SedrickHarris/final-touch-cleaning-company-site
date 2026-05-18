# Internal Linking Guide — Final Touch Cleaning Company

Client-specific adaptation of `docs/internal-linking-guide.md` (Site OS Master). Uses the real Final Touch routes, services, and cities defined in `docs/site-build-plan.md` and `lib/constants/site.ts`.

Goal: strong SEO, AEO, GEO, and user-navigation signals across the 280+ page Final Touch build — without overcomplicating any single page.

---

## 1. Why Internal Linking Matters Here

Final Touch is being built as a programmatic local SEO site (~75 pages at launch, scaling to 280+). At that scale, internal links are how:

- **SEO** — authority flows from the homepage and Tier 2 service hubs down into the Tier 4 service-plus-city matrix that does the bulk of the local ranking.
- **AEO** — Google AI Overviews, ChatGPT, Perplexity, and Claude resolve cleaning questions to a single best page. Strong topical clusters (service ↔ city ↔ neighborhood ↔ FAQ) make Final Touch that page.
- **GEO** — service + city + neighborhood links reinforce Clark County coverage. Las Vegas / Henderson / North Las Vegas / Boulder City all need to be reachable from every cluster.
- **User navigation** — a Summerlin homeowner who lands on a blog post should reach a `/free-quote` in two clicks max.

Every published page must have at least one inbound link from another built page. Orphans do not rank.

---

## 2. Site Structure Recap

Pulled from `docs/site-build-plan.md`. Use these patterns when planning links.

| Tier | Pattern | Examples |
|---|---|---|
| Tier 1 — Brand | `/[page]` | `/`, `/about`, `/services`, `/locations`, `/faq`, `/free-quote`, `/contact`, `/pricing`, `/reviews`, `/cleaning-process` |
| Tier 2 — Service | `/services/[service]` | `/services/deep-cleaning`, `/services/post-construction-cleanup` |
| Tier 3 — City | `/locations/[city]` | `/locations/las-vegas`, `/locations/henderson` |
| Tier 3 — Neighborhood | `/locations/[city]/[neighborhood]` | `/locations/henderson/cadence`, `/locations/las-vegas/summerlin` |
| Tier 4 — Service + City | `/services/[service]/[city]` | `/services/deep-cleaning/henderson` |
| Tier 4 — Service + Neighborhood | `/services/[service]/[neighborhood]` | `/services/post-construction-cleanup/cadence` |
| Specialized | `/builders/...`, `/industries/...`, `/seasonal/...`, `/urgent-cleaning/...`, `/cleaning-solutions/...`, `/communities/...` | See `site-build-plan.md` |
| Spanish | `/es/[slug]` | `/es/limpieza-profunda-las-vegas` |
| Blog | `/blog/[post]` | `/blog/post-construction-cleaning-checklist-las-vegas` |

The 7 services: `commercial-office-cleaning`, `janitorial-services`, `post-construction-cleanup`, `move-in-cleaning`, `move-out-cleaning`, `deep-cleaning`, `retail-space-cleaning`.

The 5 city routes: `las-vegas`, `henderson`, `north-las-vegas`, `boulder-city`, `clark-county`.

Primary CTA: `/free-quote`. Secondary CTA: `tel:+17024445077` (use the `href` from `SITE.phone.href` in `lib/constants/site.ts`).

---

## 3. Linking Rules by Page Type

### Homepage (`/`)

- Link to **all 7 Tier 2 service pages** (services preview section).
- Link to **all 5 Tier 3 city pages** (locations preview section).
- Link to `/faq`, `/about`, `/reviews`, `/pricing`, `/blog`.
- Link to `/free-quote` in hero + final CTA band.
- Click-to-call `tel:+17024445077` in header and sticky mobile bar.

### Service Pages (Tier 2 — `/services/[service]`)

- Link to **3–4 related services** (cross-sell — e.g., deep cleaning ↔ move-in cleaning).
- Link to **the top Tier 4 service + city pages** for this service (at minimum: Las Vegas, Henderson, North Las Vegas, Boulder City).
- Link to **3–5 relevant Tier 4 service + neighborhood pages** when they exist (e.g., post-construction → Cadence, Summerlin, Inspirada).
- Link to `/services` (hub), `/locations` (hub), and `/faq`.
- Link to `/free-quote` mid-page and in the final CTA band.
- Link to 1–2 related blog posts when available.

### City Location Pages (Tier 3 — `/locations/[city]`)

- Link to **every neighborhood child** under that city (e.g., Henderson links to Green Valley, Anthem, Cadence, Seven Hills, etc.).
- Link to **all 7 Tier 4 service + city pages** for that city.
- Link to `/locations` (hub), homepage, and the nearest sibling city.
- Link to `/faq` and `/free-quote`.

### Neighborhood Pages (Tier 3 — `/locations/[city]/[neighborhood]`)

- Link **up** to the parent city page (e.g., Cadence → `/locations/henderson`).
- Link to **2–3 relevant Tier 4 service + neighborhood pages** for that neighborhood (where they exist).
- Link to **2–3 Tier 4 service + city pages** in the parent city.
- Link to `/free-quote` and `/faq`.

### Service + City Pages (Tier 4 — `/services/[service]/[city]`)

- Link **up** to the Tier 2 service parent (e.g., `/services/deep-cleaning/henderson` → `/services/deep-cleaning`).
- Link **up** to the Tier 3 city parent (e.g., → `/locations/henderson`).
- Link **sideways** to 1–2 sibling service + city pages (same service, neighboring city: Henderson ↔ Las Vegas).
- Link to 1–2 related Tier 4 service + neighborhood pages in that city when they exist.
- Link to `/free-quote` and `/faq`.

### Service + Neighborhood Pages (Tier 4 — `/services/[service]/[neighborhood]`)

- Link **up** to the Tier 2 service parent.
- Link **up** to the parent neighborhood page and the parent city page.
- Link **sideways** to 1–2 sibling service + neighborhood pages (same service, nearby neighborhood).
- Link to `/free-quote` and `/faq`.

### Specialized Pages (builders, industries, seasonal, urgency, problem-based, communities)

- Builder pages → `/services/post-construction-cleanup` + the city most relevant to that builder's projects.
- Industry pages → `/services/commercial-office-cleaning` (or `/services/janitorial-services`) + parent city page.
- Seasonal / urgency / problem-based → the closest matching Tier 2 service + relevant Tier 3 city.
- Community pages (Sun City Anthem, etc.) → parent city + 1–2 most-relevant services (move-in, deep, move-out).
- Every specialized page links to `/free-quote`.

### Blog Articles (`/blog/[post]`)

- Link to **1 pillar page** the post supports (service or location).
- Link to **2–3 related posts** in the same category.
- Link to `/free-quote` at least once in the article body (not just the footer).
- Posts about a specific neighborhood (e.g., Summerlin move-in guide) must link to that neighborhood page and to the matching Tier 4 service + neighborhood page.

### FAQ Sections

- The `/faq` hub links back to every Tier 1, Tier 2, and Tier 3 page whose questions it answers.
- Page-level FAQ blocks link to the `/faq` hub for "See all answers."
- An FAQ answer that mentions a service, city, or neighborhood links to that page on first mention only.
- Use FAQPage schema on every block (handled by the FAQ component — confirm it renders).

### CTA Links (every page)

- Primary CTA destination is always `/free-quote`. Do not invent alternates.
- Secondary CTA is tap-to-call: use `SITE.phone.href` from `lib/constants/site.ts`. Never hardcode `tel:` strings.
- Every Tier 1–4 page must include the primary CTA at least once in the body and once in a footer CTA band.
- The sticky mobile CTA bar counts toward presence but does **not** replace an inline body CTA.
- Spanish pages (`/es/...`) point to `/es/contacto-cotizacion-gratis` for the primary CTA, not `/free-quote`.

### Spanish Pages (`/es/...`)

- Link to the **English equivalent** via `hreflang` cross-reference (not as a visible body link).
- Link sideways to 2–3 other Spanish pages.
- Primary CTA is `/es/contacto-cotizacion-gratis`.

---

## 4. Anchor Text Rules

- **Descriptive, keyword-aware anchors.** Describe the destination.
  - Good: `deep cleaning in Henderson`, `Cadence neighborhood cleaning services`, `post-construction cleanup checklist`
  - Bad: `click here`, `learn more`, `this page`, `read more`
- Match anchor text to the **target page's H1 or primary keyword** when natural.
- Vary anchors across the site — do not link to `/services/deep-cleaning` with the exact same anchor on every page.
- Keep anchors **2–6 words**.
- "Final Touch Cleaning Company" or "Final Touch" as anchor text is fine for trust links (About, Reviews) but **not** for SEO-bearing service or location pages.
- Do not keyword-stuff. `deep cleaning services in Henderson` once per page is fine; repeating it as every anchor is a spam signal.
- Spanish anchor text must be in Spanish — do not mix English anchors into `/es/...` pages.

---

## 5. Broken Link Prevention

- Use **relative paths** for internal links (`/services/deep-cleaning`, never `https://www.finaltouchcleaningteam.com/services/deep-cleaning`).
- Import routes from `lib/constants/site.ts` when the file already uses constants. Do not hardcode strings that could rot.
- Use `SITE.phone.href` for `tel:` links and `SITE.email.href` for `mailto:` links.
- **No trailing slashes** — site-wide rule from `site-build-plan.md`.
- All lowercase, hyphen-separated slugs.
- Never link to a page that does not exist yet. If it is planned but not built, leave it as plain text and add a `{/* TODO-BATCH-N: link to /route when built */}` comment so the post-build audit (`docs/site-os/prompts/seo-aeo/internal-link-map-prompt.md` Mode 2) can find it.
- External links open in a new tab with `target="_blank" rel="noopener"`. Internal links never do.
- When renaming a route, grep the repo and update **every** reference before merging — including blog posts, FAQ answers, and component defaults.
- Two neighborhoods named Aliante exist (`/locations/las-vegas/aliante` and `/locations/north-las-vegas/aliante`). Always link to the full nested path, never just `/aliante`.

---

## 6. Pre-Build Checklist

Before sending a page to a build prompt:

- [ ] Page route confirmed against `docs/site-build-plan.md` slug rules.
- [ ] Page tier identified (Tier 1 / 2 / 3 / 4 / specialized).
- [ ] Parent page(s) identified — service parent and/or location parent.
- [ ] At least 2 inbound link sources planned (which existing pages will link to this one).
- [ ] Outbound link targets listed — by section (hero, body, FAQ, final CTA, footer).
- [ ] Anchor text drafted for each planned link and aligned with the target page's primary keyword.
- [ ] Primary CTA confirmed (`/free-quote` or `/es/contacto-cotizacion-gratis` for Spanish).
- [ ] No planned link points to a route that won't exist at launch (unless a `TODO-BATCH-N` comment is planned).
- [ ] If running the full Site OS flow: Mode 1 of `docs/site-os/prompts/seo-aeo/internal-link-map-prompt.md` has produced the outbound + inbound link plan.

---

## 7. Post-Build QA Checklist

Before committing the batch:

- [ ] Page contains the minimum outbound links for its tier (Tier 1–2 brand/service: 5–8; Tier 3 city: 5–8; Tier 3 neighborhood: 4–6; Tier 4: 4–6; Legal/utility: 2–3).
- [ ] Page links back to `/` (logo counts).
- [ ] Page links to `/free-quote` at least once in the body and once in a final CTA band.
- [ ] Page links to its Tier 2 service parent and/or Tier 3 location parent (when applicable).
- [ ] Page has at least 1 inbound link from an already-built page, or a planned inbound link is added to a page in this batch.
- [ ] All anchor text is descriptive — no "click here" or "learn more."
- [ ] All internal links use relative paths.
- [ ] All internal links resolve to existing routes (no 404s in prod).
- [ ] Tap-to-call uses `SITE.phone.href` — no hardcoded `tel:` strings.
- [ ] FAQ block links to `/faq` hub (Tier 1–4 pages).
- [ ] No duplicate links to the same destination within a single section.
- [ ] External links use `target="_blank" rel="noopener"`; internal links do not.
- [ ] If a deferred inbound link exists, a `TODO-BATCH-N` comment is present.
- [ ] Spanish pages link to their English equivalent via `hreflang` cross-reference.

---

## 8. When in Doubt

- Prefer **fewer, more relevant** links over many weak ones.
- Ask: *Would a Final Touch customer on this page want to click this next?* If yes, link it. If no, drop it.
- Topical relevance and clear local hierarchy beat raw link count for both users and answer engines.
- When the link plan is unclear, run Mode 1 of `docs/site-os/prompts/seo-aeo/internal-link-map-prompt.md` before writing copy. It is faster to plan than to patch.
