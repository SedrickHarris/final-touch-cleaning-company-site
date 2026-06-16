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
  title: 'Back-to-School Home Reset Cleaning, Las Vegas, NV',
  description: `Back to school cleaning Las Vegas — August schedule-shift cleaning for rental units, common areas, and managed properties. Call ${SITE.phone.display}.`,
  alternates: {
    canonical: '/seasonal/back-to-school-home-reset',
  },
  openGraph: {
    title: 'Back-to-School Home Reset Cleaning, Las Vegas, NV | Final Touch',
    description: `Back to school cleaning Las Vegas — August schedule-shift cleaning for rental units, common areas, and managed properties. Call ${SITE.phone.display}.`,
    type: 'website',
    url: `${SITE.url}/seasonal/back-to-school-home-reset`,
  },
};

const faq = [
  {
    q: 'What is back-to-school cleaning in Las Vegas?',
    a: `Back-to-school cleaning in Las Vegas is August schedule-shift cleaning for rental units, managed residential properties, and common areas timed to the academic calendar transition. As students and families return to routines in August, property managers and landlords use this window for unit resets, common-area refreshes, and cleaning that aligns with the UNLV academic schedule. Final Touch provides back-to-school cleaning across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display}.`,
  },
  {
    q: 'Who uses back-to-school cleaning services in Las Vegas?',
    a: 'Property managers and landlords near UNLV and other Las Vegas educational institutions use back-to-school cleaning to prepare units for returning students, reset common areas after summer, and complete any unit turns that align with August lease starts. Families also use August as a schedule-shift reset before the school year begins. Final Touch serves both commercial operators and residential rental properties.',
  },
  {
    q: 'When should back-to-school cleaning be scheduled in Las Vegas?',
    a: 'August is the primary window — specifically the two to three weeks before UNLV classes begin and before K-12 school starts in Clark County. For property managers with August lease starts, scheduling in late July or early August ensures units are ready before incoming tenants arrive. For families, mid-August cleaning aligns with the schedule shift before the school year.',
  },
  {
    q: 'Does Final Touch do cleaning for properties near UNLV?',
    a: `Yes. Final Touch provides cleaning for rental units, managed properties, and common areas across Las Vegas, including areas near UNLV and other educational institutions. August unit turns and common-area resets aligned with the academic calendar are part of Final Touch's seasonal service offering. Call ${SITE.phone.display} or request a free quote online.`,
  },
  {
    q: 'Is back-to-school cleaning different from a standard move-out clean?',
    a: 'Back-to-school cleaning overlaps with move-out and move-in cleaning but is specifically timed to the academic schedule transition. A property manager may use it for unit turns between summer and fall tenants. A family may use it as a household reset before the school-year routine begins. Final Touch confirms scope at the walkthrough based on what the specific property or unit requires.',
  },
  {
    q: 'How do I get a quote for back-to-school cleaning in Las Vegas?',
    a: `Call ${SITE.phone.display} or request a free quote online. ${SITE.owners} conduct the initial walkthrough, confirm scope for your unit or property, and provide a written estimate before any work begins. No obligation.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Back-to-School Home Reset Cleaning, Las Vegas, NV',
  serviceType: 'Back-to-School Cleaning',
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
    title: 'Property managers with August lease starts',
    body: 'Las Vegas property managers with rental units leasing to students or families on August timelines use back-to-school cleaning for unit turns between summer and fall tenants. The academic calendar creates a predictable turn window that aligns with Final Touch seasonal scheduling.',
  },
  {
    title: 'Landlords near UNLV and Las Vegas Valley schools',
    body: "Landlords with properties near UNLV and other Las Vegas educational institutions see increased unit turnover in August as the academic year begins. Back-to-school cleaning gets units ready for incoming tenants — deposit-ready condition, common areas reset, and any summer accumulation addressed.",
  },
  {
    title: 'HOA and common area managers',
    body: "Managed residential communities and HOA properties use August as a common-area reset before the school-year schedule increases foot traffic through shared amenities, lobbies, and entry areas. Summer's heavy use of pool areas, common rooms, and entryways leaves surfaces that benefit from a seasonal refresh.",
  },
  {
    title: 'Families returning to school-year routines',
    body: "Las Vegas families who managed a less-structured summer schedule use August cleaning as a household reset before the school year begins. A professional clean before the new routine starts addresses the summer accumulation and sets a clean baseline for the year ahead. Final Touch scopes residential cleaning at the walkthrough based on what the home actually needs.",
  },
];

const checklist = [
  'Bedrooms: floors, surfaces, and closet interiors',
  'Common areas: living rooms, hallways, and entry areas',
  'Kitchen: counters, cabinet exteriors, appliance surfaces, and floors',
  'Bathrooms: fixtures, tile, grout, and mirrors',
  'High-touch surfaces: switches, handles, and rails',
  'Interior glass and window cleaning',
  'Baseboards, door frames, and window sills',
  'Trash removal and liner replacement',
  'Common area reset for managed buildings: lobbies, laundry, and shared amenities',
  'Unit-turn deep clean for rental properties between tenants',
];

const whyTimingCards = [
  {
    heading: 'August is the academic calendar transition point',
    body: 'UNLV classes begin in late August, and Clark County K-12 schools follow a similar timeline. For rental property managers and landlords, this creates a predictable unit-turn window that does not occur at any other point in the year with the same consistency. Back-to-school cleaning scheduled in early-to-mid August ensures units are ready before incoming tenants arrive for fall.',
  },
  {
    heading: 'Summer conditions leave units in need of a reset',
    body: 'Las Vegas summers are hard on interiors. Sealed buildings, continuous HVAC operation, and elevated dust accumulation mean that units vacated in May or June — and sitting through the summer heat season — accumulate desert particulate on floors, surfaces, and vents. A back-to-school clean addresses the summer condition before new tenants move in.',
  },
  {
    heading: 'Schedule-shift cleaning sets the year in motion',
    body: "For families and household operators, August is a schedule-change moment. The summer routine ends, a new school-year structure begins, and the household runs differently starting in late August. A professional reset at this transition point clears the summer accumulation and sets a clean baseline for the more structured months ahead.",
  },
];

const relatedLinks = [
  { label: 'Move-Out Cleaning', href: '/services/move-out-cleaning' },
  { label: 'Move-In Cleaning', href: '/services/move-in-cleaning' },
  { label: 'Student Move-Out Cleaning', href: '/seasonal/move-out-cleaning-for-college-students' },
  { label: 'Summer Deep Cleaning', href: '/seasonal/summer-deep-cleaning' },
  { label: 'Las Vegas Cleaning Services', href: '/locations/las-vegas' },
  { label: 'All Services', href: ROUTES.services },
];

export default function BackToSchoolHomeResetPage() {
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
          { label: 'Back-to-School Reset' },
        ]}
      />

      {/* 1. Hero */}
      <HeroSection
        eyebrow="Back-to-School Cleaning · Las Vegas, NV"
        heading="Back-to-School Home Reset Cleaning, Las Vegas, NV"
        sub="August schedule-shift cleaning for rental units, managed properties, and common areas timed to the Las Vegas academic calendar. Scope confirmed per property."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Back-to-school cleaning in Las Vegas is August cleaning timed to the academic calendar
            transition — unit turns for property managers and landlords near UNLV, common-area resets
            for managed buildings, and household resets for families returning to school-year routines.{' '}
            <Link href={ROUTES.services} className="text-brand-blue font-semibold hover:underline">
              Final Touch cleaning services
            </Link>{' '}
            covers rental units and managed properties across Las Vegas and {SITE.serviceArea.county}.
            Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to discuss your property.
          </p>
        </div>
      </section>

      {/* 3. Who this is for */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who we serve"
            heading="Back-to-school cleaning for Las Vegas property managers and families."
            sub="Property managers, landlords, HOA operators, and families use August cleaning to reset units and spaces before the school year begins."
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
            heading="What back-to-school cleaning covers."
            sub="Scope is confirmed per unit or property at the initial walkthrough. Typical back-to-school cleaning areas are listed below."
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
            heading="Why August is the right time for back-to-school cleaning in Las Vegas."
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
        heading="Back-to-school cleaning in Las Vegas: frequently asked questions"
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
        heading="Ready for back-to-school cleaning in Las Vegas?"
        sub={`Free quotes for back-to-school cleaning across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
