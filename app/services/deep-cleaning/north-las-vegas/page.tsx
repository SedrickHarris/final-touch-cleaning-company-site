import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceCard from '@/components/shared/ServiceCard';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES, SERVICES } from '@/lib/constants/routes';
import Breadcrumb from '@/components/shared/Breadcrumb';

export const metadata: Metadata = {
  title: 'Commercial Deep Cleaning in North Las Vegas, NV',
  description:
    'Commercial deep cleaning for rental properties in North Las Vegas, NV. Serving property managers, commercial operators, and landlords. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/deep-cleaning/north-las-vegas`,
  },
  openGraph: {
    title: 'Commercial Deep Cleaning in North Las Vegas, NV | Final Touch',
    description:
      'Commercial deep cleaning for rental properties in North Las Vegas, NV. Serving property managers, commercial operators, and landlords. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/deep-cleaning/north-las-vegas`,
  },
};

const faq = [
  {
    q: 'What does deep cleaning include in North Las Vegas?',
    a: 'A deep clean covers inside appliances (oven, refrigerator, microwave, dishwasher), baseboards, window sills, grout lines and tile, vents and air returns, inside cabinets and shelving, behind and under accessible furniture, light fixtures and ceiling fans, bathroom fixtures and mirrors, all floor surfaces, and high-touch surface sanitizing throughout. Specific scope is confirmed before the clean begins.',
  },
  {
    q: 'How often should North Las Vegas properties and commercial spaces be deep cleaned?',
    a: "North Las Vegas sits in the Mojave Desert and shares the valley's fast-accumulating dust conditions. Properties near active construction sites (a common situation in North Las Vegas's growth areas) accumulate construction particulate in addition to ordinary desert dust. Property managers, rental owners, and commercial operators in North Las Vegas typically schedule deep cleans seasonally or two to four times per year. Properties adjacent to active build zones may require more frequent cleans, particularly for vents, HVAC returns, and surfaces near exterior openings.",
  },
  {
    q: 'Who typically hires deep cleaning in North Las Vegas?',
    a: "The most common deep cleaning clients in North Las Vegas are rental property owners resetting between long-term tenants, renters doing mid-tenancy resets to address desert dust accumulation, and commercial tenants and property managers across newer growth areas and established neighborhoods managing everyday buildup. This is a broader, more rental-market-driven demand profile than Las Vegas's vacation-rental demand or Henderson's luxury-property demand.",
  },
  {
    q: 'Does Final Touch serve all of North Las Vegas for deep cleaning?',
    a: `Yes. Final Touch serves North Las Vegas citywide (established neighborhoods, newer residential growth areas, and properties along the city's major corridors) as part of its ${SITE.serviceArea.county} service area. Call ${SITE.phone.display} to confirm coverage for your address.`,
  },
  {
    q: 'How much does deep cleaning cost in North Las Vegas?',
    a: `Cost depends on the size and condition of the space. Contact Final Touch at ${SITE.phone.display} or request a free quote for a real estimate based on your property or commercial space.`,
  },
  {
    q: 'Does construction dust near North Las Vegas new builds require special deep cleaning?',
    a: 'Yes. Active residential construction in North Las Vegas means completed properties near build sites can accumulate fine construction particulate in HVAC systems, vents, window sills, and on surfaces, even without direct construction work on the property. A deep clean that specifically addresses vents, air returns, and dust-accumulation surfaces is practical for North Las Vegas property owners and tenants in or near active residential growth areas.',
  },
];

const relatedServices = [
  'post-construction-cleanup',
  'move-out-cleaning',
  'move-in-cleaning',
  'commercial-office-cleaning',
  'retail-space-cleaning',
  'janitorial-services',
] as const;

const relatedServiceCards = relatedServices
  .map((slug) => SERVICES.find((s) => s.slug === slug))
  .filter(Boolean) as typeof SERVICES[number][];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Commercial Deep Cleaning',
  serviceType: 'Commercial Deep Cleaning',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone.href.replace('tel:', ''),
    email: SITE.email.display,
  },
  areaServed: { '@type': 'City', name: `North Las Vegas, ${SITE.serviceArea.stateAbbr}` },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  image: 'https://www.finaltouchcleaningteam.com/images/logo/final-touch-cleaning-company-logo.webp',
  sameAs: ['https://www.google.com/maps?cid=5303198646776788086'],
  areaServed: [
    { '@type': 'City', name: `North Las Vegas, ${SITE.serviceArea.stateAbbr}` },
    { '@type': 'AdministrativeArea', name: `${SITE.serviceArea.county}, ${SITE.serviceArea.stateAbbr}` },
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

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Deep Cleaning', href: '/services/deep-cleaning' },
  { label: 'North Las Vegas' },
];

export default function DeepCleaningNorthLasVegasPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Deep Cleaning · North Las Vegas, NV"
        heading="Commercial Deep Cleaning in North Las Vegas, NV"
        sub={`North Las Vegas is one of the most actively growing residential areas in the Las Vegas Valley, with a large rental population and ongoing construction activity. Final Touch provides thorough deep cleaning for rental properties, new builds, and established neighborhoods across North Las Vegas and ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Deep cleaning in North Las Vegas is a thorough reset that goes beyond routine
            maintenance, covering inside appliances, grout lines, vents, baseboards, inside
            cabinets, and every detail surface that accumulates desert dust and everyday wear.{' '}
            <Link href="/services/deep-cleaning" className="text-brand-blue font-semibold hover:underline">
              Final Touch deep cleaning
            </Link>{' '}
            serves rental property owners resetting between tenants, renters doing seasonal resets,
            and commercial tenants and property managers across newer growth areas and established North Las Vegas corridors.
            Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to schedule.
          </p>
        </div>
      </section>

      {/* 3. Who hires deep cleaning in North Las Vegas */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires deep cleaning in North Las Vegas"
            heading="Rental property owners, renters, and commercial operators across a growing city."
            sub="North Las Vegas deep cleaning demand is shaped by the city's rental density and active construction, a different profile from Henderson's luxury homes or Las Vegas's vacation rentals."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Renters doing mid-tenancy resets',
                body: 'North Las Vegas has one of the higher renter-density profiles in the Las Vegas Valley. Many renters schedule a deep clean not just at move-out but mid-tenancy, a full reset to address Mojave desert dust buildup between regular cleaning visits.',
              },
              {
                title: 'Landlords resetting between long-term tenants',
                body: "Beyond a standard move-out clean, North Las Vegas landlords use a deep clean to fully reset properties between extended tenancies, addressing inside appliances, grout, and accumulated buildup that a move-out scope doesn't fully cover.",
              },
              {
                title: 'New-construction buyers and landlords',
                body: 'North Las Vegas is one of the most active residential growth areas in the valley. New buyers taking possession of recently built homes and landlords preparing new-build rentals use a deep clean to address construction residue that survives builder handoff, particularly in vents, cabinets, and window tracks.',
              },
              {
                title: 'Property managers in established neighborhoods',
                body: 'Older North Las Vegas residential areas have property managers and rental owners who schedule periodic deep cleans as seasonal resets, addressing the buildup that accumulates between routine service visits in a Mojave desert climate.',
              },
            ].map((item) => (
              <li key={item.title} className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
                <h3 className="font-display text-lg font-semibold text-brand-black">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. What's included */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Scope"
            heading="What a deep clean covers."
            sub="A deep clean goes into the areas a routine maintenance clean does not reach."
          />
          <ul className="mt-8 space-y-3">
            {[
              'Inside appliances: oven, refrigerator, microwave, dishwasher',
              'Baseboards, window sills, and ledges',
              'Vents, air returns, and ceiling fans',
              'Inside cabinets, drawers, and shelving',
              'Behind and under furniture (accessible areas)',
              'Grout lines and tile surfaces',
              'Light fixtures and switch plate surrounds',
              'Bathroom fixtures, tile, and mirrors',
              'All floor surfaces: deep vacuum and mop',
              'High-touch surface sanitizing throughout',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Scope confirmed before the clean begins. For North Las Vegas homes near active
            construction, let us know during booking so we can prioritize vents, air returns,
            and window areas where construction particulate accumulates most.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why deep cleaning matters in North Las Vegas"
            heading="Three North Las Vegas factors that drive deep cleaning demand."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'High rental density creates recurring demand',
                body: 'North Las Vegas has one of the higher renter-density profiles in the Las Vegas Valley. The rental market here is working-class and practical. Renters use deep cleans as resets, landlords use them between tenants, and the high turnover in the rental stock means deep cleaning demand is consistent throughout the year, not concentrated at one season or lease-cycle peak.',
              },
              {
                heading: 'Active residential growth adds construction dust',
                body: 'North Las Vegas has been one of the most active residential growth areas in the valley for years. New subdivisions and infill development mean many homes are adjacent to active construction. Fine particulate from grading, framing, and finishing work carries through the air and settles in completed homes nearby, particularly in HVAC systems, vents, and on surfaces near exterior openings.',
              },
              {
                heading: 'Desert climate accelerates dust buildup',
                body: 'Like all of the Las Vegas Valley, North Las Vegas sits in the Mojave Desert. Fine-particle dust accumulates on surfaces faster indoors than in wetter climates. For North Las Vegas renters and homeowners alike, a periodic deep clean is a practical response to the local environment, not just an aesthetic preference.',
              },
            ].map(({ heading, body }) => (
              <div key={heading} className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
                <h3 className="font-display text-lg font-semibold text-brand-black">{heading}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Related services in North Las Vegas */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="More services in North Las Vegas"
            heading="Other cleaning services available in North Las Vegas, NV."
            sub="Final Touch provides seven cleaning services across North Las Vegas and the Las Vegas Valley."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {relatedServiceCards.map((service) => (
              <li key={service.slug} className="h-full">
                <ServiceCard
                  href={`/services/${service.slug}/north-las-vegas`}
                  name={service.name}
                  description={service.shortDescription}
                  image={service.image}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Related cities */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brand-black tracking-tight">
            Deep cleaning in other cities
          </h2>
          <p className="mt-3 text-base text-muted">
            Final Touch provides deep cleaning across{' '}
            <Link href={ROUTES.locations} className="text-brand-blue font-semibold hover:underline">
              all of {SITE.serviceArea.county}
            </Link>
            .
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              { label: 'Deep Cleaning in Las Vegas, NV', href: '/services/deep-cleaning/las-vegas' },
              { label: 'Deep Cleaning in Henderson, NV', href: '/services/deep-cleaning/henderson' },
              { label: 'Deep Cleaning in Boulder City, NV', href: '/services/deep-cleaning/boulder-city' },
              { label: 'Deep Cleaning in Clark County, NV', href: '/services/deep-cleaning/clark-county' },
            ].map(({ label, href }) => (
              <li key={href}>
                {/* TODO-BATCH-6: Boulder City and Clark County resolve when those city sets are built */}
                <Link
                  href={href}
                  className="inline-flex items-center rounded-full border border-border-subtle bg-brand-white min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-blue hover:border-brand-blue/40 hover:bg-soft-blue transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. FAQ */}
      <FAQSection
        items={faq}
        heading="Deep cleaning in North Las Vegas: common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/deep-cleaning" className="font-semibold text-brand-blue hover:underline">
            ← Deep cleaning services
          </Link>
          <Link href="/locations/north-las-vegas" className="font-semibold text-brand-blue hover:underline">
            ← Cleaning services in North Las Vegas
          </Link>
          <Link href={ROUTES.freeQuote} className="font-semibold text-brand-blue hover:underline">
            Request a free quote →
          </Link>
        </div>
      </div>

      {/* 9. Final CTA */}
      <CTASection
        heading="Ready for a deep clean in North Las Vegas?"
        sub={`Free quotes for deep cleaning across North Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
