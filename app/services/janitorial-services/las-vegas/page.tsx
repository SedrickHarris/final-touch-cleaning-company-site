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
  title: 'Janitorial Services in Las Vegas, NV | Final Touch',
  description:
    'Professional janitorial services in Las Vegas, NV. Recurring cleaning programs for offices, buildings, and commercial spaces. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/janitorial-services/las-vegas`,
  },
  openGraph: {
    title: 'Janitorial Services in Las Vegas, NV | Final Touch',
    description:
      'Professional janitorial services in Las Vegas, NV. Recurring cleaning programs for offices, buildings, and commercial spaces. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/janitorial-services/las-vegas`,
  },
};

const faq = [
  {
    q: 'What do janitorial services include in Las Vegas?',
    a: 'Janitorial services cover recurring cleaning of offices, restrooms, lobbies, break rooms, and common areas on a scheduled basis: nightly, weekly, or a custom frequency. Scope includes trash removal and liner replacement, floor care (vacuuming, mopping, or hard-floor maintenance depending on surface type), surface wiping, restroom cleaning, and high-touch surface maintenance. Program scope and schedule are confirmed per building during the initial walkthrough.',
  },
  {
    q: 'What is the difference between janitorial services and commercial office cleaning in Las Vegas?',
    a: 'Commercial office cleaning is typically a thorough clean of a specific office suite: workstations, restrooms, and common areas for one tenant or one floor. Janitorial services cover recurring, building-wide or program-wide maintenance cleaning on a regular schedule, often spanning multiple tenants, common areas, and shared facilities. The distinction is frequency and scope breadth, not cleaning quality. Final Touch offers both; the right fit depends on your building and is confirmed during consultation.',
  },
  {
    q: 'Does Final Touch offer nightly janitorial service in Las Vegas?',
    a: "Yes. Final Touch offers scheduling options including nightly programs for high-traffic Las Vegas commercial spaces. Las Vegas's tourism economy means many businesses here operate outside standard 9-to-5 hours. Cleaning schedules are built around your building's actual hours and access windows.",
  },
  {
    q: 'How much do janitorial services cost in Las Vegas?',
    a: `Pricing depends on building size, cleaning frequency, and scope. Contact Final Touch at ${SITE.phone.display} or request a free quote. A walkthrough is scheduled before quoting to understand the building layout, access situation, and program needs.`,
  },
  {
    q: 'Does Final Touch serve commercial buildings across all of Las Vegas?',
    a: `Yes. Final Touch serves commercial buildings across Las Vegas and all of ${SITE.serviceArea.county}. The same team and finishing standard applies regardless of which part of the city your building is in. Call ${SITE.phone.display} to discuss your building.`,
  },
];

// Related services: ordered by relevance for Las Vegas janitorial page
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
  areaServed: {
    '@type': 'City',
    name: `Las Vegas, ${SITE.serviceArea.stateAbbr}`,
  },
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
    { '@type': 'City', name: `Las Vegas, ${SITE.serviceArea.stateAbbr}` },
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

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Janitorial Services',
      item: `${SITE.url}/services/janitorial-services`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Las Vegas',
      item: `${SITE.url}/services/janitorial-services/las-vegas`,
    },
  ],
};

export default function JanitorialServicesLasVegasPage() {
  return (
    <>
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Janitorial Services · Las Vegas, NV"
        heading="Janitorial Services in Las Vegas, NV"
        sub={`Las Vegas commercial buildings and facilities need consistent, recurring cleaning programs. Final Touch provides janitorial services for offices, multi-tenant buildings, and high-traffic commercial spaces across Las Vegas and ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Janitorial services in Las Vegas are scheduled recurring cleaning programs for commercial
            buildings and facilities, covering lobbies, restrooms, common areas, and office suites
            on a set cadence.{' '}
            <Link
              href="/services/janitorial-services"
              className="text-brand-blue font-semibold hover:underline"
            >
              Final Touch janitorial services
            </Link>{' '}
            serve multi-tenant office buildings, high-traffic commercial spaces, healthcare
            facilities, and property managers across Las Vegas. Program scope and schedule are
            confirmed per building. Call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>{' '}
            to discuss your building.
          </p>
        </div>
      </section>

      {/* 3. Who hires janitorial services in Las Vegas */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires janitorial services in Las Vegas"
            heading="Building owners, property managers, and commercial tenants across the metro."
            sub="Las Vegas commercial density and around-the-clock business activity create consistent demand for scheduled janitorial programs."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Multi-tenant office buildings',
                body: 'Las Vegas commercial corridors have multi-tenant office buildings needing building-wide janitorial programs: lobbies, hallways, shared restrooms, elevator areas, and common spaces across all floors and tenants.',
              },
              {
                title: 'High-traffic commercial spaces',
                body: "Las Vegas's tourism economy creates high-foot-traffic commercial environments in hospitality-adjacent businesses, event facilities, and retail-adjacent offices that need frequent janitorial maintenance to stay presentable.",
              },
              {
                title: 'Healthcare and professional facilities',
                body: 'Medical offices, clinics, and professional service buildings in Las Vegas require consistent janitorial programs with specific attention to restrooms, waiting areas, and high-touch surfaces.',
              },
              {
                title: 'Property owners and building managers',
                body: 'Commercial property owners across Las Vegas managing building maintenance contracts look for a janitorial partner that applies a consistent standard across the building without requiring active supervision.',
              },
            ].map((item) => (
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

      {/* 4. What's included */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Scope"
            heading="What janitorial services cover."
            sub="A janitorial program maintains your building on a scheduled basis. These are the areas Final Touch addresses."
          />
          <ul className="mt-8 space-y-3">
            {[
              'Lobby and reception areas',
              'Office suites and workstation areas',
              'Conference and meeting rooms',
              'Break rooms and kitchen areas',
              'Restrooms: fixtures, tile, mirrors, trash, restocking setup',
              'Hallways, stairwells, and elevator interiors',
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
            Program scope, visit frequency, and access timing are confirmed per building during
            the initial walkthrough. Custom schedules (including nightly programs) are available.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Janitorial services in the Las Vegas market"
            heading="What makes Las Vegas janitorial demand different."
            sub="Las Vegas commercial buildings face specific janitorial challenges that set them apart from typical markets."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'Commercial density across the valley',
                body: 'Beyond the Strip, Las Vegas has significant commercial density in office corridors, business parks, and mixed-use developments. Multi-tenant buildings, professional service clusters, and commercial complexes spread across the valley create consistent demand for building-wide janitorial programs.',
              },
              {
                heading: 'Around-the-clock operating schedules',
                body: "Las Vegas's 24-hour economy extends beyond casinos. Hospitality-adjacent businesses, event companies, healthcare facilities, and service operations often run outside standard business hours. Janitorial programs need to accommodate those schedules, cleaning before opening, after closing, or during low-traffic windows.",
              },
              {
                heading: 'Desert dust load in commercial spaces',
                body: 'Mojave desert dust settles on horizontal surfaces, vents, and window sills in commercial buildings faster than in wetter markets. Janitorial programs in Las Vegas buildings factor in that dust accumulation (particularly in lobbies with frequent exterior-door traffic) as part of the regular schedule.',
              },
            ].map(({ heading, body }) => (
              <div
                key={heading}
                className="rounded-[14px] border border-border-subtle bg-brand-white p-6"
              >
                <h3 className="font-display text-lg font-semibold text-brand-black">{heading}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Related services in Las Vegas */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="More services in Las Vegas"
            heading="Other cleaning services available in Las Vegas, NV."
            sub="Final Touch provides seven cleaning services across Las Vegas and Clark County."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {relatedServiceCards.map((service) => (
              <li key={service.slug} className="h-full">
                <ServiceCard
                  href={`/services/${service.slug}/las-vegas`}
                  name={service.name}
                  description={service.shortDescription}
                  image={service.image}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Related cities for janitorial services */}
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
              { label: 'Janitorial Services in Henderson, NV', href: '/services/janitorial-services/henderson' },
              { label: 'Janitorial Services in North Las Vegas, NV', href: '/services/janitorial-services/north-las-vegas' },
              { label: 'Janitorial Services in Boulder City, NV', href: '/services/janitorial-services/boulder-city' },
              { label: 'Janitorial Services in Clark County, NV', href: '/services/janitorial-services/clark-county' },
            ].map(({ label, href }) => (
              <li key={href}>
                {/* TODO-BATCH-6: link resolves when that city set is built */}
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
        heading="Janitorial services in Las Vegas: common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/janitorial-services" className="font-semibold text-brand-blue hover:underline">
            ← Janitorial services
          </Link>
          <Link href="/locations/las-vegas" className="font-semibold text-brand-blue hover:underline">
            ← Cleaning services in Las Vegas
          </Link>
          <Link href={ROUTES.freeQuote} className="font-semibold text-brand-blue hover:underline">
            Request a free quote →
          </Link>
        </div>
      </div>

      {/* 9. Final CTA */}
      <CTASection
        heading="Looking for janitorial services in Las Vegas?"
        sub={`Free quotes for janitorial programs across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
