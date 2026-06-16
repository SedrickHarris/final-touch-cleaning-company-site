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
  title: 'Post-Holiday Cleanup in Las Vegas, NV',
  description: `Post holiday cleanup Las Vegas — January reset cleaning for commercial properties, offices, and event spaces after the holiday season. Call ${SITE.phone.display}.`,
  alternates: {
    canonical: '/seasonal/post-holiday-cleanup',
  },
  openGraph: {
    title: 'Post-Holiday Cleanup in Las Vegas, NV | Final Touch',
    description: `Post holiday cleanup Las Vegas — January reset cleaning for commercial properties, offices, and event spaces after the holiday season. Call ${SITE.phone.display}.`,
    type: 'website',
    url: `${SITE.url}/seasonal/post-holiday-cleanup`,
  },
};

const faq = [
  {
    q: 'What does post-holiday cleanup include for a Las Vegas commercial property?',
    a: `Post-holiday cleanup for a Las Vegas commercial property addresses the wear and accumulation that builds up through the November–December season: high-traffic floor areas, entry zones, restrooms, common area surfaces, and any event or party areas used during the holiday period. Scope is confirmed per property at the initial walkthrough. Call ${SITE.phone.display} to discuss your space.`,
  },
  {
    q: 'When should I schedule post-holiday cleanup in Las Vegas?',
    a: 'January is the primary post-holiday cleanup window. Most commercial properties in Las Vegas benefit from a January reset after the high-traffic holiday season ends. Early January scheduling lets the property start the new year from a clean baseline before the normal operating routine resumes.',
  },
  {
    q: 'Is post-holiday cleanup different from holiday cleaning?',
    a: 'Yes. Holiday cleaning (November–December) prepares a property for the season by addressing pre-season buildup and setting a high-presentation baseline. Post-holiday cleanup (January) addresses the wear that accumulates through the season itself — event residue, elevated floor wear, high-touch surface buildup, and the general aftermath of holiday foot traffic. Both are available from Final Touch.',
  },
  {
    q: 'Does Final Touch do post-holiday cleanup for office holiday parties?',
    a: `Yes. Post-event cleanup for office holiday parties, corporate end-of-year events, and commercial gatherings is within scope. Final Touch schedules around your event timeline and confirms what needs to be addressed at the walkthrough. Call ${SITE.phone.display} or request a free quote.`,
  },
  {
    q: 'Can Final Touch handle post-holiday cleanup for a property management portfolio?',
    a: `Yes. Final Touch works with property managers overseeing multiple Las Vegas commercial and residential properties who need a January reset across their portfolio. Scheduling is coordinated per property. Call ${SITE.phone.display} to discuss your portfolio.`,
  },
  {
    q: 'How do I get a post-holiday cleanup quote in Las Vegas?',
    a: `Call ${SITE.phone.display} or request a free quote online. ${SITE.owners} conduct the initial walkthrough, confirm scope, and provide a written estimate before any work begins. No obligation.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Post-Holiday Cleanup in Las Vegas, NV',
  serviceType: 'Post-Holiday Cleanup',
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
    title: 'Retail stores after the holiday rush',
    body: 'Las Vegas retail operations that see their highest annual foot traffic in November and December need a January deep clean to reset floors, fitting rooms, display surfaces, and restrooms after the season closes. Post-holiday retail cleanup addresses the accumulated wear before the normal operating baseline resumes.',
  },
  {
    title: 'Restaurants and event venues',
    body: 'Restaurants and commercial event venues that hosted holiday parties and year-end events through December accumulate significant wear in dining rooms, bar areas, and event spaces. January cleanup addresses event residue, high-touch surface buildup, and floor wear before the new year schedule begins.',
  },
  {
    title: 'Commercial offices after holiday parties',
    body: 'Office tenants whose spaces hosted holiday gatherings need a post-event clean of common areas, conference rooms, kitchens, and restrooms. Final Touch scopes post-event cleanup based on what was used and confirms timing around your January return-to-work schedule.',
  },
  {
    title: 'Property managers resetting for the new year',
    body: 'Property managers use January as the annual baseline reset for common areas, lobbies, and shared amenities across their portfolios. Post-holiday cleanup is the practical starting point for the new calendar year maintenance cycle.',
  },
];

const checklist = [
  'Entry areas and lobbies after heavy foot traffic',
  'High-traffic floor areas: deep vacuuming, mopping, and stain treatment',
  'Customer restrooms: full fixture and surface reset',
  'Event space surfaces: tables, chairs, and staging areas',
  'Kitchen and break room deep clean after holiday gatherings',
  'Common area seating and surface reset',
  'High-touch surfaces: handles, switches, and rails',
  'Interior glass after holiday decoration removal',
  'Trash removal, recycling, and liner replacement',
  'Any areas specified by the property manager or operator',
];

const whyTimingCards = [
  {
    heading: 'January is the natural reset point',
    body: 'January marks the end of the highest-traffic commercial period of the year in Las Vegas. Post-holiday cleanup resets the property to a clean baseline before the normal operating schedule resumes. Starting the year from a documented clean condition is practical for both operational standards and any inspection or audit requirements.',
  },
  {
    heading: 'Holiday wear compounds over six weeks',
    body: "The holiday season spans roughly six weeks of elevated commercial foot traffic, event use, and accelerated surface wear. Standard recurring cleaning during that period maintains basic hygiene but does not address the cumulative buildup on floors, entry areas, and high-touch surfaces. Post-holiday cleanup is the corrective clean that catches what six weeks of heavy use accumulated.",
  },
  {
    heading: 'New year operational cadence starts clean',
    body: 'Commercial operators and property managers who align their cleaning calendar with the new year benefit from a clean baseline at the start of Q1. Post-holiday cleanup in early January is the practical foundation for that alignment — establishing condition before the new operational cycle begins.',
  },
];

const relatedLinks = [
  { label: 'Holiday Cleaning Services', href: '/seasonal/holiday-cleaning-services' },
  { label: "New Year's Clean Start", href: '/seasonal/new-years-clean-start' },
  { label: 'Deep Cleaning', href: '/services/deep-cleaning' },
  { label: 'Commercial Office Cleaning', href: '/services/commercial-office-cleaning' },
  { label: 'Las Vegas Cleaning Services', href: '/locations/las-vegas' },
  { label: 'All Services', href: ROUTES.services },
];

export default function PostHolidayCleanupPage() {
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
          { label: 'Post-Holiday Cleanup' },
        ]}
      />

      {/* 1. Hero */}
      <HeroSection
        eyebrow="Post-Holiday Cleanup · Las Vegas, NV"
        heading="Post-Holiday Cleanup in Las Vegas, NV"
        sub="January reset cleaning for commercial properties, offices, event spaces, and managed buildings after the Las Vegas holiday season. Scope confirmed per property."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Post-holiday cleanup in Las Vegas is professional January cleaning for commercial properties
            that accumulate significant wear through the November–December holiday season. It addresses
            event residue, elevated floor wear, and high-touch surface buildup after the season ends.{' '}
            <Link href={ROUTES.services} className="text-brand-blue font-semibold hover:underline">
              Final Touch cleaning services
            </Link>{' '}
            covers retail stores, restaurants, offices, and managed properties across Las Vegas and{' '}
            {SITE.serviceArea.county}. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to schedule a free walkthrough.
          </p>
        </div>
      </section>

      {/* 3. Who this is for */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who we serve"
            heading="Post-holiday cleanup for Las Vegas commercial properties."
            sub="Retail, hospitality, office, and property management clients use January cleanup to reset after the season."
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
            heading="What post-holiday cleanup covers."
            sub="Scope is confirmed per property at the initial walkthrough. Typical post-holiday cleanup areas are listed below."
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
            heading="Why January cleanup is the right move for Las Vegas commercial properties."
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
        heading="Post-holiday cleanup in Las Vegas: frequently asked questions"
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
        heading="Ready for post-holiday cleanup in Las Vegas?"
        sub={`Free quotes for post-holiday cleanup across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
