import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import SectionHeader from '@/components/shared/SectionHeader';
import Breadcrumb from '@/components/shared/Breadcrumb';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'Spring Cleaning Services in Las Vegas, NV',
  description: `Spring cleaning services in Las Vegas, NV for commercial properties, offices, and managed units. Post-winter deep reset. Call ${SITE.phone.display}.`,
  alternates: {
    canonical: '/seasonal/spring-cleaning-las-vegas',
  },
  openGraph: {
    title: 'Spring Cleaning Services in Las Vegas, NV | Final Touch',
    description: `Spring cleaning services in Las Vegas, NV for commercial properties, offices, and managed units. Post-winter deep reset. Call ${SITE.phone.display}.`,
    type: 'website',
    url: `${SITE.url}/seasonal/spring-cleaning-las-vegas`,
  },
};

const faq = [
  {
    q: 'What does spring cleaning include for a Las Vegas commercial property?',
    a: `Spring cleaning for a Las Vegas commercial property covers the areas that a standard recurring clean does not address throughout the year: baseboards, door frames, vents, blinds, interior glass, deep floor care, and surface buildup that accumulates over the winter months. Scope is confirmed per property during the initial walkthrough. Call ${SITE.phone.display} to discuss your space.`,
  },
  {
    q: 'Why does spring cleaning matter in Las Vegas specifically?',
    a: 'Las Vegas winters are mild but still generate dust accumulation in areas that see less foot traffic during cooler months. Spring also marks the transition into the desert heat season, when windows close and HVAC systems run constantly — making it the right time to reset interior surfaces before the summer dust cycle begins. Spring cleaning is the best opportunity to address winter buildup before it gets locked in by closed-window summer conditions.',
  },
  {
    q: 'When is the right time to schedule spring cleaning in Las Vegas?',
    a: 'March through May is the primary spring cleaning window for Las Vegas commercial and managed properties. This window falls before the summer heat season, when windows and doors remain closed and interior dust accumulation increases. Scheduling around your property\'s operational calendar is standard — call to confirm availability for your preferred dates.',
  },
  {
    q: 'Does Final Touch do spring cleaning for commercial offices in Las Vegas?',
    a: `Yes. Final Touch provides spring cleaning for commercial offices, retail spaces, property-managed buildings, and common areas across Las Vegas and ${SITE.serviceArea.county}. Scope is confirmed per property at the initial walkthrough. Call ${SITE.phone.display} or request a free quote online.`,
  },
  {
    q: 'What is the Blue Ribbon Guarantee?',
    a: 'The Blue Ribbon Guarantee is Final Touch\'s 100% satisfaction guarantee. If you are not satisfied with the result, Final Touch will return within 24 hours to address any areas of concern at no additional charge. The guarantee applies to spring cleaning services as it does to all Final Touch work.',
  },
  {
    q: 'How do I get a spring cleaning quote for my Las Vegas property?',
    a: `Call ${SITE.phone.display} or request a free quote online. ${SITE.owners} conduct the initial walkthrough of your property, confirm scope, and provide a quote based on what the job actually requires. No obligation before you approve.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Spring Cleaning Services in Las Vegas, NV',
  serviceType: 'Spring Cleaning',
  provider: {
    '@type': 'Organization',
    name: 'Final Touch Cleaning Company LLC',
    url: SITE.url,
    telephone: '+17024445077',
  },
  areaServed: { '@type': 'City', name: 'Las Vegas, NV' },
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

const audienceCards = [
  {
    title: 'Commercial property managers',
    body: 'Property managers overseeing office buildings, retail centers, and mixed-use properties across Las Vegas use spring cleaning to reset common areas, lobbies, restrooms, and tenant-facing surfaces after the winter period. Spring is a natural checkpoint for the annual cleaning calendar.',
  },
  {
    title: 'Retail and restaurant operators',
    body: 'Las Vegas retail stores and restaurants that see varied traffic through the winter months benefit from a spring deep clean before the summer tourism surge. High-touch surfaces, floors, and customer-facing areas get a thorough reset ahead of the busier season.',
  },
  {
    title: 'Office tenants and building managers',
    body: 'Commercial office tenants and building managers use spring cleaning to address accumulated dust on surfaces, vents, blinds, and less-accessed areas that standard recurring cleaning does not reach. Spring is the practical transition point before summer HVAC systems run continuously.',
  },
  {
    title: 'Residential rental property owners',
    body: 'Landlords and residential property managers use spring cleaning for unit resets between tenants, common-area refreshes, and property inspections timed to the spring rental season. Spring is a high-activity period for lease renewals and unit turns in the Las Vegas rental market.',
  },
];

const checklist = [
  'Interior glass and window surfaces',
  'Baseboards, door frames, and window sills',
  'Ceiling fans, light fixtures, and vents',
  'Cabinet exteriors and hardware surfaces',
  'Deep floor care: vacuuming, mopping, and grout lines',
  'Bathroom fixtures, tile, and grout',
  'Kitchen and break room surfaces',
  'High-touch points: switches, handles, and rails',
  'Blinds and horizontal surface dusting',
  'Trash removal and liner replacement',
  'Common areas, lobbies, and reception surfaces',
];

const whyTimingCards = [
  {
    heading: 'Post-winter dust reset before the heat season',
    body: 'Las Vegas winters are mild but allow dust to settle on surfaces throughout cooler months when ventilation is reduced. Spring is the window to address that buildup before summer heat closes up the building. Once summer air conditioning runs at full capacity with windows sealed, interior surfaces accumulate desert particulate continuously until fall.',
  },
  {
    heading: 'HVAC transition point',
    body: 'Spring marks the shift from winter heating to summer cooling in Las Vegas commercial buildings. HVAC filters, vents, and the surfaces they serve are best cleaned at this transition point — before the summer dust cycle begins in earnest. A spring clean sets a clean baseline for the surfaces your HVAC system will recirculate air across for the next five months.',
  },
  {
    heading: 'Inspection and lease cycle alignment',
    body: 'Spring is a common inspection and lease renewal period for commercial and residential properties in Las Vegas. A spring cleaning creates a documented, verifiable baseline for property condition — useful for both landlord inspections and tenant turnovers. Scheduling around the renewal or inspection date is straightforward.',
  },
];

const relatedLinks = [
  { label: 'Deep Cleaning', href: '/services/deep-cleaning' },
  { label: 'Move-In Cleaning', href: '/services/move-in-cleaning' },
  { label: 'Commercial Office Cleaning', href: '/services/commercial-office-cleaning' },
  { label: 'Summer Deep Cleaning', href: '/seasonal/summer-deep-cleaning' },
  { label: 'Las Vegas Cleaning Services', href: '/locations/las-vegas' },
  { label: 'All Services', href: ROUTES.services },
];

export default function SpringCleaningLasVegasPage() {
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

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Seasonal', href: '/seasonal' },
          { label: 'Spring Cleaning' },
        ]}
      />

      {/* 1. Hero */}
      <HeroSection
        eyebrow="Spring Cleaning · Las Vegas, NV"
        heading="Spring Cleaning Services in Las Vegas, NV"
        sub="Post-winter deep-reset cleaning for commercial properties, offices, and managed units across Las Vegas. Scope confirmed per property. Scheduled around your operations."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Spring cleaning in Las Vegas is a professional deep-reset cleaning for the surfaces and areas
            that standard recurring programs do not reach. It covers accumulated winter dust, less-accessed
            surfaces, and the areas that need attention before the summer heat season.{' '}
            <Link href={ROUTES.services} className="text-brand-blue font-semibold hover:underline">
              Final Touch cleaning services
            </Link>{' '}
            covers commercial properties and managed units across Las Vegas and{' '}
            {SITE.serviceArea.county}. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to schedule a free quote.
          </p>
        </div>
      </section>

      {/* 3. Who this is for */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who we serve"
            heading="Spring cleaning for Las Vegas commercial and managed properties."
            sub="From office buildings to rental units, spring is the right time to reset surfaces before the summer season."
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

      {/* 4. What's included */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Scope"
            heading="What spring cleaning covers."
            sub="Scope is confirmed per property at the initial walkthrough. The list below covers typical spring cleaning areas — your property may include all or a subset based on your needs."
          />
          <ul className="mt-8 space-y-3">
            {checklist.map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">
                  &#10003;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Why timing matters */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why timing matters"
            heading="Why spring is the right time to clean in Las Vegas."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {whyTimingCards.map(({ heading, body }) => (
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

      {/* 6. FAQ */}
      <FAQSection
        items={faq}
        heading="Spring cleaning in Las Vegas: frequently asked questions"
      />

      {/* 7. Related links */}
      <section className="bg-light-gray border-y border-border-subtle">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-10 sm:py-12">
          <p className="text-sm font-semibold text-muted uppercase tracking-wide mb-4">
            Related services
          </p>
          <div className="flex flex-wrap gap-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-[44px] items-center rounded-full bg-brand-white px-4 py-2 text-sm font-semibold text-brand-blue border border-border-subtle hover:bg-blue-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <CTASection
        heading="Ready for spring cleaning in Las Vegas?"
        sub={`Free quotes for spring cleaning across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
