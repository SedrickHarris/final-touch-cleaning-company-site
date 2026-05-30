import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import HeroSection from '@/components/shared/HeroSection';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceCard from '@/components/shared/ServiceCard';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES, SERVICES, LOCATIONS } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'Cleaning Services in Clark County, NV | Final Touch',
  description:
    'Family-owned cleaning services across Clark County, NV. Las Vegas, Henderson, North Las Vegas, Boulder City, and beyond. Call (702) 444-5077.',
  alternates: { canonical: '/locations/clark-county' },
  openGraph: {
    title: 'Cleaning Services in Clark County, NV | Final Touch Cleaning Company',
    description:
      'Scott & Nicole Maland serve all of Clark County, NV. Residential and commercial cleaning across Las Vegas, Henderson, North Las Vegas, and Boulder City. Free quotes.',
    type: 'website',
    url: `${SITE.url}/locations/clark-county`,
  },
};

// Clark County location page. County-wide hub page — links to all 4 city
// pages as children. No nearby-neighborhoods section (county hub replaces
// that with the city grid). Service card order reflects county-wide demand:
// balanced across residential and commercial, no single-city bias.
const CLARK_COUNTY_SERVICES = [
  SERVICES.find((s) => s.slug === 'commercial-office-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-out-cleaning')!,
  SERVICES.find((s) => s.slug === 'post-construction-cleanup')!,
  SERVICES.find((s) => s.slug === 'deep-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-in-cleaning')!,
  SERVICES.find((s) => s.slug === 'janitorial-services')!,
  SERVICES.find((s) => s.slug === 'retail-space-cleaning')!,
];

// City child pages — sourced from LOCATIONS constant, excluding clark-county itself.
const CITY_PAGES = LOCATIONS.filter((l) => l.slug !== 'clark-county');

const faq = [
  {
    q: 'Does Final Touch serve all of Clark County, NV?',
    a: `Yes. Final Touch's service area is ${SITE.serviceArea.county}, Nevada. The team serves Las Vegas, Henderson, North Las Vegas, and Boulder City, as well as unincorporated areas of the county. ${SITE.owners} own and run the company out of Southern Nevada.`,
  },
  {
    q: 'What cities in Clark County does Final Touch cover?',
    a: `Final Touch currently serves Las Vegas, Henderson, North Las Vegas, and Boulder City. Together these cities cover the primary residential and commercial areas of ${SITE.serviceArea.county}. Call ${SITE.phone.display} to confirm coverage for a specific address or unincorporated area.`,
  },
  {
    q: 'What cleaning services does Final Touch offer across Clark County?',
    a: 'Final Touch offers seven services county-wide: commercial and office cleaning, janitorial services, post-construction cleanup, move-in cleaning, move-out cleaning, deep cleaning, and retail space cleaning. Both residential and commercial properties are served in every city.',
  },
  {
    q: 'Is Final Touch based in Clark County?',
    a: `Yes. Final Touch is based in Southern Nevada and serves ${SITE.serviceArea.county} as its primary market. It is a locally owned, family-run company operated by ${SITE.owners}, not a franchise or a national chain with a local branch.`,
  },
  {
    q: 'Can Final Touch handle large commercial cleaning contracts across multiple Clark County locations?',
    a: `Final Touch provides commercial cleaning and janitorial programs for businesses operating across ${SITE.serviceArea.county}. For multi-location or recurring commercial scope, call ${SITE.phone.display} to walk through requirements and get a quote that reflects the actual program.`,
  },
  {
    q: 'How does the quote process work for Clark County jobs?',
    a: `Call ${SITE.phone.display} or send a quote request through the website. Final Touch walks through the job before quoting, either by phone or a brief on-site visit if the scope calls for it. The estimate reflects the actual job, not a templated rate.`,
  },
  {
    q: 'Does Final Touch serve unincorporated Clark County areas?',
    a: `Final Touch's service area covers ${SITE.serviceArea.county}, which includes both the incorporated cities and unincorporated areas of the county. Call ${SITE.phone.display} to confirm service availability for a specific location outside the named cities.`,
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
    { '@type': 'AdministrativeArea', name: 'Clark County, Nevada' },
    { '@type': 'City', name: 'Las Vegas' },
    { '@type': 'City', name: 'Henderson' },
    { '@type': 'City', name: 'North Las Vegas' },
    { '@type': 'City', name: 'Boulder City' },
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

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: `${SITE.url}/locations` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Clark County',
      item: `${SITE.url}/locations/clark-county`,
    },
  ],
};

export default function ClarkCountyPage() {
  return (
    <>
      <HeroSection
        eyebrow="County-wide service area"
        heading="Cleaning Services in Clark County, NV"
        sub={`Final Touch provides residential and commercial cleaning across all of ${SITE.serviceArea.county}, Nevada. Las Vegas, Henderson, North Las Vegas, Boulder City, and the unincorporated areas in between. ${SITE.owners} own and run the company locally, serving every part of the county with the same standard.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/heroes/locations/clark-county-commercial-cleaning-service-area-hero.webp',
          alt: 'County-wide cleaning across Clark County, NV by Final Touch.',
        }}
      />

      {/* Quick local answer */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Final Touch Cleaning Company serves{' '}
            <Link href={ROUTES.locations} className="text-brand-blue font-semibold hover:underline">
              Clark County, Nevada
            </Link>{' '}
            with seven cleaning services: commercial and office cleaning, janitorial programs,
            post-construction cleanup, move-in cleaning, move-out cleaning, deep cleaning, and
            retail space cleaning. The company is family-owned and operated by Scott and Nicole
            Maland, based in Southern Nevada. Every city in the county is part of the regular
            service area. To request a quote for any Clark County location, call{' '}
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

      {/* Cities we serve */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Cities in our service area"
            heading="Every city in Clark County we serve."
            sub="Explore cleaning services by city. Each page covers local demand, popular services, and neighborhood context specific to that area."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {CITY_PAGES.map((city) => (
              <Link
                key={city.slug}
                href={city.href}
                className="group block rounded-[14px] border border-border-subtle bg-brand-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(26,26,26,0.08)] hover:border-brand-blue/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
              >
                <h3 className="font-display text-xl font-semibold text-brand-black group-hover:text-brand-blue transition-colors">
                  {city.name}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{city.shortDescription}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                  View {city.name}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* County-wide cleaning needs */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Clark County cleaning needs"
            heading="What drives cleaning demand across the county."
            sub="Clark County is one of the fastest-growing regions in the United States. That growth produces consistent, varied cleaning demand across residential and commercial sectors."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[14px] border border-border-subtle bg-light-gray p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Rapid population and residential growth
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Clark County has sustained significant population growth for years, driving
                consistent residential construction across Las Vegas, Henderson, North Las Vegas,
                and beyond. New homes require{' '}
                <Link
                  href="/services/post-construction-cleanup"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  post-construction cleanup
                </Link>{' '}
                before occupancy and{' '}
                <Link
                  href="/services/move-in-cleaning"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  move-in cleaning
                </Link>{' '}
                for buyers settling in.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-light-gray p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Large and diverse commercial sector
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The county&apos;s commercial base spans professional services, healthcare, retail,
                hospitality-adjacent businesses, industrial operations, and small businesses
                across every city. Each segment generates demand for{' '}
                <Link
                  href="/services/commercial-office-cleaning"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  commercial cleaning
                </Link>{' '}
                and janitorial programs calibrated to the specific type of facility.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-light-gray p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Active rental and housing turnover market
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Clark County has a large renter population spread across its cities, with
                consistent lease-cycle turnover generating demand for{' '}
                <Link
                  href="/services/move-out-cleaning"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  move-out cleaning
                </Link>{' '}
                from departing tenants and move-in cleans from landlords resetting units.
                Property managers across the county rely on this service regularly.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-light-gray p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Mojave Desert climate conditions
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                The entire county sits in the Mojave Desert. Fine-particle dust accumulates on
                indoor surfaces, inside HVAC systems, and along window and door frames
                continuously. Periodic{' '}
                <Link
                  href="/services/deep-cleaning"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  deep cleaning
                </Link>{' '}
                and regular maintenance programs are a practical response to the local
                environment across every city and neighborhood in the county.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-light-gray p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Retail and storefront operations
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                From the major retail corridors in Las Vegas and Henderson to the smaller
                storefronts in Boulder City&apos;s historic downtown, retail operators across
                Clark County need customer-ready interiors maintained on a consistent schedule.
                Final Touch provides{' '}
                <Link
                  href="/services/retail-space-cleaning"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  retail space cleaning
                </Link>{' '}
                suited to operations of all sizes.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-light-gray p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Varied property types across the county
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Clark County encompasses master-planned suburban communities, dense urban
                residential, older established neighborhoods, hillside luxury estates, industrial
                corridors, and small-town main streets. Final Touch&apos;s service scope covers the
                full range, adjusting to each property type with the same detail-focused
                standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular services county-wide */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Services across Clark County"
            heading="Cleaning services available county-wide."
            sub="All seven services offered in every city. The right service depends on the job, not the zip code."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {CLARK_COUNTY_SERVICES.map((s) => (
              <ServiceCard
                key={s.slug}
                href={`${s.href}/clark-county`}
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
            heading="One Clark County team. One standard across the county."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Family-owned and locally based
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Scott and Nicole Maland own and run Final Touch out of Southern Nevada. The
                entire Clark County service area is their home market. It is not a franchise,
                not a national chain with a local branch, and not a staffing platform. When you
                call, you reach the owners or the team directly.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Consistent standard across every city
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Whether the job is in a Las Vegas commercial office, a Henderson master-planned
                home, a North Las Vegas new build, or a Boulder City storefront, the approach
                does not change. Final Touch brings the same detail-focused standard to every
                property type across the county.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Free quote, real estimate
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Final Touch walks through every job before quoting. A phone call or brief
                on-site visit produces a real estimate based on the actual scope, not a
                templated rate. No pressure and no charge for the walkthrough, regardless
                of where in Clark County the job is located.
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

      <FAQSection
        heading="Cleaning services across Clark County: frequently asked questions"
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
        heading="Ready to bring the details anywhere in Clark County?"
        sub={`Free quotes for cleaning across all of ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
