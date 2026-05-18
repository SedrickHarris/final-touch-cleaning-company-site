import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import HeroSection from '@/components/shared/HeroSection';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceCard from '@/components/shared/ServiceCard';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES, SERVICES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'Southern Highlands Cleaning Services | Las Vegas, NV | Final Touch',
  description:
    'Family-owned cleaning services in Southern Highlands, Las Vegas, NV. Deep cleaning, move-in, move-out, and more for golf community homes. Call (702) 444-5077.',
  alternates: { canonical: '/locations/las-vegas/southern-highlands' },
  openGraph: {
    title: 'Southern Highlands Cleaning Services | Las Vegas, NV | Final Touch Cleaning Company',
    description:
      'Scott & Nicole Maland serve Southern Highlands and all of Las Vegas, NV. Deep cleaning, move-in, move-out for master-planned golf community homes. Free quotes.',
    type: 'website',
    url: `${SITE.url}/locations/las-vegas/southern-highlands`,
  },
};

// Southern Highlands neighborhood page. Service card order reflects demand:
// deep cleaning first (established master-planned golf community with large
// homes and high finish standards -- long-term homeowners prioritize thorough
// periodic resets), move-in second (south Las Vegas location draws buyers
// relocating from California and out of state who need a full clean before
// settling in), move-out third (seller prep for listing in a premium
// community), post-construction fourth (ongoing custom and semi-custom build
// activity within the community), then commercial, janitorial, retail.
const SH_SERVICES = [
  SERVICES.find((s) => s.slug === 'deep-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-in-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-out-cleaning')!,
  SERVICES.find((s) => s.slug === 'post-construction-cleanup')!,
  SERVICES.find((s) => s.slug === 'commercial-office-cleaning')!,
  SERVICES.find((s) => s.slug === 'janitorial-services')!,
  SERVICES.find((s) => s.slug === 'retail-space-cleaning')!,
];

const faq = [
  {
    q: 'Does Final Touch serve Southern Highlands, Las Vegas, NV?',
    a: `Yes. Final Touch serves Southern Highlands as part of its Las Vegas and ${SITE.serviceArea.county} service area. ${SITE.owners} own and run the company. Their team serves homes and businesses throughout Southern Highlands, including both the guard-gated golf community sections and the broader master-planned residential areas in the southern Las Vegas valley.`,
  },
  {
    q: 'What makes Southern Highlands different from other Las Vegas neighborhoods for cleaning?',
    a: "Southern Highlands is a master-planned community in the far south of Las Vegas built around a private golf course, with a mix of production homes, custom builds, and guard-gated sections at varying price points. Homes here tend to be larger than the Las Vegas average and are maintained to a higher standard than typical valley neighborhoods. The golf course environment also means finer grass and landscaping particulate enters homes near the course, adding to the standard desert-climate dust accumulation that affects all Las Vegas properties.",
  },
  {
    q: 'What cleaning services does Final Touch offer in Southern Highlands?',
    a: `Final Touch offers deep cleaning, move-in cleaning, move-out cleaning, post-construction cleanup, commercial and office cleaning, janitorial services, and retail space cleaning throughout Southern Highlands. Call ${SITE.phone.display} to discuss the right service for your home or business.`,
  },
  {
    q: 'Do you clean homes near the Southern Highlands Golf Club?',
    a: `Yes. Final Touch serves homes throughout Southern Highlands, including properties adjacent to and near the golf course. Homes near the course deal with a combination of desert dust and landscaping particulate that benefits from periodic deep cleaning beyond routine maintenance. Call ${SITE.phone.display} to schedule a visit.`,
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
  url: `${SITE.url}/locations/las-vegas/southern-highlands`,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  areaServed: [
    { '@type': 'Place', name: 'Southern Highlands, Las Vegas, NV' },
    { '@type': 'Place', name: 'Las Vegas, NV' },
    { '@type': 'Place', name: 'Clark County, NV' },
  ],
  description:
    'Family-owned cleaning company serving Southern Highlands, Las Vegas, and Clark County, NV.',
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
      name: 'Las Vegas',
      item: `${SITE.url}/locations/las-vegas`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Southern Highlands',
      item: `${SITE.url}/locations/las-vegas/southern-highlands`,
    },
  ],
};

export default function SouthernHighlandsPage() {
  return (
    <>
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Master-Planned Golf Community"
        heading="Southern Highlands Cleaning Services | Las Vegas, NV"
        sub={`Final Touch serves homes and businesses throughout Southern Highlands, Las Vegas. Deep cleaning, move-in, move-out, and post-construction cleaning for one of south Las Vegas's most established master-planned communities. Call ${SITE.phone.display} or request a free quote.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Quick neighborhood answer */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
          <p className="text-lg text-brand-black leading-relaxed">
            Final Touch Cleaning Company serves Southern Highlands, Las Vegas as part of its{' '}
            {SITE.serviceArea.county} service area. {SITE.owners} own and run the business. Their
            team provides deep cleaning, move-in cleaning, move-out cleaning, and post-construction
            cleanup for homes and businesses throughout Southern Highlands, the master-planned golf
            community in the far south Las Vegas valley. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline">
              {SITE.phone.display}
            </a>{' '}
            to get a free quote for your Southern Highlands home or business.
          </p>
        </div>
      </section>

      {/* 3. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="About Southern Highlands"
            heading="A golf community in the south valley with high maintenance standards."
            sub="Southern Highlands combines a private golf course setting with a range of residential options from production homes to custom builds, creating a community with distinct cleaning characteristics."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                heading: 'Master-planned around a private golf course',
                body: 'Southern Highlands is a large master-planned community in the far south of Las Vegas, developed in the late 1990s and 2000s around the Southern Highlands Golf Club. The community sits near the I-15 corridor at the southern edge of the Las Vegas valley, which positions it as a natural entry point for buyers relocating from California and other western states. The golf course setting establishes a visual standard that carries through to how residents maintain their homes.',
              },
              {
                heading: 'Golf course particulate adds to desert dust accumulation',
                body: 'Homes near a maintained golf course deal with a combination of fine grass clippings, fertilizer particulate, and irrigation mist that enters through windows, doors, and HVAC systems alongside the standard Mojave Desert dust that affects all Las Vegas properties. Homes adjacent to the course accumulate this layered particulate on window surfaces, outdoor furniture, and interior horizontal surfaces at a rate that makes periodic deep cleaning more valuable than in neighborhoods without a maintained turf environment nearby.',
              },
              {
                heading: 'Mix of production homes, custom builds, and gated sections',
                body: 'Southern Highlands spans a wide range of home types. Production homes built by major Las Vegas builders sit alongside custom and semi-custom builds in guard-gated sections at higher price points. That range means cleaning needs vary significantly within the community -- from standard residential deep cleans in production-home sections to more involved services for larger custom homes with premium finishes in the gated areas.',
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
            heading="Popular cleaning services in Southern Highlands."
            sub="Deep cleaning leads because Southern Highlands homeowners maintain a higher standard than the typical Las Vegas valley neighborhood. Every service is available across the community."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {SH_SERVICES.map((s) => (
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
            heading="Why Southern Highlands families and businesses choose Final Touch."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                heading: 'Family-owned',
                body: `${SITE.owners} own and run Final Touch. When you call, you reach the owners or the team, not a call center or a franchise dispatcher.`,
              },
              {
                heading: 'Local to Clark County',
                body: `Final Touch is based in Southern Nevada and serves ${SITE.serviceArea.county} exclusively. The team serves the full Las Vegas valley including the south valley communities.`,
              },
              {
                heading: 'Detail standard that fits the community',
                body: 'Southern Highlands holds a higher maintenance standard than most Las Vegas neighborhoods. Final Touch matches that standard with thorough cleaning that goes beyond surface work -- covering the areas golf course particulate and desert dust reach.',
              },
              {
                heading: 'Residential and commercial',
                body: 'Final Touch serves both homeowners and the commercial properties within Southern Highlands. One team, one standard, across every type of space in the community.',
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
            heading="Southern Highlands and the greater Las Vegas area."
            sub="Final Touch serves Southern Highlands as part of a broader Las Vegas and Clark County service area."
          />
          <div className="mt-8 space-y-3 text-base text-brand-black">
            <p>
              Southern Highlands is a community within{' '}
              <Link
                href="/locations/las-vegas"
                className="text-brand-blue font-semibold hover:underline"
              >
                Las Vegas, NV
              </Link>
              . Final Touch serves all of Las Vegas, including Southern Highlands and neighboring
              communities across the city.
            </p>
            <p>
              The team also serves neighborhoods across{' '}
              <Link
                href="/locations/henderson"
                className="text-brand-blue font-semibold hover:underline"
              >
                Henderson
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
            <Link
              href="/locations/henderson/anthem"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Anthem
            </Link>
            <Link
              href="/locations/henderson/macdonald-highlands"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              MacDonald Highlands
            </Link>
            {/* TODO-BATCH-5: Add Downtown Las Vegas pill link once that page is built. */}
            {/* TODO-BATCH-6: Add /services/[service]/las-vegas matrix links once Batch 6 ships. */}
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
            heading="Frequently asked questions about cleaning in Southern Highlands."
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
        heading="Ready to book a cleaning in Southern Highlands?"
        sub={`Free quotes for homes and businesses throughout Southern Highlands, Las Vegas. Call ${SITE.phone.display} or request a quote online.`}
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
