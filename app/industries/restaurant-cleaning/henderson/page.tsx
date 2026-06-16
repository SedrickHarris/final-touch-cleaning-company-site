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
  title: { absolute: 'Restaurant Cleaning in Henderson, NV | Final Touch' },
  description:
    'Front-of-house cleaning for Henderson restaurants: dining rooms, bar areas, restrooms, and offices. Green Valley Parkway and citywide. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/industries/restaurant-cleaning/henderson`,
  },
  openGraph: {
    title: 'Restaurant Cleaning in Henderson, NV | Final Touch Cleaning',
    description:
      'Front-of-house cleaning for Henderson restaurants: dining rooms, bar areas, restrooms, and offices. Green Valley Parkway and citywide. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/industries/restaurant-cleaning/henderson`,
  },
};

const faq = [
  {
    q: 'What does restaurant cleaning include in Henderson, NV?',
    a: `Restaurant cleaning by Final Touch in Henderson covers front-of-house areas: dining room floors and surfaces, tables and chairs, booth surfaces, host stand and entry area, waiting area, bar tops and bar-facing surfaces, restrooms, offices, and customer-facing high-touch points throughout. Kitchen and food preparation areas are not within scope. Scope is confirmed per restaurant layout during the initial walkthrough. Call ${SITE.phone.display}.`,
  },
  {
    q: 'What does Final Touch not clean in a Henderson restaurant?',
    a: 'Final Touch does not clean commercial kitchens, food preparation areas, or back-of-house production zones. Restaurant cleaning scope covers front-of-house: dining room, bar area, offices, restrooms, entry and waiting areas, and customer-facing surfaces. Kitchen and food prep exclusions are confirmed at the walkthrough and noted before the program begins.',
  },
  {
    q: 'Can Final Touch clean a Henderson restaurant after hours?',
    a: 'Yes. Henderson restaurants typically operate on more predictable closing hours than Las Vegas restaurants, making after-closing cleaning windows consistent and reliable. Final Touch confirms your specific close time and cleaning window at the initial walkthrough. Access requirements and any security procedures are addressed at that stage.',
  },
  {
    q: 'Does Final Touch serve Henderson restaurants along Green Valley Parkway?',
    a: `Yes. Final Touch serves restaurants and dining establishments along Green Valley Parkway, Sunset Road, and across Henderson's commercial corridors and neighborhood centers. Henderson's restaurant market serves the city's established residential communities. Call ${SITE.phone.display} or request a free quote online.`,
  },
  {
    q: 'How do I get a cleaning quote for my Henderson restaurant?',
    a: `Call Final Touch at ${SITE.phone.display} or request a free quote online. ${SITE.owners} conduct the initial walkthrough of your restaurant, confirm front-of-house scope, frequency, and access timing, and quote based on what the job actually requires. No templated rates and no assumptions about your Henderson restaurant's layout or schedule.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Restaurant Cleaning in Henderson, NV',
  serviceType: 'Restaurant Cleaning',
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
      name: 'Restaurant Cleaning in Henderson',
      item: `${SITE.url}/industries/restaurant-cleaning/henderson`,
    },
  ],
};

// Audience cards (Section 3), Henderson-specific
const audienceCards = [
  {
    title: 'Green Valley Parkway and Sunset Road corridor restaurants',
    body: "Henderson's primary commercial corridor along Green Valley Parkway and Sunset Road includes a range of restaurants and dining establishments serving the surrounding master-planned communities. These are community-serving restaurants with a consistent local customer base who notice when a dining room is reliably clean versus inconsistently maintained.",
  },
  {
    title: 'Neighborhood dining and casual restaurants',
    body: 'Henderson has neighborhood dining establishments positioned throughout the city to serve Anthem, Seven Hills, Inspirada, Cadence, Green Valley Ranch, and similar communities. These casual and family-friendly restaurants need a consistent front-of-house cleaning standard that matches the presentation their regular customers expect.',
  },
  {
    title: 'Bars and bar-forward dining concepts',
    body: 'Henderson bars and dining concepts with prominent bar areas need front-of-house cleaning that covers bar tops, bar-facing seating, and the transition zones between bar and dining areas. Bar area cleaning is part of the front-of-house scope and confirmed per layout at the initial walkthrough.',
  },
  {
    title: 'Multi-location restaurant operators in Henderson',
    body: 'Restaurant operators with multiple Henderson or Clark County locations need a cleaning partner who applies the same front-of-house standard at every restaurant. Final Touch serves multi-location operators with programs scoped per restaurant and coordinated across locations. Contact us to discuss your operation.',
  },
];

// Scope checklist (Section 4), front-of-house only
const scopeChecklist = [
  'Dining room floors: vacuuming, mopping, or hard-floor care',
  'Table surfaces and bases',
  'Chair and booth seating surfaces',
  'Bar tops and bar-facing counter surfaces',
  'Host stand and entry area surfaces',
  'Waiting area seating and surfaces',
  'Customer restrooms: fixtures, tile, mirrors, replenishment setup',
  'Office surfaces and workstation areas',
  'Customer-facing high-touch surfaces: door handles, menus, light switches',
  'Interior glass and window surfaces',
  'Trash removal and liner replacement',
];

// Scope exclusions (Section 5), required trust section. Front-of-house only;
// kitchen / food prep / back-of-house are out of scope per owner-confirmed scope.
const scopeExclusions = [
  'Commercial kitchen equipment and surfaces',
  'Food preparation areas and prep tables',
  'Back-of-house production zones',
  'Cooking equipment, hoods, and exhaust systems',
  'Any area the restaurant designates as restricted or off-limits',
];

// Henderson-specific context (Section 6), anti-doorway
const hendersonContextCards = [
  {
    heading: 'Community dining with a consistent, familiar customer base',
    body: "Henderson restaurants primarily serve residents of established master-planned communities who dine locally and return regularly. These customers have high familiarity with their neighborhood restaurants and notice the difference between a consistently clean dining room and one that varies. A steady front-of-house standard is part of what keeps a Henderson restaurant's regulars coming back.",
  },
  {
    heading: 'Predictable hours make scheduling straightforward',
    body: 'Henderson restaurants typically close earlier and more consistently than Las Vegas restaurants, which often run until midnight or later. This makes after-closing cleaning windows reliable and straightforward to schedule week to week. Final Touch confirms your specific close time at the walkthrough and builds the cleaning program around your actual schedule.',
  },
  {
    heading: 'Owner-led walkthrough, front-of-house scope confirmed',
    body: `${SITE.owners} conduct every initial walkthrough personally. For a Henderson restaurant manager or owner comparing cleaning services, the difference between an owner walking your dining room and confirming scope, exclusions, and access details versus a remote quote is a program that fits your specific restaurant versus a generic commercial template. Exclusions are documented, scope is confirmed, and the program starts with no surprises.`,
  },
];

// Service area chips (Section 7)
const serviceAreaChips = [
  { label: 'Henderson, NV', href: '/locations/henderson' },
  { label: 'Las Vegas, NV', href: '/locations/las-vegas' },
  { label: 'North Las Vegas, NV', href: '/locations/north-las-vegas' },
  { label: 'Clark County, NV', href: '/locations/clark-county' },
  { label: 'Commercial Office Cleaning', href: '/services/commercial-office-cleaning' },
  { label: 'Janitorial Services', href: '/services/janitorial-services' },
  { label: 'Restaurant Cleaning in Las Vegas', href: '/industries/restaurant-cleaning/las-vegas' },
  { label: 'Restaurant Cleaning in North Las Vegas', href: '/industries/restaurant-cleaning/north-las-vegas' },
];

// Related services (Section 8)
const commercialOffice = SERVICES.find((s) => s.slug === 'commercial-office-cleaning');
const janitorial = SERVICES.find((s) => s.slug === 'janitorial-services');

const relatedServiceCards = [
  commercialOffice && {
    name: commercialOffice.name,
    href: commercialOffice.href,
    description: commercialOffice.shortDescription,
    image: commercialOffice.image,
  },
  janitorial && {
    name: janitorial.name,
    href: janitorial.href,
    description: janitorial.shortDescription,
    image: janitorial.image,
  },
  {
    name: 'Commercial Office Cleaning in Henderson',
    href: '/services/commercial-office-cleaning/henderson',
    description:
      'Recurring commercial cleaning for Henderson offices along Green Valley Parkway and across Clark County.',
    image: commercialOffice?.image,
  },
].filter(Boolean) as {
  name: string;
  href: string;
  description: string;
  image?: { src: string; alt: string };
}[];

export default function RestaurantCleaningHendersonPage() {
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
        eyebrow="Restaurant Cleaning · Henderson, NV"
        heading="Restaurant Cleaning in Henderson, NV"
        sub={`Henderson's restaurant market serves an established residential base across Green Valley Parkway, Sunset Road, and neighborhood dining corridors throughout the city. Final Touch provides recurring front-of-house cleaning for Henderson restaurants: dining rooms, bar areas, restrooms, and offices. Kitchen and food prep areas are excluded. After-hours scheduling available.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/industries/restaurant-cleaning-henderson-nv-hero-image.webp',
          alt: 'Restaurant cleaning in Henderson, NV by Final Touch.',
        }}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Restaurant cleaning in Henderson is a recurring professional cleaning program for
            front-of-house areas: dining rooms, tables and chairs, bar tops, host stand, entry and
            waiting areas, restrooms, and offices.{' '}
            <Link
              href="/services/commercial-office-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              Final Touch commercial cleaning
            </Link>{' '}
            serves Henderson restaurants along Green Valley Parkway and across the city&apos;s
            neighborhood dining corridors. Front-of-house scope is confirmed per restaurant and
            scheduled around your hours. Kitchen and food preparation areas are excluded. Call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>{' '}
            to discuss your restaurant.
          </p>
        </div>
      </section>

      {/* 3. Who hires this service */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who we serve"
            heading="Henderson restaurants and dining establishments."
            sub="Henderson's dining market primarily serves an established residential base from the city's master-planned communities."
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
            heading="What restaurant cleaning covers."
            sub="Front-of-house scope only. Confirmed per Henderson restaurant layout at the initial walkthrough."
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
            Kitchen, food preparation areas, and back-of-house production zones are excluded from
            scope. Every exclusion confirmed at the initial walkthrough before the program begins.
          </p>
        </div>
      </section>

      {/* 5. What Final Touch does not clean */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Scope exclusions"
            heading="What Final Touch does not clean in a Henderson restaurant."
            sub="Clear scope boundaries confirmed before the program begins."
          />
          <ul className="mt-8 space-y-3">
            {scopeExclusions.map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-muted mt-0.5 shrink-0">
                  &#8226;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base text-brand-black leading-relaxed">
            Final Touch provides front-of-house restaurant cleaning only. Kitchen and food preparation
            areas require specialized cleaning that is outside the scope of professional
            front-of-house programs. Every scope boundary is confirmed at the initial walkthrough and
            documented before the first clean.
          </p>
        </div>
      </section>

      {/* 6. Henderson-specific context */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Restaurant cleaning in Henderson"
            heading="What shapes Henderson's restaurant cleaning market."
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
            heading="Restaurant cleaning across Henderson and the Las Vegas Valley."
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
        heading="Restaurant cleaning in Henderson: frequently asked questions"
      />

      {/* 10. Final CTA */}
      <CTASection
        heading="Need restaurant cleaning in Henderson?"
        sub={`Free quotes for front-of-house restaurant cleaning across Henderson and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
