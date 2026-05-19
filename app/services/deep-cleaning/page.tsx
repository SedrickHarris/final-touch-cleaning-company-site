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
  title: 'Deep Cleaning Service in Las Vegas, NV | Final Touch',
  description:
    'Professional deep cleaning for homes and businesses in Las Vegas, Henderson, and Clark County, NV. One-time or periodic resets. Call (702) 444-5077.',
  alternates: { canonical: '/services/deep-cleaning' },
  openGraph: {
    title: 'Deep Cleaning Service in Las Vegas, NV | Final Touch Cleaning',
    description:
      'Periodic deep cleans for the corners standard service skips. Serving Clark County, NV. Family-owned team. Free quotes. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/deep-cleaning`,
  },
};

const faq = [
  {
    q: 'What does a deep cleaning service include?',
    a: 'Deep cleaning goes beyond a routine maintenance clean. It covers baseboards, vents, inside appliances, under and behind furniture, light fixtures, window sills, cabinet interiors, grout, and all the surfaces that accumulate buildup over time. It is a periodic reset for spaces that need more than a weekly clean.',
  },
  {
    q: 'How is deep cleaning different from regular cleaning?',
    a: 'Regular cleaning maintains the surface on a routine schedule: vacuuming, mopping, wiping countertops, cleaning bathrooms. Deep cleaning goes into the areas that get skipped in a routine clean: inside appliances, behind furniture, vents, baseboards, cabinet interiors, and built-up grime in grout and corners.',
  },
  {
    q: 'How often should I schedule a deep clean?',
    a: 'Most households benefit from a deep clean once or twice a year, in addition to regular maintenance cleaning. The right frequency depends on how heavily the space is used, whether you have pets or children, and how long it has been since the last deep clean. We can advise on timing during the quote walkthrough.',
  },
  {
    q: 'Who hires deep cleaning services in Las Vegas?',
    a: 'Homeowners preparing for guests or seasonal resets, landlords turning over a property between long-term tenants, property managers maintaining premium rentals, and businesses resetting shared spaces. We serve deep cleaning clients across Las Vegas, Henderson, North Las Vegas, and Boulder City.',
  },
  {
    q: 'Can a deep clean be done while I am at home?',
    a: 'Yes. Most deep cleans are done while the homeowner is present or steps out briefly. The crew works room by room and does not need the home to be empty. If you prefer the space cleared of people, that can be accommodated during scheduling.',
  },
  {
    q: 'Is deep cleaning a one-time service or can it become recurring?',
    a: 'Deep cleaning is most commonly a one-time service followed by regular maintenance cleaning. Some clients schedule a deep clean quarterly or seasonally as a reset alongside their regular routine. We can discuss what works best for your space during the booking.',
  },
  {
    q: 'How do I get a deep cleaning quote in Las Vegas?',
    a: `Call ${SITE.phone.display} or request a free quote online. For deep cleaning, we ask about the size of the space and when it last had a thorough clean. That gives us what we need to scope the job accurately before quoting.`,
  },
];

const current = SERVICES.find((s) => s.slug === 'deep-cleaning')!;
const siblings = SERVICES.filter((s) => s.slug !== 'deep-cleaning');

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Deep Cleaning',
  serviceType: 'Deep Cleaning',
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
      name: 'Deep Cleaning',
      item: `${SITE.url}/services/deep-cleaning`,
    },
  ],
};

export default function DeepCleaningPage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection
        eyebrow="Deep Cleaning"
        heading="Deep Cleaning Service in Las Vegas, NV"
        sub={`Periodic deep cleans for the corners standard service skips. We reset homes and commercial spaces across ${SITE.serviceArea.county} to a standard a routine clean cannot reach.`}
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
            Deep cleaning in Las Vegas, NV
          </h2>
          <p className="mt-5 text-base sm:text-lg text-brand-black leading-relaxed">
            Final Touch provides deep cleaning for homes and commercial spaces across{' '}
            {SITE.serviceArea.county}, Nevada. A deep clean goes beyond the surface maintenance of
            a routine clean to address the buildup that accumulates in the areas most crews skip:
            inside appliances, behind furniture, vents, baseboards, grout, and cabinet interiors.
            It is a thorough reset for spaces that need more than weekly upkeep can deliver. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            or{' '}
            <Link href={ROUTES.freeQuote} className="text-brand-blue font-semibold hover:underline">
              request a free quote
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 3. Who this is for */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who we serve"
            heading="Homeowners, landlords, and businesses across Clark County."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Homeowners',
                body: 'Preparing for guests, doing a seasonal reset, or catching up on the buildup that routine cleaning misses. A deep clean restores the standard.',
              },
              {
                title: 'Landlords and property managers',
                body: 'Between long-term tenants, a deep clean addresses what normal upkeep skips and resets the property for the next occupant.',
              },
              {
                title: 'Vacation rental owners',
                body: 'Periodic deep cleans keep your rental in the condition guests expect, beyond what a standard turnover clean achieves.',
              },
              {
                title: 'Business owners',
                body: 'Shared spaces, breakrooms, and commercial interiors benefit from a periodic deep clean alongside regular janitorial service.',
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
            heading="What a deep clean covers."
            sub="A deep clean goes into the areas a routine maintenance clean does not reach."
          />
          <ul className="mt-8 space-y-3">
            {[
              'Inside appliances: oven, refrigerator, microwave, dishwasher',
              'Baseboards, window sills, and ledges',
              'Vents, air returns, and ceiling fans',
              'Inside cabinets, drawers, and shelving',
              'Behind and under furniture (accessible areas)',
              'Grout lines and tile surfaces',
              'Light fixtures and switch plate surrounds',
              'Bathroom fixtures, tile, and mirrors',
              'All floor surfaces: deep vacuum and mop',
              'High-touch surface sanitizing throughout',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Scope is confirmed before the clean begins. If you have specific priorities or areas
            of concern, let us know during booking.
          </p>
        </div>
      </section>

      {/* 5. Why Final Touch */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why Final Touch"
            heading="The details others leave for next time."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-3 lg:gap-6">
            {[
              {
                title: 'Surface-to-surface thoroughness',
                body: 'A deep clean from Final Touch covers appliance interiors, cabinet interiors, vents, and grout, not just counters and floors. We work through the checklist until it is done.',
              },
              {
                title: 'Family-owned and local',
                body: `${SITE.owners} run Final Touch from Southern Nevada. Your space is treated with the same care the owners apply to every job they oversee.`,
              },
              {
                title: 'One-time or recurring',
                body: 'Most clients schedule a deep clean as a periodic reset alongside regular maintenance. We can set up both during the booking conversation.',
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
          <SectionHeader eyebrow="How it works" heading="From first call to thoroughly clean space." />
          <ol className="mt-10 space-y-8">
            {[
              {
                n: '01',
                title: 'Tell us about the space',
                body: `Call ${SITE.phone.display} or request a quote online. Let us know the size of the space, when it last had a thorough clean, and any specific priorities.`,
              },
              {
                n: '02',
                title: 'Scope confirmed',
                body: 'We confirm the scope based on your space and priorities. For larger or more complex jobs, a brief walkthrough may help us quote accurately.',
              },
              {
                n: '03',
                title: 'Schedule your deep clean',
                body: 'We confirm your date and time. Deep cleans typically take longer than a routine visit, so we block the appropriate window.',
              },
              {
                n: '04',
                title: 'Deep clean completed',
                body: 'We work through the space on the full checklist: appliance interiors, vents, baseboards, cabinets, grout, and every finishing surface. Done when the work is actually done.',
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
            heading="Deep cleaning across Clark County."
            sub={`We serve deep cleaning clients throughout ${SITE.serviceArea.county}, Nevada, including Las Vegas, Henderson, North Las Vegas, and Boulder City.`}
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {[
              { name: 'Las Vegas, NV', href: '/services/deep-cleaning/las-vegas' },
              { name: 'Henderson, NV', href: '/services/deep-cleaning/henderson' },
              { name: 'North Las Vegas, NV', href: '/services/deep-cleaning/north-las-vegas' },
              { name: 'Boulder City, NV', href: '/services/deep-cleaning/boulder-city' },
              { name: 'Clark County, NV', href: '/services/deep-cleaning/clark-county' },
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
        heading="Deep cleaning questions"
        items={faq}
        defaultOpenFirst
      />

      {/* 10. Final CTA */}
      <CTASection
        heading="Schedule your deep cleaning."
        sub={`Free quotes across ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a request and we will get back to you.`}
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
