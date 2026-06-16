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
  title: "New Year's Clean Start — Las Vegas, NV",
  description: `New Year cleaning Las Vegas — late December and January professional cleaning reset for commercial properties, offices, and managed spaces. Call ${SITE.phone.display}.`,
  alternates: {
    canonical: '/seasonal/new-years-clean-start',
  },
  openGraph: {
    title: "New Year's Clean Start — Las Vegas, NV | Final Touch",
    description: `New Year cleaning Las Vegas — late December and January professional cleaning reset for commercial properties, offices, and managed spaces. Call ${SITE.phone.display}.`,
    type: 'website',
    url: `${SITE.url}/seasonal/new-years-clean-start`,
  },
};

const faq = [
  {
    q: "What is a New Year's clean start for a Las Vegas commercial property?",
    a: `A New Year's clean start is a late December or January professional cleaning reset for commercial properties, offices, and managed spaces that want to begin the calendar year from a thoroughly cleaned baseline. It differs from a standard recurring visit in scope — addressing areas that accumulate buildup through the year and have not been reached since the last deep clean. Final Touch serves commercial and managed properties across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display}.`,
  },
  {
    q: "When should I schedule a New Year's cleaning in Las Vegas?",
    a: "The New Year's cleaning window spans late December through early January. Many commercial operators schedule between Christmas and New Year's Day when operations are quieter, or in the first week of January before the standard operating schedule resumes. Either timing works — scope and scheduling are confirmed at the walkthrough based on your property's calendar.",
  },
  {
    q: "How is a New Year's clean different from post-holiday cleanup?",
    a: "Post-holiday cleanup (also available from Final Touch) focuses on the aftermath of the holiday season — event residue, high-traffic wear, and the accumulated use from November and December. A New Year's clean start is a broader reset focused on beginning the calendar year from a clean baseline, which may overlap with post-holiday areas or extend to other parts of the property. Scope is confirmed per property at the walkthrough.",
  },
  {
    q: "Does Final Touch provide New Year's cleaning for commercial offices in Las Vegas?",
    a: `Yes. Final Touch provides New Year's cleaning resets for commercial offices, retail spaces, property-managed buildings, and other commercial facilities across Las Vegas and ${SITE.serviceArea.county}. Scheduling in the late December–early January window is available. Call ${SITE.phone.display} or request a free quote online.`,
  },
  {
    q: "What does a New Year's clean start typically include?",
    a: `A New Year's clean start covers the areas that benefit most from a year-reset: floors, baseboards, window surfaces, vents, common area surfaces, restrooms, kitchen and break rooms, and any high-touch areas that accumulate annual buildup. Scope is confirmed per property at the initial walkthrough. Call ${SITE.phone.display} to discuss your space.`,
  },
  {
    q: "What is the Blue Ribbon Guarantee for New Year's cleaning?",
    a: "The Blue Ribbon Guarantee is Final Touch's 100% satisfaction guarantee. If you are not satisfied with the result, Final Touch will return within 24 hours to address any concerns at no additional charge. It applies to New Year's cleaning as it does to all Final Touch services.",
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "New Year's Clean Start — Las Vegas, NV",
  serviceType: "New Year's Cleaning",
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
    title: 'Commercial property managers starting Q1',
    body: "Property managers and commercial building operators use the new year reset to establish a clean baseline for Q1. January is a natural inspection and review point for many commercial leases, and a documented professional clean at the start of the year supports those reviews.",
  },
  {
    title: 'Office tenants resetting for the new year',
    body: "Law firms, medical offices, and other commercial tenants use late December or early January cleaning to reset their space before the new year operating schedule begins. An office that starts the year from a professionally cleaned baseline presents better to staff, clients, and visitors from day one.",
  },
  {
    title: 'Retail stores transitioning out of the holiday season',
    body: "Las Vegas retail stores transitioning out of the holiday season use the new year period to address the wear from the December rush and reset displays, floor surfaces, and customer-facing areas before January traffic begins. The week between Christmas and New Year's Day is often the most practical timing for retail operations.",
  },
  {
    title: 'Managed residential buildings resetting annual cycles',
    body: "Residential property managers who align their maintenance and cleaning calendar to the new year use January cleaning to reset common areas, lobbies, laundry facilities, and shared amenities. A January reset establishes the annual baseline condition for the property's maintenance record.",
  },
];

const checklist = [
  'All floor surfaces: hard floors, carpet, and grout lines',
  'Baseboards, door frames, and window sills',
  'Vents, registers, and HVAC-adjacent surfaces',
  'Blinds and horizontal surface dusting',
  'Interior glass and window cleaning',
  'Restrooms: full fixture, tile, and surface reset',
  'Kitchen and break room: counters, appliances, and cabinet exteriors',
  'Common areas, lobbies, and reception surfaces',
  'High-touch points: handles, switches, and rails',
  'Trash removal and liner replacement',
  'Any areas specified by the property manager or operator',
];

const whyTimingCards = [
  {
    heading: 'Las Vegas New Year is uniquely high-activity',
    body: "Las Vegas hosts one of the largest New Year's Eve events in the country, with major hotel, resort, and commercial properties seeing peak activity around the holiday. Commercial and retail properties in Las Vegas experience elevated foot traffic and surface wear through the December 31–January 1 window. A January reset addresses the aftermath of that concentrated activity.",
  },
  {
    heading: 'Calendar year transition creates a natural reset point',
    body: "The start of a new calendar year is when most businesses reset their operating budgets, service contracts, and maintenance schedules. Aligning a professional cleaning reset with the new year means starting Q1 from a clean, documented baseline — practical for both operational presentation and any vendor or facility management records.",
  },
  {
    heading: 'Late December operations often allow easier access',
    body: "Many Las Vegas commercial offices and managed properties operate with reduced staff between Christmas and New Year's Day. This quieter window is often the most practical time for a thorough cleaning reset — longer access windows, fewer staff to work around, and no disruption to peak operational hours. Final Touch schedules around your specific access calendar.",
  },
];

const relatedLinks = [
  { label: 'Post-Holiday Cleanup', href: '/seasonal/post-holiday-cleanup' },
  { label: 'Holiday Cleaning Services', href: '/seasonal/holiday-cleaning-services' },
  { label: 'Deep Cleaning', href: '/services/deep-cleaning' },
  { label: 'Commercial Office Cleaning', href: '/services/commercial-office-cleaning' },
  { label: 'Janitorial Services', href: '/services/janitorial-services' },
  { label: 'Las Vegas Cleaning Services', href: '/locations/las-vegas' },
];

export default function NewYearsCleanStartPage() {
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
          { label: "New Year's Clean Start" },
        ]}
      />

      {/* 1. Hero */}
      <HeroSection
        eyebrow="New Year's Cleaning · Las Vegas, NV"
        heading="New Year's Clean Start — Las Vegas, NV"
        sub="Late December and January professional cleaning reset for commercial properties, offices, and managed spaces in Las Vegas. Scope confirmed per property."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            A New Year&rsquo;s clean start in Las Vegas is a professional cleaning reset for commercial
            properties, offices, and managed spaces that want to begin the calendar year from a
            thoroughly cleaned baseline. It addresses year-end accumulated buildup and sets the
            condition record for Q1.{' '}
            <Link href={ROUTES.services} className="text-brand-blue font-semibold hover:underline">
              Final Touch cleaning services
            </Link>{' '}
            covers commercial and managed properties across Las Vegas and {SITE.serviceArea.county}.
            Call{' '}
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
            heading="New Year's cleaning for Las Vegas commercial properties."
            sub="Property managers, office tenants, retail operators, and managed building administrators use the new year window to reset their properties."
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
            heading="What a New Year's cleaning reset covers."
            sub="Scope is confirmed per property at the initial walkthrough. Typical new year cleaning areas are listed below."
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
            heading="Why late December and January are the right time to reset in Las Vegas."
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
        heading="New Year's cleaning in Las Vegas: frequently asked questions"
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
        heading="Ready for a New Year's clean start in Las Vegas?"
        sub={`Free quotes for New Year's cleaning across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
