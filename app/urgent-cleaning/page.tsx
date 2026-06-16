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
  title: { absolute: 'Emergency & Same-Day Cleaning in Las Vegas, NV | Final Touch' },
  description:
    'Need urgent cleaning in Las Vegas? Final Touch handles emergency, same-day, last-minute move-out, and weekend cleaning requests. Call (702) 444-5077 to check availability.',
  alternates: {
    canonical: '/urgent-cleaning',
  },
  openGraph: {
    title: 'Emergency & Same-Day Cleaning in Las Vegas, NV | Final Touch',
    description:
      'Need urgent cleaning in Las Vegas? Final Touch handles emergency, same-day, last-minute move-out, and weekend cleaning requests. Call (702) 444-5077 to check availability.',
    type: 'website',
    url: `${SITE.url}/urgent-cleaning`,
  },
};

const urgentServices = [
  {
    slug: 'same-day-cleaning-las-vegas',
    name: 'Same-Day Cleaning',
    description:
      'When your Las Vegas office or commercial space needs cleaning today, call to check availability. Same-day requests are handled based on crew scheduling.',
    href: '/urgent-cleaning/same-day-cleaning-las-vegas',
  },
  {
    slug: 'emergency-cleaning-services',
    name: 'Emergency Cleaning Services',
    description:
      'Unexpected spills, post-event messes, or urgent facility situations — call us to discuss what happened and whether we can mobilize a crew.',
    href: '/urgent-cleaning/emergency-cleaning-services',
  },
  {
    slug: 'last-minute-move-out-cleaning',
    name: 'Last-Minute Move-Out Cleaning',
    description:
      'Move-out deadline approaching? Call to check availability. Final Touch works to accommodate tight turnaround move-out cleans for tenants and property managers.',
    href: '/urgent-cleaning/last-minute-move-out-cleaning',
  },
  {
    slug: 'weekend-cleaning-services',
    name: 'Weekend Cleaning Services',
    description:
      'Need cleaning scheduled for Saturday or Sunday? Weekend availability varies — call ahead so we can confirm whether a crew slot is open.',
    href: '/urgent-cleaning/weekend-cleaning-services',
  },
];

const whoWeServeCards = [
  {
    title: 'Offices with urgent cleaning needs',
    body: 'A client visit, a surprise inspection, or an unscheduled event can create the need for an immediate office clean. Property managers and office managers in Las Vegas call Final Touch when their regular cleaning window has closed and they need to explore options.',
  },
  {
    title: 'Property managers with tight turnarounds',
    body: 'Unit turn windows shrink when a tenant leaves late or the next tenant moves in early. Property managers across Las Vegas and Clark County rely on Final Touch to work through tight scheduling windows — call to discuss your timeline.',
  },
  {
    title: 'Businesses before key events',
    body: 'Board meetings, investor walkthroughs, grand openings, and client site visits all create a genuine need for a clean that cannot wait for the regular schedule. Call as early as possible so we can assess crew availability.',
  },
  {
    title: 'Move-out clients with deadline pressure',
    body: 'Whether you are returning a commercial lease or handing back a residential unit, a tight move-out cleaning deadline is one of the most common urgent requests Final Touch receives. Subject to crew availability — call (702) 444-5077.',
  },
];

const faq = [
  {
    q: 'Does Final Touch offer same-day or emergency cleaning in Las Vegas?',
    a: `Final Touch works to accommodate urgent and time-sensitive cleaning requests across Las Vegas and Clark County. Availability depends on crew scheduling at the time of your call. The best approach is to call ${SITE.phone.display} as early in the day as possible — the earlier you reach us, the more options we have to work with.`,
  },
  {
    q: 'How quickly can Final Touch respond to an urgent cleaning request?',
    a: 'Response times depend on crew availability at the time of your call. Final Touch does not guarantee a specific response window for urgent requests. Call us directly at (702) 444-5077 and we will tell you what is available. The further in advance you call — even by a few hours — the better your chances of securing a crew.',
  },
  {
    q: 'What types of urgent cleaning requests does Final Touch handle?',
    a: 'Final Touch fields urgent requests for commercial office cleaning, emergency facility cleans after events or incidents, last-minute move-out cleaning, and weekend cleans across Las Vegas, Henderson, North Las Vegas, and Clark County. Every request is assessed based on scope, location, and current crew availability.',
  },
  {
    q: 'Are weekend cleaning slots available in Las Vegas?',
    a: `Weekend cleaning availability varies. Final Touch works with businesses and property managers who need Saturday or Sunday cleans, but slots are not guaranteed. Call ${SITE.phone.display} to discuss your weekend cleaning needs and check current availability.`,
  },
  {
    q: 'Is Final Touch available 24 hours a day for emergencies?',
    a: `Final Touch is a family-owned cleaning company in Clark County — not a 24/7 emergency dispatch service. For urgent cleaning needs, call ${SITE.phone.display} during business hours as early as possible. We will do our best to accommodate time-sensitive requests within our crew scheduling capacity.`,
  },
];

const collectionPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Emergency & Same-Day Cleaning in Las Vegas, NV | Final Touch',
  description:
    'Urgent cleaning services for Las Vegas offices, commercial spaces, and move-out situations. Call to check availability.',
  url: `${SITE.url}/urgent-cleaning`,
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: '+17024445077',
    email: SITE.email.display,
  },
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

export default function UrgentCleaningHubPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. Breadcrumb */}
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Urgent Cleaning' }]} />

      {/* 2. Hero */}
      <HeroSection
        eyebrow="Urgent Cleaning · Las Vegas, NV"
        heading="Emergency and Same-Day Cleaning in Las Vegas, NV"
        sub={`When your office, commercial space, or rental unit needs cleaning faster than your regular schedule allows, call Final Touch at ${SITE.phone.display} to check availability. We work to accommodate urgent requests across the Las Vegas Valley — subject to crew scheduling.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 3. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Urgent cleaning in Las Vegas means calling to check availability — not booking online and
            assuming a crew will appear. Final Touch handles same-day, emergency, last-minute
            move-out, and weekend cleaning requests across Las Vegas and{' '}
            {SITE.serviceArea.county} subject to crew availability.{' '}
            <Link
              href={ROUTES.services}
              className="text-brand-blue font-semibold hover:underline"
            >
              View all cleaning services
            </Link>{' '}
            or call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>{' '}
            to discuss your timeline.
          </p>
        </div>
      </section>

      {/* 4. Urgent service card grid */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Urgent Cleaning Services"
            heading="Which urgent cleaning situation applies to you?"
            sub="Select the page that best matches your need for details on scope, what to have ready, and how to request service."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {urgentServices.map((svc) => (
              <li
                key={svc.slug}
                className="flex flex-col rounded-[14px] border border-border-subtle bg-brand-white p-6 shadow-sm"
              >
                <h2 className="font-display text-xl font-semibold text-brand-black">{svc.name}</h2>
                <p className="mt-3 text-sm text-muted leading-relaxed flex-1">{svc.description}</p>
                <Link
                  href={svc.href}
                  className="mt-5 inline-flex min-h-[44px] items-center rounded-full bg-light-gray px-4 py-2 text-sm font-semibold text-brand-blue hover:bg-blue-50 transition-colors self-start"
                >
                  Learn more →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Who needs this */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who we serve"
            heading="Commercial clients and property managers with urgent timelines."
            sub="Most urgent cleaning requests in Las Vegas come from office managers, property managers, and commercial tenants — not residential clients. Final Touch is built for that caller."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {whoWeServeCards.map((item) => (
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

      {/* 6. How to request */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="How to request urgent cleaning"
            heading="Call first. The earlier, the better."
          />
          <p className="mt-6 text-base sm:text-lg text-brand-black leading-relaxed">
            Urgent cleaning availability is limited by crew scheduling, not by policy. The single most
            effective action you can take is to call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>{' '}
            as early as possible with the following ready:
          </p>
          <ul className="mt-6 space-y-3">
            {[
              'Your location (address, city, building access details)',
              'Approximate square footage or number of rooms',
              'What needs to be cleaned — scope description',
              'Your target date and time window',
              'Whether the space is currently occupied or vacant',
              'Any access requirements, codes, or key arrangements',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">
                  &#10003;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Having these details ready when you call allows Final Touch to assess the request and give
            you a direct answer on availability.
          </p>
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
              { label: 'Move-Out Cleaning', href: '/services/move-out-cleaning' },
              { label: 'Commercial Office Cleaning', href: '/services/commercial-office-cleaning' },
              { label: 'Janitorial Services', href: '/services/janitorial-services' },
              { label: 'Deep Cleaning', href: '/services/deep-cleaning' },
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
        heading="Urgent cleaning in Las Vegas: frequently asked questions"
        defaultOpenFirst
      />

      {/* 9. Final CTA */}
      <CTASection
        heading="Need cleaning on a tight timeline in Las Vegas?"
        sub={`Call ${SITE.phone.display} to check availability. Final Touch works to accommodate urgent cleaning requests across Las Vegas, Henderson, North Las Vegas, and the wider Las Vegas Valley.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
