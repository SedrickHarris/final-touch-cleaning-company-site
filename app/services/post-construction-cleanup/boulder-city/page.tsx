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
  title: 'Post-Construction Cleanup in Boulder City, NV | Final Touch',
  description:
    'Post-construction cleanup in Boulder City, NV. Final Touch serves home renovations and commercial remodels across Boulder City. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/post-construction-cleanup/boulder-city`,
  },
  openGraph: {
    title: 'Post-Construction Cleanup in Boulder City, NV | Final Touch',
    description:
      'Post-construction cleanup in Boulder City, NV. Final Touch serves home renovations and commercial remodels across Boulder City. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/post-construction-cleanup/boulder-city`,
  },
};

const faq = [
  {
    q: 'What does post-construction cleanup include in Boulder City?',
    a: 'Post-construction cleanup covers removal of construction debris, drywall dust from all surfaces including vents and HVAC returns, adhesive and caulk residue, window film and glass cleaning, fixture cleaning, floor surfaces, and detail cleaning throughout. Scope is confirmed based on the specific project before the clean begins.',
  },
  {
    q: 'Who typically needs post-construction cleanup in Boulder City?',
    a: "Unlike Las Vegas or North Las Vegas, Boulder City's post-construction cleanup demand is almost entirely renovation and remodel-driven rather than new-build driven. The city has little large-scale new residential development. The clients are homeowners renovating established properties — kitchens, bathrooms, room additions — and small commercial owners updating historic downtown storefronts. New-build post-construction cleanup is rare here; renovation cleanup is the norm.",
  },
  {
    q: 'Is post-construction cleanup different for older Boulder City homes?',
    a: "Yes. Renovating an older Boulder City home means working around and through existing systems — original HVAC ductwork, older plumbing chases, period cabinetry that may be retained around the renovation area. Drywall dust from a kitchen or bathroom renovation spreads through an older home's existing systems in ways it wouldn't in a newer sealed build. A thorough post-renovation cleanup is especially important in an older home where dust settles in original ductwork, inside original cabinetry, and on surfaces that have been in place for decades.",
  },
  {
    q: 'Does Final Touch serve Boulder City for post-construction cleanup?',
    a: `Yes. Final Touch serves Boulder City as part of its ${SITE.serviceArea.county} service area. Boulder City is a regular part of the service territory. Call ${SITE.phone.display} to discuss your project.`,
  },
  {
    q: 'How much does post-construction cleanup cost in Boulder City?',
    a: `Cost depends on the size and scope of the project. Contact Final Touch at ${SITE.phone.display} or request a free quote. A brief walkthrough or site description is the starting point for any estimate.`,
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
  areaServed: { '@type': 'City', name: `Boulder City, ${SITE.serviceArea.stateAbbr}` },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
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

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Post-Construction Cleanup', item: `${SITE.url}/services/post-construction-cleanup` },
    { '@type': 'ListItem', position: 4, name: 'Boulder City', item: `${SITE.url}/services/post-construction-cleanup/boulder-city` },
  ],
};

export default function PostConstructionCleanupBoulderCityPage() {
  return (
    <>
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Post-Construction Cleanup · Boulder City, NV"
        heading="Post-Construction Cleanup in Boulder City, NV"
        sub={`Boulder City is an established community with little large-scale new development — post-construction cleanup here is driven by homeowners renovating older properties and small commercial owners updating historic downtown storefronts. Final Touch serves renovation cleanup across Boulder City and ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Post-construction cleanup in Boulder City is the professional cleaning pass after
            a renovation or remodel — removing drywall dust, adhesive residue, debris, and
            construction particulate from a space that looks finished but is not truly clean.{' '}
            <Link href="/services/post-construction-cleanup" className="text-brand-blue font-semibold hover:underline">
              Final Touch post-construction cleanup
            </Link>{' '}
            serves Boulder City homeowners renovating established properties, buyers who remodel
            before moving in, and small commercial owners updating downtown storefronts. Call{' '}
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
            eyebrow="Who hires post-construction cleanup in Boulder City"
            heading="Renovation owners and small commercial remodelers in an established community."
            sub="Boulder City's post-construction demand is almost entirely renovation-driven — the city has little new residential development to create new-build cleanup demand."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Homeowners renovating established Boulder City properties',
                body: 'The primary segment: Boulder City residents updating kitchens, bathrooms, and rooms in older homes. A renovation in an established home spreads drywall dust through the existing HVAC system and into rooms that were not directly part of the project.',
              },
              {
                title: 'Character home restoration projects',
                body: 'Owners restoring or carefully updating older Boulder City homes with original materials — updating while preserving period character. Post-renovation cleanup after this type of careful work requires attention to what the surfaces are and how to clean them safely.',
              },
              {
                title: 'Small commercial renovation owners',
                body: 'Historic downtown shops and storefronts that renovate or update their spaces — new interiors, updated storefronts, kitchen renovations in restaurants. These are smaller-scale commercial projects than metro commercial buildouts.',
              },
              {
                title: 'New buyers who renovate before moving in',
                body: "Metro relocators buying older Boulder City homes and completing renovations before occupying. A post-renovation cleanup bridges the gap between 'renovation complete' and 'genuinely ready to move in.'",
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
            sub="Construction and renovation residue goes further than visible debris."
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
            Scope confirmed per project. For older Boulder City homes being renovated, HVAC
            returns, original cabinetry, and period surfaces are confirmed during the walkthrough.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Post-construction cleanup in Boulder City"
            heading="Why renovation cleanup in Boulder City is different from the metro."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'Renovation-only demand — no large new development',
                body: "Boulder City has not seen the large-scale residential development that drives post-construction cleanup volume in North Las Vegas or Henderson. The city's established character and development restrictions mean there are no new subdivisions and limited new commercial construction. Post-construction cleanup here is almost entirely renovation-driven — homeowners updating established properties, not buyers moving into new builds.",
              },
              {
                heading: 'Older homes and existing systems complicate dust control',
                body: 'Renovating an older home in Boulder City means working through existing systems that were designed before modern dust control was standard. Original HVAC ductwork, older plumbing chases, and retained period cabinetry in adjacent rooms allow drywall dust to travel further and settle in more places than in a newer sealed home. A post-renovation cleanup that specifically addresses vents, ductwork returns, and surfaces in rooms adjacent to the renovation area is especially important here.',
              },
              {
                heading: 'Historic downtown commercial renovation',
                body: "Boulder City's historic downtown along Nevada Way has small commercial properties that periodically update or renovate their spaces. These are smaller-footprint jobs than metro commercial renovations, but they create the same post-construction cleanup needs — particularly in storefronts with original surfaces and materials that need careful cleaning after construction work.",
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
            sub="Final Touch provides seven cleaning services across Boulder City and Clark County."
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
              { label: 'Post-Construction Cleanup in North Las Vegas, NV', href: '/services/post-construction-cleanup/north-las-vegas' },
              { label: 'Post-Construction Cleanup in Clark County, NV', href: '/services/post-construction-cleanup/clark-county' },
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
        heading="Post-construction cleanup in Boulder City — common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/post-construction-cleanup" className="font-semibold text-brand-blue hover:underline">
            ← Post-construction cleanup services
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
        heading="Ready to schedule post-construction cleanup in Boulder City?"
        sub={`Free quotes for renovation and remodel cleanup across Boulder City and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
