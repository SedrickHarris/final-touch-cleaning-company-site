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
  title: 'Janitorial Services in Henderson, NV',
  description:
    'Janitorial services in Henderson, NV. Recurring programs for Green Valley Pkwy offices, medical buildings, and commercial spaces. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/janitorial-services/henderson`,
  },
  openGraph: {
    title: 'Janitorial Services in Henderson, NV | Final Touch',
    description:
      'Janitorial services in Henderson, NV. Recurring programs for Green Valley Pkwy offices, medical buildings, and commercial spaces. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/janitorial-services/henderson`,
  },
};

const faq = [
  {
    q: 'What do janitorial services include in Henderson?',
    a: 'Janitorial services cover recurring cleaning of offices, restrooms, lobbies, break rooms, and common areas on a scheduled basis. Scope includes trash removal and liner replacement, floor care (vacuuming, mopping, or hard-floor maintenance depending on surface type), surface wiping, restroom maintenance, and high-touch surface care. Program scope and schedule are confirmed per building during the initial walkthrough.',
  },
  {
    q: 'What is the difference between janitorial services and office cleaning in Henderson?',
    a: "In Henderson's smaller commercial buildings and suburban office parks, the distinction is typically building-wide versus suite-specific scope. Office cleaning serves one tenant's suite. Janitorial programs serve the full building: lobbies, stairwells, shared restrooms, common areas, and the exterior entry in addition to individual tenant spaces. Final Touch offers both; the right fit depends on your building and is confirmed during the initial consultation.",
  },
  {
    q: 'Does Final Touch offer recurring janitorial programs in Henderson?',
    a: `Yes. Final Touch offers scheduled recurring janitorial programs for Henderson commercial buildings, including weekly, bi-weekly, and custom-frequency options. Henderson's commercial buildings generally operate on standard business hours, which makes scheduling more straightforward than in Las Vegas's 24-hour commercial market. Schedule and access are confirmed per building. Call ${SITE.phone.display} to discuss.`,
  },
  {
    q: 'Who typically hires janitorial services in Henderson?',
    a: "Henderson's janitorial clients are primarily suburban office park owners and managers, medical building operators, property management companies overseeing multi-tenant commercial properties along Green Valley Parkway, and owners of the smaller strip-commercial buildings adjacent to Henderson's master-planned communities. The profile is more residential-serving and professional-services-oriented than Las Vegas's more diverse commercial base.",
  },
  {
    q: 'How much do janitorial services cost in Henderson?',
    a: `Pricing depends on building size, cleaning frequency, and scope. Contact Final Touch at ${SITE.phone.display} or request a free quote. A walkthrough is scheduled before quoting to understand the building layout, access requirements, and program needs.`,
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
  { label: 'Janitorial Services', href: '/services/janitorial-services' },
  { label: 'Henderson' },
];

export default function JanitorialServicesHendersonPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Janitorial Services · Henderson, NV"
        heading="Janitorial Services in Henderson, NV"
        sub={`Henderson's commercial buildings serve an established, professionally-oriented community: office parks along Green Valley Parkway, medical buildings, and smaller commercial properties adjacent to master-planned neighborhoods. Final Touch provides recurring janitorial programs across Henderson and ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Janitorial services in Henderson are scheduled recurring cleaning programs for
            commercial buildings, covering lobbies, restrooms, common areas, and office suites
            on a set cadence.{' '}
            <Link href="/services/janitorial-services" className="text-brand-blue font-semibold hover:underline">
              Final Touch janitorial services
            </Link>{' '}
            serve Henderson office parks, medical buildings, multi-tenant commercial properties,
            and property managers across the city. Program scope and schedule are confirmed per
            building. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to discuss your building.
          </p>
        </div>
      </section>

      {/* 3. Who hires janitorial services in Henderson */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires janitorial services in Henderson"
            heading="Office park owners, medical buildings, and suburban commercial property managers."
            sub="Henderson's janitorial market is professional-services driven, with a predictable operating-hours profile distinct from Las Vegas."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Office park and multi-tenant building owners',
                body: "Henderson's Green Valley Parkway corridor has multi-tenant commercial buildings requiring building-wide janitorial programs: shared lobbies, hallways, restrooms, and common areas across all floors and tenants.",
              },
              {
                title: 'Medical facility and healthcare building managers',
                body: "Henderson's medical corridor creates demand for janitorial programs at medical office buildings, outpatient facilities, and healthcare-adjacent professional service buildings. Consistent cleaning at a professional standard is a baseline requirement.",
              },
              {
                title: 'Small commercial building owners',
                body: "Henderson has a significant number of smaller strip-commercial buildings positioned to serve its master-planned communities. These 4–12 tenant commercial properties need a janitorial partner who understands the smaller-building format.",
              },
              {
                title: 'Property management firms',
                body: 'Henderson commercial property management companies overseeing cleaning contracts across multiple buildings look for a consistent standard across their portfolio without active supervision on every property.',
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
            sub="A janitorial program maintains your Henderson building on a scheduled basis."
          />
          <ul className="mt-8 space-y-3">
            {[
              'Lobby and reception areas',
              'Office suites and workstation areas',
              'Conference and meeting rooms',
              'Break rooms and kitchen areas',
              'Restrooms: fixtures, tile, mirrors, trash, restocking setup',
              'Hallways, stairwells, and common corridors',
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
            Program scope, visit frequency, and access timing confirmed per building. Henderson
            commercial buildings typically operate on standard business hours. Scheduling is
            confirmed around your building&apos;s actual hours and access requirements.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Janitorial services in Henderson"
            heading="What sets Henderson's janitorial market apart."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'Standard operating hours, predictable scheduling',
                body: "Unlike Las Vegas's 24-hour commercial environment, Henderson's businesses overwhelmingly operate on standard hours. Office parks along Green Valley Parkway open and close on predictable schedules. Janitorial programs here are typically scheduled during after-hours windows that are consistent week to week, which makes access coordination and cleaning consistency more straightforward than in more variable commercial environments.",
              },
              {
                heading: 'Smaller building scale',
                body: "Henderson's commercial buildings tend to be smaller than Las Vegas's urban office towers. Two- to five-story office buildings, smaller medical office parks, and strip-commercial properties are the dominant format. A janitorial program in Henderson is typically scoped for a building with 5–25 tenants rather than a 20-story tower. Final Touch is sized appropriately for this format.",
              },
              {
                heading: 'Medical corridor requirements',
                body: "Henderson's concentration of medical offices and healthcare-adjacent businesses means janitorial programs here sometimes involve environments with higher cleanliness expectations: waiting rooms, clinical hallways, and shared restrooms that patients use. Final Touch confirms scope and any specific requirements for healthcare environments during the walkthrough.",
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
              { label: 'Janitorial Services in North Las Vegas, NV', href: '/services/janitorial-services/north-las-vegas' },
              { label: 'Janitorial Services in Boulder City, NV', href: '/services/janitorial-services/boulder-city' },
              { label: 'Janitorial Services in Clark County, NV', href: '/services/janitorial-services/clark-county' },
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
        heading="Janitorial services in Henderson: common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/janitorial-services" className="font-semibold text-brand-blue hover:underline">
            ← Janitorial services
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
        heading="Looking for janitorial services in Henderson?"
        sub={`Free quotes for janitorial programs across Henderson and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
