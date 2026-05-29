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

export const metadata: Metadata = {
  title: 'Move-Out Cleaning in Las Vegas, NV | Final Touch',
  description:
    'Professional move-out cleaning service in Las Vegas, NV. Final Touch cleans to the standard landlords inspect. Deposit-ready results. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/move-out-cleaning/las-vegas`,
  },
  openGraph: {
    title: 'Move-Out Cleaning in Las Vegas, NV | Final Touch',
    description:
      'Professional move-out cleaning service in Las Vegas, NV. Final Touch cleans to the standard landlords inspect. Deposit-ready results. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/move-out-cleaning/las-vegas`,
  },
};

const faq = [
  {
    q: 'What does move-out cleaning include in Las Vegas?',
    a: 'Move-out cleaning covers inside cabinets and drawers, appliance interiors (oven, refrigerator, microwave, dishwasher), appliance exteriors and range hood, bathrooms including fixtures, tile, grout, and mirrors, baseboards, window sills, and ledges, light fixtures and ceiling fans, vents and air returns, all floor surfaces, interior windows, and closet interiors. If your landlord has a specific move-out checklist, share it when you schedule and we will account for it.',
  },
  {
    q: 'Does move-out cleaning help get my deposit back in Las Vegas?',
    a: 'A professional move-out clean directly addresses the surfaces Las Vegas landlords inspect at lease end — inside appliances, bathrooms, baseboards, and floor surfaces. Final Touch cleans to the standard a landlord expects. We cannot guarantee a deposit return, but we clean to the standard that supports it.',
  },
  {
    q: 'How far in advance should I book move-out cleaning in Las Vegas?',
    a: 'Book as early as possible once you have a confirmed move-out date or lease-end deadline. Las Vegas has one of the higher rental turnover rates in the region, and availability around month-end — when most leases end — can be tighter than expected. Calling ahead gives you the best shot at your preferred date.',
  },
  {
    q: 'Does Final Touch clean empty apartments in Las Vegas?',
    a: 'Yes. Empty spaces often allow for more thorough access to all surfaces. If the unit is already empty when the team arrives, we can work room by room without working around furniture or boxes. Let us know the access situation when you book.',
  },
  {
    q: 'How much does move-out cleaning cost in Las Vegas?',
    a: `Cost depends on the size and condition of the unit. A studio or one-bedroom apartment takes less time than a three-bedroom house with heavy use. Contact Final Touch at ${SITE.phone.display} or request a free quote online for a real estimate based on your space.`,
  },
  {
    q: 'Can landlords and property managers in Las Vegas book move-out cleaning between tenants?',
    a: 'Yes. Landlords and property managers book move-out cleaning to reset units between tenants across Las Vegas. Final Touch applies the same finishing standard regardless of unit size or property type. Contact us to discuss recurring turnover arrangements.',
  },
];

// Related services: ordered by relevance for Las Vegas move-out page
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
  name: 'Move-Out Cleaning',
  serviceType: 'Move-Out Cleaning',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone.href.replace('tel:', ''),
    email: SITE.email.display,
  },
  areaServed: {
    '@type': 'City',
    name: `Las Vegas, ${SITE.serviceArea.stateAbbr}`,
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  areaServed: [
    { '@type': 'City', name: `Las Vegas, ${SITE.serviceArea.stateAbbr}` },
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

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Move-Out Cleaning',
      item: `${SITE.url}/services/move-out-cleaning`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Las Vegas',
      item: `${SITE.url}/services/move-out-cleaning/las-vegas`,
    },
  ],
};

export default function MoveOutCleaningLasVegasPage() {
  return (
    <>
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Move-Out Cleaning · Las Vegas, NV"
        heading="Move-Out Cleaning in Las Vegas, NV"
        sub={`Las Vegas has one of the highest rental turnover rates in the region. Final Touch provides professional move-out cleaning for renters, landlords, and property managers across Las Vegas and ${SITE.serviceArea.county} — cleaning to the standard that supports a deposit return.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Move-out cleaning in Las Vegas is a professional end-of-lease clean that addresses the
            surfaces landlords inspect: inside appliances, bathrooms, baseboards, floor surfaces,
            and every area that shows extended use.{' '}
            <Link
              href="/services/move-out-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              Final Touch move-out cleaning
            </Link>{' '}
            serves renters preparing for deposit recovery, landlords resetting units between tenants,
            and property managers handling turnover across the Las Vegas metro. Call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
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

      {/* 3. Who hires move-out cleaning in Las Vegas */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires move-out cleaning in Las Vegas"
            heading="Renters, landlords, and property managers across the Las Vegas metro."
            sub="Las Vegas's large renter population and active lease cycle create consistent demand for professional move-out cleaning at every property type."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Renters leaving apartments',
                body: 'Las Vegas has a large renter population spread across Spring Valley, Sunrise Manor, the city core, and surrounding neighborhoods. A professional move-out clean addresses the surfaces your landlord inspects without spending your last weekend before the deadline.',
              },
              {
                title: 'Landlords resetting rental units',
                body: 'Property owners managing single-family rentals and multi-unit buildings need a reliable cleaning partner at turnover. The high rental density in Las Vegas makes this a recurring need rather than a one-time job.',
              },
              {
                title: 'Property management companies',
                body: 'Las Vegas has a substantial property management sector. Move-out cleans are a recurring requirement in managed portfolios — a consistent standard on every unit, every time.',
              },
              {
                title: 'Homeowners selling in Las Vegas',
                body: 'Sellers need the property clean before listing, showings, and final handoff. The Las Vegas real estate market creates steady demand for move-out-style cleans at sale alongside the rental market.',
              },
            ].map((item) => (
              <li
                key={item.title}
                className="rounded-[14px] border border-border-subtle bg-brand-white p-6"
              >
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
            sub="A move-out clean goes into the areas that get neglected over time — the surfaces your landlord will check."
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
            Specific scope is confirmed during booking. If your landlord has a move-out checklist,
            share it with us when you schedule so we can address every item they will inspect.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Move-out cleaning in the Las Vegas rental market"
            heading="Why Las Vegas renters and landlords prioritize professional move-out cleaning."
            sub="The Las Vegas rental market has specific dynamics that make professional move-out cleaning more than a convenience."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'High rental turnover across the metro',
                body: 'A significant portion of Las Vegas residents rent rather than own. The resulting lease cycle creates consistent turnover demand — renters moving out and in, landlords resetting units, and property managers coordinating cleans across managed portfolios.',
              },
              {
                heading: 'Month-end booking pressure',
                body: 'Most Las Vegas leases end at the end of the month. Move-out cleaning availability clusters around those dates. Booking early — as soon as your move-out date is confirmed — gives you the best chance of securing your preferred time.',
              },
              {
                heading: 'Desert dust compounds the standard clean',
                body: 'Mojave desert dust accumulates on surfaces throughout a tenancy. At move-out, baseboards, vents, blinds, and window sills carry more buildup than in wetter climates. A professional clean accounts for this when addressing the full scope of a Las Vegas move-out.',
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

      {/* 6. Related services in Las Vegas */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="More services in Las Vegas"
            heading="Other cleaning services available in Las Vegas, NV."
            sub="Final Touch provides seven cleaning services across Las Vegas and Clark County."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {relatedServiceCards.map((service) => (
              <li key={service.slug} className="h-full">
                <ServiceCard
                  href={`/services/${service.slug}/las-vegas`}
                  name={service.name}
                  description={service.shortDescription}
                  image={service.image}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Related cities for move-out cleaning */}
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
              { label: 'Move-Out Cleaning in Henderson, NV', href: '/services/move-out-cleaning/henderson' },
              { label: 'Move-Out Cleaning in North Las Vegas, NV', href: '/services/move-out-cleaning/north-las-vegas' },
              { label: 'Move-Out Cleaning in Boulder City, NV', href: '/services/move-out-cleaning/boulder-city' },
              { label: 'Move-Out Cleaning in Clark County, NV', href: '/services/move-out-cleaning/clark-county' },
            ].map(({ label, href }) => (
              <li key={href}>
                {/* TODO-BATCH-6: link resolves when that city set is built */}
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
        heading="Move-out cleaning in Las Vegas — common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/move-out-cleaning" className="font-semibold text-brand-blue hover:underline">
            ← Move-out cleaning services
          </Link>
          <Link href="/locations/las-vegas" className="font-semibold text-brand-blue hover:underline">
            ← Cleaning services in Las Vegas
          </Link>
          <Link href={ROUTES.freeQuote} className="font-semibold text-brand-blue hover:underline">
            Request a free quote →
          </Link>
        </div>
      </div>

      {/* 9. Final CTA */}
      <CTASection
        heading="Need move-out cleaning in Las Vegas?"
        sub={`Free quotes for move-out cleaning across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
