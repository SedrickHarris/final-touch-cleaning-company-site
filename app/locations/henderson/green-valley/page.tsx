import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import HeroSection from '@/components/shared/HeroSection';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceCard from '@/components/shared/ServiceCard';
import { CTAS, SITE } from '@/lib/constants/site';
import { LOCATIONS, NEIGHBORHOODS, ROUTES, SERVICES } from '@/lib/constants/routes';
import Breadcrumb from '@/components/shared/Breadcrumb';

// Parent city derived from this neighborhood's own NEIGHBORHOODS record —
// single source of truth, no hardcoded parent slug. Distinct from the built
// `green-valley-ranch` leaf (different slug / different community).
const NEIGHBORHOOD = NEIGHBORHOODS.flatMap((g) => g.neighborhoods).find(
  (n) => n.slug === 'green-valley',
)!;
const PARENT_CITY = LOCATIONS.find((l) => l.slug === NEIGHBORHOOD.parentCity)!;

export const metadata: Metadata = {
  title: 'Green Valley Cleaning Services | Henderson, NV',
  description:
    'Family-owned home and commercial cleaning in Green Valley, Henderson, NV. Deep, recurring, and janitorial cleaning. Free quotes. Call (702) 444-5077.',
  alternates: { canonical: '/locations/henderson/green-valley' },
  openGraph: {
    title: 'Green Valley Cleaning Services | Henderson, NV | Final Touch Cleaning Company',
    description:
      'Scott & Nicole Maland serve Green Valley and all of Henderson. Home, deep, recurring, commercial, and janitorial cleaning. Free quotes across Clark County.',
    type: 'website',
    url: `${SITE.url}/locations/henderson/green-valley`,
  },
};

// Green Valley is an established, original master-planned area in central Henderson with a settled homeowner base -> commercial/janitorial first, then deep/recurring for mature homes (deep #3 ahead of move-out, vs Sunrise Manor's rental-turnover order). Kept distinct from the newer, upscale Green Valley Ranch page.
const GREEN_VALLEY_SERVICES = [
  SERVICES.find((s) => s.slug === 'commercial-office-cleaning')!,
  SERVICES.find((s) => s.slug === 'janitorial-services')!,
  SERVICES.find((s) => s.slug === 'deep-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-out-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-in-cleaning')!,
  SERVICES.find((s) => s.slug === 'retail-space-cleaning')!,
  SERVICES.find((s) => s.slug === 'post-construction-cleanup')!,
];

const faq = [
  {
    q: 'Does Final Touch serve Green Valley in Henderson?',
    a: `Yes, Final Touch Cleaning Company serves Green Valley as part of our Henderson and Clark County service area. We are a family-owned, owner-led company run by Scott and Nicole Maland, cleaning both homes and businesses throughout this established master-planned area of central Henderson. Request a free quote or call ${SITE.phone.display} to get started.`,
  },
  {
    q: 'What cleaning services do you offer in Green Valley?',
    a: 'We offer home and deep cleaning, recurring service, move-in and move-out cleaning, commercial and office cleaning, janitorial programs, retail space cleaning, and post-construction cleanup. Both households and businesses in Green Valley can request any of these services. Tell us your property type and what you need cleaned, and we will tailor the visit to fit it.',
  },
  {
    q: 'Do you offer recurring and deep cleaning for established homes in Green Valley?',
    a: "Yes. Green Valley is one of Henderson's established master-planned communities, and many of its homes benefit from recurring service and periodic deep cleaning to keep mature interiors, fixtures, and finishes in top shape. We clean the corners, baseboards, and detail areas a standard pass skips, on a schedule that fits your household. Ask about weekly, biweekly, or monthly service.",
  },
  {
    q: 'Can you clean our Green Valley business after hours?',
    a: "Yes. We can schedule cleaning after hours or overnight so your business day is never interrupted. This works well for the offices, retail spaces, and service businesses along Green Valley's commercial corridors that need a consistent, professional clean without disrupting customers or staff during open hours.",
  },
  {
    q: 'How do I get a cleaning quote for Green Valley?',
    a: `Request a free quote through our online form or call ${SITE.phone.display}. Tell us your property type, square footage, and what you need cleaned, and we will provide a free estimate for your Green Valley home or business. There is no obligation, and every clean is backed by our Blue Ribbon Guarantee.`,
  },
];

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  url: `${SITE.url}/locations/henderson/green-valley`,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  image: 'https://www.finaltouchcleaningteam.com/images/logo/final-touch-cleaning-company-logo.webp',
  sameAs: ['https://www.google.com/maps?cid=5303198646776788086'],
  areaServed: [
    { '@type': 'Place', name: 'Green Valley, Henderson, NV' },
    { '@type': 'Place', name: 'Henderson, NV' },
    { '@type': 'Place', name: 'Clark County, NV' },
  ],
  description:
    'Family-owned cleaning company serving Green Valley, Henderson, and Clark County, NV.',
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
  { label: 'Locations', href: '/locations' },
  { label: 'Henderson', href: '/locations/henderson' },
  { label: 'Green Valley' },
];

export default function GreenValleyPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <HeroSection
        eyebrow="Central Henderson"
        heading="Cleaning Services in Green Valley, Henderson, NV"
        sub="Family-owned home, deep, and commercial cleaning for Green Valley and Henderson. Backed by our Blue Ribbon Guarantee."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/locations/green-valley-henderson-commercial-cleaning-hero-image.webp',
          alt: 'Professional cleaning service by Final Touch in Green Valley, Henderson, NV.',
        }}
      />

      {/* 2. Quick neighborhood answer — direct-answer paragraph, first 100 words */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
          <p className="text-lg text-brand-black leading-relaxed">
            Final Touch Cleaning Company provides home and commercial cleaning throughout Green
            Valley, one of the original master-planned communities in central Henderson. We are a
            family-owned, owner-led company run by Scott and Nicole Maland, serving Green Valley as
            part of our Henderson and Clark County service area. Request a free quote or call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline">
              {SITE.phone.display}
            </a>{' '}
            to get started.
          </p>
        </div>
      </section>

      {/* 3. Local context — unique Green Valley prose (distinct from Green Valley Ranch) */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader eyebrow="About Green Valley" heading="Cleaning built for Green Valley." />
          <div className="mt-8 space-y-5 text-base sm:text-lg text-brand-black leading-relaxed">
            <p>
              Green Valley is one of the original master-planned communities in central Henderson and
              one of the earliest in the Las Vegas Valley. It is a large, established area of mature
              single-family neighborhoods, parks, and well-developed commercial corridors along routes
              such as Green Valley Parkway and Sunset Road. Its housing stock is largely established,
              with a settled homeowner base and long-standing local businesses.
            </p>
            <p>
              That established, family-oriented character shapes the cleaning we do here. Settled
              households across Green Valley book deep cleaning and recurring service to keep mature
              homes in top condition, with move-in and move-out cleans as residents transition. The
              area&apos;s established commercial corridors, offices, and retail rely on routine
              commercial and janitorial programs to stay presentation-ready. Whether you own a
              long-time family home or run a business along one of Green Valley&apos;s commercial
              streets, Final Touch brings the same detail-focused standard to every property.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Popular services in Green Valley — ServiceCard grid (commercial/established-home-led) */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Our services"
            heading="Popular cleaning services in Green Valley."
            sub="Every service is available to Green Valley homes and businesses. Reordered by what Green Valley customers request most."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {GREEN_VALLEY_SERVICES.map((s) => (
              <li key={s.slug} className="h-full">
                <ServiceCard
                  href={s.href}
                  name={s.name}
                  description={s.shortDescription}
                  image={s.image}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Why families and businesses in Green Valley choose Final Touch — verified only */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why Final Touch"
            heading="Why Green Valley residents and businesses choose Final Touch."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                heading: 'Family-owned and local',
                body: 'Final Touch is owned and run by Scott and Nicole Maland. You work with a local team that treats your home or business like its own, not a faceless franchise.',
              },
              {
                heading: 'Detail-focused by name',
                body: 'It is in our name: the final touch. We clean the corners, edges, and finishes other services skip, because small details bring big results.',
              },
              {
                heading: 'Guaranteed and flexible',
                body: 'Every clean is backed by our Blue Ribbon Guarantee: 100% satisfaction or return within 24 hours. We are licensed and insured, and we can schedule after-hours or overnight cleans so your business day is never interrupted.',
              },
            ].map(({ heading, body }) => (
              <div
                key={heading}
                className="rounded-[14px] border border-border-subtle bg-brand-white p-6"
              >
                <h3 className="font-display text-lg font-semibold text-brand-black">{heading}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Serving section — parent city + Tier 2 service links */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
          <SectionHeader
            eyebrow="Service area"
            heading="Serving Green Valley and all of Henderson."
          />
          {/* TODO-BATCH-6: swap two Tier 2 service anchors for /services/<service>/henderson combos once Batch 6 ships */}
          <p className="mt-8 text-base sm:text-lg text-brand-black leading-relaxed">
            Green Valley is part of our broader Henderson and Clark County service area. Explore our{' '}
            <Link href={PARENT_CITY.href} className="text-brand-blue font-semibold hover:underline">
              Henderson cleaning services
            </Link>{' '}
            for the full picture, or jump straight to{' '}
            <Link
              href="/services/commercial-office-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              commercial and office cleaning
            </Link>
            ,{' '}
            <Link
              href="/services/janitorial-services"
              className="text-brand-blue font-semibold hover:underline"
            >
              janitorial services
            </Link>
            ,{' '}
            <Link
              href="/services/deep-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              deep cleaning
            </Link>
            , or{' '}
            <Link
              href="/services/move-out-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              move-out cleaning
            </Link>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={ROUTES.freeQuote}
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Request a free quote
            </Link>
            <Link
              href={ROUTES.contact}
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ — 5 Green Valley-specific FAQs (FAQPage schema mirrors this array verbatim) */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="FAQ"
            heading="Frequently asked questions about cleaning in Green Valley."
          />
          <div className="mt-8">
            <FAQSection items={faq} defaultOpenFirst />
          </div>
          <p className="mt-8 text-sm text-muted">
            More questions?{' '}
            <Link href={ROUTES.faq} className="text-brand-blue font-semibold hover:underline">
              Read our full FAQ
            </Link>{' '}
            or{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline">
              call {SITE.phone.display}
            </a>
            .
          </p>
        </div>
      </section>

      {/* 8. Final CTA — no duplicate form */}
      <CTASection
        heading="Ready for a spotless Green Valley home or business?"
        sub="Request a free quote or call our team today. We serve Green Valley and all of Clark County."
        primaryCta={{ label: CTAS.estimate, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

      {/* Schema */}
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
