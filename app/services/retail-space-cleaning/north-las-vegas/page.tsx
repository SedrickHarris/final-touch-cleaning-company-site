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
  title: 'Retail Space Cleaning in North Las Vegas, NV',
  description:
    'Retail space cleaning in North Las Vegas, NV. Final Touch serves storefronts, restaurants, and retail corridors citywide. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/retail-space-cleaning/north-las-vegas`,
  },
  openGraph: {
    title: 'Retail Space Cleaning in North Las Vegas, NV | Final Touch',
    description:
      'Retail space cleaning in North Las Vegas, NV. Final Touch serves storefronts, restaurants, and retail corridors citywide. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/retail-space-cleaning/north-las-vegas`,
  },
};

const faq = [
  {
    q: 'What does retail space cleaning include in North Las Vegas?',
    a: 'Retail space cleaning covers sales floor surfaces, entry and transition areas, fitting rooms where applicable, customer restrooms, break room and back-of-house areas, display surfaces, and floor care. For food service and restaurant retail, front-of-house and dining area scope is confirmed during the walkthrough. Scope confirmed per location.',
  },
  {
    q: 'Does Final Touch serve retail tenants in North Las Vegas?',
    a: `Yes. Final Touch serves retail tenants along North Las Vegas commercial corridors: strip retail, standalone storefronts, and shopping centers citywide. Scope and schedule confirmed per location. Call ${SITE.phone.display} to set up a walkthrough.`,
  },
  {
    q: 'Can Final Touch clean North Las Vegas stores after hours?',
    a: "Yes. After-hours scheduling is available for North Las Vegas retail cleaning. NLV retail operates across a range of hours. Some businesses run extended evening hours, others close earlier. Cleaning windows are confirmed around your store's actual hours during the walkthrough.",
  },
  {
    q: 'Does Final Touch serve restaurants and food service businesses in North Las Vegas?',
    a: 'Yes. North Las Vegas commercial corridors have a significant restaurant and fast-casual presence. Final Touch serves food service retail cleaning: front-of-house dining areas, customer restrooms, and common areas. Food service scope is confirmed during the walkthrough based on your specific operation.',
  },
  {
    q: 'How much does retail space cleaning cost in North Las Vegas?',
    a: `Pricing depends on store size, frequency, and scope. Contact Final Touch at ${SITE.phone.display} or request a free quote. A walkthrough is scheduled before quoting.`,
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
  { label: 'Retail Space Cleaning', href: '/services/retail-space-cleaning' },
  { label: 'North Las Vegas' },
];

export default function RetailSpaceCleaningNorthLasVegasPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Retail Space Cleaning · North Las Vegas, NV"
        heading="Retail Space Cleaning in North Las Vegas, NV"
        sub={`North Las Vegas commercial corridors serve a large, working-class residential population with a mix of retail, restaurants, auto services, and community businesses. Final Touch provides scheduled retail space cleaning for storefronts and retail interiors across North Las Vegas and ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Retail space cleaning in North Las Vegas is a scheduled professional clean for
            storefronts and retail interiors, covering sales floors, customer restrooms, display
            areas, and back-of-house on a program built around your store&apos;s hours.{' '}
            <Link href="/services/retail-space-cleaning" className="text-brand-blue font-semibold hover:underline">
              Final Touch retail cleaning
            </Link>{' '}
            serves North Las Vegas commercial corridor retailers, restaurants, service-based
            businesses, and independent stores across the city. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to set up a walkthrough.
          </p>
        </div>
      </section>

      {/* 3. Who hires */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires retail cleaning in North Las Vegas"
            heading="Commercial corridor retailers, restaurants, and community-serving businesses."
            sub="NLV retail is working-class and community-serving, a distinct character from Henderson's neighborhood centers or Las Vegas's strip-mall franchise landscape."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Commercial corridor retail',
                body: "Businesses along Lamb Boulevard, Craig Road, Cheyenne Avenue, and surrounding NLV arterials serve the city's large residential population. These practical, community-serving stores (auto parts, beauty supply, dollar stores, pharmacies) need consistent retail cleaning on a practical schedule.",
              },
              {
                title: 'Restaurant and food service operators',
                body: 'North Las Vegas commercial corridors have a significant restaurant and fast-casual presence. Food service environments have specific cleaning needs for front-of-house dining areas, customer restrooms, and high-touch surfaces, all confirmed during the walkthrough.',
              },
              {
                title: 'Service-based retailers',
                body: 'Auto services, phone repair, tax preparation offices, and similar businesses that combine retail with service delivery need customer-facing spaces kept consistently clean to maintain a professional environment.',
              },
              {
                title: 'Independent small retailers',
                body: "North Las Vegas's large residential base supports independent retailers who need consistent, affordable retail cleaning. These businesses are the backbone of NLV commercial corridors and need a cleaning partner who works around their schedule.",
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
            sub="Retail cleaning keeps your North Las Vegas store customer-ready on a consistent schedule."
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
            Scope confirmed during the walkthrough. Restaurant and food service scope is confirmed
            separately based on your specific operation and hours.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Retail cleaning in North Las Vegas"
            heading="What defines NLV's retail cleaning market."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'Working-class community retail, not destination retail',
                body: "North Las Vegas retail is primarily community-serving, businesses that the city's large residential population uses regularly for practical needs. Unlike Las Vegas Strip-adjacent destination retail or Henderson's community-serving neighborhood centers for master-planned communities, NLV retail serves a working-class base with high-frequency, practical shopping patterns. The cleaning standard needed is consistent and professional, not premium-positioned.",
              },
              {
                heading: 'Restaurant presence along commercial corridors',
                body: "North Las Vegas commercial corridors have a significant restaurant and fast-casual presence that distinguishes them from Henderson's more professional-services-oriented commercial strips. Restaurants and food service businesses have specific retail cleaning needs: front-of-house dining areas, customer restrooms with high daily use, and prep-adjacent spaces that require consistent maintenance. This food service segment is a notable part of NLV retail cleaning demand.",
              },
              {
                heading: 'Variable operating hours',
                body: "NLV retail operates across a wider range of hours than Henderson's standard-hours retail. Some businesses run extended evenings, others keep standard hours, and food service often runs later. Retail cleaning schedules in North Las Vegas need to flex around this variety. Final Touch confirms cleaning windows during the walkthrough based on your store's actual schedule.",
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
              { label: 'Retail Cleaning in Henderson, NV', href: '/services/retail-space-cleaning/henderson' },
              { label: 'Retail Cleaning in Boulder City, NV', href: '/services/retail-space-cleaning/boulder-city' },
              { label: 'Retail Cleaning in Clark County, NV', href: '/services/retail-space-cleaning/clark-county' },
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
        heading="Retail space cleaning in North Las Vegas: common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/retail-space-cleaning" className="font-semibold text-brand-blue hover:underline">
            ← Retail space cleaning services
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
        heading="Need retail space cleaning in North Las Vegas?"
        sub={`Free quotes for retail cleaning across North Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
