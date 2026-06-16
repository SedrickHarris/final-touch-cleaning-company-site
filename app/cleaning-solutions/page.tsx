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
  title: { absolute: 'Cleaning Solutions for Common Problems | Las Vegas, NV | Final Touch' },
  description:
    'Cleaning solutions for common Las Vegas problems: pet hair, dust and allergens, hard water stains, smoke odor, and post-illness sanitation. Call (702) 444-5077.',
  alternates: {
    canonical: '/cleaning-solutions',
  },
  openGraph: {
    title: 'Cleaning Solutions for Common Problems in Las Vegas, NV | Final Touch',
    description:
      'Cleaning solutions for common Las Vegas problems: pet hair, dust and allergens, hard water stains, smoke odor, and post-illness sanitation. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/cleaning-solutions`,
  },
};

const solutionCards = [
  {
    name: 'Pet Hair Removal Cleaning',
    href: '/cleaning-solutions/pet-hair-removal-cleaning',
    description:
      'Detailed cleaning that lifts embedded pet hair and dander from floors, soft surfaces, and high-touch areas in homes and pet-friendly properties.',
  },
  {
    name: 'Allergy and Dust Mitigation Cleaning',
    href: '/cleaning-solutions/allergy-dust-mitigation-cleaning',
    description:
      'Thorough dust removal for the surfaces standard cleaning skips — a real concern in the dry, dusty Las Vegas Valley climate.',
  },
  {
    name: 'Hard Water Stain Removal Cleaning',
    href: '/cleaning-solutions/hard-water-stain-removal',
    description:
      'Targeted cleaning of mineral buildup on glass, fixtures, and tile caused by the hard water common across Southern Nevada.',
  },
  {
    name: 'Smoke and Odor Removal Cleaning',
    href: '/cleaning-solutions/smoke-odor-removal',
    description:
      'Detailed cleaning of surfaces affected by smoke and lingering odors in homes, rentals, and turnover-ready commercial spaces.',
  },
  {
    name: 'Post-Illness Deep Sanitation Cleaning',
    href: '/cleaning-solutions/post-illness-deep-sanitation-cleaning',
    description:
      'Thorough cleaning and surface sanitation of high-touch points after illness, for households, offices, and shared facilities.',
  },
];

const faq = [
  {
    q: 'What are cleaning solutions for common problems?',
    a: `Cleaning solutions are targeted cleaning programs built around a specific problem rather than a general clean. Final Touch offers solutions for the issues Las Vegas homes and businesses see most: pet hair, dust and allergens, hard water stains, smoke and lingering odors, and post-illness sanitation. Each is scoped to the affected surfaces during the initial walkthrough. Call ${SITE.phone.display} to discuss yours.`,
  },
  {
    q: 'Why are these cleaning problems common in Las Vegas?',
    a: 'Several are tied to the local environment. The Las Vegas Valley is a high desert with frequent dust and dry heat, which keeps fine dust circulating. Water across Southern Nevada draws heavily from the Colorado River and carries a high mineral content, so hard water staining is widespread. Pet hair, smoke odor, and post-illness concerns affect homes and businesses everywhere, but dry indoor air can make them more noticeable here.',
  },
  {
    q: 'Are these services for homes or businesses?',
    a: 'Both. Final Touch is a commercial-first cleaning company serving offices, retail spaces, rentals, and property managers across Las Vegas and Clark County, and we also serve residents. Many of these solutions matter most for commercial turnover and property management — hard water in shared restrooms, odor remediation between tenants, or sanitation after illness in a shared workplace.',
  },
  {
    q: 'How do I know which cleaning solution I need?',
    a: `Start with the problem you are seeing. If you are unsure, ${SITE.owners} conduct an owner-led walkthrough, confirm what is actually affected, and recommend the right scope. There is no charge for the quote, and the recommendation is based on what your space requires rather than a templated package.`,
  },
  {
    q: 'How do I get a quote for a cleaning solution in Las Vegas?',
    a: `Call ${SITE.phone.display} or request a free quote online. Final Touch is family-owned by ${SITE.owners}, licensed and insured in Nevada, and backs work with the Blue Ribbon Guarantee — if something is not right, let us know within 24 hours and we will return to make it right.`,
  },
];

const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Cleaning Solutions for Common Problems in Las Vegas, NV',
  url: `${SITE.url}/cleaning-solutions`,
  about: solutionCards.map((c) => ({ '@type': 'Service', name: c.name })),
  provider: {
    '@type': 'Organization',
    name: 'Final Touch Cleaning Company LLC',
    url: SITE.url,
    telephone: '+17024445077',
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

export default function CleaningSolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[{ label: 'Home', href: '/' }, { label: 'Cleaning Solutions' }]}
      />

      <HeroSection
        eyebrow="Cleaning Solutions · Las Vegas, NV"
        heading="Cleaning Solutions for Common Problems in Las Vegas, NV"
        sub="Some cleaning problems need more than a standard clean. Final Touch offers targeted solutions for the issues Las Vegas homes and businesses see most — pet hair, dust and allergens, hard water stains, smoke odor, and post-illness sanitation. Scope confirmed per space at an owner-led walkthrough."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            A cleaning solution is a targeted cleaning program focused on a specific problem rather
            than a general clean. Several of these problems are common in the Las Vegas Valley
            because of the local environment: the high desert climate keeps fine dust circulating,
            and water across Southern Nevada draws heavily from the Colorado River with a high
            mineral content that causes hard water staining. Final Touch serves both businesses and
            residents.{' '}
            <Link href={ROUTES.services} className="text-brand-blue font-semibold hover:underline">
              See all Final Touch services
            </Link>{' '}
            or call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>{' '}
            to discuss the problem you are seeing.
          </p>
        </div>
      </section>

      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Targeted solutions"
            heading="Cleaning solutions for common Las Vegas problems."
            sub="Each solution is scoped to the affected surfaces at an owner-led walkthrough. Choose the problem you are dealing with."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {solutionCards.map((card) => (
              <li key={card.href} className="h-full">
                <Link
                  href={card.href}
                  className="flex h-full flex-col rounded-[14px] border border-border-subtle bg-brand-white p-6 transition-colors hover:border-brand-blue/40 hover:bg-soft-blue"
                >
                  <h3 className="font-display text-lg font-semibold text-brand-black">
                    {card.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{card.description}</p>
                  <span
                    aria-hidden="true"
                    className="mt-4 text-sm font-semibold text-brand-blue"
                  >
                    Learn more →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base text-brand-black">
            Looking for a standard recurring or one-time clean instead?{' '}
            <Link href={ROUTES.services} className="text-brand-blue font-semibold hover:underline">
              Browse all Final Touch services
            </Link>
            .
          </p>
        </div>
      </section>

      <FAQSection
        items={faq}
        heading="Cleaning solutions in Las Vegas: frequently asked questions"
      />

      <CTASection
        heading="Dealing with a specific cleaning problem?"
        sub={`Free quotes for targeted cleaning solutions across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
