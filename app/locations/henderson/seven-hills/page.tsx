import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import HeroSection from '@/components/shared/HeroSection';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceCard from '@/components/shared/ServiceCard';
import { CTAS, SITE } from '@/lib/constants/site';
import { LOCATIONS, NEIGHBORHOODS, ROUTES, SERVICES } from '@/lib/constants/routes';

// Parent city derived from this neighborhood's own NEIGHBORHOODS record —
// single source of truth, no hardcoded parent slug.
const NEIGHBORHOOD = NEIGHBORHOODS.flatMap((g) => g.neighborhoods).find(
  (n) => n.slug === 'seven-hills',
)!;
const PARENT_CITY = LOCATIONS.find((l) => l.slug === NEIGHBORHOOD.parentCity)!;

export const metadata: Metadata = {
  title: 'Seven Hills Cleaning Services | Henderson, NV | Final Touch',
  description:
    'Family-owned cleaning services in Seven Hills, Henderson, NV. Deep cleaning, move-in, move-out, and more for luxury hillside homes. Call (702) 444-5077.',
  alternates: { canonical: '/locations/henderson/seven-hills' },
  openGraph: {
    title: 'Seven Hills Cleaning Services | Henderson, NV | Final Touch Cleaning Company',
    description:
      'Scott & Nicole Maland serve Seven Hills and all of Henderson, NV. Deep cleaning, move-in, move-out, and more for hillside homes. Free quotes across Clark County.',
    type: 'website',
    url: `${SITE.url}/locations/henderson/seven-hills`,
  },
};

// Seven Hills neighborhood page. Service card order reflects Seven Hills demand:
// deep cleaning first (luxury hillside community with larger homes and high
// finish levels -- established homeowners prioritize thorough periodic resets
// that match the standard of the space), move-in second (buyers relocating
// into the area from out of state or upgrading from lower Henderson elevations
// need a top-to-bottom clean before settling into a larger home), move-out
// third (seller prep at this price point requires a presentation-ready clean),
// then commercial, post-construction, janitorial, retail.
const SEVEN_HILLS_SERVICES = [
  SERVICES.find((s) => s.slug === 'deep-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-in-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-out-cleaning')!,
  SERVICES.find((s) => s.slug === 'commercial-office-cleaning')!,
  SERVICES.find((s) => s.slug === 'post-construction-cleanup')!,
  SERVICES.find((s) => s.slug === 'janitorial-services')!,
  SERVICES.find((s) => s.slug === 'retail-space-cleaning')!,
];

const faq = [
  {
    q: 'Does Final Touch serve Seven Hills, Henderson, NV?',
    a: `Yes. Final Touch serves Seven Hills as part of its Henderson and ${SITE.serviceArea.county} service area. ${SITE.owners} own and run the company. Their team serves homes throughout Seven Hills, including the hillside residential neighborhoods and guard-gated sections in Henderson's eastern foothills.`,
  },
  {
    q: 'What makes cleaning larger hillside homes in Seven Hills different from standard residential cleaning?',
    a: "Seven Hills homes are typically larger than the Henderson average, with multi-level floor plans, high ceilings, expansive windows, and elevated finish materials including stone, hardwood, and custom tile. Cleaning at this scale requires more time, the right tools for high surfaces and large-format flooring, and a detail standard that matches the quality of the space. Ceiling fans, upper cabinet faces, high ledges, and floor-to-ceiling windows are areas that need specific attention in homes of this size.",
  },
  {
    q: 'What cleaning services does Final Touch offer in Seven Hills?',
    a: `Final Touch offers deep cleaning, move-in cleaning, move-out cleaning, commercial and office cleaning, post-construction cleanup, janitorial services, and retail space cleaning throughout Seven Hills. Call ${SITE.phone.display} to discuss which service fits your home.`,
  },
  {
    q: 'Do you clean homes in the guard-gated sections of Seven Hills?',
    a: `Yes. Final Touch serves homes throughout Seven Hills, including gated residential sections. As a service-area business, the team travels to the customer's location. Call ${SITE.phone.display} in advance if your property requires gate access coordination so the visit can be arranged without delays.`,
  },
  {
    q: 'Is Final Touch a local company or a national franchise?',
    a: `Final Touch is a family-owned, owner-operated cleaning company based in Southern Nevada, not a franchise or national chain. ${SITE.owners} own and run the business. When you call ${SITE.phone.display}, you reach the owners or the team directly.`,
  },
];

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  url: `${SITE.url}/locations/henderson/seven-hills`,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  image: 'https://www.finaltouchcleaningteam.com/images/logo/final-touch-cleaning-company-logo.webp',
  sameAs: ['https://www.google.com/maps?cid=5303198646776788086'],
  areaServed: [
    { '@type': 'Place', name: 'Seven Hills, Henderson, NV' },
    { '@type': 'Place', name: 'Henderson, NV' },
    { '@type': 'Place', name: 'Clark County, NV' },
  ],
  description:
    'Family-owned cleaning company serving Seven Hills, Henderson, and Clark County, NV.',
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
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Locations',
      item: `${SITE.url}${ROUTES.locations}`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Henderson',
      item: `${SITE.url}/locations/henderson`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Seven Hills',
      item: `${SITE.url}/locations/henderson/seven-hills`,
    },
  ],
};

export default function SevenHillsPage() {
  return (
    <>
      {/* 1. Hero over a local Seven Hills photo. */}
      <HeroSection
        eyebrow="Luxury Hillside Residential"
        heading="Seven Hills Cleaning Services | Henderson, NV"
        sub={`Final Touch serves homes throughout Seven Hills, Henderson. Detail-focused deep cleaning, move-in, and move-out cleaning for larger hillside homes in Henderson's eastern foothills. Call ${SITE.phone.display} or request a free quote.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/locations/seven-hills-henderson-commercial-cleaning-hero-image.webp',
          alt: 'Professional cleaning service by Final Touch in Seven Hills, Henderson, NV.',
        }}
      />

      {/* 2. Quick neighborhood answer */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
          <p className="text-lg text-brand-black leading-relaxed">
            Final Touch Cleaning Company serves Seven Hills, Henderson as part of its{' '}
            {SITE.serviceArea.county} service area. {SITE.owners} own and run the business. Their
            team provides deep cleaning, move-in cleaning, and move-out cleaning for the larger
            hillside homes and gated residential sections throughout Seven Hills in Henderson&apos;s
            eastern foothills. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline">
              {SITE.phone.display}
            </a>{' '}
            to get a free quote for your Seven Hills home.
          </p>
        </div>
      </section>

      {/* 3. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="About Seven Hills"
            heading="Hillside homes that demand a higher standard of clean."
            sub="Seven Hills sits in Henderson's eastern foothills with a mix of larger homes, elevated finishes, and views that attract long-term owners with high maintenance expectations."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                heading: "Hillside location in Henderson's eastern foothills",
                body: "Seven Hills occupies the elevated terrain in Henderson's eastern foothills, with homes positioned on slopes and ridgelines that offer views across the Las Vegas Valley. The community includes both open residential streets and guard-gated sections. Its position in the foothills puts it at a higher elevation than the valley floor, where wind patterns differ and desert particulate behaves differently than in lower-lying Henderson neighborhoods.",
              },
              {
                heading: 'Larger homes with elevated finish levels',
                body: 'Seven Hills homes are generally larger than the Henderson average, with multi-level floor plans, high ceilings, and finish materials that include stone countertops, hardwood and large-format tile flooring, and custom cabinetry. Cleaning at this scale requires attention to high surfaces -- ceiling fans, upper ledges, crown molding -- and to large-format flooring that shows dust and streaking more readily than smaller-format surfaces.',
              },
              {
                heading: 'Long-term owners with consistent maintenance standards',
                body: "Seven Hills attracts buyers who intend to stay. Long-term homeowners in the community tend to invest in the property and hold high expectations for how it is maintained. Periodic deep cleans are a standard part of the maintenance cycle for homes at this price point, and sellers preparing for the market need a presentation-ready clean that reflects the quality of the home.",
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

      {/* 4. Popular services */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Our services"
            heading="Popular cleaning services in Seven Hills."
            sub="Deep cleaning leads because Seven Hills homeowners prioritize thorough periodic resets that match the standard of their homes. Every service is available across the community."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {SEVEN_HILLS_SERVICES.map((s) => (
              <li key={s.slug} className="h-full">
                <ServiceCard
                  href={s.href}
                  name={s.name}
                  description={s.shortDescription}
                  image={s.image}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Why Final Touch */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why Final Touch"
            heading="Why Seven Hills homeowners choose Final Touch."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                heading: 'Family-owned',
                body: `${SITE.owners} own and run Final Touch. When you call, you reach the owners or the team, not a call center or a franchise dispatcher.`,
              },
              {
                heading: 'Local to Clark County',
                body: `Final Touch is based in Southern Nevada and serves ${SITE.serviceArea.county} exclusively. The team knows Henderson's foothills communities and focuses entirely on this region.`,
              },
              {
                heading: 'Detail standard that fits the home',
                body: "Seven Hills homes have high ceilings, large-format flooring, and elevated finish materials. Final Touch applies a detail standard that matches the quality of the space -- not a one-size approach designed for smaller, simpler homes.",
              },
              {
                heading: 'Gated community experience',
                body: 'Final Touch serves gated and non-gated sections throughout Seven Hills. Gate access, scheduling coordination, and on-site requirements are handled professionally so the visit runs smoothly.',
              },
            ].map(({ heading, body }) => (
              <div
                key={heading}
                className="rounded-[14px] border border-border-subtle bg-brand-white p-6"
              >
                <h3 className="font-display text-lg font-semibold text-brand-black">
                  {heading}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Parent city and related areas */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-14 sm:py-18 lg:py-20">
          <SectionHeader
            eyebrow="Service area"
            heading="Seven Hills and the greater Henderson area."
            sub="Final Touch serves Seven Hills as part of a broader Henderson and Clark County service area."
          />
          <div className="mt-8 space-y-3 text-base text-brand-black">
            <p>
              Seven Hills is a community within{' '}
              <Link
                href={PARENT_CITY.href}
                className="text-brand-blue font-semibold hover:underline"
              >
                {PARENT_CITY.name}, NV
              </Link>
              . Final Touch serves all of Henderson, including Seven Hills and neighboring
              communities across the city.
            </p>
            <p>
              The team also serves neighborhoods across{' '}
              <Link
                href="/locations/las-vegas"
                className="text-brand-blue font-semibold hover:underline"
              >
                Las Vegas
              </Link>
              ,{' '}
              <Link
                href="/locations/north-las-vegas"
                className="text-brand-blue font-semibold hover:underline"
              >
                North Las Vegas
              </Link>
              ,{' '}
              <Link
                href="/locations/boulder-city"
                className="text-brand-blue font-semibold hover:underline"
              >
                Boulder City
              </Link>
              , and all of{' '}
              <Link
                href="/locations/clark-county"
                className="text-brand-blue font-semibold hover:underline"
              >
                Clark County
              </Link>
              .
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/locations/henderson/anthem"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Anthem
            </Link>
            <Link
              href="/locations/henderson/green-valley-ranch"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Green Valley Ranch
            </Link>
            <Link
              href="/locations/henderson/cadence"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Cadence
            </Link>
            <Link
              href="/locations/henderson/inspirada"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Inspirada
            </Link>
            {/* TODO-BATCH-5: Add MacDonald Highlands and Lake Las Vegas pill links
                as those pages are built. */}
            <Link
              href="/services/deep-cleaning/henderson"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Deep Cleaning in Henderson, NV
            </Link>
            <Link
              href="/services/move-in-cleaning/henderson"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Move-In Cleaning in Henderson, NV
            </Link>
            <Link
              href="/services/move-out-cleaning/henderson"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Move-Out Cleaning in Henderson, NV
            </Link>
            <Link
              href={ROUTES.freeQuote}
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Request a free quote
            </Link>
            <Link
              href={ROUTES.services}
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="FAQ"
            heading="Frequently asked questions about cleaning in Seven Hills."
          />
          <div className="mt-8">
            <FAQSection items={faq} defaultOpenFirst />
          </div>
          <p className="mt-8 text-sm text-muted">
            More questions?{' '}
            <Link href={ROUTES.faq} className="text-brand-blue font-semibold hover:underline">
              Read our full FAQ
            </Link>{' '}
            or{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline">
              call {SITE.phone.display}
            </a>
            .
          </p>
        </div>
      </section>

      {/* 8. Final CTA */}
      <CTASection
        heading="Ready to book a cleaning in Seven Hills?"
        sub={`Free quotes for homes throughout Seven Hills, Henderson. Call ${SITE.phone.display} or request a quote online.`}
        primaryCta={{ label: CTAS.estimate, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
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
