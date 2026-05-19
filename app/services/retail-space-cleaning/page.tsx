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
  title: 'Retail Space Cleaning in Las Vegas, NV | Final Touch',
  description:
    'Retail cleaning for storefronts and commercial spaces in Las Vegas, Henderson, and Clark County, NV. Consistent standard every visit. Call (702) 444-5077.',
  alternates: { canonical: '/services/retail-space-cleaning' },
  openGraph: {
    title: 'Retail Space Cleaning in Las Vegas, NV | Final Touch Cleaning',
    description:
      'Customer-ready cleans for storefronts and retail interiors across Clark County, NV. Scheduled around your store hours. Free quotes. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/retail-space-cleaning`,
  },
};

const faq = [
  {
    q: 'What does retail space cleaning include?',
    a: 'Retail space cleaning covers sales floors, display areas, fitting rooms, customer restrooms, stockrooms, entrances, and glass surfaces. We address floor care, dusting of fixtures and shelves, high-touch surface sanitizing, and entrance and threshold maintenance. Scope is confirmed for your specific retail format during the walkthrough.',
  },
  {
    q: 'How often should a retail space be cleaned?',
    a: 'Most retail operations benefit from nightly or every-other-night cleaning, depending on foot traffic and store hours. High-traffic retail or large square footage may warrant daily service. We recommend discussing your store schedule during a free walkthrough to set the right frequency.',
  },
  {
    q: 'How is retail cleaning different from janitorial services?',
    a: 'Retail cleaning is scoped specifically for customer-facing spaces: sales floors, displays, fitting rooms, and entrance presentation. Janitorial services describe a broader ongoing facility maintenance program. For many retail operations the two overlap. We scope the right approach for your store during the walkthrough.',
  },
  {
    q: 'Can you clean retail spaces after hours?',
    a: 'Yes. After-hours scheduling is common for retail cleaning to avoid disruption to customers and staff. Timing is confirmed during the walkthrough based on your store hours of operation.',
  },
  {
    q: 'Who hires retail space cleaning in Las Vegas?',
    a: 'Retail store owners, franchise operators, shopping center tenants, boutique and specialty store owners, and property managers of retail-format spaces across Clark County. Whether you operate a single storefront or multiple locations, a consistent clean supports the customer experience.',
  },
  {
    q: 'Does Final Touch handle retail cleaning in Henderson and North Las Vegas?',
    a: 'Yes. We serve retail cleaning clients across Clark County, Nevada, including Las Vegas, Henderson, North Las Vegas, and Boulder City. The same team and same finishing standard applies regardless of which city your store is in.',
  },
  {
    q: 'How do I get a retail cleaning quote in Las Vegas?',
    a: `Call ${SITE.phone.display} or request a free quote online. For retail spaces, we schedule a walkthrough to confirm your floor plan, scope, and schedule before quoting. No templated rates applied without seeing your space.`,
  },
];

const current = SERVICES.find((s) => s.slug === 'retail-space-cleaning')!;
const siblings = SERVICES.filter((s) => s.slug !== 'retail-space-cleaning');

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
  areaServed: [SITE.serviceArea.county, ...SITE.serviceArea.cities].map(
    (name) => ({ '@type': 'City', name: `${name}, ${SITE.serviceArea.stateAbbr}` })
  ),
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
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Retail Space Cleaning',
      item: `${SITE.url}/services/retail-space-cleaning`,
    },
  ],
};

export default function RetailSpaceCleaningPage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection
        eyebrow="Retail Cleaning"
        heading="Retail Space Cleaning in Las Vegas, NV"
        sub={`Customer-ready cleans for storefronts and retail interiors across ${SITE.serviceArea.county}. Consistent standard, scheduled around your store hours.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={current.image}
      />

      {/* 2. Quick Answer */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue font-body">
            What it is
          </p>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black">
            Retail space cleaning in Las Vegas, NV
          </h2>
          <p className="mt-5 text-base sm:text-lg text-brand-black leading-relaxed">
            Final Touch provides retail space cleaning for storefronts and commercial retail
            interiors across {SITE.serviceArea.county}, Nevada. Retail cleaning is scoped to
            customer-facing spaces: sales floors, display areas, fitting rooms, glass, entrances,
            and restrooms. We schedule around your store hours so cleaning does not interrupt
            your business. The scope and frequency are confirmed during a free walkthrough. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            or{' '}
            <Link href={ROUTES.freeQuote} className="text-brand-blue font-semibold hover:underline">
              request a free quote
            </Link>{' '}
            to set up the walkthrough.
          </p>
        </div>
      </section>

      {/* 3. Who this is for */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who we serve"
            heading="Retail operations across Clark County."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'Retail store owners',
                body: 'Boutiques, specialty stores, and independent retailers whose customer experience starts the moment someone walks in the door.',
              },
              {
                title: 'Franchise operators',
                body: 'Franchise locations with brand cleanliness standards that need a consistent, reliable local cleaning partner.',
              },
              {
                title: 'Shopping center tenants',
                body: 'Retail suites and storefront tenants in commercial centers across Las Vegas, Henderson, and Clark County.',
              },
              {
                title: 'Showrooms and galleries',
                body: 'Display-heavy spaces where dust, fingerprints, and floor buildup are visible to every customer who visits.',
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
            heading="What retail space cleaning covers."
            sub="Scope is confirmed for your specific retail format. The list below reflects what a thorough retail clean addresses."
          />
          <ul className="mt-8 space-y-3">
            {[
              'Sales floors: vacuuming, sweeping, and mopping',
              'Display areas, shelving, and fixtures',
              'Fitting rooms and dressing areas',
              'Entrance and threshold maintenance',
              'Glass doors, windows, and display cases',
              'Customer restrooms',
              'Stockroom and back-of-house areas',
              'Checkout counters and high-touch surfaces',
              'Baseboards and floor edges',
              'Trash removal',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Scope is built around your specific store format during the walkthrough. If you have
            brand cleaning standards or a landlord-required checklist, share it when you schedule.
          </p>
          <p className="mt-4 text-sm">
            Need ongoing facility maintenance beyond retail cleaning?{' '}
            <Link href={ROUTES.services + '/janitorial-services'} className="text-brand-blue font-semibold hover:underline">
              See our janitorial services
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 5. Why Final Touch */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why Final Touch"
            heading="Consistent standard, every time your doors open."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-3 lg:gap-6">
            {[
              {
                title: 'Same standard on every visit',
                body: 'Retail cleaning only works when the result is consistent. Same crew, same checklist, same finishing standard on every scheduled visit.',
              },
              {
                title: 'Scheduled around your hours',
                body: 'After-hours and pre-opening scheduling keeps cleaning out of your customers way. We work your schedule, not ours.',
              },
              {
                title: 'Family-owned and local',
                body: `${SITE.owners} run Final Touch from Southern Nevada. When something needs to change about your service, you reach the owners directly, not a regional coordinator.`,
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

      {/* 6. Process */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader eyebrow="How it works" heading="From walkthrough to customer-ready store." />
          <ol className="mt-10 space-y-8">
            {[
              {
                n: '01',
                title: 'Tell us about your store',
                body: `Call ${SITE.phone.display} or request a quote online. Let us know your retail format, store size, and how often you need cleaning.`,
              },
              {
                n: '02',
                title: 'Store walkthrough',
                body: 'We visit your space to see the floor plan, surface types, and any specific areas or requirements before quoting.',
              },
              {
                n: '03',
                title: 'Scope and schedule confirmed',
                body: 'We confirm frequency, timing, and scope based on your store hours and what the walkthrough showed. No guesswork.',
              },
              {
                n: '04',
                title: 'Ongoing retail cleaning',
                body: 'Regular visits on your confirmed schedule. Same standard every time. Reach us directly if anything needs adjustment.',
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-6">
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-soft-blue text-brand-blue font-semibold text-sm font-body"
                >
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-brand-black">{step.title}</h3>
                  <p className="mt-1.5 text-base text-muted leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. Service areas */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Service area"
            heading="Retail cleaning across Clark County."
            sub={`We serve retail cleaning clients throughout ${SITE.serviceArea.county}, Nevada, including major retail corridors in Las Vegas and Henderson.`}
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {[
              { name: 'Las Vegas, NV', href: '/services/retail-space-cleaning/las-vegas' },
              { name: 'Henderson, NV', href: '/services/retail-space-cleaning/henderson' },
              { name: 'North Las Vegas, NV', href: '/services/retail-space-cleaning/north-las-vegas' },
              { name: 'Boulder City, NV', href: '/services/retail-space-cleaning/boulder-city' },
              { name: 'Clark County, NV', href: '/services/retail-space-cleaning/clark-county' },
            ].map((city) => (
              <li key={city.name}>
                <Link
                  href={city.href}
                  className="inline-block rounded-full border border-border-subtle bg-brand-white px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
                >
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. Related services */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Other services"
            heading="More cleaning services from Final Touch."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {siblings.map((s) => (
              <li key={s.slug} className="h-full">
                <ServiceCard href={s.href} name={s.name} description={s.shortDescription} image={s.image} />
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm">
            <Link href={ROUTES.services} className="font-semibold text-brand-blue hover:underline">
              View all cleaning services →
            </Link>
          </p>
        </div>
      </section>

      {/* 9. FAQ */}
      <FAQSection
        heading="Retail space cleaning questions"
        items={faq}
        defaultOpenFirst
      />

      {/* 10. Final CTA */}
      <CTASection
        heading="Get a retail cleaning quote."
        sub={`Free walkthrough quotes for retail spaces across ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a request and we will get back to you.`}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
