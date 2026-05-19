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
  title: 'Retail Space Cleaning in Las Vegas, NV | Final Touch',
  description:
    'Retail space cleaning in Las Vegas, NV. Final Touch cleans storefronts, sales floors, and retail interiors. After-hours available. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/retail-space-cleaning/las-vegas`,
  },
  openGraph: {
    title: 'Retail Space Cleaning in Las Vegas, NV | Final Touch',
    description:
      'Retail space cleaning in Las Vegas, NV. Final Touch cleans storefronts, sales floors, and retail interiors. After-hours available. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/retail-space-cleaning/las-vegas`,
  },
};

const faq = [
  {
    q: 'What does retail space cleaning include in Las Vegas?',
    a: 'Retail space cleaning covers sales floor surfaces, entry and transition areas, fitting rooms where applicable, customer restrooms, break room and back-of-house areas, display surfaces, and floor care (vacuuming, mopping, or hard-floor care depending on surface type). Scope is confirmed during a walkthrough based on your store layout, hours, and specific needs.',
  },
  {
    q: 'Can Final Touch clean my Las Vegas store after hours?',
    a: "Yes. After-hours scheduling is standard for retail cleaning in Las Vegas — it keeps the clean from disrupting customers and staff. Las Vegas retail operates across extended hours, and cleaning schedules are built around your store's actual operating window. After-hours availability is confirmed during the walkthrough.",
  },
  {
    q: 'Does Final Touch serve retail tenants in Las Vegas strip malls?',
    a: `Yes. Final Touch serves retail tenants in strip malls, neighborhood shopping centers, and standalone storefronts across Las Vegas and ${SITE.serviceArea.county}. Las Vegas has a high concentration of strip mall retail, and this is one of the most common retail formats we clean. Scope and schedule are confirmed per location.`,
  },
  {
    q: 'Does Final Touch clean multiple retail locations in Las Vegas?',
    a: 'Yes. Final Touch can serve operators managing multiple retail locations across the Las Vegas metro. A consistent cleaning standard across all locations is maintained; the program is set up during an initial walkthrough that covers each location.',
  },
  {
    q: 'How much does retail space cleaning cost in Las Vegas?',
    a: `Pricing depends on store size, frequency, and scope. Contact Final Touch at ${SITE.phone.display} or request a free quote. A walkthrough is scheduled before quoting to review your floor plan, cleaning priorities, and schedule needs.`,
  },
];

// Related services: ordered by relevance for Las Vegas retail page
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
      name: 'Retail Space Cleaning',
      item: `${SITE.url}/services/retail-space-cleaning`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Las Vegas',
      item: `${SITE.url}/services/retail-space-cleaning/las-vegas`,
    },
  ],
};

export default function RetailSpaceCleaningLasVegasPage() {
  return (
    <>
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Retail Space Cleaning · Las Vegas, NV"
        heading="Retail Space Cleaning in Las Vegas, NV"
        sub={`Las Vegas has a high concentration of strip malls, shopping corridors, and mixed-use retail. Final Touch provides scheduled retail space cleaning for storefronts, strip mall tenants, and retail interiors across Las Vegas and ${SITE.serviceArea.county} — including after-hours scheduling.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Retail space cleaning in Las Vegas is a scheduled professional clean for storefronts
            and retail interiors — covering sales floors, customer restrooms, display areas, and
            back-of-house on a program designed around your store&apos;s hours.{' '}
            <Link
              href="/services/retail-space-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              Final Touch retail cleaning
            </Link>{' '}
            serves strip mall tenants, shopping center operators, franchise owners, and independent
            retailers across Las Vegas. After-hours scheduling is available. Call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>{' '}
            to set up a walkthrough.
          </p>
        </div>
      </section>

      {/* 3. Who hires retail space cleaning in Las Vegas */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires retail cleaning in Las Vegas"
            heading="Strip mall tenants, franchise operators, and independent retailers across the city."
            sub="Las Vegas's retail density and strip-mall-heavy commercial landscape create a steady demand for professional retail cleaning."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Strip mall and shopping corridor tenants',
                body: 'Las Vegas has a high concentration of strip malls and neighborhood shopping centers. Retail tenants in these formats need regular cleaning to maintain customer-ready storefronts. After-hours scheduling keeps the clean from overlapping with store hours.',
              },
              {
                title: 'Mixed-use center retailers',
                body: 'Retail tenants in Las Vegas mixed-use developments — combining retail, office, and residential — have specific cleaning needs for customer-facing floors, display areas, and shared entry points.',
              },
              {
                title: 'Franchise operators',
                body: 'Las Vegas has a significant franchise retail presence. Franchise operators managing multiple locations in the metro need a consistent cleaning standard across stores. Final Touch can serve multiple locations on a coordinated schedule.',
              },
              {
                title: 'Boutique and specialty retailers',
                body: 'Independent boutique and specialty stores in Las Vegas value detail-focused cleaning that matches the environment they create for customers. A clean retail floor and organized display area are part of the customer experience.',
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
            heading="What retail space cleaning covers."
            sub="Retail cleaning addresses the customer-facing and operational areas that affect how your store presents."
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
            Scope is confirmed during the initial walkthrough based on your floor plan, store type,
            and hours. Specific cleaning priorities for your retail format are addressed at that stage.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Retail cleaning in the Las Vegas market"
            heading="What shapes retail cleaning demand in Las Vegas."
            sub="Three factors make retail cleaning in Las Vegas distinct from a typical commercial market."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'Strip mall concentration across the city',
                body: 'Las Vegas has a strip-mall-heavy commercial landscape. Neighborhood shopping centers and strip malls are the dominant retail format outside the resort corridor. Tenants in these centers need a cleaning partner who understands the format — shared parking lot entry, adjacent tenant noise during cleaning, and access windows before the center opens.',
              },
              {
                heading: 'After-hours scheduling is the norm',
                body: "Las Vegas retail operates on extended hours, and many stores prefer cleaning after closing to avoid customer disruption. After-hours scheduling is not a special request here — it is the standard approach for Las Vegas retail cleaning, and Final Touch builds programs around your store's actual hours of operation.",
              },
              {
                heading: 'Franchise and multi-location operators',
                body: "Las Vegas's size and retail density make it a common market for franchise operators running multiple locations. A cleaning program that covers multiple stores in the metro — same standard, coordinated schedule — is a practical need for franchise owners and regional operators.",
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

      {/* 7. Related cities for retail space cleaning */}
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
              { label: 'Retail Cleaning in Henderson, NV', href: '/services/retail-space-cleaning/henderson' },
              { label: 'Retail Cleaning in North Las Vegas, NV', href: '/services/retail-space-cleaning/north-las-vegas' },
              { label: 'Retail Cleaning in Boulder City, NV', href: '/services/retail-space-cleaning/boulder-city' },
              { label: 'Retail Cleaning in Clark County, NV', href: '/services/retail-space-cleaning/clark-county' },
            ].map(({ label, href }) => (
              <li key={href}>
                {/* TODO-BATCH-6: link resolves when that city set is built */}
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
        heading="Retail space cleaning in Las Vegas — common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/retail-space-cleaning" className="font-semibold text-brand-blue hover:underline">
            ← Retail space cleaning services
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
        heading="Need retail space cleaning in Las Vegas?"
        sub={`Free quotes for retail cleaning across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
