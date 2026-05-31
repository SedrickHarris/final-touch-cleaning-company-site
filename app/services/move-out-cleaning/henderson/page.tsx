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
  title: 'Move-Out Cleaning in Henderson, NV',
  description:
    'Move-out cleaning in Henderson, NV. Final Touch cleans to the standard Henderson landlords expect. Green Valley, Anthem, and beyond. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/move-out-cleaning/henderson`,
  },
  openGraph: {
    title: 'Move-Out Cleaning in Henderson, NV | Final Touch',
    description:
      'Move-out cleaning in Henderson, NV. Final Touch cleans to the standard Henderson landlords expect. Green Valley, Anthem, and beyond. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/move-out-cleaning/henderson`,
  },
};

const faq = [
  {
    q: 'What does move-out cleaning include in Henderson?',
    a: 'Move-out cleaning covers inside cabinets and drawers, appliance interiors (oven, refrigerator, microwave, dishwasher), appliance exteriors and range hood, bathrooms including fixtures, tile, grout, and mirrors, baseboards, window sills, and ledges, light fixtures and ceiling fans, vents and air returns, all floor surfaces, interior windows, and closet interiors. If your landlord has a specific checklist, share it when you book.',
  },
  {
    q: 'Does Final Touch serve Green Valley and Anthem for move-out cleaning?',
    a: `Yes. Final Touch serves move-out cleaning clients throughout Green Valley, Anthem, Green Valley Ranch, and all Henderson neighborhoods. These established communities have a mix of rental and owner-occupied properties, and Final Touch cleans to the standard those landlords and property managers expect. Call ${SITE.phone.display} to schedule.`,
  },
  {
    q: 'Does move-out cleaning help get my deposit back in Henderson?',
    a: 'A professional move-out clean addresses the surfaces Henderson landlords inspect at lease end: inside appliances, bathrooms, baseboards, and floor surfaces. Final Touch cleans to the standard that supports deposit recovery. We cannot guarantee a return, but we clean to the standard that supports it.',
  },
  {
    q: 'Can Henderson landlords book recurring move-out cleans?',
    a: "Yes. Landlords managing rental properties in Henderson's established communities often need recurring turnover cleans as tenants cycle. Final Touch can serve multiple properties for the same landlord or property manager on an ongoing basis. Contact us to discuss a recurring arrangement.",
  },
  {
    q: 'How far in advance should I book move-out cleaning in Henderson?',
    a: 'Book as early as possible once your move-out date is confirmed. Henderson move-out availability is generally more flexible than peak month-end periods in Las Vegas, but early booking is still recommended, especially if you have a firm lease-end deadline.',
  },
  {
    q: 'How much does move-out cleaning cost in Henderson?',
    a: `Cost depends on the size and condition of the unit. Contact Final Touch at ${SITE.phone.display} or request a free quote for a real estimate based on your space.`,
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
  name: 'Move-Out Cleaning',
  serviceType: 'Move-Out Cleaning',
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
  { label: 'Move-Out Cleaning', href: '/services/move-out-cleaning' },
  { label: 'Henderson' },
];

export default function MoveOutCleaningHendersonPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Move-Out Cleaning · Henderson, NV"
        heading="Move-Out Cleaning in Henderson, NV"
        sub={`Henderson's established master-planned communities (Green Valley, Anthem, Green Valley Ranch) have a mix of owner-occupied and rental properties where landlords expect a higher finishing standard at lease-end. Final Touch provides professional move-out cleaning across all Henderson neighborhoods and ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Move-out cleaning in Henderson is a professional end-of-lease clean that addresses
            every surface a landlord inspects: inside appliances, bathrooms, baseboards, floors,
            and all the areas that show an extended tenancy.{' '}
            <Link href="/services/move-out-cleaning" className="text-brand-blue font-semibold hover:underline">
              Final Touch move-out cleaning
            </Link>{' '}
            serves Henderson renters, landlords managing properties in Green Valley and Anthem,
            and property managers overseeing turnover across the city. Call{' '}
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

      {/* 3. Who hires move-out cleaning in Henderson */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires move-out cleaning in Henderson"
            heading="Renters and landlords across Henderson's established communities."
            sub="Henderson's rental market sits within master-planned communities where presentation standards are higher than a typical suburban rental market."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Renters in Green Valley and Anthem',
                body: "Henderson's established communities have a notable mix of rental homes alongside owner-occupied properties. Renters leaving these communities at lease-end need a clean that meets the standard both the landlord and the surrounding community expects.",
              },
              {
                title: 'Landlords in master-planned communities',
                body: 'Henderson landlords managing rental properties in Green Valley, Anthem, and comparable neighborhoods expect a higher finishing standard at turnover than a budget clean delivers. The surrounding community sets the bar. And the clean needs to match it.',
              },
              {
                title: 'Property management companies',
                body: "Henderson's established residential base has an active property management sector. Move-out cleans are a recurring need across managed portfolios; a consistent professional standard on every unit is what property managers require.",
              },
              {
                title: 'Homeowners selling in Henderson',
                body: "Henderson's strong resale market creates demand for pre-listing and pre-handoff cleans. Sellers in master-planned communities want the property to present well for buyers who have high expectations of what a Henderson home should look like.",
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
            sub="A move-out clean addresses the surfaces your Henderson landlord will inspect."
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
            Scope confirmed during booking. If your Henderson landlord has a specific move-out
            checklist, share it when you schedule so we can address every item they will inspect.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Move-out cleaning in Henderson's rental market"
            heading="What makes Henderson move-out cleaning different."
            sub="Henderson's rental market has a specific character that shapes what a professional move-out clean needs to deliver."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'Rental properties within master-planned communities',
                body: "Henderson's rental inventory is largely embedded within established master-planned communities rather than concentrated in high-density apartment corridors. A rental home in Green Valley or Anthem sits next to owner-occupied homes in a community where curb appeal and property condition are consistently maintained. Landlords in these communities expect a move-out clean that reflects those standards.",
              },
              {
                heading: 'Higher landlord finish expectations',
                body: 'Henderson landlords managing properties in established communities tend to expect a more thorough finish at move-out than landlords in purely rental-density markets. Inside appliances, grout lines, baseboards, and vents are areas Henderson landlords commonly inspect, and where a professional clean makes the difference between a full deposit return and a deduction.',
              },
              {
                heading: 'Recurring landlord relationships',
                body: "Because Henderson's rental inventory is spread across established neighborhoods rather than a few large apartment complexes, individual landlords often manage one to three properties. Final Touch works with Henderson landlords on an ongoing basis: same standard at every turnover, no need to find and vet a new cleaner for each vacancy.",
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
              { label: 'Move-Out Cleaning in North Las Vegas, NV', href: '/services/move-out-cleaning/north-las-vegas' },
              { label: 'Move-Out Cleaning in Boulder City, NV', href: '/services/move-out-cleaning/boulder-city' },
              { label: 'Move-Out Cleaning in Clark County, NV', href: '/services/move-out-cleaning/clark-county' },
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
        heading="Move-out cleaning in Henderson: common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/move-out-cleaning" className="font-semibold text-brand-blue hover:underline">
            ← Move-out cleaning services
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
        heading="Need move-out cleaning in Henderson?"
        sub={`Free quotes for move-out cleaning across Henderson and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
