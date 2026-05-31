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
  title: 'Janitorial Services in Boulder City, NV',
  description:
    'Janitorial services in Boulder City, NV. Final Touch serves historic downtown businesses and small offices across Boulder City. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/janitorial-services/boulder-city`,
  },
  openGraph: {
    title: 'Janitorial Services in Boulder City, NV | Final Touch',
    description:
      'Janitorial services in Boulder City, NV. Final Touch serves historic downtown businesses and small offices across Boulder City. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/janitorial-services/boulder-city`,
  },
};

const faq = [
  {
    q: 'What do janitorial services include in Boulder City?',
    a: 'Janitorial services cover recurring cleaning of offices, restrooms, lobbies, break rooms, and common areas on a scheduled basis. Scope includes trash removal and liner replacement, floor care, surface wiping, and restroom maintenance. Program scope and schedule are confirmed per business during the initial walkthrough.',
  },
  {
    q: 'Does Final Touch offer janitorial programs for Boulder City small businesses?',
    a: "Yes. Final Touch provides janitorial programs tailored to smaller-scale operations, the type of small shop, restaurant, or professional office that characterizes Boulder City's historic downtown. Scope and frequency are set for the actual size and traffic of the business, not a metro-scale template built for large commercial corridors.",
  },
  {
    q: 'How often do Boulder City businesses typically need janitorial service?',
    a: 'It depends on the business type. Tourism-adjacent businesses near Hoover Dam and Lake Mead may need more frequent cleaning during peak visitor seasons in spring and fall, and less frequent during off-peak periods. Professional offices and retail shops typically run on a standard weekly or bi-weekly program year-round. Contact Final Touch to discuss what frequency fits your operation.',
  },
  {
    q: 'Does Final Touch travel to Boulder City for janitorial programs?',
    a: `Yes. Final Touch serves Boulder City as part of its ${SITE.serviceArea.county} service area. Boulder City businesses are a regular part of the service territory. Call ${SITE.phone.display} to discuss your building.`,
  },
  {
    q: 'How much do janitorial services cost in Boulder City?',
    a: `Pricing depends on business size, frequency, and scope. Contact Final Touch at ${SITE.phone.display} or request a free quote. A walkthrough is scheduled before quoting.`,
  },
];

const relatedServices = [
  'commercial-office-cleaning',
  'retail-space-cleaning',
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
  name: 'Janitorial Services',
  serviceType: 'Janitorial Services',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone.href.replace('tel:', ''),
    email: SITE.email.display,
  },
  areaServed: { '@type': 'City', name: `Boulder City, ${SITE.serviceArea.stateAbbr}` },
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
    { '@type': 'City', name: `Boulder City, ${SITE.serviceArea.stateAbbr}` },
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
  { label: 'Janitorial Services', href: '/services/janitorial-services' },
  { label: 'Boulder City' },
];

export default function JanitorialServicesBoulderCityPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Janitorial Services · Boulder City, NV"
        heading="Janitorial Services in Boulder City, NV"
        sub={`Boulder City's small-business community (centered on a historic downtown with tourism-adjacent businesses near Lake Mead) needs janitorial programs tailored to smaller-scale operations. Final Touch provides recurring janitorial services for businesses across Boulder City and ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Janitorial services in Boulder City are scheduled recurring cleaning programs for
            businesses and commercial spaces, covering lobbies, restrooms, common areas, and
            office suites on a cadence built around your business.{' '}
            <Link href="/services/janitorial-services" className="text-brand-blue font-semibold hover:underline">
              Final Touch janitorial services
            </Link>{' '}
            serve Boulder City&apos;s historic downtown shops, tourism-adjacent businesses, and small
            professional offices. Program scope and schedule are confirmed per business. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to discuss your business.
          </p>
        </div>
      </section>

      {/* 3. Who hires */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires janitorial services in Boulder City"
            heading="Small shops, tourism businesses, professional offices, and community facilities."
            sub="Boulder City's janitorial market is the smallest and most relationship-oriented in Clark County."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Historic downtown small businesses',
                body: 'Shops, boutiques, and specialty businesses along Nevada Way and the historic downtown corridor. Typically small square footage but consistent cleaning needs, customer-facing spaces that need to be presentable for the community and visitors.',
              },
              {
                title: 'Tourism and Lake Mead-adjacent businesses',
                body: 'Businesses serving visitors to Hoover Dam and Lake Mead National Recreation Area. These operations may have seasonal variation in their cleaning needs, with higher-traffic periods in spring and fall and slower periods in summer and winter.',
              },
              {
                title: 'Small professional services offices',
                body: "Medical offices, insurance agencies, real estate offices, and similar professional businesses serving Boulder City's residential community. Small-footprint, low-traffic offices with predictable weekly or bi-weekly cleaning needs.",
              },
              {
                title: 'Community facilities and organizations',
                body: "Boulder City's small-town character includes community-serving organizations and facilities that need consistent janitorial maintenance, spaces that serve the local population on a regular schedule.",
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
            heading="What janitorial services cover."
            sub="A janitorial program maintains your Boulder City business on a scheduled basis."
          />
          <ul className="mt-8 space-y-3">
            {[
              'Lobby and reception areas',
              'Office suites and workstation areas',
              'Conference and meeting rooms',
              'Break rooms and kitchen areas',
              'Restrooms: fixtures, tile, mirrors, trash, restocking setup',
              'Hallways and common areas',
              'High-touch surfaces throughout: handles, switches, shared equipment',
              'Floor care: vacuuming, mopping, or hard-floor maintenance',
              'Trash removal and liner replacement throughout',
              'Common-area surfaces on every scheduled visit',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Program scope, visit frequency, and access timing confirmed during the walkthrough.
            For tourism-adjacent businesses with seasonal patterns, flexible scheduling is
            discussed at that stage.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Janitorial services in Boulder City"
            heading="What sets Boulder City's janitorial market apart."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'Small-town scale requires a different approach',
                body: "Boulder City's businesses are small-footprint and relationship-oriented. A janitorial program here is not a large-building contract. It is a recurring relationship with a small shop or office where the owner often knows their service providers personally. Final Touch approaches Boulder City janitorial clients the same way it approaches everything: scope confirmed, schedule confirmed, consistent standard on every visit.",
              },
              {
                heading: 'Tourism seasonality creates flexible program needs',
                body: 'The spring and fall visitor peaks from Hoover Dam and Lake Mead tourism create seasonal variation in foot traffic for some Boulder City businesses. A janitorial program that can flex (more frequent visits during peak season, standard schedule during off-peak) is a practical fit for these businesses. Final Touch discusses seasonal scheduling during the walkthrough.',
              },
              {
                heading: 'Final Touch serves Boulder City consistently',
                body: 'Some Boulder City business owners wonder whether a cleaning company based in the Las Vegas Valley will reliably serve a smaller, more distant client. Final Touch serves Boulder City as a regular part of its Clark County service territory, the same reliability and standard applied to every client regardless of city size.',
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
            eyebrow="More services in Boulder City"
            heading="Other cleaning services available in Boulder City, NV."
            sub="Final Touch provides seven cleaning services across Boulder City and Clark County."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {relatedServiceCards.map((service) => (
              <li key={service.slug} className="h-full">
                <ServiceCard
                  href={`/services/${service.slug}/boulder-city`}
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
            Janitorial services in other cities
          </h2>
          <p className="mt-3 text-base text-muted">
            Final Touch serves janitorial clients across{' '}
            <Link href={ROUTES.locations} className="text-brand-blue font-semibold hover:underline">
              all of {SITE.serviceArea.county}
            </Link>
            .
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              { label: 'Janitorial Services in Las Vegas, NV', href: '/services/janitorial-services/las-vegas' },
              { label: 'Janitorial Services in Henderson, NV', href: '/services/janitorial-services/henderson' },
              { label: 'Janitorial Services in North Las Vegas, NV', href: '/services/janitorial-services/north-las-vegas' },
              { label: 'Janitorial Services in Clark County, NV', href: '/services/janitorial-services/clark-county' },
            ].map(({ label, href }) => (
              <li key={href}>
                {/* TODO-BATCH-6: Clark County resolves when that city set is built */}
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
        heading="Janitorial services in Boulder City: common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/janitorial-services" className="font-semibold text-brand-blue hover:underline">
            ← Janitorial services
          </Link>
          <Link href="/locations/boulder-city" className="font-semibold text-brand-blue hover:underline">
            ← Cleaning services in Boulder City
          </Link>
          <Link href={ROUTES.freeQuote} className="font-semibold text-brand-blue hover:underline">
            Request a free quote →
          </Link>
        </div>
      </div>

      {/* 9. Final CTA */}
      <CTASection
        heading="Looking for janitorial services in Boulder City?"
        sub={`Free quotes for janitorial programs across Boulder City and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
