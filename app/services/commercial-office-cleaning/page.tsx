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
import Breadcrumb from '@/components/shared/Breadcrumb';

export const metadata: Metadata = {
  title: 'Commercial & Office Cleaning | Clark County, NV',
  description:
    'Professional commercial office cleaning across Las Vegas, Henderson, and Clark County, NV. Family-owned. Free walkthrough quotes. Call (702) 444-5077.',
  alternates: { canonical: '/services/commercial-office-cleaning' },
  openGraph: {
    title: 'Commercial Office Cleaning in Las Vegas, NV | Final Touch Cleaning',
    description:
      'Office and commercial cleaning across Clark County, NV. Recurring service, detail-focused work, family-owned team. Free quotes. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/commercial-office-cleaning`,
  },
};

const faq = [
  {
    q: 'What does commercial office cleaning include?',
    a: 'Commercial office cleaning from Final Touch covers workstations, common areas, breakrooms, restrooms, lobbies, and high-touch surfaces like light switches and door handles. We wipe down desks, vacuum floors, mop hard surfaces, and address the finishing details most crews skip: baseboards, vents, and edges. The exact scope is confirmed during your walkthrough.',
  },
  {
    q: 'How is commercial office cleaning different from janitorial services?',
    a: 'Commercial office cleaning is typically a scheduled recurring clean of your office interior. Janitorial services describes a broader ongoing maintenance program that may include restocking supplies, trash management, and facility upkeep on a daily or multi-day schedule. Both are available from Final Touch. The right fit depends on your facility size and how often you need service.',
  },
  {
    q: 'Who hires commercial office cleaning in Las Vegas?',
    a: 'Small business owners, office managers, property managers, and commercial landlords across Clark County. Whether you manage a single suite or a multi-tenant building, a professional clean maintains the standard your space needs without taking staff off their actual work.',
  },
  {
    q: 'How often should an office be cleaned professionally?',
    a: 'Most offices benefit from weekly or bi-weekly professional cleaning, with daily or three-times-per-week service for high-traffic spaces. The right frequency depends on your foot traffic, staff count, and the impressions you need to maintain. We recommend discussing your specific situation during a free walkthrough.',
  },
  {
    q: 'Do you offer commercial cleaning for small offices in Las Vegas?',
    a: 'Yes. We serve offices of all sizes across Clark County, Nevada, including Las Vegas, Henderson, North Las Vegas, and Boulder City. Small suites, single-room offices, and multi-room commercial spaces are all within scope.',
  },
  {
    q: 'How do I get a commercial office cleaning quote in Las Vegas?',
    a: `Call us at ${SITE.phone.display} or request a free quote online. We schedule a walkthrough of your space to confirm scope, frequency, and what the job actually involves before quoting. No guesswork, no templated rates.`,
  },
  {
    q: 'Is commercial cleaning handled differently than residential cleaning?',
    a: 'Yes. Commercial spaces have different compliance needs, higher foot traffic, shared-facility considerations, and scheduling requirements, often after-hours or early morning. Our commercial work is scoped and scheduled around your business operations.',
  },
];

const current = SERVICES.find((s) => s.slug === 'commercial-office-cleaning')!;
const siblings = SERVICES.filter((s) => s.slug !== 'commercial-office-cleaning');

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Commercial & Office Cleaning',
  serviceType: 'Commercial Cleaning',
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

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Commercial & Office Cleaning' },
];

export default function CommercialOfficeCleaningPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero */}
      <HeroSection
        eyebrow="Commercial Cleaning"
        heading="Commercial &amp; Office Cleaning in Las Vegas, NV"
        sub={`Professional commercial cleaning for offices and commercial interiors across ${SITE.serviceArea.county}. Scoped to your space, scheduled around your business.`}
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
            Commercial office cleaning in Las Vegas, NV
          </h2>
          <p className="mt-5 text-base sm:text-lg text-brand-black leading-relaxed">
            Final Touch provides commercial office cleaning for businesses across{' '}
            {SITE.serviceArea.county}, Nevada, including Las Vegas, Henderson, North Las Vegas,
            and Boulder City. We clean offices, suites, and commercial interiors on a schedule
            that fits your operations, covering the surfaces and spaces a professional business
            environment requires. The scope is confirmed during a free walkthrough before any
            work begins. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            or{' '}
            <Link href={ROUTES.freeQuote} className="text-brand-blue font-semibold hover:underline">
              request a free quote
            </Link>{' '}
            to get started.
          </p>
        </div>
      </section>

      {/* 3. Who this is for */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who we serve"
            heading="Built for offices and commercial spaces of all sizes."
            sub="From single-suite tenants to multi-room commercial operations, we serve businesses across Clark County that need a consistent, professional clean."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Small business owners',
                body: 'Keep your office looking professional without pulling staff from their actual work.',
              },
              {
                title: 'Office managers',
                body: 'Reliable recurring service that shows up on schedule and maintains the same standard every visit.',
              },
              {
                title: 'Property managers',
                body: 'Multi-tenant buildings and commercial properties across Clark County, serviced on your schedule.',
              },
              {
                title: 'Commercial landlords',
                body: 'Common areas, lobbies, and shared facilities kept to the standard your tenants and clients expect.',
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
            heading="What our commercial cleaning covers."
            sub="Scope is confirmed during your walkthrough. The list below reflects what a standard commercial office clean addresses."
          />
          <ul className="mt-8 space-y-3">
            {[
              'Workstations and desk surfaces',
              'Common areas and corridors',
              'Breakrooms and kitchen areas',
              'Restrooms and high-touch surfaces',
              'Lobbies and reception areas',
              'Floors: vacuuming and mopping',
              'Glass partitions and interior windows',
              'Trash removal and liner replacement',
              'Baseboards, vents, and switch plates',
              'Edges and corners most crews skip',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Specific scope is confirmed during your free walkthrough. No guesswork, no templated
            checklist applied without seeing your space.
          </p>
        </div>
      </section>

      {/* 5. Why Final Touch */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why Final Touch"
            heading="Local, detail-focused, family-owned."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-3 lg:gap-6">
            {[
              {
                title: 'Family-owned and local',
                body: `${SITE.owners} run Final Touch from Southern Nevada. When you call, you reach the owners or the team directly, not a call center or a staffing platform.`,
              },
              {
                title: 'The details others skip',
                body: 'Baseboards, vents, switch plates, and edges are on our finishing checklist for every job. The final pass is where the standard shows.',
              },
              {
                title: 'Scoped to your space',
                body: 'No templated rates applied before we see your office. Every clean starts with a walkthrough to confirm what the job actually requires.',
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
          <SectionHeader eyebrow="How it works" heading="From first call to clean office." />
          <ol className="mt-10 space-y-8">
            {[
              {
                n: '01',
                title: 'Tell us about your space',
                body: `Call ${SITE.phone.display} or request a quote online. Let us know what type of space you have, approximate size, and how often you need service.`,
              },
              {
                n: '02',
                title: 'Free walkthrough',
                body: 'We visit your office to confirm scope, note any specific requirements, and understand your schedule and access needs.',
              },
              {
                n: '03',
                title: 'Scope and schedule confirmed',
                body: 'We give you a real quote based on what we actually saw, not a template. Frequency and timing are locked in around your business hours.',
              },
              {
                n: '04',
                title: 'Ongoing professional clean',
                body: 'Same team, same checklist, same standard on every visit. If anything falls short, call us and we address it.',
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
            heading="Commercial cleaning across Clark County."
            sub={`We serve commercial clients throughout ${SITE.serviceArea.county}, Nevada. The same team and the same finishing standard across every city we serve.`}
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {[
              { name: 'Las Vegas, NV', href: '/services/commercial-office-cleaning/las-vegas' },
              { name: 'Henderson, NV', href: '/services/commercial-office-cleaning/henderson' },
              { name: 'North Las Vegas, NV', href: '/services/commercial-office-cleaning/north-las-vegas' },
              { name: 'Boulder City, NV', href: '/services/commercial-office-cleaning/boulder-city' },
              { name: 'Clark County, NV', href: '/services/commercial-office-cleaning/clark-county' },
            ].map((city) => (
              <li key={city.name}>
                <Link
                  href={city.href}
                  className="inline-block rounded-full border border-border-subtle bg-brand-white min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
                >
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted">
            Not sure if we cover your area?{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              Call {SITE.phone.display}
            </a>{' '}
            and we will confirm.
          </p>
        </div>
      </section>

      {/* 8. Related services */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Other services"
            heading="More cleaning services from Final Touch."
            sub={`We offer seven core cleaning services across ${SITE.serviceArea.county}.`}
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
        heading="Commercial office cleaning questions"
        items={faq}
        defaultOpenFirst
      />

      {/* 10. Final CTA */}
      <CTASection
        heading="Ready for a professional office clean?"
        sub={`Free walkthrough quotes across ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a request and we will get back to you.`}
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
    </>
  );
}
