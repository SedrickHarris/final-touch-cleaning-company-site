import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import HeroSection from '@/components/shared/HeroSection';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceCard from '@/components/shared/ServiceCard';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES, SERVICES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'Cleaning Services in Henderson, NV | Final Touch',
  description:
    'Detail-focused cleaning services in Henderson, NV. Move-in, deep cleaning, commercial, and more for homes and businesses. Call (702) 444-5077.',
  alternates: { canonical: '/locations/henderson' },
  openGraph: {
    title: 'Cleaning Services in Henderson, NV | Final Touch Cleaning Company',
    description:
      'Scott & Nicole Maland serve Henderson and Clark County, NV. Move-in, deep cleaning, commercial, post-construction, and more. Free quotes.',
    type: 'website',
    url: `${SITE.url}/locations/henderson`,
  },
};

// Henderson location page. All 7 services offered city-wide.
// Service card order reflects Henderson demand profile:
// move-in first (high new-construction buyer volume, Cadence and active
// developments), deep cleaning second (established homeowner base with
// HOA-standard expectations), move-out third (Green Valley / Anthem
// rental turnover), then commercial, post-construction, janitorial, retail.
const HENDERSON_SERVICES = [
  SERVICES.find((s) => s.slug === 'move-in-cleaning')!,
  SERVICES.find((s) => s.slug === 'deep-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-out-cleaning')!,
  SERVICES.find((s) => s.slug === 'commercial-office-cleaning')!,
  SERVICES.find((s) => s.slug === 'post-construction-cleanup')!,
  SERVICES.find((s) => s.slug === 'janitorial-services')!,
  SERVICES.find((s) => s.slug === 'retail-space-cleaning')!,
];

const faq = [
  {
    q: 'Does Final Touch Cleaning Company serve Henderson, NV?',
    a: `Yes. Final Touch serves Henderson as part of its ${SITE.serviceArea.county} service area. ${SITE.owners} own and run the company, and their team serves homes and businesses throughout Henderson's neighborhoods and business corridors.`,
  },
  {
    q: 'What areas of Henderson does Final Touch cover?',
    a: "Final Touch covers Henderson citywide, including master-planned communities in the east and southeast, the Green Valley area, Anthem, and the hillside neighborhoods in the foothills. As a service-area business, the team comes to the customer's location across the city.",
  },
  {
    q: 'What cleaning services does Final Touch offer in Henderson?',
    a: 'Final Touch offers seven services in Henderson: commercial and office cleaning, janitorial services, post-construction cleanup, move-in cleaning, move-out cleaning, deep cleaning, and retail space cleaning. Both residential and commercial properties are served.',
  },
  {
    q: "Can Final Touch clean homes in Henderson's master-planned communities?",
    a: "Yes. Final Touch cleans homes throughout Henderson's master-planned communities, including established neighborhoods and newer developments. Whether the trigger is a periodic deep clean, a new-home move-in, or a rental turnover, the team brings the same standard regardless of the specific community.",
  },
  {
    q: 'Does Final Touch provide move-in cleaning for new Henderson homes?',
    a: 'Yes. Move-in cleaning is one of the most requested services in Henderson, particularly for new-construction home buyers closing on builds in active developments. The service covers a top-to-bottom clean before the new occupants settle in.',
  },
  {
    q: 'How do I schedule cleaning in Henderson?',
    a: `Call ${SITE.phone.display} or send a quote request through the website. Final Touch walks through the job before quoting so the estimate reflects the actual scope of work.`,
  },
  {
    q: 'Is Final Touch a local Henderson cleaning company?',
    a: `Final Touch is a locally owned, family-run cleaning company based in Southern Nevada, serving Henderson and all of ${SITE.serviceArea.county}. ${SITE.owners} own and operate it. It is not a franchise.`,
  },
];

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  url: SITE.url,
  telephone: '+17024445077',
  email: SITE.email.display,
  founder: [
    { '@type': 'Person', name: 'Scott Maland' },
    { '@type': 'Person', name: 'Nicole Maland' },
  ],
  areaServed: [
    { '@type': 'City', name: 'Henderson', sameAs: 'https://www.wikidata.org/wiki/Q491447' },
    { '@type': 'AdministrativeArea', name: 'Clark County, Nevada' },
  ],
  serviceType: [
    'Residential Cleaning',
    'Commercial Cleaning',
    'Post-Construction Cleanup',
    'Move-In Cleaning',
    'Move-Out Cleaning',
    'Deep Cleaning',
    'Retail Space Cleaning',
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
    { '@type': 'ListItem', position: 2, name: 'Locations', item: `${SITE.url}/locations` },
    { '@type': 'ListItem', position: 3, name: 'Henderson', item: `${SITE.url}/locations/henderson` },
  ],
};

export default function HendersonPage() {
  return (
    <>
      <HeroSection
        eyebrow={`Serving ${SITE.serviceArea.county}, NV`}
        heading="Cleaning Services in Henderson, NV"
        sub={`Final Touch provides residential and commercial cleaning across Henderson's master-planned communities, established neighborhoods, and business corridors. ${SITE.owners} own and run the company locally, serving Henderson properties with a detail-focused standard every time.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* Quick local answer */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Final Touch Cleaning Company serves Henderson, NV with seven cleaning services:
            commercial and office cleaning, janitorial programs, post-construction cleanup, move-in
            cleaning, move-out cleaning, deep cleaning, and retail space cleaning. The company is
            family-owned and operated by Scott and Nicole Maland, based in Southern Nevada and
            serving Henderson properties across every neighborhood and corridor in the city as part
            of its{' '}
            <Link href={ROUTES.locations} className="text-brand-blue font-semibold hover:underline">
              Clark County service area
            </Link>
            . To request a quote, call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>
            .
          </p>
        </div>
      </section>

      {/* Local cleaning needs */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Henderson cleaning needs"
            heading="What drives cleaning demand in Henderson."
            sub="Henderson's mix of master-planned communities, active new construction, and an established homeowner base creates specific cleaning needs across the city."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Master-planned communities
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Henderson is home to some of the Las Vegas Valley&apos;s most established master-planned
                communities. These neighborhoods set high standards for property presentation, and
                homeowners in them tend to prioritize maintenance that matches the surrounding
                environment. Periodic deep cleans and move-in services are consistently in demand
                across these areas.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                New-construction home buyers
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Active residential development in parts of Henderson means a steady stream of new
                home buyers who need a top-to-bottom{' '}
                <Link
                  href="/services/move-in-cleaning"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  move-in clean
                </Link>{' '}
                before settling in. Even new builds accumulate construction dust and residue that
                a standard builder clean does not fully address.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Rental turnover in Green Valley and Anthem
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Green Valley and Anthem include a mix of owner-occupied and rental properties.
                Landlords and property managers in these communities rely on professional{' '}
                <Link
                  href="/services/move-out-cleaning"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  move-out cleaning
                </Link>{' '}
                to turn units between tenants quickly and at a deposit-return standard.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Hillside and luxury residential
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Neighborhoods like MacDonald Highlands and Seven Hills sit in Henderson&apos;s eastern
                foothills with larger homes and elevated finish levels. These properties benefit
                from a detail-focused{' '}
                <Link
                  href="/services/deep-cleaning"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  deep cleaning
                </Link>{' '}
                approach that matches the standard of the space and reaches the areas routine
                maintenance skips.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Business corridors and commercial offices
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Henderson&apos;s commercial sector runs along Green Valley Parkway and the Sunset Road
                corridor, with a mix of professional services, medical offices, and retail. These
                businesses need routine{' '}
                <Link
                  href="/services/commercial-office-cleaning"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  commercial and office cleaning
                </Link>{' '}
                programs that keep workspaces consistently maintained.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Desert climate and dust accumulation
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Henderson shares the Mojave Desert climate of the broader Las Vegas Valley. Fine
                dust accumulates on surfaces, inside HVAC systems, and along window and door frames
                faster than in wetter regions. Regular maintenance and periodic deep cleans are a
                practical response to the local environment, not just an aesthetic preference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular services */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Services in Henderson"
            heading="Cleaning services for Henderson homes and businesses."
            sub="All seven services available across the city. Cards ordered by local demand."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {HENDERSON_SERVICES.map((s) => (
              <ServiceCard
                key={s.slug}
                href={s.href}
                name={s.name}
                description={s.shortDescription}
              />
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Not sure which service fits your job?{' '}
            <Link href={ROUTES.services} className="font-semibold text-brand-blue hover:underline">
              See all cleaning services
            </Link>{' '}
            or call {SITE.phone.display} for a quick walkthrough.
          </p>
        </div>
      </section>

      {/* Why Final Touch */}
      <section className="bg-soft-blue">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why Final Touch"
            heading="A local team built for Henderson's standard."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Family-owned and owner-led
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Scott and Nicole Maland own and run Final Touch. It is not a franchise or a staffing
                platform. When you call, you reach the owners or the team directly. That
                accountability carries through to every job in Henderson.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Detail-focused approach
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Henderson homeowners and property managers expect a high standard. Final Touch
                focuses on the edges, corners, fixtures, and surfaces that get skipped during
                routine maintenance. The goal is a finished result that matches the standard of
                the space.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Free quote, real estimate
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Final Touch walks through the job before quoting. A phone call or brief on-site
                visit produces a real estimate based on the actual scope of work, not a templated
                rate. No pressure, no charge for the walkthrough.
              </p>
            </div>
          </div>
          <p className="mt-8 text-sm flex flex-wrap gap-x-5 gap-y-2">
            <Link href={ROUTES.about} className="font-semibold text-brand-blue hover:underline">
              Learn about the team →
            </Link>
            <Link href={ROUTES.freeQuote} className="font-semibold text-brand-blue hover:underline">
              Request a free quote →
            </Link>
          </p>
        </div>
      </section>

      {/* Nearby neighborhoods */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <SectionHeader
            eyebrow="Henderson neighborhoods"
            heading="Neighborhoods we serve in Henderson."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            {/* TODO-BATCH-5: Replace href with /locations/henderson/green-valley-ranch once Batch 5 ships */}
            <Link
              href={ROUTES.locations}
              className="inline-flex items-center rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Green Valley Ranch
            </Link>
            {/* TODO-BATCH-5: Replace href with /locations/henderson/anthem once Batch 5 ships */}
            <Link
              href={ROUTES.locations}
              className="inline-flex items-center rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Anthem
            </Link>
            {/* TODO-BATCH-5: Replace href with /locations/henderson/cadence once Batch 5 ships */}
            <Link
              href={ROUTES.locations}
              className="inline-flex items-center rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Cadence
            </Link>
            {/* TODO-BATCH-5: Replace href with /locations/henderson/seven-hills once Batch 5 ships */}
            <Link
              href={ROUTES.locations}
              className="inline-flex items-center rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Seven Hills
            </Link>
            {/* TODO-BATCH-5: Replace href with /locations/henderson/mcdonald-highlands once Batch 5 ships */}
            <Link
              href={ROUTES.locations}
              className="inline-flex items-center rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              MacDonald Highlands
            </Link>
          </div>
          <p className="mt-5 text-sm text-muted">
            More Henderson neighborhood pages are coming in the next build batch. In the meantime,{' '}
            <a
              href={SITE.phone.href}
              className="font-semibold text-brand-blue hover:underline tabular-nums"
            >
              call {SITE.phone.display}
            </a>{' '}
            to confirm coverage for your specific area.
          </p>
        </div>
      </section>

      {/* Related cities */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-4">
            Also serving nearby
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/locations/las-vegas"
              className="inline-flex items-center rounded-full border border-border-subtle bg-brand-white px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Las Vegas
            </Link>
            <Link
              href="/locations/north-las-vegas"
              className="inline-flex items-center rounded-full border border-border-subtle bg-brand-white px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              North Las Vegas
            </Link>
            <Link
              href="/locations/boulder-city"
              className="inline-flex items-center rounded-full border border-border-subtle bg-brand-white px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Boulder City
            </Link>
            <Link
              href="/locations/clark-county"
              className="inline-flex items-center rounded-full border border-border-subtle bg-brand-white px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Clark County
            </Link>
          </div>
        </div>
      </section>

      <FAQSection
        heading="Cleaning services in Henderson: frequently asked questions"
        items={faq}
        defaultOpenFirst
      />

      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-sm text-muted">
            More questions?{' '}
            <Link href={ROUTES.faq} className="font-semibold text-brand-blue hover:underline">
              Read all frequently asked questions →
            </Link>
          </p>
        </div>
      </div>

      <CTASection
        heading="Ready to bring the details to Henderson?"
        sub={`Free quotes for cleaning across Henderson and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.estimate, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
