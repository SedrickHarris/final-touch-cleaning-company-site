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
  title: { absolute: 'Retail Store Cleaning in Henderson, NV | Final Touch' },
  description:
    'Professional cleaning for retail stores and shopping center tenants in Henderson, NV. Green Valley Parkway and citywide. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/industries/retail-store-cleaning/henderson`,
  },
  openGraph: {
    title: 'Retail Store Cleaning in Henderson, NV | Final Touch Cleaning',
    description:
      'Professional cleaning for retail stores and shopping center tenants in Henderson, NV. Green Valley Parkway and citywide. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/industries/retail-store-cleaning/henderson`,
  },
};

const faq = [
  {
    q: 'What does retail store cleaning include in Henderson, NV?',
    a: `Retail store cleaning by Final Touch in Henderson covers customer-facing and operational areas: sales floor surfaces, display areas, store entry and transition zones, fitting rooms, customer restrooms, checkout counter and POS area, interior glass and window surfaces, break rooms, and high-touch surfaces throughout. Scope is confirmed per store format during the initial walkthrough. Call ${SITE.phone.display}.`,
  },
  {
    q: 'Does Final Touch serve Henderson neighborhood shopping center tenants?',
    a: `Yes. Final Touch serves retail tenants in Henderson's neighborhood shopping centers and strip retail corridors, including those along Green Valley Parkway and Sunset Road serving Henderson's master-planned communities. Scope and schedule are confirmed per location at the initial walkthrough. Call ${SITE.phone.display} to set up a walkthrough.`,
  },
  {
    q: 'Can Final Touch clean Henderson retail stores after hours?',
    a: 'Yes. Henderson retail generally operates on predictable standard hours, making after-closing cleaning windows consistent and reliable week to week. Final Touch schedules cleaning around your specific store hours. Access timing and any center-specific entry requirements are confirmed at the initial walkthrough.',
  },
  {
    q: 'Does Final Touch serve franchise retail locations in Henderson?',
    a: `Yes. Final Touch serves franchise retail operators in Henderson, including locations with brand cleaning standards or landlord-required checklists. Those requirements are incorporated at the walkthrough. Henderson's community-serving retail base includes a range of franchise and independent retail formats. Call ${SITE.phone.display} or request a free quote online.`,
  },
  {
    q: 'How do I get a cleaning quote for my retail store in Henderson?',
    a: `Call Final Touch at ${SITE.phone.display} or request a free quote online. ${SITE.owners} schedule a walkthrough of your store, confirm scope, cleaning frequency, and access timing, and quote based on your specific floor plan and format. No templated rates and no assumptions about your Henderson store's layout or schedule.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Retail Store Cleaning in Henderson, NV',
  serviceType: 'Retail Store Cleaning',
  provider: {
    '@type': 'Organization',
    name: 'Final Touch Cleaning Company LLC',
    url: SITE.url,
    telephone: '+17024445077',
  },
  areaServed: { '@type': 'City', name: 'Henderson, NV' },
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
    { '@type': 'ListItem', position: 2, name: 'Industries', item: `${SITE.url}/industries` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Retail Store Cleaning in Henderson',
      item: `${SITE.url}/industries/retail-store-cleaning/henderson`,
    },
  ],
};

// Audience cards (Section 3), Henderson-specific
const audienceCards = [
  {
    title: 'Green Valley Parkway and Sunset Road corridor retailers',
    body: "Henderson's primary retail corridor along Green Valley Parkway and Sunset Road concentrates a range of community-serving retail: fitness, specialty food, medical-adjacent retail, services, and similar businesses serving the surrounding master-planned communities. Tenants in this corridor need consistent cleaning that matches the standards of their established customer base.",
  },
  {
    title: 'Neighborhood shopping center tenants',
    body: 'Henderson has neighborhood shopping centers positioned at key intersections to serve Anthem, Seven Hills, Inspirada, Cadence, Green Valley Ranch, and similar communities. These smaller centers serve a loyal residential customer base with high familiarity with every tenant. The cleaning standard expected here matches what the surrounding community expects.',
  },
  {
    title: 'Independent boutique and specialty retailers',
    body: "Henderson's established communities support independent specialty retailers whose customer environment is part of their brand. Display fixtures, glass cases, and sales floor presentation need a consistent standard on every visit. Final Touch scopes retail cleaning around your specific store format and display configuration.",
  },
  {
    title: 'Franchise retail operators in Henderson',
    body: 'Franchise locations in Henderson operate under brand cleaning standards or landlord-required specifications. Final Touch incorporates franchise brand checklists and shopping center tenant requirements at the initial walkthrough. Scope is confirmed to match your brand standard and any lease requirements.',
  },
];

// Scope checklist (Section 4), retail-specific
const scopeChecklist = [
  'Sales floor surfaces and display areas',
  'Display cases, shelving fixtures, and product surfaces',
  'Store entry and transition zones',
  'Fitting rooms and dressing areas',
  'Customer restrooms',
  'Checkout counter and POS area surfaces',
  'Interior glass: windows, display cases, partition glass',
  'Break room and back-of-house areas',
  'High-touch surfaces: door handles, light switches, counter edges',
  'Floor care: vacuuming, mopping, or hard-floor maintenance',
  'Trash removal and liner replacement',
  'Storage and receiving areas (scope confirmed per store)',
];

// Henderson-specific context (Section 6), anti-doorway
const hendersonContextCards = [
  {
    heading: 'Community-serving retail with high customer familiarity',
    body: 'Henderson retail primarily serves an established residential customer base with high familiarity with local stores. Customers in master-planned communities shop the same centers repeatedly and notice when a store is consistently clean versus occasionally clean. The bar for Henderson retail presentation is set by a loyal, familiar customer base, not a tourist or one-time visitor.',
  },
  {
    heading: 'Predictable hours mean reliable cleaning windows',
    body: 'Henderson retail operates on more predictable standard hours than Las Vegas retail, which often runs late evenings and extended nights. Most Henderson stores close at consistent times, making after-closing cleaning windows reliable week to week. This simplifies scheduling and access compared to the more variable Las Vegas retail environment.',
  },
  {
    heading: 'Owner-led walkthrough, scope built for your store',
    body: `${SITE.owners} conduct every initial walkthrough personally. For a Henderson retail store manager or franchise operator comparing cleaning services, the difference between an owner walking your store and confirming scope, brand requirements, and access details versus a remote quote is a program built for your specific store versus one that assumes you are like every other retail tenant in any city. Scope is confirmed before the first clean.`,
  },
];

// Service area chips (Section 7)
const serviceAreaChips = [
  { label: 'Henderson, NV', href: '/locations/henderson' },
  { label: 'Las Vegas, NV', href: '/locations/las-vegas' },
  { label: 'North Las Vegas, NV', href: '/locations/north-las-vegas' },
  { label: 'Clark County, NV', href: '/locations/clark-county' },
  { label: 'Retail Space Cleaning', href: '/services/retail-space-cleaning' },
  { label: 'Commercial Office Cleaning', href: '/services/commercial-office-cleaning' },
  { label: 'Retail Store Cleaning in Las Vegas', href: '/industries/retail-store-cleaning/las-vegas' },
  { label: 'Retail Store Cleaning in North Las Vegas', href: '/industries/retail-store-cleaning/north-las-vegas' },
];

// Related services (Section 8)
const retailSpace = SERVICES.find((s) => s.slug === 'retail-space-cleaning');
const commercialOffice = SERVICES.find((s) => s.slug === 'commercial-office-cleaning');

const relatedServiceCards = [
  retailSpace && {
    name: retailSpace.name,
    href: retailSpace.href,
    description: retailSpace.shortDescription,
    image: retailSpace.image,
  },
  commercialOffice && {
    name: commercialOffice.name,
    href: commercialOffice.href,
    description: commercialOffice.shortDescription,
    image: commercialOffice.image,
  },
  {
    name: 'Retail Space Cleaning in Henderson',
    href: '/services/retail-space-cleaning/henderson',
    description:
      'Scheduled retail cleaning for Henderson storefronts and shopping center tenants across Clark County.',
    image: retailSpace?.image,
  },
].filter(Boolean) as {
  name: string;
  href: string;
  description: string;
  image?: { src: string; alt: string };
}[];

export default function RetailStoreCleaningHendersonPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* 1. Hero */}
      <HeroSection
        eyebrow="Retail Store Cleaning · Henderson, NV"
        heading="Retail Store Cleaning in Henderson, NV"
        sub={`Henderson's retail is community-serving and neighborhood-scale: shopping centers along Green Valley Parkway and Sunset Road, neighborhood strip centers adjacent to master-planned communities, and independent specialty retail throughout the city. Final Touch provides recurring professional cleaning for retail stores across Henderson and ${SITE.serviceArea.county}. Scope confirmed per store. After-hours scheduling available.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/industries/retail-store-cleaning-henderson-nv-hero-image.webp',
          alt: 'Retail store cleaning in Henderson, NV by Final Touch.',
        }}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Retail store cleaning in Henderson is a recurring professional cleaning program for the
            customer-facing and operational areas of retail stores: sales floors, display areas,
            fitting rooms, customer restrooms, checkout counters, and high-touch surfaces
            throughout.{' '}
            <Link
              href="/services/retail-space-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              Final Touch retail cleaning
            </Link>{' '}
            serves Henderson neighborhood shopping center tenants, Green Valley Parkway corridor
            retailers, boutiques, and independent specialty stores across the city. Scope is confirmed
            per store and scheduled around your hours. Call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>{' '}
            to discuss your store.
          </p>
        </div>
      </section>

      {/* 3. Who hires this service */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who we serve"
            heading="Retail stores and tenants across Henderson."
            sub="Henderson retail is primarily community-serving, stores that established residential communities use regularly."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {audienceCards.map((item) => (
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

      {/* 4. What is included */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Scope"
            heading="What retail store cleaning covers."
            sub="Scope covers customer-facing and operational areas. Confirmed per Henderson store format at the initial walkthrough."
          />
          <ul className="mt-8 space-y-3">
            {scopeChecklist.map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">
                  &#10003;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Scope is confirmed during the initial walkthrough based on your store format, floor plan,
            and hours. Brand cleaning standards or landlord checklists are incorporated at that stage.
          </p>
        </div>
      </section>

      {/* 5. Brand standards and landlord checklists */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Franchise and tenant requirements"
            heading="Brand cleaning standards and landlord checklists."
            sub="Franchise retailers and shopping center tenants often have external cleaning requirements. Final Touch incorporates these at the walkthrough."
          />
          <div className="mt-8 space-y-5 text-base text-brand-black leading-relaxed">
            <p>
              Franchise retail locations in Henderson frequently operate under brand cleaning
              standards set at the corporate level. These standards specify cleaning frequency, scope
              items, and sometimes product restrictions. When a Henderson franchise operator brings a
              brand cleaning specification to the walkthrough, Final Touch confirms scope to match
              those requirements. The cleaning program is built around the brand standard, not a
              generic commercial template.
            </p>
            <p>
              Henderson shopping center tenants often have landlord-required cleaning provisions as
              part of their lease. The neighborhood shopping center format dominant in Henderson,
              smaller centers serving master-planned communities, typically has building management
              requirements around tenant cleaning schedules and access. Final Touch addresses these
              provisions during scope confirmation.
            </p>
            <p>
              If your Henderson retail operation has a brand checklist, a landlord specification, or a
              corporate cleaning standard, bring it to the walkthrough. Scope is confirmed against your
              specific requirements. Call{' '}
              <a
                href={SITE.phone.href}
                className="text-brand-blue font-semibold hover:underline tabular-nums"
              >
                {SITE.phone.display}
              </a>{' '}
              to schedule a walkthrough.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Henderson-specific context */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Retail store cleaning in Henderson"
            heading="What shapes Henderson's retail store cleaning market."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {hendersonContextCards.map(({ heading, body }) => (
              <div
                key={heading}
                className="rounded-[14px] border border-border-subtle bg-light-gray p-6"
              >
                <h3 className="font-display text-lg font-semibold text-brand-black">{heading}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Service area chips */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeader
            eyebrow="Service area"
            heading="Retail store cleaning across Henderson and the Las Vegas Valley."
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {serviceAreaChips.map(({ label, href }) => (
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

      {/* 8. Related services */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Related services"
            heading="Other cleaning services for Henderson businesses."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {relatedServiceCards.map((card) => (
              <li key={card.href} className="h-full">
                <ServiceCard
                  href={card.href}
                  name={card.name}
                  description={card.description}
                  image={card.image}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. FAQ */}
      <FAQSection
        items={faq}
        heading="Retail store cleaning in Henderson: frequently asked questions"
      />

      {/* 10. Final CTA */}
      <CTASection
        heading="Need retail store cleaning in Henderson?"
        sub={`Free quotes for retail store cleaning across Henderson and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
