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
  title: 'Cleaning Services in Boulder City, NV | Final Touch',
  description:
    'Local cleaning services in Boulder City, NV. Deep cleaning, move-in, move-out, and commercial for homes and businesses. Call (702) 444-5077.',
  alternates: { canonical: '/locations/boulder-city' },
  openGraph: {
    title: 'Cleaning Services in Boulder City, NV | Final Touch Cleaning Company',
    description:
      'Scott & Nicole Maland serve Boulder City and Clark County, NV. Deep cleaning, move-in, move-out, commercial, and more. Free quotes.',
    type: 'website',
    url: `${SITE.url}/locations/boulder-city`,
  },
};

// Boulder City location page. All 7 services offered city-wide.
// Service card order reflects Boulder City demand profile:
// deep cleaning first (established owner-occupied homes, many older
// properties with character that benefit from periodic thorough resets),
// move-in second (historic town draws buyers relocating from the metro),
// move-out third (smaller rental market, tight community turnover),
// commercial fourth (small-business main street and tourism-adjacent
// retail), then post-construction, janitorial, retail space.
const BOULDER_CITY_SERVICES = [
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
    q: 'Does Final Touch Cleaning Company serve Boulder City, NV?',
    a: `Yes. Final Touch serves Boulder City as part of its ${SITE.serviceArea.county} service area. ${SITE.owners} own and run the company, and their team serves residential and commercial properties throughout Boulder City.`,
  },
  {
    q: 'What areas of Boulder City does Final Touch cover?',
    a: "Final Touch covers Boulder City citywide, including established residential neighborhoods, the historic downtown area, and commercial properties throughout the city. As a service-area business, the team comes to the customer's location.",
  },
  {
    q: 'What cleaning services does Final Touch offer in Boulder City?',
    a: 'Final Touch offers seven services in Boulder City: commercial and office cleaning, janitorial services, post-construction cleanup, move-in cleaning, move-out cleaning, deep cleaning, and retail space cleaning. Both residential and commercial properties are served.',
  },
  {
    q: 'Does Final Touch clean older and historic homes in Boulder City?',
    a: 'Yes. Boulder City has a stock of older, character-rich homes that benefit from a thorough deep clean that reaches the surfaces and areas routine maintenance skips. Final Touch brings a detail-focused approach to homes of all ages and styles throughout the city.',
  },
  {
    q: 'Can Final Touch handle cleaning for Boulder City small businesses and storefronts?',
    a: `Yes. Final Touch provides commercial cleaning and janitorial programs for small businesses, offices, and retail storefronts in Boulder City. Call ${SITE.phone.display} to discuss the scope and frequency that fits your business.`,
  },
  {
    q: 'How do I schedule cleaning in Boulder City?',
    a: `Call ${SITE.phone.display} or send a quote request through the website. Final Touch walks through the job before quoting so the estimate reflects the actual scope of work, not a templated rate.`,
  },
  {
    q: 'Is Final Touch a local cleaning company or does it serve Boulder City from Las Vegas?',
    a: `Final Touch is based in Southern Nevada and serves all of ${SITE.serviceArea.county}, including Boulder City. ${SITE.owners} own and operate it. The team travels to Boulder City as part of its regular service area, not as an exception.`,
  },
];

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  url: SITE.url,
  telephone: '+17024445077',
  email: SITE.email.display,
  founder: [
    { '@type': 'Person', name: 'Scott Maland' },
    { '@type': 'Person', name: 'Nicole Maland' },
  ],
  areaServed: [
    { '@type': 'City', name: 'Boulder City', sameAs: 'https://www.wikidata.org/wiki/Q793761' },
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

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: `${SITE.url}/locations` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Boulder City',
      item: `${SITE.url}/locations/boulder-city`,
    },
  ],
};

export default function BoulderCityPage() {
  return (
    <>
      <HeroSection
        eyebrow={`Serving ${SITE.serviceArea.county}, NV`}
        heading="Cleaning Services in Boulder City, NV"
        sub={`Final Touch provides residential and commercial cleaning throughout Boulder City, Nevada's only city without gambling and one of the valley's most distinct communities. From deep cleans in established homes to commercial programs for local businesses, ${SITE.owners} and the team serve Boulder City with the same standard as anywhere else in Clark County.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/heroes/locations/boulder-city-commercial-cleaning-hero.webp',
          alt: 'Commercial cleaning in Boulder City, NV by Final Touch.',
        }}
      />

      {/* Quick local answer */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Final Touch Cleaning Company serves Boulder City, NV with seven cleaning services:
            commercial and office cleaning, janitorial programs, post-construction cleanup, move-in
            cleaning, move-out cleaning, deep cleaning, and retail space cleaning. The company is
            family-owned and operated by Scott and Nicole Maland, based in Southern Nevada and
            serving Boulder City as part of its{' '}
            <Link href={ROUTES.locations} className="text-brand-blue font-semibold hover:underline">
              Clark County service area
            </Link>
            . To request a quote or ask about a specific job, call{' '}
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
            eyebrow="Boulder City cleaning needs"
            heading="What drives cleaning demand in Boulder City."
            sub="Boulder City's distinct character, established housing stock, small-business community, and proximity to Lake Mead create cleaning needs that differ from the broader metro."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Established homes with character
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Boulder City has a housing stock that includes many older, well-maintained homes
                with distinctive architectural character. These properties benefit from periodic{' '}
                <Link
                  href="/services/deep-cleaning"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  deep cleaning
                </Link>{' '}
                that addresses the areas and surfaces routine maintenance skips, preserving the
                quality of spaces that homeowners take pride in.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Buyers relocating from the metro
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Boulder City attracts buyers moving out of Las Vegas and Henderson who want a
                quieter, smaller-community setting. New arrivals buying into the market often
                want a thorough{' '}
                <Link
                  href="/services/move-in-cleaning"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  move-in clean
                </Link>{' '}
                before settling into a home that may have had previous occupants or sat vacant
                during the sale process.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Small-business and tourism-adjacent retail
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Boulder City&apos;s historic downtown and proximity to Lake Mead National Recreation
                Area support a small-business community of shops, restaurants, and service
                providers. These businesses need customer-ready interiors maintained on a
                consistent schedule. Final Touch provides{' '}
                <Link
                  href="/services/commercial-office-cleaning"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  commercial cleaning
                </Link>{' '}
                and retail programs suited to smaller-scale operations.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Rental turnover in a tight market
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Boulder City&apos;s rental market is smaller than the broader valley but still generates
                turnover demand. Landlords and property managers rely on professional{' '}
                <Link
                  href="/services/move-out-cleaning"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  move-out cleaning
                </Link>{' '}
                to return units to a deposit-ready standard between tenants, especially in a
                community where property condition carries reputational weight.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Desert dust and dry conditions
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Boulder City&apos;s location in the Mojave Desert means the same dust accumulation
                conditions that affect the broader Las Vegas Valley. Fine particulate settles on
                surfaces, inside fixtures, and along window frames continuously. Periodic deep
                cleans and regular maintenance programs address this in a practical, ongoing way.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Renovation and remodel projects
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Homeowners in Boulder City&apos;s established neighborhoods periodically renovate and
                update older properties. Remodel work leaves behind drywall dust, adhesive residue,
                and construction debris that require a thorough{' '}
                <Link
                  href="/services/post-construction-cleanup"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  post-construction cleanup
                </Link>{' '}
                before a refreshed space is actually livable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular services */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Services in Boulder City"
            heading="Cleaning services for Boulder City homes and businesses."
            sub="All seven services available across the city. Cards ordered by local demand."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {BOULDER_CITY_SERVICES.map((s) => (
              <ServiceCard
                key={s.slug}
                href={`${s.href}/boulder-city`}
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
            heading="A Clark County team that makes the trip to Boulder City."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Family-owned and owner-led
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Scott and Nicole Maland own and run Final Touch. It is not a franchise or a
                staffing platform. When you call, you reach the owners or the team directly.
                Boulder City is part of the regular service area, not a special-case exception.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Detail-focused for older properties
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Boulder City&apos;s housing stock includes older homes with character that require
                attention to detail: original fixtures, built-in cabinetry, and surfaces that
                need care, not speed. Final Touch focuses on the details that define whether a
                space is truly clean.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black">
                Free quote, real estimate
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Final Touch walks through the job before quoting. A phone call or brief on-site
                visit produces a real estimate based on the actual scope of work, not a templated
                rate. No pressure, no charge for the conversation.
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
            eyebrow="Boulder City neighborhoods"
            heading="Neighborhoods we serve in Boulder City."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            {/* TODO-BATCH-5: Boulder City neighborhood pages to be added when Batch 5 ships */}
          </div>
          <p className="mt-2 text-sm text-muted">
            Boulder City neighborhood pages are coming in the next build batch. In the meantime,{' '}
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
              className="inline-flex items-center rounded-full border border-border-subtle bg-brand-white px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Las Vegas
            </Link>
            <Link
              href="/locations/henderson"
              className="inline-flex items-center rounded-full border border-border-subtle bg-brand-white px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Henderson
            </Link>
            <Link
              href="/locations/north-las-vegas"
              className="inline-flex items-center rounded-full border border-border-subtle bg-brand-white px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              North Las Vegas
            </Link>
            <Link
              href="/locations/clark-county"
              className="inline-flex items-center rounded-full border border-border-subtle bg-brand-white px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Clark County
            </Link>
          </div>
        </div>
      </section>

      <FAQSection
        heading="Cleaning services in Boulder City: frequently asked questions"
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
        heading="Ready to bring the details to Boulder City?"
        sub={`Free quotes for cleaning across Boulder City and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
