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
  (n) => n.slug === 'green-valley-ranch',
)!;
const PARENT_CITY = LOCATIONS.find((l) => l.slug === NEIGHBORHOOD.parentCity)!;

export const metadata: Metadata = {
  title: 'Green Valley Ranch Cleaning Services | Henderson, NV',
  description:
    'Family-owned cleaning services in Green Valley Ranch, Henderson, NV. Residential and commercial cleaning, move-in, move-out, and more. Call (702) 444-5077.',
  alternates: { canonical: '/locations/henderson/green-valley-ranch' },
  openGraph: {
    title: 'Green Valley Ranch Cleaning Services | Henderson, NV | Final Touch Cleaning Company',
    description:
      'Scott & Nicole Maland serve Green Valley Ranch and all of Henderson, NV. Residential, commercial, move-in, move-out, and more. Free quotes across Clark County.',
    type: 'website',
    url: `${SITE.url}/locations/henderson/green-valley-ranch`,
  },
};

// Green Valley Ranch neighborhood page. Service card order reflects GVR demand:
// commercial and office cleaning first (Green Valley Parkway and Sunset Road
// corridors carry significant office, medical, and retail density -- the
// commercial presence here is heavier than any other Henderson neighborhood
// in this batch), move-out second (high rental volume in apartment complexes
// and condo communities throughout GVR), move-in third (steady buyer activity
// in both the residential and condo segments), deep cleaning fourth
// (established homeowners with desert-climate maintenance needs),
// then retail, janitorial, post-construction.
const GVR_SERVICES = [
  SERVICES.find((s) => s.slug === 'commercial-office-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-out-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-in-cleaning')!,
  SERVICES.find((s) => s.slug === 'deep-cleaning')!,
  SERVICES.find((s) => s.slug === 'retail-space-cleaning')!,
  SERVICES.find((s) => s.slug === 'janitorial-services')!,
  SERVICES.find((s) => s.slug === 'post-construction-cleanup')!,
];

const faq = [
  {
    q: 'Does Final Touch serve Green Valley Ranch, Henderson, NV?',
    a: `Yes. Final Touch serves Green Valley Ranch as part of its Henderson and ${SITE.serviceArea.county} service area. ${SITE.owners} own and run the company. Their team serves both the residential neighborhoods and the commercial corridors throughout Green Valley Ranch, including properties along Green Valley Parkway and the Sunset Road area.`,
  },
  {
    q: 'Does Final Touch clean offices and commercial spaces in Green Valley Ranch?',
    a: `Yes. Green Valley Ranch has one of Henderson's most active commercial corridors, with offices, medical suites, retail, and mixed-use spaces concentrated along Green Valley Parkway and Sunset Road. Final Touch provides commercial and office cleaning, janitorial services, and retail space cleaning for businesses in the area. Call ${SITE.phone.display} to discuss a schedule that works for your operation.`,
  },
  {
    q: 'What cleaning services does Final Touch offer in Green Valley Ranch?',
    a: `Final Touch offers commercial and office cleaning, move-out cleaning, move-in cleaning, deep cleaning, retail space cleaning, janitorial services, and post-construction cleanup throughout Green Valley Ranch. Both residential and commercial properties are served. Call ${SITE.phone.display} to get a free quote.`,
  },
  {
    q: 'Do you handle move-out cleans for apartments and condos in Green Valley Ranch?',
    a: `Yes. Green Valley Ranch includes a significant number of apartment complexes and condo communities alongside its single-family homes. Final Touch provides move-out cleaning for renters, landlords, and property managers throughout the area. A deposit-return standard clean is available -- call ${SITE.phone.display} or request a quote online.`,
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
  url: `${SITE.url}/locations/henderson/green-valley-ranch`,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  image: 'https://www.finaltouchcleaningteam.com/images/logo/final-touch-cleaning-company-logo.webp',
  sameAs: ['https://www.google.com/maps?cid=5303198646776788086'],
  areaServed: [
    { '@type': 'Place', name: 'Green Valley Ranch, Henderson, NV' },
    { '@type': 'Place', name: 'Henderson, NV' },
    { '@type': 'Place', name: 'Clark County, NV' },
  ],
  description:
    'Family-owned cleaning company serving Green Valley Ranch, Henderson, and Clark County, NV.',
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
  { label: 'Green Valley Ranch' },
];

export default function GreenValleyRanchPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero over a local Green Valley Ranch photo. */}
      <HeroSection
        eyebrow="Established Residential and Commercial Area"
        heading="Green Valley Ranch Cleaning Services | Henderson, NV"
        sub={`Final Touch serves homes and businesses throughout Green Valley Ranch, Henderson. Residential deep cleaning, move-in, move-out, and commercial office cleaning across one of Henderson's most active mixed-use communities. Call ${SITE.phone.display} or request a free quote.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/locations/green-valley-ranch-henderson-commercial-cleaning-hero-image.webp',
          alt: 'Professional cleaning service by Final Touch in Green Valley Ranch, Henderson, NV.',
        }}
      />

      {/* 2. Quick neighborhood answer */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
          <p className="text-lg text-brand-black leading-relaxed">
            Final Touch Cleaning Company serves Green Valley Ranch, Henderson as part of its{' '}
            {SITE.serviceArea.county} service area. {SITE.owners} own and run the business. Their
            team provides commercial and office cleaning, move-out cleaning, move-in cleaning, and
            deep cleaning for the full mix of residential and commercial properties throughout
            Green Valley Ranch. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline">
              {SITE.phone.display}
            </a>{' '}
            to get a free quote for your Green Valley Ranch home or business.
          </p>
        </div>
      </section>

      {/* 3. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="About Green Valley Ranch"
            heading="A large, established community with both residential depth and commercial density."
            sub="Green Valley Ranch spans single-family homes, apartment communities, and a busy commercial corridor -- each segment with its own cleaning needs."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                heading: "One of Henderson's largest established communities",
                body: 'Green Valley Ranch is a large, mature area of Henderson that developed primarily through the 1990s and 2000s. It sits roughly between Green Valley Parkway and Eastern Avenue, extending south toward the 215 beltway. The area includes a broad range of housing -- single-family neighborhoods, townhome communities, and multi-story apartment and condo complexes -- giving it more residential variety than most Henderson neighborhoods.',
              },
              {
                heading: 'Active commercial and office corridor',
                body: "Green Valley Parkway and the Sunset Road intersection anchor one of Henderson's busiest commercial zones. Medical offices, professional services, restaurants, and retail are concentrated in this corridor. Businesses here operate on regular schedules and need consistent commercial cleaning programs that keep their spaces presentable without disrupting daily operations.",
              },
              {
                heading: 'High rental density drives move-out demand',
                body: 'Green Valley Ranch has a higher density of rental housing than most of the surrounding Henderson neighborhoods, with apartment complexes and condo communities spread throughout the area. That density creates consistent demand for move-out cleaning as tenants turn over, and for move-in cleaning when new residents arrive. Landlords and property managers in the area rely on professional cleaning to maintain turnover speed and deposit-return standards.',
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
            heading="Popular cleaning services in Green Valley Ranch."
            sub="Every service is available to Green Valley Ranch homes and businesses. Ordered to reflect the area's mix of commercial activity and residential turnover."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {GVR_SERVICES.map((s) => (
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
            heading="Why Green Valley Ranch homes and businesses choose Final Touch."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                heading: 'Family-owned',
                body: `${SITE.owners} own and run Final Touch. When you call, you reach the owners or the team, not a call center or a franchise dispatcher.`,
              },
              {
                heading: 'Local to Clark County',
                body: `Final Touch is based in Southern Nevada and serves ${SITE.serviceArea.county} exclusively. The team knows the Green Valley Ranch area and focuses entirely on this region.`,
              },
              {
                heading: 'Detail-focused work',
                body: 'Whether it is a commercial office suite on Green Valley Parkway or a rental unit turning between tenants, Final Touch applies the same thorough standard to every job.',
              },
              {
                heading: 'Residential and commercial',
                body: 'Final Touch serves both residential properties and businesses in Green Valley Ranch. One team across every type of space -- from single-family homes to multi-tenant office buildings.',
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
            heading="Green Valley Ranch and the greater Henderson area."
            sub="Final Touch serves Green Valley Ranch as part of a broader Henderson and Clark County service area."
          />
          <div className="mt-8 space-y-3 text-base text-brand-black">
            <p>
              Green Valley Ranch is a community within{' '}
              <Link
                href={PARENT_CITY.href}
                className="text-brand-blue font-semibold hover:underline"
              >
                {PARENT_CITY.name}, NV
              </Link>
              . Final Touch serves all of Henderson, including Green Valley Ranch and neighboring
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
              href="/locations/las-vegas/summerlin"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Summerlin
            </Link>
            {/* TODO-BATCH-5: Add Seven Hills, MacDonald Highlands, Inspirada, Cadence,
                Lake Las Vegas pill links as those pages are built. */}
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
            heading="Frequently asked questions about cleaning in Green Valley Ranch."
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
        heading="Ready to book a cleaning in Green Valley Ranch?"
        sub={`Free quotes for homes and businesses throughout Green Valley Ranch, Henderson. Call ${SITE.phone.display} or request a quote online.`}
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
