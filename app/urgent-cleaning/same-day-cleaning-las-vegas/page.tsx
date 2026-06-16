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
  title: 'Same-Day Cleaning in Las Vegas, NV',
  description:
    'Need same day cleaning Las Vegas? Final Touch works to accommodate same-day requests for offices and commercial spaces across the Las Vegas Valley. Call (702) 444-5077 to check availability.',
  alternates: {
    canonical: '/urgent-cleaning/same-day-cleaning-las-vegas',
  },
  openGraph: {
    title: 'Same-Day Cleaning in Las Vegas, NV | Final Touch',
    description:
      'Need same day cleaning Las Vegas? Final Touch works to accommodate same-day requests for offices and commercial spaces across the Las Vegas Valley. Call (702) 444-5077 to check availability.',
    type: 'website',
    url: `${SITE.url}/urgent-cleaning/same-day-cleaning-las-vegas`,
  },
};

const faq = [
  {
    q: 'Does Final Touch offer same-day cleaning in Las Vegas?',
    a: `Final Touch works to accommodate same-day cleaning requests across Las Vegas and Clark County. Availability depends on crew scheduling at the time of your call. Call ${SITE.phone.display} as early in the day as possible — the earlier you reach us, the more options we have to work with on the same day.`,
  },
  {
    q: 'What types of spaces does Final Touch clean on the same day?',
    a: 'Same-day cleaning requests handled by Final Touch typically involve commercial office spaces, small business interiors, and property management unit turnovers. Scope and feasibility are confirmed on the call. Large-scale or highly specialized cleans may not be schedulable same-day — that is assessed when you call.',
  },
  {
    q: 'How far in advance should I call for a same-day cleaning slot?',
    a: `There is no minimum required notice, but calling early in the morning gives the best chance of securing a same-day crew. Afternoon or evening same-day requests may not be accommodatable depending on what is already scheduled. Call ${SITE.phone.display} and we will give you a direct answer on what is available.`,
  },
  {
    q: 'Is there an extra charge for same-day cleaning in Las Vegas?',
    a: `Pricing is discussed when you call. Final Touch provides a quote based on the specific scope and conditions of your space. Call ${SITE.phone.display} or request a free quote online — ${SITE.owners} will discuss what the job requires and give you a price before any work begins.`,
  },
  {
    q: 'Does Final Touch serve Henderson and North Las Vegas for same-day cleaning?',
    a: `Yes. Final Touch serves Las Vegas, Henderson, North Las Vegas, Boulder City, and unincorporated Clark County. Same-day availability across those areas depends on crew location and scheduling at the time of your call. Call ${SITE.phone.display} to check.`,
  },
  {
    q: 'What should I have ready when I call to request same-day cleaning?',
    a: 'Have your address, approximate square footage or room count, a description of what needs to be cleaned, your available time window, and any access details ready when you call. The more clearly you can describe the scope upfront, the faster we can assess whether same-day service is feasible.',
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Same-Day Cleaning in Las Vegas, NV',
  serviceType: 'Same-Day Cleaning',
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
    title: 'Office managers before a last-minute meeting',
    body: 'A client site visit or executive walkthrough that was just confirmed today requires the office to look its best. Office managers who call Final Touch early in the day have the best chance of securing a same-day cleaning crew for their Las Vegas commercial space.',
  },
  {
    title: 'Property managers with rapid unit turns',
    body: 'When a tenant vacates ahead of schedule or the next occupant arrives sooner than expected, property managers in Las Vegas need a reliable cleaning partner who can work through a compressed turnaround. Same-day unit turns are subject to crew availability — call as early as possible.',
  },
  {
    title: 'Business owners preparing for unexpected guests',
    body: 'Whether it is a prospective tenant, a regulatory inspector, or a business partner visiting on short notice, Las Vegas business owners sometimes need a professional clean on the same day. Final Touch works to accommodate these requests when crew scheduling allows.',
  },
];

const checklistItems = [
  'Full address including suite or unit number',
  'Approximate square footage or number of rooms',
  'What needs to be cleaned — surfaces, rooms, specific areas',
  'Your available time window for the same day',
  'Access instructions — key pickup, entry code, building contact',
  'Whether the space is currently occupied or vacant',
];

export default function SameDayCleaningLasVegasPage() {
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
          { label: 'Same-Day Cleaning Las Vegas' },
        ]}
      />

      {/* 2. Hero */}
      <HeroSection
        eyebrow="Same-Day Cleaning · Las Vegas, NV"
        heading="Same-Day Cleaning in Las Vegas, NV"
        sub={`Need your Las Vegas office or commercial space cleaned today? Call ${SITE.phone.display} to check availability. Final Touch works to accommodate same-day requests based on crew scheduling — the earlier you call, the better your options.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 3. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Same-day cleaning in Las Vegas is handled on a crew-availability basis. Final Touch does
            not maintain a dedicated same-day fleet, but works to accommodate urgent requests when
            scheduling allows. The best approach is to call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>{' '}
            early in the day with your scope and location ready. View{' '}
            <Link
              href={ROUTES.services}
              className="text-brand-blue font-semibold hover:underline"
            >
              all cleaning services
            </Link>{' '}
            or call to check availability.
          </p>
        </div>
      </section>

      {/* 4. Who needs this service */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who we serve"
            heading="Commercial clients who need cleaning today."
            sub="Same-day cleaning requests most often come from offices, property managers, and business owners with an urgent timeline — not residential clients."
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
            heading="What to have ready for a same-day cleaning request."
            sub="Having these details on hand when you call allows us to assess the request and give you a direct answer on availability as quickly as possible."
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
            Same-day availability is confirmed on the call — not guaranteed in advance. Call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>{' '}
            as early as possible.
          </p>
        </div>
      </section>

      {/* 6. Context cards */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="How same-day cleaning works"
            heading="Call early, be specific about scope."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'Crew availability drives same-day feasibility',
                body: 'Same-day cleaning is not a standing offer — it is a real-time assessment. When you call, Final Touch checks whether a crew is available in your area for the time window you need. Some days that is possible; some days it is not. That honest answer is what you get when you call.',
              },
              {
                heading: 'Scope clarity speeds up the decision',
                body: 'A caller who can describe the space, the number of rooms, and the cleaning scope gets a faster answer than one who cannot. If the job is two private offices and a conference room, that is a very different commitment than a full commercial floor. Know your scope before you call.',
              },
              {
                heading: 'Owner-led, not a dispatch service',
                body: `Final Touch is owner-operated by ${SITE.owners}. It is not a franchise or a gig-economy dispatch platform. When you call about a same-day request, you are talking to a real business that will give you a direct answer about whether we can help today.`,
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
              { label: 'All Services', href: ROUTES.services },
              { label: 'Emergency Cleaning', href: '/urgent-cleaning/emergency-cleaning-services' },
              { label: 'Commercial Office Cleaning', href: '/services/commercial-office-cleaning' },
              { label: 'Janitorial Services', href: '/services/janitorial-services' },
              { label: 'Weekend Cleaning', href: '/urgent-cleaning/weekend-cleaning-services' },
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
        heading="Same-day cleaning in Las Vegas: frequently asked questions"
      />

      {/* 9. Final CTA */}
      <CTASection
        heading="Need same-day cleaning in Las Vegas?"
        sub={`Call ${SITE.phone.display} early in the day to check crew availability. Final Touch serves Las Vegas, Henderson, North Las Vegas, and the wider Las Vegas Valley.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
