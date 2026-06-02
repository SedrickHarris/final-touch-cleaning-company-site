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
  title: 'Restaurant Cleaning in Las Vegas, NV | Final Touch',
  description:
    'Front-of-house cleaning for Las Vegas restaurants: dining rooms, bar areas, restrooms, and offices. After-hours scheduling. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/industries/restaurant-cleaning/las-vegas`,
  },
  openGraph: {
    title: 'Restaurant Cleaning in Las Vegas, NV | Final Touch Cleaning',
    description:
      'Front-of-house cleaning for Las Vegas restaurants: dining rooms, bar areas, restrooms, and offices. After-hours scheduling. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/industries/restaurant-cleaning/las-vegas`,
  },
};

const faq = [
  {
    q: 'What does restaurant cleaning include in Las Vegas?',
    a: `Restaurant cleaning by Final Touch covers front-of-house areas: dining room floors and surfaces, tables and chairs, booth surfaces, host stand and entry area, waiting area, bar tops and bar-facing surfaces, restrooms, offices, and customer-facing high-touch points throughout. Kitchen and food preparation areas are not within scope. Scope is confirmed per restaurant layout during the initial walkthrough. Call ${SITE.phone.display}.`,
  },
  {
    q: 'What does Final Touch not clean in a Las Vegas restaurant?',
    a: 'Final Touch does not clean commercial kitchens, food preparation areas, or back-of-house production zones. Restaurant cleaning scope covers front-of-house: dining room, bar area, offices, restrooms, entry and waiting areas, and customer-facing surfaces. Kitchen and food prep exclusions are confirmed at the walkthrough and noted in the scope agreement before the program begins.',
  },
  {
    q: 'How often should a Las Vegas restaurant be professionally cleaned?',
    a: "Most Las Vegas restaurants benefit from daily professional cleaning of front-of-house areas, given high customer volumes and extended operating hours. Fast-casual and high-turnover operations may need cleaning between shifts as well as after closing. Final Touch confirms the right cadence during the initial walkthrough based on your restaurant's volume, hours, and layout.",
  },
  {
    q: 'Can Final Touch clean a Las Vegas restaurant after hours?',
    a: 'Yes. After-hours cleaning is standard for Las Vegas restaurant cleaning. Most restaurants prefer cleaning after the last service of the night to avoid disruption to guests and staff. Las Vegas restaurants often run late, so Final Touch confirms your specific close time and cleaning window at the initial walkthrough. Access requirements and any security procedures are addressed at that stage.',
  },
  {
    q: 'What is front of house cleaning for a restaurant?',
    a: 'Front of house cleaning covers the customer-facing areas of a restaurant: dining room floors and surfaces, tables and chairs, booths, bar area, host stand, entry and waiting areas, restrooms, and offices. It does not include kitchen or food preparation areas. Final Touch scopes front-of-house cleaning per restaurant layout during the initial walkthrough rather than applying a standard template to every operation.',
  },
  {
    q: 'Does Final Touch clean bar areas in Las Vegas restaurants?',
    a: `Yes. Bar top surfaces, bar-facing seating areas, and the bar entry zone are part of the front-of-house scope. Bar area cleaning is confirmed during the initial walkthrough along with the rest of the restaurant layout. Call ${SITE.phone.display} or request a free quote to discuss your restaurant.`,
  },
  {
    q: 'Does Final Touch serve fast casual restaurants in Las Vegas?',
    a: `Yes. Final Touch serves Las Vegas restaurants of all formats: full-service dining rooms, fast-casual operations, bars and lounges, and mixed dining formats. Front-of-house scope and cleaning frequency are confirmed per operation during the initial walkthrough. Call ${SITE.phone.display} or request a free quote online.`,
  },
  {
    q: 'How do I get a cleaning quote for my Las Vegas restaurant?',
    a: `Call Final Touch at ${SITE.phone.display} or request a free quote online. ${SITE.owners} conduct the initial walkthrough of your restaurant, confirm front-of-house scope, frequency, and access timing, and quote based on what the job actually requires. No templated rates and no assumptions about your restaurant's layout or operating schedule.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Restaurant Cleaning in Las Vegas, NV',
  serviceType: 'Restaurant Cleaning',
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
      name: 'Restaurant Cleaning in Las Vegas',
      item: `${SITE.url}/industries/restaurant-cleaning/las-vegas`,
    },
  ],
};

// Audience cards (Section 3)
const audienceCards = [
  {
    title: 'Full-service restaurants and dining rooms',
    body: 'Full-service Las Vegas restaurants with dedicated dining rooms, booths, and table service need recurring front-of-house cleaning that maintains a consistent presentation standard for every cover. Dining room floors, tables, chairs, and surfaces need to be customer-ready at every service. Final Touch scopes cleaning around your service schedule, typically after the last cover of the night.',
  },
  {
    title: 'Fast-casual and high-turnover operations',
    body: "Fast-casual Las Vegas restaurants with high daily customer volume may need cleaning between shifts as well as after closing. High-turnover dining formats accumulate floor debris, surface residue, and restroom wear faster than full-service environments. Final Touch confirms the right cleaning frequency during the walkthrough based on your operation's actual volume and hours.",
  },
  {
    title: 'Bars, lounges, and dining-bar hybrids',
    body: 'Las Vegas bars and bar-forward dining concepts have specific front-of-house cleaning needs: bar top surfaces, bar-facing seating, and the transition zones between bar and dining areas. Bar cleaning is part of the front-of-house scope and confirmed per layout at the initial walkthrough.',
  },
  {
    title: 'Multi-location restaurant operators',
    body: 'Restaurant operators with multiple Las Vegas locations need a cleaning partner who applies the same front-of-house standard at every restaurant on its own schedule. Final Touch serves multi-location operators across Las Vegas and Clark County. Contact us to discuss your location count and scheduling requirements.',
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

// Scope exclusions (Section 5), the critical trust section. Front-of-house only;
// kitchen / food prep / back-of-house are out of scope per owner-confirmed scope.
const scopeExclusions = [
  'Commercial kitchen equipment and surfaces',
  'Food preparation areas and prep tables',
  'Back-of-house production zones',
  'Cooking equipment, hoods, and exhaust systems',
  'Any area the restaurant designates as restricted or off-limits',
];

// Restaurant-specific context (Section 6), anti-doorway
const restaurantContextCards = [
  {
    heading: 'Front of house sets the dining experience before the first bite',
    body: 'In a restaurant, the dining room is where the guest experience is formed: the floor underfoot, the table surface, the booth condition, the bar presentation. A guest who notices a sticky table or a dirty floor makes a judgment about the whole operation before the food arrives. Front-of-house cleaning is a daily presentation standard, not a weekly maintenance task. Final Touch scopes it that way.',
  },
  {
    heading: 'Las Vegas restaurants run late: cleaning windows are narrow',
    body: "Las Vegas restaurants often operate until midnight or later, leaving a short window between closing and the next day's prep. A cleaning program that does not account for your actual close time creates problems. Final Touch confirms your specific close time and cleaning window at the walkthrough. After-hours access requirements and any security procedures are addressed at that stage, not discovered on the first visit.",
  },
  {
    heading: 'Owner-led walkthrough, scope built for your restaurant',
    body: `${SITE.owners} conduct every initial walkthrough personally. For a Las Vegas restaurant manager or operator comparing cleaning services, the difference between an owner walking your dining room and confirming scope, hours, and access details versus a remote quote is a program built for your specific restaurant versus a generic commercial template. Scope is confirmed, exclusions are documented, and the program starts with no surprises.`,
  },
];

// Service area chips (Section 7)
const serviceAreaChips = [
  { label: 'Las Vegas, NV', href: '/locations/las-vegas' },
  { label: 'Henderson, NV', href: '/locations/henderson' },
  { label: 'North Las Vegas, NV', href: '/locations/north-las-vegas' },
  { label: 'Clark County, NV', href: '/locations/clark-county' },
  { label: 'Commercial Office Cleaning', href: '/services/commercial-office-cleaning' },
  { label: 'Janitorial Services', href: '/services/janitorial-services' },
  { label: 'Restaurant Cleaning in Henderson', href: '/industries/restaurant-cleaning/henderson' },
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
    name: 'Commercial Office Cleaning in Las Vegas',
    href: '/services/commercial-office-cleaning/las-vegas',
    description:
      'Recurring commercial cleaning for Las Vegas offices and commercial spaces across Clark County.',
    image: commercialOffice?.image,
  },
].filter(Boolean) as {
  name: string;
  href: string;
  description: string;
  image?: { src: string; alt: string };
}[];

export default function RestaurantCleaningLasVegasPage() {
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
        eyebrow="Restaurant Cleaning · Las Vegas, NV"
        heading="Restaurant Cleaning in Las Vegas, NV"
        sub={`Las Vegas has one of the largest and most active restaurant markets in the country. Final Touch provides recurring front-of-house cleaning for Las Vegas restaurants: dining rooms, bar areas, restrooms, offices, and customer-facing areas throughout. Kitchen and food prep areas are excluded from scope. After-hours scheduling. Scope confirmed per restaurant.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/industries/restaurant-cleaning-las-vegas-nv-hero-image.webp',
          alt: 'Restaurant cleaning in Las Vegas, NV by Final Touch.',
        }}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Restaurant cleaning in Las Vegas is a recurring professional cleaning program for
            front-of-house areas: dining rooms, tables and chairs, bar tops, host stand, entry and
            waiting areas, restrooms, and offices.{' '}
            <Link
              href="/services/commercial-office-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              Final Touch commercial cleaning
            </Link>{' '}
            serves Las Vegas restaurants of all formats across Las Vegas and{' '}
            {SITE.serviceArea.county}. Front-of-house scope is confirmed per restaurant and scheduled
            around your operating hours. Kitchen and food preparation areas are excluded. Call{' '}
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
            heading="Las Vegas restaurants of every format and size."
            sub="Las Vegas's restaurant market is one of the largest in the country, spanning every dining format from neighborhood fast-casual to full-service dining rooms."
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
            sub="Front-of-house scope only. Confirmed per restaurant layout at the initial walkthrough."
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
            scope. Every exclusion is confirmed at the initial walkthrough before the program begins.
          </p>
        </div>
      </section>

      {/* 5. What Final Touch does not clean */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Scope exclusions"
            heading="What Final Touch does not clean in a restaurant."
            sub="Clear scope boundaries prevent misunderstandings and protect your operation. Every exclusion confirmed before the program begins."
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
            documented before the first clean. If your restaurant has specific access requirements or
            designated restricted areas, those are part of the scope conversation from day one.
          </p>
        </div>
      </section>

      {/* 6. What makes restaurant cleaning distinct */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Restaurant cleaning in Las Vegas"
            heading="What makes front-of-house restaurant cleaning distinct."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {restaurantContextCards.map(({ heading, body }) => (
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
            heading="Restaurant cleaning across Las Vegas and Clark County."
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
        heading="Restaurant cleaning in Las Vegas: frequently asked questions"
      />

      {/* 10. Final CTA */}
      <CTASection
        heading="Need restaurant cleaning in Las Vegas?"
        sub={`Free quotes for front-of-house restaurant cleaning across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
