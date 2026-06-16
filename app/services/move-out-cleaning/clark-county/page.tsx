import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceCard from '@/components/shared/ServiceCard';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES, SERVICES } from '@/lib/constants/routes';
import Breadcrumb from '@/components/shared/Breadcrumb';

export const metadata: Metadata = {
  title: 'Commercial Move-Out Cleaning in Clark County, NV',
  description:
    'Commercial move-out cleaning for property managers and rental turnovers across Clark County, NV. Final Touch serves all cities county-wide. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/move-out-cleaning/clark-county`,
  },
  openGraph: {
    title: 'Commercial Move-Out Cleaning in Clark County, NV | Final Touch',
    description:
      'Commercial move-out cleaning for property managers and rental turnovers across Clark County, NV. Final Touch serves all cities county-wide. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/move-out-cleaning/clark-county`,
  },
};

const faq = [
  {
    q: 'What does move-out cleaning include in Clark County?',
    a: 'Move-out cleaning covers inside cabinets and drawers, appliance interiors (oven, refrigerator, microwave, dishwasher), appliance exteriors and range hood, bathrooms including fixtures, tile, grout, and mirrors, baseboards, window sills, and ledges, light fixtures and ceiling fans, vents and air returns, all floor surfaces, interior windows, and closet interiors. The same scope applies regardless of which Clark County city the property is in. Landlord checklist accommodated when provided.',
  },
  {
    q: 'Does Final Touch serve all of Clark County for move-out cleaning?',
    a: `Yes. Final Touch serves move-out cleaning clients across all of ${SITE.serviceArea.county}: Las Vegas, Henderson, North Las Vegas, Boulder City, and unincorporated areas. The same professional standard and same scope applies in every city. Call ${SITE.phone.display} to schedule.`,
  },
  {
    q: 'Can Clark County property managers book move-out cleaning county-wide?',
    a: `Yes. Property management companies overseeing portfolios across multiple Clark County cities can work with Final Touch for all their locations: one cleaning partner, one consistent standard, across every city in the county. Contact ${SITE.phone.display} to discuss a recurring county-wide arrangement.`,
  },
  {
    q: 'Does move-out cleaning help get my deposit back in Clark County?',
    a: 'A professional move-out clean addresses the surfaces landlords inspect at lease end anywhere in Clark County. Final Touch cleans to the standard that supports deposit recovery. We cannot guarantee a return, but we clean to the standard that supports it.',
  },
  {
    q: 'Does Final Touch serve move-out cleaning across Clark County, including areas outside the main cities?',
    a: `Yes. Final Touch's move-out cleaning service area covers all of Clark County, including Las Vegas, Henderson, North Las Vegas, and Boulder City along with the communities around them. Call ${SITE.phone.display} to confirm coverage for your specific address.`,
  },
  {
    q: 'How much does move-out cleaning cost in Clark County?',
    a: `Cost depends on the size and condition of the unit. Contact Final Touch at ${SITE.phone.display} or request a free quote for a real estimate based on your property.`,
  },
];

const relatedServices = [
  'move-in-cleaning',
  'deep-cleaning',
  'post-construction-cleanup',
  'commercial-office-cleaning',
  'retail-space-cleaning',
  'janitorial-services',
] as const;

const relatedServiceCards = relatedServices
  .map((slug) => SERVICES.find((s) => s.slug === slug))
  .filter(Boolean) as typeof SERVICES[number][];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Commercial Move-Out Cleaning',
  serviceType: 'Commercial Move-Out Cleaning',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone.href.replace('tel:', ''),
    email: SITE.email.display,
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: `${SITE.serviceArea.county}, ${SITE.serviceArea.stateAbbr}`,
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  image: 'https://www.finaltouchcleaningteam.com/images/logo/final-touch-cleaning-company-logo.webp',
  sameAs: ['https://www.google.com/maps?cid=5303198646776788086'],
  areaServed: [
    { '@type': 'AdministrativeArea', name: `${SITE.serviceArea.county}, ${SITE.serviceArea.stateAbbr}` },
    ...SITE.serviceArea.cities.map((city) => ({
      '@type': 'City' as const,
      name: `${city}, ${SITE.serviceArea.stateAbbr}`,
    })),
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
  { label: 'Services', href: '/services' },
  { label: 'Move-Out Cleaning', href: '/services/move-out-cleaning' },
  { label: 'Clark County' },
];

export default function MoveOutCleaningClarkCountyPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Move-Out Cleaning · Clark County, NV"
        heading="Commercial Move-Out Cleaning in Clark County, NV"
        sub={`Clark County has a large and varied rental market: high-density apartments in North Las Vegas, master-planned community rentals in Henderson, urban rentals in Las Vegas, and established homes in Boulder City. Final Touch serves move-out cleaning clients across every part of ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Move-out cleaning in Clark County is a professional end-of-lease clean that addresses
            every surface a landlord inspects: inside appliances, bathrooms, baseboards, and floors.{' '}
            <Link href="/services/move-out-cleaning" className="text-brand-blue font-semibold hover:underline">
              Final Touch move-out cleaning
            </Link>{' '}
            serves Clark County renters preparing for deposit recovery, property managers handling
            county-wide portfolios, and homeowners across the county preparing their properties
            for sale. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to schedule anywhere in the county.
          </p>
        </div>
      </section>

      {/* 3. Who hires */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires move-out cleaning in Clark County"
            heading="Renters, property managers, landlords, and homeowners across the Las Vegas Valley."
            sub="Clark County's rental market spans every housing type and city character in the valley. And Final Touch serves them all."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Renters across all county cities',
                body: 'Clark County has a large renter population spanning every city: from high-density North Las Vegas apartments to Henderson master-planned community rentals to urban Las Vegas units. All share the same move-out motivation: deposit recovery and a clean handoff.',
              },
              {
                title: 'County-spanning property managers',
                body: 'Property management companies in Clark County often manage portfolios across multiple cities. Final Touch provides a consistent move-out cleaning standard across the entire portfolio, one partner for every city.',
              },
              {
                title: 'Multi-city landlords',
                body: 'Landlords with rental properties in more than one Clark County city work with Final Touch for all their locations. Same standard, same process, whether the property is in Henderson, Las Vegas, or North Las Vegas.',
              },
              {
                title: 'Homeowners selling across the county',
                body: 'The Clark County residential resale market creates pre-listing and pre-handoff cleaning demand across the valley. Sellers in any city benefit from a professional clean before listing or transferring the property.',
              },
            ].map((item) => (
              <li key={item.title} className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
                <h3 className="font-display text-lg font-semibold text-brand-black">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. What's included */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Scope"
            heading="What move-out cleaning covers."
            sub="The same thorough scope across every Clark County city."
          />
          <ul className="mt-8 space-y-3">
            {[
              'Inside cabinets, drawers, and pantry shelving',
              'Appliance interiors: oven, refrigerator, microwave, dishwasher',
              'Appliance exteriors and range hood',
              'Bathrooms: fixtures, tile, grout, mirrors, toilet',
              'Baseboards, window sills, and ledges',
              'Light fixtures and ceiling fans',
              'Vents and air returns',
              'All floor surfaces: vacuuming and mopping',
              'Interior windows and glass',
              'Closet interiors',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Scope confirmed during booking. If your landlord has a specific checklist, share it
            when you schedule, same process regardless of which city in Clark County the
            property is in.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Move-out cleaning across Clark County"
            heading="The county's rental market diversity, and one consistent standard."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'The most varied rental market in Nevada',
                body: "Clark County's rental market spans every housing type and urban character in the state. North Las Vegas has one of the highest renter-density profiles in the valley. Henderson has rental properties embedded in master-planned communities with elevated landlord expectations. Las Vegas has a large urban rental stock with high turnover. Boulder City has a small, tight rental community where reputation matters. Final Touch serves all of them.",
              },
              {
                heading: 'County-spanning property management',
                body: 'Many Clark County property management companies manage portfolios that cross city boundaries: properties in Henderson and Las Vegas, or North Las Vegas and Henderson, or across all four cities. Final Touch provides county-wide move-out cleaning coverage so PM companies have one reliable partner for their entire portfolio rather than managing multiple cleaning vendors across cities.',
              },
              {
                heading: 'Consistent deposit-ready standard county-wide',
                body: "Whether a landlord is in Henderson's established communities or North Las Vegas's rental corridors, the baseline for what a professional move-out clean should deliver is the same: inside appliances cleaned, bathrooms addressed, baseboards and surfaces done, floors finished. Final Touch delivers that standard regardless of which Clark County city the property is in.",
              },
            ].map(({ heading, body }) => (
              <div key={heading} className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
                <h3 className="font-display text-lg font-semibold text-brand-black">{heading}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Related services */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="More services in Clark County"
            heading="Other cleaning services available across Clark County, NV."
            sub="Final Touch provides seven cleaning services county-wide."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {relatedServiceCards.map((service) => (
              <li key={service.slug} className="h-full">
                <ServiceCard
                  href={`/services/${service.slug}/clark-county`}
                  name={service.name}
                  description={service.shortDescription}
                  image={service.image}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Move-out cleaning by city */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brand-black tracking-tight">
            Move-out cleaning by city
          </h2>
          <p className="mt-3 text-base text-muted">
            Each city in Clark County has its own rental market character. Find yours below.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              { label: 'Move-Out Cleaning in Las Vegas, NV', href: '/services/move-out-cleaning/las-vegas' },
              { label: 'Move-Out Cleaning in Henderson, NV', href: '/services/move-out-cleaning/henderson' },
              { label: 'Move-Out Cleaning in North Las Vegas, NV', href: '/services/move-out-cleaning/north-las-vegas' },
              { label: 'Move-Out Cleaning in Boulder City, NV', href: '/services/move-out-cleaning/boulder-city' },
            ].map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-flex items-center rounded-full border border-border-subtle bg-brand-white min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-blue hover:border-brand-blue/40 hover:bg-soft-blue transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. FAQ */}
      <FAQSection
        items={faq}
        heading="Move-out cleaning in Clark County: common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/move-out-cleaning" className="font-semibold text-brand-blue hover:underline">
            ← Move-out cleaning services
          </Link>
          <Link href="/locations/clark-county" className="font-semibold text-brand-blue hover:underline">
            ← Cleaning services in Clark County
          </Link>
          <Link href={ROUTES.freeQuote} className="font-semibold text-brand-blue hover:underline">
            Request a free quote →
          </Link>
        </div>
      </div>

      {/* 9. Final CTA */}
      <CTASection
        heading="Need move-out cleaning anywhere in Clark County?"
        sub={`Free quotes for move-out cleaning across all of ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
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
