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
  (n) => n.slug === 'lake-las-vegas',
)!;
const PARENT_CITY = LOCATIONS.find((l) => l.slug === NEIGHBORHOOD.parentCity)!;

export const metadata: Metadata = {
  title: 'Lake Las Vegas Cleaning Services | Henderson, NV',
  description:
    'Family-owned cleaning services in Lake Las Vegas, Henderson, NV. Deep cleaning, move-in, move-out, and more for resort-adjacent homes. Call (702) 444-5077.',
  alternates: { canonical: '/locations/henderson/lake-las-vegas' },
  openGraph: {
    title: 'Lake Las Vegas Cleaning Services | Henderson, NV | Final Touch Cleaning Company',
    description:
      'Scott & Nicole Maland serve Lake Las Vegas and all of Henderson, NV. Deep cleaning, move-in, move-out for resort-adjacent homes. Free quotes across Clark County.',
    type: 'website',
    url: `${SITE.url}/locations/henderson/lake-las-vegas`,
  },
};

// Lake Las Vegas neighborhood page. Service card order reflects demand:
// deep cleaning first (resort-adjacent community with higher humidity levels
// near the lake and premium finishes throughout -- established residents
// prioritize periodic resets that address moisture-related accumulation and
// maintain the resort-standard appearance of the community), move-in second
// (buyers purchasing vacation homes, retirement properties, or primary
// residences at this lakefront location need a thorough clean before arrival),
// move-out third (vacation rental and second-home turnover cleaning is a
// distinct need in a resort community), then commercial, post-construction,
// janitorial, retail.
const LLV_SERVICES = [
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
    q: 'Does Final Touch serve Lake Las Vegas, Henderson, NV?',
    a: `Yes. Final Touch serves Lake Las Vegas as part of its Henderson and ${SITE.serviceArea.county} service area. ${SITE.owners} own and run the company. Their team serves residential properties throughout the Lake Las Vegas community, including lakefront homes, resort-adjacent residences, and properties within the gated sections of this Henderson enclave.`,
  },
  {
    q: 'How does the lake environment at Lake Las Vegas affect cleaning needs?',
    a: "Lake Las Vegas surrounds a man-made lake, which introduces higher ambient humidity than the surrounding Mojave Desert. That moisture affects how dust, mineral deposits, and residue accumulate on interior surfaces, window glass, and outdoor areas adjacent to the home. Homes near the water also deal with water-line mineral deposits on glass and stone that require different treatment than standard desert-climate cleaning. A periodic deep clean accounts for these moisture-influenced patterns in a way routine maintenance does not.",
  },
  {
    q: 'What cleaning services does Final Touch offer in Lake Las Vegas?',
    a: `Final Touch offers deep cleaning, move-in cleaning, move-out cleaning, commercial and office cleaning, post-construction cleanup, janitorial services, and retail space cleaning throughout Lake Las Vegas. Call ${SITE.phone.display} to discuss the right service for your home.`,
  },
  {
    q: 'Do you clean vacation homes and second homes at Lake Las Vegas?',
    a: `Yes. Lake Las Vegas includes a number of vacation homes and second properties that are occupied periodically rather than year-round. Final Touch provides move-in cleaning before an owner or guest arrives and move-out cleaning after a stay. Call ${SITE.phone.display} to discuss scheduling that works around your usage pattern.`,
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
  url: `${SITE.url}/locations/henderson/lake-las-vegas`,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  image: 'https://www.finaltouchcleaningteam.com/images/logo/final-touch-cleaning-company-logo.webp',
  sameAs: ['https://www.google.com/maps?cid=5303198646776788086'],
  areaServed: [
    { '@type': 'Place', name: 'Lake Las Vegas, Henderson, NV' },
    { '@type': 'Place', name: 'Henderson, NV' },
    { '@type': 'Place', name: 'Clark County, NV' },
  ],
  description:
    'Family-owned cleaning company serving Lake Las Vegas, Henderson, and Clark County, NV.',
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
  { label: 'Lake Las Vegas' },
];

export default function LakeLasVegasPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero over a local Lake Las Vegas photo. */}
      <HeroSection
        eyebrow="Resort-Adjacent Lakefront Community"
        heading="Lake Las Vegas Cleaning Services | Henderson, NV"
        sub={`Final Touch serves homes throughout Lake Las Vegas, Henderson. Deep cleaning, move-in, and move-out cleaning for resort-adjacent and lakefront residences in this distinct Henderson enclave. Call ${SITE.phone.display} or request a free quote.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/locations/lake-las-vegas-henderson-commercial-cleaning-hero-image.webp',
          alt: 'Professional cleaning service by Final Touch in Lake Las Vegas, Henderson, NV.',
        }}
      />

      {/* 2. Quick neighborhood answer */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
          <p className="text-lg text-brand-black leading-relaxed">
            Final Touch Cleaning Company serves Lake Las Vegas, Henderson as part of its{' '}
            {SITE.serviceArea.county} service area. {SITE.owners} own and run the business. Their
            team provides deep cleaning, move-in cleaning, and move-out cleaning for lakefront
            homes, resort-adjacent residences, and vacation properties throughout the Lake Las
            Vegas community in eastern Henderson. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline">
              {SITE.phone.display}
            </a>{' '}
            to get a free quote for your Lake Las Vegas home.
          </p>
        </div>
      </section>

      {/* 3. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="About Lake Las Vegas"
            heading="A resort community with cleaning needs that the desert does not create anywhere else."
            sub="The man-made lake, resort environment, and mix of primary residences and vacation properties give Lake Las Vegas a character that stands apart from every other Henderson neighborhood."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                heading: 'A man-made lake in the eastern Henderson desert',
                body: 'Lake Las Vegas is built around a 320-acre man-made lake in the eastern part of Henderson, surrounded by resort hotels, residential communities, and retail. The lake is the defining feature of the area and the reason the community exists in its current form. Homes here range from lakefront villas and resort-adjacent condos to hillside residences with lake views, all within a planned community that maintains a consistent resort-caliber appearance standard.',
              },
              {
                heading: 'Higher humidity near the water changes how surfaces accumulate',
                body: 'The lake introduces ambient humidity that does not exist in the surrounding Mojave Desert. That moisture affects dust adhesion, mineral deposit formation on glass and stone, and the rate at which residue builds on interior surfaces near windows and exterior-facing walls. Homes adjacent to the water develop mineral deposits on glass and stone from water spray and vapor that require specific cleaning approaches different from standard desert-climate residential cleaning.',
              },
              {
                heading: 'Vacation homes and second properties need arrival-ready cleaning',
                body: 'Lake Las Vegas includes a meaningful number of vacation homes and second properties used periodically rather than year-round. Homes that sit unoccupied for weeks or months collect dust, develop odors, and need a full reset before the owners or guests arrive. Final Touch provides move-in cleaning before arrival and move-out cleaning after a stay, keeping the property in consistent condition regardless of the occupancy pattern.',
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
            heading="Popular cleaning services in Lake Las Vegas."
            sub="Deep cleaning leads because the lake environment and resort standard mean ongoing maintenance needs that go beyond what routine cleaning addresses. Every service is available across the community."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {LLV_SERVICES.map((s) => (
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
            heading="Why Lake Las Vegas homeowners choose Final Touch."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                heading: 'Family-owned',
                body: `${SITE.owners} own and run Final Touch. When you call, you reach the owners or the team, not a call center or a franchise dispatcher.`,
              },
              {
                heading: 'Local to Clark County',
                body: `Final Touch is based in Southern Nevada and serves ${SITE.serviceArea.county} exclusively. The team knows the eastern Henderson area and focuses entirely on this region.`,
              },
              {
                heading: 'Detail standard for resort communities',
                body: 'Lake Las Vegas holds a resort-caliber appearance standard across the community. Final Touch matches that standard with thorough cleaning that addresses moisture-related accumulation, mineral deposits, and the detail areas routine maintenance misses.',
              },
              {
                heading: 'Works around your schedule',
                body: 'Vacation homes and second properties need flexible scheduling. Final Touch coordinates move-in cleans before arrival and move-out cleans after a stay, working around occupancy patterns that do not follow a standard weekly schedule.',
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
            heading="Lake Las Vegas and the greater Henderson area."
            sub="Final Touch serves Lake Las Vegas as part of a broader Henderson and Clark County service area."
          />
          <div className="mt-8 space-y-3 text-base text-brand-black">
            <p>
              Lake Las Vegas is a community within{' '}
              <Link
                href={PARENT_CITY.href}
                className="text-brand-blue font-semibold hover:underline"
              >
                {PARENT_CITY.name}, NV
              </Link>
              . Final Touch serves all of Henderson, including Lake Las Vegas and neighboring
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
              href="/locations/henderson/macdonald-highlands"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              MacDonald Highlands
            </Link>
            <Link
              href="/locations/henderson/seven-hills"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Seven Hills
            </Link>
            <Link
              href="/locations/henderson/anthem"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Anthem
            </Link>
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
              href="/services/commercial-office-cleaning/henderson"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Commercial Office Cleaning in Henderson, NV
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
            heading="Frequently asked questions about cleaning in Lake Las Vegas."
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
        heading="Ready to book a cleaning in Lake Las Vegas?"
        sub={`Free quotes for homes throughout Lake Las Vegas, Henderson. Call ${SITE.phone.display} or request a quote online.`}
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
