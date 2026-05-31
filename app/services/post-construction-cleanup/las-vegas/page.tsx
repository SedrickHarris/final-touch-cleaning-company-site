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
  title: 'Post-Construction Cleanup in Las Vegas, NV',
  description:
    'Post-construction cleanup in Las Vegas, NV. Final Touch clears drywall dust, debris, and residue for move-in-ready results. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/post-construction-cleanup/las-vegas`,
  },
  openGraph: {
    title: 'Post-Construction Cleanup in Las Vegas, NV | Final Touch',
    description:
      'Post-construction cleanup in Las Vegas, NV. Final Touch clears drywall dust, debris, and residue for move-in-ready results. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/post-construction-cleanup/las-vegas`,
  },
};

const faq = [
  {
    q: 'What does post-construction cleanup include in Las Vegas?',
    a: 'Post-construction cleanup covers removal of construction debris, drywall dust from all surfaces including vents and HVAC returns, adhesive and caulk residue, window film and glass cleaning, fixture cleaning, floor surfaces, and detail cleaning throughout the space. Scope is confirmed based on the specific project. A residential new build differs from a commercial buildout in what needs to be addressed.',
  },
  {
    q: 'Who hires post-construction cleanup in Las Vegas?',
    a: 'Las Vegas has a mix of active residential subdivisions, commercial buildouts, and ongoing renovation projects across the metro. The client base is both residential (new homeowners, remodel owners) and commercial: developers, general contractors, and business owners preparing to open. Both segments create demand for a professional final clean that the construction crew does not provide.',
  },
  {
    q: 'How long does post-construction cleanup take in Las Vegas?',
    a: 'Timeline depends on the size of the space and the amount of construction residue. A single-family home differs from a commercial build-out. Timing is confirmed before the clean begins based on the specific project and access schedule.',
  },
  {
    q: 'Does Final Touch handle commercial post-construction cleanup in Las Vegas?',
    a: `Yes. Final Touch serves both residential and commercial construction cleanup clients across Las Vegas and ${SITE.serviceArea.county}. Commercial buildouts, retail space renovations, and office build-outs all create the same post-construction residue that requires a thorough professional clean before occupancy.`,
  },
  {
    q: 'How much does post-construction cleanup cost in Las Vegas?',
    a: `Contact Final Touch at ${SITE.phone.display} or request a free quote. Post-construction pricing depends on the size, scope, and condition of the space. No templated rate is applied without reviewing the project. A brief walkthrough or site description is the starting point.`,
  },
];

// Related services: ordered by relevance for Las Vegas post-construction page
const relatedServices = [
  'move-in-cleaning',
  'deep-cleaning',
  'move-out-cleaning',
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
  name: 'Post-Construction Cleanup',
  serviceType: 'Post-Construction Cleanup',
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
  { label: 'Post-Construction Cleanup', href: '/services/post-construction-cleanup' },
  { label: 'Las Vegas' },
];

export default function PostConstructionCleanupLasVegasPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Post-Construction Cleanup · Las Vegas, NV"
        heading="Post-Construction Cleanup in Las Vegas, NV"
        sub={`Las Vegas has one of the most active construction markets in the region: residential subdivisions, commercial buildouts, and ongoing renovations throughout the metro. Final Touch provides thorough post-construction cleanup for new builds and renovations across Las Vegas and ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Post-construction cleanup in Las Vegas is the final professional cleaning pass after
            builders finish, removing drywall dust, adhesive residue, construction debris, and
            window film from a space that looks done but is not truly clean.{' '}
            <Link
              href="/services/post-construction-cleanup"
              className="text-brand-blue font-semibold hover:underline"
            >
              Final Touch post-construction cleanup
            </Link>{' '}
            serves both residential and commercial clients across the Las Vegas metro. Call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
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

      {/* 3. Who hires post-construction cleanup in Las Vegas */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires post-construction cleanup in Las Vegas"
            heading="Residential and commercial clients across an active construction market."
            sub="Las Vegas's sustained construction activity creates demand from both residential homeowners and commercial property owners."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'New homeowners accepting builder handoff',
                body: "Las Vegas has consistent new residential development. New homeowners need a final detail clean before occupying: drywall dust permeates every surface, adhesive residue lingers on floors and windows, and the builder's sweep does not address the detail level needed to live in the space.",
              },
              {
                title: 'General contractors and builders',
                body: 'Contractors need the site clean before client walkthrough or final handoff. A third-party cleaning crew handles the post-construction detail pass professionally, without the crew performing double duty as cleaners.',
              },
              {
                title: 'Commercial property owners and developers',
                body: 'Las Vegas commercial buildout (retail spaces, offices, mixed-use) requires thorough post-construction cleanup before tenant occupancy or business launch. The same dust and residue issues that affect residential new builds apply in commercial spaces.',
              },
              {
                title: 'Renovation and remodel owners',
                body: 'Residents and business owners completing renovations in existing Las Vegas properties need post-renovation cleanup. Drywall dust from a single room spreads through an entire home via the HVAC system. A thorough clean after the trades leave is the only way to fully address it.',
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
            heading="What post-construction cleanup covers."
            sub="Construction residue goes further than visible debris. These are the areas Final Touch addresses."
          />
          <ul className="mt-8 space-y-3">
            {[
              'Construction debris removal',
              'Drywall dust from all surfaces including walls, sills, and ledges',
              'Vents and HVAC returns (construction dust enters the system)',
              'Adhesive and caulk residue on floors and surfaces',
              'Window film and glass cleaning throughout',
              'Fixture cleaning: light fixtures, hardware, outlets',
              'Bathroom and kitchen fixtures',
              'All floor surfaces: vacuuming and mopping',
              'Interior windows and glass surfaces',
              'Detail cleaning throughout the space',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Scope is confirmed based on the project before the clean begins. Commercial buildouts
            and residential new builds have different scope needs. We confirm both during the
            walkthrough.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Post-construction cleanup in the Las Vegas market"
            heading="Why Las Vegas generates consistent post-construction cleaning demand."
            sub="Three factors make post-construction cleanup a recurring need across the Las Vegas metro."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'Sustained residential construction pipeline',
                body: 'Las Vegas has maintained active residential development for years. New subdivisions, master-planned community phases, and infill projects across the valley create a consistent pipeline of new-build post-construction cleanup jobs, residential homeowners who need the final clean before move-in.',
              },
              {
                heading: 'Active commercial buildout',
                body: 'Commercial construction (retail spaces, office suites, restaurant buildouts, medical office conversions) adds a second demand stream. Business owners and developers need a thorough post-construction clean before their first day of operations or tenant move-in.',
              },
              {
                heading: 'Mojave desert compounds construction dust',
                body: 'Construction dust is heavy in any climate. In Las Vegas, the Mojave desert environment means airborne particulate from a construction site settles more aggressively and penetrates further into surfaces than in wetter climates. A thorough cleanup is not optional. It is the difference between a finished space and a livable one.',
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
            sub="Final Touch provides seven cleaning services across Las Vegas and Clark County."
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

      {/* 7. Related cities for post-construction cleanup */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brand-black tracking-tight">
            Post-construction cleanup in other cities
          </h2>
          <p className="mt-3 text-base text-muted">
            Final Touch serves post-construction cleanup clients across{' '}
            <Link href={ROUTES.locations} className="text-brand-blue font-semibold hover:underline">
              all of {SITE.serviceArea.county}
            </Link>
            .
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              { label: 'Post-Construction Cleanup in Henderson, NV', href: '/services/post-construction-cleanup/henderson' },
              { label: 'Post-Construction Cleanup in North Las Vegas, NV', href: '/services/post-construction-cleanup/north-las-vegas' },
              { label: 'Post-Construction Cleanup in Boulder City, NV', href: '/services/post-construction-cleanup/boulder-city' },
              { label: 'Post-Construction Cleanup in Clark County, NV', href: '/services/post-construction-cleanup/clark-county' },
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
        heading="Post-construction cleanup in Las Vegas: common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/post-construction-cleanup" className="font-semibold text-brand-blue hover:underline">
            ← Post-construction cleanup services
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
        heading="Ready to schedule post-construction cleanup in Las Vegas?"
        sub={`Free quotes for post-construction cleanup across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
