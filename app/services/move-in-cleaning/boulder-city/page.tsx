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
  title: 'Move-In Cleaning in Boulder City, NV',
  description:
    'Move-in cleaning in Boulder City, NV. Final Touch serves established homes, relocating buyers, and rental properties in Boulder City. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/move-in-cleaning/boulder-city`,
  },
  openGraph: {
    title: 'Move-In Cleaning in Boulder City, NV | Final Touch',
    description:
      'Move-in cleaning in Boulder City, NV. Final Touch serves established homes, relocating buyers, and rental properties in Boulder City. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/move-in-cleaning/boulder-city`,
  },
};

const faq = [
  {
    q: 'What does move-in cleaning include in Boulder City?',
    a: 'Move-in cleaning covers inside cabinets, drawers, and shelving; appliance interiors (oven, refrigerator, microwave, dishwasher); bathrooms including fixtures, tile, grout, and mirrors; baseboards, window sills, and ledges; light fixtures and ceiling fans; vents and air returns; all floor surfaces; kitchen countertops and backsplash; interior windows; and closet interiors. Scope confirmed before the clean begins.',
  },
  {
    q: 'Is move-in cleaning different for older Boulder City homes?',
    a: 'Yes. Boulder City has a housing stock that includes many older properties with original fixtures, built-in cabinetry, and surfaces that have been in place for decades. A move-in clean in an older Boulder City home addresses what previous occupants left behind in original cabinetry, around period fixtures, and in surfaces that have accumulated years of buildup. The approach requires care with what the surfaces are, not the same as cleaning a new Henderson or Las Vegas build.',
  },
  {
    q: 'Does Final Touch serve Boulder City for move-in cleaning?',
    a: `Yes. Final Touch serves Boulder City as part of its ${SITE.serviceArea.county} service area. Boulder City is a regular part of the service territory. Call ${SITE.phone.display} to schedule.`,
  },
  {
    q: 'How much does move-in cleaning cost in Boulder City?',
    a: `Cost depends on the size and condition of the space. Contact Final Touch at ${SITE.phone.display} or request a free quote. No rate is given without reviewing the space first.`,
  },
  {
    q: 'How soon before move-in should I schedule cleaning in Boulder City?',
    a: 'As early as possible once access is confirmed. For Boulder City homes that have been vacant during a sale or sat unoccupied between owners, scheduling as soon as access is available after closing gives the team a clear space to work before furniture arrives, particularly important when the home has original cabinetry and built-in features that need attention.',
  },
];

const relatedServices = [
  'move-out-cleaning',
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
  name: 'Move-In Cleaning',
  serviceType: 'Move-In Cleaning',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone.href.replace('tel:', ''),
    email: SITE.email.display,
  },
  areaServed: { '@type': 'City', name: `Boulder City, ${SITE.serviceArea.stateAbbr}` },
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
    { '@type': 'City', name: `Boulder City, ${SITE.serviceArea.stateAbbr}` },
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
  { label: 'Move-In Cleaning', href: '/services/move-in-cleaning' },
  { label: 'Boulder City' },
];

export default function MoveInCleaningBoulderCityPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Move-In Cleaning · Boulder City, NV"
        heading="Move-In Cleaning in Boulder City, NV"
        sub={`Boulder City draws buyers from Las Vegas and Henderson seeking a smaller-community setting, often moving into older, established homes that have had prior occupants for years. Final Touch provides thorough move-in cleaning for Boulder City homebuyers, renters, and property owners across Boulder City and ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Move-in cleaning in Boulder City is a professional clean before move-in day,
            addressing years of prior-occupant buildup in original cabinetry and fixtures,
            surfaces that sat vacant during the sale process, and every detail area that a
            previous owner or seller left behind.{' '}
            <Link href="/services/move-in-cleaning" className="text-brand-blue font-semibold hover:underline">
              Final Touch move-in cleaning
            </Link>{' '}
            gives Boulder City homebuyers and renters a clean baseline before the first box is
            unpacked. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to schedule.
          </p>
        </div>
      </section>

      {/* 3. Who hires */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires move-in cleaning in Boulder City"
            heading="Metro relocators, established-home buyers, and property owners."
            sub="Boulder City move-in cleaning is shaped by the city's distinct character as a destination purchase for people leaving the metro."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Metro relocators buying their first Boulder City home',
                body: 'People moving from Las Vegas or Henderson to Boulder City for a quieter lifestyle are the signature move-in audience. They are often buying an established home that has had prior occupants, and they want a thorough clean as a fresh start before their belongings arrive.',
              },
              {
                title: 'Buyers of older established Boulder City homes',
                body: "Boulder City's housing stock includes properties that have been occupied for decades. A move-in clean for these buyers addresses seller-side buildup in original fixtures and cabinetry, surfaces a staging or listing clean does not typically reach.",
              },
              {
                title: 'Rental property managers resetting units',
                body: "Boulder City's small rental pool still generates turnover. Property managers and landlords want incoming tenants to start in a verified, clean space, distinct from the move-out clean of the prior occupant.",
              },
              {
                title: 'Lake Mead vacation rental owners',
                body: 'Owners setting up a vacation or short-term rental near Lake Mead use a move-in clean to establish a baseline before their first guests arrive, a foundation the property can be maintained from going forward.',
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
            sub="A move-in clean goes deeper than routine maintenance, addressing what the previous occupant left behind."
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
            Scope confirmed before the clean begins. For older Boulder City homes with original
            cabinetry or period fixtures, let us know during booking so we can confirm the right
            approach for those surfaces.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Move-in cleaning in Boulder City"
            heading="What makes Boulder City move-in cleaning different."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                heading: 'Established homes with years of prior occupancy',
                body: 'Boulder City is not a new-construction market. Almost all move-in cleaning here is for established homes, properties that have had one or more prior owners and may have been on the market for weeks or months before closing. The buildup in original cabinetry, behind period fixtures, and in surfaces that were cleaned for listing but not deeply cleaned is what a move-in clean addresses. This is a fundamentally different job from cleaning a new Henderson build where the issue is construction residue.',
              },
              {
                heading: 'A destination purchase: buyers arrive with expectations',
                body: 'People who buy in Boulder City are typically making an intentional choice to leave the Las Vegas metro for a quieter, smaller community. They arrive with high expectations for their new home and want to start in a space that reflects that choice. A move-in clean before the first box is unpacked ensures the home meets those expectations from day one.',
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
            eyebrow="More services in Boulder City"
            heading="Other cleaning services available in Boulder City, NV."
            sub="Final Touch provides seven cleaning services across Boulder City and Clark County."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {relatedServiceCards.map((service) => (
              <li key={service.slug} className="h-full">
                <ServiceCard
                  href={`/services/${service.slug}/boulder-city`}
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
              { label: 'Move-In Cleaning in Las Vegas, NV', href: '/services/move-in-cleaning/las-vegas' },
              { label: 'Move-In Cleaning in Henderson, NV', href: '/services/move-in-cleaning/henderson' },
              { label: 'Move-In Cleaning in North Las Vegas, NV', href: '/services/move-in-cleaning/north-las-vegas' },
              { label: 'Move-In Cleaning in Clark County, NV', href: '/services/move-in-cleaning/clark-county' },
            ].map(({ label, href }) => (
              <li key={href}>
                {/* TODO-BATCH-6: Clark County resolves when that city set is built */}
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
        heading="Move-in cleaning in Boulder City: common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/move-in-cleaning" className="font-semibold text-brand-blue hover:underline">
            ← Move-in cleaning services
          </Link>
          <Link href="/locations/boulder-city" className="font-semibold text-brand-blue hover:underline">
            ← Cleaning services in Boulder City
          </Link>
          <Link href={ROUTES.freeQuote} className="font-semibold text-brand-blue hover:underline">
            Request a free quote →
          </Link>
        </div>
      </div>

      {/* 9. Final CTA */}
      <CTASection
        heading="Moving into a Boulder City home?"
        sub={`Free quotes for move-in cleaning across Boulder City and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
