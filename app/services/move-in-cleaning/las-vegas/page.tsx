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
  title: 'Move-In Cleaning in Las Vegas, NV | Final Touch',
  description:
    'Move-in cleaning in Las Vegas, NV by Final Touch. New construction, rental turnover, detail surfaces. Start fresh. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/move-in-cleaning/las-vegas`,
  },
  openGraph: {
    title: 'Move-In Cleaning in Las Vegas, NV | Final Touch',
    description:
      'Move-in cleaning in Las Vegas, NV by Final Touch. New construction, rental turnover, detail surfaces. Start fresh. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/move-in-cleaning/las-vegas`,
  },
};

const faq = [
  {
    q: 'What does move-in cleaning include in Las Vegas?',
    a: 'Move-in cleaning covers inside cabinets, drawers, and shelving; appliance interiors (oven, refrigerator, microwave, dishwasher); bathrooms including fixtures, tile, grout, and mirrors; baseboards, window sills, and ledges; light fixtures and ceiling fans; vents and air returns; all floor surfaces; kitchen countertops and backsplash; interior windows; and closet interiors. Scope is confirmed before we begin.',
  },
  {
    q: 'Do I need move-in cleaning for a new construction home in Las Vegas?',
    a: 'Yes. New construction in Las Vegas leaves drywall dust, adhesive residue, window film, and construction debris even after the builder completes their site sweep. A move-in clean (which may overlap with post-construction cleanup) ensures the home is genuinely ready before your furniture arrives. Las Vegas has an active new construction pipeline, and this is one of the most common move-in scenarios we handle.',
  },
  {
    q: 'How soon before my move-in date should I schedule cleaning in Las Vegas?',
    a: 'Schedule as early as possible once you have a confirmed move-in date. If access to the space is available before your actual move-in day, booking the clean before furniture arrives makes the work easier and more thorough. For new construction homes in Las Vegas, coordinate with your builder on when access is available after handoff.',
  },
  {
    q: 'Does Final Touch do move-in cleaning for apartments in Las Vegas?',
    a: `Yes. Final Touch serves apartments, condos, townhomes, and single-family homes across Las Vegas and ${SITE.serviceArea.county}. Unit size and scope are confirmed during booking. Call ${SITE.phone.display} or request a free quote to get started.`,
  },
  {
    q: 'How much does move-in cleaning cost in Las Vegas?',
    a: `Cost depends on the size and condition of the space. A studio or one-bedroom differs from a three-bedroom new build. Contact Final Touch at ${SITE.phone.display} or request a free quote online. No rate is given without reviewing the space first.`,
  },
];

// Related services: ordered by relevance for Las Vegas move-in page
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
  image: 'https://www.finaltouchcleaningteam.com/images/logo/final-touch-cleaning-company-logo.webp',
  sameAs: ['https://www.google.com/maps?cid=5303198646776788086'],
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
      name: 'Move-In Cleaning',
      item: `${SITE.url}/services/move-in-cleaning`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Las Vegas',
      item: `${SITE.url}/services/move-in-cleaning/las-vegas`,
    },
  ],
};

export default function MoveInCleaningLasVegasPage() {
  return (
    <>
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Move-In Cleaning · Las Vegas, NV"
        heading="Move-In Cleaning in Las Vegas, NV"
        sub={`Las Vegas has an active new construction pipeline and a large rental market, both of which create demand for a professional clean before move-in day. Final Touch provides thorough move-in cleaning for new builds, resale homes, and rental units across Las Vegas and ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Move-in cleaning in Las Vegas is a professional clean performed before you move in,
            addressing construction residue in new builds, prior-tenant buildup in rental units,
            and detail surfaces throughout that a seller or previous occupant left behind.{' '}
            <Link
              href="/services/move-in-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              Final Touch move-in cleaning
            </Link>{' '}
            covers every surface from inside appliances to closet interiors, giving you a clean
            baseline before the first box is unpacked. Call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>{' '}
            to schedule.
          </p>
        </div>
      </section>

      {/* 3. Who hires move-in cleaning in Las Vegas */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires move-in cleaning in Las Vegas"
            heading="New construction buyers, renters, and property managers across the metro."
            sub="Las Vegas's construction activity and rental market create two distinct move-in cleaning audiences: new-build buyers and rental market participants."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Buyers of newly built Las Vegas homes',
                body: "Las Vegas has a sustained new construction pipeline across the valley. Builder handoff leaves drywall dust, adhesive residue, window film, and debris that the site sweep doesn't fully clear. A move-in clean ensures the home is genuinely ready before furniture arrives.",
              },
              {
                title: 'Renters starting new leases',
                body: "Las Vegas's large renter population moves between apartments, condos, and single-family rentals regularly. A professional move-in clean on day one sets the right standard regardless of what the previous tenant left behind.",
              },
              {
                title: 'Property managers resetting units',
                body: 'Property managers want units in clean condition for incoming tenants. A move-in clean is distinct from the move-out clean of the prior tenant and ensures the space meets a consistent standard at the start of every new lease.',
              },
              {
                title: 'Homebuyers in the Las Vegas resale market',
                body: 'Buyers of previously owned homes want a clean baseline before unpacking, addressing seller-side residue, buildup in kitchens and bathrooms, and detail surfaces that the listing photos did not show.',
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
            heading="What move-in cleaning covers."
            sub="A move-in clean goes deeper than routine maintenance. These are the areas Final Touch addresses."
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
            Scope is confirmed before we begin. If your space has specific requirements (such as
            construction residue from a Las Vegas new build) let us know during booking and we
            will account for them.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Move-in cleaning and the Las Vegas market"
            heading="What makes Las Vegas move-in cleaning different."
            sub="Two Las Vegas-specific factors shape what a move-in clean needs to address."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                heading: 'Active new construction across the valley',
                body: 'Las Vegas has had a sustained residential construction pipeline for years. New subdivisions, infill development, and master-planned community buildouts mean new-build move-in cleans are a regular part of the local market. Drywall dust, construction adhesive, paint overspray, and window film survive the builder handoff. A move-in clean in a new Las Vegas home is as much about construction residue as it is about surface cleaning.',
              },
              {
                heading: 'Rental turnover and desert dust',
                body: "Las Vegas's large renter population means units turn over regularly. At move-in, a rental that looked clean at walkthrough may have accumulated Mojave desert dust (particularly on baseboards, vents, and window sills) that was not visible at inspection. A professional move-in clean addresses what the walkthrough missed and gives you a verified clean start.",
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

      {/* 7. Related cities for move-in cleaning */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brand-black tracking-tight">
            Move-in cleaning in other cities
          </h2>
          <p className="mt-3 text-base text-muted">
            Final Touch serves move-in cleaning clients across{' '}
            <Link href={ROUTES.locations} className="text-brand-blue font-semibold hover:underline">
              all of {SITE.serviceArea.county}
            </Link>
            .
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              { label: 'Move-In Cleaning in Henderson, NV', href: '/services/move-in-cleaning/henderson' },
              { label: 'Move-In Cleaning in North Las Vegas, NV', href: '/services/move-in-cleaning/north-las-vegas' },
              { label: 'Move-In Cleaning in Boulder City, NV', href: '/services/move-in-cleaning/boulder-city' },
              { label: 'Move-In Cleaning in Clark County, NV', href: '/services/move-in-cleaning/clark-county' },
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
        heading="Move-in cleaning in Las Vegas: common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/move-in-cleaning" className="font-semibold text-brand-blue hover:underline">
            ← Move-in cleaning services
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
        heading="Moving into a Las Vegas home or apartment?"
        sub={`Free quotes for move-in cleaning across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
