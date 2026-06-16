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
  title: 'Commercial Move-Out Cleaning in North Las Vegas, NV',
  description:
    'Commercial move-out cleaning for property managers and rental turnovers in North Las Vegas, NV. Serving apartments and rentals citywide. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/move-out-cleaning/north-las-vegas`,
  },
  openGraph: {
    title: 'Commercial Move-Out Cleaning in North Las Vegas, NV | Final Touch',
    description:
      'Commercial move-out cleaning for property managers and rental turnovers in North Las Vegas, NV. Serving apartments and rentals citywide. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/move-out-cleaning/north-las-vegas`,
  },
};

const faq = [
  {
    q: 'What does move-out cleaning include in North Las Vegas?',
    a: 'Move-out cleaning covers inside cabinets and drawers, appliance interiors (oven, refrigerator, microwave, dishwasher), appliance exteriors and range hood, bathrooms including fixtures, tile, grout, and mirrors, baseboards, window sills, and ledges, light fixtures and ceiling fans, vents and air returns, all floor surfaces, interior windows, and closet interiors. If your landlord has a specific checklist, share it when you book and we will address every item.',
  },
  {
    q: 'Does move-out cleaning help get my deposit back in North Las Vegas?',
    a: 'A professional move-out clean directly addresses the surfaces North Las Vegas landlords inspect at lease end: inside appliances, bathrooms, baseboards, and floor surfaces. Final Touch cleans to the standard that supports deposit recovery. We cannot guarantee a return, but we clean to the standard that supports it.',
  },
  {
    q: 'How far in advance should I book move-out cleaning in North Las Vegas?',
    a: 'North Las Vegas has one of the higher renter-density profiles in the Las Vegas Valley, which means move-out cleaning demand is consistent throughout the month, not concentrated only at month-end the way it is in markets with more synchronized lease cycles. Booking early is still recommended, especially if you have a firm lease-end deadline or same-day access situation.',
  },
  {
    q: 'Does Final Touch serve apartments in North Las Vegas for move-out cleaning?',
    a: `Yes. North Las Vegas has a significant number of apartment complexes and dense rental areas. Final Touch serves move-out cleaning clients in apartments, condos, townhomes, and single-family rentals across North Las Vegas. Unit type and size are confirmed during booking. Call ${SITE.phone.display} to schedule.`,
  },
  {
    q: 'Can landlords in North Las Vegas book recurring move-out cleans?',
    a: 'Yes. North Las Vegas landlords managing multiple rental properties (a common profile in this high-density rental market) can arrange recurring turnover cleaning with Final Touch. Contact us to discuss an ongoing arrangement for your portfolio.',
  },
  {
    q: 'How much does move-out cleaning cost in North Las Vegas?',
    a: `Cost depends on unit size and condition. Contact Final Touch at ${SITE.phone.display} or request a free quote for a real estimate based on your space.`,
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
  areaServed: { '@type': 'City', name: `North Las Vegas, ${SITE.serviceArea.stateAbbr}` },
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
    { '@type': 'City', name: `North Las Vegas, ${SITE.serviceArea.stateAbbr}` },
    { '@type': 'AdministrativeArea', name: `${SITE.serviceArea.county}, ${SITE.serviceArea.stateAbbr}` },
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
  { label: 'North Las Vegas' },
];

export default function MoveOutCleaningNorthLasVegasPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Move-Out Cleaning · North Las Vegas, NV"
        heading="Commercial Move-Out Cleaning in North Las Vegas, NV"
        sub={`North Las Vegas has one of the highest renter-density profiles in the Las Vegas Valley. Final Touch provides professional move-out cleaning for renters, landlords, and property managers across North Las Vegas and ${SITE.serviceArea.county}, cleaning to the standard that supports deposit recovery.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Move-out cleaning in North Las Vegas is a professional end-of-lease clean that
            addresses the surfaces landlords inspect: inside appliances, bathrooms, baseboards,
            floors, and every area that shows extended use.{' '}
            <Link href="/services/move-out-cleaning" className="text-brand-blue font-semibold hover:underline">
              Final Touch move-out cleaning
            </Link>{' '}
            serves North Las Vegas renters preparing for deposit recovery, landlords managing
            high-turnover rental portfolios, and property management companies across the city.
            Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            or{' '}
            <Link href={ROUTES.freeQuote} className="text-brand-blue font-semibold hover:underline">
              request a free quote
            </Link>{' '}
            to schedule.
          </p>
        </div>
      </section>

      {/* 3. Who hires move-out cleaning in North Las Vegas */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires move-out cleaning in North Las Vegas"
            heading="Renters, multi-unit landlords, and property managers in a high-density rental city."
            sub="North Las Vegas's rental market is distinct from Las Vegas's tourist-adjacent turnover and Henderson's embedded-in-master-planned-communities rental mix."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Renters in high-density rental areas',
                body: 'North Las Vegas has a large working-class renter population spread across apartment complexes and single-family rental areas. A professional move-out clean is a direct financial decision. The cost of the clean versus the deposit at stake makes it a practical choice.',
              },
              {
                title: 'Multi-unit landlords',
                body: 'North Las Vegas landlords often manage more units than the typical Henderson one-to-three-property landlord. Multi-unit owners here need a reliable cleaning partner who applies the same standard at every turnover without requiring active supervision.',
              },
              {
                title: 'Property management companies',
                body: "North Las Vegas's high rental density supports an active property management sector. Move-out cleans are a recurring, high-frequency need in managed portfolios, a consistent professional standard on every unit.",
              },
              {
                title: 'Homeowners selling in North Las Vegas',
                body: 'The North Las Vegas residential resale market also creates demand for pre-listing and pre-handoff cleans, particularly for homeowners in established neighborhoods preparing their property for buyers.',
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
            sub="A move-out clean addresses the surfaces North Las Vegas landlords will inspect."
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
            Scope confirmed during booking. If your North Las Vegas landlord has a specific
            move-out checklist, share it when you schedule so we address every item they inspect.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Move-out cleaning in North Las Vegas"
            heading="What makes North Las Vegas move-out cleaning demand different."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: "One of the valley's highest renter-density markets",
                body: "North Las Vegas consistently has one of the higher renter-density profiles in the Las Vegas Valley. A larger share of its housing stock is rental compared to Henderson, and the rental population is spread across both apartment complexes and single-family rentals. This concentration means move-out cleaning demand is high and consistent, one of the city's core residential cleaning needs.",
              },
              {
                heading: 'Demand is steady throughout the month',
                body: "Unlike markets where lease cycles cluster at month-end, North Las Vegas's high rental density means move-outs happen at a more consistent pace throughout the month. This makes scheduling somewhat more flexible than Las Vegas's month-end crunch, but early booking is still recommended for any job with a firm deadline.",
              },
              {
                heading: 'Practical economics drive the decision',
                body: "In North Las Vegas's working-class rental market, the decision to hire a professional move-out cleaner is typically a direct deposit-recovery calculation. Renters weigh the cleaning cost against the deposit at risk. Final Touch provides a thorough, professional clean at a standard that supports that outcome: scope confirmed before the job, no surprises.",
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
            eyebrow="More services in North Las Vegas"
            heading="Other cleaning services available in North Las Vegas, NV."
            sub="Final Touch provides seven cleaning services across North Las Vegas and the Las Vegas Valley."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {relatedServiceCards.map((service) => (
              <li key={service.slug} className="h-full">
                <ServiceCard
                  href={`/services/${service.slug}/north-las-vegas`}
                  name={service.name}
                  description={service.shortDescription}
                  image={service.image}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Related cities */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brand-black tracking-tight">
            Move-out cleaning in other cities
          </h2>
          <p className="mt-3 text-base text-muted">
            Final Touch serves move-out cleaning clients across{' '}
            <Link href={ROUTES.locations} className="text-brand-blue font-semibold hover:underline">
              all of {SITE.serviceArea.county}
            </Link>
            .
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              { label: 'Move-Out Cleaning in Las Vegas, NV', href: '/services/move-out-cleaning/las-vegas' },
              { label: 'Move-Out Cleaning in Henderson, NV', href: '/services/move-out-cleaning/henderson' },
              { label: 'Move-Out Cleaning in Boulder City, NV', href: '/services/move-out-cleaning/boulder-city' },
              { label: 'Move-Out Cleaning in Clark County, NV', href: '/services/move-out-cleaning/clark-county' },
            ].map(({ label, href }) => (
              <li key={href}>
                {/* TODO-BATCH-6: Boulder City and Clark County resolve when those city sets are built */}
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
        heading="Move-out cleaning in North Las Vegas: common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/move-out-cleaning" className="font-semibold text-brand-blue hover:underline">
            ← Move-out cleaning services
          </Link>
          <Link href="/locations/north-las-vegas" className="font-semibold text-brand-blue hover:underline">
            ← Cleaning services in North Las Vegas
          </Link>
          <Link href={ROUTES.freeQuote} className="font-semibold text-brand-blue hover:underline">
            Request a free quote →
          </Link>
        </div>
      </div>

      {/* 9. Final CTA */}
      <CTASection
        heading="Need move-out cleaning in North Las Vegas?"
        sub={`Free quotes for move-out cleaning across North Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
