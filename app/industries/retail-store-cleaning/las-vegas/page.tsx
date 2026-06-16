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
  title: { absolute: 'Retail Store Cleaning in Las Vegas, NV | Final Touch' },
  description:
    'Professional cleaning for retail stores, boutiques, and franchise locations in Las Vegas, NV. After-hours scheduling. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/industries/retail-store-cleaning/las-vegas`,
  },
  openGraph: {
    title: 'Retail Store Cleaning in Las Vegas, NV | Final Touch Cleaning',
    description:
      'Professional cleaning for retail stores, boutiques, and franchise locations in Las Vegas, NV. After-hours scheduling. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/industries/retail-store-cleaning/las-vegas`,
  },
};

const faq = [
  {
    q: 'What does retail store cleaning include in Las Vegas?',
    a: `Retail store cleaning by Final Touch covers the customer-facing and operational areas of your store: sales floor surfaces, display areas, store entry and transition zones, fitting rooms, customer restrooms, checkout counter and POS area, interior glass and window surfaces, break rooms, and high-touch surfaces throughout. Scope is confirmed per store format during the initial walkthrough. Call ${SITE.phone.display}.`,
  },
  {
    q: 'What areas of a Las Vegas retail store does Final Touch clean?',
    a: 'Final Touch cleans customer-facing and operational areas: sales floors, display cases and shelving, fitting rooms, customer restrooms, checkout counters, entry and transition areas, interior glass, and break rooms. Storage room and receiving area scope is confirmed per store during the walkthrough. Scope is built around your floor plan, not a generic retail template.',
  },
  {
    q: 'Does Final Touch clean retail stores after hours in Las Vegas?',
    a: 'Yes. After-hours scheduling is standard for Las Vegas retail cleaning. Most stores prefer cleaning after closing to avoid disruption to customers and staff. Las Vegas retail often runs extended evening and late-night hours. Final Touch confirms your specific cleaning window during the initial walkthrough and schedules around your actual store hours.',
  },
  {
    q: 'How often should a retail store be cleaned in Las Vegas?',
    a: 'Most Las Vegas retail stores benefit from nightly or every-other-night professional cleaning, depending on foot traffic, store format, and hours. High-traffic Las Vegas retail with heavy daily customer volume often warrants daily service. Final Touch confirms the right cadence during the initial walkthrough based on your store type and schedule.',
  },
  {
    q: 'What makes retail store cleaning different from office cleaning?',
    a: 'Retail stores have customer-facing sales floors, display fixtures, and fitting rooms that require a different approach than an office. The presentation standard for a retail store is set by every customer who walks in, not just scheduled appointments. Display surfaces, glass cases, and entry areas need to be spotless at opening time, every day. Final Touch scopes retail cleaning for your store format, not a generic commercial checklist.',
  },
  {
    q: 'Does Final Touch clean franchise retail locations in Las Vegas?',
    a: `Yes. Final Touch serves franchise retail operators in Las Vegas, including multi-location operators across ${SITE.serviceArea.county}. Franchise locations with brand cleanliness standards or landlord-required cleaning checklists can provide those requirements at the time of the walkthrough. Scope is confirmed to match your brand standard. Call ${SITE.phone.display} or request a free quote online.`,
  },
  {
    q: 'Can Final Touch clean multiple retail locations in Las Vegas?',
    a: `Yes. Final Touch serves retail operators with multiple locations across Las Vegas and ${SITE.serviceArea.county}. Multi-location programs apply the same scope and standard at every store. Contact Final Touch to discuss your location count, city spread, and scheduling requirements. Call ${SITE.phone.display} or request a free quote online.`,
  },
  {
    q: 'How do I get a cleaning quote for my retail store in Las Vegas?',
    a: `Call Final Touch at ${SITE.phone.display} or request a free quote online. ${SITE.owners} schedule a walkthrough of your store, confirm scope, cleaning frequency, and access timing, and quote based on your specific floor plan and format. No templated rates and no assumptions about your store's layout or schedule.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Retail Store Cleaning in Las Vegas, NV',
  serviceType: 'Retail Store Cleaning',
  provider: {
    '@type': 'Organization',
    name: 'Final Touch Cleaning Company LLC',
    url: SITE.url,
    telephone: '+17024445077',
  },
  areaServed: { '@type': 'City', name: 'Las Vegas, NV' },
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
      name: 'Retail Store Cleaning in Las Vegas',
      item: `${SITE.url}/industries/retail-store-cleaning/las-vegas`,
    },
  ],
};

// Audience cards (Section 3)
const audienceCards = [
  {
    title: 'Franchise retail operators',
    body: 'Franchise locations in Las Vegas have brand cleanliness standards that apply across every location in the system. Franchise operators need a cleaning partner who can work to those standards consistently without active supervision on every visit. Final Touch confirms franchise-specific cleaning requirements or brand checklists at the initial walkthrough and scopes the program accordingly.',
  },
  {
    title: 'Multi-location retail operators',
    body: 'Retail operators with multiple stores across Las Vegas and Clark County need a cleaning partner who applies the same standard at every location. Final Touch serves multi-location operators with programs that cover each store on its own schedule and scope, without requiring separate vendor relationships for each city.',
  },
  {
    title: 'Boutique, specialty, and independent retailers',
    body: 'Independent Las Vegas retailers, including boutiques, specialty stores, showrooms, and gallery-format retail, have customer environments where cleanliness is part of the brand experience. Display fixtures, glass cases, and sales floor presentation need a consistent standard on every visit. Final Touch scopes cleaning around your specific store format and display configuration.',
  },
  {
    title: 'Shopping center and strip mall tenants',
    body: 'Retail tenants in Las Vegas neighborhood shopping centers and strip malls often have landlord-required cleaning standards or shared-facility access considerations. Final Touch is familiar with the shopping center tenant format: center-access windows, adjacent tenant considerations, and landlord checklist requirements confirmed at the walkthrough.',
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

// Retail-specific context (Section 6), anti-doorway
const retailContextCards = [
  {
    heading: 'Sales floors and display fixtures are the customer experience',
    body: "A retail store's cleanliness is visible to every customer who walks in. The sales floor, display fixtures, glass cases, and entry area set the shopping experience before the customer interacts with any product or staff member. A retail cleaning standard is different from an office cleaning standard: the bar is set by every customer visit, not a scheduled meeting. Final Touch scopes retail cleaning around your floor plan and display configuration specifically.",
  },
  {
    heading: 'After-hours windows: closing time to pre-open',
    body: 'Las Vegas retail often runs later than retail in other markets. Stores in strip malls and shopping corridors frequently close at 9 PM or later, leaving a narrower window before the center opens the next morning. Final Touch works within your specific window: closing time to whenever your store needs to be ready for opening. Access timing and any center-specific entry requirements are confirmed at the walkthrough.',
  },
  {
    heading: 'Owner-led walkthrough, scope built for your store',
    body: `${SITE.owners} conduct every initial walkthrough personally. For a retail store manager or franchise operator comparing cleaning services, the difference between an owner walking your store and confirming scope, brand requirements, and access details versus a remote quote is a program built for your specific store versus one that assumes you are like every other retail tenant. Scope is confirmed before the first clean.`,
  },
];

// Service area chips (Section 7)
const serviceAreaChips = [
  { label: 'Las Vegas, NV', href: '/locations/las-vegas' },
  { label: 'Henderson, NV', href: '/locations/henderson' },
  { label: 'North Las Vegas, NV', href: '/locations/north-las-vegas' },
  { label: 'Clark County, NV', href: '/locations/clark-county' },
  { label: 'Retail Space Cleaning', href: '/services/retail-space-cleaning' },
  { label: 'Commercial Office Cleaning', href: '/services/commercial-office-cleaning' },
  { label: 'Retail Store Cleaning in Henderson', href: '/industries/retail-store-cleaning/henderson' },
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
    name: 'Retail Space Cleaning in Las Vegas',
    href: '/services/retail-space-cleaning/las-vegas',
    description:
      'Scheduled retail cleaning for Las Vegas storefronts and retail interiors across Clark County.',
    image: retailSpace?.image,
  },
].filter(Boolean) as {
  name: string;
  href: string;
  description: string;
  image?: { src: string; alt: string };
}[];

export default function RetailStoreCleaningLasVegasPage() {
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
        eyebrow="Retail Store Cleaning · Las Vegas, NV"
        heading="Retail Store Cleaning in Las Vegas, NV"
        sub={`Las Vegas has a large and diverse retail market: neighborhood strip malls serving a metro population, boutiques and specialty stores, franchise locations across the city, and corridor retail from Summerlin to the Paradise corridor. Final Touch provides recurring professional cleaning for retail stores across Las Vegas and ${SITE.serviceArea.county}. After-hours scheduling. Scope confirmed per store.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/industries/retail-store-cleaning-las-vegas-nv-hero-image.webp',
          alt: 'Retail store cleaning in Las Vegas, NV by Final Touch.',
        }}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Retail store cleaning in Las Vegas is a recurring professional cleaning program for the
            customer-facing and operational areas of retail stores: sales floors, display areas,
            fitting rooms, customer restrooms, checkout counters, and high-touch surfaces
            throughout.{' '}
            <Link
              href="/services/retail-space-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              Final Touch retail cleaning
            </Link>{' '}
            serves retail stores, boutiques, franchise locations, and multi-location operators across
            Las Vegas and {SITE.serviceArea.county}. Scope is confirmed per store and scheduled around
            your hours. Call{' '}
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
            heading="Retail stores and retail operators across Las Vegas."
            sub="Las Vegas's retail market spans every format from neighborhood strip malls to franchise corridors and specialty boutiques."
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
            sub="Scope covers customer-facing and operational areas of your Las Vegas store. Confirmed per store format at the initial walkthrough."
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

      {/* 5. Brand standards and landlord checklists, retail-specific differentiator */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Franchise and tenant requirements"
            heading="Brand cleaning standards and landlord checklists."
            sub="Franchise retailers and shopping center tenants often have external cleaning requirements. Final Touch incorporates these at the walkthrough."
          />
          <div className="mt-8 space-y-5 text-base text-brand-black leading-relaxed">
            <p>
              Franchise retail locations frequently operate under brand cleaning standards set at the
              corporate level. These standards specify cleaning frequency, scope items, and sometimes
              product restrictions. When a Las Vegas franchise operator brings a brand cleaning
              specification to the walkthrough, Final Touch confirms scope to match those
              requirements. The cleaning program is built around the brand standard, not a generic
              commercial template.
            </p>
            <p>
              Shopping center tenants in Las Vegas often have landlord-required cleaning provisions as
              part of their lease. These may specify minimum cleaning frequency, common area
              maintenance responsibilities, or access requirements. Final Touch is familiar with the
              Las Vegas shopping center tenant format and addresses lease cleaning provisions during
              scope confirmation.
            </p>
            <p>
              If your retail operation has a brand checklist, a landlord specification, or a corporate
              cleaning standard, bring it to the walkthrough. Scope is confirmed against your specific
              requirements, not assumed from a standard retail cleaning template. Call{' '}
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

      {/* 6. What makes retail cleaning distinct */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Retail cleaning in Las Vegas"
            heading="What makes retail store cleaning distinct from standard commercial cleaning."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {retailContextCards.map(({ heading, body }) => (
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
            heading="Retail store cleaning across Las Vegas and the Las Vegas Valley."
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
            heading="Other cleaning services for Las Vegas businesses."
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
        heading="Retail store cleaning in Las Vegas: frequently asked questions"
      />

      {/* 10. Final CTA */}
      <CTASection
        heading="Need retail store cleaning in Las Vegas?"
        sub={`Free quotes for retail store cleaning across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
