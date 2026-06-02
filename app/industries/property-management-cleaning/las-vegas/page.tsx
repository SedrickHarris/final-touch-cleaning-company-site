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
  title: 'Property Management Cleaning in Las Vegas, NV | Final Touch',
  description:
    'Final Touch provides unit turn cleaning, common area programs, and portfolio cleaning for property managers across Las Vegas and Clark County, NV. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/industries/property-management-cleaning/las-vegas`,
  },
};

// Audience cards (Section 3)
const audienceCards = [
  {
    title: 'Property management companies',
    body: 'Las Vegas property management companies overseeing residential rental portfolios need a cleaning partner who applies the same standard at every unit turn, in every building, without requiring active supervision on each visit. Final Touch works directly with property managers as a recurring vendor across their full portfolio.',
  },
  {
    title: 'Independent landlords with multiple units',
    body: 'Las Vegas landlords managing between 2 and 50 rental units need reliable unit turn cleaning at scale without the overhead of managing multiple vendors. A single partner with consistent scope and predictable scheduling keeps vacancies short and deposit disputes low.',
  },
  {
    title: 'HOA and residential building managers',
    body: 'Building managers responsible for common areas, lobbies, hallways, laundry rooms, and shared restrooms in multi-unit residential buildings need a recurring maintenance program, not just periodic deep cleans. Final Touch provides scheduled common area cleaning programs for HOA-managed and privately owned residential buildings.',
  },
  {
    title: 'Vacation rental and short-term rental operators',
    body: 'Vacation rental operators in Las Vegas manage frequent guest turnovers that require a higher-frequency, consistent cleaning standard than a standard residential lease cycle. Final Touch provides turnover cleans for short-term rental operators who need the same presentation standard every time.',
  },
];

// Scope checklist (Section 4)
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

// PM-specific scope expansion (Section 5), three positive-scope cards (no exclusions list)
const pmScopeExpansion = [
  {
    heading: 'Common areas and shared building spaces',
    body: 'Unit turn cleaning covers the individual rental unit. Property management cleaning programs go further. Lobbies, hallways, stairwells, laundry rooms, leasing offices, and shared restrooms in multi-unit buildings need their own recurring maintenance schedule to stay in condition between major cleans. Final Touch provides common area programs with frequency and scope confirmed per building at the walkthrough.',
  },
  {
    heading: 'HOA-managed properties and residential building programs',
    body: 'HOA boards and building management companies responsible for residential common areas need a cleaning vendor who understands the recurring nature of the work. Final Touch serves HOA-managed buildings with scheduled programs covering shared spaces at whatever frequency the building requires: daily, weekly, bi-weekly, or monthly depending on foot traffic and HOA standards.',
  },
  {
    heading: 'Portfolio programs for multi-property managers',
    body: 'Property management companies overseeing 10, 50, or more units across multiple Las Vegas addresses benefit from a single vendor applying a documented scope across the entire portfolio. Final Touch works with portfolio managers to confirm scope on a representative sample property, then applies that same standard across every managed unit. One call, one standard, every address.',
  },
];

// Distinction cards (Section 6). Card 0 references the move-out cleaning page;
// the phrase "move-out cleaning page" is rendered as an inline Link at render time.
const distinctionCards = [
  {
    heading: 'Unit turns vs consumer move-out cleans',
    body: `Property managers book unit turns, not move-out cleans. The scope is the same, but the context is different. A unit turn is a recurring operational event in a managed portfolio, not a one-time consumer transaction. Final Touch treats unit turns as the recurring B2B service they are: consistent scope, predictable scheduling, and the same result every time rather than a best-effort single event. See ${SITE.owners}' approach on the move-out cleaning page for the specific scope this covers.`,
  },
  {
    heading: 'Common area programs vs periodic deep cleans',
    body: "Most cleaning companies offer a deep clean for common areas when things get bad enough to require one. A well-run property management program does not wait for that point. Recurring common area cleaning on a fixed schedule maintains the building's presentation standard and reduces the scope and cost of periodic resets. Final Touch builds common area programs around your building's foot traffic and HOA or management standards.",
  },
  {
    heading: 'Portfolio consistency vs per-property variance',
    body: 'A property management company managing 30 units across 10 addresses cannot afford a different standard at each one. Tenant expectations are consistent. Landlord obligations are consistent. The cleaning standard needs to be consistent too. Final Touch confirms scope across a portfolio at the outset and maintains that standard at every address, without the manager having to supervise each visit.',
  },
];

// Service area chips (Section 7)
const serviceAreaChips = [
  { label: 'Las Vegas, NV', href: '/locations/las-vegas' },
  { label: 'Henderson, NV', href: '/locations/henderson' },
  { label: 'North Las Vegas, NV', href: '/locations/north-las-vegas' },
  { label: 'Clark County, NV', href: '/locations/clark-county' },
  { label: 'Move-Out Cleaning', href: '/services/move-out-cleaning' },
  { label: 'Move-In Cleaning', href: '/services/move-in-cleaning' },
  { label: 'Janitorial Services', href: '/services/janitorial-services' },
  { label: 'Property Mgmt Cleaning in Henderson', href: '/industries/property-management-cleaning/henderson' },
  { label: 'Property Mgmt Cleaning in North Las Vegas', href: '/industries/property-management-cleaning/north-las-vegas' },
  { label: 'All Industries', href: '/industries' },
];

// Related service cards (Section 8)
const moveOut = SERVICES.find((s) => s.slug === 'move-out-cleaning')!;
const moveIn = SERVICES.find((s) => s.slug === 'move-in-cleaning')!;
const janitorial = SERVICES.find((s) => s.slug === 'janitorial-services')!;

const relatedServiceCards = [
  { name: moveOut.name, href: moveOut.href, description: moveOut.shortDescription, image: moveOut.image },
  { name: moveIn.name, href: moveIn.href, description: moveIn.shortDescription, image: moveIn.image },
  { name: janitorial.name, href: janitorial.href, description: janitorial.shortDescription, image: janitorial.image },
];

// FAQ array: FAQPage JSON-LD is generated from this same array. No schema-only Q/A.
const faq = [
  {
    q: 'What does property management cleaning include?',
    a: 'Property management cleaning from Final Touch covers three service types: unit turn cleans between tenants (move-out and move-in standard covering inside appliances, bathrooms, all floor surfaces, cabinets, and high-touch areas), common area maintenance programs for lobbies, hallways, laundry rooms, and shared restrooms, and periodic deep cleans for units between long-term tenants. Scope is confirmed per property during a walkthrough before any program begins.',
  },
  {
    q: 'What is the difference between a unit turn clean and a standard move-out clean?',
    a: "They cover the same scope. A unit turn is the industry term property managers use for the clean between one tenant leaving and the next moving in. Final Touch's unit turn scope matches the move-out cleaning standard: inside appliances, bathrooms top to bottom, all floor surfaces, cabinets and drawers, baseboards and ledges, and every surface a new tenant will notice on day one.",
  },
  {
    q: 'Does Final Touch clean HOA common areas and shared building spaces?',
    a: "Yes. Common area cleaning programs for residential buildings, HOA-managed properties, and multi-unit buildings are part of Final Touch's property management scope. This includes lobbies, hallways, stairwells, shared restrooms, laundry rooms, and leasing offices. Frequency and scope are confirmed per building at the walkthrough.",
  },
  {
    q: 'Why does Las Vegas have such high demand for property management cleaning?',
    a: 'Las Vegas has one of the highest renter populations in the Mountain West. The large apartment stock, active lease cycle, and high unit turnover rate create consistent, high-frequency demand for professional cleaning between tenants. Property managers in Las Vegas handle more unit turns per year than equivalent portfolios in most comparable metros, which requires a reliable cleaning partner with genuine capacity.',
  },
  {
    q: 'Which neighborhoods in Las Vegas do you serve for property management cleaning?',
    a: 'Final Touch serves property management clients across all of Las Vegas, including Spring Valley, Sunrise Manor, the city core, Downtown Las Vegas, Centennial Hills, Paradise, and surrounding areas. Service covers the full City of Las Vegas and unincorporated Clark County. Call (702) 444-5077 to confirm coverage for a specific address.',
  },
  {
    q: 'Can Final Touch handle cleaning for multiple rental properties across a portfolio?',
    a: 'Yes. Final Touch works with property management companies overseeing multiple units, buildings, and addresses across Las Vegas and Clark County. A single point of contact, consistent scope, and the same standard at every property are the baseline for any portfolio arrangement. Contact us to discuss your portfolio size and scheduling requirements.',
  },
  {
    q: 'What should I look for in a property management cleaning company in Las Vegas?',
    a: "Look for consistent results across multiple units, reliable scheduling so the vendor shows up when needed, owner involvement rather than subcontractor rotation, and a willingness to confirm scope in writing before starting. Ask whether they have experience with unit turns at Las Vegas's turnover pace and whether they can handle recurring HOA or common-area programs alongside individual unit cleans.",
  },
  {
    q: 'How do I get a quote for property management cleaning in Las Vegas?',
    a: `Call ${SITE.phone.display} or submit a request online. ${SITE.owners} will follow up to schedule a walkthrough of your property or portfolio, confirm scope, and provide a written estimate before any work begins. For property management companies with multiple properties, the walkthrough covers a representative sample so scope and pricing are consistent across the portfolio.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Property Management Cleaning in Las Vegas, NV',
  serviceType: 'Property Management Cleaning',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone.href.replace('tel:', ''),
    email: SITE.email.display,
  },
  areaServed: [
    { '@type': 'City', name: 'Las Vegas', containedInPlace: { '@type': 'State', name: 'Nevada' } },
    { '@type': 'City', name: 'Henderson', containedInPlace: { '@type': 'State', name: 'Nevada' } },
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
      name: 'Property Management Cleaning',
      item: `${SITE.url}/industries/property-management-cleaning/las-vegas`,
    },
  ],
};

export default function PropertyManagementCleaningLasVegasPage() {
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
        eyebrow="Property Management Cleaning · Las Vegas, NV"
        heading="Property Management Cleaning in Las Vegas, NV"
        sub={`Las Vegas has one of the highest rental turnover rates in the Mountain West. Final Touch provides unit turn cleaning, common area programs, and portfolio-wide cleaning for property managers and landlords across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} to request a free walkthrough and estimate.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/industries/property-management-cleaning-las-vegas-nv-hero-image.webp',
          alt: 'Property management cleaning in Las Vegas, NV by Final Touch.',
        }}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Property management cleaning in Las Vegas is the professional cleaning service that keeps
            rental units, common areas, and managed buildings in presentable condition between
            tenants and on a recurring schedule. Final Touch provides{' '}
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
            for unit turns, common area maintenance programs for lobbies and shared spaces, and{' '}
            <Link
              href="/services/janitorial-services"
              className="text-brand-blue font-semibold hover:underline"
            >
              janitorial programs
            </Link>{' '}
            for multi-unit residential buildings across Las Vegas and Clark County. Property managers,
            independent landlords, HOA building managers, and vacation rental operators work with
            Final Touch for consistent, owner-led cleaning across their full portfolio. Call{' '}
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
            heading="Property managers, landlords, and building managers across Las Vegas."
            sub="Las Vegas's large rental market creates high-frequency unit turn demand for a range of property types and management structures."
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
            sub="Every unit turn addresses the surfaces a new tenant will inspect on move-in day. Scope is confirmed per property before the program begins."
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
            Scope is confirmed during the initial walkthrough. If your property has specific
            requirements or your tenants leave specific conditions, note them when you schedule and we
            will address them.
          </p>
        </div>
      </section>

      {/* 5. PM-specific scope expansion */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Beyond the unit"
            heading="What a property management cleaning program covers beyond the unit turn."
            sub="Unit turns are the most frequent need. But a complete property management cleaning program also covers the spaces tenants share and the portfolio as a whole."
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

      {/* 6. What makes PM cleaning distinct */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Property management vs general cleaning"
            heading="What makes property management cleaning different from a standard clean."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {distinctionCards.map(({ heading, body }, i) => (
              <div
                key={heading}
                className="rounded-[14px] border border-border-subtle bg-light-gray p-6"
              >
                <h3 className="font-display text-lg font-semibold text-brand-black">{heading}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {i === 0 ? (
                    <>
                      {body.split('move-out cleaning page')[0]}
                      <Link
                        href="/services/move-out-cleaning/las-vegas"
                        className="text-brand-blue font-semibold hover:underline"
                      >
                        move-out cleaning page
                      </Link>
                      {body.split('move-out cleaning page')[1]}
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
            heading="Property management cleaning across Las Vegas and Clark County."
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
            heading="Services Final Touch provides for property managers."
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
        heading="Frequently asked questions about property management cleaning in Las Vegas."
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
        heading="Ready for consistent cleaning across your Las Vegas portfolio?"
        sub={`Request a free walkthrough and estimate. Final Touch serves property managers and landlords across ${SITE.serviceArea.county}, Nevada.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
