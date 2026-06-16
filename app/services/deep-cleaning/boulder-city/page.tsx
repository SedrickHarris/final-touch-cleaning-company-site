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
  title: 'Commercial Deep Cleaning in Boulder City, NV',
  description:
    'Commercial deep cleaning for rental properties and vacation rentals in Boulder City, NV. Property managers and landlords near Lake Mead. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/deep-cleaning/boulder-city`,
  },
  openGraph: {
    title: 'Commercial Deep Cleaning in Boulder City, NV | Final Touch Cleaning',
    description:
      'Commercial deep cleaning for rental properties and vacation rentals in Boulder City, NV. Property managers and landlords near Lake Mead. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/deep-cleaning/boulder-city`,
  },
};

const faq = [
  {
    q: 'What does deep cleaning include in Boulder City?',
    a: 'A deep clean covers inside appliances (oven, refrigerator, microwave, dishwasher), baseboards, window sills, grout lines and tile, vents and air returns, inside cabinets and shelving, behind and under accessible furniture, light fixtures and ceiling fans, bathroom fixtures and mirrors, all floor surfaces, and high-touch surface sanitizing throughout. Specific scope is confirmed before the clean begins.',
  },
  {
    q: 'Is deep cleaning different for older Boulder City homes?',
    a: 'Yes. Boulder City has a housing stock that includes many older, well-maintained properties with original fixtures, built-in cabinetry, and surfaces that have been in place for decades. A deep clean in an older Boulder City home addresses what accumulates over years of occupancy: inside original cabinetry, around period fixtures, in grout lines and tile surfaces that have been in place for decades. The approach requires care and attention to detail rather than speed. Scope is confirmed before the clean begins.',
  },
  {
    q: 'How often should Boulder City properties be deep cleaned?',
    a: "Boulder City's Mojave Desert location means dust accumulates faster indoors than in wetter climates. In an owner-occupied community with older housing stock, most Boulder City property owners schedule deep cleans seasonally or once to twice per year as a maintenance practice, not driven by rental turnover or construction activity, but by the desert climate and the care they take in their established properties. Contact Final Touch for a recommendation based on your property.",
  },
  {
    q: 'Does Final Touch serve Boulder City for deep cleaning?',
    a: `Yes. Final Touch serves Boulder City as part of its ${SITE.serviceArea.county} service area. Boulder City is a regular part of the service territory, not a special-case exception or an extra trip. Call ${SITE.phone.display} to confirm scheduling for your address.`,
  },
  {
    q: 'How much does deep cleaning cost in Boulder City?',
    a: `Cost depends on the size and condition of the space. Contact Final Touch at ${SITE.phone.display} or request a free quote for a real estimate based on your property.`,
  },
  {
    q: 'Can deep cleaning help with Lake Mead-area vacation rental properties in Boulder City?',
    a: "Yes. Boulder City's proximity to Lake Mead National Recreation Area and Hoover Dam supports a small vacation and short-term rental segment. Periodic deep cleans between extended-stay or seasonal bookings keep properties at a guest-ready standard beyond what standard turnover cleaning achieves. Scope and scheduling (including between peak visitor seasons) are confirmed during booking.",
  },
];

const relatedServices = [
  'move-in-cleaning',
  'move-out-cleaning',
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
  name: 'Commercial Deep Cleaning',
  serviceType: 'Commercial Deep Cleaning',
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
  { label: 'Deep Cleaning', href: '/services/deep-cleaning' },
  { label: 'Boulder City' },
];

export default function DeepCleaningBoulderCityPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Deep Cleaning · Boulder City, NV"
        heading="Commercial Deep Cleaning in Boulder City, NV"
        sub={`Boulder City is a small, owner-occupied community with an established housing stock, older properties with character that benefit from a detail-focused deep clean. Final Touch serves Boulder City property owners, metro relocators, and vacation rental owners across Boulder City and ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Deep cleaning in Boulder City is a thorough reset that goes well beyond routine
            maintenance, covering inside appliances, grout lines, vents, baseboards, inside
            cabinets, and every detail surface that accumulates over time in an established home.{' '}
            <Link href="/services/deep-cleaning" className="text-brand-blue font-semibold hover:underline">
              Final Touch deep cleaning
            </Link>{' '}
            serves Boulder City&apos;s property owners in older established properties, buyers relocating
            from the Las Vegas metro, and vacation rental owners near Lake Mead. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to schedule.
          </p>
        </div>
      </section>

      {/* 3. Who hires deep cleaning in Boulder City */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires deep cleaning in Boulder City"
            heading="Established property owners, relocating buyers, and Lake Mead vacation rental owners."
            sub="Boulder City deep cleaning demand is driven by an older housing stock and an owner-occupied community character distinct from every other city in the Las Vegas Valley."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Established property owners in older buildings',
                body: 'Boulder City has many older, well-maintained properties with distinctive architectural character: original fixtures, built-in cabinetry, and surfaces that have been in place for decades. These property owners take pride in their buildings and schedule periodic deep cleans as part of that care.',
              },
              {
                title: 'Metro relocators settling in',
                body: 'Buyers from Las Vegas and Henderson moving to Boulder City for a quieter community often want a thorough clean before settling into a home that has had previous occupants or sat vacant during the sale process.',
              },
              {
                title: 'Lake Mead vacation rental owners',
                body: "Boulder City's proximity to Lake Mead National Recreation Area supports a small vacation rental market. Periodic deep cleans between seasonal bookings keep properties at a consistent guest-ready standard.",
              },
              {
                title: 'Long-term property owners doing seasonal resets',
                body: "Boulder City's largely owner-occupied community means many deep clean clients are long-term property owners doing a seasonal reset, a thorough clean that addresses the buildup from months of desert dust and daily use.",
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
            heading="What a deep clean covers."
            sub="A deep clean goes into the areas a routine maintenance clean does not reach."
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
            Scope confirmed before the clean begins. For older Boulder City homes with original
            fixtures or built-in cabinetry, let us know during booking so we can confirm the
            right approach for those surfaces.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why deep cleaning matters in Boulder City"
            heading="Three Boulder City factors that shape deep cleaning demand."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'Older homes need a detail-focused approach',
                body: "Boulder City's housing stock is older than most of the Las Vegas Valley. Many homes have original fixtures, built-in cabinetry, and surfaces that have accumulated decades of dust, cooking residue, and everyday buildup in places that routine maintenance cleaning never fully reaches. A deep clean in an older Boulder City home requires care and attention to what the surfaces are and how they should be treated, not the same approach as cleaning a new Henderson build.",
              },
              {
                heading: 'An owner-occupied community with high standards',
                body: 'Boulder City is predominantly owner-occupied. Residents own their homes for longer stretches than renters elsewhere in the valley and maintain them with pride. Periodic deep cleans are a natural maintenance practice in a community where property condition matters to the owners themselves, not just to landlords or buyers.',
              },
              {
                heading: 'Lake Mead proximity and vacation rental demand',
                body: "Boulder City's location at the gateway to Lake Mead National Recreation Area and Hoover Dam creates a small but distinct vacation rental demand. Property owners renting seasonally to visitors need a periodic deep clean that keeps the property at a guest-ready standard, particularly after longer bookings or between peak visitor seasons.",
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
              { label: 'Deep Cleaning in Las Vegas, NV', href: '/services/deep-cleaning/las-vegas' },
              { label: 'Deep Cleaning in Henderson, NV', href: '/services/deep-cleaning/henderson' },
              { label: 'Deep Cleaning in North Las Vegas, NV', href: '/services/deep-cleaning/north-las-vegas' },
              { label: 'Deep Cleaning in Clark County, NV', href: '/services/deep-cleaning/clark-county' },
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
        heading="Deep cleaning in Boulder City: common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/deep-cleaning" className="font-semibold text-brand-blue hover:underline">
            ← Deep cleaning services
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
        heading="Ready for a deep clean in Boulder City?"
        sub={`Free quotes for deep cleaning across Boulder City and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
