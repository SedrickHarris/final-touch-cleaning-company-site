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

export const metadata: Metadata = {
  title: 'Deep Cleaning in Henderson, NV | Final Touch Cleaning',
  description:
    'Deep cleaning service in Henderson, NV. Final Touch cleans luxury homes, master-planned communities, and new builds. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/deep-cleaning/henderson`,
  },
  openGraph: {
    title: 'Deep Cleaning in Henderson, NV | Final Touch Cleaning',
    description:
      'Deep cleaning service in Henderson, NV. Final Touch cleans luxury homes, master-planned communities, and new builds. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/deep-cleaning/henderson`,
  },
};

const faq = [
  {
    q: 'What does deep cleaning include in Henderson?',
    a: 'A deep clean covers inside appliances (oven, refrigerator, microwave, dishwasher), baseboards, window sills, grout lines and tile, vents and air returns, inside cabinets and shelving, behind and under accessible furniture, light fixtures and ceiling fans, bathroom fixtures and mirrors, all floor surfaces, and high-touch surface sanitizing throughout. Specific scope is confirmed before the clean begins.',
  },
  {
    q: 'Is deep cleaning different for luxury homes in Henderson?',
    a: 'Yes. Homes in Henderson communities like MacDonald Highlands, Seven Hills, and comparable neighborhoods often feature natural stone, marble, polished concrete, and custom cabinetry that require surface-appropriate cleaning methods. A deep clean in a Henderson luxury home involves more square footage, more detail surfaces, and material-specific care that differs from a standard residential job. Final Touch accounts for finish materials during the scope confirmation.',
  },
  {
    q: 'How often should Henderson homes be deep cleaned?',
    a: "Henderson shares the Mojave Desert climate of the broader Las Vegas Valley, which means dust accumulates faster indoors than in wetter climates, particularly near windows, HVAC returns, and in Henderson's master-planned communities with active landscaping. Most Henderson homeowners schedule deep cleans seasonally or two to four times per year. Contact Final Touch for a recommendation based on your home.",
  },
  {
    q: 'Does Final Touch serve all Henderson neighborhoods for deep cleaning?',
    a: `Yes. Final Touch serves all Henderson neighborhoods including Green Valley, Green Valley Ranch, Anthem, MacDonald Highlands, Seven Hills, Cadence, Inspirada, Lake Las Vegas, and surrounding areas. Call ${SITE.phone.display} to confirm coverage for your address.`,
  },
  {
    q: 'How much does deep cleaning cost in Henderson?',
    a: `Cost depends on the size, condition, and specific scope of the space. Henderson luxury homes with larger floor plans and premium finish materials typically require more time than a standard residential deep clean. Contact Final Touch at ${SITE.phone.display} or request a free quote for a real estimate based on your home.`,
  },
  {
    q: 'Can deep cleaning help with construction dust in new Henderson homes?',
    a: "Yes. Active construction phases in Henderson communities like Cadence and Inspirada mean even completed homes can accumulate construction-related dust from nearby build activity. Desert wind carries fine particulate from adjacent framing and grading work into settled homes through HVAC systems and door frames. A periodic deep clean addresses this buildup (particularly in vents, air returns, and window sills) for Henderson residents living near active development.",
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
  name: 'Deep Cleaning',
  serviceType: 'Deep Cleaning',
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

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Deep Cleaning', item: `${SITE.url}/services/deep-cleaning` },
    { '@type': 'ListItem', position: 4, name: 'Henderson', item: `${SITE.url}/services/deep-cleaning/henderson` },
  ],
};

export default function DeepCleaningHendersonPage() {
  return (
    <>
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Deep Cleaning · Henderson, NV"
        heading="Deep Cleaning in Henderson, NV"
        sub={`Henderson's master-planned communities, luxury hillside homes, and active new-construction neighborhoods all create specific deep cleaning needs. Final Touch provides thorough deep cleaning across all Henderson neighborhoods (from Green Valley to MacDonald Highlands to Cadence) and all of ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Deep cleaning in Henderson is a thorough reset that goes well beyond routine
            maintenance, covering inside appliances, grout lines, vents, baseboards, inside
            cabinets, and every detail surface that accumulates over time.{' '}
            <Link href="/services/deep-cleaning" className="text-brand-blue font-semibold hover:underline">
              Final Touch deep cleaning
            </Link>{' '}
            serves Henderson homeowners in master-planned communities, luxury properties in the
            eastern foothills, and new-construction buyers in active-development neighborhoods.
            Scope is confirmed before the clean begins. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to schedule.
          </p>
        </div>
      </section>

      {/* 3. Who hires deep cleaning in Henderson */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires deep cleaning in Henderson"
            heading="Henderson homeowners and property owners with higher standards."
            sub="Henderson's housing character (from luxury hillside estates to active new-build communities) creates deep cleaning demand that differs from a typical suburban market."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Luxury and custom home owners',
                body: 'MacDonald Highlands, Seven Hills, and comparable Henderson communities feature larger homes with premium finish materials: natural stone, marble, polished concrete, custom millwork. A deep clean here requires surface-appropriate methods and more time than a standard residential job.',
              },
              {
                title: 'Master-planned community homeowners',
                body: 'Residents of Green Valley, Anthem, Green Valley Ranch, and similar communities maintain presentation standards that match the surrounding environment. Periodic deep cleans are a standard part of upkeep for these homeowners, not an occasional extra.',
              },
              {
                title: 'New-construction buyers in Cadence and Inspirada',
                body: 'Both Cadence and Inspirada are in active build phases. Builder handoffs leave drywall dust, adhesive residue, and construction particulate. A deep clean after move-in addresses the buildup that accumulates from nearby construction activity in these still-developing communities.',
              },
              {
                title: 'Rental property owners resetting between tenants',
                body: 'Green Valley and Anthem have a mix of owner-occupied and rental properties. A deep clean between long-term tenants goes beyond move-out scope, resetting grout, inside appliances, and accumulated buildup from an extended tenancy.',
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
            sub="A deep clean goes into the areas a routine maintenance clean does not reach. Final Touch addresses every detail surface."
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
            Scope is confirmed before the clean begins. For Henderson luxury homes with natural
            stone, marble, or custom surfaces, let us know during booking so we can confirm
            appropriate care for those materials.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why deep cleaning matters in Henderson"
            heading="Three Henderson-specific factors that drive deep cleaning demand."
            sub="Henderson is not a generic suburban market. Its housing mix, development activity, and climate create specific reasons to schedule a professional deep clean."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'Premium finish materials in luxury homes',
                body: "Henderson's eastern hillside communities (MacDonald Highlands, Seven Hills) have a concentration of custom and semi-custom homes with premium interior finishes. Natural stone countertops, marble tile, polished concrete floors, and custom cabinetry are common. These surfaces need specific care: the wrong cleaning product on natural stone causes etching; polished concrete needs different treatment than ceramic tile. A deep clean in Henderson luxury homes accounts for what the surfaces are made of.",
              },
              {
                heading: 'Construction activity in active communities',
                body: 'Cadence and Inspirada are both in active build phases. In communities where multiple builders are still framing and finishing sections of the development, fine dust and debris from construction sites carry through the air and settle in completed homes nearby. Residents in finished sections of these communities deal with a recurring dust load that calls for periodic deep cleaning beyond standard maintenance.',
              },
              {
                heading: 'Master-planned community standards',
                body: "Henderson's established master-planned communities (Green Valley, Green Valley Ranch, Anthem) maintain high standards for property presentation. Homeowners in these communities tend to prioritize maintenance that matches the surrounding environment. A periodic deep clean is a natural part of that maintenance cycle, addressing the buildup that accumulates between routine service visits.",
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
              { label: 'Deep Cleaning in North Las Vegas, NV', href: '/services/deep-cleaning/north-las-vegas' },
              { label: 'Deep Cleaning in Boulder City, NV', href: '/services/deep-cleaning/boulder-city' },
              { label: 'Deep Cleaning in Clark County, NV', href: '/services/deep-cleaning/clark-county' },
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
        heading="Deep cleaning in Henderson: common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/deep-cleaning" className="font-semibold text-brand-blue hover:underline">
            ← Deep cleaning services
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
        heading="Ready for a deep clean in Henderson?"
        sub={`Free quotes for deep cleaning across Henderson and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    </>
  );
}
