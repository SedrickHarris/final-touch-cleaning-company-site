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
  title: 'Commercial Move-Out Cleaning in Boulder City, NV',
  description:
    'Commercial move-out cleaning for property management and rental turnovers in Boulder City, NV. Serving landlords and homeowners selling. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/move-out-cleaning/boulder-city`,
  },
  openGraph: {
    title: 'Commercial Move-Out Cleaning in Boulder City, NV | Final Touch',
    description:
      'Commercial move-out cleaning for property management and rental turnovers in Boulder City, NV. Serving landlords and homeowners selling. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/move-out-cleaning/boulder-city`,
  },
};

const faq = [
  {
    q: 'What does move-out cleaning include in Boulder City?',
    a: 'Move-out cleaning covers inside cabinets and drawers, appliance interiors (oven, refrigerator, microwave, dishwasher), appliance exteriors and range hood, bathrooms including fixtures, tile, grout, and mirrors, baseboards, window sills, and ledges, light fixtures and ceiling fans, vents and air returns, all floor surfaces, interior windows, and closet interiors. If your landlord has a specific checklist, share it when you book.',
  },
  {
    q: 'Is the Boulder City rental market different from Las Vegas for move-out cleaning?',
    a: "Yes. Boulder City's rental market is much smaller and tighter than Las Vegas or North Las Vegas. In a small community where landlords often know their tenants personally and word of mouth carries weight, property condition matters beyond just the deposit. A thorough professional clean is as much about maintaining the standard a close-knit community expects as it is about deposit recovery.",
  },
  {
    q: 'Does Final Touch serve Boulder City for move-out cleaning?',
    a: `Yes. Final Touch serves Boulder City as part of its ${SITE.serviceArea.county} service area. Boulder City is a regular part of the service territory, not a special case or an extra trip. Call ${SITE.phone.display} to schedule.`,
  },
  {
    q: 'Does move-out cleaning help get my deposit back in Boulder City?',
    a: 'A professional move-out clean addresses the surfaces Boulder City landlords inspect at lease end: inside appliances, bathrooms, baseboards, and floor surfaces. Final Touch cleans to the standard that supports deposit recovery. We cannot guarantee a return, but we clean to the standard that supports it.',
  },
  {
    q: 'Can landlords in Boulder City book recurring move-out cleans?',
    a: 'Yes. Boulder City landlords managing rental properties can arrange recurring turnover cleaning with Final Touch. Given the smaller rental pool, this is often a longer-term relationship, the same professional standard applied every time a property turns over. Contact us to discuss an arrangement.',
  },
  {
    q: 'How much does move-out cleaning cost in Boulder City?',
    a: `Cost depends on the size and condition of the unit. Contact Final Touch at ${SITE.phone.display} or request a free quote for a real estimate.`,
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
  { label: 'Move-Out Cleaning', href: '/services/move-out-cleaning' },
  { label: 'Boulder City' },
];

export default function MoveOutCleaningBoulderCityPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Move-Out Cleaning · Boulder City, NV"
        heading="Commercial Move-Out Cleaning in Boulder City, NV"
        sub={`Boulder City has a small, tight rental market where property condition carries community reputational weight. Final Touch provides professional move-out cleaning for Boulder City renters, landlords, and homeowners selling, cleaning to the standard a close-knit community expects.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Move-out cleaning in Boulder City is a professional end-of-lease clean addressing
            every surface a landlord inspects: inside appliances, bathrooms, baseboards, and
            floors.{' '}
            <Link href="/services/move-out-cleaning" className="text-brand-blue font-semibold hover:underline">
              Final Touch move-out cleaning
            </Link>{' '}
            serves Boulder City renters preparing for deposit recovery, landlords in the city&apos;s
            smaller rental pool, and homeowners preparing for sale. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to schedule.
          </p>
        </div>
      </section>

      {/* 3. Who hires move-out cleaning in Boulder City */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires move-out cleaning in Boulder City"
            heading="Renters, landlords, and homeowners in a close-knit community."
            sub="Boulder City's rental market is a different environment from the high-density metro markets in Las Vegas and North Las Vegas."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: "Renters in Boulder City's rental pool",
                body: 'Boulder City has a limited rental inventory compared to the broader valley. Renters leaving at lease-end want a clean that meets the standard in a community where landlords know their tenants and word of mouth carries weight.',
              },
              {
                title: 'Landlords in a tight community market',
                body: 'Boulder City landlords often manage one or two properties personally. In a small community, property condition is noticed. A professional move-out clean is part of maintaining the standard their property and neighborhood represents.',
              },
              {
                title: 'Homeowners selling established properties',
                body: "Boulder City's established homeowner base generates pre-listing and pre-handoff cleaning demand. Properties that have been occupied for decades benefit from a thorough end-of-occupancy clean before being handed to new owners.",
              },
              {
                title: 'Metro movers returning to Las Vegas',
                body: 'People who experienced small-town Boulder City living and are returning to Las Vegas or Henderson at lease-end often hire a move-out clean to ensure a clean handoff and deposit recovery before leaving.',
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
            sub="A move-out clean addresses the surfaces Boulder City landlords will inspect."
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
            Scope confirmed during booking. If your Boulder City landlord has a specific checklist,
            share it when you schedule and we will address every item they inspect.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Move-out cleaning in Boulder City"
            heading="Why Boulder City's rental market is different."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'A small, tight rental market',
                body: "Boulder City's rental inventory is a fraction of what Las Vegas or North Las Vegas has. There are no large apartment complexes, no high-density rental corridors, and few absentee landlords managing dozens of units. The rental market is mostly individual landlords managing one or two properties, people who are part of the community and care about how their properties are maintained.",
              },
              {
                heading: 'Community reputation matters',
                body: 'In a small city like Boulder City, word of mouth carries more weight than it does in anonymous metro rental markets. A landlord whose property is consistently well-maintained (and who returns deposits fairly) develops a reputation in the community. A professional move-out clean is part of maintaining that reputation, for both landlords and departing tenants.',
              },
              {
                heading: 'Older homes may show extended occupancy',
                body: "Boulder City's housing stock includes many older properties. A tenant who has occupied an older Boulder City home for several years leaves behind a level of buildup (in original cabinetry, in grout lines, in surfaces that routine cleaning passes over) that requires a thorough professional clean to fully address at move-out.",
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
            sub="Final Touch provides seven cleaning services across Boulder City and the Las Vegas Valley."
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
              { label: 'Move-Out Cleaning in North Las Vegas, NV', href: '/services/move-out-cleaning/north-las-vegas' },
              { label: 'Move-Out Cleaning in Clark County, NV', href: '/services/move-out-cleaning/clark-county' },
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
        heading="Move-out cleaning in Boulder City: common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/move-out-cleaning" className="font-semibold text-brand-blue hover:underline">
            ← Move-out cleaning services
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
        heading="Need move-out cleaning in Boulder City?"
        sub={`Free quotes for move-out cleaning across Boulder City and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
