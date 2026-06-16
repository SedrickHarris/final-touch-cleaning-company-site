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
  title: 'Summer Deep Cleaning in Las Vegas, NV',
  description: `Summer deep cleaning Las Vegas — June–August deep cleaning for commercial properties managing desert heat and dust infiltration. Call ${SITE.phone.display}.`,
  alternates: {
    canonical: '/seasonal/summer-deep-cleaning',
  },
  openGraph: {
    title: 'Summer Deep Cleaning in Las Vegas, NV | Final Touch',
    description: `Summer deep cleaning Las Vegas — June–August deep cleaning for commercial properties managing desert heat and dust infiltration. Call ${SITE.phone.display}.`,
    type: 'website',
    url: `${SITE.url}/seasonal/summer-deep-cleaning`,
  },
};

const faq = [
  {
    q: 'What makes summer deep cleaning different in Las Vegas?',
    a: 'Las Vegas summers are defined by extreme heat and high particulate levels. Buildings seal up completely — doors and windows closed, HVAC running continuously — which means interior air circulates dust and particulate matter across every surface with no natural ventilation to flush it out. Summer deep cleaning addresses the accelerated buildup on HVAC-adjacent surfaces, flooring, and less-accessed areas that accumulate desert dust through the June–August period.',
  },
  {
    q: 'What does summer deep cleaning include for a commercial property?',
    a: `Summer deep cleaning for a Las Vegas commercial property covers the areas that accumulate dust and particulate during the sealed-building summer period: vents, blinds, baseboards, floor surfaces, cabinet tops, and other areas where desert dust settles. Scope is confirmed per property at the walkthrough. Call ${SITE.phone.display} to discuss your space.`,
  },
  {
    q: 'When should I schedule summer deep cleaning in Las Vegas?',
    a: 'June through August is the primary window. Many commercial operators schedule summer deep cleaning in June before the peak of the heat season, or in late August as a reset before the back-to-school and fall operational period. Either timing is practical — the key is addressing buildup while the peak dust-load season is active or immediately after it winds down.',
  },
  {
    q: 'Does Final Touch provide summer deep cleaning for offices and commercial spaces?',
    a: `Yes. Final Touch provides summer deep cleaning for commercial offices, retail spaces, managed properties, and other commercial facilities across Las Vegas and ${SITE.serviceArea.county}. Scope is confirmed per property at the initial walkthrough. Call ${SITE.phone.display} or request a free quote online.`,
  },
  {
    q: 'Is summer deep cleaning a one-time service or part of a recurring program?',
    a: 'Summer deep cleaning can be scheduled as a one-time service or as part of a seasonal deep-clean program (for example, spring and summer deep cleans as semi-annual additions to a recurring maintenance program). Scope and frequency are confirmed at the walkthrough based on your property\'s needs.',
  },
  {
    q: 'What is the Blue Ribbon Guarantee for summer cleaning?',
    a: "The Blue Ribbon Guarantee is Final Touch's 100% satisfaction guarantee. If you are not satisfied with the result, Final Touch will return within 24 hours to address any concerns at no additional charge. It applies to summer deep cleaning as it does to all Final Touch services.",
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Summer Deep Cleaning in Las Vegas, NV',
  serviceType: 'Summer Deep Cleaning',
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
    title: 'Commercial office buildings',
    body: 'Las Vegas commercial office buildings run HVAC continuously through summer, recirculating desert air across interior surfaces. Summer deep cleaning addresses the particulate buildup on vents, blinds, baseboards, and less-accessed floor areas before it compounds further through the season.',
  },
  {
    title: 'Retail stores with high summer traffic',
    body: 'Las Vegas retail stores that see summer tourist traffic bring in additional dust and particulate through high-frequency door openings during the hottest months. Floor care, entry zones, and customer-facing surfaces need attention beyond what recurring cleaning maintains.',
  },
  {
    title: 'Property managers overseeing summer unit turns',
    body: "Property managers handling summer unit turns — particularly in the student housing market near UNLV — use summer deep cleaning as part of their turn process. The combination of summer dust load and vacated unit condition makes a thorough deep clean the right approach before re-leasing.",
  },
  {
    title: 'Managed buildings with seasonal maintenance cycles',
    body: 'Commercial and residential property managers who tie their maintenance calendar to seasonal windows use summer deep cleaning as the mid-year checkpoint. June or August scheduling aligns with inspection cycles, lease renewals, and the operational pause between summer and fall.',
  },
];

const checklist = [
  'Vents, registers, and HVAC-adjacent surfaces',
  'Blinds, window treatments, and sill surfaces',
  'Baseboards and door frames',
  'Floor deep care: hard floors, grout, and carpet areas',
  'Cabinet tops and high horizontal surfaces',
  'Interior glass and window cleaning',
  'Restroom deep clean: fixtures, grout, and tile',
  'Kitchen and break room: all surfaces and appliance exteriors',
  'High-touch points: handles, rails, and switches',
  'Common areas, lobbies, and reception surfaces',
  'Trash removal and liner replacement',
];

const whyTimingCards = [
  {
    heading: 'Sealed buildings accumulate desert dust faster',
    body: 'Las Vegas buildings operate in a sealed state through summer — windows and doors closed, HVAC running constantly. Unlike spring and fall when ventilation provides some natural air exchange, summer locks interior air into a recirculating loop. Desert particulate that enters through door traffic and HVAC intake settles on every horizontal surface without being flushed out. The result is accelerated buildup on floors, vents, blinds, and baseboards.',
  },
  {
    heading: 'Summer HVAC systems distribute dust throughout the building',
    body: 'A continuously running HVAC system in a sealed Las Vegas building does not just cool the air — it distributes whatever particulate it picks up from intake and interior sources across every room. Surfaces near vents and registers accumulate dust faster in summer than in any other season. Deep cleaning that addresses vent areas and HVAC-adjacent surfaces is specific to the summer operating environment.',
  },
  {
    heading: 'August reset before the fall season',
    body: 'Late August is a practical second timing option for summer deep cleaning. The back-to-school period drives operational schedule changes for commercial tenants, property managers, and residential operators. A late-August deep clean resets the property before the fall lease cycle, school-year routine, and the seasonal transition out of peak summer conditions.',
  },
];

const relatedLinks = [
  { label: 'Spring Cleaning Services', href: '/seasonal/spring-cleaning-las-vegas' },
  { label: 'Back-to-School Home Reset', href: '/seasonal/back-to-school-home-reset' },
  { label: 'Deep Cleaning', href: '/services/deep-cleaning' },
  { label: 'Commercial Office Cleaning', href: '/services/commercial-office-cleaning' },
  { label: 'Las Vegas Cleaning Services', href: '/locations/las-vegas' },
  { label: 'All Services', href: ROUTES.services },
];

export default function SummerDeepCleaningPage() {
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
          { label: 'Summer Deep Cleaning' },
        ]}
      />

      {/* 1. Hero */}
      <HeroSection
        eyebrow="Summer Deep Cleaning · Las Vegas, NV"
        heading="Summer Deep Cleaning in Las Vegas, NV"
        sub="June–August deep cleaning for Las Vegas commercial properties dealing with desert heat, sealed buildings, and accelerated dust infiltration. Scope confirmed per property."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Summer deep cleaning in Las Vegas addresses the unique interior conditions of the desert heat
            season: sealed buildings, continuous HVAC operation, and accelerated dust accumulation on
            vents, floors, and horizontal surfaces.{' '}
            <Link href={ROUTES.services} className="text-brand-blue font-semibold hover:underline">
              Final Touch cleaning services
            </Link>{' '}
            covers commercial properties, offices, and managed units across Las Vegas and{' '}
            {SITE.serviceArea.county}. Scope is confirmed at a walkthrough before any work begins. Call{' '}
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
            heading="Summer deep cleaning for Las Vegas commercial properties."
            sub="Office buildings, retail operators, and property managers use summer deep cleaning to address the specific conditions of the Las Vegas heat season."
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
            heading="What summer deep cleaning covers."
            sub="Scope is confirmed per property at the initial walkthrough. Typical summer deep cleaning areas are listed below."
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
            heading="Why summer deep cleaning is distinct in the Las Vegas desert."
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
        heading="Summer deep cleaning in Las Vegas: frequently asked questions"
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
        heading="Need summer deep cleaning in Las Vegas?"
        sub={`Free quotes for summer deep cleaning across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
