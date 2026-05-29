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
  title: 'Janitorial Services in Clark County, NV | Final Touch',
  description:
    'Janitorial services across Clark County, NV. Recurring programs for offices, commercial buildings, and facilities in every city. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/janitorial-services/clark-county`,
  },
  openGraph: {
    title: 'Janitorial Services in Clark County, NV | Final Touch',
    description:
      'Janitorial services across Clark County, NV. Recurring programs for offices, commercial buildings, and facilities in every city. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/janitorial-services/clark-county`,
  },
};

const faq = [
  {
    q: 'What do janitorial services include in Clark County?',
    a: 'Janitorial services cover recurring cleaning of offices, restrooms, lobbies, break rooms, and common areas on a scheduled basis. Scope includes trash removal and liner replacement, floor care, surface wiping, and restroom maintenance. For industrial facilities, scope extends to facility-specific common areas. Program scope and schedule confirmed per building or facility — the same process in every Clark County city.',
  },
  {
    q: 'Does Final Touch provide janitorial programs for businesses with multiple Clark County locations?',
    a: `Yes. Businesses and property management companies with commercial buildings or facilities across multiple Clark County cities can work with Final Touch for all their locations — one janitorial partner, one consistent standard, across the entire county. Call ${SITE.phone.display} to discuss a county-wide arrangement.`,
  },
  {
    q: 'What types of buildings does Final Touch serve for janitorial services in Clark County?',
    a: "Clark County's janitorial client base spans every commercial building type in the Las Vegas Valley: Las Vegas's large commercial office buildings and high-traffic commercial spaces; Henderson's suburban office parks and medical buildings along Green Valley Parkway; North Las Vegas's industrial and warehouse facility common areas; and Boulder City's small historic-downtown businesses. Final Touch serves them all — scope confirmed per building during the walkthrough.",
  },
  {
    q: 'Does Final Touch serve county-wide property managers for janitorial programs?',
    a: `Yes. Property management companies overseeing commercial portfolios across multiple Clark County cities can work with Final Touch for janitorial programs at every managed building. One partner, consistent standard, county-wide. Call ${SITE.phone.display} to discuss.`,
  },
  {
    q: 'How much do janitorial services cost in Clark County?',
    a: `Pricing depends on building or facility size, cleaning frequency, and scope. Contact Final Touch at ${SITE.phone.display} or request a free quote. A walkthrough is scheduled before quoting — same process regardless of which county city the building is in.`,
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
    { '@type': 'ListItem', position: 3, name: 'Janitorial Services', item: `${SITE.url}/services/janitorial-services` },
    { '@type': 'ListItem', position: 4, name: 'Clark County', item: `${SITE.url}/services/janitorial-services/clark-county` },
  ],
};

export default function JanitorialServicesClarkCountyPage() {
  return (
    <>
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Janitorial Services · Clark County, NV"
        heading="Janitorial Services in Clark County, NV"
        sub={`Clark County's commercial buildings range from Las Vegas's large office corridors to Henderson's suburban medical parks to North Las Vegas's industrial facilities to Boulder City's small historic-downtown businesses. Final Touch provides recurring janitorial programs for all of them — county-wide, one standard.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Janitorial services in Clark County are scheduled recurring cleaning programs for
            commercial buildings and facilities — covering lobbies, restrooms, common areas, and
            office suites on a cadence built around your operation.{' '}
            <Link href="/services/janitorial-services" className="text-brand-blue font-semibold hover:underline">
              Final Touch janitorial services
            </Link>{' '}
            serve commercial building owners, property management companies, and businesses
            across every city in the county. Call{' '}
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
            eyebrow="Who hires janitorial services in Clark County"
            heading="Every commercial building type in the Las Vegas Valley — county-wide."
            sub="Clark County's janitorial market spans more commercial facility types than any other county in Nevada."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Multi-location commercial property managers',
                body: 'Property management companies overseeing commercial portfolios across multiple Clark County cities need a single janitorial partner who applies a consistent standard county-wide. Final Touch provides that coverage.',
              },
              {
                title: 'Las Vegas commercial office buildings',
                body: "Las Vegas's large commercial corridors — professional services, healthcare, hospitality-adjacent businesses — generate demand for building-wide janitorial programs with high-frequency cleaning requirements.",
              },
              {
                title: 'Henderson suburban office parks and medical buildings',
                body: "Henderson's Green Valley Parkway corridor and medical office concentration create consistent janitorial demand for suburban office parks and healthcare facilities with professional cleanliness standards.",
              },
              {
                title: 'North Las Vegas industrial and warehouse facilities',
                body: "North Las Vegas's logistics corridor creates industrial-facility janitorial demand — facility offices, break rooms, and common areas within warehouse and distribution complexes operating on multi-shift schedules.",
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
            sub="A janitorial program maintains your Clark County building on a scheduled basis."
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
            Program scope, visit frequency, and access timing confirmed per building. The same
            walkthrough-and-scope process applies in every Clark County city.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Janitorial services across Clark County"
            heading="Why county-wide janitorial coverage matters for Clark County businesses."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'The most varied commercial building types in Nevada',
                body: "Clark County's commercial landscape spans Las Vegas's 24-hour high-traffic commercial environments, Henderson's standard-hours suburban professional offices, North Las Vegas's multi-shift industrial facilities, and Boulder City's small-scale historic downtown businesses. A janitorial partner who serves county-wide can accommodate this full range — different schedules, different building types, different operational requirements.",
              },
              {
                heading: 'County-spanning property management needs one partner',
                body: "Property management companies in Clark County often manage commercial portfolios that cross city boundaries. A janitorial vendor who only serves one city creates a gap in the PM company's coverage. Final Touch provides county-wide janitorial service so PM companies have consistent coverage across every city in their portfolio.",
              },
              {
                heading: 'Same standard, every city',
                body: 'A recurring janitorial program from Final Touch applies the same standard whether the building is a Las Vegas commercial tower, a Henderson medical office park, a North Las Vegas warehouse facility, or a Boulder City storefront. Scope is confirmed per building. The professional standard does not vary by city.',
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

      {/* 7. Janitorial services by city */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brand-black tracking-tight">
            Janitorial services by city
          </h2>
          <p className="mt-3 text-base text-muted">
            Each city in Clark County has its own janitorial character. Find yours below.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              { label: 'Janitorial Services in Las Vegas, NV', href: '/services/janitorial-services/las-vegas' },
              { label: 'Janitorial Services in Henderson, NV', href: '/services/janitorial-services/henderson' },
              { label: 'Janitorial Services in North Las Vegas, NV', href: '/services/janitorial-services/north-las-vegas' },
              { label: 'Janitorial Services in Boulder City, NV', href: '/services/janitorial-services/boulder-city' },
            ].map(({ label, href }) => (
              <li key={href}>
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
        heading="Janitorial services in Clark County — common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/janitorial-services" className="font-semibold text-brand-blue hover:underline">
            ← Janitorial services
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
        heading="Looking for janitorial services anywhere in Clark County?"
        sub={`Free quotes for janitorial programs across all of ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
