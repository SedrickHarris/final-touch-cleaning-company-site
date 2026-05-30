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

// Parent city derived from this neighborhood's own NEIGHBORHOODS record —
// single source of truth, no hardcoded parent slug.
const NEIGHBORHOOD = NEIGHBORHOODS.flatMap((g) => g.neighborhoods).find(
  (n) => n.slug === 'centennial-hills',
)!;
const PARENT_CITY = LOCATIONS.find((l) => l.slug === NEIGHBORHOOD.parentCity)!;

export const metadata: Metadata = {
  title: 'Centennial Hills Cleaning | Las Vegas, NV | Final Touch',
  description:
    'Family-owned commercial, post-construction, and home cleaning in Centennial Hills, Las Vegas, NV. Free quotes across Clark County. Call (702) 444-5077.',
  alternates: { canonical: '/locations/las-vegas/centennial-hills' },
  openGraph: {
    title: 'Centennial Hills Cleaning Services | Las Vegas, NV | Final Touch Cleaning Company',
    description:
      'Scott & Nicole Maland serve Centennial Hills and the northwest Las Vegas Valley. Commercial, post-construction, and home cleaning. Free quotes across Clark County.',
    type: 'website',
    url: `${SITE.url}/locations/las-vegas/centennial-hills`,
  },
};

// Centennial Hills is newer-growth master-planned with active construction -> commercial/janitorial first, then post-construction + move-in elevated for new-build buyers. Differentiates from Spring Valley (retail-corridor) and Sunrise Manor (rental turnover) leans.
const CENTENNIAL_HILLS_SERVICES = [
  SERVICES.find((s) => s.slug === 'commercial-office-cleaning')!,
  SERVICES.find((s) => s.slug === 'janitorial-services')!,
  SERVICES.find((s) => s.slug === 'post-construction-cleanup')!,
  SERVICES.find((s) => s.slug === 'move-in-cleaning')!,
  SERVICES.find((s) => s.slug === 'retail-space-cleaning')!,
  SERVICES.find((s) => s.slug === 'deep-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-out-cleaning')!,
];

const faq = [
  {
    q: 'Does Final Touch serve Centennial Hills in Las Vegas?',
    a: `Yes, Final Touch Cleaning Company serves Centennial Hills as part of our Las Vegas and Clark County service area. We are a family-owned, owner-led company run by Scott and Nicole Maland, cleaning both homes and businesses throughout the northwest Las Vegas Valley. Request a free quote or call ${SITE.phone.display} to get started.`,
  },
  {
    q: 'What cleaning services do you offer in Centennial Hills?',
    a: 'We offer commercial and office cleaning, janitorial programs, post-construction cleanup, move-in and move-out cleaning, deep cleaning, and retail space cleaning. Both businesses and households in Centennial Hills can request any of these services. Tell us your property type and what you need cleaned, and we will tailor the visit to fit it.',
  },
  {
    q: 'Do you clean new-construction and recently built homes in Centennial Hills?',
    a: 'Yes. Because Centennial Hills has a high share of newer construction, we regularly provide post-construction cleanup and move-in cleaning for new and recently renovated homes. We remove construction dust, detail the finishes and fixtures, and leave the home move-in ready so you can settle in without the cleanup.',
  },
  {
    q: 'Can you clean our Centennial Hills office or business after hours?',
    a: 'Yes. We can schedule cleaning after hours or overnight so your business day is never interrupted. This suits the offices, medical suites, and retail spaces across Centennial Hills that need a consistent, professional clean without disrupting customers or staff during open hours.',
  },
  {
    q: 'How do I get a cleaning quote for Centennial Hills?',
    a: `Request a free quote through our online form or call ${SITE.phone.display}. Tell us your property type, square footage, and what you need cleaned, and we will provide a free estimate for your Centennial Hills home or business. There is no obligation, and every clean is backed by our Blue Ribbon Guarantee.`,
  },
];

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  url: `${SITE.url}/locations/las-vegas/centennial-hills`,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  image: 'https://www.finaltouchcleaningteam.com/images/logo/final-touch-cleaning-company-logo.webp',
  sameAs: ['https://www.google.com/maps?cid=5303198646776788086'],
  areaServed: [
    { '@type': 'Place', name: 'Centennial Hills, Las Vegas, NV' },
    { '@type': 'Place', name: 'Las Vegas, NV' },
    { '@type': 'Place', name: 'Clark County, NV' },
  ],
  description:
    'Family-owned cleaning company serving Centennial Hills, Las Vegas, and Clark County, NV.',
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
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Locations',
      item: `${SITE.url}${ROUTES.locations}`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Las Vegas',
      item: `${SITE.url}/locations/las-vegas`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Centennial Hills',
      item: `${SITE.url}/locations/las-vegas/centennial-hills`,
    },
  ],
};

export default function CentennialHillsPage() {
  return (
    <>
      {/* 1. Hero — split layout with quote form. No-photo pattern: HeroSection
          renders its gradient background when no image prop is passed. */}
      {/* TODO-PHOTO: wire hero image when public/images/locations/centennial-hills-*.webp exists */}
      <HeroSection
        eyebrow="Northwest Las Vegas Valley"
        heading="Cleaning Services in Centennial Hills, Las Vegas, NV"
        sub="Family-owned commercial, post-construction, and home cleaning for the northwest Las Vegas Valley. Backed by our Blue Ribbon Guarantee."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/locations/centennial-hills-las-vegas-commercial-cleaning-hero-image.webp',
          alt: 'Professional cleaning service by Final Touch in Centennial Hills, Las Vegas, NV.',
        }}
      />

      {/* 2. Quick neighborhood answer — direct-answer paragraph, first 100 words */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
          <p className="text-lg text-brand-black leading-relaxed">
            Final Touch Cleaning Company provides commercial, post-construction, and home cleaning
            throughout Centennial Hills, a master-planned community in the northwest Las Vegas Valley.
            We are a family-owned, owner-led company run by Scott and Nicole Maland, serving
            Centennial Hills as part of our Las Vegas and Clark County service area. Request a free
            quote or call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline">
              {SITE.phone.display}
            </a>{' '}
            to get started.
          </p>
        </div>
      </section>

      {/* 3. Local context — unique Centennial Hills prose (public knowledge only) */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="About Centennial Hills"
            heading="Cleaning built for Centennial Hills."
          />
          <div className="mt-8 space-y-5 text-base sm:text-lg text-brand-black leading-relaxed">
            <p>
              Centennial Hills sits at the far northwest edge of the Las Vegas Valley, inside the City
              of Las Vegas, and is one of the area&apos;s newer-growth master-planned communities. The
              neighborhood blends recently built subdivisions with maturing residential streets,
              anchored by community landmarks such as Centennial Hills Park. Its housing stock skews
              newer than much of the valley, with a high share of newer construction and ongoing
              development still shaping parts of the community.
            </p>
            <p>
              That growth shapes the cleaning we do here. New-build and recently renovated homes often
              need post-construction detailing and move-in cleans, so we remove construction dust,
              detail finishes and fixtures, and leave a home move-in ready. Alongside the residential
              growth, a steadily expanding base of offices, clinics, and storefronts relies on routine
              commercial and janitorial programs to stay presentation-ready. Established households
              book deep cleaning and recurring service. Whether you are settling into a new home or
              running a business in the area, Final Touch brings the same detail-focused standard to
              every property.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Popular services in Centennial Hills — ServiceCard grid (commercial/new-build-led) */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Our services"
            heading="Popular cleaning services in Centennial Hills."
            sub="Every service is available to Centennial Hills homes and businesses. Reordered by what Centennial Hills customers request most."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {CENTENNIAL_HILLS_SERVICES.map((s) => (
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

      {/* 5. Why businesses and families in Centennial Hills choose Final Touch — verified only */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why Final Touch"
            heading="Why Centennial Hills businesses and families choose Final Touch."
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
            heading="Serving Centennial Hills and the wider Las Vegas Valley."
          />
          {/* TODO-BATCH-6: swap two Tier 2 service anchors for /services/<service>/las-vegas combos once Batch 6 ships */}
          <p className="mt-8 text-base sm:text-lg text-brand-black leading-relaxed">
            Centennial Hills is part of our broader Las Vegas and Clark County service area. Explore
            our{' '}
            <Link href={PARENT_CITY.href} className="text-brand-blue font-semibold hover:underline">
              Las Vegas cleaning services
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
              href="/services/post-construction-cleanup"
              className="text-brand-blue font-semibold hover:underline"
            >
              post-construction cleanup
            </Link>
            ,{' '}
            <Link
              href="/services/move-in-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              move-in cleaning
            </Link>
            , or{' '}
            <Link
              href="/services/janitorial-services"
              className="text-brand-blue font-semibold hover:underline"
            >
              janitorial services
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

      {/* 7. FAQ — 5 Centennial Hills-specific FAQs (FAQPage schema mirrors this array verbatim) */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="FAQ"
            heading="Frequently asked questions about cleaning in Centennial Hills."
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
        heading="Ready for a spotless Centennial Hills home or business?"
        sub="Request a free quote or call our team today. We serve Centennial Hills and all of Clark County."
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
