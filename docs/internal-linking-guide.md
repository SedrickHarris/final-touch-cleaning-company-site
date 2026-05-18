# Internal Linking Guide

A reusable internal linking standard for Site OS Master client website builds. The goal is strong SEO, AEO, GEO, and user-navigation signals — without overcomplicating the build.

Apply this guide to every client site unless a project-specific override is documented.

---

## 1. Why Internal Linking Matters

Internal links do four jobs at once:

- **SEO** — they pass authority between pages and help search engines crawl the full site.
- **AEO** — they create clear topical clusters so answer engines (ChatGPT, Perplexity, Google AI Overviews) can resolve a question to a single best source.
- **GEO** — they reinforce location relevance by tying services to cities, neighborhoods, and service areas.
- **User navigation** — they shorten the path to the next useful page and reduce dead ends.

If a page has no inbound links from elsewhere on the site, search engines treat it as low-priority and users rarely find it. Every published page should be linked from at least two other pages.

---

## 2. Standard Internal Linking Structure

Every client site follows this baseline link graph:

```
Homepage
  ├── Service pages (each)
  │     ├── Related service pages (1–3)
  │     ├── Service + Location pages (top cities)
  │     └── FAQ hub or service FAQs
  ├── Location pages (each)
  │     ├── Service pages offered in that location
  │     ├── Neighborhood pages (if applicable)
  │     └── FAQ links relevant to that location
  ├── Service + Location pages
  │     ├── Parent service page
  │     ├── Parent location page
  │     └── 1–2 nearby Service + Location pages
  ├── Blog articles
  │     ├── Pillar service or location page
  │     ├── 2–3 related articles
  │     └── Primary CTA page (quote / contact)
  └── FAQ hub
        └── Linked from every Tier 1–4 page
```

**Minimums per page:**

- At least **3 contextual internal links** in the body.
- At least **1 link back to the homepage** (logo counts).
- At least **1 link to a CTA destination** (quote, contact, or call).
- At least **1 inbound link** from a parent page.

---

## 3. Linking Rules by Page Type

### Homepage Links

- Link to every top-level service page.
- Link to the primary location hub (or city hubs if multi-city).
- Link to the FAQ hub.
- Link to the blog index (if a blog exists).
- Link to the primary CTA (quote / contact).
- Do **not** link to every page on the site — keep it scannable.

### Service Page Links

- Link to **1–3 related services** the same customer might need.
- Link to the **top Service + Location pages** for that service (2–4 cities).
- Link back to the homepage (logo).
- Link to the FAQ hub or service-specific FAQs.
- Link to the primary CTA at least twice on the page (mid-page + footer band).

### Location Page Links

- Link to **every service offered in that location**.
- Link to **neighborhood pages** under that location (if applicable).
- Link to the homepage and the nearest sibling location page.
- Link to the FAQ hub.
- Link to the primary CTA.

### Service + Location Page Links

- Link **up** to the parent service page.
- Link **up** to the parent location page.
- Link **sideways** to 1–2 nearby Service + Location pages (same service, neighboring city).
- Link to the FAQ hub.
- Link to the primary CTA.

### Blog Article Links

- Link to **one pillar page** (service or location) the article supports.
- Link to **2–3 related articles** in the same topic cluster.
- Link to the **primary CTA page** (quote / contact) at least once.
- Avoid linking to unrelated articles just for the sake of links.

### FAQ Links

- Each FAQ answer that references a service, location, or process should link to the relevant page on first mention.
- The FAQ hub should link back to all Tier 1–3 pages it answers questions about.
- Individual page FAQs should link to the FAQ hub for "see all answers."

### CTA Links

- Primary CTA destination is the same across the site (typically `/quote` or `/contact`).
- Secondary CTA is tap-to-call (`tel:` link) where applicable.
- Every page must include the primary CTA at least once in the body and once in a footer band.
- Sticky / floating CTAs count toward the link total but do **not** replace inline body CTAs.

---

## 4. Anchor Text Rules

- Use **descriptive, keyword-relevant anchors** — describe the destination, not the action.
  - Good: `deep cleaning in Charlotte`
  - Bad: `click here`, `learn more`, `this page`
- Match anchor text to the **target page's primary keyword or H1** when natural.
- Vary anchor text across the site — avoid linking to the same page with the exact same anchor every time.
- Keep anchors **2–6 words**. Full sentences as anchors hurt readability.
- Never stuff keywords into anchors. If it doesn't read naturally, rewrite the sentence.
- Brand name anchors (e.g., the client's business name) are fine for trust links but should not be the primary anchor for SEO-bearing pages.

---

## 5. Avoiding Broken Links

- Use **relative paths** for internal links (`/services/deep-cleaning`, not the full domain).
- Use route constants from `lib/constants/site.ts` (or the project's equivalent) instead of hardcoded strings whenever the file uses constants elsewhere.
- Never link to a page that does not exist yet. If the page is planned but not built, leave the reference as plain text and add a TODO comment.
- When renaming or moving a page, search the repo for old paths and update every reference before merging.
- Avoid linking to anchors (`#section-id`) unless the anchor is stable and present in the target page.
- External links should open in a new tab (`target="_blank" rel="noopener"`) — internal links should **not**.
- Trailing slashes must match the site's routing convention. Pick one and stay consistent.

---

## 6. Pre-Build Checklist

Before building or generating a new page, confirm:

- [ ] The page's parent and sibling pages are identified.
- [ ] At least 2 inbound link sources are planned (which existing pages will link to this one).
- [ ] Outbound link targets are listed: related services, locations, FAQ, CTA.
- [ ] Anchor text for each planned link is drafted and keyword-aligned.
- [ ] Primary CTA destination is confirmed.
- [ ] No planned link points to a page that won't exist at launch.

---

## 7. Post-Build QA Checklist

After the page is built, before merging or publishing:

- [ ] Page has at least 3 contextual body links.
- [ ] Page links back to the homepage (logo counts).
- [ ] Page links to the primary CTA at least once in the body.
- [ ] All anchor text is descriptive (no "click here" / "learn more").
- [ ] All internal links use relative paths.
- [ ] Every internal link resolves to an existing page (no 404s).
- [ ] Inbound links from the planned source pages have been added.
- [ ] FAQ hub or relevant FAQ link is present (for Tier 1–4 pages).
- [ ] No duplicate links to the same destination within a single section.
- [ ] External links use `target="_blank" rel="noopener"`; internal links do not.

---

## 8. When in Doubt

- Prefer **fewer, more relevant** links over many weak ones.
- Ask: *Would a real visitor on this page want to click this next?* If yes, link it. If no, drop it.
- Topical relevance beats raw link count for both users and answer engines.
