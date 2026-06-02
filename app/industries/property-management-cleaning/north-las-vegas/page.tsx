import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import SectionHeader from '@/components/shared/SectionHeader';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import ServiceCard from '@/components/shared/ServiceCard';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES, SERVICES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'Property Management Cleaning in North Las Vegas, NV | Final Touch',
  description:
    'Final Touch provides unit turn cleaning and portfolio programs for property managers and landlords across North Las Vegas and Clark County, NV. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/industries/property-management-cleaning/north-las-vegas`,
  },
};

// Audience cards (Section 3), all four NLV-specific
const audienceCards = [
  {
    title: 'Property management companies serving North Las Vegas',
    body: 'North Las Vegas property management companies overseeing residential rental portfolios need a cleaning vendor who can handle high-frequency unit turns across apartment complexes and multi-unit buildings without requiring active supervision on each visit. Final Touch works with NLV property managers as a recurring vendor across their full portfolio.',
  },
  {
    title: 'Multi-unit landlords managing 5 or more properties',
    body: 'North Las Vegas landlords typically manage more rental units than the Henderson one-to-three-property profile. Multi-unit owners in NLV need volume reliability: the same standard at every unit, every turn, without the overhead of managing each clean individually. Final Touch provides consistent unit turn cleaning for NLV landlords at any portfolio size.',
  },
  {
    title: 'Apartment complex and multi-unit building managers',
    body: 'North Las Vegas has a significant stock of apartment complexes and multi-unit residential buildings. Building managers responsible for both individual unit turns and shared common areas, including lobbies, hallways, and laundry rooms, need a cleaning partner who handles both service types on a consistent schedule.',
  },
  {
    title: 'Single-family rental investors across NLV corridors',
    body: 'Single-family rental investors with properties spread across North Las Vegas residential corridors need a reliable cleaning partner who applies the same standard at every address. Final Touch serves NLV single-family rental investors on recurring unit turn programs without requiring the owner to be present at each clean.',
  },
];

// Scope checklist (Section 4), identical across all three PM city pages
const scopeChecklist = [
  'All floor surfaces: vacuuming and mopping throughout',
  'Bathroom fixtures, tile, grout, mirrors, and toilet',
  'Inside appliances: oven, refrigerator, microwave, dishwasher',
  'Appliance exteriors and range hood',
  'Inside cabinets, drawers, and pantry shelving',
  'Baseboards, window sills, and ledges',
  'Light fixtures, ceiling fans, and vents',
  'Interior windows and glass surfaces',
  'High-touch surfaces: door handles, light switches, outlet plates',
  'Closet interiors and track areas',
];

// NLV PM context cards (Section 5). No master-planned/HOA framing.
const nlvContextCards = [
  {
    heading: 'One of the highest renter-density markets in the valley',
    body: 'North Las Vegas consistently has one of the higher renter-density profiles in the Las Vegas Valley. A larger share of its housing stock is rental compared to Henderson, spread across both apartment complexes and single-family rental areas. That density means unit turn demand is high-frequency and consistent throughout the month, not clustered at month-end the way it is in markets with more synchronized lease cycles. Property managers here need a vendor with reliable capacity, not one who books out weeks in advance.',
  },
  {
    heading: 'Rental corridors along Lamb, Craig, and Cheyenne',
    body: "North Las Vegas rental properties are concentrated along and around its major residential corridors: Lamb Boulevard, Craig Road, and Cheyenne Avenue. These areas contain a mix of apartment complexes, multi-unit buildings, and single-family rentals serving the city's large working-population base. Final Touch serves property managers with rental portfolios spread across these corridors, applying the same cleaning standard at every address regardless of unit type or size.",
  },
  {
    heading: 'Multi-unit building common areas alongside unit turns',
    body: 'Many North Las Vegas rental buildings have shared common areas: lobbies, hallways, stairwells, laundry rooms, and shared restrooms that require their own recurring maintenance schedule alongside individual unit turns. Final Touch provides common area cleaning programs for NLV multi-unit buildings alongside unit turn services, so property managers work with one vendor for the full building rather than coordinating separately for each service type.',
  },
];

// Distinction cards (Section 6), all three NLV-specific. Card index 1 references
// the janitorial services page as an inline Link.
const distinctionCards = [
  {
    heading: 'Volume reliability over per-unit finish refinement',
    body: 'Henderson property management cleaning is defined by the higher per-unit finish standard in master-planned communities. North Las Vegas property management cleaning is defined by volume reliability: the same standard applied consistently across a larger number of units at a higher turnover frequency. A vendor who can handle 15 unit turns a month across NLV without variance is solving a different problem than the Henderson landlord who needs one unit to meet a community presentation bar. Final Touch is built for both, confirmed at the walkthrough.',
  },
  {
    heading: 'Multi-unit buildings require more than unit turns',
    body: "Henderson's rental inventory is largely single-family homes scattered through master-planned communities. North Las Vegas has a larger stock of multi-unit buildings with shared infrastructure: lobbies, laundry rooms, hallways, and common restrooms. A property management cleaning program in NLV often needs to cover both the unit turns and the building common areas. See our janitorial services page for the ongoing building maintenance programs that pair with unit turn cleaning.",
  },
  {
    heading: 'Consistent scheduling in a high-turnover market',
    body: 'High renter-density means tenancies turn over more frequently in North Las Vegas than in lower-density markets. Property managers operating at scale here need a cleaning vendor who shows up when scheduled, every time, without gaps. A vendor who misses a scheduled turn pushes back the re-lease timeline and creates lost-rent exposure for the owner. Final Touch schedules reliably and applies the same scope on every visit.',
  },
];

// Service area chips (Section 7)
const serviceAreaChips = [
  { label: 'North Las Vegas, NV', href: '/locations/north-las-vegas' },
  { label: 'Las Vegas, NV', href: '/locations/las-vegas' },
  { label: 'Henderson, NV', href: '/locations/henderson' },
  { label: 'Clark County, NV', href: '/locations/clark-county' },
  { label: 'Move-Out Cleaning', href: '/services/move-out-cleaning' },
  { label: 'Move-In Cleaning', href: '/services/move-in-cleaning' },
  { label: 'Janitorial Services', href: '/services/janitorial-services' },
  { label: 'Property Mgmt Cleaning in Las Vegas', href: '/industries/property-management-cleaning/las-vegas' },
  { label: 'Property Mgmt Cleaning in Henderson', href: '/industries/property-management-cleaning/henderson' },
  { label: 'All Industries', href: '/industries' },
];

// Related service cards (Section 8). NLV uses janitorial-services (not deep-cleaning)
// for multi-unit building common areas. Intentional anti-doorway difference.
const moveOut = SERVICES.find((s) => s.slug === 'move-out-cleaning')!;
const moveIn = SERVICES.find((s) => s.slug === 'move-in-cleaning')!;
const janitorial = SERVICES.find((s) => s.slug === 'janitorial-services')!;

const relatedServiceCards = [
  { name: moveOut.name, href: moveOut.href, description: moveOut.shortDescription, image: moveOut.image },
  { name: moveIn.name, href: moveIn.href, description: moveIn.shortDescription, image: moveIn.image },
  { name: janitorial.name, href: janitorial.href, description: janitorial.shortDescription, image: janitorial.image },
];

// FAQ array: FAQPage JSON-LD generated from this same array. 5 Q/A, all NLV-specific.
const faq = [
  {
    q: 'What does property management cleaning include in North Las Vegas?',
    a: 'Property management cleaning from Final Touch in North Las Vegas covers unit turn cleans between tenants (move-out and move-in standard: inside appliances, bathrooms, all floor surfaces, cabinets, baseboards, and high-touch areas), common area maintenance for multi-unit building lobbies and shared spaces, and recurring cleaning programs for landlords managing multiple rental properties. Scope is confirmed per property at the walkthrough before any program begins.',
  },
  {
    q: 'How is North Las Vegas property management cleaning different from Henderson or Las Vegas?',
    a: 'North Las Vegas has one of the highest renter-density profiles in the Las Vegas Valley. Unit turn demand is high-frequency and spread throughout the month rather than clustered at month-end. The typical NLV landlord manages more units than a Henderson one-to-three-property landlord, and volume consistency is a higher priority than per-unit finish refinement. Final Touch serves NLV property managers who need reliable turnover cleaning at scale across their full portfolio.',
  },
  {
    q: 'Can Final Touch handle high-frequency unit turns for North Las Vegas multi-unit landlords?',
    a: 'Yes. North Las Vegas landlords managing 5, 10, or more rental units need a cleaning partner who shows up consistently and applies the same standard at every unit without requiring active supervision. Final Touch provides recurring unit turn programs for NLV multi-unit owners. Contact us to discuss your portfolio size and scheduling needs.',
  },
  {
    q: 'Which areas of North Las Vegas do you serve for property management cleaning?',
    a: 'Final Touch serves property management clients across all of North Las Vegas, including the Nellis area, Aliante, and established residential corridors along Lamb Boulevard, Craig Road, and Cheyenne Avenue. Service covers all of North Las Vegas and Clark County. Call (702) 444-5077 to confirm coverage for a specific address.',
  },
  {
    q: 'How do I get a quote for property management cleaning in North Las Vegas?',
    a: `Call ${SITE.phone.display} or submit a request online. ${SITE.owners} will follow up to schedule a walkthrough, confirm scope, and provide a written estimate before any work begins. For landlords with multiple units, the walkthrough covers a representative unit so pricing is consistent across the portfolio.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Property Management Cleaning in North Las Vegas, NV',
  serviceType: 'Property Management Cleaning',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone.href.replace('tel:', ''),
    email: SITE.email.display,
  },
  areaServed: [
    { '@type': 'City', name: 'North Las Vegas', containedInPlace: { '@type': 'State', name: 'Nevada' } },
    { '@type': 'City', name: 'Las Vegas', containedInPlace: { '@type': 'State', name: 'Nevada' } },
    { '@type': 'City', name: 'Henderson', containedInPlace: { '@type': 'State', name: 'Nevada' } },
    { '@type': 'AdministrativeArea', name: 'Clark County' },
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
    { '@type': 'ListItem', position: 2, name: 'Industries', item: `${SITE.url}/industries` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Property Management Cleaning in North Las Vegas',
      item: `${SITE.url}/industries/property-management-cleaning/north-las-vegas`,
    },
  ],
};

export default function PropertyManagementCleaningNorthLasVegasPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* 1. Hero */}
      <HeroSection
        eyebrow="Property Management Cleaning · North Las Vegas, NV"
        heading="Property Management Cleaning in North Las Vegas, NV"
        sub={`North Las Vegas has one of the highest renter-density profiles in the Las Vegas Valley. Final Touch provides unit turn cleaning, common area programs, and portfolio-wide cleaning for property managers and multi-unit landlords across North Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} to request a free walkthrough and estimate.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/industries/property-management-cleaning-north-las-vegas-nv-hero-image.webp',
          alt: 'Property management cleaning in North Las Vegas, NV by Final Touch.',
        }}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Property management cleaning in North Las Vegas covers unit turn cleans in a high-density
            rental market where turnovers are frequent, consistent, and spread across apartment
            complexes, multi-unit buildings, and single-family rentals throughout the city. Final
            Touch provides{' '}
            <Link
              href="/services/move-out-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              move-out cleaning
            </Link>{' '}
            and{' '}
            <Link
              href="/services/move-in-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              move-in cleaning
            </Link>{' '}
            for unit turns, and{' '}
            <Link
              href="/services/janitorial-services"
              className="text-brand-blue font-semibold hover:underline"
            >
              janitorial programs
            </Link>{' '}
            for multi-unit building common areas across North Las Vegas and Clark County. Property
            management companies, multi-unit landlords, apartment complex managers, and single-family
            rental investors work with Final Touch for consistent, owner-led cleaning across their NLV
            portfolio. Call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>{' '}
            or{' '}
            <Link
              href={ROUTES.freeQuote}
              className="text-brand-blue font-semibold hover:underline"
            >
              request a free quote
            </Link>{' '}
            to discuss your property or portfolio.
          </p>
        </div>
      </section>

      {/* 3. Who we serve */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who we serve"
            heading="Property managers, multi-unit landlords, and building managers across North Las Vegas."
            sub="North Las Vegas's high renter-density and multi-unit building stock create a property management cleaning market defined by volume and consistent scheduling."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {audienceCards.map((item) => (
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

      {/* 4. Scope checklist */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Scope"
            heading="What a unit turn clean covers."
            sub="Every unit turn addresses the surfaces a new North Las Vegas tenant will inspect on move-in day. Scope is confirmed per property before the program begins."
          />
          <ul className="mt-8 space-y-3">
            {scopeChecklist.map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">
                  &#10003;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Scope is confirmed during the initial walkthrough. If your North Las Vegas property has
            specific requirements or your tenants leave specific conditions, note them when you
            schedule and we will address them.
          </p>
        </div>
      </section>

      {/* 5. NLV PM context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="North Las Vegas rental market"
            heading="What shapes property management cleaning demand in North Las Vegas."
            sub="North Las Vegas's rental market has a distinct character that defines what property managers here need from a cleaning vendor."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {nlvContextCards.map(({ heading, body }) => (
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

      {/* 6. What makes NLV PM cleaning distinct */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="North Las Vegas vs other markets"
            heading="What makes North Las Vegas property management cleaning distinct."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {distinctionCards.map(({ heading, body }, i) => (
              <div
                key={heading}
                className="rounded-[14px] border border-border-subtle bg-light-gray p-6"
              >
                <h3 className="font-display text-lg font-semibold text-brand-black">{heading}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {i === 1 ? (
                    <>
                      {body.split('janitorial services page')[0]}
                      <Link
                        href="/services/janitorial-services"
                        className="text-brand-blue font-semibold hover:underline"
                      >
                        janitorial services page
                      </Link>
                      {body.split('janitorial services page')[1]}
                    </>
                  ) : (
                    body
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Service area chips */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeader
            eyebrow="Service area"
            heading="Property management cleaning across North Las Vegas and Clark County."
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {serviceAreaChips.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-flex min-h-[44px] items-center rounded-full bg-brand-white px-4 py-2 text-sm font-semibold text-brand-blue border border-border-subtle hover:bg-blue-50 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. Related services */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Related services"
            heading="Services Final Touch provides for North Las Vegas property managers."
          />
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {relatedServiceCards.map((card) => (
              <li key={card.name} className="h-full">
                <ServiceCard
                  href={card.href}
                  name={card.name}
                  description={card.description}
                  image={card.image}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. FAQ */}
      <FAQSection
        items={faq}
        heading="Frequently asked questions about property management cleaning in North Las Vegas."
        defaultOpenFirst
      />
      <div className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <p className="text-sm text-muted">
            More questions?{' '}
            <Link href={ROUTES.faq} className="text-brand-blue font-semibold hover:underline">
              Read our full FAQ
            </Link>{' '}
            or{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              call {SITE.phone.display}
            </a>
            .
          </p>
        </div>
      </div>

      {/* 10. Final CTA */}
      <CTASection
        heading="Ready for reliable unit turn cleaning across your North Las Vegas portfolio?"
        sub={`Request a free walkthrough and estimate. Final Touch serves property managers and landlords across North Las Vegas and ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
