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
  title: 'Commercial Move-In Cleaning in North Las Vegas, NV',
  description:
    'Commercial move-in cleaning for rental turnovers and property management in North Las Vegas, NV. Serving landlords and managers. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/move-in-cleaning/north-las-vegas`,
  },
  openGraph: {
    title: 'Commercial Move-In Cleaning in North Las Vegas, NV | Final Touch',
    description:
      'Commercial move-in cleaning for rental turnovers and property management in North Las Vegas, NV. Serving landlords and managers. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/move-in-cleaning/north-las-vegas`,
  },
};

const faq = [
  {
    q: 'What does move-in cleaning include in North Las Vegas?',
    a: 'Move-in cleaning covers inside cabinets, drawers, and shelving; appliance interiors (oven, refrigerator, microwave, dishwasher); bathrooms including fixtures, tile, grout, and mirrors; baseboards, window sills, and ledges; light fixtures and ceiling fans; vents and air returns; all floor surfaces; kitchen countertops and backsplash; interior windows; and closet interiors. Scope confirmed before the clean begins.',
  },
  {
    q: 'Do I need move-in cleaning for a new North Las Vegas home?',
    a: "Yes. North Las Vegas is one of the most active residential growth areas in the Las Vegas Valley. New construction here leaves drywall dust, adhesive residue, and window film after the builder's standard handoff clean. A move-in clean addresses what the site sweep misses (particularly in vents, inside cabinets, and on window surfaces) before furniture and belongings arrive.",
  },
  {
    q: 'Does Final Touch serve apartments in North Las Vegas for move-in cleaning?',
    a: `Yes. North Las Vegas has a significant rental apartment population across the city. Final Touch serves move-in cleaning for apartments, condos, and single-family rentals across North Las Vegas. Unit type and scope are confirmed during booking. Call ${SITE.phone.display} to schedule.`,
  },
  {
    q: 'How much does move-in cleaning cost in North Las Vegas?',
    a: `Cost depends on the size and condition of the space. Contact Final Touch at ${SITE.phone.display} or request a free quote for a real estimate. No rate is given without reviewing the space first.`,
  },
  {
    q: 'How soon before my move-in date should I schedule cleaning in North Las Vegas?',
    a: 'As early as possible once access is confirmed. For new builds in North Las Vegas, coordinate with your builder on when the home is accessible after handoff. Scheduling the clean before furniture arrives makes the work more thorough. Every surface is accessible without working around boxes.',
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
  name: 'Commercial Move-In Cleaning',
  serviceType: 'Commercial Move-In Cleaning',
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
  { label: 'Move-In Cleaning', href: '/services/move-in-cleaning' },
  { label: 'North Las Vegas' },
];

export default function MoveInCleaningNorthLasVegasPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Move-In Cleaning · North Las Vegas, NV"
        heading="Commercial Move-In Cleaning in North Las Vegas, NV"
        sub={`North Las Vegas combines active new residential construction with a large rental market, two distinct move-in cleaning audiences. Final Touch serves new-build buyers, renters moving into apartments, and landlords resetting units across North Las Vegas and ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Move-in cleaning in North Las Vegas is a professional clean before move-in day,
            addressing construction residue in new builds, prior-occupant buildup in rental units,
            and detail surfaces throughout that a seller, builder, or previous tenant left behind.{' '}
            <Link href="/services/move-in-cleaning" className="text-brand-blue font-semibold hover:underline">
              Final Touch move-in cleaning
            </Link>{' '}
            gives North Las Vegas property managers, landlords, and renters a clean baseline before the first box is
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
            eyebrow="Who hires move-in cleaning in North Las Vegas"
            heading="New-build buyers, renters, and landlords across a growing city."
            sub="North Las Vegas's combination of active construction and high rental density creates two distinct move-in audiences."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Renters moving into apartments and rental homes',
                body: 'North Las Vegas has one of the higher renter-density profiles in the valley. Renters moving into a new unit want a clean baseline on day one, regardless of what the previous tenant left behind or how thoroughly the landlord cleaned between occupants.',
              },
              {
                title: 'New-construction buyers and landlords',
                body: "North Las Vegas is one of the most active residential growth areas in the Las Vegas Valley. New buyers taking possession and landlords preparing recently built rental units use a move-in clean to address construction residue that survives the builder's standard sweep, particularly in vents, window tracks, and inside cabinets.",
              },
              {
                title: 'Landlords resetting rental units',
                body: 'North Las Vegas landlords often manage multiple units. A move-in clean ensures the unit is in verified condition for the incoming tenant, distinct from the move-out clean of the prior occupant and a practical step in a high-turnover rental market.',
              },
              {
                title: 'Landlords acquiring resale properties',
                body: 'North Las Vegas offers more affordable property prices than Henderson, making it an active market for rental investors acquiring established homes. Landlords taking on a previously occupied property want a thorough clean before the first new tenant moves in, addressing what the prior occupant left behind in detail surfaces and appliances.',
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
            Scope confirmed before the clean begins. For North Las Vegas new builds, let us know
            you are moving into a new construction home. We will confirm scope for construction
            residue at booking.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Move-in cleaning in North Las Vegas"
            heading="Two factors that define NLV move-in cleaning demand."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                heading: 'Active residential construction: new-build move-in demand',
                body: "North Las Vegas has been among the most active residential growth areas in the Las Vegas Valley for years. New subdivisions and infill development create a consistent pipeline of new-build move-in cleaning jobs. The builder's standard handoff clean is a site sweep. It does not address construction residue in vents, adhesive on floor surfaces, window film on every pane, or fine drywall dust in inside-cabinet surfaces. A professional move-in clean after handoff covers what the builder left behind.",
              },
              {
                heading: 'High rental density: incoming tenant move-in demand',
                body: "North Las Vegas's large renter population means move-in cleaning is a high-frequency recurring need alongside the new-construction segment. Renters moving into apartments and single-family rentals across the city want assurance that the space is clean before they bring in their belongings. Whether the previous tenant left the unit in good condition or not, a professional move-in clean provides a verified starting point.",
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
              { label: 'Move-In Cleaning in Boulder City, NV', href: '/services/move-in-cleaning/boulder-city' },
              { label: 'Move-In Cleaning in Clark County, NV', href: '/services/move-in-cleaning/clark-county' },
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
        heading="Move-in cleaning in North Las Vegas: common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/move-in-cleaning" className="font-semibold text-brand-blue hover:underline">
            ← Move-in cleaning services
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
        heading="Moving into a North Las Vegas home or apartment?"
        sub={`Free quotes for move-in cleaning across North Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
