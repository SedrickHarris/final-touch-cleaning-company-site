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
  title: 'Move-In Cleaning in Henderson, NV',
  description:
    'Move-in cleaning in Henderson, NV. Final Touch serves Cadence, Inspirada, Green Valley, and all Henderson neighborhoods. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/move-in-cleaning/henderson`,
  },
  openGraph: {
    title: 'Move-In Cleaning in Henderson, NV | Final Touch',
    description:
      'Move-in cleaning in Henderson, NV. Final Touch serves Cadence, Inspirada, Green Valley, and all Henderson neighborhoods. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/move-in-cleaning/henderson`,
  },
};

const faq = [
  {
    q: 'What does move-in cleaning include in Henderson?',
    a: 'Move-in cleaning covers inside cabinets, drawers, and shelving; appliance interiors (oven, refrigerator, microwave, dishwasher); bathrooms including fixtures, tile, grout, and mirrors; baseboards, window sills, and ledges; light fixtures and ceiling fans; vents and air returns; all floor surfaces; kitchen countertops and backsplash; interior windows; and closet interiors. Scope confirmed before the clean begins.',
  },
  {
    q: 'Does Final Touch serve Cadence and Inspirada for move-in cleaning?',
    a: `Yes. Cadence is Henderson's largest actively developing master-planned community; Inspirada is in active build phases in southwest Henderson. Final Touch serves move-in cleaning clients in both communities, particularly new-construction buyers whose builder handoff left construction residue behind. Call ${SITE.phone.display} to schedule.`,
  },
  {
    q: 'Do I need move-in cleaning for a new Henderson home?',
    a: "Yes. New homes in Henderson's active communities (Cadence and Inspirada especially) leave drywall dust, adhesive residue, and window film even after the builder's standard handoff clean. An independent move-in clean ensures your home is genuinely clean before furniture and belongings arrive. In communities still in active build phases, ongoing construction nearby can also deposit particulate in completed homes.",
  },
  {
    q: 'How much does move-in cleaning cost in Henderson?',
    a: `Cost depends on the size and condition of the space. Henderson luxury homes and larger new builds require more time than a standard unit. Contact Final Touch at ${SITE.phone.display} or request a free quote for a real estimate. No rate is given without reviewing the space.`,
  },
  {
    q: 'How soon before my move-in date should I schedule cleaning in Henderson?',
    a: 'As early as possible once access is confirmed. For Cadence and Inspirada new builds, coordinate with your builder on when the home is accessible after handoff. Scheduling the clean before furniture arrives makes the work more thorough. Every surface is accessible without moving around boxes.',
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
  areaServed: { '@type': 'City', name: `Henderson, ${SITE.serviceArea.stateAbbr}` },
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
    { '@type': 'City', name: `Henderson, ${SITE.serviceArea.stateAbbr}` },
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
  { label: 'Henderson' },
];

export default function MoveInCleaningHendersonPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Move-In Cleaning · Henderson, NV"
        heading="Move-In Cleaning in Henderson, NV"
        sub={`Whether you are moving into a new build in Cadence or Inspirada, a resale home in Green Valley or Anthem, or a luxury property in the eastern foothills, Final Touch provides thorough move-in cleaning across all Henderson neighborhoods and ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Move-in cleaning in Henderson is a professional clean before move-in day, addressing
            construction residue in new builds, prior-occupant buildup in resale homes and rentals,
            and detail surfaces throughout that a seller or builder left behind.{' '}
            <Link href="/services/move-in-cleaning" className="text-brand-blue font-semibold hover:underline">
              Final Touch move-in cleaning
            </Link>{' '}
            gives Henderson property managers, landlords, and renters a verified clean baseline before the first box
            is unpacked. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to schedule.
          </p>
        </div>
      </section>

      {/* 3. Who hires move-in cleaning in Henderson */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires move-in cleaning in Henderson"
            heading="New-build buyers, property managers, and luxury property owners."
            sub="Henderson's move-in cleaning demand comes from new-construction buyers, property managers resetting rental units, and luxury property owners across the city's established communities."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'New-build buyers in Cadence and Inspirada',
                body: 'Both communities are in active build phases in Henderson. Builder handoffs leave drywall dust, adhesive residue, and construction particulate. An independent move-in clean after the builder finishes ensures the property is genuinely ready before the first occupant arrives.',
              },
              {
                title: 'Buyers in established master-planned communities',
                body: 'Green Valley, Anthem, Green Valley Ranch, and Seven Hills buyers (whether new to the community or moving within it) want a clean baseline before settling in. These communities set high presentation standards, and buyers want the home to reflect those standards from day one.',
              },
              {
                title: 'Luxury property owners and managers',
                body: 'Owners and managers of MacDonald Highlands, Lake Las Vegas, and comparable Henderson luxury properties schedule thorough move-in cleans before first occupancy. The investment in the property warrants the standard, particularly for spaces with premium finish materials that need surface-appropriate cleaning.',
              },
              {
                title: 'Property managers resetting rental units',
                body: 'Turnover in Green Valley and Anthem rental properties requires units to meet the standard incoming tenants expect. A move-in clean ensures the space is in verified condition before keys are handed over.',
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
            Scope confirmed before the clean begins. For Henderson new builds in Cadence or
            Inspirada, let us know you are moving into a new construction home. We will confirm
            the right scope for construction residue at booking.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Move-in cleaning in Henderson"
            heading="Two Henderson factors that shape what a move-in clean needs to address."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                heading: 'Active new construction in Cadence and Inspirada',
                body: "Cadence is Henderson's largest and most actively developing master-planned community, with multiple builders operating simultaneously across its build phases. Inspirada in southwest Henderson is in a similar position. Buyers closing on new homes in either community frequently find that the builder's standard handoff clean leaves behind drywall dust in vents, adhesive residue on floors, grout haze on tile, and construction particulate in cabinets. An independent move-in clean after handoff bridges the gap between 'builder finished' and 'genuinely clean.'",
              },
              {
                heading: 'Established community standards in Green Valley and Anthem',
                body: 'Landlords and property managers resetting units in Green Valley, Anthem, Green Valley Ranch, and comparable Henderson communities are operating in neighborhoods with consistently maintained properties and high presentation standards. A move-in clean ensures the unit meets those standards before keys are handed to an incoming tenant, addressing prior-occupant residue, years of buildup in detail surfaces, and anything the walkthrough did not surface.',
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

      {/* 6. Related services in Henderson */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="More services in Henderson"
            heading="Other cleaning services available in Henderson, NV."
            sub="Final Touch provides seven cleaning services across Henderson and Clark County."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {relatedServiceCards.map((service) => (
              <li key={service.slug} className="h-full">
                <ServiceCard
                  href={`/services/${service.slug}/henderson`}
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
              { label: 'Move-In Cleaning in North Las Vegas, NV', href: '/services/move-in-cleaning/north-las-vegas' },
              { label: 'Move-In Cleaning in Boulder City, NV', href: '/services/move-in-cleaning/boulder-city' },
              { label: 'Move-In Cleaning in Clark County, NV', href: '/services/move-in-cleaning/clark-county' },
            ].map(({ label, href }) => (
              <li key={href}>
                {/* TODO-BATCH-6: North Las Vegas, Boulder City, Clark County resolve when those city sets are built */}
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
        heading="Move-in cleaning in Henderson: common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/move-in-cleaning" className="font-semibold text-brand-blue hover:underline">
            ← Move-in cleaning services
          </Link>
          <Link href="/locations/henderson" className="font-semibold text-brand-blue hover:underline">
            ← Cleaning services in Henderson
          </Link>
          <Link href={ROUTES.freeQuote} className="font-semibold text-brand-blue hover:underline">
            Request a free quote →
          </Link>
        </div>
      </div>

      {/* 9. Final CTA */}
      <CTASection
        heading="Moving into a Henderson home?"
        sub={`Free quotes for move-in cleaning across Henderson and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
