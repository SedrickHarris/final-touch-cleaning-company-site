# Final Touch Cleaning Company — Website

Marketing site for **Final Touch Cleaning Company** — Scott & Nicole Maland, serving Clark County, Nevada.

> Where small details bring BIG RESULTS.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript (strict)
- Tailwind CSS v4 (CSS-based `@theme` config in `app/globals.css`)
- ESLint 9 · Turbopack

## Source-of-truth docs

- `docs/brand-guide.md` — brand identity, color tokens, type system, voice
- `docs/site-build-plan.md` — 280+ page architecture, URL strategy, build batches
- `docs/site-os/final-touch-build-context.md` — workflow mode, brand/contact constants, do-not-invent list
- `docs/site-os/batch-1-foundation-scope.md` — Batch 1 deliverables
- `docs/site-os/implementation-log.md` — running build log
- `docs/site-os/fast-build-batch-workflow.md` — default workflow
- `docs/site-os/file-scope-and-git-safety-policy.md` — Git discipline
- `docs/site-os/no-fake-data-policy.md` — fabrication-prevention rules

## Workflow

Fast Build Batch by default for page/component/copy/styling work. Multi-gate is reserved for package/config, schema validity, real business data, live form integrations, and deploy planning.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run type-check
npm run build
npm start
```

## Repo layout (Batch 1)

```
app/
  layout.tsx       Root layout — Fraunces + Manrope, Header, Footer, metadata
  page.tsx         Homepage (Batch 1 placeholder)
  not-found.tsx    Custom 404
  globals.css      Tailwind v4 @import + @theme brand tokens
components/
  layout/          Header, Footer
  shared/          HeroSection, CTASection, TrustBar, FAQSection,
                   SectionHeader, QuoteFormPlaceholder
lib/
  constants/       site, routes, seo
public/            Static assets
docs/              Brand guide, build plan, Site OS workflow references
```

## Contact

- Phone: (702) 444-5077
- Email: info@finaltouchcleaningteam.com
- Service area: Clark County, NV — Las Vegas, Henderson, North Las Vegas, Boulder City
