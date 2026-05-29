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
  title: 'Post-Construction Cleanup Clark County, NV | Final Touch',
  description:
    'Post-construction cleanup in Clark County, NV. Serving new subdivisions, industrial buildouts, and renovations. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/post-construction-cleanup/clark-county`,
  },
  openGraph: {
    title: 'Post-Construction Cleanup Clark County, NV | Final Touch',
    description:
      'Post-construction cleanup in Clark County, NV. Serving new subdivisions, industrial buildouts, and renovations. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/post-construction-cleanup/clark-county`,
  },
};

const faq = [
  {
    q: 'What does post-construction cleanup include in Clark County?',
    a: 'Post-construction cleanup covers removal of construction debris, drywall dust from all surfaces including vents and HVAC returns, adhesive and caulk residue, window film and glass cleaning, fixture cleaning, floor surfaces, and detail cleaning throughout. Scope confirmed per project before the clean begins — the same standard across every Clark County city.',
  },
  {
    q: 'Who hires post-construction cleanup across Clark County?',
    a: "Clark County's post-construction cleanup client base spans every construction type in the Las Vegas Valley simultaneously: new-home buyers in Henderson's active master-planned communities (Cadence, Inspirada), new-home buyers in North Las Vegas's residential subdivisions, commercial property owners in the industrial corridor, small commercial renovation owners in Boulder City's historic downtown, and homeowners renovating established properties across every city. No single-city page covers this full range.",
  },
  {
    q: 'Does Final Touch serve construction cleanup in unincorporated Clark County?',
    a: `Yes. Final Touch's service area covers the incorporated cities and unincorporated areas of Clark County. Construction cleanup in unincorporated areas of the county is served the same way as any incorporated city. Call ${SITE.phone.display} to confirm coverage for your specific address.`,
  },
  {
    q: 'Does Final Touch serve both residential and commercial post-construction cleanup across Clark County?',
    a: `Yes. Final Touch serves residential new builds and renovation projects across all county cities, and commercial construction cleanup including office buildouts, retail renovations, and industrial facility work — particularly in North Las Vegas's logistics corridor. Call ${SITE.phone.display} to discuss your project.`,
  },
  {
    q: 'How much does post-construction cleanup cost in Clark County?',
    a: `Cost depends on the size, scope, and condition of the space. Contact Final Touch at ${SITE.phone.display} or request a free quote. A brief walkthrough or site description is the starting point for any estimate, regardless of city.`,
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
  areaServed: {
    '@type': 'AdministrativeArea',
    name: `${SITE.serviceArea.county}, ${SITE.serviceArea.stateAbbr}`,
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  areaServed: [
    { '@type': 'AdministrativeArea', name: `${SITE.serviceArea.county}, ${SITE.serviceArea.stateAbbr}` },
    ...SITE.serviceArea.cities.map((city) => ({
      '@type': 'City' as const,
      name: `${city}, ${SITE.serviceArea.stateAbbr}`,
    })),
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
    { '@type': 'ListItem', position: 4, name: 'Clark County', item: `${SITE.url}/services/post-construction-cleanup/clark-county` },
  ],
};

export default function PostConstructionCleanupClarkCountyPage() {
  return (
    <>
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Post-Construction Cleanup · Clark County, NV"
        heading="Post-Construction Cleanup in Clark County, NV"
        sub={`Clark County is one of the fastest-growing regions in the United States, with active residential construction, commercial buildout, and ongoing renovations across every city. Final Touch provides post-construction cleanup county-wide — new builds, industrial buildouts, and renovation projects across all of ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Post-construction cleanup in Clark County is the professional final cleaning pass
            after builders or renovation crews finish — removing drywall dust, adhesive residue,
            construction debris, and window film across every construction type in the valley.{' '}
            <Link href="/services/post-construction-cleanup" className="text-brand-blue font-semibold hover:underline">
              Final Touch post-construction cleanup
            </Link>{' '}
            serves the full range: new-home buyers in Henderson and North Las Vegas, industrial
            buildout owners in North Las Vegas, renovation owners across all cities, and
            commercial property owners throughout Clark County. Call{' '}
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
            eyebrow="Who hires post-construction cleanup in Clark County"
            heading="Every construction type in the Las Vegas Valley — all served county-wide."
            sub="Clark County's post-construction cleanup client base is the most varied in the state — spanning new builds, industrial work, commercial buildouts, and renovations simultaneously."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'New-home buyers across county growth areas',
                body: 'Active new residential construction in Henderson (Cadence, Inspirada), North Las Vegas (active subdivisions), and Las Vegas creates county-wide demand for post-construction cleanup after builder handoff.',
              },
              {
                title: 'Industrial and commercial property owners in NLV',
                body: "North Las Vegas's industrial and logistics corridor generates commercial construction cleanup demand — warehouse buildouts, facility office additions, and industrial complex expansions — unique to that city within the county.",
              },
              {
                title: 'Commercial property owners and developers',
                body: 'Commercial buildouts across the county — retail spaces, office suites, mixed-use developments in Las Vegas and Henderson — require thorough post-construction cleanup before tenant occupancy or business launch.',
              },
              {
                title: 'Renovation owners across every county city',
                body: "Homeowners and commercial owners renovating established properties across every Clark County city — from Boulder City's older homes to Las Vegas's urban commercial to Henderson's established communities — create renovation cleanup demand county-wide.",
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
            sub="Construction residue goes further than visible debris — same scope across every Clark County project."
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
            Scope confirmed per project. Residential new builds and commercial buildouts have
            different scope needs — both addressed during the initial conversation.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Post-construction cleanup across Clark County"
            heading="Why Clark County generates more post-construction cleanup demand than any single city."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'One of the fastest-growing counties in the US',
                body: "Clark County has been among the fastest-growing counties in the United States for years. That growth drives residential construction across Henderson, North Las Vegas, and Las Vegas simultaneously — creating a post-construction cleanup pipeline that spans the entire county. A searcher looking for 'post-construction cleanup Clark County' is often asking about a project that doesn't fit neatly into a single city.",
              },
              {
                heading: 'Every construction type in one county',
                body: "Clark County's construction landscape includes master-planned community new builds (Henderson), high-growth residential subdivisions (North Las Vegas), active urban infill (Las Vegas), character-home renovations (Boulder City), and industrial facility buildouts (North Las Vegas's logistics corridor). No other county in Nevada has this range of active construction types in one service area.",
              },
              {
                heading: 'Mojave desert amplifies construction dust county-wide',
                body: 'The Mojave desert environment means construction dust and fine particulate settle more aggressively and penetrate further into HVAC systems across the entire county — not just in one city. Post-construction cleanup that addresses vents, HVAC returns, and dust-accumulation surfaces is more thorough in this climate than in wetter regions.',
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
            eyebrow="More services in Clark County"
            heading="Other cleaning services available across Clark County, NV."
            sub="Final Touch provides seven cleaning services county-wide."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {relatedServiceCards.map((service) => (
              <li key={service.slug} className="h-full">
                <ServiceCard
                  href={`/services/${service.slug}/clark-county`}
                  name={service.name}
                  description={service.shortDescription}
                  image={service.image}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Post-construction cleanup by city */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brand-black tracking-tight">
            Post-construction cleanup by city
          </h2>
          <p className="mt-3 text-base text-muted">
            Each city in Clark County has its own construction character. Find yours below.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              { label: 'Post-Construction Cleanup in Las Vegas, NV', href: '/services/post-construction-cleanup/las-vegas' },
              { label: 'Post-Construction Cleanup in Henderson, NV', href: '/services/post-construction-cleanup/henderson' },
              { label: 'Post-Construction Cleanup in North Las Vegas, NV', href: '/services/post-construction-cleanup/north-las-vegas' },
              { label: 'Post-Construction Cleanup in Boulder City, NV', href: '/services/post-construction-cleanup/boulder-city' },
            ].map(({ label, href }) => (
              <li key={href}>
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
        heading="Post-construction cleanup in Clark County — common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/post-construction-cleanup" className="font-semibold text-brand-blue hover:underline">
            ← Post-construction cleanup services
          </Link>
          <Link href="/locations/clark-county" className="font-semibold text-brand-blue hover:underline">
            ← Cleaning services in Clark County
          </Link>
          <Link href={ROUTES.freeQuote} className="font-semibold text-brand-blue hover:underline">
            Request a free quote →
          </Link>
        </div>
      </div>

      {/* 9. Final CTA */}
      <CTASection
        heading="Ready to schedule post-construction cleanup in Clark County?"
        sub={`Free quotes for post-construction cleanup across all of ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
