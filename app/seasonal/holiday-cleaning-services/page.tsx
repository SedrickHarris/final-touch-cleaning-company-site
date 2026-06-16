import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import SectionHeader from '@/components/shared/SectionHeader';
import Breadcrumb from '@/components/shared/Breadcrumb';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'Holiday Cleaning Services in Las Vegas, NV',
  description: `Holiday cleaning services Las Vegas — commercial properties, retail stores, offices, and event spaces prepped for the holiday season. Call ${SITE.phone.display}.`,
  alternates: {
    canonical: '/seasonal/holiday-cleaning-services',
  },
  openGraph: {
    title: 'Holiday Cleaning Services in Las Vegas, NV | Final Touch',
    description: `Holiday cleaning services Las Vegas — commercial properties, retail stores, offices, and event spaces prepped for the holiday season. Call ${SITE.phone.display}.`,
    type: 'website',
    url: `${SITE.url}/seasonal/holiday-cleaning-services`,
  },
};

const faq = [
  {
    q: 'What does holiday cleaning cover for a Las Vegas commercial property?',
    a: `Holiday cleaning for a Las Vegas commercial property covers the preparation work needed before the high-traffic holiday period: customer-facing surfaces, entry areas, restrooms, common areas, display fixtures, and any areas that receive elevated foot traffic during November and December. Scope is confirmed per property during the walkthrough. Call ${SITE.phone.display} to discuss your space.`,
  },
  {
    q: 'When should I schedule holiday cleaning for my Las Vegas business?',
    a: 'For most Las Vegas commercial properties, holiday cleaning should be scheduled in October or early November — before the holiday shopping and event season begins in earnest. Properties that host events or see strong holiday foot traffic benefit from a pre-season clean that sets a baseline before heavy use. Post-holiday cleanup can be scheduled for January.',
  },
  {
    q: 'Does Final Touch provide holiday cleaning for retail stores in Las Vegas?',
    a: `Yes. Final Touch provides holiday cleaning for Las Vegas retail stores, restaurants, offices, and commercial properties across ${SITE.serviceArea.county}. Holiday cleaning is scheduled around your operating hours — before open, after close, or at another agreed time. Call ${SITE.phone.display} or request a free quote.`,
  },
  {
    q: 'How is holiday cleaning different from regular commercial cleaning?',
    a: 'Holiday cleaning is a deeper, broader clean than a standard recurring maintenance visit. It addresses areas that accumulate wear ahead of the high-traffic holiday season: entry zones, customer restrooms, display surfaces, and common areas that will see elevated use through December. It may also include setup of seasonal common-area presentation standards confirmed at the walkthrough.',
  },
  {
    q: 'Can Final Touch clean a Las Vegas office before a holiday event or party?',
    a: `Yes. Pre-event and pre-party cleaning for Las Vegas offices and commercial spaces is within scope. Final Touch schedules around your event timeline and confirms scope at the initial walkthrough. Call ${SITE.phone.display} to discuss your event cleaning needs.`,
  },
  {
    q: 'What is the Blue Ribbon Guarantee?',
    a: "The Blue Ribbon Guarantee is Final Touch's 100% satisfaction guarantee. If you are not satisfied with the result, Final Touch will return within 24 hours to address any areas of concern at no additional charge. It applies to holiday cleaning as it does to all Final Touch services.",
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Holiday Cleaning Services in Las Vegas, NV',
  serviceType: 'Holiday Cleaning',
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

const audienceCards = [
  {
    title: 'Retail stores and shopping centers',
    body: 'Las Vegas retail operations see some of their highest annual foot traffic during the holiday shopping season. A pre-season clean establishes a high-presentation baseline before the heavy November–December period. Entry areas, fitting rooms, POS zones, and customer restrooms are priority areas.',
  },
  {
    title: 'Restaurants and hospitality venues',
    body: 'Las Vegas restaurants and hospitality venues host holiday parties, corporate events, and end-of-year celebrations through November and December. Pre-event cleaning for dining rooms, bar areas, private event spaces, and restrooms ensures the property presents at its best for those occasions.',
  },
  {
    title: 'Commercial offices hosting holiday events',
    body: 'Office tenants hosting holiday parties or year-end employee events need a pre-event clean of common areas, conference rooms, kitchens, and restrooms. Final Touch scopes cleaning around your event date and confirms timing at the walkthrough.',
  },
  {
    title: 'Property managers with seasonal obligations',
    body: 'Property managers overseeing commercial buildings and mixed-use properties use holiday cleaning to prepare lobbies, common areas, and shared amenities for the end-of-year period. Holiday cleaning is often tied to annual inspection or review schedules.',
  },
];

const checklist = [
  'Entry areas, lobbies, and reception surfaces',
  'Customer-facing floors: vacuuming, mopping, and spot treatment',
  'Customer restrooms: fixtures, tile, and replenishment setup',
  'Display fixtures and customer-facing surface areas',
  'Interior glass and window cleaning',
  'High-touch points: door handles, light switches, and rails',
  'Common area seating and surface reset',
  'Break room and kitchen surfaces',
  'Trash removal and liner replacement',
  'Baseboards and high-dust surface areas',
];

const whyTimingCards = [
  {
    heading: 'Las Vegas holiday foot traffic is substantial',
    body: 'Las Vegas sees elevated retail and hospitality traffic through the holiday season, with visitors and residents driving higher volume across shopping centers, restaurants, and commercial corridors. Properties that present well during this period do so because they prepared before the season, not after it started.',
  },
  {
    heading: 'End-of-year inspections and lease reviews',
    body: 'Many commercial leases and property management agreements include year-end condition reviews or inspections. A holiday cleaning in November or early December ensures the property is in documented condition before those reviews occur, reducing friction with tenants, landlords, or portfolio managers.',
  },
  {
    heading: 'Post-holiday cleanup is a separate service',
    body: 'Holiday cleaning (November–December) and post-holiday cleanup (January) are two distinct windows. Holiday cleaning prepares a property for the season. Post-holiday cleanup addresses the wear that accumulates through the season itself. Both are available from Final Touch and can be scheduled as a package or independently.',
  },
];

const relatedLinks = [
  { label: 'Post-Holiday Cleanup', href: '/seasonal/post-holiday-cleanup' },
  { label: "New Year's Clean Start", href: '/seasonal/new-years-clean-start' },
  { label: 'Commercial Office Cleaning', href: '/services/commercial-office-cleaning' },
  { label: 'Deep Cleaning', href: '/services/deep-cleaning' },
  { label: 'Las Vegas Cleaning Services', href: '/locations/las-vegas' },
  { label: 'All Services', href: ROUTES.services },
];

export default function HolidayCleaningServicesPage() {
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

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Seasonal', href: '/seasonal' },
          { label: 'Holiday Cleaning' },
        ]}
      />

      {/* 1. Hero */}
      <HeroSection
        eyebrow="Holiday Cleaning · Las Vegas, NV"
        heading="Holiday Cleaning Services in Las Vegas, NV"
        sub="Pre-season commercial cleaning for retail stores, restaurants, offices, and managed properties ahead of the Las Vegas holiday period. Scheduled around your operations."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Holiday cleaning in Las Vegas is professional pre-season cleaning for commercial properties
            that see elevated foot traffic, events, and customer activity through November and December.
            It covers customer-facing surfaces, entry zones, restrooms, and common areas before the season
            begins.{' '}
            <Link href={ROUTES.services} className="text-brand-blue font-semibold hover:underline">
              Final Touch cleaning services
            </Link>{' '}
            serves Las Vegas retail stores, restaurants, offices, and managed properties across{' '}
            {SITE.serviceArea.county}. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to request a free quote.
          </p>
        </div>
      </section>

      {/* 3. Who this is for */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who we serve"
            heading="Holiday cleaning for Las Vegas commercial operators."
            sub="Retail, hospitality, office, and property management clients use holiday cleaning to prepare for the season's elevated standards."
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

      {/* 4. What's included */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Scope"
            heading="What holiday cleaning covers."
            sub="Scope is confirmed per property at the initial walkthrough. Typical holiday cleaning areas are listed below."
          />
          <ul className="mt-8 space-y-3">
            {checklist.map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">
                  &#10003;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Why timing matters */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why timing matters"
            heading="Why November–December cleaning matters for Las Vegas businesses."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {whyTimingCards.map(({ heading, body }) => (
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

      {/* 6. FAQ */}
      <FAQSection
        items={faq}
        heading="Holiday cleaning in Las Vegas: frequently asked questions"
      />

      {/* 7. Related links */}
      <section className="bg-light-gray border-y border-border-subtle">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-10 sm:py-12">
          <p className="text-sm font-semibold text-muted uppercase tracking-wide mb-4">
            Related services
          </p>
          <div className="flex flex-wrap gap-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-[44px] items-center rounded-full bg-brand-white px-4 py-2 text-sm font-semibold text-brand-blue border border-border-subtle hover:bg-blue-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <CTASection
        heading="Need holiday cleaning in Las Vegas?"
        sub={`Free quotes for holiday cleaning across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
