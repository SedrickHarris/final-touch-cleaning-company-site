import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import HeroSection from '@/components/shared/HeroSection';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceCard from '@/components/shared/ServiceCard';
import { CTAS, SITE } from '@/lib/constants/site';
import { NEIGHBORHOODS, ROUTES, SERVICES } from '@/lib/constants/routes';
import Breadcrumb from '@/components/shared/Breadcrumb';

export const metadata: Metadata = {
  title: 'Cleaning Services in North Las Vegas, NV',
  description:
    'Cleaning services in North Las Vegas, NV. Post-construction, commercial, move-out, and more for homes and businesses. Call (702) 444-5077.',
  alternates: { canonical: '/locations/north-las-vegas' },
  openGraph: {
    title: 'Cleaning Services in North Las Vegas, NV | Final Touch Cleaning Company',
    description:
      'Scott & Nicole Maland serve North Las Vegas and Clark County, NV. Post-construction, commercial, move-out, deep cleaning, and more. Free quotes.',
    type: 'website',
    url: `${SITE.url}/locations/north-las-vegas`,
  },
};

// North Las Vegas location page. All 7 services offered city-wide.
// Service card order reflects North Las Vegas demand profile:
// post-construction first (one of the fastest-growing areas in the metro,
// active residential and industrial build pipeline), commercial second
// (large industrial and warehouse corridor along the I-15 / Lamb Blvd
// corridors), move-out third (high renter density, working-class rental
// market), then deep cleaning, move-in, janitorial, retail.
const NORTH_LAS_VEGAS_SERVICES = [
  SERVICES.find((s) => s.slug === 'post-construction-cleanup')!,
  SERVICES.find((s) => s.slug === 'commercial-office-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-out-cleaning')!,
  SERVICES.find((s) => s.slug === 'deep-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-in-cleaning')!,
  SERVICES.find((s) => s.slug === 'janitorial-services')!,
  SERVICES.find((s) => s.slug === 'retail-space-cleaning')!,
];

// Built North Las Vegas neighborhood pages, derived from the NEIGHBORHOODS
// constant by filtering on parentCity. None are built yet, so this is currently
// empty and the chip row is hidden; it populates automatically once North Las
// Vegas neighborhood pages (e.g. nellis-area, aliante) ship into the constant.
const NORTH_LAS_VEGAS_NEIGHBORHOODS = NEIGHBORHOODS.flatMap((g) => g.neighborhoods).filter(
  (n) => n.parentCity === 'north-las-vegas' && n.built,
);

const faq = [
  {
    q: 'Does Final Touch Cleaning Company serve North Las Vegas, NV?',
    a: `Yes. Final Touch serves North Las Vegas as part of its ${SITE.serviceArea.county} service area. ${SITE.owners} own and run the company, and their team serves residential and commercial properties throughout the city.`,
  },
  {
    q: 'What areas of North Las Vegas does Final Touch cover?',
    a: 'Final Touch covers North Las Vegas citywide, including established residential neighborhoods, newer growth areas, and the commercial and industrial corridors along the major arterials. As a service-area business, the team comes to the customer\'s location across the city.',
  },
  {
    q: 'What cleaning services does Final Touch offer in North Las Vegas?',
    a: 'Final Touch offers seven services in North Las Vegas: commercial and office cleaning, janitorial services, post-construction cleanup, move-in cleaning, move-out cleaning, deep cleaning, and retail space cleaning. Both residential and commercial properties are served.',
  },
  {
    q: 'Does Final Touch provide post-construction cleaning for North Las Vegas new builds?',
    a: 'Yes. Post-construction cleanup is one of the most in-demand services in North Las Vegas, where residential and commercial construction activity has been significant. The service covers drywall dust, construction debris, adhesive residue, and surface detail work to prepare a finished space for occupancy.',
  },
  {
    q: 'Does Final Touch clean warehouses and industrial facilities in North Las Vegas?',
    a: `North Las Vegas has a large industrial and warehouse corridor. Final Touch provides commercial cleaning and janitorial programs for office spaces, facility common areas, and commercial interiors in the area. For specific industrial or warehouse scope questions, call ${SITE.phone.display} to discuss what the job requires.`,
  },
  {
    q: 'How do I schedule cleaning in North Las Vegas?',
    a: `Call ${SITE.phone.display} or send a quote request through the website. Final Touch walks through the job before quoting so the estimate reflects the actual scope of work, not a templated rate.`,
  },
  {
    q: 'Is Final Touch a local North Las Vegas cleaning company?',
    a: `Final Touch is a locally owned, family-run cleaning company based in Southern Nevada, serving North Las Vegas and all of ${SITE.serviceArea.county}. ${SITE.owners} own and operate it. It is not a franchise or a staffing platform.`,
  },
];

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  url: SITE.url,
  telephone: '+17024445077',
  email: SITE.email.display,
  image: 'https://www.finaltouchcleaningteam.com/images/logo/final-touch-cleaning-company-logo.webp',
  sameAs: ['https://www.google.com/maps?cid=5303198646776788086'],
  founder: [
    { '@type': 'Person', name: 'Scott Maland' },
    { '@type': 'Person', name: 'Nicole Maland' },
  ],
  areaServed: [
    { '@type': 'City', name: 'North Las Vegas', sameAs: 'https://www.wikidata.org/wiki/Q975168' },
    { '@type': 'AdministrativeArea', name: 'Clark County, Nevada' },
  ],
  serviceType: [
    'Residential Cleaning',
    'Commercial Cleaning',
    'Post-Construction Cleanup',
    'Move-In Cleaning',
    'Move-Out Cleaning',
    'Deep Cleaning',
    'Retail Space Cleaning',
  ],
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
  { label: 'North Las Vegas' },
];

export default function NorthLasVegasPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <HeroSection
        eyebrow={`Serving ${SITE.serviceArea.county}, NV`}
        heading="Cleaning Services in North Las Vegas, NV"
        sub={`Final Touch provides residential and commercial cleaning across North Las Vegas, one of the fastest-growing cities in the Las Vegas Valley. From post-construction detail work on new builds to commercial programs along the industrial corridors, ${SITE.owners} and the team serve North Las Vegas properties with the same standard every time.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/heroes/locations/north-las-vegas-commercial-cleaning-hero.webp',
          alt: 'Commercial cleaning in North Las Vegas, NV by Final Touch.',
        }}
      />

      {/* Quick local answer */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Final Touch Cleaning Company serves North Las Vegas, NV with seven cleaning services:
            commercial and office cleaning, janitorial programs, post-construction cleanup, move-in
            cleaning, move-out cleaning, deep cleaning, and retail space cleaning. The company is
            family-owned and operated by Scott and Nicole Maland, based in Southern Nevada and
            serving North Las Vegas as part of its{' '}
            <Link href={ROUTES.locations} className="text-brand-blue font-semibold hover:underline">
              Clark County service area
            </Link>
            . To request a quote or discuss a specific job, call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>
            .
          </p>
        </div>
      </section>

      {/* Local cleaning needs */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="North Las Vegas cleaning needs"
            heading="What drives cleaning demand in North Las Vegas."
            sub="Rapid residential growth, a large industrial and commercial corridor, and a dense rental market create consistent demand for cleaning services throughout the city."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Active residential construction
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                North Las Vegas has been one of the most active residential growth areas in the Las
                Vegas Valley. New subdivisions and infill development create ongoing demand for{' '}
                <Link
                  href="/services/post-construction-cleanup"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  post-construction cleanup
                </Link>
                : clearing drywall dust, construction debris, adhesive residue, and window film so
                a finished home is genuinely ready for occupancy.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Industrial and warehouse corridor
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                North Las Vegas hosts a large industrial and logistics corridor along its major
                arterials. This sector generates consistent demand for{' '}
                <Link
                  href="/services/commercial-office-cleaning"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  commercial office cleaning
                </Link>{' '}
                and janitorial programs for facility offices, break rooms, and common areas attached
                to warehouse and distribution operations.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                High-density rental market
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                North Las Vegas has one of the higher renter-density profiles in the valley. Rental
                turnover creates steady demand for{' '}
                <Link
                  href="/services/move-out-cleaning"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  move-out cleaning
                </Link>{' '}
                from renters preparing for a deposit return, and for move-in cleans from landlords
                resetting units between tenants.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Established residential neighborhoods
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Alongside newer growth areas, North Las Vegas includes established residential
                neighborhoods where homeowners rely on periodic{' '}
                <Link
                  href="/services/deep-cleaning"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  deep cleaning
                </Link>{' '}
                to reset spaces that accumulate desert dust and everyday wear between routine
                maintenance visits.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Commercial and retail storefronts
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                North Las Vegas commercial corridors include a mix of retail, auto services,
                restaurants, and professional services. Retail and commercial operators need
                customer-ready spaces maintained on a regular schedule, from sales floors to
                back-of-house areas.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Desert climate dust load
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Like the rest of the Las Vegas Valley, North Las Vegas sits in the Mojave Desert.
                Fine particulate dust accumulates quickly on surfaces, inside HVAC returns, and
                along window frames. Regular maintenance programs and periodic deep cleans are a
                practical response to local air quality conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular services */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Services in North Las Vegas"
            heading="Cleaning services for North Las Vegas homes and businesses."
            sub="All seven services available across the city. Cards ordered by local demand."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {NORTH_LAS_VEGAS_SERVICES.map((s) => (
              <ServiceCard
                key={s.slug}
                href={`${s.href}/north-las-vegas`}
                name={s.name}
                description={s.shortDescription}
                image={s.image}
              />
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Not sure which service fits your job?{' '}
            <Link href={ROUTES.services} className="font-semibold text-brand-blue hover:underline">
              See all cleaning services
            </Link>{' '}
            or call {SITE.phone.display} for a quick walkthrough.
          </p>
        </div>
      </section>

      {/* Why Final Touch */}
      <section className="bg-soft-blue">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why Final Touch"
            heading="A local team that knows the North Las Vegas market."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Family-owned and owner-led
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Scott and Nicole Maland own and run Final Touch. It is not a franchise or a staffing
                platform. When you call, you reach the owners or the team directly, not a call
                center. That accountability applies to every job in North Las Vegas.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Built for growth-area demand
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                North Las Vegas&apos;s active construction and commercial growth means jobs that require
                genuine scope expertise: post-construction detail work, commercial programs for
                facility offices, and residential cleans in newly built neighborhoods. Final Touch
                brings a detail-focused standard to each of those job types.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Free quote, real estimate
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Final Touch walks through the job before quoting. A phone call or brief on-site
                visit produces a real estimate based on the actual scope, not a templated rate.
                No pressure, no charge for the walkthrough.
              </p>
            </div>
          </div>
          <p className="mt-8 text-sm flex flex-wrap gap-x-5 gap-y-2">
            <Link href={ROUTES.about} className="font-semibold text-brand-blue hover:underline">
              Learn about the team →
            </Link>
            <Link href={ROUTES.freeQuote} className="font-semibold text-brand-blue hover:underline">
              Request a free quote →
            </Link>
          </p>
        </div>
      </section>

      {/* Nearby neighborhoods */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <SectionHeader
            eyebrow="North Las Vegas neighborhoods"
            heading="Neighborhoods we serve in North Las Vegas."
          />
          {NORTH_LAS_VEGAS_NEIGHBORHOODS.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {NORTH_LAS_VEGAS_NEIGHBORHOODS.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="inline-flex items-center rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
                >
                  {n.name}
                </Link>
              ))}
            </div>
          )}
          <p className="mt-5 text-sm text-muted">
            More North Las Vegas neighborhood pages are coming in the next build batch. In the
            meantime,{' '}
            <a
              href={SITE.phone.href}
              className="font-semibold text-brand-blue hover:underline tabular-nums"
            >
              call {SITE.phone.display}
            </a>{' '}
            to confirm coverage for your specific area.
          </p>
        </div>
      </section>

      {/* Related cities */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-4">
            Also serving nearby
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/locations/las-vegas"
              className="inline-flex items-center rounded-full border border-border-subtle bg-brand-white min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Las Vegas
            </Link>
            <Link
              href="/locations/henderson"
              className="inline-flex items-center rounded-full border border-border-subtle bg-brand-white min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Henderson
            </Link>
            <Link
              href="/locations/boulder-city"
              className="inline-flex items-center rounded-full border border-border-subtle bg-brand-white min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Boulder City
            </Link>
            <Link
              href="/locations/clark-county"
              className="inline-flex items-center rounded-full border border-border-subtle bg-brand-white min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Clark County
            </Link>
          </div>
        </div>
      </section>

      <FAQSection
        heading="Cleaning services in North Las Vegas: frequently asked questions"
        items={faq}
        defaultOpenFirst
      />

      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-sm text-muted">
            More questions?{' '}
            <Link href={ROUTES.faq} className="font-semibold text-brand-blue hover:underline">
              Read all frequently asked questions →
            </Link>
          </p>
        </div>
      </div>

      <CTASection
        heading="Ready to bring the details to North Las Vegas?"
        sub={`Free quotes for cleaning across North Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.estimate, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

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
