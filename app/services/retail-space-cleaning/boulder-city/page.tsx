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
  title: 'Retail Space Cleaning in Boulder City, NV | Final Touch',
  description:
    'Retail space cleaning in Boulder City, NV. Final Touch serves historic downtown storefronts, tourism retail, and small businesses. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/services/retail-space-cleaning/boulder-city`,
  },
  openGraph: {
    title: 'Retail Space Cleaning in Boulder City, NV | Final Touch',
    description:
      'Retail space cleaning in Boulder City, NV. Final Touch serves historic downtown storefronts, tourism retail, and small businesses. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/retail-space-cleaning/boulder-city`,
  },
};

const faq = [
  {
    q: 'What does retail space cleaning include in Boulder City?',
    a: 'Retail space cleaning covers sales floor surfaces, entry and transition areas, customer restrooms, break room and back-of-house areas, display surfaces, and floor care. Scope confirmed during a walkthrough based on your store layout, hours, and specific needs.',
  },
  {
    q: 'Does Final Touch serve Boulder City historic downtown storefronts?',
    a: "Yes. Final Touch serves retail tenants in Boulder City's historic downtown area, including storefronts along Nevada Way and surrounding blocks. These are smaller-scale operations than a Las Vegas strip mall or Henderson shopping center. Scope and schedule are tailored to the size and character of the business.",
  },
  {
    q: 'Does the tourism season affect retail cleaning needs in Boulder City?',
    a: "Yes. Boulder City's proximity to Hoover Dam and Lake Mead National Recreation Area creates visitor traffic that peaks in spring and fall. Tourism-adjacent retail businesses near the historic downtown see higher foot traffic and more customer use of storefronts, restrooms, and entryways during those peak periods. Cleaning programs can be designed to flex with your store's seasonal traffic patterns.",
  },
  {
    q: 'Can Final Touch clean Boulder City stores after hours?',
    a: 'Yes. After-hours scheduling is available for Boulder City retail cleaning. Boulder City retail operates on standard, predictable hours. Most stores close in the early evening, making after-hours cleaning windows consistent and easy to work around. Hours and access confirmed during the walkthrough.',
  },
  {
    q: 'How much does retail space cleaning cost in Boulder City?',
    a: `Pricing depends on store size, frequency, and scope. Contact Final Touch at ${SITE.phone.display} or request a free quote. A walkthrough is scheduled before quoting.`,
  },
];

const relatedServices = [
  'commercial-office-cleaning',
  'janitorial-services',
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
  name: 'Retail Space Cleaning',
  serviceType: 'Retail Cleaning',
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
    { '@type': 'ListItem', position: 3, name: 'Retail Space Cleaning', item: `${SITE.url}/services/retail-space-cleaning` },
    { '@type': 'ListItem', position: 4, name: 'Boulder City', item: `${SITE.url}/services/retail-space-cleaning/boulder-city` },
  ],
};

export default function RetailSpaceCleaningBoulderCityPage() {
  return (
    <>
      {/* 1. Hero. Hero background photo will be added later. */}
      <HeroSection
        eyebrow="Retail Space Cleaning · Boulder City, NV"
        heading="Retail Space Cleaning in Boulder City, NV"
        sub={`Boulder City's retail community is centered on a historic downtown that draws both local residents and tourists visiting Hoover Dam and Lake Mead. Final Touch provides scheduled retail space cleaning for storefronts and retail businesses across Boulder City and ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Retail space cleaning in Boulder City is a scheduled professional clean for storefronts
            and retail interiors, covering sales floors, customer restrooms, display areas, and
            back-of-house on a program designed around your store&apos;s hours and seasonal patterns.{' '}
            <Link href="/services/retail-space-cleaning" className="text-brand-blue font-semibold hover:underline">
              Final Touch retail cleaning
            </Link>{' '}
            serves Boulder City&apos;s historic downtown storefronts, tourism-adjacent shops, and
            small community retailers. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            to set up a walkthrough.
          </p>
        </div>
      </section>

      {/* 3. Who hires */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires retail cleaning in Boulder City"
            heading="Historic downtown storefronts, tourism retail, restaurants, and community retailers."
            sub="Boulder City retail is historic, small-scale, and tourism-adjacent, distinct from every other retail market in Clark County."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Historic downtown storefronts',
                body: 'Shops, boutiques, and specialty retailers along Nevada Way and the historic downtown corridor. These are small-footprint businesses serving both local residents and visitors. A clean, well-maintained storefront matters for both audiences.',
              },
              {
                title: 'Tourism and recreation-adjacent retail',
                body: 'Gift shops, outdoor and recreation retailers, and businesses serving visitors to Hoover Dam and Lake Mead National Recreation Area. These operations see seasonal variation in customer traffic and may need cleaning programs that flex accordingly.',
              },
              {
                title: 'Restaurant and dining establishments',
                body: "Boulder City's dining scene includes restaurants and cafes along the historic downtown corridor. Front-of-house dining areas, customer restrooms, and entryways all need consistent cleaning, particularly during peak visitor seasons.",
              },
              {
                title: 'Community-serving small retailers',
                body: "Pharmacies, hardware stores, and local service retail serving Boulder City's residential base. These community-serving stores have consistent cleaning needs year-round regardless of tourism patterns.",
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
            heading="What retail space cleaning covers."
            sub="Retail cleaning keeps your Boulder City store customer-ready on a consistent schedule."
          />
          <ul className="mt-8 space-y-3">
            {[
              'Sales floor surfaces and display areas',
              'Store entry and transition zones',
              'Fitting rooms (where applicable)',
              'Customer restrooms',
              'Break room and back-of-house areas',
              'Floor care: vacuuming, mopping, or hard-floor maintenance',
              'High-touch surfaces: counters, door handles, POS area',
              'Interior glass and window surfaces',
              'Trash removal and liner replacement',
              'Storage areas and receiving zones (scope confirmed per store)',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Scope confirmed during the walkthrough. For tourism-adjacent storefronts with seasonal
            patterns, cleaning frequency adjustments are discussed at that stage.
          </p>
        </div>
      </section>

      {/* 5. Local context */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Retail cleaning in Boulder City"
            heading="What makes Boulder City retail different from the metro."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: 'Historic downtown retail, not strip mall retail',
                body: "Boulder City's retail is concentrated in a historic downtown district, not a suburban strip mall or a power center. The storefronts along Nevada Way and surrounding blocks are smaller-footprint businesses in historic buildings with character. The cleaning approach is tailored to these spaces: smaller scale, personal relationships, and attention to the details that matter in a historic commercial district.",
              },
              {
                heading: 'Tourism seasonality creates peak demand',
                body: 'Hoover Dam and Lake Mead attract significant visitor traffic to Boulder City, with spring and fall as the peak periods. Tourism-adjacent retailers and restaurants see more customers during these seasons, which means higher use of storefronts, restrooms, and entry areas. A cleaning program that increases frequency during peak visitor periods and returns to standard during the off-season is a practical approach for these businesses.',
              },
              {
                heading: 'Standard, predictable operating hours',
                body: 'Boulder City retail operates on standard hours. Most stores close in the early evening without the extended late-night operations common in Las Vegas retail or the variable schedules of NLV commercial corridors. After-hours cleaning windows are consistent and easy to work around, making scheduling straightforward for Boulder City retailers.',
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
            Retail space cleaning in other cities
          </h2>
          <p className="mt-3 text-base text-muted">
            Final Touch serves retail clients across{' '}
            <Link href={ROUTES.locations} className="text-brand-blue font-semibold hover:underline">
              all of {SITE.serviceArea.county}
            </Link>
            .
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              { label: 'Retail Cleaning in Las Vegas, NV', href: '/services/retail-space-cleaning/las-vegas' },
              { label: 'Retail Cleaning in Henderson, NV', href: '/services/retail-space-cleaning/henderson' },
              { label: 'Retail Cleaning in North Las Vegas, NV', href: '/services/retail-space-cleaning/north-las-vegas' },
              { label: 'Retail Cleaning in Clark County, NV', href: '/services/retail-space-cleaning/clark-county' },
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
        heading="Retail space cleaning in Boulder City: common questions"
        defaultOpenFirst
      />

      {/* Back-links */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services/retail-space-cleaning" className="font-semibold text-brand-blue hover:underline">
            ← Retail space cleaning services
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
        heading="Need retail space cleaning in Boulder City?"
        sub={`Free quotes for retail cleaning across Boulder City and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
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
