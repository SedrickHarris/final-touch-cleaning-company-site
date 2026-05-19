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
  title: 'Janitorial Services in Las Vegas, NV | Final Touch Cleaning',
  description:
    'Scheduled janitorial services for offices and commercial facilities across Las Vegas, Henderson, and Clark County, NV. Family-owned. Call (702) 444-5077.',
  alternates: { canonical: '/services/janitorial-services' },
  openGraph: {
    title: 'Janitorial Services in Las Vegas, NV | Final Touch Cleaning Company',
    description:
      'Reliable scheduled janitorial programs for offices, retail, and commercial facilities across Clark County, NV. Family-owned team. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/janitorial-services`,
  },
};

const faq = [
  {
    q: 'What does a janitorial service include?',
    a: 'Janitorial services from Final Touch include scheduled cleaning of shared facilities: restrooms, lobbies, breakrooms, corridors, and high-touch surfaces. The exact program depends on your facility size, traffic, and schedule. Common deliverables include trash management, floor care, surface sanitizing, and restroom maintenance.',
  },
  {
    q: 'How is janitorial service different from commercial office cleaning?',
    a: 'Janitorial service typically describes an ongoing maintenance program with a defined schedule and scope for a facility. Commercial office cleaning can refer to a single recurring clean of an office interior. The distinction is mostly about scope and frequency. We offer both, and a walkthrough helps determine the right fit for your facility.',
  },
  {
    q: 'Who uses janitorial services in Las Vegas?',
    a: 'Office buildings, retail operations, gyms, medical waiting areas, warehouses, and any commercial facility that needs regular cleaning and facility upkeep. We serve commercial clients across Clark County, including Las Vegas, Henderson, North Las Vegas, and Boulder City.',
  },
  {
    q: 'How do you schedule janitorial services for my facility?',
    a: `We start with a free walkthrough of your space to understand size, traffic, and what the job actually requires. From there we confirm scope, frequency, and timing. Call ${SITE.phone.display} or request a quote online to set up the walkthrough.`,
  },
  {
    q: 'Do you offer daily janitorial services?',
    a: 'Frequency is determined during the walkthrough based on your facility needs. We can accommodate daily, three-times-per-week, weekly, and other recurring schedules. The right rhythm depends on foot traffic, restroom count, and how your facility is used.',
  },
  {
    q: 'Does Final Touch provide janitorial services for small businesses?',
    a: 'Yes. We serve facilities of all sizes across Clark County, Nevada. Small offices, single-suite tenants, and retail operations are welcome alongside larger commercial clients.',
  },
  {
    q: 'Do you bring your own supplies and equipment for janitorial work?',
    a: 'Confirmed supply and equipment policy is detailed during your walkthrough. We encourage you to ask about this specifically during the scoping conversation to confirm what is included in your service program.',
  },
];

const current = SERVICES.find((s) => s.slug === 'janitorial-services')!;
const siblings = SERVICES.filter((s) => s.slug !== 'janitorial-services');

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Janitorial Services',
  serviceType: 'Janitorial Services',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone.href.replace('tel:', ''),
    email: SITE.email.display,
  },
  areaServed: [SITE.serviceArea.county, ...SITE.serviceArea.cities].map(
    (name) => ({ '@type': 'City', name: `${name}, ${SITE.serviceArea.stateAbbr}` })
  ),
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
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Janitorial Services',
      item: `${SITE.url}/services/janitorial-services`,
    },
  ],
};

export default function JanitorialServicesPage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection
        eyebrow="Janitorial Services"
        heading="Janitorial Services in Las Vegas, NV"
        sub={`Scheduled janitorial programs for offices, retail operations, and commercial facilities across ${SITE.serviceArea.county}. Reliable, recurring, scoped to your space.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={current.image}
      />

      {/* 2. Quick Answer */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue font-body">
            What it is
          </p>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black">
            Janitorial services in Las Vegas, NV
          </h2>
          <p className="mt-5 text-base sm:text-lg text-brand-black leading-relaxed">
            Final Touch provides scheduled janitorial services for commercial facilities across{' '}
            {SITE.serviceArea.county}, Nevada. A janitorial program is an ongoing maintenance
            arrangement: your facility is cleaned on a set schedule, with a defined scope built
            around your size, traffic, and operational hours. We serve Las Vegas, Henderson,
            North Las Vegas, and Boulder City. The scope and schedule are confirmed during a free
            walkthrough before any work begins. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            or{' '}
            <Link href={ROUTES.freeQuote} className="text-brand-blue font-semibold hover:underline">
              request a free quote
            </Link>{' '}
            to set up the walkthrough.
          </p>
        </div>
      </section>

      {/* 3. Who this is for */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who we serve"
            heading="Commercial facilities of all types across Clark County."
            sub="Any facility that requires regular cleaning on a scheduled basis."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Office buildings',
                body: 'Workstations, restrooms, lobbies, and shared areas maintained on your operational schedule.',
              },
              {
                title: 'Retail operations',
                body: 'Sales floors, fitting rooms, restrooms, and entrances kept customer-ready before opening.',
              },
              {
                title: 'Commercial facilities',
                body: 'Warehouses, gyms, medical waiting rooms, and multi-use facilities serviced on a recurring program.',
              },
              {
                title: 'Property managers',
                body: 'Multi-tenant buildings and commercial properties maintained to a consistent standard across all shared areas.',
              },
            ].map((item) => (
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
            heading="What a janitorial program typically covers."
            sub="Exact scope is confirmed during your walkthrough. The list below reflects common deliverables across commercial janitorial programs."
          />
          <ul className="mt-8 space-y-3">
            {[
              'Restroom cleaning and sanitation',
              'Trash removal and liner replacement',
              'Lobby, corridor, and common-area maintenance',
              'Floor care: vacuuming, sweeping, mopping',
              'Breakroom and kitchen area cleaning',
              'High-touch surface sanitizing',
              'Workstation and desk surface wiping',
              'Glass and interior window cleaning',
              'Baseboards, vents, and finishing details',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            The janitorial program for your facility is built around your space. Nothing is
            assumed before the walkthrough.
          </p>
        </div>
      </section>

      {/* 5. Why Final Touch */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why Final Touch"
            heading="Reliable, local, detail-focused."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-3 lg:gap-6">
            {[
              {
                title: 'Shows up on schedule',
                body: 'A janitorial program only works if the crew is reliable. We build the schedule during the walkthrough and hold to it.',
              },
              {
                title: 'Family-owned and local',
                body: `${SITE.owners} run Final Touch from Southern Nevada. When something is off, you call the owners directly, not a regional manager.`,
              },
              {
                title: 'Same standard every visit',
                body: 'Same finishing checklist on every job. The details that create a consistently clean facility do not get skipped between visits.',
              },
            ].map((item) => (
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

      {/* 6. Process */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader eyebrow="How it works" heading="From walkthrough to ongoing program." />
          <ol className="mt-10 space-y-8">
            {[
              {
                n: '01',
                title: 'Tell us about your facility',
                body: `Call ${SITE.phone.display} or request a quote online. Let us know the type of facility, approximate size, and how often you need service.`,
              },
              {
                n: '02',
                title: 'Free facility walkthrough',
                body: 'We visit your space to confirm scope, note access requirements, and understand your operational schedule.',
              },
              {
                n: '03',
                title: 'Program and schedule confirmed',
                body: 'We give you a real quote based on what we saw, with frequency and timing built around your facility hours.',
              },
              {
                n: '04',
                title: 'Ongoing janitorial program',
                body: 'Regular visits on your confirmed schedule. Same crew, same checklist. If anything falls short, reach us directly.',
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-6">
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-soft-blue text-brand-blue font-semibold text-sm font-body"
                >
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-brand-black">{step.title}</h3>
                  <p className="mt-1.5 text-base text-muted leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. Service areas */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Service area"
            heading="Janitorial services across Clark County."
            sub={`Commercial janitorial programs for facilities throughout ${SITE.serviceArea.county}, Nevada.`}
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {[
              { name: 'Las Vegas, NV', href: '/services/janitorial-services/las-vegas' },
              { name: 'Henderson, NV', href: '/services/janitorial-services/henderson' },
              { name: 'North Las Vegas, NV', href: '/services/janitorial-services/north-las-vegas' },
              { name: 'Boulder City, NV', href: '/services/janitorial-services/boulder-city' },
              { name: 'Clark County, NV', href: '/services/janitorial-services/clark-county' },
            ].map((city) => (
              <li key={city.name}>
                <Link
                  href={city.href}
                  className="inline-block rounded-full border border-border-subtle bg-brand-white px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
                >
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. Related services */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Other services"
            heading="More cleaning services from Final Touch."
            sub={`Seven core cleaning services across ${SITE.serviceArea.county}.`}
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {siblings.map((s) => (
              <li key={s.slug} className="h-full">
                <ServiceCard href={s.href} name={s.name} description={s.shortDescription} image={s.image} />
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm">
            <Link href={ROUTES.services} className="font-semibold text-brand-blue hover:underline">
              View all cleaning services →
            </Link>
          </p>
        </div>
      </section>

      {/* 9. FAQ */}
      <FAQSection
        heading="Janitorial services questions"
        items={faq}
        defaultOpenFirst
      />

      {/* 10. Final CTA */}
      <CTASection
        heading="Ready to set up a janitorial program?"
        sub={`Free walkthrough quotes for commercial facilities across ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

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
    </>
  );
}
