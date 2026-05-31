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
  (n) => n.slug === 'downtown-las-vegas',
)!;
const PARENT_CITY = LOCATIONS.find((l) => l.slug === NEIGHBORHOOD.parentCity)!;

export const metadata: Metadata = {
  title: 'Downtown Las Vegas Cleaning Services | Las Vegas, NV',
  description:
    'Family-owned commercial and office cleaning in Downtown Las Vegas, NV. Janitorial, retail, move-in, and more for businesses and residents. Call (702) 444-5077.',
  alternates: { canonical: '/locations/las-vegas/downtown-las-vegas' },
  openGraph: {
    title: 'Downtown Las Vegas Cleaning Services | Las Vegas, NV | Final Touch Cleaning Company',
    description:
      'Scott & Nicole Maland serve Downtown Las Vegas, NV. Commercial, janitorial, retail, and residential cleaning for the urban core. Free quotes across Clark County.',
    type: 'website',
    url: `${SITE.url}/locations/las-vegas/downtown-las-vegas`,
  },
};

// Downtown Las Vegas neighborhood page. The most commercially distinct page
// in the batch. Service card order reflects DTLV demand:
// commercial and office cleaning first (Downtown Las Vegas is the most
// office-dense, business-corridor-heavy area in this entire batch -- law
// firms, government offices, creative studios, and mixed-use commercial
// all concentrated in a walkable urban core), janitorial second (ongoing
// scheduled programs are the primary service model for downtown businesses
// operating in multi-tenant buildings), retail third (Fremont Street and
// surrounding corridors carry significant retail and hospitality density),
// move-out fourth (urban residential lofts and apartments turn over
// regularly), move-in fifth, post-construction sixth (adaptive reuse and
// renovation activity in the Arts District and surrounding blocks),
// deep cleaning last.
const DTLV_SERVICES = [
  SERVICES.find((s) => s.slug === 'commercial-office-cleaning')!,
  SERVICES.find((s) => s.slug === 'janitorial-services')!,
  SERVICES.find((s) => s.slug === 'retail-space-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-out-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-in-cleaning')!,
  SERVICES.find((s) => s.slug === 'post-construction-cleanup')!,
  SERVICES.find((s) => s.slug === 'deep-cleaning')!,
];

const faq = [
  {
    q: 'Does Final Touch serve Downtown Las Vegas, NV?',
    a: `Yes. Final Touch serves Downtown Las Vegas as part of its Las Vegas and ${SITE.serviceArea.county} service area. ${SITE.owners} own and run the company. Their team serves commercial offices, retail spaces, multi-tenant buildings, and residential properties throughout the Downtown Las Vegas core, including the Fremont Street corridor, the Arts District, and the surrounding urban blocks.`,
  },
  {
    q: 'What types of Downtown Las Vegas businesses does Final Touch clean?',
    a: `Final Touch serves the full range of Downtown Las Vegas commercial properties -- law offices, government-adjacent professional services, creative studios, retail storefronts, restaurants, and mixed-use commercial spaces in multi-tenant buildings. Both one-time cleans and ongoing scheduled janitorial programs are available. Call ${SITE.phone.display} to discuss the right setup for your business.`,
  },
  {
    q: 'What cleaning services does Final Touch offer in Downtown Las Vegas?',
    a: `Final Touch offers commercial and office cleaning, janitorial services, retail space cleaning, move-out cleaning, move-in cleaning, post-construction cleanup, and deep cleaning throughout Downtown Las Vegas. Commercial and ongoing janitorial programs are the most common request in this area. Call ${SITE.phone.display} to get a free quote.`,
  },
  {
    q: 'Do you clean residential lofts and apartments in Downtown Las Vegas?',
    a: `Yes. Downtown Las Vegas includes a growing residential segment -- converted lofts, apartment communities, and mixed-use buildings with residential units above street-level commercial. Final Touch provides move-in cleaning, move-out cleaning, and deep cleaning for residents in these spaces. Call ${SITE.phone.display} to discuss your unit or building.`,
  },
  {
    q: 'Can Final Touch handle post-construction cleanup for a renovation or adaptive reuse project downtown?',
    a: `Yes. Downtown Las Vegas has seen significant renovation and adaptive reuse activity, particularly in the Arts District and along the blocks surrounding Fremont Street. Construction and renovation projects leave behind dust, debris, and residue that require a professional cleanup before the space opens. Final Touch's post-construction cleanup service handles that work. Call ${SITE.phone.display} to discuss your project scope.`,
  },
];

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  url: `${SITE.url}/locations/las-vegas/downtown-las-vegas`,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  image: 'https://www.finaltouchcleaningteam.com/images/logo/final-touch-cleaning-company-logo.webp',
  sameAs: ['https://www.google.com/maps?cid=5303198646776788086'],
  areaServed: [
    { '@type': 'Place', name: 'Downtown Las Vegas, NV' },
    { '@type': 'Place', name: 'Las Vegas, NV' },
    { '@type': 'Place', name: 'Clark County, NV' },
  ],
  description:
    'Family-owned cleaning company serving Downtown Las Vegas, Las Vegas, and Clark County, NV.',
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
  { label: 'Las Vegas', href: '/locations/las-vegas' },
  { label: 'Downtown Las Vegas' },
];

export default function DowntownLasVegasPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero over a local Downtown Las Vegas photo. */}
      <HeroSection
        eyebrow="Urban Commercial and Mixed-Use District"
        heading="Downtown Las Vegas Cleaning Services | Las Vegas, NV"
        sub={`Final Touch serves offices, retail spaces, and residential properties throughout Downtown Las Vegas. Commercial cleaning, janitorial programs, and retail space cleaning for the urban core. Call ${SITE.phone.display} or request a free quote.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/locations/downtown-las-vegas-commercial-cleaning-hero-image.webp',
          alt: 'Professional cleaning service by Final Touch in Downtown Las Vegas, NV.',
        }}
      />

      {/* 2. Quick neighborhood answer */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
          <p className="text-lg text-brand-black leading-relaxed">
            Final Touch Cleaning Company serves Downtown Las Vegas as part of its{' '}
            {SITE.serviceArea.county} service area. {SITE.owners} own and run the business. Their
            team provides commercial and office cleaning, janitorial services, retail space
            cleaning, and residential cleaning for businesses and residents throughout the Downtown
            Las Vegas core -- from the Fremont Street corridor and the Arts District to surrounding
            mixed-use blocks. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline">
              {SITE.phone.display}
            </a>{' '}
            to get a free quote for your Downtown Las Vegas office, retail space, or home.
          </p>
        </div>
      </section>

      {/* 3. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="About Downtown Las Vegas"
            heading="The commercial core of Las Vegas -- and the most distinct area in this batch."
            sub="Downtown Las Vegas is the only area in this batch that is primarily commercial and urban rather than residential and suburban. The mix of office tenants, retail corridors, and a growing residential segment creates a different set of cleaning needs."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                heading: 'A dense commercial and office core',
                body: "Downtown Las Vegas is the city's original urban center, anchored by government offices, law firms, financial services, and professional services concentrated in multi-story buildings near the courthouse and civic center. The Fremont Street corridor adds hospitality, retail, and entertainment density. Unlike every other area in this batch, the primary cleaning demand here comes from businesses and commercial tenants rather than residential homeowners.",
              },
              {
                heading: 'The Arts District and renovation activity',
                body: 'The 18b Arts District, immediately south of the Fremont Street Experience, has been an active zone of adaptive reuse, renovation, and new commercial buildout for years. Creative studios, galleries, boutique retail, restaurants, and office conversions are common. Renovation and construction activity in this corridor creates post-construction cleanup demand that is ongoing rather than tied to a single development phase.',
              },
              {
                heading: 'A growing urban residential segment',
                body: 'Downtown Las Vegas has developed a residential population that did not exist at meaningful scale a decade ago. Converted lofts, purpose-built apartment buildings, and mixed-use developments with residential floors above commercial have added renters and owners to the urban core. These residents need the same move-in, move-out, and deep cleaning services as residents elsewhere in Las Vegas, but in a higher-density, smaller-unit context.',
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
            heading="Popular cleaning services in Downtown Las Vegas."
            sub="Commercial and janitorial services lead because most Downtown Las Vegas customers are businesses, not homeowners. Every service is available across the area."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {DTLV_SERVICES.map((s) => (
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
            heading="Why Downtown Las Vegas businesses and residents choose Final Touch."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                heading: 'Family-owned',
                body: `${SITE.owners} own and run Final Touch. When you call, you reach the owners or the team, not a call center or a national franchise operator.`,
              },
              {
                heading: 'Local to Clark County',
                body: `Final Touch is based in Southern Nevada and serves ${SITE.serviceArea.county} exclusively. The team serves Downtown Las Vegas as part of its core Las Vegas service area.`,
              },
              {
                heading: 'Commercial and residential both',
                body: 'Downtown Las Vegas has both office tenants and residential occupants in the same blocks. Final Touch serves both segments -- commercial cleaning programs for businesses and residential cleaning for loft and apartment residents.',
              },
              {
                heading: 'Scheduled programs available',
                body: 'Downtown businesses operating five or more days a week need a cleaning program, not a one-time visit. Final Touch provides scheduled janitorial and commercial cleaning programs for ongoing facility maintenance.',
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
            heading="Downtown Las Vegas and the greater Las Vegas area."
            sub="Final Touch serves Downtown Las Vegas as part of a broader Las Vegas and Clark County service area."
          />
          <div className="mt-8 space-y-3 text-base text-brand-black">
            <p>
              Downtown Las Vegas is the urban core of{' '}
              <Link
                href={PARENT_CITY.href}
                className="text-brand-blue font-semibold hover:underline"
              >
                {PARENT_CITY.name}, NV
              </Link>
              . Final Touch serves all of Las Vegas, including Downtown and the surrounding
              neighborhoods across the city.
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
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Summerlin
            </Link>
            <Link
              href="/locations/las-vegas/southern-highlands"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Southern Highlands
            </Link>
            <Link
              href="/locations/henderson/green-valley-ranch"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Green Valley Ranch
            </Link>
            <Link
              href="/services/commercial-office-cleaning/las-vegas"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Commercial Office Cleaning in Las Vegas, NV
            </Link>
            <Link
              href="/services/janitorial-services/las-vegas"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Janitorial Services in Las Vegas, NV
            </Link>
            <Link
              href="/services/retail-space-cleaning/las-vegas"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Retail Space Cleaning in Las Vegas, NV
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
            heading="Frequently asked questions about cleaning in Downtown Las Vegas."
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
        heading="Ready to book a cleaning in Downtown Las Vegas?"
        sub={`Free quotes for offices, retail spaces, and residences throughout Downtown Las Vegas. Call ${SITE.phone.display} or request a quote online.`}
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
