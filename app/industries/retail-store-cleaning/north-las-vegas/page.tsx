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
  title: 'Retail Store Cleaning in North Las Vegas, NV | Final Touch',
  description:
    'Professional cleaning for retail stores and commercial corridor businesses in North Las Vegas, NV. After-hours scheduling across Clark County. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/industries/retail-store-cleaning/north-las-vegas`,
  },
  openGraph: {
    title: 'Retail Store Cleaning in North Las Vegas, NV | Final Touch Cleaning',
    description:
      'Professional cleaning for retail stores and commercial corridor businesses in North Las Vegas, NV. After-hours scheduling across Clark County. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/industries/retail-store-cleaning/north-las-vegas`,
  },
};

const faq = [
  {
    q: 'What does retail store cleaning include in North Las Vegas?',
    a: `Retail store cleaning by Final Touch in North Las Vegas covers customer-facing and operational areas: sales floor surfaces, display areas, store entry and transition zones, fitting rooms, customer restrooms, checkout counter and POS area, interior glass and window surfaces, break rooms, and high-touch surfaces throughout. Scope is confirmed per store format during the initial walkthrough. Call ${SITE.phone.display}.`,
  },
  {
    q: 'Does Final Touch serve retail stores along North Las Vegas commercial corridors?',
    a: `Yes. Final Touch serves retail stores along Lamb Boulevard, Craig Road, Cheyenne Avenue, and surrounding North Las Vegas commercial corridors. These corridors serve the city's large residential population with practical, community-serving retail. Scope and schedule are confirmed per location at the initial walkthrough. Call ${SITE.phone.display} to set up a walkthrough.`,
  },
  {
    q: 'Can Final Touch clean North Las Vegas retail stores after hours?',
    a: 'Yes. After-hours scheduling is available for North Las Vegas retail cleaning. NLV retail operates across a range of hours depending on store type and location. Final Touch confirms your specific cleaning window during the initial walkthrough and schedules around your actual store hours.',
  },
  {
    q: 'Does Final Touch serve small and independent retailers in North Las Vegas?',
    a: `Yes. Final Touch serves retailers of all sizes in North Las Vegas, including small independent stores and community-serving businesses along the city's commercial corridors. No minimum store size and no templated rates. Scope and schedule confirmed per store at the initial walkthrough. Call ${SITE.phone.display} or request a free quote online.`,
  },
  {
    q: 'How do I get a cleaning quote for my retail store in North Las Vegas?',
    a: `Call Final Touch at ${SITE.phone.display} or request a free quote online. ${SITE.owners} schedule a walkthrough of your store, confirm scope, cleaning frequency, and access timing, and quote based on your specific floor plan and format. No assumptions about your North Las Vegas store's layout or schedule.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Retail Store Cleaning in North Las Vegas, NV',
  serviceType: 'Retail Store Cleaning',
  provider: {
    '@type': 'Organization',
    name: 'Final Touch Cleaning Company LLC',
    url: SITE.url,
    telephone: '+17024445077',
  },
  areaServed: { '@type': 'City', name: 'North Las Vegas, NV' },
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
      name: 'Retail Store Cleaning in North Las Vegas',
      item: `${SITE.url}/industries/retail-store-cleaning/north-las-vegas`,
    },
  ],
};

// Audience cards (Section 3), North Las Vegas-specific
const audienceCards = [
  {
    title: 'Commercial corridor retail along Lamb, Craig, and Cheyenne',
    body: "Retail stores along Lamb Boulevard, Craig Road, Cheyenne Avenue, and surrounding NLV arterials serve the city's large residential population with practical community needs: pharmacies, beauty supply, electronics, auto parts, and similar stores that see consistent daily customer traffic. These businesses need reliable cleaning on a schedule that fits their hours and budget.",
  },
  {
    title: 'Service-based retail and mixed-use storefronts',
    body: 'North Las Vegas commercial corridors include service-based retailers that combine product sales with service delivery: phone repair, tax preparation, insurance offices, and similar businesses with customer-facing storefronts. These operations need professional cleaning that keeps the customer space presentable without the cost structure of a large retail contract.',
  },
  {
    title: 'Independent small retailers',
    body: "North Las Vegas's large residential base supports independent retailers whose stores are community fixtures. These businesses need consistent, affordable cleaning on a schedule that fits their operating hours. Final Touch serves small independent retailers across NLV commercial corridors with no minimum size requirement.",
  },
  {
    title: 'Strip center and multi-tenant retail properties',
    body: 'North Las Vegas strip centers and multi-tenant retail properties along commercial arterials have tenant cleaning needs across multiple storefronts. Final Touch serves individual tenants and property managers with programs scoped per store and coordinated around center access windows.',
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

// North Las Vegas-specific context (Section 6), anti-doorway
const nlvContextCards = [
  {
    heading: 'Practical community retail with consistent local customer base',
    body: 'North Las Vegas retail serves a large, stable residential population that shops local stores regularly for practical needs. The cleaning standard these stores need is consistent and professional, presentable for customers who visit frequently and notice when a store is reliably clean versus inconsistently maintained. The standard is not premium-positioned, but it is steady and reliable on every visit.',
  },
  {
    heading: 'Variable hours across the NLV retail mix',
    body: "North Las Vegas retail operates across a wider range of hours than Henderson's more standard-hours retail. Some NLV stores run extended evening hours, others keep standard schedules, and the mix varies by corridor and store type. Final Touch confirms your specific cleaning window during the walkthrough and builds the schedule around your actual hours, not a standard template.",
  },
  {
    heading: 'Owner-led walkthrough, scope built for your store',
    body: `${SITE.owners} conduct every initial walkthrough personally. For a North Las Vegas retailer comparing cleaning services, the difference between an owner walking your store and confirming scope, hours, and access details versus a generic quote is a program built for your specific corridor and store format versus one sized for a different market entirely. Scope is confirmed before the first clean.`,
  },
];

// Service area chips (Section 7)
const serviceAreaChips = [
  { label: 'North Las Vegas, NV', href: '/locations/north-las-vegas' },
  { label: 'Las Vegas, NV', href: '/locations/las-vegas' },
  { label: 'Henderson, NV', href: '/locations/henderson' },
  { label: 'Clark County, NV', href: '/locations/clark-county' },
  { label: 'Retail Space Cleaning', href: '/services/retail-space-cleaning' },
  { label: 'Commercial Office Cleaning', href: '/services/commercial-office-cleaning' },
  { label: 'Retail Store Cleaning in Las Vegas', href: '/industries/retail-store-cleaning/las-vegas' },
  { label: 'Retail Store Cleaning in Henderson', href: '/industries/retail-store-cleaning/henderson' },
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
    name: 'Retail Space Cleaning in North Las Vegas',
    href: '/services/retail-space-cleaning/north-las-vegas',
    description:
      'Scheduled retail cleaning for North Las Vegas storefronts and commercial corridor businesses across Clark County.',
    image: retailSpace?.image,
  },
].filter(Boolean) as {
  name: string;
  href: string;
  description: string;
  image?: { src: string; alt: string };
}[];

export default function RetailStoreCleaningNorthLasVegasPage() {
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
        eyebrow="Retail Store Cleaning · North Las Vegas, NV"
        heading="Retail Store Cleaning in North Las Vegas, NV"
        sub={`North Las Vegas commercial corridors serve a large residential population with practical, community-serving retail along Lamb Boulevard, Craig Road, Cheyenne Avenue, and surrounding arterials. Final Touch provides recurring professional cleaning for retail stores across North Las Vegas and ${SITE.serviceArea.county}. Scope confirmed per store. After-hours scheduling available.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/industries/retail-store-cleaning-north-las-vegas-nv-hero-image.webp',
          alt: 'Retail store cleaning in North Las Vegas, NV by Final Touch.',
        }}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Retail store cleaning in North Las Vegas is a recurring professional cleaning program for
            the customer-facing and operational areas of retail stores: sales floors, display areas,
            fitting rooms, customer restrooms, checkout counters, and high-touch surfaces
            throughout.{' '}
            <Link
              href="/services/retail-space-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              Final Touch retail cleaning
            </Link>{' '}
            serves retail stores and commercial corridor businesses along North Las Vegas&apos;s
            arterials and across {SITE.serviceArea.county}. Scope is confirmed per store and scheduled
            around your hours. Call{' '}
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
            heading="Retail stores and commercial corridor businesses in North Las Vegas."
            sub="North Las Vegas retail is working-class and community-serving, serving a large residential population with practical, high-frequency shopping needs."
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
            sub="Scope covers customer-facing and operational areas. Confirmed per North Las Vegas store format at the initial walkthrough."
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
            and hours. No templated rates applied without seeing your North Las Vegas store.
          </p>
        </div>
      </section>

      {/* 5. Brand standards and landlord checklists */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Franchise and tenant requirements"
            heading="Brand cleaning standards and landlord checklists."
            sub="Franchise retailers and strip center tenants often have external cleaning requirements. Final Touch incorporates these at the walkthrough."
          />
          <div className="mt-8 space-y-5 text-base text-brand-black leading-relaxed">
            <p>
              Franchise retail locations in North Las Vegas operate under brand cleaning standards set
              at the corporate level. When a NLV franchise operator brings a brand cleaning
              specification to the walkthrough, Final Touch confirms scope to match those requirements.
              The cleaning program is built around the brand standard, not a generic commercial
              template.
            </p>
            <p>
              Strip center and multi-tenant retail property tenants in North Las Vegas often have
              landlord-required cleaning provisions as part of their lease. Center access windows and
              building management requirements are addressed during scope confirmation at the initial
              walkthrough.
            </p>
            <p>
              If your North Las Vegas retail operation has a brand checklist, a landlord
              specification, or a corporate cleaning standard, bring it to the walkthrough. Scope is
              confirmed against your specific requirements. Call{' '}
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

      {/* 6. North Las Vegas-specific context */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Retail store cleaning in North Las Vegas"
            heading="What shapes North Las Vegas's retail store cleaning market."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {nlvContextCards.map(({ heading, body }) => (
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
            heading="Retail store cleaning across North Las Vegas and Clark County."
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
            heading="Other cleaning services for North Las Vegas businesses."
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
        heading="Retail store cleaning in North Las Vegas: frequently asked questions"
      />

      {/* 10. Final CTA */}
      <CTASection
        heading="Need retail store cleaning in North Las Vegas?"
        sub={`Free quotes for retail store cleaning across North Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
