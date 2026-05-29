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
  title: 'Post-Construction Cleanup in North Las Vegas | Final Touch',
  description:
    'Post-construction cleanup in North Las Vegas, NV. Serving new subdivisions, industrial buildouts, and renovations. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/post-construction-cleanup/north-las-vegas`,
  },
  openGraph: {
    title: 'Post-Construction Cleanup in North Las Vegas | Final Touch',
    description:
      'Post-construction cleanup in North Las Vegas, NV. Serving new subdivisions, industrial buildouts, and renovations. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/post-construction-cleanup/north-las-vegas`,
  },
};

const faq = [
  {
    q: 'What does post-construction cleanup include in North Las Vegas?',
    a: 'Post-construction cleanup covers removal of construction debris, drywall dust from all surfaces including vents and HVAC returns, adhesive and caulk residue, window film and glass cleaning, fixture cleaning, floor surfaces, and detail cleaning throughout. Scope confirmed based on the specific project before the clean begins.',
  },
  {
    q: 'Who hires post-construction cleanup in North Las Vegas?',
    a: "The largest segment is new-home buyers in North Las Vegas's active residential subdivisions — one of the most consistently growing areas in the Las Vegas Valley. A second, North-Las-Vegas-specific segment is industrial and commercial property owners in the warehouse and logistics corridor along the city's major arterials. Facility buildouts and office additions in industrial complexes create construction cleanup demand not found in Las Vegas or Henderson at the same scale.",
  },
  {
    q: 'Does Final Touch serve North Las Vegas new subdivisions for construction cleanup?',
    a: `Yes. Final Touch serves post-construction cleanup clients in North Las Vegas's active residential development areas. New-home buyers whose builder handoff left construction residue are a core client. Call ${SITE.phone.display} to schedule.`,
  },
  {
    q: 'Does Final Touch do commercial or industrial post-construction cleanup in North Las Vegas?',
    a: 'Yes. North Las Vegas has a large industrial and logistics corridor. Final Touch serves commercial construction cleanup for facility offices, warehouse common areas, and industrial buildouts in North Las Vegas — a type of post-construction work specifically relevant to this city and less common at the same scale in Henderson or Las Vegas proper.',
  },
  {
    q: 'How much does post-construction cleanup cost in North Las Vegas?',
    a: `Contact Final Touch at ${SITE.phone.display} or request a free quote. Cost depends on the size, scope, and condition of the space — a brief walkthrough or site description is the starting point.`,
  },
];

const relatedServices = [
  'move-in-cleaning',
  'commercial-office-cleaning',
  'deep-cleaning',
  'move-out-cleaning',
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
  areaServed: { '@type': 'City', name: `North Las Vegas, ${SITE.serviceArea.stateAbbr}` },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  areaServed: [
    { '@type': 'City', name: `North Las Vegas, ${SITE.serviceArea.stateAbbr}` },
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
    { '@type': 'ListItem', position: 3, name: 'Post-Construction Cleanup', item: `${SITE.url}/services/post-construction-cleanup` },
    { '@type': 'ListItem', position: 4, name: 'North Las Vegas', item: `${SITE.url}/services/post-construction-cleanup/north-las-vegas` },
  ],
};

export default function PostConstructionCleanupNorthLasVegasPage() {
  return (
    <>
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Post-Construction Cleanup · North Las Vegas, NV"
        heading="Post-Construction Cleanup in North Las Vegas, NV"
        sub={`North Las Vegas is one of the most actively growing residential areas in the Las Vegas Valley, with an additional industrial and logistics corridor that creates commercial construction demand. Final Touch serves post-construction cleanup for new builds, industrial buildouts, and renovations across North Las Vegas and ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Post-construction cleanup in North Las Vegas is the professional final cleaning pass
            after builders or renovation crews finish — removing drywall dust, adhesive residue,
            construction debris, and window film from a space that looks done but is not truly
            clean.{' '}
            <Link href="/services/post-construction-cleanup" className="text-brand-blue font-semibold hover:underline">
              Final Touch post-construction cleanup
            </Link>{' '}
            serves new-home buyers in NLV&apos;s active subdivisions, renovation owners in established
            neighborhoods, and industrial facility operators across the city. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to schedule.
          </p>
        </div>
      </section>

      {/* 3. Who hires */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires post-construction cleanup in North Las Vegas"
            heading="New-home buyers, industrial buildout owners, and renovation owners."
            sub="North Las Vegas has two post-construction streams — residential new builds and industrial/commercial buildouts — that don't both appear at the same scale in any other city in this market."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'New-home buyers in active NLV subdivisions',
                body: "North Las Vegas is one of the most active residential growth areas in the Las Vegas Valley. New-home buyers in NLV's active subdivisions need post-construction cleanup after builder handoff — drywall dust, adhesive residue, window film, and construction particulate in vents are all left behind after the builder's standard site sweep.",
              },
              {
                title: 'General contractors building NLV residential projects',
                body: 'Builders in North Las Vegas use third-party post-construction cleanup crews before client walkthroughs and final handoffs. A professional clean is the last step before the client takes the keys.',
              },
              {
                title: 'Industrial and commercial facility owners',
                body: "North Las Vegas has a large industrial and logistics corridor. Warehouse buildouts, facility office additions, and industrial complex expansions create commercial post-construction cleanup demand unique to NLV's economic profile.",
              },
              {
                title: 'Renovation owners in established neighborhoods',
                body: 'Older NLV residential areas have homeowners completing remodels and additions. Drywall dust from a kitchen renovation or room addition spreads through the existing home via the HVAC system — a post-renovation cleanup addresses what the contractors leave behind.',
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
            Scope confirmed per project. Residential new builds and industrial buildouts have
            different needs — both addressed during the walkthrough.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Post-construction cleanup in North Las Vegas"
            heading="Why NLV generates the most varied post-construction demand in the county."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: "One of the valley's most active residential growth areas",
                body: "North Las Vegas has been among the fastest-growing residential areas in the Las Vegas Valley for years. New subdivisions and infill development create a consistent pipeline of new-home post-construction cleanup jobs. Unlike Henderson — where construction is concentrated in specific master-planned communities — NLV's growth is spread more broadly across the city.",
              },
              {
                heading: 'Industrial corridor adds commercial construction demand',
                body: 'North Las Vegas has a large industrial and logistics corridor along its major arterials. Warehouse buildouts, facility office additions, and distribution center expansions require post-construction cleanup just as residential new builds do. This commercial construction demand is specific to NLV and is not present at the same scale in Henderson or Las Vegas proper.',
              },
              {
                heading: 'Desert climate amplifies construction dust',
                body: "In North Las Vegas's Mojave desert environment, construction dust and fine particulate settle more aggressively on surfaces and infiltrate HVAC systems faster than in wetter climates. For NLV homes near active build zones, this effect extends beyond the direct construction project — neighboring completed homes accumulate particulate from nearby activity.",
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
            eyebrow="More services in North Las Vegas"
            heading="Other cleaning services available in North Las Vegas, NV."
            sub="Final Touch provides seven cleaning services across North Las Vegas and Clark County."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {relatedServiceCards.map((service) => (
              <li key={service.slug} className="h-full">
                <ServiceCard
                  href={`/services/${service.slug}/north-las-vegas`}
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
              { label: 'Post-Construction Cleanup in Las Vegas, NV', href: '/services/post-construction-cleanup/las-vegas' },
              { label: 'Post-Construction Cleanup in Henderson, NV', href: '/services/post-construction-cleanup/henderson' },
              { label: 'Post-Construction Cleanup in Boulder City, NV', href: '/services/post-construction-cleanup/boulder-city' },
              { label: 'Post-Construction Cleanup in Clark County, NV', href: '/services/post-construction-cleanup/clark-county' },
            ].map(({ label, href }) => (
              <li key={href}>
                {/* TODO-BATCH-6: Boulder City and Clark County resolve when those city sets are built */}
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
        heading="Post-construction cleanup in North Las Vegas — common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/post-construction-cleanup" className="font-semibold text-brand-blue hover:underline">
            ← Post-construction cleanup services
          </Link>
          <Link href="/locations/north-las-vegas" className="font-semibold text-brand-blue hover:underline">
            ← Cleaning services in North Las Vegas
          </Link>
          <Link href={ROUTES.freeQuote} className="font-semibold text-brand-blue hover:underline">
            Request a free quote →
          </Link>
        </div>
      </div>

      {/* 9. Final CTA */}
      <CTASection
        heading="Ready to schedule post-construction cleanup in North Las Vegas?"
        sub={`Free quotes for post-construction cleanup across North Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
