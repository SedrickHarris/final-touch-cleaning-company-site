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
  title: 'Post-Construction Cleanup in Henderson, NV',
  description:
    'Post-construction cleanup in Henderson, NV. Final Touch clears construction dust and residue in Cadence, Inspirada, and beyond. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/post-construction-cleanup/henderson`,
  },
  openGraph: {
    title: 'Post-Construction Cleanup in Henderson, NV | Final Touch',
    description:
      'Post-construction cleanup in Henderson, NV. Final Touch clears construction dust and residue in Cadence, Inspirada, and beyond. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/post-construction-cleanup/henderson`,
  },
};

const faq = [
  {
    q: 'What does post-construction cleanup include in Henderson?',
    a: 'Post-construction cleanup covers removal of construction debris, drywall dust from all surfaces including vents and HVAC returns, adhesive and caulk residue, window film and glass cleaning, fixture cleaning, floor surfaces, and detail cleaning throughout. Scope is confirmed based on the specific project before the clean begins.',
  },
  {
    q: 'Does Final Touch serve Cadence and Inspirada for post-construction cleanup?',
    a: `Yes. Cadence is Henderson's largest actively developing master-planned community, with multiple builders operating simultaneously. Inspirada is in active build phases in southwest Henderson. Final Touch serves post-construction cleanup clients in both communities, new-home buyers whose builder handoff left construction residue. Call ${SITE.phone.display} to schedule.`,
  },
  {
    q: 'Who typically needs post-construction cleanup in Henderson?',
    a: "Henderson's post-construction cleanup client base is primarily residential: new-home buyers in Cadence and Inspirada are the largest segment. Renovation and remodel owners in established Henderson communities (Green Valley, Anthem) are a second segment. Commercial property owners completing buildouts along Henderson business corridors are a third.",
  },
  {
    q: 'Does Final Touch handle commercial post-construction cleanup in Henderson?',
    a: `Yes. Final Touch serves commercial construction cleanup in Henderson including retail spaces, office suites, and medical office buildouts along Green Valley Parkway and surrounding corridors. Call ${SITE.phone.display} to discuss the project.`,
  },
  {
    q: 'How much does post-construction cleanup cost in Henderson?',
    a: `Contact Final Touch at ${SITE.phone.display} or request a free quote. Cost depends on the size, scope, and condition of the space. No rate is given without reviewing the project. A brief walkthrough or site description is the starting point.`,
  },
];

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
  { label: 'Post-Construction Cleanup', href: '/services/post-construction-cleanup' },
  { label: 'Henderson' },
];

export default function PostConstructionCleanupHendersonPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Post-Construction Cleanup · Henderson, NV"
        heading="Post-Construction Cleanup in Henderson, NV"
        sub={`Cadence and Inspirada are among the most actively developing residential communities in the Las Vegas Valley. Final Touch provides post-construction cleanup for new-home buyers, renovation owners, and commercial property owners across Henderson and ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Post-construction cleanup in Henderson is the professional final cleaning pass after
            builders or renovation crews finish, removing drywall dust, adhesive residue,
            construction debris, and window film from a space that looks done but is not truly
            clean.{' '}
            <Link href="/services/post-construction-cleanup" className="text-brand-blue font-semibold hover:underline">
              Final Touch post-construction cleanup
            </Link>{' '}
            serves new-home buyers in Cadence and Inspirada, renovation owners in Green Valley
            and Anthem, and commercial property owners throughout Henderson. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to schedule.
          </p>
        </div>
      </section>

      {/* 3. Who hires post-construction cleanup in Henderson */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires post-construction cleanup in Henderson"
            heading="New-home buyers, renovation owners, and commercial clients across Henderson."
            sub="Henderson's post-construction demand is primarily residential (driven by Cadence and Inspirada) with a secondary commercial stream along Henderson's business corridors."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'New-home buyers in Cadence',
                body: "Cadence is Henderson's largest and most actively developing master-planned community. Multiple builders operate simultaneously across its phases. New-home buyers closing in Cadence consistently need post-construction cleanup: drywall dust in every vent, adhesive on floors, window film on every pane of glass.",
              },
              {
                title: 'New-home buyers in Inspirada',
                body: 'Inspirada in southwest Henderson is in active build phases. New-home buyers here face the same post-construction residue issues as Cadence buyers. Builder handoffs leave the home looking finished while construction particulate remains throughout.',
              },
              {
                title: 'Renovation owners in established communities',
                body: "Green Valley and Anthem homeowners renovating established homes are a steady source of post-construction cleanup demand. A kitchen remodel, bathroom renovation, or addition in an older Henderson home spreads drywall dust through the entire house, through the HVAC system and into every room that wasn't under construction.",
              },
              {
                title: 'Commercial property owners in Henderson',
                body: 'Commercial buildouts along Green Valley Parkway and Henderson business corridors (retail spaces, office suites, medical office conversions) require thorough post-construction cleanup before tenant occupancy or business launch.',
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
            Scope confirmed per project. Henderson new builds in Cadence and Inspirada and
            renovation jobs in established communities have different scope needs. Both are
            addressed during the walkthrough.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Post-construction cleanup in Henderson"
            heading="Why Henderson generates consistent post-construction demand."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: "Cadence, the valley's largest active development",
                body: "Cadence is the largest master-planned community currently under development in Henderson. Multiple home builders operate on-site simultaneously, making it one of the most consistently active new-construction environments in the Las Vegas Valley. New-home buyers in Cadence are among the most frequent post-construction cleanup clients Final Touch serves in Henderson.",
              },
              {
                heading: 'Renovation demand in established neighborhoods',
                body: "Green Valley and Anthem are mature communities with homes that have been owned and occupied for decades. Owners renovating these homes (kitchen updates, bathroom remodels, room additions) create renovation-cleanup demand that differs from new construction: the dust spreads into an occupied home's existing systems and surfaces rather than into a newly framed shell.",
              },
              {
                heading: 'Desert climate amplifies construction dust',
                body: "Henderson's Mojave desert environment means construction dust and fine particulate settle more aggressively on surfaces and penetrate further into HVAC systems than in wetter climates. For homes in Cadence adjacent to active build zones, this effect extends beyond the construction project itself. Neighboring completed homes accumulate particulate from nearby activity.",
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
            sub="Final Touch provides seven cleaning services across Henderson and the Las Vegas Valley."
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
              { label: 'Post-Construction Cleanup in North Las Vegas, NV', href: '/services/post-construction-cleanup/north-las-vegas' },
              { label: 'Post-Construction Cleanup in Boulder City, NV', href: '/services/post-construction-cleanup/boulder-city' },
              { label: 'Post-Construction Cleanup in Clark County, NV', href: '/services/post-construction-cleanup/clark-county' },
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
        heading="Post-construction cleanup in Henderson: common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/post-construction-cleanup" className="font-semibold text-brand-blue hover:underline">
            ← Post-construction cleanup services
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
        heading="Ready to schedule post-construction cleanup in Henderson?"
        sub={`Free quotes for post-construction cleanup across Henderson and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
