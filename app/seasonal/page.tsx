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
  title: { absolute: 'Seasonal Cleaning Services in Las Vegas, NV | Final Touch' },
  description: `Seasonal cleaning services in Las Vegas, NV — spring, summer, holiday, and move-out cleans for commercial properties. Call ${SITE.phone.display}.`,
  alternates: {
    canonical: '/seasonal',
  },
  openGraph: {
    title: 'Seasonal Cleaning Services in Las Vegas, NV | Final Touch',
    description: `Seasonal cleaning services in Las Vegas, NV — spring, summer, holiday, and move-out cleans for commercial properties. Call ${SITE.phone.display}.`,
    type: 'website',
    url: `${SITE.url}/seasonal`,
  },
};

const seasonalPages = [
  {
    slug: 'spring-cleaning-las-vegas',
    name: 'Spring Cleaning Services',
    summary:
      'March–May deep-reset cleaning for commercial properties, offices, and managed units. Post-winter dust buildup, HVAC filter prep, and surface renewal before the Las Vegas heat season.',
    href: '/seasonal/spring-cleaning-las-vegas',
  },
  {
    slug: 'holiday-cleaning-services',
    name: 'Holiday Cleaning Services',
    summary:
      'November–December cleaning for retail stores, restaurants, offices, and commercial properties ahead of holiday foot traffic and year-end events.',
    href: '/seasonal/holiday-cleaning-services',
  },
  {
    slug: 'post-holiday-cleanup',
    name: 'Post-Holiday Cleanup',
    summary:
      'January reset cleaning after the holiday season: event cleanup, high-touch surface reset, and common-area renewal for commercial and managed properties.',
    href: '/seasonal/post-holiday-cleanup',
  },
  {
    slug: 'summer-deep-cleaning',
    name: 'Summer Deep Cleaning',
    summary:
      'June–August deep cleaning for Las Vegas commercial spaces during the desert heat season. Address dust infiltration, HVAC-related particle buildup, and high-traffic summer surfaces.',
    href: '/seasonal/summer-deep-cleaning',
  },
  {
    slug: 'back-to-school-home-reset',
    name: 'Back-to-School Home Reset Cleaning',
    summary:
      'August schedule-shift cleaning for residential rental units, property managers, and families returning to routine. Common-area refresh and unit-turn cleans timed to the school-year transition.',
    href: '/seasonal/back-to-school-home-reset',
  },
  {
    slug: 'move-out-cleaning-for-college-students',
    name: 'Move-Out Cleaning for College Students',
    summary:
      'May–June deposit-ready move-out cleaning aligned with the UNLV academic calendar. For property managers, landlords, and student renters across the Las Vegas Valley.',
    href: '/seasonal/move-out-cleaning-for-college-students',
  },
  {
    slug: 'new-years-clean-start',
    name: "New Year's Clean Start",
    summary:
      'Late December–January cleaning reset for commercial properties, offices, and managed spaces. Start the new year with a thorough professional clean and fresh baseline.',
    href: '/seasonal/new-years-clean-start',
  },
];

const whySeasonalCards = [
  {
    title: 'Las Vegas seasons drive distinct cleaning demands',
    body: "The desert climate concentrates dust and particulate matter differently across the year. Spring brings post-winter buildup and preparation for the heat season. Summer introduces peak dust infiltration. The holiday period drives the highest commercial foot traffic of the year. Each seasonal window has its own cleaning priority that a standard recurring program doesn't address.",
  },
  {
    title: 'Commercial properties have seasonal obligations',
    body: 'Property managers, retail operators, and commercial tenants often have lease obligations, inspection cycles, or operational standards that align with the calendar. Seasonal cleaning supports compliance with those standards and keeps properties in condition for inspections, renewals, and tenant transitions.',
  },
  {
    title: 'Owner-confirmed scope for each season',
    body: `${SITE.owners} walk every property before work begins. Seasonal cleans are scoped to what the property actually needs at that point in the year — not a standard template applied across every client. Call ${SITE.phone.display} to discuss your property.`,
  },
];

const faq = [
  {
    q: 'What is seasonal cleaning in Las Vegas?',
    a: `Seasonal cleaning in Las Vegas refers to professional cleaning timed to specific times of year when properties have distinct needs: spring post-winter resets, summer dust-load cleaning, holiday preparation, post-holiday cleanup, and academic-calendar move-out cleaning. Final Touch provides seasonal cleaning for commercial properties, offices, managed units, and residential rental properties across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} to discuss your property.`,
  },
  {
    q: 'Does Final Touch offer one-time seasonal cleaning or only recurring programs?',
    a: 'Final Touch provides both one-time seasonal cleans and recurring programs. A one-time spring cleaning, post-holiday cleanup, or move-out clean is available as a standalone service. Recurring seasonal programs (for example, quarterly deep cleans tied to seasonal transitions) can also be arranged. Scope and frequency are confirmed during the initial walkthrough.',
  },
  {
    q: 'What Las Vegas seasonal cleaning services does Final Touch provide?',
    a: 'Final Touch provides seven seasonal cleaning services: spring cleaning (March–May), holiday cleaning (November–December), post-holiday cleanup (January), summer deep cleaning (June–August), back-to-school home reset (August), move-out cleaning for college students (May–June), and a New Year clean start (late December–January). Each is scoped to the specific seasonal needs of Las Vegas commercial and managed properties.',
  },
  {
    q: 'Does seasonal cleaning cost more than regular cleaning?',
    a: `Seasonal cleans typically involve more scope than a standard recurring visit — deeper surface work, less-accessed areas, or areas that accumulate seasonal buildup. Final Touch quotes every job based on the actual scope confirmed during the walkthrough. Call ${SITE.phone.display} or request a free quote to discuss your property's seasonal needs.`,
  },
  {
    q: 'Can Final Touch handle seasonal cleaning for a commercial property or managed building?',
    a: `Yes. Seasonal cleaning for commercial properties, retail spaces, offices, and managed residential buildings is a core part of what Final Touch does. Property managers and commercial operators across Las Vegas and ${SITE.serviceArea.county} use Final Touch for seasonal resets, tenant turn cleaning, and holiday preparation. Call ${SITE.phone.display} to discuss your portfolio or property.`,
  },
];

const collectionPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Seasonal Cleaning Services in Las Vegas, NV | Final Touch',
  description:
    'Seasonal cleaning services in Las Vegas, NV for commercial properties, offices, and managed units. Spring, summer, holiday, move-out, and year-reset cleans.',
  url: `${SITE.url}/seasonal`,
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone.href.replace('tel:', ''),
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

const relatedServices = [
  { label: 'Deep Cleaning', href: '/services/deep-cleaning' },
  { label: 'Move-Out Cleaning', href: '/services/move-out-cleaning' },
  { label: 'Move-In Cleaning', href: '/services/move-in-cleaning' },
  { label: 'Commercial & Office Cleaning', href: '/services/commercial-office-cleaning' },
  { label: 'Janitorial Services', href: '/services/janitorial-services' },
  { label: 'All Services', href: ROUTES.services },
];

export default function SeasonalHubPage() {
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

      {/* Breadcrumb (renders visible trail + BreadcrumbList JSON-LD) */}
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Seasonal' }]} />

      {/* 1. Hero */}
      <HeroSection
        eyebrow="Seasonal Cleaning · Las Vegas, NV"
        heading="Seasonal Cleaning Services in Las Vegas, NV"
        sub={`Las Vegas properties have distinct cleaning needs at each point in the year: spring resets, summer dust loads, holiday preparation, post-holiday cleanup, and move-out cleans tied to the academic calendar. Final Touch provides seasonal cleaning for commercial operators, property managers, and managed units across ${SITE.serviceArea.county}. Call ${SITE.phone.display}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Seasonal cleaning in Las Vegas is professional cleaning timed to the specific demands of each
            part of the year — spring deep resets, summer dust-load cleaning, holiday preparation, and
            student move-out cleans.{' '}
            <Link href={ROUTES.services} className="text-brand-blue font-semibold hover:underline">
              Final Touch cleaning services
            </Link>{' '}
            covers commercial properties, offices, retail spaces, and managed residential units across Las
            Vegas and {SITE.serviceArea.county}. Scope is confirmed at a walkthrough before any work begins.
            Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to discuss your property.
          </p>
        </div>
      </section>

      {/* 3. Seasonal service card grid */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Seasonal Services"
            heading="Select your seasonal cleaning need."
            sub="Each page covers scope, seasonal context, FAQs, and service details specific to that time of year in Las Vegas."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {seasonalPages.map((page) => (
              <li
                key={page.slug}
                className="flex flex-col rounded-[14px] border border-border-subtle bg-brand-white p-6 shadow-sm"
              >
                <h2 className="font-display text-xl font-semibold text-brand-black">{page.name}</h2>
                <p className="mt-3 text-sm text-muted leading-relaxed flex-1">{page.summary}</p>
                <div className="mt-5">
                  <Link
                    href={page.href}
                    className="inline-flex min-h-[44px] items-center rounded-full bg-light-gray px-4 py-2 text-sm font-semibold text-brand-blue hover:bg-blue-50 transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Why seasonal cleaning matters */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why It Matters"
            heading="Las Vegas has seasonal cleaning demands that recurring programs miss."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {whySeasonalCards.map(({ title, body }) => (
              <div
                key={title}
                className="rounded-[14px] border border-border-subtle bg-light-gray p-6"
              >
                <h3 className="font-display text-lg font-semibold text-brand-black">{title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Related services chips */}
      <section className="bg-light-gray border-y border-border-subtle">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-10 sm:py-12">
          <p className="text-sm font-semibold text-muted uppercase tracking-wide mb-4">
            Related services
          </p>
          <div className="flex flex-wrap gap-3">
            {relatedServices.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="inline-flex min-h-[44px] items-center rounded-full bg-brand-white px-4 py-2 text-sm font-semibold text-brand-blue border border-border-subtle hover:bg-blue-50 transition-colors"
              >
                {svc.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <FAQSection
        items={faq}
        heading="Seasonal cleaning in Las Vegas: frequently asked questions"
        defaultOpenFirst
      />

      {/* 7. Final CTA */}
      <CTASection
        heading="Ready to schedule seasonal cleaning in Las Vegas?"
        sub={`Free quotes for seasonal cleaning across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
