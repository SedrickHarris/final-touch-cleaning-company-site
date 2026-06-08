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
import Breadcrumb from '@/components/shared/Breadcrumb';

// Parent city derived from this neighborhood's own NEIGHBORHOODS record —
// single source of truth, no hardcoded parent slug.
const NEIGHBORHOOD = NEIGHBORHOODS.flatMap((g) => g.neighborhoods).find(
  (n) => n.slug === 'cadence',
)!;
const PARENT_CITY = LOCATIONS.find((l) => l.slug === NEIGHBORHOOD.parentCity)!;

export const metadata: Metadata = {
  title: 'Cadence Cleaning Services | Henderson, NV',
  description:
    'Family-owned cleaning services in Cadence, Henderson, NV. Post-construction cleanup, move-in cleaning, deep cleaning, and more. Call (702) 444-5077.',
  alternates: { canonical: '/locations/henderson/cadence' },
  openGraph: {
    title: 'Cadence Cleaning Services | Henderson, NV | Final Touch Cleaning Company',
    description:
      'Scott & Nicole Maland serve Cadence and all of Henderson, NV. Post-construction, move-in, deep cleaning, and more. Free quotes across Clark County.',
    type: 'website',
    url: `${SITE.url}/locations/henderson/cadence`,
  },
};

// Cadence neighborhood page. Service card order reflects Cadence demand:
// post-construction first (Cadence is the newest large master-planned
// community in Henderson -- active construction is still ongoing across
// multiple phases, and post-construction cleanup is the single highest-demand
// service here), move-in second (new buyers closing on builds need a
// professional clean before move-in), deep cleaning third (early residents
// from completed phases needing a first full reset after a year of
// desert-climate living), then move-out, commercial, janitorial, retail.
const CADENCE_SERVICES = [
  SERVICES.find((s) => s.slug === 'post-construction-cleanup')!,
  SERVICES.find((s) => s.slug === 'move-in-cleaning')!,
  SERVICES.find((s) => s.slug === 'deep-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-out-cleaning')!,
  SERVICES.find((s) => s.slug === 'commercial-office-cleaning')!,
  SERVICES.find((s) => s.slug === 'janitorial-services')!,
  SERVICES.find((s) => s.slug === 'retail-space-cleaning')!,
];

const faq = [
  {
    q: 'Does Final Touch serve Cadence, Henderson, NV?',
    a: `Yes. Final Touch serves Cadence as part of its Henderson and ${SITE.serviceArea.county} service area. ${SITE.owners} own and run the company. Their team serves homes throughout Cadence, including buyers closing on new builds in active construction phases and residents already settled in completed sections of the community.`,
  },
  {
    q: 'Why is post-construction cleanup especially important in Cadence?',
    a: "Cadence is one of the newest large master-planned communities in Henderson, with multiple phases still actively under construction. That means homes throughout the community -- even those completed and occupied -- are subject to ongoing dust and debris from nearby build activity. Fine construction particulate from active grading, framing, and finishing work carries through the air and settles inside finished homes through gaps in windows, doors, and HVAC systems. A post-construction cleanup or deep clean addresses that accumulation at a level routine maintenance cannot.",
  },
  {
    q: 'What cleaning services does Final Touch offer in Cadence?',
    a: `Final Touch offers post-construction cleanup, move-in cleaning, deep cleaning, move-out cleaning, commercial and office cleaning, janitorial services, and retail space cleaning throughout Cadence. Call ${SITE.phone.display} to discuss which service fits your home.`,
  },
  {
    q: 'Can Final Touch clean a Cadence home right after the builder hands it over?',
    a: `Yes. A builder handoff clean is the most common trigger for Final Touch calls in new-construction communities like Cadence. The standard builder clean typically covers surface-level work. Final Touch's post-construction cleanup and move-in cleaning services go deeper -- inside cabinets, along grout lines, inside vents, across window tracks and ledges -- so the home is genuinely ready before your belongings arrive. Call ${SITE.phone.display} to schedule.`,
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
  url: `${SITE.url}/locations/henderson/cadence`,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  image: 'https://www.finaltouchcleaningteam.com/images/logo/final-touch-cleaning-company-logo.webp',
  sameAs: ['https://www.google.com/maps?cid=5303198646776788086'],
  areaServed: [
    { '@type': 'Place', name: 'Cadence, Henderson, NV' },
    { '@type': 'Place', name: 'Henderson, NV' },
    { '@type': 'Place', name: 'Clark County, NV' },
  ],
  description:
    'Family-owned cleaning company serving Cadence, Henderson, and Clark County, NV.',
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

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Locations', href: '/locations' },
  { label: 'Henderson', href: '/locations/henderson' },
  { label: 'Cadence' },
];

export default function CadencePage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero over a local Cadence photo. */}
      <HeroSection
        eyebrow="Henderson's Newest Master-Planned Community"
        heading="Cadence Cleaning Services | Henderson, NV"
        sub={`Final Touch serves homes and businesses throughout Cadence, Henderson. Post-construction cleanup and move-in cleaning for Henderson's most actively developing community. Call ${SITE.phone.display} or request a free quote.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/locations/cadence-henderson-commercial-cleaning-hero-image.webp',
          alt: 'Professional cleaning service by Final Touch in Cadence, Henderson, NV.',
        }}
      />

      {/* 2. Quick neighborhood answer */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
          <p className="text-lg text-brand-black leading-relaxed">
            Final Touch Cleaning Company serves Cadence, Henderson as part of its{' '}
            {SITE.serviceArea.county} service area. {SITE.owners} own and run the business. Their
            team provides post-construction cleanup, move-in cleaning, and deep cleaning for
            properties across Cadence&apos;s completed and active phases in northeast Henderson. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline">
              {SITE.phone.display}
            </a>{' '}
            to get a free quote for your Cadence home.
          </p>
        </div>
      </section>

      {/* 3. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="About Cadence"
            heading="Henderson's most actively developing community."
            sub="Cadence's scale, construction timeline, and northeast Henderson location create cleaning needs that are distinct from any other neighborhood in this batch."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                heading: "Henderson's newest large master-planned community",
                body: 'Cadence is the largest and newest major master-planned community currently under development in Henderson, located in the northeast part of the city. Unlike Inspirada or Anthem, Cadence is still in active build phases across a significant portion of its total footprint. Multiple home builders are operating on-site simultaneously, making it one of the most consistently active new-construction environments in the Las Vegas Valley.',
              },
              {
                heading: 'Construction dust reaches completed homes',
                body: 'When multiple builders are actively framing, finishing, and grading across a large site, the dust and debris produced does not stay confined to the active zones. Fine particulate from concrete cutting, drywall finishing, and earthwork carries through the air and infiltrates completed homes through HVAC systems, window gaps, and door seals. Cadence residents in finished sections deal with a level of construction-related indoor dust that residents of fully built-out communities do not.',
              },
              {
                heading: 'Builder handoff cleans leave gaps',
                body: "Every builder in Cadence performs a standard handoff clean before closing. In practice, these cleans are surface-level and time-constrained. Grout lines, cabinet interiors, vent covers, window tracks, and baseboards in corners are the areas most commonly missed. A professional post-construction cleanup or move-in clean after the builder's crew finishes ensures the home is genuinely clean before a family's belongings arrive.",
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
            heading="Popular cleaning services in Cadence."
            sub="Post-construction cleanup and move-in cleaning lead because that is what Cadence properties need most -- new builds and recently completed homes require the detail work that builder cleans leave unfinished. Every service is available across the full community."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {CADENCE_SERVICES.map((s) => (
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
            heading="Why Cadence property owners choose Final Touch."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                heading: 'Family-owned',
                body: `${SITE.owners} own and run Final Touch. When you call, you reach the owners or the team, not a call center or a franchise dispatcher.`,
              },
              {
                heading: 'Local to Clark County',
                body: `Final Touch is based in Southern Nevada and serves ${SITE.serviceArea.county} exclusively. The team knows the Cadence area and the northeast Henderson corridor.`,
              },
              {
                heading: 'Built for new construction',
                body: 'Post-construction cleanup requires a different approach than routine maintenance. Final Touch focuses on the residue, dust, and debris that new builds leave behind -- in the areas that matter most before move-in.',
              },
              {
                heading: 'Every stage of the build',
                body: 'Final Touch serves Cadence homes at builder handoff, at move-in, and at the periodic deep clean stage as the community matures. One team across every phase of ownership.',
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
            heading="Cadence and the greater Henderson area."
            sub="Final Touch serves Cadence as part of a broader Henderson and Clark County service area."
          />
          <div className="mt-8 space-y-3 text-base text-brand-black">
            <p>
              Cadence is a community within{' '}
              <Link
                href={PARENT_CITY.href}
                className="text-brand-blue font-semibold hover:underline"
              >
                {PARENT_CITY.name}, NV
              </Link>
              . Final Touch serves all of Henderson, including Cadence and neighboring communities
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
              href="/locations/henderson/inspirada"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Inspirada
            </Link>
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
            {/* TODO-BATCH-5: Add Seven Hills, MacDonald Highlands, Lake Las Vegas
                pill links as those pages are built. */}
            <Link
              href="/services/post-construction-cleanup/henderson"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Post-Construction Cleanup in Henderson, NV
            </Link>
            <Link
              href="/services/move-in-cleaning/henderson"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Move-In Cleaning in Henderson, NV
            </Link>
            <Link
              href="/services/deep-cleaning/henderson"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Deep Cleaning in Henderson, NV
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
            heading="Frequently asked questions about cleaning in Cadence."
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
        heading="Ready to book a cleaning in Cadence?"
        sub={`Free quotes for homes throughout Cadence, Henderson. Call ${SITE.phone.display} or request a quote online.`}
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
    </>
  );
}
