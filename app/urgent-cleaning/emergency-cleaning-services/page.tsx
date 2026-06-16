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
  title: 'Emergency Cleaning Services in Las Vegas, NV',
  description:
    'Emergency cleaning Las Vegas: unexpected spills, post-event messes, or urgent facility situations. Call (702) 444-5077 — Final Touch works to mobilize based on crew availability.',
  alternates: {
    canonical: '/urgent-cleaning/emergency-cleaning-services',
  },
  openGraph: {
    title: 'Emergency Cleaning Services in Las Vegas, NV | Final Touch',
    description:
      'Emergency cleaning Las Vegas: unexpected spills, post-event messes, or urgent facility situations. Call (702) 444-5077 — Final Touch works to mobilize based on crew availability.',
    type: 'website',
    url: `${SITE.url}/urgent-cleaning/emergency-cleaning-services`,
  },
};

const faq = [
  {
    q: 'What counts as an emergency cleaning situation in Las Vegas?',
    a: 'Emergency cleaning situations typically involve an unplanned event that leaves a commercial space non-functional or unacceptable for business: a significant spill, post-event or post-incident cleanup, a facility condition that appeared overnight, or an urgent need ahead of an inspection or key appointment. Final Touch assesses each situation on the call and determines whether mobilization is feasible based on scope and crew availability.',
  },
  {
    q: 'Is Final Touch available 24/7 for emergency cleaning?',
    a: `Final Touch is a family-owned cleaning company, not a 24/7 emergency dispatch service. For urgent cleaning situations, call ${SITE.phone.display} during business hours. We work to assess the situation and mobilize when crew scheduling allows. The sooner you call, the more we can do to help.`,
  },
  {
    q: 'What emergency cleaning situations can Final Touch handle?',
    a: `Final Touch handles professional cleaning for commercial spaces across Las Vegas and Clark County: post-event cleanup, unexpected messes in office environments, urgent pre-inspection cleans, and facility situations that need addressing before the next business day. Scope is assessed on the call. Call ${SITE.phone.display} to describe your situation.`,
  },
  {
    q: 'How quickly can Final Touch respond to an emergency cleaning call?',
    a: 'Response time depends on crew availability at the time of your call and your location within the Las Vegas Valley. Final Touch does not guarantee a specific response window. Calling as early as possible gives us the best ability to assess what is feasible and get a crew to you.',
  },
  {
    q: 'Does Final Touch handle emergency cleaning for commercial properties only?',
    a: `Final Touch is a commercial-first cleaning company. Emergency cleaning requests are assessed based on scope and type of space — office buildings, commercial interiors, retail spaces, and property-managed units are typical. Call ${SITE.phone.display} to describe your situation and we will tell you whether it falls within our scope.`,
  },
  {
    q: 'What should I tell Final Touch when I call about an emergency cleaning situation?',
    a: 'Describe the situation clearly: what happened, where the space is located, roughly how large the affected area is, what kind of cleaning is needed, and when you need it addressed. The clearer the picture you give us on the call, the faster we can tell you whether we can help and what it will take.',
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Emergency Cleaning Services in Las Vegas, NV',
  serviceType: 'Emergency Cleaning',
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
    title: 'Commercial property managers',
    body: 'A flooded break room, a post-party mess in a common area, or a facility condition discovered the morning before an inspection — property managers across Las Vegas need a cleaning partner who can respond to unplanned situations. Final Touch works through these requests based on crew availability.',
  },
  {
    title: 'Office and facility managers',
    body: 'Emergency cleaning situations in office environments often appear with little warning: a major spill, a post-event cleanup, or a sudden facility need before a critical meeting or inspection. Facility managers who call Final Touch early have the best chance of getting a crew mobilized.',
  },
  {
    title: 'Business owners before key inspections',
    body: 'A health inspection, a licensing review, or a surprise audit can create a genuine emergency cleaning need. Final Touch handles urgent commercial cleaning situations across Las Vegas and Clark County when crew scheduling allows — subject to availability.',
  },
];

const checklistItems = [
  'Address and suite or unit number of the affected space',
  'Description of what happened and what needs to be cleaned',
  'Approximate size of the affected area',
  'Your timeline — when the space needs to be usable again',
  'Access details — entry codes, key location, building contact',
  'Whether the space is currently occupied or if access is unrestricted',
];

export default function EmergencyCleaningServicesPage() {
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
          { label: 'Emergency Cleaning Services' },
        ]}
      />

      {/* 2. Hero */}
      <HeroSection
        eyebrow="Emergency Cleaning · Las Vegas, NV"
        heading="Emergency Cleaning Services in Las Vegas, NV"
        sub={`When something unexpected happens in your commercial space, call Final Touch at ${SITE.phone.display}. We assess the situation on the call and work to mobilize a crew based on scope and availability. Describe what happened — we will tell you what we can do.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 3. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Emergency cleaning in Las Vegas means calling to describe what happened and finding out
            whether a crew can be dispatched. Final Touch handles urgent commercial cleaning
            situations — post-event messes, unexpected spills, facility conditions requiring immediate
            attention — across Las Vegas and{' '}
            {SITE.serviceArea.county}, subject to crew availability. Call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>{' '}
            or view{' '}
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
            heading="Commercial clients facing an unplanned cleaning situation."
            sub="Emergency cleaning requests typically come from commercial operators, property managers, and facility teams — not residential clients."
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
            heading="What to have ready for an emergency cleaning call."
            sub="The more clearly you can describe the situation, the faster Final Touch can assess whether and how we can help."
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
            Emergency cleaning availability depends on what crew is available at the time of your call
            and your location in the Las Vegas Valley. Call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>{' '}
            and describe the situation directly.
          </p>
        </div>
      </section>

      {/* 6. Context cards */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Emergency cleaning in Las Vegas"
            heading="What to expect when you call about an emergency."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'Scope assessment on the call',
                body: 'When you call about an emergency cleaning situation, Final Touch will ask you to describe what happened, where the space is, and what needs to be addressed. That conversation is what determines whether mobilization is feasible — not a form or a chatbot.',
              },
              {
                heading: 'Availability is real, not a promise',
                body: 'Emergency cleaning response depends on what crew is available in your area at that moment. Final Touch will give you an honest answer on the call. If we cannot help, we will tell you that directly rather than committing to something we cannot deliver.',
              },
              {
                heading: 'Licensed, insured, and owner-led',
                body: `Final Touch is licensed and fully insured in Nevada and operated by ${SITE.owners}. For commercial accounts where vendor documentation is required, it is available on request. Every cleaning engagement is owner-overseen.`,
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
        heading="Emergency cleaning in Las Vegas: frequently asked questions"
      />

      {/* 9. Final CTA */}
      <CTASection
        heading="Facing an emergency cleaning situation in Las Vegas?"
        sub={`Call ${SITE.phone.display} and describe what happened. Final Touch works to assess every urgent situation and mobilize a crew when availability allows. Serving Las Vegas, Henderson, North Las Vegas, and the wider Las Vegas Valley.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
