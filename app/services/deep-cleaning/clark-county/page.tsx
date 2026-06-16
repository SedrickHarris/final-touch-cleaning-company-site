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
  title: 'Commercial Deep Cleaning in Clark County, NV',
  description:
    'Commercial deep cleaning for property management, offices, and rentals across Clark County, NV. Final Touch serves all cities county-wide. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/deep-cleaning/clark-county`,
  },
  openGraph: {
    title: 'Commercial Deep Cleaning in Clark County, NV | Final Touch Cleaning',
    description:
      'Commercial deep cleaning for property management, offices, and rentals across Clark County, NV. Final Touch serves all cities county-wide. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/deep-cleaning/clark-county`,
  },
};

const faq = [
  {
    q: 'What does deep cleaning include in Clark County, NV?',
    a: 'A deep clean covers inside appliances (oven, refrigerator, microwave, dishwasher), baseboards, window sills, grout lines and tile, vents and air returns, inside cabinets and shelving, behind and under accessible furniture, light fixtures and ceiling fans, bathroom fixtures and mirrors, all floor surfaces, and high-touch surface sanitizing throughout. Scope is confirmed before the clean begins, the same standard whether the property is in Las Vegas, Henderson, North Las Vegas, or Boulder City.',
  },
  {
    q: 'Does Final Touch serve all of Clark County for deep cleaning?',
    a: `Yes. Final Touch's service area is ${SITE.serviceArea.county}, Nevada. The team serves Las Vegas, Henderson, North Las Vegas, Boulder City, and unincorporated areas of the county. Call ${SITE.phone.display} to confirm coverage for your specific address.`,
  },
  {
    q: 'What types of properties does Final Touch deep clean in Clark County?',
    a: "Clark County's housing stock spans every property type in the Las Vegas Valley: luxury custom homes in Henderson's eastern hills, newly built homes in active master-planned communities, older established homes in Boulder City, rental properties across North Las Vegas, and the full range of residential and commercial spaces throughout Las Vegas. Final Touch serves them all. Scope is confirmed per property during booking.",
  },
  {
    q: 'Does Final Touch deep clean across Clark County, including areas outside the main cities?',
    a: `Yes. Final Touch's deep cleaning service area covers all of Clark County, including Las Vegas, Henderson, North Las Vegas, and Boulder City along with the communities around them. Call ${SITE.phone.display} to confirm service availability for your specific address.`,
  },
  {
    q: 'How often should Clark County properties and commercial spaces be deep cleaned?',
    a: 'The entire county sits in the Mojave Desert, where fine-particle dust accumulates on indoor surfaces faster than in wetter climates. Property managers, commercial operators, and rental owners in Clark County typically schedule deep cleans seasonally or two to four times per year. Frequency varies by property type, location within the county, and proximity to construction activity. Contact Final Touch for a recommendation based on your property or commercial space.',
  },
  {
    q: 'How much does deep cleaning cost in Clark County?',
    a: `Cost depends on the size, condition, and type of property. Clark County's range of property types (from studio apartments in North Las Vegas to large custom homes in Henderson's foothills) means cost varies more widely than in a single-city context. Contact Final Touch at ${SITE.phone.display} or request a free quote for a real estimate.`,
  },
];

const relatedServices = [
  'move-out-cleaning',
  'move-in-cleaning',
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
  name: 'Commercial Deep Cleaning',
  serviceType: 'Commercial Deep Cleaning',
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
  { label: 'Deep Cleaning', href: '/services/deep-cleaning' },
  { label: 'Clark County' },
];

export default function DeepCleaningClarkCountyPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Deep Cleaning · Clark County, NV"
        heading="Commercial Deep Cleaning in Clark County, NV"
        sub={`Final Touch provides deep cleaning across all of ${SITE.serviceArea.county}: Las Vegas, Henderson, North Las Vegas, Boulder City, and unincorporated areas throughout the Las Vegas Valley. One team, one standard, every city in the county.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Deep cleaning in Clark County is a thorough reset that goes well beyond routine
            maintenance, covering inside appliances, grout lines, vents, baseboards, inside
            cabinets, and every detail surface that accumulates Mojave desert dust and everyday
            buildup.{' '}
            <Link href="/services/deep-cleaning" className="text-brand-blue font-semibold hover:underline">
              Final Touch deep cleaning
            </Link>{' '}
            serves Clark County property managers, commercial operators, rental property owners, and vacation rental operators
            across all cities in the county. Scope confirmed before the clean begins. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to schedule.
          </p>
        </div>
      </section>

      {/* 3. Who hires deep cleaning across Clark County */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires deep cleaning in Clark County"
            heading="Property owners and managers across every city in the Las Vegas Valley."
            sub="Clark County's varied housing stock and diverse residential character means deep cleaning serves a wider range of property types than any single city in the county."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: "Property managers across the county's varied housing stock",
                body: "Clark County's property range spans luxury hillside estates in Henderson, active new-build communities in Henderson and North Las Vegas, established older properties in Boulder City, and dense urban commercial and residential in Las Vegas. Final Touch serves property managers and commercial operators across all of them, scope confirmed per property.",
              },
              {
                title: 'Property managers with county-wide portfolios',
                body: 'Property management companies overseeing rental portfolios across multiple Clark County cities need a cleaning partner who applies the same standard in every city. A county-spanning PM company can work with Final Touch across their entire portfolio.',
              },
              {
                title: 'Vacation and short-term rental owners',
                body: "Clark County's tourism economy (from Las Vegas Strip-adjacent rentals to Lake Mead-area vacation properties in Boulder City) creates vacation rental demand across the county. Periodic deep cleans between bookings keep properties at a guest-ready standard.",
              },
              {
                title: 'Renters doing county-wide seasonal resets',
                body: 'Clark County has a large renter population spread across all cities. Renters who schedule mid-tenancy deep cleans (addressing Mojave desert dust accumulation between routine cleaning visits) are a consistent segment across every part of the county.',
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
            heading="What a deep clean covers."
            sub="A deep clean goes into the areas a routine maintenance clean does not reach. Same scope across every Clark County city."
          />
          <ul className="mt-8 space-y-3">
            {[
              'Inside appliances: oven, refrigerator, microwave, dishwasher',
              'Baseboards, window sills, and ledges',
              'Vents, air returns, and ceiling fans',
              'Inside cabinets, drawers, and shelving',
              'Behind and under furniture (accessible areas)',
              'Grout lines and tile surfaces',
              'Light fixtures and switch plate surrounds',
              'Bathroom fixtures, tile, and mirrors',
              'All floor surfaces: deep vacuum and mop',
              'High-touch surface sanitizing throughout',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Scope confirmed before the clean begins. The same standard applies whether the
            property is in Las Vegas, Henderson, North Las Vegas, Boulder City, or an
            unincorporated part of Clark County.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Deep cleaning across Clark County"
            heading="Why deep cleaning matters throughout the Las Vegas Valley."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'The entire county sits in the Mojave Desert',
                body: 'Fine-particle desert dust is not a Las Vegas issue or a Henderson issue. It is a Clark County issue. Every property in the Las Vegas Valley, regardless of city, accumulates Mojave dust on indoor surfaces faster than in wetter climates. Periodic deep cleaning is a practical response to that environment for property managers, commercial operators, and renters across every part of the county.',
              },
              {
                heading: 'The most varied housing stock in Nevada',
                body: "Clark County encompasses more housing diversity than any other part of Nevada: from Henderson's guard-gated luxury communities to Boulder City's older established homes to North Las Vegas's active new-build subdivisions to Las Vegas's dense urban residential. A deep cleaning service that works county-wide needs to accommodate that range. Final Touch does.",
              },
              {
                heading: 'County-wide property management',
                body: 'Property management companies in Clark County often manage portfolios that span multiple cities. A PM company with properties in Henderson, Las Vegas, and North Las Vegas needs a cleaning partner who can serve every location consistently. Final Touch operates county-wide, the same team, the same standard, across every city.',
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

      {/* 6. Related services in Clark County */}
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

      {/* 7. Deep cleaning by city */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brand-black tracking-tight">
            Deep cleaning by city
          </h2>
          <p className="mt-3 text-base text-muted">
            Each city in Clark County has its own deep cleaning character. Find yours below.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              { label: 'Deep Cleaning in Las Vegas, NV', href: '/services/deep-cleaning/las-vegas' },
              { label: 'Deep Cleaning in Henderson, NV', href: '/services/deep-cleaning/henderson' },
              { label: 'Deep Cleaning in North Las Vegas, NV', href: '/services/deep-cleaning/north-las-vegas' },
              { label: 'Deep Cleaning in Boulder City, NV', href: '/services/deep-cleaning/boulder-city' },
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
        heading="Deep cleaning in Clark County: common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/deep-cleaning" className="font-semibold text-brand-blue hover:underline">
            ← Deep cleaning services
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
        heading="Need deep cleaning anywhere in Clark County?"
        sub={`Free quotes for deep cleaning across all of ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
