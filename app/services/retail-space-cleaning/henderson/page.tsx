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
  title: 'Retail Space Cleaning in Henderson, NV',
  description:
    'Retail space cleaning in Henderson, NV. Final Touch serves Green Valley Parkway, Sunset Road, and shopping centers across Henderson. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/retail-space-cleaning/henderson`,
  },
  openGraph: {
    title: 'Retail Space Cleaning in Henderson, NV | Final Touch',
    description:
      'Retail space cleaning in Henderson, NV. Final Touch serves Green Valley Parkway, Sunset Road, and shopping centers across Henderson. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/retail-space-cleaning/henderson`,
  },
};

const faq = [
  {
    q: 'What does retail space cleaning include in Henderson?',
    a: 'Retail space cleaning covers sales floor surfaces, entry and transition areas, fitting rooms where applicable, customer restrooms, break room and back-of-house areas, display surfaces, and floor care (vacuuming, mopping, or hard-floor care depending on surface type). Scope confirmed during a walkthrough based on your store layout, hours, and specific needs.',
  },
  {
    q: 'Does Final Touch serve retail tenants in Henderson shopping centers?',
    a: `Yes. Final Touch serves retail tenants in Henderson's neighborhood shopping centers and strip retail corridors, including those along Green Valley Parkway and Sunset Road serving Henderson's master-planned communities. Call ${SITE.phone.display} to set up a walkthrough.`,
  },
  {
    q: 'Can Final Touch clean Henderson stores after hours?',
    a: 'Yes. After-hours scheduling is available for Henderson retail cleaning. Henderson retail generally operates on standard hours, unlike Las Vegas retail, which often runs into the evening and overnight. Most Henderson stores are cleanable in after-closing windows that are predictable and consistent week to week. Hours and access are confirmed during the initial walkthrough.',
  },
  {
    q: 'Does Final Touch serve Green Valley Ranch retail?',
    a: `Yes. Green Valley Ranch has one of Henderson's most active retail and commercial corridors. Final Touch serves retail tenants in the Green Valley Ranch area including storefronts and shopping centers along Green Valley Parkway and Sunset Road. Call ${SITE.phone.display} or request a free quote to get started.`,
  },
  {
    q: 'How much does retail space cleaning cost in Henderson?',
    a: `Pricing depends on store size, frequency, and scope. Contact Final Touch at ${SITE.phone.display} or request a free quote. A walkthrough is scheduled before quoting to review your floor plan, cleaning priorities, and schedule.`,
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
  areaServed: { '@type': 'City', name: `Henderson, ${SITE.serviceArea.stateAbbr}` },
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
    { '@type': 'City', name: `Henderson, ${SITE.serviceArea.stateAbbr}` },
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
  { label: 'Retail Space Cleaning', href: '/services/retail-space-cleaning' },
  { label: 'Henderson' },
];

export default function RetailSpaceCleaningHendersonPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Retail Space Cleaning · Henderson, NV"
        heading="Retail Space Cleaning in Henderson, NV"
        sub={`Henderson's retail is community-serving and neighborhood-scale: shopping centers along Green Valley Parkway and Sunset Road, neighborhood strip centers adjacent to master-planned communities, and specialty retail throughout the city. Final Touch provides scheduled retail space cleaning across Henderson and ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Retail space cleaning in Henderson is a scheduled professional clean for storefronts
            and retail interiors, covering sales floors, customer restrooms, display areas, and
            back-of-house on a program designed around your store&apos;s hours.{' '}
            <Link href="/services/retail-space-cleaning" className="text-brand-blue font-semibold hover:underline">
              Final Touch retail cleaning
            </Link>{' '}
            serves Henderson shopping center tenants, Green Valley Ranch corridor retailers,
            and independent specialty stores across the city. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to set up a walkthrough.
          </p>
        </div>
      </section>

      {/* 3. Who hires retail space cleaning in Henderson */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires retail cleaning in Henderson"
            heading="Community-serving retailers, Green Valley Ranch corridor tenants, and specialty stores."
            sub="Henderson retail is neighborhood-scale and community-serving, a different character from Las Vegas's strip-mall-heavy commercial landscape."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Green Valley Ranch corridor tenants',
                body: "Green Valley Parkway and Sunset Road have a concentration of retail tenants serving Henderson's master-planned community base: services, specialty food, fitness, medical-adjacent retail, and similar community-serving businesses with consistent cleaning needs.",
              },
              {
                title: 'Neighborhood shopping center tenants',
                body: 'Henderson has neighborhood shopping centers positioned to serve Anthem, Seven Hills, Inspirada, Cadence, and similar communities. Tenants in these centers need retail cleaning that matches the presentation standards of the surrounding communities they serve.',
              },
              {
                title: 'Healthcare-adjacent retail',
                body: "Henderson's medical corridor creates demand for retail spaces (optical, pharmacy, medical supply, and health-focused retail) that meet a cleanliness standard above typical consumer retail. These stores serve patients and healthcare consumers who have higher cleanliness expectations.",
              },
              {
                title: 'Independent boutique and specialty retailers',
                body: "Henderson's established communities support independent specialty retailers who value detail-focused cleaning for their customer environment. A clean retail floor and organized display area are part of what these stores promise their customers.",
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
            sub="Retail cleaning keeps your Henderson store customer-ready on a consistent schedule."
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
            Scope confirmed during the initial walkthrough. Henderson retail store layouts,
            floor types, and hours vary by location, all confirmed at that stage.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Retail cleaning in Henderson"
            heading="What makes Henderson retail cleaning different from Las Vegas."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'Community-serving retail, not destination retail',
                body: "Henderson's retail is primarily community-serving, stores that residents of Green Valley, Anthem, Inspirada, and surrounding neighborhoods use regularly. Unlike Las Vegas Strip-adjacent retail that caters to tourists and visitors, Henderson retail serves a consistent local customer base with high familiarity with the store and high standards for the environment.",
              },
              {
                heading: 'Standard hours: predictable cleaning windows',
                body: "Henderson retail operates on standard hours compared to Las Vegas retail, which often runs evenings and late nights. After-hours cleaning windows in Henderson are consistent and predictable. Stores close at a regular time, and the cleaning program fits into that window reliably. This makes scheduling and access simpler than in Las Vegas's more variable retail environment.",
              },
              {
                heading: 'Neighborhood shopping center format',
                body: 'The dominant retail format in Henderson is the neighborhood shopping center, smaller centers positioned at key intersections to serve the surrounding master-planned communities. These centers have shared parking lots, adjacent tenants, and building management considerations that differ from large power centers or standalone stores. Final Touch has experience with this format.',
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

      {/* 6. Related services in Henderson */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="More services in Henderson"
            heading="Other cleaning services available in Henderson, NV."
            sub="Final Touch provides seven cleaning services across Henderson and Clark County."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {relatedServiceCards.map((service) => (
              <li key={service.slug} className="h-full">
                <ServiceCard
                  href={`/services/${service.slug}/henderson`}
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
            Retail space cleaning in other cities
          </h2>
          <p className="mt-3 text-base text-muted">
            Final Touch serves retail clients across{' '}
            <Link href={ROUTES.locations} className="text-brand-blue font-semibold hover:underline">
              all of {SITE.serviceArea.county}
            </Link>
            .
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              { label: 'Retail Cleaning in Las Vegas, NV', href: '/services/retail-space-cleaning/las-vegas' },
              { label: 'Retail Cleaning in North Las Vegas, NV', href: '/services/retail-space-cleaning/north-las-vegas' },
              { label: 'Retail Cleaning in Boulder City, NV', href: '/services/retail-space-cleaning/boulder-city' },
              { label: 'Retail Cleaning in Clark County, NV', href: '/services/retail-space-cleaning/clark-county' },
            ].map(({ label, href }) => (
              <li key={href}>
                {/* TODO-BATCH-6: North Las Vegas, Boulder City, Clark County resolve when those city sets are built */}
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
        heading="Retail space cleaning in Henderson: common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/retail-space-cleaning" className="font-semibold text-brand-blue hover:underline">
            ← Retail space cleaning services
          </Link>
          <Link href="/locations/henderson" className="font-semibold text-brand-blue hover:underline">
            ← Cleaning services in Henderson
          </Link>
          <Link href={ROUTES.freeQuote} className="font-semibold text-brand-blue hover:underline">
            Request a free quote →
          </Link>
        </div>
      </div>

      {/* 9. Final CTA */}
      <CTASection
        heading="Need retail space cleaning in Henderson?"
        sub={`Free quotes for retail cleaning across Henderson and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
