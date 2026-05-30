import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import SectionHeader from '@/components/shared/SectionHeader';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES } from '@/lib/constants/routes';
import { BUILDERS } from '@/lib/constants/builders';

export const metadata: Metadata = {
  title: 'KB Home Post-Construction Cleaning Las Vegas | Final Touch',
  description:
    'Post-construction cleanup after your KB Home handoff in Las Vegas, NV. Custom finish and tile residue addressed. Clark County local. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/builders/kb-home-post-construction-cleaning`,
  },
  openGraph: {
    title: 'KB Home Post-Construction Cleaning Las Vegas | Final Touch',
    description:
      'Post-construction cleanup after your KB Home handoff in Las Vegas, NV. Custom finish and tile residue addressed. Clark County local. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/builders/kb-home-post-construction-cleaning`,
  },
};

const faq = [
  {
    q: 'What does post-construction cleaning include after a KB Home in Las Vegas?',
    a: `After a KB Home handoff, post-construction cleanup addresses the residue that builder cleaning does not remove: drywall dust on every surface including vents, HVAC returns, and cabinet interiors; adhesive, caulk, and grout residue around fixtures and tile; window film on all glass; construction debris from trim and baseboard work; and fine particulate that settles in corners and on sills. Scope is confirmed during a walkthrough before the clean begins.`,
  },
  {
    q: "Does KB Home's Built to Order customization affect the post-construction cleaning scope?",
    a: `Yes, in practice. KB Home's Built to Order program allows buyers to select custom tile packages, upgraded flooring, and custom cabinetry through the KB Home Studio. More custom tile and surface work means more adhesive, grout, and caulk residue throughout the home compared to a standard spec build. The walkthrough confirms the actual scope so the estimate reflects the upgrades the buyer selected, not a standard assumption.`,
  },
  {
    q: 'How long after a KB Home handoff should I schedule post-construction cleaning?',
    a: `Schedule as close to the handoff date as possible, before furnishings or personal items are moved in. An empty home is significantly easier to clean thoroughly, especially around custom tile and upgraded surfaces. If your move-in date is firm, call ${SITE.phone.display} in advance so Final Touch can align the clean with your schedule. Most post-construction cleans on a new KB Home are completed in a single visit.`,
  },
  {
    q: 'Does custom tile and fixture work leave more construction residue in a KB Home?',
    a: `Yes. Custom tile installations produce more grout haze, adhesive residue, and caulk work around edges and fixtures than standard production-grade surfaces. KB Home buyers who selected upgraded tile packages, custom backsplashes, or specialty flooring through the KB Home Studio can expect more residue in those areas. The walkthrough identifies all upgraded surfaces so nothing is missed in the post-construction clean.`,
  },
  {
    q: 'What Las Vegas Valley areas does Final Touch serve for KB Home post-construction cleaning?',
    a: `Final Touch serves post-construction cleanup across ${SITE.serviceArea.county}, Nevada, including Las Vegas, Henderson, and North Las Vegas. KB Home builds throughout the Las Vegas Valley. Call ${SITE.phone.display} to confirm coverage for your specific community and address.`,
  },
];

const scopeItems = [
  {
    title: 'Construction dust and fine grit',
    body: 'All surfaces: floors, countertops, windowsills, shelving, door frames, and cabinet interiors. Multiple passes where the build left heavy residue.',
  },
  {
    title: 'HVAC vents and registers',
    body: 'Drywall dust settles into every register during a build. We address vents and registers throughout the home so the dust does not re-circulate after move-in.',
  },
  {
    title: 'Adhesive, caulk, and grout residue',
    body: 'Around tile edges, fixture bases, trim, and baseboards. KB Home buyers who upgraded tile or custom surfaces often have more adhesive and grout work throughout the home. Targeted removal, not standard wiping.',
  },
  {
    title: 'Window film and glass cleaning',
    body: 'Protective film applied during construction is removed and all glass surfaces are cleaned throughout the home.',
  },
  {
    title: 'Paint overspray',
    body: 'Light paint overspray on fixtures, hardware, and surfaces adjacent to painted areas is addressed during the detail pass.',
  },
  {
    title: 'Floor surfaces',
    body: 'Hard floors cleaned and scrubbed. Carpet areas vacuumed and spot-checked. Transitions and edges addressed where grit collects.',
  },
];

const audienceItems = [
  {
    title: 'New KB Home buyers',
    body: 'Taking possession of a new KB Home and scheduling a professional clean between the final walkthrough and move-in day. Buyers who selected custom tile, upgraded flooring, or custom cabinetry through the KB Home Studio benefit from a post-construction clean that addresses residue from upgraded finishes throughout the home.',
  },
  {
    title: 'Builder project teams',
    body: 'Superintendents and project coordinators finishing a punch list who need a reliable cleaning vendor before the client walkthrough or occupancy sign-off.',
  },
  {
    title: 'Real estate professionals',
    body: 'Agents and buyer representatives guiding clients through new KB Home purchases who recommend a professional post-construction clean as part of the closing process.',
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'KB Home Post-Construction Cleanup',
  serviceType: 'Post-Construction Cleaning',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone.href.replace('tel:', ''),
    email: SITE.email.display,
  },
  areaServed: [
    {
      '@type': 'AdministrativeArea',
      name: `${SITE.serviceArea.county}, ${SITE.serviceArea.stateAbbr}`,
    },
    ...SITE.serviceArea.cities.map((name) => ({
      '@type': 'City',
      name: `${name}, ${SITE.serviceArea.stateAbbr}`,
    })),
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Builders',
      item: `${SITE.url}/builders`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'KB Home Post-Construction Cleaning',
      item: `${SITE.url}/builders/kb-home-post-construction-cleaning`,
    },
  ],
};

export default function KBHomePostConstructionPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* 1. Hero */}
      <HeroSection
        eyebrow="KB Home · Post-Construction Cleaning"
        image={{
          src: '/images/builders/kb-home-post-construction-cleaning-hero-image.webp',
          alt: 'KB Home post-construction cleanup - Final Touch Cleaning Company, Clark County NV',
        }}
        heading="KB Home Post-Construction Cleanup | Las Vegas, NV"
        sub={`Final Touch provides post-construction cleanup for KB Home buyers and project teams across Clark County, Nevada. KB Home's Built to Order program means custom tile, upgraded flooring, and custom cabinetry throughout your home, all of which leave adhesive, grout, and caulk residue that builder cleaning is not scoped to remove. Call (702) 444-5077 or request a free quote to schedule around your handoff date.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct answer */}
      <section className="bg-brand-white border-b border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="text-base sm:text-lg text-brand-black leading-relaxed">
            Final Touch provides{' '}
            <Link
              href="/services/post-construction-cleanup"
              className="font-semibold text-brand-blue hover:underline"
            >
              post-construction cleanup
            </Link>{' '}
            for KB Home buyers and project teams across Las Vegas, Henderson, and
            North Las Vegas. KB Home is known for its Built to Order personalization
            program, which allows buyers to select custom finishes, tile packages, and
            fixtures through the KB Home Studio. After a builder handoff, every surface
            holds construction residue that standard cleaning cannot address, including
            grout haze and adhesive residue from custom tile work. We scope the clean
            against the actual site before quoting.
          </p>
        </div>
      </section>

      {/* 3. What builder handoffs typically include */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeader
            eyebrow="Builder handoffs"
            heading="What a new-home handoff typically includes and where residue remains."
            sub="General overview based on how new residential construction works. No builder-specific claims."
          />
          <div className="mt-10 space-y-6 text-base text-brand-black leading-relaxed">
            <p>
              Most builders complete a cosmetic clean before the final walkthrough: surface
              wipe-downs, a vacuum pass on floors, and glass cleaned in common areas. This prepares
              the home for the walk without addressing construction residue at the detail level.
              KB Home follows the same handoff practice, and the residue left behind is consistent
              with any new residential build.
            </p>
            <p>
              What remains after a builder clean is predictable. Drywall dust is ultrafine and
              airborne during construction; it settles into HVAC registers, inside cabinet interiors,
              on top of door frames, and on every horizontal surface. KB Home buyers who select
              custom tile packages through the KB Home Studio often have more grout and tile adhesive
              work throughout the home, which means more adhesive and grout residue around upgraded
              surfaces. Window film is applied during construction to protect glass and must be
              removed before occupancy. Fine grit from cutting and sanding settles on floors and
              baseboards throughout the home.
            </p>
            <p>
              A professional post-construction clean addresses this layer of residue that a cosmetic
              builder clean is not scoped to cover. The scope is confirmed on-site before the clean
              begins so nothing is assumed.
            </p>
          </div>
        </div>
      </section>

      {/* 4. What post-construction cleanup adds */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeader
            eyebrow="Scope"
            heading="What post-construction cleanup covers."
            sub="Scope drawn from our post-construction service. Confirmed on-site before the clean begins. Custom tile and upgraded surfaces are identified and addressed during the walkthrough."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {scopeItems.map((item) => (
              <li
                key={item.title}
                className="rounded-[14px] border border-border-subtle bg-light-gray p-6"
              >
                <h3 className="font-display text-lg font-semibold text-brand-black">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Who hires this service */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeader
            eyebrow="Who we serve"
            heading="Who schedules post-construction cleaning after a KB Home build."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-3">
            {audienceItems.map((item) => (
              <li
                key={item.title}
                className="rounded-[14px] border border-border-subtle bg-brand-white p-6"
              >
                <h3 className="font-display text-lg font-semibold text-brand-black">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Service area and back-links */}
      <section className="bg-brand-white border-y border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <SectionHeader
            eyebrow="Service area"
            heading="Post-construction cleanup across Clark County."
            sub="Final Touch serves KB Home communities throughout the Las Vegas Valley."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services/post-construction-cleanup"
              className="inline-flex items-center rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Post-Construction Cleanup
            </Link>
            <Link
              href="/locations/las-vegas"
              className="inline-flex items-center rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Las Vegas
            </Link>
            <Link
              href="/locations/henderson"
              className="inline-flex items-center rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Henderson
            </Link>
            <Link
              href="/locations/north-las-vegas"
              className="inline-flex items-center rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              North Las Vegas
            </Link>
            <Link
              href="/services/move-in-cleaning"
              className="inline-flex items-center rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Move-In Cleaning
            </Link>
            {BUILDERS.filter((b) => b.href !== '/builders/kb-home-post-construction-cleaning').map((b) => (
              <Link
                key={b.href}
                href={b.href}
                className="inline-flex items-center rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
              >
                {b.chipLabel}
              </Link>
            ))}
            <Link
              href={ROUTES.builders}
              className="inline-flex items-center rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              All Builders
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <FAQSection items={faq} />

      {/* 8. Final CTA */}
      <CTASection
        heading="Ready to schedule your KB Home post-construction clean?"
        sub={`Call ${SITE.phone.display} or request a free quote online. Final Touch walks through the job before quoting so the estimate reflects the actual scope. ${SITE.owners} and the team serve Clark County, Nevada.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
