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
  (n) => n.slug === 'anthem',
)!;
const PARENT_CITY = LOCATIONS.find((l) => l.slug === NEIGHBORHOOD.parentCity)!;

export const metadata: Metadata = {
  title: 'Anthem Cleaning Services | Henderson, NV | Final Touch',
  description:
    'Family-owned cleaning services in Anthem, Henderson, NV. Move-in, move-out, deep cleaning, and more for homes and businesses. Call (702) 444-5077.',
  alternates: { canonical: '/locations/henderson/anthem' },
  openGraph: {
    title: 'Anthem Cleaning Services | Henderson, NV | Final Touch Cleaning Company',
    description:
      'Scott & Nicole Maland serve Anthem and all of Henderson, NV. Move-in, move-out, deep cleaning, commercial, and more. Free quotes across Clark County.',
    type: 'website',
    url: `${SITE.url}/locations/henderson/anthem`,
  },
};

// Anthem neighborhood page. Service card order reflects Anthem demand:
// move-in first (established community draws buyers relocating from metro and
// out of state -- new-resident volume is high), move-out second (mix of
// owner-occupied and rental properties means turnover cleaning is common),
// deep cleaning third (long-term homeowners with high maintenance standards),
// then commercial, post-construction, janitorial, retail.
const ANTHEM_SERVICES = [
  SERVICES.find((s) => s.slug === 'move-in-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-out-cleaning')!,
  SERVICES.find((s) => s.slug === 'deep-cleaning')!,
  SERVICES.find((s) => s.slug === 'commercial-office-cleaning')!,
  SERVICES.find((s) => s.slug === 'post-construction-cleanup')!,
  SERVICES.find((s) => s.slug === 'janitorial-services')!,
  SERVICES.find((s) => s.slug === 'retail-space-cleaning')!,
];

const faq = [
  {
    q: 'Does Final Touch serve Anthem, Henderson, NV?',
    a: `Yes. Final Touch serves Anthem as part of its Henderson and ${SITE.serviceArea.county} service area. ${SITE.owners} own and run the company. Their team serves homes and businesses throughout Anthem, including both the Anthem Country Club area and the broader Anthem master-planned community in southern Henderson.`,
  },
  {
    q: 'What makes cleaning in Anthem different from other Henderson neighborhoods?',
    a: "Anthem is one of Henderson's most established master-planned communities, with a mix of long-term owner-occupied homes and properties that see active buyer turnover. Homes in Anthem often carry higher finish levels and larger square footage than the Henderson average, which means deep cleaning and move-in services require more time and attention to detail to meet the community's standard.",
  },
  {
    q: 'What cleaning services does Final Touch offer in Anthem?',
    a: `Final Touch offers move-in cleaning, move-out cleaning, deep cleaning, commercial and office cleaning, post-construction cleanup, janitorial services, and retail space cleaning throughout Anthem. Call ${SITE.phone.display} to discuss which service fits your home or business.`,
  },
  {
    q: 'Do you clean homes in Anthem Country Club or just the surrounding community?',
    a: `Final Touch serves the full Anthem area in Henderson, including properties in and around Anthem Country Club as well as the broader Anthem master-planned community. As a service-area business, the team comes to the customer's location. Call ${SITE.phone.display} to confirm coverage for your specific address.`,
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
  url: `${SITE.url}/locations/henderson/anthem`,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  areaServed: [
    { '@type': 'Place', name: 'Anthem, Henderson, NV' },
    { '@type': 'Place', name: 'Henderson, NV' },
    { '@type': 'Place', name: 'Clark County, NV' },
  ],
  description: 'Family-owned cleaning company serving Anthem, Henderson, and Clark County, NV.',
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
      name: 'Anthem',
      item: `${SITE.url}/locations/henderson/anthem`,
    },
  ],
};

export default function AnthemPage() {
  return (
    <>
      {/* 1. Hero over a local Anthem photo. */}
      <HeroSection
        eyebrow="Master-Planned Community"
        heading="Anthem Cleaning Services | Henderson, NV"
        sub={`Final Touch serves homes and businesses throughout Anthem, Henderson. Move-in, move-out, deep cleaning, and commercial cleaning for one of Henderson's most established communities. Call ${SITE.phone.display} or request a free quote.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/locations/anthem-henderson-commercial-cleaning-hero-image.webp',
          alt: 'Professional cleaning service by Final Touch in Anthem, Henderson, NV.',
        }}
      />

      {/* 2. Quick neighborhood answer */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
          <p className="text-lg text-brand-black leading-relaxed">
            Final Touch Cleaning Company serves Anthem, Henderson as part of its{' '}
            {SITE.serviceArea.county} service area. {SITE.owners} own and run the business. Their
            team provides move-in cleaning, move-out cleaning, deep cleaning, and commercial
            cleaning for homes and businesses throughout the Anthem community in southern Henderson.
            Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline">
              {SITE.phone.display}
            </a>{' '}
            to get a free quote for your Anthem home or business.
          </p>
        </div>
      </section>

      {/* 3. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="About Anthem"
            heading="An established community with high standards."
            sub="Anthem's housing mix, community character, and location in southern Henderson shape what residents and businesses need from a cleaning team."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                heading: "One of Henderson's most established communities",
                body: 'Anthem is a large master-planned community in southern Henderson that developed primarily in the late 1990s and 2000s. It includes a range of neighborhoods from more accessible single-family homes to the guard-gated Anthem Country Club enclave. The community is mature, well-maintained, and draws buyers who value established infrastructure and community character.',
              },
              {
                heading: 'Larger homes and higher finish levels',
                body: "Anthem homes tend toward larger square footage and higher interior finish levels than much of the Henderson average. Custom tile, stone surfaces, built-in cabinetry, and multi-level floor plans are common. A thorough deep clean or move-in service in Anthem typically requires more time and precision than a comparable job in a newer entry-level community.",
              },
              {
                heading: 'Active buyer and rental turnover',
                body: 'Despite being an established community, Anthem sees steady buyer and renter turnover. Relocating professionals, retirees, and families moving from out of state are common buyers. That steady activity creates consistent demand for move-in cleaning before new residents settle in and move-out cleaning when sellers or tenants hand back the keys.',
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
            heading="Popular cleaning services in Anthem."
            sub="Every service is available to Anthem homes and businesses. Ordered by what Anthem customers request most."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {ANTHEM_SERVICES.map((s) => (
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
            heading="Why Anthem families and businesses choose Final Touch."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                heading: 'Family-owned',
                body: `${SITE.owners} own and run Final Touch. When you call, you reach the owners or the team, not a call center or a franchise dispatcher.`,
              },
              {
                heading: 'Local to Clark County',
                body: `Final Touch is based in Southern Nevada and serves ${SITE.serviceArea.county} exclusively. The team knows this area and focuses entirely on it.`,
              },
              {
                heading: 'Detail-focused work',
                body: "Anthem homes have high finish levels and larger square footage. Final Touch focuses on the edges, surfaces, and fixtures that standard cleaning skips, matching the standard of the space.",
              },
              {
                heading: 'Residential and commercial',
                body: 'Final Touch serves both homeowners and businesses in Anthem. One team, one standard, across every type of space.',
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
            heading="Anthem and the greater Henderson area."
            sub="Final Touch serves Anthem as part of a broader Henderson and Clark County service area."
          />
          <div className="mt-8 space-y-3 text-base text-brand-black">
            <p>
              Anthem is a community within{' '}
              <Link
                href={PARENT_CITY.href}
                className="text-brand-blue font-semibold hover:underline"
              >
                {PARENT_CITY.name}, NV
              </Link>
              . Final Touch serves all of Henderson, including Anthem and neighboring communities
              across the city.
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
              href="/locations/las-vegas/summerlin"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Summerlin
            </Link>
            {/* TODO-BATCH-5: Add Green Valley Ranch, Seven Hills, MacDonald Highlands,
                Inspirada, Cadence, Lake Las Vegas pill links as those pages are built. */}
            <Link
              href="/services/deep-cleaning/henderson"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Deep Cleaning in Henderson, NV
            </Link>
            <Link
              href="/services/move-in-cleaning/henderson"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Move-In Cleaning in Henderson, NV
            </Link>
            <Link
              href="/services/move-out-cleaning/henderson"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Move-Out Cleaning in Henderson, NV
            </Link>
            <Link
              href={ROUTES.freeQuote}
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Request a free quote
            </Link>
            <Link
              href={ROUTES.services}
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
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
            heading="Frequently asked questions about cleaning in Anthem."
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
        heading="Ready to book a cleaning in Anthem?"
        sub={`Free quotes for homes and businesses throughout Anthem, Henderson. Call ${SITE.phone.display} or request a quote online.`}
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
