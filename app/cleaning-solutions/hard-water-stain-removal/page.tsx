import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceCard from '@/components/shared/ServiceCard';
import Breadcrumb from '@/components/shared/Breadcrumb';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES, SERVICES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'Hard Water Stain Removal Cleaning in Las Vegas, NV',
  description:
    'Hard water stain cleaning in Las Vegas, NV. Final Touch targets mineral buildup on glass, fixtures, and tile from Southern Nevada hard water. Call (702) 444-5077.',
  alternates: {
    canonical: '/cleaning-solutions/hard-water-stain-removal',
  },
  openGraph: {
    title: 'Hard Water Stain Removal Cleaning in Las Vegas, NV | Final Touch',
    description:
      'Hard water stain cleaning in Las Vegas, NV. Final Touch targets mineral buildup on glass, fixtures, and tile from Southern Nevada hard water. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/cleaning-solutions/hard-water-stain-removal`,
  },
};

const faq = [
  {
    q: 'What does hard water stain removal cleaning include?',
    a: `Hard water stain removal by Final Touch is targeted cleaning of the surfaces where mineral deposits build up: glass shower doors and enclosures, faucets and fixtures, sinks and basins, tile and grout, countertops, and chrome and metal hardware. We focus on the affected surfaces rather than a general clean. Scope is confirmed at the initial walkthrough. Call ${SITE.phone.display}.`,
  },
  {
    q: 'Why is hard water staining so common in Las Vegas?',
    a: 'Water across Southern Nevada draws heavily from the Colorado River and carries a high mineral content. As that water dries on glass, fixtures, and tile, it leaves behind calcium and mineral deposits — the cloudy white film and spotting people recognize as hard water stains. Because the mineral content is consistently high here, buildup returns over time even after a thorough clean.',
  },
  {
    q: 'Can you remove cloudy film from glass shower doors?',
    a: 'Final Touch provides targeted cleaning to remove visible mineral buildup and film from glass shower doors, fixtures, and tile. We focus on thorough cleaning of the affected surfaces. In cases where minerals have etched into the glass over a long period, some staining may be permanent at the surface level — we will assess and tell you honestly at the walkthrough rather than over-promise a result.',
  },
  {
    q: 'Is hard water cleaning useful for move-outs and turnovers?',
    a: 'Yes, and it is one of the most common reasons people request it. Hard water buildup on shower glass and fixtures is one of the first things landlords, property managers, and buyers notice. Final Touch frequently includes hard water stain removal as part of move-out and turnover cleaning so a unit shows clean and deposit-ready across Las Vegas and Clark County.',
  },
  {
    q: 'How often should hard water stains be cleaned?',
    a: "Because Southern Nevada water is consistently high in minerals, buildup returns over time. Many homes and businesses address it on a recurring schedule to keep glass and fixtures clear, while others request a one-time detailed clean before a move, sale, or turnover. Final Touch confirms the right approach at the walkthrough based on how quickly buildup returns in your space.",
  },
  {
    q: 'How do I get a quote for hard water stain removal in Las Vegas?',
    a: `Call ${SITE.phone.display} or request a free quote online. ${SITE.owners} conduct the walkthrough personally, assess the affected surfaces, and quote based on what the job requires. Final Touch is licensed and insured in Nevada and backs work with the Blue Ribbon Guarantee.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hard Water Stain Removal Cleaning in Las Vegas, NV',
  serviceType: 'Hard Water Stain Removal Cleaning',
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

const whatWeDo = [
  'Glass shower doors and enclosures with mineral film and spotting',
  'Faucets, fixtures, and chrome or metal hardware',
  'Sinks, basins, and countertops with hard water deposits',
  'Tile and grout where mineral buildup collects',
  'Mirrors and glass surfaces affected by spotting',
  'Toilets and restroom fixtures with mineral staining',
];

const audienceCards = [
  {
    title: 'Property managers and landlords',
    body: 'Hard water buildup on shower glass and fixtures is one of the first things a new tenant or inspector notices. Property managers across Las Vegas schedule hard water stain removal during turnover so units show clean and deposit-ready. Final Touch confirms scope per unit at the walkthrough.',
  },
  {
    title: 'Offices and commercial restrooms',
    body: 'Shared commercial restrooms and break areas accumulate mineral buildup on fixtures and basins. Final Touch provides targeted hard water cleaning for commercial interiors as a one-time clean or part of a recurring janitorial program.',
  },
  {
    title: 'Homeowners and residents',
    body: 'In a region with consistently hard water, glass and fixtures cloud over between cleanings. Final Touch serves residents across Clark County with targeted cleaning of the affected surfaces, scoped to your home rather than a fixed template.',
  },
  {
    title: 'Move-outs, move-ins, and home sales',
    body: 'Before a move, sale, or new tenant, clear glass and bright fixtures matter. Final Touch frequently pairs hard water stain removal with move-out cleaning so the space presents at its best.',
  },
];

const moveOut = SERVICES.find((s) => s.slug === 'move-out-cleaning');
const moveIn = SERVICES.find((s) => s.slug === 'move-in-cleaning');
const deepCleaning = SERVICES.find((s) => s.slug === 'deep-cleaning');

const relatedServiceCards = [moveOut, moveIn, deepCleaning]
  .filter((s): s is NonNullable<typeof s> => Boolean(s))
  .map((s) => ({
    name: s.name,
    href: s.href,
    description: s.shortDescription,
    image: s.image,
  }));

export default function HardWaterStainRemovalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Cleaning Solutions', href: '/cleaning-solutions' },
          { label: 'Hard Water Stain Removal Cleaning' },
        ]}
      />

      <HeroSection
        eyebrow="Hard Water Problem · Las Vegas, NV"
        heading="Hard Water Stain Removal Cleaning in Las Vegas, NV"
        sub="Cloudy glass and spotted fixtures are a fact of life with Southern Nevada's high-mineral water. Final Touch provides targeted hard water stain removal for homes and businesses, focused on the affected glass, tile, and fixtures and scoped at an owner-led walkthrough."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Hard water stain removal is targeted cleaning of the mineral buildup that collects on
            glass, fixtures, and tile. It is common across Las Vegas because water in Southern Nevada
            draws heavily from the Colorado River and carries a high mineral content — as it dries,
            it leaves the cloudy film and spotting people recognize as hard water stains.{' '}
            <Link href={ROUTES.services} className="text-brand-blue font-semibold hover:underline">
              Final Touch
            </Link>{' '}
            serves homes and businesses. Call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>{' '}
            to discuss your space.
          </p>
        </div>
      </section>

      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="What we do"
            heading="How Final Touch addresses hard water stains."
            sub="Targeted cleaning of the surfaces where mineral deposits build up. Scope confirmed at the walkthrough."
          />
          <ul className="mt-8 space-y-3">
            {whatWeDo.map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">
                  &#10003;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Final Touch focuses on thorough, targeted cleaning of the affected surfaces. Where
            minerals have etched into glass over a long period, some staining may be permanent at the
            surface level — we will assess and tell you honestly at the walkthrough rather than
            over-promise.
          </p>
        </div>
      </section>

      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires this service"
            heading="Who schedules hard water stain removal."
            sub="Final Touch is commercial-first and also serves residents, so hard water cleaning covers properties and homes alike."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {audienceCards.map((item) => (
              <li
                key={item.title}
                className="rounded-[14px] border border-border-subtle bg-light-gray p-6"
              >
                <h3 className="font-display text-lg font-semibold text-brand-black">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQSection
        items={faq}
        heading="Hard water stain removal in Las Vegas: frequently asked questions"
      />

      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Related services"
            heading="Services that pair with hard water stain removal."
            sub="Move-out cleaning is the most common pairing, since hard water buildup is a top turnover concern."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {relatedServiceCards.map((card) => (
              <li key={card.href} className="h-full">
                <ServiceCard
                  href={card.href}
                  name={card.name}
                  description={card.description}
                  image={card.image}
                />
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base text-brand-black">
            For turnovers and deposit-ready cleans, pair hard water stain removal with{' '}
            <Link href="/services/move-out-cleaning" className="text-brand-blue font-semibold hover:underline">
              move-out cleaning
            </Link>
            , or{' '}
            <Link href={ROUTES.freeQuote} className="text-brand-blue font-semibold hover:underline">
              request a free quote
            </Link>{' '}
            and we will recommend the right scope.
          </p>
        </div>
      </section>

      <CTASection
        heading="Ready to clear the hard water buildup?"
        sub={`Free quotes for hard water stain removal across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
