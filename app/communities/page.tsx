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
  title: {
    absolute:
      'Cleaning Services for Active Adult Communities | Las Vegas, NV | Final Touch',
  },
  description:
    'Professional cleaning for active adult communities in Las Vegas and Henderson, NV. Move-in, move-out, and deep cleaning. Licensed & insured. Call (702) 444-5077.',
  alternates: { canonical: '/communities' },
  openGraph: {
    title: 'Cleaning Services for Active Adult Communities | Las Vegas, NV | Final Touch',
    description:
      'Professional cleaning for active adult communities in Las Vegas and Henderson, NV. Move-in, move-out, and deep cleaning. Licensed & insured. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/communities`,
  },
};

const communities = [
  {
    name: 'Sun City Anthem',
    slug: 'sun-city-anthem-cleaning-services',
    href: '/communities/sun-city-anthem-cleaning-services',
    city: 'Henderson, NV',
    description:
      'Cleaning services for residents and families coordinating care in Sun City Anthem, an age-restricted active adult community in Henderson. Move-in, move-out, and recurring deep cleaning.',
  },
  {
    name: 'Sun City Summerlin',
    slug: 'sun-city-summerlin-cleaning-services',
    href: '/communities/sun-city-summerlin-cleaning-services',
    city: 'Las Vegas, NV',
    description:
      'Cleaning services for residents and families coordinating care in Sun City Summerlin, an age-restricted active adult community in the Summerlin area of Las Vegas. Move-in, move-out, and deep cleaning.',
  },
  {
    name: 'Heritage at Cadence',
    slug: 'heritage-at-cadence-cleaning-services',
    href: '/communities/heritage-at-cadence-cleaning-services',
    city: 'Henderson, NV',
    description:
      'Cleaning services for residents and families coordinating care in Heritage at Cadence, an age-restricted active adult community in Henderson. Move-in, move-out, and deep cleaning.',
  },
];

const whyItems = [
  {
    title: 'Owner-led by Scott & Nicole Maland',
    body: 'Final Touch is family-owned and operated in Clark County. Scott and Nicole oversee every account personally. Your home is not handed off to a rotation of subcontractors.',
  },
  {
    title: 'Licensed and insured in Nevada',
    body: 'Final Touch is licensed and fully insured in Nevada. Documentation is available on request for residents or family members who need it for their records.',
  },
  {
    title: 'Blue Ribbon Guarantee',
    body: '100% satisfaction or Final Touch returns within 24 hours to make it right. No arguments. No runaround.',
  },
  {
    title: 'Free quotes — no obligation',
    body: 'Every cleaning starts with a free quote. Scott or Nicole will discuss your home, your timing, and what you need before any work begins.',
  },
  {
    title: 'Scheduling that works for residents and families',
    body: 'Whether you live in the community or are coordinating cleaning on behalf of a relative, Final Touch works around your schedule and access requirements.',
  },
  {
    title: 'Serving Henderson and Las Vegas',
    body: `Final Touch serves active adult communities across Henderson and Las Vegas. One team, one standard, across ${SITE.serviceArea.county}.`,
  },
];

const faq = [
  {
    q: 'Does Final Touch clean homes in active adult communities in Las Vegas and Henderson?',
    a: `Yes. Final Touch provides professional cleaning for homes in active adult communities across Henderson and Las Vegas, including Sun City Anthem, Sun City Summerlin, and Heritage at Cadence. Services include move-in cleaning, move-out cleaning, deep cleaning, and recurring cleaning programs. Call ${SITE.phone.display} or request a free quote online.`,
  },
  {
    q: 'Can a family member arrange cleaning for a relative living in one of these communities?',
    a: `Yes. Final Touch regularly works with family members who coordinate cleaning on behalf of a parent or relative living in an active adult community. We work around your family's scheduling and access needs. Call ${SITE.phone.display} to discuss the situation and arrange a free quote.`,
  },
  {
    q: 'What cleaning services are most relevant for active adult community homes?',
    a: 'Move-in cleaning and move-out cleaning are the most common services for community units changing occupancy. Deep cleaning is popular for periodic refreshes. Residents also arrange recurring cleaning programs for ongoing maintenance. Final Touch confirms the right scope during your free quote.',
  },
  {
    q: 'Is Final Touch licensed and insured to clean in Nevada?',
    a: 'Yes. Final Touch Cleaning Company is licensed and fully insured in Nevada. Documentation is available on request.',
  },
  {
    q: 'How do I get a cleaning quote for an active adult community home?',
    a: `Call ${SITE.phone.display} or submit a request at the free quote page. ${SITE.owners} will follow up to discuss your home, confirm scope, and provide a free estimate before any work begins.`,
  },
];

const collectionPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Cleaning Services for Active Adult Communities | Final Touch',
  description:
    'Professional cleaning for active adult communities in Las Vegas and Henderson, NV. Move-in, move-out, and deep cleaning.',
  url: `${SITE.url}/communities`,
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

const moveIn = SERVICES.find((s) => s.slug === 'move-in-cleaning');
const moveOut = SERVICES.find((s) => s.slug === 'move-out-cleaning');
const deep = SERVICES.find((s) => s.slug === 'deep-cleaning');

const relatedServiceCards = [moveIn, moveOut, deep].filter(Boolean) as typeof SERVICES[number][];

export default function CommunitiesHubPage() {
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
      <Breadcrumb
        items={[{ label: 'Home', href: '/' }, { label: 'Communities' }]}
      />

      {/* 2. Hero */}
      <HeroSection
        eyebrow="Active Adult Community Cleaning"
        heading="Cleaning Services for Active Adult Communities in Las Vegas, NV"
        sub={`Final Touch provides professional cleaning for active adult communities in Henderson and Las Vegas: move-in cleaning, move-out cleaning, deep cleaning, and recurring programs. Free quotes. Licensed and insured in Nevada. Call ${SITE.phone.display}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 3. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Final Touch Cleaning Company provides professional cleaning for homes in active adult
            communities across Henderson and Las Vegas, including{' '}
            <Link
              href="/communities/sun-city-anthem-cleaning-services"
              className="text-brand-blue font-semibold hover:underline"
            >
              Sun City Anthem
            </Link>
            ,{' '}
            <Link
              href="/communities/sun-city-summerlin-cleaning-services"
              className="text-brand-blue font-semibold hover:underline"
            >
              Sun City Summerlin
            </Link>
            , and{' '}
            <Link
              href="/communities/heritage-at-cadence-cleaning-services"
              className="text-brand-blue font-semibold hover:underline"
            >
              Heritage at Cadence
            </Link>
            . Services include{' '}
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
            ,{' '}
            <Link
              href="/services/deep-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              deep cleaning
            </Link>
            , and recurring programs. Select a community below or call{' '}
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

      {/* 4. Community card grid */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Communities We Serve"
            heading="Select your community."
            sub="Each page covers the services most relevant for that community, who the service is for, and how to get a free quote."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {communities.map((c) => (
              <li
                key={c.slug}
                className="flex flex-col rounded-[14px] border border-border-subtle bg-brand-white p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
                  {c.city}
                </p>
                <h2 className="mt-2 font-display text-xl font-semibold text-brand-black">
                  {c.name}
                </h2>
                <p className="mt-3 text-sm text-muted leading-relaxed flex-1">{c.description}</p>
                <div className="mt-5">
                  <Link
                    href={c.href}
                    className="inline-flex min-h-[44px] items-center rounded-full bg-light-gray px-4 py-2 text-sm font-semibold text-brand-blue hover:bg-blue-50 transition-colors"
                  >
                    View cleaning services →
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Why Final Touch */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why Final Touch"
            heading="Owner-led, licensed, and local."
            sub="Final Touch is family-owned and operated in the Las Vegas Valley. Every account is personally overseen by Scott and Nicole Maland."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {whyItems.map((item) => (
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

      {/* 6. Related services */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Relevant Services"
            heading="Services most relevant for community homes."
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

      {/* 7. Location chips */}
      <section className="bg-brand-white border-y border-border-subtle">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-10 sm:py-12">
          <p className="text-sm font-semibold text-muted uppercase tracking-wide mb-4">
            Service cities
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Henderson, NV', href: '/locations/henderson' },
              { label: 'Las Vegas, NV', href: '/locations/las-vegas' },
              { label: 'All Locations', href: ROUTES.locations },
            ].map((chip) => (
              <Link
                key={chip.href}
                href={chip.href}
                className="inline-flex min-h-[44px] items-center rounded-full bg-light-gray px-4 py-2 text-sm font-semibold text-brand-blue border border-border-subtle hover:bg-blue-50 transition-colors"
              >
                {chip.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <FAQSection
        items={faq}
        heading="Frequently asked questions about community cleaning."
        defaultOpenFirst
      />

      {/* 9. Final CTA */}
      <CTASection
        heading="Ready to get a free cleaning quote?"
        sub={`Final Touch serves active adult communities across Henderson and Las Vegas. Call ${SITE.phone.display} or send a quote request online.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
