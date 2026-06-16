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
  title: 'Commercial Deep Cleaning in Las Vegas, NV',
  description:
    'Commercial deep cleaning for offices, rentals, and managed units in Las Vegas, NV. Inside appliances, grout, vents, and detail surfaces. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/deep-cleaning/las-vegas`,
  },
  openGraph: {
    title: 'Commercial Deep Cleaning in Las Vegas, NV | Final Touch Cleaning',
    description:
      'Commercial deep cleaning for offices, rentals, and managed units in Las Vegas, NV. Inside appliances, grout, vents, and detail surfaces. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/deep-cleaning/las-vegas`,
  },
};

const faq = [
  {
    q: 'What does deep cleaning include in Las Vegas?',
    a: 'A deep clean covers inside appliances (oven, refrigerator, microwave, dishwasher), baseboards, window sills, grout lines and tile, vents and air returns, inside cabinets and shelving, behind and under accessible furniture, light fixtures and ceiling fans, all floor surfaces, and high-touch surface sanitizing throughout. Specific scope is confirmed before the clean begins.',
  },
  {
    q: 'How often should Las Vegas properties and commercial spaces be deep cleaned?',
    a: 'Las Vegas sits in the Mojave Desert, which means fine-particle dust accumulates indoors faster than in wetter climates. Property managers, commercial operators, and rental property owners in Las Vegas typically schedule deep cleans seasonally or two to four times per year. The right frequency depends on the space, how it is used, and the standard required. Contact Final Touch for a recommendation based on your property or commercial space.',
  },
  {
    q: 'How much does deep cleaning cost in Las Vegas?',
    a: `Price depends on the size, condition, and specific scope of the space. Contact Final Touch at ${SITE.phone.display} or request a free quote online for a real estimate based on your commercial space or rental property.`,
  },
  {
    q: 'Does Final Touch serve all parts of Las Vegas?',
    a: `Yes. Final Touch serves Las Vegas and all of ${SITE.serviceArea.county}, including Summerlin, the south valley, Centennial Hills, Spring Valley, and surrounding areas. Call ${SITE.phone.display} to confirm coverage for your specific address.`,
  },
  {
    q: 'What is the difference between deep cleaning and regular cleaning in Las Vegas?',
    a: 'Regular maintenance cleaning covers routine surfaces on a set schedule. A deep clean adds inside appliances, grout lines, behind furniture, vents, inside cabinets, and detail surfaces that standard cleaning does not reach. Property managers, commercial operators, and rental owners in Las Vegas use a deep clean as a periodic reset on top of routine service.',
  },
  {
    q: 'Can deep cleaning help with Las Vegas vacation rental properties?',
    a: 'Yes. Vacation rental and short-term rental owners in Las Vegas use periodic deep cleans to keep properties at a consistent guest-ready standard beyond what standard turnover cleaning achieves. Scope and scheduling (including between extended-stay bookings or at seasonal resets) are confirmed during booking.',
  },
];

// Related services: ordered by Las Vegas local demand relevance for deep cleaning
const relatedServices = [
  'move-out-cleaning',
  'post-construction-cleanup',
  'move-in-cleaning',
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
  name: 'Commercial Deep Cleaning',
  serviceType: 'Commercial Deep Cleaning',
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

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Deep Cleaning', href: '/services/deep-cleaning' },
  { label: 'Las Vegas' },
];

export default function DeepCleaningLasVegasPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Deep Cleaning · Las Vegas, NV"
        heading="Commercial Deep Cleaning in Las Vegas, NV"
        sub={`Las Vegas commercial spaces, rental properties, and businesses accumulate dust and buildup faster than most cities. Final Touch provides a thorough deep clean (inside appliances, grout, vents, and every detail surface) for property managers, commercial tenants, vacation rental operators, and renters across Las Vegas and ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Deep cleaning in Las Vegas is a thorough reset that goes well beyond routine maintenance.{' '}
            <Link
              href="/services/deep-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              Final Touch deep cleaning
            </Link>{' '}
            covers inside appliances, grout lines, vents and air returns, inside cabinets, behind
            furniture, baseboards, light fixtures, and all floor surfaces, the areas that collect
            Mojave desert dust and buildup over time. Scope is confirmed before the clean begins.
            To schedule or request a quote, call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>
            .
          </p>
        </div>
      </section>

      {/* 3. Who hires deep cleaning in Las Vegas */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires deep cleaning in Las Vegas"
            heading="Property managers, commercial tenants, and rental operators who need a real reset."
            sub="The city's desert climate, active rental market, and vacation rental economy create specific reasons for property managers, commercial operators, and rental owners to schedule a deep clean beyond what routine maintenance covers."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Vacation and short-term rental owners',
                body: 'Las Vegas has a significant vacation rental market. Periodic deep cleans between short-term or extended-stay bookings keep properties at a guest-ready standard that standard turnover cleaning alone does not achieve.',
              },
              {
                title: 'Property managers and landlords managing desert dust',
                body: 'The Mojave Desert location means fine-particle dust accumulates on surfaces faster than in wetter climates. A periodic deep clean addresses the buildup that collects near windows, HVAC returns, and on horizontal surfaces between regular service visits, whether in a rental unit, a commercial suite, or a managed property.',
              },
              {
                title: 'Renters doing a seasonal reset',
                body: "Las Vegas's large renter population uses deep cleans not just at move-out but mid-tenancy, a full reset after months of buildup, especially heading into or out of the extreme summer heat season.",
              },
              {
                title: 'Business owners with commercial spaces',
                body: 'Breakrooms, shared offices, and commercial interiors in Las Vegas benefit from periodic deep cleaning alongside routine janitorial. The same dust load that affects homes affects commercial interiors.',
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
            heading="What a deep clean covers."
            sub="A deep clean goes into the areas a routine maintenance clean does not reach. These are the surfaces Final Touch addresses."
          />
          <ul className="mt-8 space-y-3">
            {[
              'Inside appliances: oven, refrigerator, microwave, dishwasher',
              'Baseboards, window sills, and ledges',
              'Vents, air returns, and ceiling fans',
              'Inside cabinets, drawers, and shelving',
              'Behind and under furniture (accessible areas)',
              'Grout lines and tile surfaces',
              'Light fixtures and switch plate surrounds',
              'Bathroom fixtures, tile, and mirrors',
              'All floor surfaces: deep vacuum and mop',
              'High-touch surface sanitizing throughout',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Scope is confirmed before the clean begins. If you have specific priorities or areas of
            concern (including hard-water buildup common in Las Vegas tap water) let us know
            during booking.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why deep cleaning matters in Las Vegas"
            heading="The desert climate creates real cleaning demands."
            sub="Las Vegas is not a typical cleaning market. Three factors make periodic deep cleaning more practically necessary here than in most cities."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'Mojave desert dust load',
                body: 'Fine-particle Mojave desert dust infiltrates homes and businesses faster than in wetter climates. Surfaces near windows, doors, and HVAC returns collect particulate continuously. A deep clean removes the accumulation that routine service passes over.',
              },
              {
                heading: 'Extreme summer heat and dry air',
                body: 'Las Vegas summers accelerate wear on surfaces and increase the frequency at which spaces feel overdue for a thorough reset. The combination of heat, dry air, and dust creates conditions where a seasonal deep clean is a practical maintenance decision, not just aesthetic.',
              },
              {
                heading: 'Hard water mineral deposits',
                body: "Las Vegas has hard water. Mineral deposits build up on faucets, shower tile, glass, and fixture surfaces over time. A deep clean addresses these deposits in bathrooms and kitchens, areas that standard maintenance cleaning doesn't fully reach.",
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
            sub="Final Touch provides seven cleaning services across Las Vegas and the Las Vegas Valley."
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

      {/* 7. Related cities for deep cleaning */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brand-black tracking-tight">
            Deep cleaning in other cities
          </h2>
          <p className="mt-3 text-base text-muted">
            Final Touch provides deep cleaning across{' '}
            <Link href={ROUTES.locations} className="text-brand-blue font-semibold hover:underline">
              all of {SITE.serviceArea.county}
            </Link>
            .
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              { label: 'Deep Cleaning in Henderson, NV', href: '/services/deep-cleaning/henderson' },
              { label: 'Deep Cleaning in North Las Vegas, NV', href: '/services/deep-cleaning/north-las-vegas' },
              { label: 'Deep Cleaning in Boulder City, NV', href: '/services/deep-cleaning/boulder-city' },
              { label: 'Deep Cleaning in Clark County, NV', href: '/services/deep-cleaning/clark-county' },
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
        heading="Deep cleaning in Las Vegas: common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/deep-cleaning" className="font-semibold text-brand-blue hover:underline">
            ← Deep cleaning services
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
        heading="Ready for a deep clean in Las Vegas?"
        sub={`Free quotes for deep cleaning across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
