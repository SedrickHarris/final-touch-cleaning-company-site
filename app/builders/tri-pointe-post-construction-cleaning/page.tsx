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
  title: 'Tri Pointe Post-Construction Cleaning Las Vegas',
  description:
    'Post-construction cleanup after your Tri Pointe home handoff in Las Vegas or Summerlin, NV. Detail-focused, Clark County local. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/builders/tri-pointe-post-construction-cleaning`,
  },
  openGraph: {
    title: 'Tri Pointe Post-Construction Cleaning Las Vegas | Final Touch',
    description:
      'Post-construction cleanup after your Tri Pointe home handoff in Las Vegas or Summerlin, NV. Detail-focused, Clark County local. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/builders/tri-pointe-post-construction-cleaning`,
  },
};

const faq = [
  {
    q: 'What does post-construction cleaning include after a Tri Pointe home in Las Vegas?',
    a: `After a Tri Pointe handoff, post-construction cleanup addresses the residue that builder cleaning does not remove: drywall dust on every surface including vents, HVAC returns, and cabinet interiors; adhesive and caulk residue around fixtures and tile; window film on all glass including large glass panels; construction debris from trim and baseboard work; and fine particulate that settles in corners and on sills. Scope is confirmed during a walkthrough before the clean begins.`,
  },
  {
    q: 'Do Tri Pointe homes in Summerlin need post-construction cleaning before move-in?',
    a: `Yes. Tri Pointe builds in Summerlin and other Las Vegas Valley communities, and every new build requires post-construction cleanup before move-in regardless of the community or price tier. Construction residue including drywall dust, adhesive, and window film is present in every new home after the handoff. Summerlin buyers often have specific move-in timelines tied to community scheduling, so calling early to align the clean with the handoff date is worthwhile.`,
  },
  {
    q: 'How long after a Tri Pointe handoff should I schedule post-construction cleaning?',
    a: `Schedule as close to the handoff date as possible, before furnishings or personal items are moved in. An empty home is significantly easier to clean thoroughly, especially on large glass surfaces and open-plan areas. If your move-in date is firm, call ${SITE.phone.display} in advance so Final Touch can align the clean with your schedule. Most post-construction cleans on a new Tri Pointe home are completed in a single visit.`,
  },
  {
    q: "Does Tri Pointe's use of large glass panels and open layouts affect the post-construction cleaning scope?",
    a: `Yes. Homes designed around large windows, glass panels, and open floor plans have a proportionally greater amount of window film to remove and more glass surface area to clean thoroughly. Every pane of glass in the home has protective film applied during construction that must be removed and the surface cleaned before occupancy. The walkthrough confirms the full glass scope so the estimate and schedule reflect the actual property.`,
  },
  {
    q: 'What Las Vegas Valley areas does Final Touch serve for Tri Pointe post-construction cleaning?',
    a: `Final Touch serves post-construction cleanup across ${SITE.serviceArea.county}, Nevada, including Las Vegas, Henderson, and North Las Vegas. Tri Pointe builds in Summerlin and other Las Vegas Valley communities. Call ${SITE.phone.display} to confirm coverage for your specific community and address.`,
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
    body: 'Around tile edges, fixture bases, trim, and baseboards. Construction adhesive and caulk residue requires targeted removal, not standard wiping.',
  },
  {
    title: 'Window film and glass cleaning',
    body: 'Protective film is removed from all glass surfaces throughout the home. Tri Pointe homes with large windows and glass panels require thorough glass cleaning before the home is move-in ready.',
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
    title: 'New Tri Pointe homebuyers',
    body: 'Taking possession of a new Tri Pointe home in Summerlin or another Las Vegas Valley community and scheduling a professional clean between the final walkthrough and move-in day. Premium homes carry premium move-in expectations, and a thorough post-construction clean ensures every surface meets that standard.',
  },
  {
    title: 'Builder project teams',
    body: 'Superintendents and project coordinators finishing a punch list who need a reliable cleaning vendor before the client walkthrough or occupancy sign-off.',
  },
  {
    title: 'Real estate professionals',
    body: 'Agents and buyer representatives guiding clients through new Tri Pointe purchases who recommend a professional post-construction clean as part of the closing process.',
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Tri Pointe Homes Post-Construction Cleanup',
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
      name: 'Tri Pointe Homes Post-Construction Cleaning',
      item: `${SITE.url}/builders/tri-pointe-post-construction-cleaning`,
    },
  ],
};

export default function TriPointePostConstructionPage() {
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
        eyebrow="Tri Pointe Homes · Post-Construction Cleaning"
        image={{
          src: '/images/builders/tri-pointe-post-construction-cleaning-hero-image.webp',
          alt: 'Tri Pointe Homes post-construction cleanup - Final Touch Cleaning Company, Clark County NV',
        }}
        heading="Tri Pointe Homes Post-Construction Cleanup | Las Vegas & Summerlin, NV"
        sub={`Final Touch provides post-construction cleanup for Tri Pointe homebuyers and project teams across Clark County, Nevada, including Summerlin communities. Tri Pointe homes often feature large glass panels and premium interior finishes that require thorough window film removal and detail cleaning before move-in. Call (702) 444-5077 or request a free quote to schedule around your handoff date.`}
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
            for Tri Pointe homebuyers and project teams across Las Vegas, Henderson,
            and North Las Vegas, including communities in{' '}
            <Link
              href="/locations/las-vegas/summerlin"
              className="font-semibold text-brand-blue hover:underline"
            >
              Summerlin
            </Link>
            . Tri Pointe homes often feature large glass panels, open floor plans, and
            premium interior finishes. After a builder handoff, every surface holds
            construction residue that standard cleaning cannot address, including
            extensive window film on large glass surfaces. We scope the clean against
            the actual site before quoting.
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
              Tri Pointe follows the same handoff practice, and the residue left behind is consistent
              with any new residential build.
            </p>
            <p>
              What remains after a builder clean is consistent regardless of the builder&apos;s quality
              tier. Drywall dust is ultrafine and airborne during construction; it settles into HVAC
              registers, inside cabinet interiors, on top of door frames, and on every horizontal
              surface. Adhesive and caulk residue collect around tile edges, fixtures, and trim.
              Tri Pointe homes with large glass panels and expansive windows have a proportionally
              greater amount of window film to remove and more glass surface area to clean before
              occupancy. Fine grit from cutting and sanding settles on floors and baseboards
              throughout the home.
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
            sub="Scope drawn from our post-construction service. Confirmed on-site before the clean begins. Large glass panels and expansive windows are assessed during the walkthrough."
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
            heading="Who schedules post-construction cleaning after a Tri Pointe build."
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
            sub="Final Touch serves Tri Pointe communities throughout the Las Vegas Valley, including Summerlin."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services/post-construction-cleanup"
              className="inline-flex items-center rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Post-Construction Cleanup
            </Link>
            <Link
              href="/locations/las-vegas/summerlin"
              className="inline-flex items-center rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Summerlin
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
            {BUILDERS.filter((b) => b.href !== '/builders/tri-pointe-post-construction-cleaning').map((b) => (
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
        heading="Ready to schedule your Tri Pointe post-construction clean?"
        sub={`Call ${SITE.phone.display} or request a free quote online. Final Touch walks through the job before quoting so the estimate reflects the actual scope. ${SITE.owners} and the team serve Clark County, Nevada.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
