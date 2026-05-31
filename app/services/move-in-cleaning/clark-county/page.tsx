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
  title: 'Move-In Cleaning in Clark County, NV',
  description:
    'Move-in cleaning across Clark County, NV. Final Touch serves new builds, rental turnovers, and established homes in every city. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/move-in-cleaning/clark-county`,
  },
  openGraph: {
    title: 'Move-In Cleaning in Clark County, NV | Final Touch',
    description:
      'Move-in cleaning across Clark County, NV. Final Touch serves new builds, rental turnovers, and established homes in every city. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/move-in-cleaning/clark-county`,
  },
};

const faq = [
  {
    q: 'What does move-in cleaning include in Clark County?',
    a: 'Move-in cleaning covers inside cabinets, drawers, and shelving; appliance interiors (oven, refrigerator, microwave, dishwasher); bathrooms including fixtures, tile, grout, and mirrors; baseboards, window sills, and ledges; light fixtures and ceiling fans; vents and air returns; all floor surfaces; kitchen countertops and backsplash; interior windows; and closet interiors. The same scope applies county-wide. Confirmed before the clean begins.',
  },
  {
    q: 'Does Final Touch serve all Clark County cities for move-in cleaning?',
    a: `Yes. Final Touch serves move-in cleaning clients across all of ${SITE.serviceArea.county}: Las Vegas, Henderson, North Las Vegas, Boulder City, and unincorporated areas. One team, one standard, every city in the county. Call ${SITE.phone.display} to schedule.`,
  },
  {
    q: 'Does Final Touch handle move-in cleaning for new construction across Clark County?',
    a: 'Yes. Clark County is one of the fastest-growing regions in the United States, with active new residential construction across Henderson (Cadence, Inspirada), North Las Vegas (new subdivisions), and Las Vegas. Builder handoffs across all these communities leave construction residue that a move-in clean addresses. Final Touch serves new-construction move-in cleaning county-wide, the same scope for builder residue regardless of which city the new home is in.',
  },
  {
    q: 'Can property managers book move-in cleaning across multiple Clark County cities?',
    a: `Yes. Property management companies with portfolios across Clark County can work with Final Touch for all their move-in cleaning needs. One partner for every city, consistent standard, consistent process. Call ${SITE.phone.display} to discuss a county-wide arrangement.`,
  },
  {
    q: 'How much does move-in cleaning cost in Clark County?',
    a: `Cost depends on the size and condition of the space. Contact Final Touch at ${SITE.phone.display} or request a free quote. No rate is given without reviewing the property. The same process applies in every county city.`,
  },
];

const relatedServices = [
  'move-out-cleaning',
  'post-construction-cleanup',
  'deep-cleaning',
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
  name: 'Move-In Cleaning',
  serviceType: 'Move-In Cleaning',
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
  { label: 'Move-In Cleaning', href: '/services/move-in-cleaning' },
  { label: 'Clark County' },
];

export default function MoveInCleaningClarkCountyPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Move-In Cleaning · Clark County, NV"
        heading="Move-In Cleaning in Clark County, NV"
        sub={`Clark County combines active new residential construction across Henderson and North Las Vegas with a large rental market and a steady stream of buyers relocating within and to the valley. Final Touch provides professional move-in cleaning for every property type across all of ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Move-in cleaning in Clark County is a professional clean before move-in day,
            addressing construction residue in new builds, prior-occupant buildup in rental units
            and resale homes, and detail surfaces throughout.{' '}
            <Link href="/services/move-in-cleaning" className="text-brand-blue font-semibold hover:underline">
              Final Touch move-in cleaning
            </Link>{' '}
            serves buyers, renters, and property managers across every city in the county. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to schedule anywhere in Clark County.
          </p>
        </div>
      </section>

      {/* 3. Who hires */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires move-in cleaning in Clark County"
            heading="New-build buyers, renters, property managers, and relocating homebuyers across the valley."
            sub="Clark County's growth means move-in cleaning demand comes from every direction simultaneously: new construction, rental turnover, and resale buyers."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'New-build buyers across county growth areas',
                body: 'Clark County is one of the fastest-growing regions in the US. Active new residential construction in Henderson (Cadence, Inspirada), North Las Vegas, and Las Vegas creates consistent demand for move-in cleaning after builder handoff, the same construction residue issue in every growing part of the county.',
              },
              {
                title: 'Renters moving into county-wide rental properties',
                body: "Clark County's large renter population moves between cities and neighborhoods regularly. Incoming tenants across every county city want a clean baseline on move-in day, regardless of city or property type.",
              },
              {
                title: 'County-spanning property managers',
                body: 'PM companies managing portfolios across multiple county cities need a move-in cleaning partner who applies the same standard everywhere. Final Touch serves property managers county-wide, one arrangement, every city.',
              },
              {
                title: 'Homebuyers across the resale market',
                body: "Buyers purchasing established homes anywhere in Clark County (Henderson's master-planned communities, Boulder City's older properties, Las Vegas resale) want a thorough clean before the first box is unpacked.",
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
            heading="What move-in cleaning covers."
            sub="The same thorough scope across every Clark County city."
          />
          <ul className="mt-8 space-y-3">
            {[
              'Inside cabinets, drawers, and shelving',
              'Appliance interiors: oven, refrigerator, microwave, dishwasher',
              'Bathrooms: fixtures, tile, grout, mirrors',
              'Baseboards, window sills, and ledges',
              'Light fixtures and ceiling fans',
              'Vents and air returns',
              'All floor surfaces: vacuuming and mopping',
              'Kitchen countertops and backsplash',
              'Interior windows and glass',
              'Closet interiors and track areas',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Scope confirmed before the clean begins. For new construction homes anywhere in
            Clark County, let us know you are moving into a new build and we will confirm
            scope for construction residue at booking.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Move-in cleaning across Clark County"
            heading="Two county-wide drivers of move-in cleaning demand."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                heading: 'County-wide residential growth creates new-build demand across multiple cities',
                body: "Clark County is consistently among the fastest-growing counties in the United States. That growth is not concentrated in a single city. It spans Henderson's master-planned communities, North Las Vegas's active subdivisions, and Las Vegas's infill and new development. Buyers closing on new homes anywhere in the county face the same post-builder-handoff cleaning need: drywall dust, adhesive residue, and window film that the standard builder sweep leaves behind. Final Touch serves that need across every county city.",
              },
              {
                heading: 'Large county-wide renter population drives turnover demand',
                body: "Clark County has a large renter population spread across all cities and housing types. The resulting lease-cycle turnover means move-in cleaning demand is consistent throughout the county: incoming tenants in Henderson's rental properties, North Las Vegas's apartments, Las Vegas's urban units, and Boulder City's smaller rental pool all need the same thing: a verified clean before they unpack.",
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

      {/* 7. Move-in cleaning by city */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brand-black tracking-tight">
            Move-in cleaning by city
          </h2>
          <p className="mt-3 text-base text-muted">
            Each city in Clark County has its own move-in character. Find yours below.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              { label: 'Move-In Cleaning in Las Vegas, NV', href: '/services/move-in-cleaning/las-vegas' },
              { label: 'Move-In Cleaning in Henderson, NV', href: '/services/move-in-cleaning/henderson' },
              { label: 'Move-In Cleaning in North Las Vegas, NV', href: '/services/move-in-cleaning/north-las-vegas' },
              { label: 'Move-In Cleaning in Boulder City, NV', href: '/services/move-in-cleaning/boulder-city' },
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
        heading="Move-in cleaning in Clark County: common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/move-in-cleaning" className="font-semibold text-brand-blue hover:underline">
            ← Move-in cleaning services
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
        heading="Moving into a home anywhere in Clark County?"
        sub={`Free quotes for move-in cleaning across all of ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
