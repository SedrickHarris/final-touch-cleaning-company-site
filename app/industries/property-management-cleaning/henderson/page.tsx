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
  title: 'Property Management Cleaning in Henderson, NV | Final Touch',
  description:
    'Final Touch provides unit turn cleaning, HOA common area programs, and portfolio cleaning for property managers in Henderson and Clark County, NV. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/industries/property-management-cleaning/henderson`,
  },
};

// Audience cards (Section 3), all four Henderson-specific
const audienceCards = [
  {
    title: 'Property management companies serving Henderson communities',
    body: "Henderson property management companies overseeing rental portfolios in Green Valley, Anthem, Green Valley Ranch, and the city's newer master-planned communities need a cleaning vendor who understands that the standard expected here is set by the broader community, not just individual landlord preference. Final Touch works with Henderson property managers as a recurring vendor across their full portfolio.",
  },
  {
    title: 'Independent landlords with one to three Henderson properties',
    body: 'Henderson landlords typically manage one to three rental properties in established neighborhoods rather than large apartment portfolios. They need a cleaning partner who applies a thorough, consistent standard at a small number of high-value properties, not a volume operation that rushes through. Final Touch treats each Henderson property as the individual asset it is.',
  },
  {
    title: 'HOA building managers and residential community managers',
    body: 'Many Henderson rental properties and residential buildings operate within HOA-governed communities that set maintenance standards for both unit condition and common areas. Building managers responsible for lobbies, hallways, shared restrooms, and community spaces need a cleaning program aligned with HOA standards, not a generic maintenance sweep.',
  },
  {
    title: 'New-construction rental unit managers in Cadence and Inspirada',
    body: "Cadence and Inspirada are Henderson's most actively developing master-planned communities. New rental units in both communities are frequently coming to market for the first time. First-occupancy cleans for these units go beyond a builder sweep: construction particulate, adhesive residue, and fine dust require a thorough professional clean before the first tenant arrives.",
  },
];

// Scope checklist (Section 4), identical to LV; scope does not change by city
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

// PM-specific scope expansion (Section 5), all three Henderson-specific
const pmScopeExpansion = [
  {
    heading: 'HOA common areas and community-governed spaces',
    body: "Henderson's established master-planned communities are predominantly HOA-governed. That governance extends to common areas: lobbies, hallways, stairwells, shared restrooms, leasing offices, and community facilities. HOA boards set maintenance standards for these spaces, and property managers are responsible for meeting them. Final Touch provides scheduled common area cleaning programs aligned with Henderson HOA standards, with frequency and scope confirmed per building at the walkthrough.",
  },
  {
    heading: 'The master-planned community finish standard',
    body: "A rental property in Green Valley, Anthem, or Seven Hills sits within a community where the surrounding owner-occupied homes set a consistent presentation standard. Tenants who move into a Henderson master-planned community arrive with expectations shaped by that environment. A unit turn in Henderson needs to meet that bar, not just clear the minimum for deposit purposes. Final Touch's unit turn scope is calibrated to the standard Henderson landlords and their incoming tenants expect.",
  },
  {
    heading: 'First-occupancy cleans for Cadence and Inspirada rental units',
    body: 'New rental units in Cadence and Inspirada require a first-occupancy clean before the initial tenant moves in. Builder handoff sweeps address visible debris but consistently leave construction particulate in grout lines, cabinet interiors, vent covers, window tracks, and baseboards. A professional first-occupancy clean ensures the unit presents at the standard a new community resident expects, and sets the foundation for future unit turns at a consistent level.',
  },
];

// Distinction cards (Section 6), all three Henderson-specific. Card index 2
// references the move-out cleaning in Henderson page as an inline Link.
const distinctionCards = [
  {
    heading: 'Community-embedded rental inventory vs apartment-complex inventory',
    body: "Las Vegas property management cleaning operates largely in a high-density apartment market where volume and speed define the vendor relationship. Henderson's rental inventory is embedded within established master-planned communities alongside owner-occupied homes. That context changes what a unit turn needs to deliver. The clean is not finished when it passes a basic inspection. It is finished when it matches the presentation standard of the community it sits within.",
  },
  {
    heading: 'Higher per-unit finish standard in established neighborhoods',
    body: 'Henderson landlords in Green Valley, Anthem, and comparable neighborhoods expect inside appliances clean to a visible standard, grout lines addressed, baseboards wiped, and vents cleared. These are the areas they inspect and the areas incoming tenants notice on move-in day. A vendor who cleans Henderson rentals to a generic standard will generate callbacks. Final Touch cleans to the standard the community expects, confirmed during the walkthrough and applied consistently across every visit.',
  },
  {
    heading: "New-construction cleaning demand in Henderson's active communities",
    body: "Cadence and Inspirada are producing new rental units at a pace no other Henderson community matches. First-occupancy cleans, post-construction move-in cleans, and the ongoing unit turns that follow create a concentrated demand channel in northeast Henderson. Final Touch serves both the initial clean before a rental unit's first tenant and the subsequent turns as those leases cycle. See our move-out cleaning in Henderson page for the specific scope applied at each stage.",
  },
];

// Service area chips (Section 7)
const serviceAreaChips = [
  { label: 'Henderson, NV', href: '/locations/henderson' },
  { label: 'Las Vegas, NV', href: '/locations/las-vegas' },
  { label: 'North Las Vegas, NV', href: '/locations/north-las-vegas' },
  { label: 'Clark County, NV', href: '/locations/clark-county' },
  { label: 'Move-Out Cleaning', href: '/services/move-out-cleaning' },
  { label: 'Move-In Cleaning', href: '/services/move-in-cleaning' },
  { label: 'Deep Cleaning', href: '/services/deep-cleaning' },
  { label: 'Property Mgmt Cleaning in Las Vegas', href: '/industries/property-management-cleaning/las-vegas' },
  { label: 'Property Mgmt Cleaning in North Las Vegas', href: '/industries/property-management-cleaning/north-las-vegas' },
  { label: 'All Industries', href: '/industries' },
];

// Related service cards (Section 8). Henderson uses deep-cleaning (not janitorial)
// because landlords between long-term tenants commonly need deep cleans.
const moveOut = SERVICES.find((s) => s.slug === 'move-out-cleaning')!;
const moveIn = SERVICES.find((s) => s.slug === 'move-in-cleaning')!;
const deepClean = SERVICES.find((s) => s.slug === 'deep-cleaning')!;

const relatedServiceCards = [
  { name: moveOut.name, href: moveOut.href, description: moveOut.shortDescription, image: moveOut.image },
  { name: moveIn.name, href: moveIn.href, description: moveIn.shortDescription, image: moveIn.image },
  { name: deepClean.name, href: deepClean.href, description: deepClean.shortDescription, image: deepClean.image },
];

// FAQ array: FAQPage JSON-LD generated from this same array. All Henderson-specific.
const faq = [
  {
    q: 'What does property management cleaning include in Henderson?',
    a: "Property management cleaning from Final Touch in Henderson covers unit turn cleans between tenants (move-out and move-in standard: inside appliances, bathrooms, all floor surfaces, cabinets, baseboards, and high-touch areas), HOA common area maintenance programs for lobbies, hallways, and shared spaces, and deep cleans for units coming off long-term tenancies. Scope reflects the higher finish standard expected in Henderson's master-planned communities and is confirmed per property at the walkthrough.",
  },
  {
    q: 'What cleaning standard do Henderson landlords expect at unit turnover?',
    a: 'Henderson landlords in communities like Green Valley, Anthem, and Green Valley Ranch consistently expect a higher finishing standard than a generic suburban rental market. The surrounding owner-occupied homes set the visual standard, and incoming tenants arrive with matching expectations. Inside appliances, grout lines, baseboards, and vents are areas Henderson landlords routinely inspect. Final Touch cleans to the standard those communities expect.',
  },
  {
    q: 'Can Final Touch handle HOA common area cleaning in Henderson?',
    a: "Yes. Common area cleaning programs for Henderson HOA-managed buildings and residential communities are part of Final Touch's property management scope. This includes lobbies, hallways, shared restrooms, leasing offices, and other community spaces. Frequency and scope are confirmed per building at the walkthrough.",
  },
  {
    q: 'How is Henderson property management cleaning different from Las Vegas?',
    a: "The cleaning scope is the same, but the market context differs. Henderson's rental inventory is embedded within established master-planned communities where presentation standards reflect the broader neighborhood. The typical Henderson landlord manages one to three properties rather than a large apartment portfolio, and the per-unit finish standard is higher. New-construction turnover in Cadence and Inspirada adds a first-occupancy demand channel not present at the same volume in Las Vegas.",
  },
  {
    q: 'Do you clean rental units in Henderson communities like Green Valley, Anthem, Cadence, and Inspirada?',
    a: 'Yes. Final Touch serves property management clients across Henderson, including Green Valley, Green Valley Ranch, Anthem, Cadence, Inspirada, Seven Hills, MacDonald Highlands, Lake Las Vegas, and Tuscany Village. Call (702) 444-5077 to confirm coverage for a specific address.',
  },
  {
    q: 'Can Final Touch handle recurring cleaning for Henderson landlords with multiple properties?',
    a: 'Yes. Henderson landlords managing two, five, or more properties across different communities work with Final Touch for all their unit turns. The same scope, the same standard, and the same scheduling process at every property. Contact us to set up a recurring arrangement for your portfolio.',
  },
  {
    q: 'What should Henderson property managers look for in a cleaning company?',
    a: "Look for a company that understands the higher finish standard expected in Henderson's established communities, has owner involvement rather than crew rotation, schedules reliably within your turnover window, and is willing to confirm scope in writing before the first clean. Ask whether they have experience with both unit turns and HOA common area programs, and whether they can handle first-occupancy cleans on new rental units in Cadence and Inspirada.",
  },
  {
    q: 'How do I get a quote for property management cleaning in Henderson?',
    a: `Call ${SITE.phone.display} or submit a request online. ${SITE.owners} will follow up to schedule a walkthrough of your Henderson property or portfolio, confirm scope, and provide a written estimate before any work begins. For landlords with multiple properties, the walkthrough covers a representative unit so pricing is consistent across all managed addresses.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Property Management Cleaning in Henderson, NV',
  serviceType: 'Property Management Cleaning',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone.href.replace('tel:', ''),
    email: SITE.email.display,
  },
  areaServed: [
    { '@type': 'City', name: 'Henderson', containedInPlace: { '@type': 'State', name: 'Nevada' } },
    { '@type': 'City', name: 'Las Vegas', containedInPlace: { '@type': 'State', name: 'Nevada' } },
    { '@type': 'City', name: 'North Las Vegas', containedInPlace: { '@type': 'State', name: 'Nevada' } },
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
      name: 'Property Management Cleaning in Henderson',
      item: `${SITE.url}/industries/property-management-cleaning/henderson`,
    },
  ],
};

export default function PropertyManagementCleaningHendersonPage() {
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
        eyebrow="Property Management Cleaning · Henderson, NV"
        heading="Property Management Cleaning in Henderson, NV"
        sub={`Henderson's master-planned communities set a higher property presentation standard than most rental markets. Final Touch provides unit turn cleaning, HOA common area programs, and portfolio-wide cleaning for property managers and landlords across Henderson and ${SITE.serviceArea.county}. Call ${SITE.phone.display} to request a free walkthrough and estimate.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/industries/property-management-cleaning-henderson-nv-hero-image.webp',
          alt: 'Property management cleaning in Henderson, NV by Final Touch.',
        }}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Property management cleaning in Henderson covers unit turns in master-planned community
            rental properties, HOA common area maintenance programs, and thorough first-occupancy
            cleans for new rental units in active communities like Cadence and Inspirada. Final Touch
            provides{' '}
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
            for unit turns in Green Valley, Anthem, Green Valley Ranch, and across Henderson, as well
            as{' '}
            <Link
              href="/services/deep-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              deep cleaning
            </Link>{' '}
            for units resetting after long-term tenancies. Property management companies, Henderson
            landlords, HOA building managers, and new-construction rental operators work with Final
            Touch for consistent, owner-led cleaning across their Henderson portfolio. Call{' '}
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
            to discuss your property.
          </p>
        </div>
      </section>

      {/* 3. Who we serve */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who we serve"
            heading="Property managers, landlords, and HOA managers across Henderson."
            sub="Henderson's master-planned community character shapes the property management market in ways that are distinct from Las Vegas and North Las Vegas."
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
            sub="Every unit turn addresses the surfaces a new Henderson tenant will inspect on move-in day. Scope is confirmed per property before the program begins."
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
            Scope is confirmed during the initial walkthrough. If your Henderson property has specific
            requirements or your tenants leave specific conditions, note them when you schedule and we
            will address them.
          </p>
        </div>
      </section>

      {/* 5. Henderson PM scope expansion */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Beyond the unit"
            heading="What a Henderson property management program covers beyond the unit turn."
            sub="Unit turns are the most frequent need. Henderson's HOA-governed communities and active new-construction areas add two more dimensions to a complete property management cleaning program."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {pmScopeExpansion.map(({ heading, body }) => (
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

      {/* 6. What makes Henderson PM cleaning distinct */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Henderson vs other markets"
            heading="What makes Henderson property management cleaning distinct."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {distinctionCards.map(({ heading, body }, i) => (
              <div
                key={heading}
                className="rounded-[14px] border border-border-subtle bg-light-gray p-6"
              >
                <h3 className="font-display text-lg font-semibold text-brand-black">{heading}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {i === 2 ? (
                    <>
                      {body.split('move-out cleaning in Henderson page')[0]}
                      <Link
                        href="/services/move-out-cleaning/henderson"
                        className="text-brand-blue font-semibold hover:underline"
                      >
                        move-out cleaning in Henderson page
                      </Link>
                      {body.split('move-out cleaning in Henderson page')[1]}
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
            heading="Property management cleaning across Henderson and Clark County."
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
            heading="Services Final Touch provides for Henderson property managers."
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
        heading="Frequently asked questions about property management cleaning in Henderson."
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
        heading="Ready for cleaning that meets Henderson's community standard?"
        sub={`Request a free walkthrough and estimate. Final Touch serves property managers and landlords across Henderson and ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
