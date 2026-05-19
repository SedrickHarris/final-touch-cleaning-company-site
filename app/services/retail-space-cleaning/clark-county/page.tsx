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

export const metadata: Metadata = {
  title: 'Retail Space Cleaning in Clark County, NV | Final Touch',
  description:
    'Retail space cleaning across Clark County, NV. Final Touch serves storefronts in Las Vegas, Henderson, and all county cities. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/retail-space-cleaning/clark-county`,
  },
  openGraph: {
    title: 'Retail Space Cleaning in Clark County, NV | Final Touch',
    description:
      'Retail space cleaning across Clark County, NV. Final Touch serves storefronts in Las Vegas, Henderson, and all county cities. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/retail-space-cleaning/clark-county`,
  },
};

const faq = [
  {
    q: 'What does retail space cleaning include in Clark County?',
    a: 'Retail space cleaning covers sales floor surfaces, entry and transition areas, fitting rooms where applicable, customer restrooms, break room and back-of-house areas, display surfaces, and floor care. Scope confirmed during a walkthrough based on your store layout, hours, and specific needs — the same process in every Clark County city.',
  },
  {
    q: 'Does Final Touch serve retail tenants across all Clark County cities?',
    a: `Yes. Final Touch serves retail tenants across all of ${SITE.serviceArea.county} — Las Vegas strip malls and shopping corridors, Henderson neighborhood shopping centers, North Las Vegas commercial corridor retailers, and Boulder City's historic downtown storefronts. Same standard, every city.`,
  },
  {
    q: 'Can Final Touch clean multiple retail locations across Clark County?',
    a: `Yes. Franchise operators, retail chains, and property managers with multiple retail locations across Clark County can work with Final Touch for all their stores — one cleaning partner, consistent standard, across every city in the county. Call ${SITE.phone.display} to discuss a multi-location arrangement.`,
  },
  {
    q: 'Does Final Touch serve retail property managers with county-wide portfolios?',
    a: `Yes. Property management companies overseeing retail properties or shopping centers across multiple Clark County cities can work with Final Touch for all their retail cleaning needs. County-wide coverage, consistent standard. Call ${SITE.phone.display} to discuss.`,
  },
  {
    q: 'How much does retail space cleaning cost in Clark County?',
    a: `Pricing depends on store size, frequency, and scope. Contact Final Touch at ${SITE.phone.display} or request a free quote. A walkthrough is scheduled before quoting — same process in every county city.`,
  },
];

const relatedServices = [
  'commercial-office-cleaning',
  'janitorial-services',
  'post-construction-cleanup',
  'deep-cleaning',
  'move-in-cleaning',
  'move-out-cleaning',
] as const;

const relatedServiceCards = relatedServices
  .map((slug) => SERVICES.find((s) => s.slug === slug))
  .filter(Boolean) as typeof SERVICES[number][];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Retail Space Cleaning',
  serviceType: 'Retail Cleaning',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone.href.replace('tel:', ''),
    email: SITE.email.display,
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: `${SITE.serviceArea.county}, ${SITE.serviceArea.stateAbbr}`,
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  areaServed: [
    { '@type': 'AdministrativeArea', name: `${SITE.serviceArea.county}, ${SITE.serviceArea.stateAbbr}` },
    ...SITE.serviceArea.cities.map((city) => ({
      '@type': 'City' as const,
      name: `${city}, ${SITE.serviceArea.stateAbbr}`,
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
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Retail Space Cleaning', item: `${SITE.url}/services/retail-space-cleaning` },
    { '@type': 'ListItem', position: 4, name: 'Clark County', item: `${SITE.url}/services/retail-space-cleaning/clark-county` },
  ],
};

export default function RetailSpaceCleaningClarkCountyPage() {
  return (
    <>
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Retail Space Cleaning · Clark County, NV"
        heading="Retail Space Cleaning in Clark County, NV"
        sub={`Clark County's retail landscape spans Las Vegas's high-density strip mall corridors, Henderson's community-serving neighborhood shopping centers, North Las Vegas's working-class commercial strips, and Boulder City's historic downtown storefronts. Final Touch provides retail space cleaning across all of ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Retail space cleaning in Clark County is a scheduled professional clean for
            storefronts and retail interiors — covering sales floors, customer restrooms, display
            areas, and back-of-house on a program built around your store&apos;s hours.{' '}
            <Link href="/services/retail-space-cleaning" className="text-brand-blue font-semibold hover:underline">
              Final Touch retail cleaning
            </Link>{' '}
            serves retail tenants, franchise operators, and retail property managers across
            every city in the county. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to set up a walkthrough anywhere in Clark County.
          </p>
        </div>
      </section>

      {/* 3. Who hires */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires retail cleaning in Clark County"
            heading="Franchise operators, retail chains, and property managers across every county city."
            sub="Clark County's retail landscape is the most varied in Nevada — from Las Vegas's high-density strip malls to Boulder City's historic downtown storefronts."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Multi-location franchise operators',
                body: 'Franchise operators with retail locations across Clark County — multiple cities, multiple formats — need a cleaning partner who applies a consistent standard at every location. Final Touch serves franchise operators county-wide.',
              },
              {
                title: 'Las Vegas strip mall and corridor tenants',
                body: "Las Vegas's dense strip mall and shopping corridor retail creates high-volume retail cleaning demand — franchise retailers, independent stores, and mixed-use center tenants all needing customer-ready storefronts.",
              },
              {
                title: 'Henderson neighborhood shopping center tenants',
                body: "Henderson's community-serving shopping centers positioned around master-planned communities generate consistent retail cleaning demand from tenants serving established residential bases with high presentation standards.",
              },
              {
                title: 'Retail property managers with county portfolios',
                body: 'Property management companies overseeing retail properties or shopping centers across multiple county cities need a single retail cleaning partner for their entire county portfolio — one arrangement, every location.',
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
            heading="What retail space cleaning covers."
            sub="Retail cleaning keeps your Clark County store customer-ready on a consistent schedule."
          />
          <ul className="mt-8 space-y-3">
            {[
              'Sales floor surfaces and display areas',
              'Store entry and transition zones',
              'Fitting rooms (where applicable)',
              'Customer restrooms',
              'Break room and back-of-house areas',
              'Floor care: vacuuming, mopping, or hard-floor maintenance',
              'High-touch surfaces: counters, door handles, POS area',
              'Interior glass and window surfaces',
              'Trash removal and liner replacement',
              'Storage areas and receiving zones (scope confirmed per store)',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Scope confirmed during the walkthrough. The same process applies in every Clark County
            city — store layout, hours, and specific needs addressed per location.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Retail cleaning across Clark County"
            heading="The most varied retail landscape in Nevada — all served county-wide."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'Every retail format in one county',
                body: "Clark County contains every retail format found in Nevada: Las Vegas's high-density strip malls serving a large urban population and tourism visitors; Henderson's community-serving neighborhood shopping centers for master-planned communities; North Las Vegas's working-class commercial corridor retail; and Boulder City's historic downtown storefronts with seasonal tourism traffic. A retail cleaning partner who serves county-wide serves all of these formats.",
              },
              {
                heading: 'Franchise operators need consistent county-wide coverage',
                body: "Clark County's size and retail density make it a common market for franchise operators running multiple retail locations. A franchise with stores in Las Vegas, Henderson, and North Las Vegas needs cleaning programs at all locations — same standard, coordinated schedule, one partner. Final Touch provides that county-wide coverage.",
              },
              {
                heading: 'Retail property managers need one partner for every city',
                body: 'Shopping center and retail property managers in Clark County often oversee properties across multiple cities. Managing separate cleaning vendors for each city adds overhead and creates inconsistency. Final Touch serves retail portfolios county-wide — one contract, one standard, every location.',
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

      {/* 6. Related services */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="More services in Clark County"
            heading="Other cleaning services available across Clark County, NV."
            sub="Final Touch provides seven cleaning services county-wide."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {relatedServiceCards.map((service) => (
              <li key={service.slug} className="h-full">
                <ServiceCard
                  href={`/services/${service.slug}/clark-county`}
                  name={service.name}
                  description={service.shortDescription}
                  image={service.image}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Retail cleaning by city */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brand-black tracking-tight">
            Retail space cleaning by city
          </h2>
          <p className="mt-3 text-base text-muted">
            Each city in Clark County has its own retail character. Find yours below.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              { label: 'Retail Cleaning in Las Vegas, NV', href: '/services/retail-space-cleaning/las-vegas' },
              { label: 'Retail Cleaning in Henderson, NV', href: '/services/retail-space-cleaning/henderson' },
              { label: 'Retail Cleaning in North Las Vegas, NV', href: '/services/retail-space-cleaning/north-las-vegas' },
              { label: 'Retail Cleaning in Boulder City, NV', href: '/services/retail-space-cleaning/boulder-city' },
            ].map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-flex items-center rounded-full border border-border-subtle bg-brand-white px-4 py-2 text-sm font-semibold text-brand-blue hover:border-brand-blue/40 hover:bg-soft-blue transition-colors"
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
        heading="Retail space cleaning in Clark County — common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/retail-space-cleaning" className="font-semibold text-brand-blue hover:underline">
            ← Retail space cleaning services
          </Link>
          <Link href="/locations/clark-county" className="font-semibold text-brand-blue hover:underline">
            ← Cleaning services in Clark County
          </Link>
          <Link href={ROUTES.freeQuote} className="font-semibold text-brand-blue hover:underline">
            Request a free quote →
          </Link>
        </div>
      </div>

      {/* 9. Final CTA */}
      <CTASection
        heading="Need retail space cleaning anywhere in Clark County?"
        sub={`Free quotes for retail cleaning across all of ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    </>
  );
}
