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
  title: 'Taylor Morrison Post-Construction Cleaning Las Vegas',
  description:
    'Post-construction cleanup after your Taylor Morrison home handoff in Henderson or Las Vegas, NV. Including Esplanade communities. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/builders/taylor-morrison-post-construction-cleaning`,
  },
  openGraph: {
    title: 'Taylor Morrison Post-Construction Cleaning Las Vegas | Final Touch',
    description:
      'Post-construction cleanup after your Taylor Morrison home handoff in Henderson or Las Vegas, NV. Including Esplanade communities. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/builders/taylor-morrison-post-construction-cleaning`,
  },
};

const faq = [
  {
    q: 'What does post-construction cleaning include after a Taylor Morrison home in Henderson or Las Vegas?',
    a: `After a Taylor Morrison handoff, post-construction cleanup addresses the residue that builder cleaning does not remove: drywall dust on every surface including vents, HVAC returns, and cabinet interiors; adhesive and caulk residue around fixtures and tile; window film on all glass; construction debris from trim and baseboard work; and fine particulate that settles in corners and on sills. Scope is confirmed during a walkthrough before the clean begins.`,
  },
  {
    q: 'Do Taylor Morrison Esplanade active adult homes need post-construction cleaning before move-in?',
    a: `Yes. Taylor Morrison's Esplanade communities are built as active adult homes intended for long-term occupancy, which makes thorough post-construction cleanup before move-in especially worthwhile. The construction residue in an Esplanade home is the same as any new build: drywall dust, adhesive, window film, and fine grit. Buyers planning to settle in for the long term benefit from a clean that addresses every surface before furniture and belongings arrive.`,
  },
  {
    q: 'How long after a Taylor Morrison handoff should I schedule post-construction cleaning?',
    a: `Schedule as close to the handoff date as possible, before furnishings or personal items are moved in. An empty home is significantly easier to clean thoroughly. If your move-in date is firm, call ${SITE.phone.display} in advance so Final Touch can align the clean with your schedule. Most post-construction cleans on a new Taylor Morrison home are completed in a single visit.`,
  },
  {
    q: "Does Taylor Morrison's Life Design Studio customization affect the post-construction cleaning scope?",
    a: `Yes, in practice. Buyers who personalize their home through the Taylor Morrison Life Design Studio may select upgraded tile packages, custom cabinetry, and premium flooring. More custom surface work means more adhesive, grout, and caulk residue in those areas compared to a standard spec build. The walkthrough confirms the actual scope based on the specific home and the finishes selected, not a standard assumption.`,
  },
  {
    q: 'What Henderson communities like Inspirada does Final Touch serve for Taylor Morrison post-construction cleaning?',
    a: `Final Touch serves post-construction cleanup across ${SITE.serviceArea.county}, Nevada, including Henderson, Las Vegas, and North Las Vegas. Taylor Morrison builds in Henderson communities including Inspirada and other Las Vegas Valley locations. Call ${SITE.phone.display} to confirm coverage for your specific community and address.`,
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
    title: 'Adhesive and caulk residue',
    body: "Around tile edges, fixture bases, trim, and baseboards. Buyers who upgraded surfaces through the Life Design Studio may have additional adhesive and grout residue around custom tile and cabinetry areas.",
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
    title: 'New Taylor Morrison homebuyers',
    body: 'Taking possession of a new Taylor Morrison home and scheduling a professional clean between the final walkthrough and move-in day. This includes buyers in standard communities and Esplanade active adult communities who want a thorough clean before settling in for the long term.',
  },
  {
    title: 'Builder project teams',
    body: 'Superintendents and project coordinators finishing a punch list who need a reliable cleaning vendor before the client walkthrough or occupancy sign-off.',
  },
  {
    title: 'Real estate professionals',
    body: 'Agents and buyer representatives guiding clients through new Taylor Morrison purchases who recommend a professional post-construction clean as part of the closing process.',
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Taylor Morrison Post-Construction Cleanup',
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
      name: 'Taylor Morrison Post-Construction Cleaning',
      item: `${SITE.url}/builders/taylor-morrison-post-construction-cleaning`,
    },
  ],
};

export default function TaylorMorrisonPostConstructionPage() {
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
        eyebrow="Taylor Morrison · Post-Construction Cleaning"
        image={{
          src: '/images/builders/taylor-morrison-post-construction-cleaning-hero-image.webp',
          alt: 'Taylor Morrison post-construction cleanup - Final Touch Cleaning Company, Clark County NV',
        }}
        heading="Taylor Morrison Post-Construction Cleanup | Henderson & Las Vegas, NV"
        sub={`Final Touch provides post-construction cleanup for Taylor Morrison homebuyers and project teams across the Las Vegas Valley, including Esplanade active adult communities and Henderson communities like Inspirada. From drywall dust on every surface to adhesive residue around custom finishes, we handle the detail work your builder's cleaning crew is not scoped to do. Call (702) 444-5077 or request a free quote to schedule around your handoff date.`}
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
            for Taylor Morrison homebuyers and project teams across Henderson, Las
            Vegas, and North Las Vegas. Taylor Morrison builds throughout the Las Vegas
            Valley, with communities in Henderson including{' '}
            <Link
              href="/locations/henderson/inspirada"
              className="font-semibold text-brand-blue hover:underline"
            >
              Inspirada
            </Link>
            , and active adult Esplanade communities. After a builder handoff, every
            surface holds construction residue that standard cleaning cannot address.
            We scope the clean against the actual site before quoting so the estimate
            reflects the specific home and finish level.
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
              Taylor Morrison follows the same handoff practice across its communities, and the
              residue left behind is consistent with any new residential build regardless of the
              community type or price tier.
            </p>
            <p>
              What remains after a builder clean is predictable. Drywall dust is ultrafine and
              airborne during construction; it settles into HVAC registers, inside cabinet interiors,
              on top of door frames, and on every horizontal surface. Adhesive and caulk residue
              collect around tile edges, fixtures, and trim. Taylor Morrison buyers who personalize
              their home through the Life Design Studio may select upgraded tile, cabinetry, and
              flooring packages that leave additional adhesive and grout residue around custom
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
            sub="Scope drawn from our post-construction service. Confirmed on-site before the clean begins. Life Design Studio upgrades are identified during the walkthrough."
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
            heading="Who schedules post-construction cleaning after a Taylor Morrison build."
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
            heading="Post-construction cleanup across the Las Vegas Valley."
            sub="Final Touch serves Taylor Morrison and Esplanade communities throughout the Las Vegas Valley, including Henderson and Inspirada."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services/post-construction-cleanup"
              className="inline-flex items-center rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Post-Construction Cleanup
            </Link>
            <Link
              href="/locations/henderson"
              className="inline-flex items-center rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Henderson
            </Link>
            <Link
              href="/locations/henderson/inspirada"
              className="inline-flex items-center rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Inspirada
            </Link>
            <Link
              href="/locations/las-vegas"
              className="inline-flex items-center rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Las Vegas
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
            {BUILDERS.filter((b) => b.href !== '/builders/taylor-morrison-post-construction-cleaning').map((b) => (
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
        heading="Ready to schedule your Taylor Morrison post-construction clean?"
        sub={`Call ${SITE.phone.display} or request a free quote online. Final Touch walks through the job before quoting so the estimate reflects the actual scope. ${SITE.owners} and the team serve the Las Vegas Valley.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
