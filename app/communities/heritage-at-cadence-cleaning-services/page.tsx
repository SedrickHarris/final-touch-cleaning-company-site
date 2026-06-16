import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import SectionHeader from '@/components/shared/SectionHeader';
import Breadcrumb from '@/components/shared/Breadcrumb';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import ServiceCard from '@/components/shared/ServiceCard';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES, SERVICES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'Cleaning Services in Heritage at Cadence, Henderson, NV',
  description:
    'Professional home cleaning for Heritage at Cadence in Henderson, NV. Move-in, move-out, and deep cleaning. Licensed & insured. Free quotes. Call (702) 444-5077.',
  alternates: { canonical: '/communities/heritage-at-cadence-cleaning-services' },
  openGraph: {
    title: 'Cleaning Services in Heritage at Cadence, Henderson, NV | Final Touch',
    description:
      'Professional home cleaning for Heritage at Cadence in Henderson, NV. Move-in, move-out, and deep cleaning. Licensed & insured. Free quotes. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/communities/heritage-at-cadence-cleaning-services`,
  },
};

const faq = [
  {
    q: 'Does Final Touch clean homes in Heritage at Cadence?',
    a: `Yes. Final Touch provides professional home cleaning for Heritage at Cadence in Henderson, NV. Services include move-in cleaning, move-out cleaning, deep cleaning, and recurring programs. Scott and Nicole Maland personally oversee every account. Call ${SITE.phone.display} or request a free quote online.`,
  },
  {
    q: 'What cleaning services are available for Heritage at Cadence homes?',
    a: 'The most common services for Heritage at Cadence homes are move-in cleaning before settling into a new unit, move-out cleaning when vacating, and deep cleaning for a thorough periodic refresh. Recurring cleaning programs are also available. Final Touch confirms scope during your free quote.',
  },
  {
    q: 'Can a family member arrange cleaning for a relative living in Heritage at Cadence?',
    a: `Yes. Final Touch regularly works with family members coordinating cleaning on behalf of a parent or relative in Heritage at Cadence. We work around your scheduling needs and any access requirements at the home. Call ${SITE.phone.display} to discuss your situation and arrange a free quote.`,
  },
  {
    q: 'Is Final Touch licensed and insured to clean in Henderson, NV?',
    a: 'Yes. Final Touch Cleaning Company is licensed and fully insured in Nevada. Documentation is available on request for residents or family members who need it.',
  },
  {
    q: 'What is the Blue Ribbon Guarantee?',
    a: `The Blue Ribbon Guarantee means 100% satisfaction or Final Touch returns within 24 hours to make it right. No arguments, no runaround. If you are not satisfied with the result, call ${SITE.phone.display} and we will come back.`,
  },
  {
    q: 'How do I get a cleaning quote for a Heritage at Cadence home?',
    a: `Call Final Touch at ${SITE.phone.display} or submit a request at the free quote page. ${SITE.owners} will follow up to discuss your home, confirm scope, and provide a free estimate before any work begins. No obligation.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cleaning Services in Heritage at Cadence, Henderson, NV',
  serviceType: 'Home Cleaning',
  provider: {
    '@type': 'Organization',
    name: 'Final Touch Cleaning Company LLC',
    url: SITE.url,
    telephone: '+17024445077',
  },
  areaServed: { '@type': 'City', name: 'Henderson, NV' },
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
    title: 'Residents arranging their own cleaning',
    body: 'Heritage at Cadence residents who want a professional cleaning team for a one-time deep clean, a move-out clean, or an ongoing recurring program. Final Touch is owner-led, licensed, and insured in Nevada.',
  },
  {
    title: 'Family members coordinating cleaning for a relative',
    body: 'Adult children or other family members coordinating professional cleaning on behalf of a parent or relative in Heritage at Cadence. Final Touch works around your access and scheduling requirements.',
  },
  {
    title: 'Residents moving into or out of a home',
    body: 'Move-in cleaning before settling into a Heritage at Cadence home, or move-out cleaning when vacating — whether selling, transitioning to another arrangement, or turning over a unit. Scope confirmed per home.',
  },
];

const whyCards = [
  {
    title: 'Owner-led by Scott & Nicole Maland',
    body: 'Final Touch is family-owned and operated in Clark County. Scott and Nicole personally oversee every account. Your home is not handed off to subcontractors.',
  },
  {
    title: 'Licensed and insured in Nevada',
    body: 'Final Touch is licensed and fully insured in Nevada. Documentation available on request — useful for residents or family members who keep records.',
  },
  {
    title: 'Blue Ribbon Guarantee',
    body: '100% satisfaction or Final Touch returns within 24 hours to make it right. No arguments, no runaround.',
  },
  {
    title: 'Serving Henderson',
    body: `Heritage at Cadence is in Henderson. Final Touch serves Henderson homes and businesses across ${SITE.serviceArea.county}. One team, one standard.`,
  },
];

const moveIn = SERVICES.find((s) => s.slug === 'move-in-cleaning');
const moveOut = SERVICES.find((s) => s.slug === 'move-out-cleaning');
const deep = SERVICES.find((s) => s.slug === 'deep-cleaning');
const relatedServiceCards = [moveIn, moveOut, deep].filter(Boolean) as typeof SERVICES[number][];

export default function HeritageAtCadencePage() {
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
          { label: 'Communities', href: '/communities' },
          { label: 'Heritage at Cadence' },
        ]}
      />

      {/* 2. Hero */}
      <HeroSection
        eyebrow="Active Adult Community · Henderson, NV"
        heading="Cleaning Services in Heritage at Cadence, Henderson, NV"
        sub={`Final Touch provides professional home cleaning for Heritage at Cadence — an age-restricted active adult community in Henderson, NV. Move-in cleaning, move-out cleaning, deep cleaning, and recurring programs. Free quotes. Licensed and insured. Call ${SITE.phone.display}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 3. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Final Touch provides professional cleaning for homes in Heritage at Cadence, an
            age-restricted active adult community in Henderson, NV. Services include{' '}
            <Link
              href="/services/move-in-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              move-in cleaning
            </Link>
            ,{' '}
            <Link
              href="/services/move-out-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              move-out cleaning
            </Link>
            , and{' '}
            <Link
              href="/services/deep-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              deep cleaning
            </Link>
            . Owner-led, licensed, and insured in Nevada. Call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>{' '}
            to get a free quote.
          </p>
        </div>
      </section>

      {/* 4. Who this is for */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who this is for"
            heading="Residents, families, and move-in / move-out."
            sub="Final Touch serves Heritage at Cadence residents directly and family members who coordinate cleaning on their behalf."
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

      {/* 5. Services most relevant */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Relevant Services"
            heading="Services most relevant for Heritage at Cadence homes."
            sub="Move-in, move-out, and deep cleaning are the most common services for community homes. Scope is confirmed per home before any work begins."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {relatedServiceCards.map((card) => (
              <li key={card.href} className="h-full">
                <ServiceCard
                  href={card.href}
                  name={card.name}
                  description={card.shortDescription}
                  image={card.image}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Why Final Touch */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why Final Touch"
            heading="Owner-led, local, licensed, and insured."
            sub={`Final Touch is family-owned and operated by ${SITE.owners} in the Las Vegas Valley. No subcontractors. No handoffs.`}
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {whyCards.map((item) => (
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

      {/* 7. FAQ */}
      <FAQSection
        items={faq}
        heading="Heritage at Cadence cleaning: frequently asked questions"
      />

      {/* 8. Internal link chips */}
      <section className="bg-light-gray border-y border-border-subtle">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-10 sm:py-12">
          <p className="text-sm font-semibold text-muted uppercase tracking-wide mb-4">
            Related pages
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Henderson, NV', href: '/locations/henderson' },
              { label: 'Move-In Cleaning', href: '/services/move-in-cleaning' },
              { label: 'Move-Out Cleaning', href: '/services/move-out-cleaning' },
              { label: 'Deep Cleaning', href: '/services/deep-cleaning' },
              { label: 'All Communities', href: '/communities' },
              { label: 'Free Quote', href: ROUTES.freeQuote },
            ].map((chip) => (
              <Link
                key={chip.href}
                href={chip.href}
                className="inline-flex min-h-[44px] items-center rounded-full border border-border-subtle bg-brand-white px-4 py-2 text-sm font-semibold text-brand-blue hover:border-brand-blue/40 hover:bg-soft-blue transition-colors"
              >
                {chip.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <CTASection
        heading="Need cleaning in Heritage at Cadence?"
        sub={`Free quotes for Heritage at Cadence homes in Henderson, NV. Call ${SITE.phone.display} or request a quote online.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
