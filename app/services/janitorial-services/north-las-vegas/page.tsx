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
  title: 'Janitorial Services in North Las Vegas, NV',
  description:
    'Janitorial services in North Las Vegas, NV. Final Touch serves industrial facilities, warehouse offices, and commercial buildings. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/janitorial-services/north-las-vegas`,
  },
  openGraph: {
    title: 'Janitorial Services in North Las Vegas, NV | Final Touch',
    description:
      'Janitorial services in North Las Vegas, NV. Final Touch serves industrial facilities, warehouse offices, and commercial buildings. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/janitorial-services/north-las-vegas`,
  },
};

const faq = [
  {
    q: 'What do janitorial services include in North Las Vegas?',
    a: 'Janitorial services cover recurring cleaning of offices, restrooms, lobbies, break rooms, and common areas on a scheduled basis. For industrial facilities, scope extends to facility-specific common areas and break rooms within warehouse complexes. Scope includes trash removal, floor care, surface wiping, and restroom maintenance. Program scope and schedule confirmed per building or facility during the initial walkthrough.',
  },
  {
    q: 'Does Final Touch offer janitorial programs for industrial facilities in North Las Vegas?',
    a: "Yes. North Las Vegas has a large industrial and warehouse corridor, one of the defining characteristics of the city's commercial landscape. Final Touch provides janitorial programs for warehouse facility offices, employee break rooms, restrooms, and common areas within industrial complexes in North Las Vegas. This is a service type specifically relevant to NLV's industrial base.",
  },
  {
    q: 'What is the difference between janitorial services and commercial cleaning in North Las Vegas?',
    a: "In North Las Vegas, the distinction matters differently than in suburban office markets. Commercial office cleaning serves a professional services office suite on a scheduled basis. Janitorial programs in NLV more often serve industrial facility common areas, multi-tenant commercial buildings, and operations that run multiple shifts, requiring cleaning schedules built around operational hours rather than standard 9-to-5 windows. Final Touch offers both; the right fit depends on your facility and is confirmed during consultation.",
  },
  {
    q: 'How much do janitorial services cost in North Las Vegas?',
    a: `Pricing depends on building or facility size, frequency, and scope. Contact Final Touch at ${SITE.phone.display} or request a free quote. A walkthrough is scheduled before quoting.`,
  },
  {
    q: 'Does Final Touch serve commercial buildings across all of North Las Vegas?',
    a: `Yes. Final Touch is a family-owned commercial cleaning company serving commercial buildings and industrial facilities across North Las Vegas as part of its ${SITE.serviceArea.county} service area. Call ${SITE.phone.display} to discuss your building or facility.`,
  },
];

const relatedServices = [
  'commercial-office-cleaning',
  'post-construction-cleanup',
  'retail-space-cleaning',
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
  { label: 'Janitorial Services', href: '/services/janitorial-services' },
  { label: 'North Las Vegas' },
];

export default function JanitorialServicesNorthLasVegasPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Janitorial Services · North Las Vegas, NV"
        heading="Janitorial Services in North Las Vegas, NV"
        sub={`North Las Vegas's large industrial and logistics corridor creates janitorial demand that is distinct from any other city in the Las Vegas Valley. Final Touch provides recurring janitorial programs for industrial facilities, commercial buildings, and businesses across North Las Vegas and ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Janitorial services in North Las Vegas are scheduled recurring cleaning programs for
            commercial buildings and industrial facilities, covering lobbies, restrooms, common
            areas, office suites, and facility-specific spaces on a cadence built around
            your operation.{' '}
            <Link href="/services/janitorial-services" className="text-brand-blue font-semibold hover:underline">
              Final Touch janitorial services
            </Link>{' '}
            serve North Las Vegas warehouse operators, commercial building owners, and industrial
            complex managers. Program scope and schedule confirmed per facility. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to discuss your building.
          </p>
        </div>
      </section>

      {/* 3. Who hires */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires janitorial services in North Las Vegas"
            heading="Warehouse operators, industrial complex managers, and commercial building owners."
            sub="NLV's janitorial market is the most industrially focused in the Las Vegas Valley, a profile unique to this city."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Warehouse and distribution facility operators',
                body: "North Las Vegas's industrial corridor generates consistent demand for janitorial programs covering facility offices, break rooms, restrooms, and common areas within warehouse and distribution complexes. These operations often run multiple shifts and need cleaning schedules built around operational hours.",
              },
              {
                title: 'Industrial complex property managers',
                body: 'Multi-tenant industrial parks in North Las Vegas need building-wide janitorial programs for shared spaces: lobbies, stairwells, restrooms, and common areas used by multiple tenants across the complex.',
              },
              {
                title: 'Commercial building owners along NLV corridors',
                body: 'Standard commercial janitorial for office buildings, retail-adjacent commercial spaces, and professional services tenants along Lamb Boulevard, Craig Road, and surrounding NLV commercial corridors.',
              },
              {
                title: 'Restaurant and food service operators',
                body: 'North Las Vegas commercial corridors include a significant number of restaurants and fast-casual operations. Food service environments have specific janitorial needs for dining areas, restrooms, and front-of-house spaces.',
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
            sub="A janitorial program maintains your North Las Vegas building or facility on a scheduled basis."
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
            Program scope, visit frequency, and access timing confirmed per building or facility.
            For industrial facilities with multiple shifts, cleaning windows are coordinated around
            operational schedules during the walkthrough.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Janitorial services in North Las Vegas"
            heading="What makes NLV's janitorial market distinct."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'Industrial facilities require operational-hour flexibility',
                body: "North Las Vegas warehouse and distribution operations often run multiple shifts. 16-hour and 24-hour operations are common in the logistics corridor. Janitorial programs here need to fit around those windows, cleaning between shifts or during designated low-activity periods. This is a fundamentally different scheduling requirement than Henderson's standard-hours suburban office parks.",
              },
              {
                heading: 'Higher-use environments need more frequent service',
                body: 'Warehouse facility break rooms, restrooms, and common areas used by shift workers have heavier daily use than a professional services office. Foot traffic is higher, use patterns are more intensive, and surfaces accumulate grime faster. Janitorial programs for industrial facilities in NLV often require more frequent visits than comparable-size office spaces elsewhere.',
              },
              {
                heading: 'Commercial corridor variety',
                body: "Beyond the industrial corridor, North Las Vegas has commercial corridors serving a large residential population. Restaurants, auto services, and retail-adjacent commercial spaces create a varied janitorial client base with different needs by business type, all served by Final Touch's standard walkthrough-and-scope approach.",
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
              { label: 'Janitorial Services in Boulder City, NV', href: '/services/janitorial-services/boulder-city' },
              { label: 'Janitorial Services in Clark County, NV', href: '/services/janitorial-services/clark-county' },
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
        heading="Janitorial services in North Las Vegas: common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/janitorial-services" className="font-semibold text-brand-blue hover:underline">
            ← Janitorial services
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
        heading="Looking for janitorial services in North Las Vegas?"
        sub={`Free quotes for janitorial programs across North Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
