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
  title: 'Last-Minute Move-Out Cleaning in Las Vegas, NV',
  description:
    'Last minute move out cleaning Las Vegas: tight deadline on your unit or commercial space? Final Touch works to accommodate compressed timelines. Call (702) 444-5077 to check availability.',
  alternates: {
    canonical: '/urgent-cleaning/last-minute-move-out-cleaning',
  },
  openGraph: {
    title: 'Last-Minute Move-Out Cleaning in Las Vegas, NV | Final Touch',
    description:
      'Last minute move out cleaning Las Vegas: tight deadline on your unit or commercial space? Final Touch works to accommodate compressed timelines. Call (702) 444-5077 to check availability.',
    type: 'website',
    url: `${SITE.url}/urgent-cleaning/last-minute-move-out-cleaning`,
  },
};

const faq = [
  {
    q: 'Can Final Touch handle a last-minute move-out clean in Las Vegas?',
    a: `Final Touch works to accommodate last-minute move-out cleaning requests across Las Vegas and Clark County. Availability depends on crew scheduling at the time of your call. Call ${SITE.phone.display} as early as possible with your move-out date and location — the sooner you call, the better the options.`,
  },
  {
    q: 'What does a move-out cleaning include?',
    a: `Move-out cleaning covers the full interior of the unit or space: all rooms, kitchen surfaces and appliances, bathrooms, floors, baseboards, interior windows, and all areas the incoming party or landlord will inspect. Scope is confirmed per property when you call. Call ${SITE.phone.display} or request a free quote online to discuss what your specific move-out requires.`,
  },
  {
    q: 'How much notice does Final Touch need for a move-out clean?',
    a: 'Final Touch works to accommodate last-minute requests, but there is no minimum notice guarantee. Calling two to three days in advance gives the best chance of securing a crew on your timeline. For requests with less than 24 hours of notice, availability is more limited — call immediately at (702) 444-5077 and we will assess what is possible.',
  },
  {
    q: 'Does Final Touch serve property managers needing rapid unit turns?',
    a: `Yes. Property managers across Las Vegas, Henderson, North Las Vegas, and Clark County use Final Touch for unit turn cleaning. When tenant-vacate and new-tenant-arrival windows compress, the most effective step is to call ${SITE.phone.display} and give us the specific dates and unit details so we can assess what is feasible.`,
  },
  {
    q: 'Can Final Touch handle commercial move-out cleaning in Las Vegas?',
    a: `Yes. Final Touch handles move-out cleaning for commercial spaces — offices, suites, and leased commercial interiors — as well as residential units. Commercial move-out scope is confirmed per space. Call ${SITE.phone.display} to describe your commercial space and timeline.`,
  },
  {
    q: 'What should I have ready when I call about a last-minute move-out clean?',
    a: 'Have the address, the size of the unit (square footage or number of rooms and bathrooms), your move-out or handover deadline, access information (key pickup, lockbox code, property manager contact), and any specific scope notes — particularly if appliances, carpets, or any areas require special attention. The more specific you can be, the faster we can give you an answer.',
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Last-Minute Move-Out Cleaning in Las Vegas, NV',
  serviceType: 'Move-Out Cleaning',
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
    title: 'Property managers with compressed unit turns',
    body: 'When a tenant vacates later than expected or a new tenant moves in ahead of schedule, the unit turn window shrinks fast. Property managers in Las Vegas call Final Touch to work through tight turnaround schedules — availability confirmed on the call based on current crew scheduling.',
  },
  {
    title: 'Tenants with a hard move-out deadline',
    body: 'A lease end date does not wait. Tenants who realize they are behind on move-out cleaning call Final Touch to get a professional clean done before the key handover. The sooner you call, the more options we have to fit you into the schedule.',
  },
  {
    title: 'Commercial tenants vacating leased space',
    body: 'Commercial move-outs often carry specific lease-end cleaning obligations tied to the condition the tenant returns the space in. Final Touch handles commercial move-out cleaning for offices and leased commercial interiors across Las Vegas and Clark County — scope confirmed per space.',
  },
];

const checklistItems = [
  'Full address including unit or suite number',
  'Unit size — square footage or number of bedrooms and bathrooms',
  'Your move-out or handover deadline (specific date and time if possible)',
  'Access instructions — key pickup location, lockbox code, or property manager contact',
  'Any appliances that need to be cleaned inside (oven, refrigerator)',
  'Any areas of particular concern — staining, heavy soiling, carpet condition',
  'Whether the unit is already vacated or still being cleared',
];

export default function LastMinuteMoveOutCleaningPage() {
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

      {/* 1. Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Urgent Cleaning', href: '/urgent-cleaning' },
          { label: 'Last-Minute Move-Out Cleaning' },
        ]}
      />

      {/* 2. Hero */}
      <HeroSection
        eyebrow="Last-Minute Move-Out Cleaning · Las Vegas, NV"
        heading="Last-Minute Move-Out Cleaning in Las Vegas, NV"
        sub={`Move-out deadline approaching in Las Vegas? Call ${SITE.phone.display} to check availability. Final Touch works to accommodate compressed move-out cleaning timelines for tenants, property managers, and commercial tenants across the Las Vegas Valley — subject to crew scheduling.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 3. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Last-minute move-out cleaning in Las Vegas is one of the most common urgent requests Final
            Touch receives from property managers and tenants across Clark County. Availability depends
            on crew scheduling — call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>{' '}
            with your move-out date and location to check. View{' '}
            <Link
              href="/services/move-out-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              move-out cleaning details
            </Link>{' '}
            or{' '}
            <Link
              href={ROUTES.services}
              className="text-brand-blue font-semibold hover:underline"
            >
              all services
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 4. Who needs this service */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who we serve"
            heading="Tenants, property managers, and commercial clients with tight move-out timelines."
            sub="Last-minute move-out cleaning requests in Las Vegas come from both residential and commercial contexts. Final Touch works with property managers and tenants on compressed schedules across the Las Vegas Valley."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
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

      {/* 5. What to have ready when you call */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Before you call"
            heading="What to have ready for a last-minute move-out cleaning request."
            sub="Having these details on hand speeds up the availability assessment and gets you a direct answer faster."
          />
          <ul className="mt-8 space-y-3">
            {checklistItems.map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">
                  &#10003;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Availability is confirmed on the call. Call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>{' '}
            with these details ready.
          </p>
        </div>
      </section>

      {/* 6. Context cards */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Last-minute move-out cleaning in Las Vegas"
            heading="Why move-out cleaning timelines compress."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'Lease end dates do not move',
                body: 'A lease end date is fixed. When a tenant is running behind on packing or has not arranged cleaning in advance, the window between vacancy and key handover is often less than a day. Calling Final Touch early — even the day before — gives the best chance of fitting a crew into the schedule.',
              },
              {
                heading: 'Property managers face overlap pressure',
                body: 'Unit turn windows shrink when tenant departure and new occupant arrival dates fall close together. Property managers who have a working relationship with Final Touch already know to call early. New clients should reach out with as much lead time as the situation allows.',
              },
              {
                heading: 'Blue Ribbon Guarantee applies',
                body: `Final Touch stands behind every clean with a 100% satisfaction guarantee. If the cleaning does not meet your standard, we return within 24 hours at no additional charge. That applies to move-out cleans the same as any other service. Call ${SITE.phone.display} to discuss your move-out.`,
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

      {/* 7. Internal links */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
          <p className="text-sm font-semibold text-muted uppercase tracking-wide mb-4">
            Related services
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Move-Out Cleaning', href: '/services/move-out-cleaning' },
              { label: 'Move-In Cleaning', href: '/services/move-in-cleaning' },
              { label: 'All Services', href: ROUTES.services },
              { label: 'Same-Day Cleaning', href: '/urgent-cleaning/same-day-cleaning-las-vegas' },
              { label: 'Commercial Office Cleaning', href: '/services/commercial-office-cleaning' },
              { label: 'Free Quote', href: ROUTES.freeQuote },
              { label: 'Contact', href: ROUTES.contact },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="inline-flex min-h-[44px] items-center rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-blue hover:border-brand-blue/40 hover:bg-soft-blue transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <FAQSection
        items={faq}
        heading="Last-minute move-out cleaning in Las Vegas: frequently asked questions"
      />

      {/* 9. Final CTA */}
      <CTASection
        heading="Move-out deadline approaching in Las Vegas?"
        sub={`Call ${SITE.phone.display} with your date and location. Final Touch works to accommodate last-minute move-out cleans for tenants and property managers across Las Vegas, Henderson, North Las Vegas, and the wider Las Vegas Valley.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
