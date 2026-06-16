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
  title: 'Weekend Cleaning Services in Las Vegas, NV',
  description:
    'Weekend cleaning Las Vegas: need Saturday or Sunday service for your office or commercial space? Final Touch works with businesses that cannot wait until Monday. Call (702) 444-5077.',
  alternates: {
    canonical: '/urgent-cleaning/weekend-cleaning-services',
  },
  openGraph: {
    title: 'Weekend Cleaning Services in Las Vegas, NV | Final Touch',
    description:
      'Weekend cleaning Las Vegas: need Saturday or Sunday service for your office or commercial space? Final Touch works with businesses that cannot wait until Monday. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/urgent-cleaning/weekend-cleaning-services`,
  },
};

const faq = [
  {
    q: 'Does Final Touch offer weekend cleaning in Las Vegas?',
    a: `Final Touch works with Las Vegas businesses that need cleaning on Saturday or Sunday. Weekend availability depends on crew scheduling and is not guaranteed in advance. Call ${SITE.phone.display} to check what is available for your preferred weekend date — earlier in the week is better for securing a slot.`,
  },
  {
    q: 'Why would a business need cleaning on a weekend in Las Vegas?',
    a: 'Las Vegas businesses frequently operate on unconventional schedules. Offices preparing for a Monday morning event, retail spaces that are closed on weekends but need cleaning before the next week, commercial kitchens with adjacent office areas, and property management unit turns between tenants are common weekend cleaning scenarios. Weekend cleaning is scheduled around what your business needs, not what the standard Monday-Friday schedule allows.',
  },
  {
    q: 'Is weekend cleaning more expensive than weekday cleaning?',
    a: `Pricing depends on the scope of the job — what needs to be cleaned, the size of the space, and the access logistics. Call ${SITE.phone.display} or request a free quote online. ${SITE.owners} will assess the scope and give you a price before any work begins. No booking until you approve.`,
  },
  {
    q: 'How far in advance should I schedule a weekend cleaning in Las Vegas?',
    a: 'Booking earlier in the week — Tuesday or Wednesday — gives the best chance of securing a Saturday or Sunday crew slot. Weekend slots fill faster than midweek availability. If you need weekend cleaning and it is already Thursday or Friday, call immediately at (702) 444-5077 and we will tell you what is available.',
  },
  {
    q: 'Does Final Touch clean commercial spaces on weekends, or residential only?',
    a: `Final Touch is a commercial-first cleaning company. Weekend cleaning requests typically come from office managers, property managers, retail operators, and business owners who need cleaning during their closed days. Call ${SITE.phone.display} to discuss your space.`,
  },
  {
    q: 'What should I have ready when I call to book weekend cleaning?',
    a: 'Have your address, the size or number of rooms in the space, the specific day (Saturday or Sunday) and time window you need, your access instructions, and a description of what needs to be cleaned. The more detail you can provide on the call, the faster we can confirm whether weekend availability exists for your request.',
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Weekend Cleaning Services in Las Vegas, NV',
  serviceType: 'Weekend Cleaning',
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
    title: 'Offices closed on weekdays but cleaning-ready on weekends',
    body: 'Some Las Vegas offices are easier to clean when staff are absent on the weekend. Booking a Saturday or Sunday clean avoids disruption during working hours and ensures the space is ready for Monday morning. Weekend slot availability varies — call to check.',
  },
  {
    title: 'Property managers with weekend unit turns',
    body: 'Tenant move-outs do not always happen on a Tuesday. When a tenant vacates on a Saturday and the next occupant arrives Monday, the unit turn has to happen over the weekend. Property managers across Las Vegas call Final Touch when a weekend crew is the only option that fits the schedule.',
  },
  {
    title: 'Retail and hospitality operators before Monday open',
    body: 'Las Vegas retail and commercial operators who close for the weekend sometimes need a thorough clean done before they reopen. A Friday-night or Saturday clean can be scheduled based on crew availability — call ahead so the weekend slot can be assessed and held.',
  },
];

const checklistItems = [
  'Address and suite or unit number',
  'Specific day needed — Saturday, Sunday, or either',
  'Preferred time window on that day',
  'Approximate size of the space (square footage or room count)',
  'Description of what needs to be cleaned',
  'Access instructions — key location, entry code, or building contact',
  'Whether the space will be occupied or empty during cleaning',
];

export default function WeekendCleaningServicesPage() {
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
          { label: 'Weekend Cleaning Services' },
        ]}
      />

      {/* 2. Hero */}
      <HeroSection
        eyebrow="Weekend Cleaning · Las Vegas, NV"
        heading="Weekend Cleaning Services in Las Vegas, NV"
        sub={`Need your Las Vegas office or commercial space cleaned on Saturday or Sunday? Call ${SITE.phone.display} to check weekend availability. Final Touch works with businesses that operate on a schedule cleaning cannot wait until Monday to address — subject to crew scheduling.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 3. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Weekend cleaning in Las Vegas is a real scheduling need for commercial operators, property
            managers, and businesses that cannot fit cleaning into a standard weekday window. Final
            Touch works to accommodate Saturday and Sunday cleaning requests across Las Vegas and{' '}
            {SITE.serviceArea.county} based on crew availability — call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>{' '}
            to check, or view{' '}
            <Link
              href={ROUTES.services}
              className="text-brand-blue font-semibold hover:underline"
            >
              all cleaning services
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
            heading="Las Vegas businesses with a weekend cleaning need."
            sub="Weekend cleaning requests come from commercial operators and property managers across the Las Vegas Valley who have a scheduling constraint that weekday cleans cannot solve."
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
            heading="What to have ready when booking weekend cleaning."
            sub="Having these details ready speeds up the scheduling conversation and gets you a direct answer on weekend availability."
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
            Weekend availability is confirmed on the call. Book earlier in the week when possible —
            Saturday and Sunday slots fill faster than midweek availability. Call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>
            .
          </p>
        </div>
      </section>

      {/* 6. Context cards */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Weekend cleaning in Las Vegas"
            heading="Why Las Vegas businesses book weekend cleaning."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'Las Vegas commercial schedules do not follow Monday–Friday',
                body: 'Las Vegas is one of the few markets where significant commercial activity happens on weekends. Offices, retail spaces, property-managed units, and event facilities may be in their cleaning window on a Saturday when other cities would assume a building is open. Final Touch schedules around what your business actually needs.',
              },
              {
                heading: 'Call early in the week for weekend slots',
                body: 'Weekend cleaning slots are more limited than weekday availability. Calling on Tuesday or Wednesday for a Saturday clean gives a meaningful advantage over calling Friday afternoon. If you need weekend cleaning, do not wait — call (702) 444-5077 and we will check what is on the schedule.',
              },
              {
                heading: 'Same standard, different day',
                body: `Weekend cleaning by Final Touch follows the same scope, quality standard, and owner oversight as any weekday clean. ${SITE.owners} oversee every account. The Blue Ribbon Guarantee — 100% satisfaction or we return within 24 hours — applies regardless of the day of the week.`,
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
              { label: 'Same-Day Cleaning', href: '/urgent-cleaning/same-day-cleaning-las-vegas' },
              { label: 'Commercial Office Cleaning', href: '/services/commercial-office-cleaning' },
              { label: 'Janitorial Services', href: '/services/janitorial-services' },
              { label: 'Last-Minute Move-Out Cleaning', href: '/urgent-cleaning/last-minute-move-out-cleaning' },
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
        heading="Weekend cleaning in Las Vegas: frequently asked questions"
      />

      {/* 9. Final CTA */}
      <CTASection
        heading="Need cleaning on a Saturday or Sunday in Las Vegas?"
        sub={`Call ${SITE.phone.display} to check weekend availability. Final Touch works to accommodate weekend cleaning for offices, commercial spaces, and property-managed units across Las Vegas, Henderson, North Las Vegas, and the wider Las Vegas Valley.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
