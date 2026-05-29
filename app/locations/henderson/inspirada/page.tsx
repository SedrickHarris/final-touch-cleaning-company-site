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
  (n) => n.slug === 'inspirada',
)!;
const PARENT_CITY = LOCATIONS.find((l) => l.slug === NEIGHBORHOOD.parentCity)!;

export const metadata: Metadata = {
  title: 'Inspirada Cleaning Services | Henderson, NV | Final Touch',
  description:
    'Family-owned cleaning services in Inspirada, Henderson, NV. Move-in, post-construction, deep cleaning, and more. Call (702) 444-5077 for a free quote.',
  alternates: { canonical: '/locations/henderson/inspirada' },
  openGraph: {
    title: 'Inspirada Cleaning Services | Henderson, NV | Final Touch Cleaning Company',
    description:
      'Scott & Nicole Maland serve Inspirada and all of Henderson, NV. Move-in, post-construction, deep cleaning, and more. Free quotes across Clark County.',
    type: 'website',
    url: `${SITE.url}/locations/henderson/inspirada`,
  },
};

// Inspirada neighborhood page. Service card order reflects Inspirada demand:
// move-in first (newer master-planned community with active new-construction
// buyer volume -- residents moving into brand-new homes need a top-to-bottom
// clean before settling in), post-construction second (ongoing build phases
// mean construction residue is a recurring issue even in occupied areas),
// deep cleaning third (early-phase homeowners resetting after the first year
// of desert-climate living), then move-out, commercial, janitorial, retail.
const INSPIRADA_SERVICES = [
  SERVICES.find((s) => s.slug === 'move-in-cleaning')!,
  SERVICES.find((s) => s.slug === 'post-construction-cleanup')!,
  SERVICES.find((s) => s.slug === 'deep-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-out-cleaning')!,
  SERVICES.find((s) => s.slug === 'commercial-office-cleaning')!,
  SERVICES.find((s) => s.slug === 'janitorial-services')!,
  SERVICES.find((s) => s.slug === 'retail-space-cleaning')!,
];

const faq = [
  {
    q: 'Does Final Touch serve Inspirada, Henderson, NV?',
    a: `Yes. Final Touch serves Inspirada as part of its Henderson and ${SITE.serviceArea.county} service area. ${SITE.owners} own and run the company. Their team serves homes throughout Inspirada, including residents in recently completed phases and buyers closing on new builds in active construction sections of the community.`,
  },
  {
    q: 'Why do new Inspirada homeowners need a professional move-in clean?',
    a: "Even brand-new homes in Inspirada accumulate construction dust, drywall particulate, adhesive residue, and debris that a standard builder clean does not fully address. Cabinets, vents, window tracks, and grout lines are common areas where residue remains after the builder's crew finishes. A professional move-in clean addresses those details before furniture arrives and the home becomes harder to access.",
  },
  {
    q: 'What cleaning services does Final Touch offer in Inspirada?',
    a: `Final Touch offers move-in cleaning, post-construction cleanup, deep cleaning, move-out cleaning, commercial and office cleaning, janitorial services, and retail space cleaning throughout Inspirada. Call ${SITE.phone.display} to discuss which service fits your home or business.`,
  },
  {
    q: 'Do you clean homes while Inspirada is still under active construction nearby?',
    a: `Yes. Active construction phases in a developing community like Inspirada mean ongoing dust and debris that affects homes even after move-in. Final Touch's post-construction cleanup and deep cleaning services address that residue. Call ${SITE.phone.display} to discuss the right service for your home's current condition.`,
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
  url: `${SITE.url}/locations/henderson/inspirada`,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  areaServed: [
    { '@type': 'Place', name: 'Inspirada, Henderson, NV' },
    { '@type': 'Place', name: 'Henderson, NV' },
    { '@type': 'Place', name: 'Clark County, NV' },
  ],
  description:
    'Family-owned cleaning company serving Inspirada, Henderson, and Clark County, NV.',
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
      name: 'Inspirada',
      item: `${SITE.url}/locations/henderson/inspirada`,
    },
  ],
};

export default function InspiradaPage() {
  return (
    <>
      {/* 1. Hero over a local Inspirada photo. */}
      <HeroSection
        eyebrow="Newer Master-Planned Community"
        heading="Inspirada Cleaning Services | Henderson, NV"
        sub={`Final Touch serves homes and businesses throughout Inspirada, Henderson. Move-in cleaning, post-construction cleanup, and deep cleaning for a community that is still growing. Call ${SITE.phone.display} or request a free quote.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/locations/inspirada-henderson-commercial-cleaning-hero-image.webp',
          alt: 'Professional cleaning service by Final Touch in Inspirada, Henderson, NV.',
        }}
      />

      {/* 2. Quick neighborhood answer */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
          <p className="text-lg text-brand-black leading-relaxed">
            Final Touch Cleaning Company serves Inspirada, Henderson as part of its{' '}
            {SITE.serviceArea.county} service area. {SITE.owners} own and run the business. Their
            team provides move-in cleaning, post-construction cleanup, and deep cleaning for
            homeowners across Inspirada&apos;s completed and active phases in southwest Henderson. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline">
              {SITE.phone.display}
            </a>{' '}
            to get a free quote for your Inspirada home.
          </p>
        </div>
      </section>

      {/* 3. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="About Inspirada"
            heading="A growing community where move-in and construction cleanup go hand in hand."
            sub="Inspirada's newer development timeline and active build phases create cleaning needs that differ from Henderson's older established neighborhoods."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                heading: 'A newer master-planned community in southwest Henderson',
                body: "Inspirada is a master-planned community in the southwest part of Henderson, developed in phases beginning in the late 2000s and continuing into the present. Unlike Henderson's older communities, Inspirada has a younger housing stock, an ongoing construction presence in its newer phases, and a resident base that skews toward first-time and move-up buyers drawn by newer construction and community amenities.",
              },
              {
                heading: 'New builds need more than a builder clean',
                body: "Buyers closing on new construction in Inspirada frequently discover that the builder's standard clean leaves behind drywall dust in vents, adhesive residue on surfaces, grout haze on tile, and construction particulate in cabinets and window tracks. A professional move-in clean or post-construction cleanup addresses what the builder handoff misses, so the home is genuinely clean before furniture and belongings arrive.",
              },
              {
                heading: 'Active phases mean ongoing dust for completed homes',
                body: 'In a community still building out its final phases, completed homes near active construction sites accumulate fine dust and debris even after move-in. Desert wind carries particulate from nearby grading and framing work into settled homes through window seals, door frames, and HVAC systems. Periodic deep cleaning is a practical maintenance response for Inspirada residents living adjacent to active development.',
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
            heading="Popular cleaning services in Inspirada."
            sub="Ordered to reflect Inspirada's newer construction profile -- move-in and post-construction cleanup lead because that is what most Inspirada customers need first."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {INSPIRADA_SERVICES.map((s) => (
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
            heading="Why Inspirada homeowners choose Final Touch."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                heading: 'Family-owned',
                body: `${SITE.owners} own and run Final Touch. When you call, you reach the owners or the team, not a call center or a franchise dispatcher.`,
              },
              {
                heading: 'Local to Clark County',
                body: `Final Touch is based in Southern Nevada and serves ${SITE.serviceArea.county} exclusively. The team knows Inspirada and the southwest Henderson area.`,
              },
              {
                heading: 'Detail-focused work',
                body: 'New construction leaves behind residue that standard cleaning misses. Final Touch focuses on vents, grout lines, window tracks, and cabinet interiors -- the areas that matter most in a move-in clean.',
              },
              {
                heading: 'New builds and established homes',
                body: 'Final Touch serves both brand-new Inspirada homes and homes that have been occupied for a few years and need a deep reset. One team, one standard, at every stage.',
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
            heading="Inspirada and the greater Henderson area."
            sub="Final Touch serves Inspirada as part of a broader Henderson and Clark County service area."
          />
          <div className="mt-8 space-y-3 text-base text-brand-black">
            <p>
              Inspirada is a community within{' '}
              <Link
                href={PARENT_CITY.href}
                className="text-brand-blue font-semibold hover:underline"
              >
                {PARENT_CITY.name}, NV
              </Link>
              . Final Touch serves all of Henderson, including Inspirada and neighboring
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
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Anthem
            </Link>
            <Link
              href="/locations/henderson/green-valley-ranch"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Green Valley Ranch
            </Link>
            <Link
              href="/locations/las-vegas/summerlin"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Summerlin
            </Link>
            {/* TODO-BATCH-5: Add Cadence, Seven Hills, MacDonald Highlands, Lake Las Vegas
                pill links as those pages are built. */}
            <Link
              href="/services/move-in-cleaning/henderson"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Move-In Cleaning in Henderson, NV
            </Link>
            <Link
              href="/services/post-construction-cleanup/henderson"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Post-Construction Cleanup in Henderson, NV
            </Link>
            <Link
              href="/services/deep-cleaning/henderson"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Deep Cleaning in Henderson, NV
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
            heading="Frequently asked questions about cleaning in Inspirada."
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
        heading="Ready to book a cleaning in Inspirada?"
        sub={`Free quotes for homes throughout Inspirada, Henderson. Call ${SITE.phone.display} or request a quote online.`}
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
