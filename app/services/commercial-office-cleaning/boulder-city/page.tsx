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
  title: 'Commercial Office Cleaning in Boulder City, NV | Final Touch',
  description:
    'Commercial office cleaning in Boulder City, NV. Final Touch serves historic downtown businesses and offices across Boulder City. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/commercial-office-cleaning/boulder-city`,
  },
  openGraph: {
    title: 'Commercial Office Cleaning in Boulder City, NV | Final Touch',
    description:
      'Commercial office cleaning in Boulder City, NV. Final Touch serves historic downtown businesses and offices across Boulder City. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/commercial-office-cleaning/boulder-city`,
  },
};

const faq = [
  {
    q: 'What does commercial office cleaning include in Boulder City?',
    a: 'Commercial office cleaning covers workstation surfaces, lobbies and reception areas, break rooms, restrooms, high-touch surfaces, floor vacuuming and mopping, and trash removal. Recurring program scope (frequency, specific rooms, access timing) is confirmed during a walkthrough before the first clean.',
  },
  {
    q: "Does Final Touch serve small businesses in Boulder City's historic downtown?",
    a: "Yes. Final Touch serves the small-business community in Boulder City's historic downtown area, including shops, restaurants, and professional services offices. These are smaller-scale operations than a Las Vegas or Henderson commercial corridor. Scope and frequency are tailored to the actual size and character of the business, not a metro-scale template.",
  },
  {
    q: 'Does Final Touch travel to Boulder City for commercial cleaning?',
    a: `Yes. Final Touch serves Boulder City as part of its ${SITE.serviceArea.county} service area. Boulder City businesses are a regular part of the service territory, not a special case or an extra trip. Call ${SITE.phone.display} to discuss your business.`,
  },
  {
    q: 'Does tourism traffic affect cleaning needs for Boulder City businesses?',
    a: "Yes. Boulder City's proximity to Hoover Dam and Lake Mead National Recreation Area creates visitor traffic that peaks in spring and fall. Tourism-adjacent businesses (gift shops, outfitters, restaurants near the historic downtown) may see higher foot traffic during peak visitor periods and need more frequent cleaning during those seasons. Cleaning programs can be designed around your business's traffic patterns.",
  },
  {
    q: 'How much does office cleaning cost in Boulder City?',
    a: `Pricing depends on office size, frequency, and scope. Contact Final Touch at ${SITE.phone.display} or request a free quote. A walkthrough is scheduled before quoting. No rate is given without reviewing your space.`,
  },
];

const relatedServices = [
  'janitorial-services',
  'retail-space-cleaning',
  'post-construction-cleanup',
  'deep-cleaning',
  'move-in-cleaning',
  'move-out-cleaning',
] as const;

const relatedServiceCards = relatedServices
  .map((slug) => SERVICES.find((s) => s.slug === slug))
  .filter(Boolean) as typeof SERVICES[number][];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Commercial & Office Cleaning',
  serviceType: 'Commercial Office Cleaning',
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

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Commercial & Office Cleaning', item: `${SITE.url}/services/commercial-office-cleaning` },
    { '@type': 'ListItem', position: 4, name: 'Boulder City', item: `${SITE.url}/services/commercial-office-cleaning/boulder-city` },
  ],
};

export default function CommercialOfficeCleaningBoulderCityPage() {
  return (
    <>
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Commercial Office Cleaning · Boulder City, NV"
        heading="Commercial Office Cleaning in Boulder City, NV"
        sub={`Boulder City's commercial community is centered on a historic downtown of shops, restaurants, and professional services, businesses with a smaller-scale, community character distinct from the metro corridors in Las Vegas and Henderson. Final Touch provides commercial office cleaning for businesses across Boulder City and ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Commercial office cleaning in Boulder City is a recurring professional cleaning
            program for offices and businesses, covering workstations, common areas, restrooms,
            and high-touch surfaces on a schedule suited to the business.{' '}
            <Link href="/services/commercial-office-cleaning" className="text-brand-blue font-semibold hover:underline">
              Final Touch commercial cleaning
            </Link>{' '}
            serves Boulder City&apos;s historic downtown businesses, tourism-adjacent operations near
            Lake Mead, and small professional services offices throughout the city. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to discuss your business.
          </p>
        </div>
      </section>

      {/* 3. Who hires */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires office cleaning in Boulder City"
            heading="Historic downtown shops, tourism-adjacent businesses, and small professional offices."
            sub="Boulder City's commercial character is small-town and relationship-oriented, the most distinct commercial profile in Clark County."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Historic downtown shops and services',
                body: "Boulder City's historic downtown along Nevada Way and surrounding blocks has a small-business community of shops, boutiques, restaurants, and service providers. These are community-serving and tourism-adjacent businesses that need consistent, professional cleaning on a smaller scale.",
              },
              {
                title: 'Tourism-adjacent businesses near Lake Mead',
                body: 'Gift shops, outfitter businesses, and recreational services serving visitors to Hoover Dam and Lake Mead National Recreation Area. These businesses see seasonal variation in foot traffic and may need flexible cleaning schedules that adjust to visitor season patterns.',
              },
              {
                title: 'Small professional services offices',
                body: "Medical offices, insurance agencies, real estate offices, and similar professional services businesses serving Boulder City's residential community. Small-footprint, community-serving professional offices with consistent cleaning needs.",
              },
              {
                title: 'Lake Mead marina and recreation-adjacent businesses',
                body: 'Commercial operators serving the Lake Mead recreation corridor. These businesses may have seasonal operating patterns tied to visitor activity at the lake and nearby recreation areas.',
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
            heading="What commercial office cleaning covers."
            sub="Recurring office cleaning keeps your Boulder City business consistently presentable."
          />
          <ul className="mt-8 space-y-3">
            {[
              'Workstation surfaces and desk areas',
              'Lobbies, reception areas, and waiting rooms',
              'Conference and meeting rooms',
              'Break rooms and kitchen areas',
              'Restrooms: fixtures, tile, mirrors, replenishment setup',
              'High-touch surfaces: door handles, light switches, shared equipment',
              'Floor vacuuming and mopping or hard-floor care',
              'Trash removal and liner replacement',
              'Interior glass and partition surfaces',
              'Common-area surfaces throughout',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Recurring program scope, frequency, and access timing confirmed during the walkthrough.
            For tourism-adjacent businesses with seasonal patterns, cleaning frequency adjustments
            are discussed at that stage.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Commercial cleaning in Boulder City"
            heading="What defines Boulder City's commercial cleaning market."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'Small-town historic downtown character',
                body: "Boulder City's commercial core is a historic downtown district, not a suburban office park or a strip mall corridor. The businesses here are typically small-footprint (a single storefront, a one- or two-room office) operating in buildings with character and history. The cleaning programs appropriate for this environment are tailored to smaller scale and personal relationships, not metro-scale contracts.",
              },
              {
                heading: 'Tourism creates seasonal variation',
                body: "Boulder City's proximity to Hoover Dam and Lake Mead creates visitor-driven business activity that peaks in spring and fall and slows in summer and winter. Tourism-adjacent businesses (shops, restaurants, outfitters) experience this seasonal pattern in foot traffic. A cleaning program that can flex with the season is a practical fit for these businesses.",
              },
              {
                heading: 'Final Touch serves Boulder City as a regular client city',
                body: 'A common question from Boulder City business owners is whether a cleaning company based in the Las Vegas Valley will consistently show up for a smaller, more distant client. Final Touch serves Boulder City as a regular part of its Clark County service territory, same standard, same reliability, regardless of city size.',
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
            Commercial office cleaning in other cities
          </h2>
          <p className="mt-3 text-base text-muted">
            Final Touch serves commercial clients across{' '}
            <Link href={ROUTES.locations} className="text-brand-blue font-semibold hover:underline">
              all of {SITE.serviceArea.county}
            </Link>
            .
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              { label: 'Office Cleaning in Las Vegas, NV', href: '/services/commercial-office-cleaning/las-vegas' },
              { label: 'Office Cleaning in Henderson, NV', href: '/services/commercial-office-cleaning/henderson' },
              { label: 'Office Cleaning in North Las Vegas, NV', href: '/services/commercial-office-cleaning/north-las-vegas' },
              { label: 'Office Cleaning in Clark County, NV', href: '/services/commercial-office-cleaning/clark-county' },
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
        heading="Commercial office cleaning in Boulder City: common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/commercial-office-cleaning" className="font-semibold text-brand-blue hover:underline">
            ← Commercial office cleaning services
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
        heading="Need office cleaning in Boulder City?"
        sub={`Free quotes for commercial office cleaning across Boulder City and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
