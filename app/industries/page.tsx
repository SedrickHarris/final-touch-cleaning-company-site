import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import SectionHeader from '@/components/shared/SectionHeader';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'Industry Cleaning Services in Las Vegas, NV | Final Touch',
  description:
    'Final Touch provides commercial cleaning tailored to your industry across Clark County, NV: medical offices, law firms, restaurants, retail stores, and property management. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/industries`,
  },
};

const industries = [
  {
    slug: 'medical-office-cleaning',
    name: 'Medical and Dental Office Cleaning',
    description:
      'Professional cleaning for primary care, dental, and specialist practices across Clark County. Surface-disinfection focused, patient-area ready, with access and scheduling coordinated around your practice hours.',
    cities: [
      { city: 'Las Vegas', href: '/industries/medical-office-cleaning/las-vegas' },
      { city: 'Henderson', href: '/industries/medical-office-cleaning/henderson' },
      { city: 'North Las Vegas', href: '/industries/medical-office-cleaning/north-las-vegas' },
    ],
  },
  {
    slug: 'law-firm-cleaning',
    name: 'Law Firm Cleaning',
    description:
      'After-hours and scheduled cleaning for law offices, conference rooms, and client suites in Las Vegas, Henderson, and North Las Vegas. Confidentiality respected. Access coordinated with your staff.',
    cities: [
      { city: 'Las Vegas', href: '/industries/law-firm-cleaning/las-vegas' },
      { city: 'Henderson', href: '/industries/law-firm-cleaning/henderson' },
      { city: 'North Las Vegas', href: '/industries/law-firm-cleaning/north-las-vegas' },
    ],
  },
  {
    slug: 'restaurant-cleaning',
    name: 'Restaurant Cleaning',
    description:
      'Front-of-house cleaning for full-service restaurants and bars. Dining rooms, bar areas, host stands, restrooms, and offices. Commercial kitchen and food-prep areas are outside our scope.',
    cities: [
      { city: 'Las Vegas', href: '/industries/restaurant-cleaning/las-vegas' },
      { city: 'Henderson', href: '/industries/restaurant-cleaning/henderson' },
      { city: 'North Las Vegas', href: '/industries/restaurant-cleaning/north-las-vegas' },
    ],
  },
  {
    slug: 'retail-store-cleaning',
    name: 'Retail Store Cleaning',
    description:
      'Before-open and after-close cleaning for retail shops, showrooms, and strip center tenants. Display fixtures, fitting rooms, POS areas, and all customer-facing surfaces.',
    cities: [
      { city: 'Las Vegas', href: '/industries/retail-store-cleaning/las-vegas' },
      { city: 'Henderson', href: '/industries/retail-store-cleaning/henderson' },
      { city: 'North Las Vegas', href: '/industries/retail-store-cleaning/north-las-vegas' },
    ],
  },
  {
    slug: 'property-management-cleaning',
    name: 'Property Management Cleaning',
    description:
      'Cleaning programs for residential rental properties, HOA common areas, and multi-unit buildings. Unit turns, common-area maintenance, and ongoing programs across your portfolio.',
    cities: [
      { city: 'Las Vegas', href: '/industries/property-management-cleaning/las-vegas' },
      { city: 'Henderson', href: '/industries/property-management-cleaning/henderson' },
      { city: 'North Las Vegas', href: '/industries/property-management-cleaning/north-las-vegas' },
    ],
  },
];

const whyItems = [
  {
    title: 'Scope matched to your industry',
    body: 'A dental office has different surface priorities than a restaurant dining room. A retail store has fixture and display needs a law firm does not share. Final Touch adapts scope to the way your business operates, confirmed during a walkthrough before work begins.',
  },
  {
    title: 'Scheduling around your operations',
    body: 'Law firms need after-hours access around client meetings. Restaurants need early-morning cleans before open. Medical offices need cleaning that does not interrupt patient flow. We schedule around your hours, not ours.',
  },
  {
    title: 'Consistent standard across locations',
    body: 'Property managers and multi-location businesses need the same result at every property without supervising each visit. Final Touch maintains a consistent standard across your portfolio.',
  },
  {
    title: 'Owner-led by Scott and Nicole Maland',
    body: 'Final Touch is family-owned and operated in Clark County. Scott and Nicole oversee every commercial account personally. Your business does not get handed off to a rotation of subcontractors.',
  },
  {
    title: 'Licensed and insured in Nevada',
    body: 'Final Touch is licensed and fully insured in Nevada. For commercial accounts where vendor documentation is required, it is available on request.',
  },
  {
    title: 'Free walkthrough before every program',
    body: 'Every new commercial account starts with a walkthrough. We confirm scope, identify your priorities, and provide a written estimate before any work begins. No obligation.',
  },
];

const audiences = [
  {
    title: 'Individual business owners',
    body: 'Owners of medical practices, law offices, restaurants, and retail shops who need a cleaning partner that understands their industry and does not require hand-holding on every visit.',
  },
  {
    title: 'Property management companies',
    body: 'Portfolio managers overseeing residential rental properties, HOA buildings, and commercial assets across Clark County who need a single reliable vendor applying the same standard county-wide.',
  },
  {
    title: 'Multi-location and franchise operators',
    body: 'Retail franchisees, multi-location medical groups, and restaurant groups who need consistent cleaning across every location without managing a separate vendor in each city.',
  },
  {
    title: 'Building and facility managers',
    body: 'Commercial building managers, office park managers, and HOA facility directors responsible for common areas, lobbies, restrooms, and shared spaces across one or more properties.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Request a quote',
    body: 'Call (702) 444-5077 or submit a request online. Tell us your industry, location, and what you need cleaned.',
  },
  {
    step: '02',
    title: 'Walkthrough',
    body: 'Scott or Nicole visits your space to confirm scope, identify your priorities, and understand your access and scheduling requirements.',
  },
  {
    step: '03',
    title: 'Written estimate',
    body: 'You receive a written estimate before any work begins. No surprises. No obligation until you approve.',
  },
  {
    step: '04',
    title: 'Cleaning begins',
    body: 'Work starts on the agreed schedule. The same standard every visit, with the same owner-led oversight your business expects.',
  },
];

// FAQ array: FAQPage JSON-LD is generated from this same array.
// Do not add schema-only Q/A. Every answer here must match the visible FAQ exactly.
const faq = [
  {
    q: 'What industries does Final Touch Cleaning Company serve?',
    a: 'Final Touch serves five commercial industries across Clark County, Nevada: medical and dental offices, law firms, restaurants (front-of-house only), retail stores, and property-managed residential and commercial buildings. Each industry has its own scope, scheduling requirements, and access standards. Select your industry above for city-specific details, or call (702) 444-5077.',
  },
  {
    q: 'What is the difference between general commercial cleaning and industry-specific cleaning?',
    a: 'General commercial cleaning applies a standard office routine to any space. Industry-specific cleaning adapts scope, timing, and surface priorities to how a particular type of business operates. A dental office has different access and surface requirements than a restaurant dining room, and a retail store has fixture and display needs that a law firm does not share. Final Touch adjusts the approach to match your industry.',
  },
  {
    q: 'Does Final Touch clean businesses in Henderson and North Las Vegas, not just Las Vegas?',
    a: 'Yes. Final Touch provides industry-specific commercial cleaning across Las Vegas, Henderson, and North Las Vegas for all five verticals. Service also covers Boulder City and unincorporated Clark County. Call (702) 444-5077 to confirm coverage for your specific location.',
  },
  {
    q: 'Can Final Touch handle cleaning for multiple business locations?',
    a: 'Yes. Final Touch works with property management companies, multi-location retailers, and franchise operators across Clark County who need the same standard applied at every location. Contact us to discuss a portfolio or multi-location program.',
  },
  {
    q: 'How do I get a commercial cleaning quote for my business?',
    a: 'Call (702) 444-5077 or submit a request at the free quote page. Scott and Nicole will follow up to schedule a walkthrough, confirm scope, and provide a written estimate before any work begins. There is no obligation and no cost for the walkthrough.',
  },
  {
    q: 'Does Final Touch require a long-term contract for commercial cleaning?',
    a: 'Scope and scheduling terms are discussed during the walkthrough and confirmed before work begins. Final Touch works with businesses on recurring programs as well as one-time cleans depending on what the business needs. Ask during your walkthrough.',
  },
  {
    q: 'Why hire an industry-specific cleaning company instead of a general cleaner?',
    a: 'A general cleaner applies the same routine regardless of what your business does. An industry-specific approach means your space is cleaned the way your operation requires, with the right scope, timing, and awareness of the access, privacy, or presentation standards your industry demands. Final Touch is owner-led by Scott and Nicole Maland, family-owned, and licensed and insured in Nevada.',
  },
  {
    q: 'Is Final Touch licensed and insured for commercial cleaning in Nevada?',
    a: 'Yes. Final Touch Cleaning Company is licensed and fully insured in Nevada. For commercial accounts where vendor documentation is required, it is available on request.',
  },
];

const collectionPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Industry Cleaning Services | Final Touch Cleaning Company',
  description:
    'Commercial cleaning tailored to your industry across Clark County, NV. Medical offices, law firms, restaurants, retail stores, and property management.',
  url: `${SITE.url}/industries`,
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone.href.replace('tel:', ''),
    email: SITE.email.display,
  },
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
    { '@type': 'ListItem', position: 2, name: 'Industries', item: `${SITE.url}/industries` },
  ],
};

const serviceAreaChips = [
  { label: 'Las Vegas', href: '/locations/las-vegas' },
  { label: 'Henderson', href: '/locations/henderson' },
  { label: 'North Las Vegas', href: '/locations/north-las-vegas' },
  { label: 'Boulder City', href: '/locations/boulder-city' },
  { label: 'Clark County', href: '/locations/clark-county' },
  { label: 'All Locations', href: ROUTES.locations },
];

const relatedServices = [
  { label: 'Commercial & Office Cleaning', href: '/services/commercial-office-cleaning' },
  { label: 'Janitorial Services', href: '/services/janitorial-services' },
  { label: 'Post-Construction Cleanup', href: '/services/post-construction-cleanup' },
  { label: 'Retail Space Cleaning', href: '/services/retail-space-cleaning' },
  { label: 'Deep Cleaning', href: '/services/deep-cleaning' },
  { label: 'Move-In Cleaning', href: '/services/move-in-cleaning' },
  { label: 'Move-Out Cleaning', href: '/services/move-out-cleaning' },
];

export default function IndustriesHubPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* 1. Hero */}
      <HeroSection
        eyebrow="Industry-Specific Commercial Cleaning"
        heading="Cleaning Built Around How Your Business Works"
        sub={`Final Touch provides commercial cleaning tailored to your industry across ${SITE.serviceArea.county}, Nevada. Select your industry below or call ${SITE.phone.display} to request a free walkthrough and estimate.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/heroes/commercial-cleaning-industries-hub-hero-image.webp',
          alt: 'Industry cleaning services in Las Vegas, NV by Final Touch.',
        }}
      />

      {/* 2. Direct-answer paragraph */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Final Touch Cleaning Company provides commercial cleaning across five industries in{' '}
            {SITE.serviceArea.county}, Nevada:{' '}
            <Link
              href="/industries/medical-office-cleaning/las-vegas"
              className="text-brand-blue font-semibold hover:underline"
            >
              medical and dental offices
            </Link>
            ,{' '}
            <Link
              href="/industries/law-firm-cleaning/las-vegas"
              className="text-brand-blue font-semibold hover:underline"
            >
              law firms
            </Link>
            ,{' '}
            <Link
              href="/industries/restaurant-cleaning/las-vegas"
              className="text-brand-blue font-semibold hover:underline"
            >
              restaurants
            </Link>{' '}
            (front-of-house only),{' '}
            <Link
              href="/industries/retail-store-cleaning/las-vegas"
              className="text-brand-blue font-semibold hover:underline"
            >
              retail stores
            </Link>
            , and{' '}
            <Link
              href="/industries/property-management-cleaning/las-vegas"
              className="text-brand-blue font-semibold hover:underline"
            >
              property-managed buildings
            </Link>
            . Commercial decision-makers search for cleaning by industry, not by the word
            commercial. Each vertical has its own scope, scheduling requirements, and access
            standards specific to the way that type of business runs. Select your industry below to
            see what Final Touch does for businesses like yours, or call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>{' '}
            to talk through your space.
          </p>
        </div>
      </section>

      {/* 3. Industry vertical card grid */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Industries We Serve"
            heading="Select your industry."
            sub="Each page covers scope, scheduling, city-specific service details, and FAQs for that type of business."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <li
                key={ind.slug}
                className="flex flex-col rounded-[14px] border border-border-subtle bg-brand-white p-6 shadow-sm"
              >
                <h2 className="font-display text-xl font-semibold text-brand-black">{ind.name}</h2>
                <p className="mt-3 text-sm text-muted leading-relaxed flex-1">{ind.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {ind.cities.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="inline-flex min-h-[44px] items-center rounded-full bg-light-gray px-4 py-2 text-sm font-semibold text-brand-blue hover:bg-blue-50 transition-colors"
                    >
                      {c.city}
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Why industry-specific matters */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why It Matters"
            heading="One standard does not fit every business."
            sub="The scope, timing, and access requirements for a medical office are not the same as a restaurant, a law firm, or a retail shop. Final Touch adapts to the way your business operates."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {whyItems.map((item) => (
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

      {/* 5. Who we serve */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who We Serve"
            heading="Built for business owners, managers, and portfolio operators."
            sub="Final Touch works with individual business owners, multi-location operators, and portfolio managers across Clark County."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {audiences.map((item) => (
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

      {/* 6. How it works */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="How It Works"
            heading="From first call to first clean."
            sub="Every new commercial account starts the same way."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((item) => (
              <li
                key={item.step}
                className="rounded-[14px] border border-border-subtle bg-brand-white p-6"
              >
                <p className="text-3xl font-display font-semibold text-brand-blue">{item.step}</p>
                <h3 className="mt-3 font-display text-lg font-semibold text-brand-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Service area chips */}
      <section className="bg-light-gray border-y border-border-subtle">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-10 sm:py-12">
          <p className="text-sm font-semibold text-muted uppercase tracking-wide mb-4">
            Service cities
          </p>
          <div className="flex flex-wrap gap-3">
            {serviceAreaChips.map((chip) => (
              <Link
                key={chip.href}
                href={chip.href}
                className="inline-flex min-h-[44px] items-center rounded-full bg-brand-white px-4 py-2 text-sm font-semibold text-brand-blue border border-border-subtle hover:bg-blue-50 transition-colors"
              >
                {chip.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Related services */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Related Services"
            heading="Commercial services from Final Touch."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {relatedServices.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="inline-flex min-h-[44px] items-center rounded-full bg-light-gray px-4 py-2 text-sm font-semibold text-brand-blue hover:bg-blue-50 transition-colors"
              >
                {svc.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <FAQSection
        items={faq}
        heading="Frequently asked questions about industry cleaning."
        defaultOpenFirst
      />
      <div className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
          <p className="mt-8 text-sm text-muted">
            More questions?{' '}
            <Link href={ROUTES.faq} className="text-brand-blue font-semibold hover:underline">
              Read our full FAQ
            </Link>{' '}
            or{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              call {SITE.phone.display}
            </a>
            .
          </p>
        </div>
      </div>

      {/* 10. Final CTA */}
      <CTASection
        heading="Ready for cleaning built around your industry?"
        sub="Request a free walkthrough and estimate. Final Touch serves businesses across Clark County, Nevada."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
