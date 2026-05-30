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
  (n) => n.slug === 'tuscany-village',
)!;
const PARENT_CITY = LOCATIONS.find((l) => l.slug === NEIGHBORHOOD.parentCity)!;

export const metadata: Metadata = {
  title: 'Tuscany Village Cleaning | Henderson, NV | Final Touch',
  description:
    'Family-owned home, deep, and move-in cleaning in Tuscany Village, a guard-gated community in Henderson, NV. Free quotes. Call (702) 444-5077.',
  alternates: { canonical: '/locations/henderson/tuscany-village' },
  openGraph: {
    title: 'Tuscany Village Cleaning Services | Henderson, NV | Final Touch Cleaning Company',
    description:
      'Scott & Nicole Maland serve Tuscany Village and all of Henderson. Home, deep, move-in, and move-out cleaning for this guard-gated community. Free quotes across Clark County.',
    type: 'website',
    url: `${SITE.url}/locations/henderson/tuscany-village`,
  },
};

// Tuscany Village is a guard-gated, primarily residential community -> deep/move-in/move-out first (mirrors the built MacDonald Highlands gated-residential order), commercial/janitorial available below for common areas or nearby businesses. Intentional deviation from the commercial-first lean used on the commercial corridor pages, to match neighborhood character.
const TUSCANY_VILLAGE_SERVICES = [
  SERVICES.find((s) => s.slug === 'deep-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-in-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-out-cleaning')!,
  SERVICES.find((s) => s.slug === 'commercial-office-cleaning')!,
  SERVICES.find((s) => s.slug === 'janitorial-services')!,
  SERVICES.find((s) => s.slug === 'retail-space-cleaning')!,
  SERVICES.find((s) => s.slug === 'post-construction-cleanup')!,
];

const faq = [
  {
    q: 'Does Final Touch serve Tuscany Village in Henderson?',
    a: `Yes, Final Touch Cleaning Company serves Tuscany Village as part of our Henderson and Clark County service area. We are a family-owned, owner-led company run by Scott and Nicole Maland, cleaning homes throughout this guard-gated residential community in eastern Henderson. Request a free quote or call ${SITE.phone.display} to get started.`,
  },
  {
    q: 'What cleaning services do you offer in Tuscany Village?',
    a: 'We offer home and deep cleaning, recurring service, move-in and move-out cleaning, and commercial and janitorial services for common areas or nearby businesses. Households in Tuscany Village can request any of these services. Tell us your home type and what you need cleaned, and we will tailor the visit to fit it.',
  },
  {
    q: 'How does cleaning work in a guard-gated community like Tuscany Village?',
    a: 'We coordinate gated-community access in advance with you and, where needed, the HOA or guard gate, so our team can enter smoothly on your scheduled date. Just let us know the entry process when you book. We treat gated and private communities with the same care, professionalism, and detail focus we bring to every home in Henderson.',
  },
  {
    q: 'Do you offer recurring cleaning for homes in Tuscany Village?',
    a: 'Yes. Many Tuscany Village homeowners book recurring service on a weekly, biweekly, or monthly schedule to keep their homes consistently clean. We also handle one-time deep cleans and move-in or move-out cleans. We will build a schedule around your household and coordinate gated access each visit.',
  },
  {
    q: 'How do I get a cleaning quote for Tuscany Village?',
    a: `Request a free quote through our online form or call ${SITE.phone.display}. Tell us your home type, square footage, and what you need cleaned, and we will provide a free estimate for your Tuscany Village home. There is no obligation, and every clean is backed by our Blue Ribbon Guarantee.`,
  },
];

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  url: `${SITE.url}/locations/henderson/tuscany-village`,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  image: 'https://www.finaltouchcleaningteam.com/images/logo/final-touch-cleaning-company-logo.webp',
  sameAs: ['https://www.google.com/maps?cid=5303198646776788086'],
  areaServed: [
    { '@type': 'Place', name: 'Tuscany Village, Henderson, NV' },
    { '@type': 'Place', name: 'Henderson, NV' },
    { '@type': 'Place', name: 'Clark County, NV' },
  ],
  description:
    'Family-owned cleaning company serving Tuscany Village, Henderson, and Clark County, NV.',
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
      name: 'Henderson',
      item: `${SITE.url}/locations/henderson`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Tuscany Village',
      item: `${SITE.url}/locations/henderson/tuscany-village`,
    },
  ],
};

export default function TuscanyVillagePage() {
  return (
    <>
      {/* 1. Hero — split layout with quote form. No-photo pattern: HeroSection
          renders its gradient background when no image prop is passed. */}
      {/* TODO-PHOTO: wire hero image when public/images/locations/tuscany-village-henderson-*.webp exists */}
      <HeroSection
        eyebrow="Guard-Gated Community"
        heading="Cleaning Services in Tuscany Village, Henderson, NV"
        sub="Family-owned home, deep, and move-in cleaning for Tuscany Village and Henderson. Backed by our Blue Ribbon Guarantee."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/locations/tuscany-village-henderson-commercial-cleaning-hero-image.webp',
          alt: 'Professional cleaning service by Final Touch in Tuscany Village, Henderson, NV.',
        }}
      />

      {/* 2. Quick neighborhood answer — direct-answer paragraph, first 100 words */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
          <p className="text-lg text-brand-black leading-relaxed">
            Final Touch Cleaning Company provides home and deep cleaning throughout Tuscany Village, a
            guard-gated residential community in eastern Henderson. We are a family-owned, owner-led
            company run by Scott and Nicole Maland, serving Tuscany Village as part of our Henderson
            and Clark County service area. Request a free quote or call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline">
              {SITE.phone.display}
            </a>{' '}
            to get started.
          </p>
        </div>
      </section>

      {/* 3. Local context — unique Tuscany Village prose (amenities as features, not clients) */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="About Tuscany Village"
            heading="Cleaning built for Tuscany Village."
          />
          <div className="mt-8 space-y-5 text-base sm:text-lg text-brand-black leading-relaxed">
            <p>
              Tuscany Village is a guard-gated, master-planned residential community in eastern
              Henderson, set near the 215 Beltway with Mediterranean-inspired architecture and its own
              golf club. It is primarily residential, with single-family homes and attached residences
              across planned, amenity-rich neighborhoods. As a gated community, access is managed, so
              we coordinate entry with residents and the HOA or guard gate when scheduling service.
            </p>
            <p>
              That residential, gated character shapes the cleaning we do here. Homeowners across
              Tuscany Village book deep cleaning and recurring service to keep their homes in top
              condition, with move-in and move-out cleans as residents transition in and out of the
              community. When common areas or nearby businesses need professional attention, our
              commercial and janitorial services are available as well. Whether you need a one-time
              deep clean or a regular schedule, Final Touch brings the same detail-focused standard to
              every home in Tuscany Village.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Popular services in Tuscany Village — ServiceCard grid (residential-led, gated community) */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Our services"
            heading="Popular cleaning services in Tuscany Village."
            sub="Every service is available to Tuscany Village homes. Reordered by what residents in this guard-gated community request most."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {TUSCANY_VILLAGE_SERVICES.map((s) => (
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

      {/* 5. Why homeowners in Tuscany Village choose Final Touch — verified only */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why Final Touch"
            heading="Why Tuscany Village homeowners choose Final Touch."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                heading: 'Family-owned and local',
                body: 'Final Touch is owned and run by Scott and Nicole Maland. You work with a local team that treats your home like its own, not a faceless franchise.',
              },
              {
                heading: 'Detail-focused by name',
                body: 'It is in our name: the final touch. We clean the corners, edges, and finishes other services skip, because small details bring big results.',
              },
              {
                heading: 'Guaranteed and flexible',
                body: 'Every clean is backed by our Blue Ribbon Guarantee: 100% satisfaction or return within 24 hours. We are licensed and insured, and we coordinate gated-community access so service is smooth and secure every visit.',
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
            heading="Serving Tuscany Village and all of Henderson."
          />
          {/* TODO-BATCH-6: swap two Tier 2 service anchors for /services/<service>/henderson combos once Batch 6 ships */}
          <p className="mt-8 text-base sm:text-lg text-brand-black leading-relaxed">
            Tuscany Village is part of our broader Henderson and Clark County service area. Explore
            our{' '}
            <Link href={PARENT_CITY.href} className="text-brand-blue font-semibold hover:underline">
              Henderson cleaning services
            </Link>{' '}
            for the full picture, or jump straight to{' '}
            <Link
              href="/services/deep-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              deep cleaning
            </Link>
            ,{' '}
            <Link
              href="/services/move-in-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              move-in cleaning
            </Link>
            ,{' '}
            <Link
              href="/services/move-out-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              move-out cleaning
            </Link>
            , or{' '}
            <Link
              href="/services/commercial-office-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              commercial and office cleaning
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

      {/* 7. FAQ — 5 Tuscany Village-specific FAQs (FAQPage schema mirrors this array verbatim) */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="FAQ"
            heading="Frequently asked questions about cleaning in Tuscany Village."
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
        heading="Ready for a spotless Tuscany Village home?"
        sub="Request a free quote or call our team today. We serve Tuscany Village and all of Clark County."
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
