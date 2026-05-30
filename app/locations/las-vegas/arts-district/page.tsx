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
  (n) => n.slug === 'arts-district',
)!;
const PARENT_CITY = LOCATIONS.find((l) => l.slug === NEIGHBORHOOD.parentCity)!;

export const metadata: Metadata = {
  title: 'Arts District Cleaning | Las Vegas, NV | Final Touch',
  description:
    'Family-owned commercial, retail, and home cleaning in the Las Vegas Arts District, NV. Janitorial and post-construction. Free quotes. Call (702) 444-5077.',
  alternates: { canonical: '/locations/las-vegas/arts-district' },
  openGraph: {
    title: 'Arts District Cleaning Services | Las Vegas, NV | Final Touch Cleaning Company',
    description:
      'Scott & Nicole Maland serve the Las Vegas Arts District and downtown core. Commercial, retail, janitorial, and post-construction cleaning. Free quotes across Clark County.',
    type: 'website',
    url: `${SITE.url}/locations/las-vegas/arts-district`,
  },
};

// Arts District is a creative, gallery/boutique-heavy district -> commercial first, retail elevated to #2 (galleries, studios, boutiques), then janitorial and post-construction (adaptive-reuse renovation). Differentiates from adjacent Downtown LV (govt/office core) and from Spring Valley / Sunrise Manor / Centennial Hills leans.
const ARTS_DISTRICT_SERVICES = [
  SERVICES.find((s) => s.slug === 'commercial-office-cleaning')!,
  SERVICES.find((s) => s.slug === 'retail-space-cleaning')!,
  SERVICES.find((s) => s.slug === 'janitorial-services')!,
  SERVICES.find((s) => s.slug === 'post-construction-cleanup')!,
  SERVICES.find((s) => s.slug === 'deep-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-out-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-in-cleaning')!,
];

const faq = [
  {
    q: 'Does Final Touch serve the Las Vegas Arts District?',
    a: `Yes, Final Touch Cleaning Company serves the Las Vegas Arts District as part of our Las Vegas and Clark County service area. We are a family-owned, owner-led company run by Scott and Nicole Maland, cleaning businesses and homes throughout the district and the surrounding downtown Las Vegas area. Request a free quote or call ${SITE.phone.display} to get started.`,
  },
  {
    q: 'What cleaning services do you offer in the Arts District?',
    a: 'We offer commercial and office cleaning, retail space cleaning, janitorial programs, post-construction cleanup, deep cleaning, and move-out and move-in cleaning. Businesses and residents in the Arts District can request any of these services. Tell us your property type and what you need cleaned, and we will tailor the visit to fit it.',
  },
  {
    q: 'Do you clean galleries, studios, and boutique storefronts in the Arts District?',
    a: 'Yes. The Arts District is full of galleries, studios, boutiques, and creative storefronts, and we clean these spaces with the same detail focus we bring to any commercial property. We tailor retail and commercial cleaning to your space and can work outside open hours so displays, stock, and customers are never disrupted.',
  },
  {
    q: 'Can you clean our Arts District business after hours?',
    a: 'Yes. We can schedule cleaning after hours or overnight so your business day is never interrupted. This works well for the galleries, restaurants, bars, and storefronts across the Arts District that stay busy in the evenings and need a consistent, professional clean on their own schedule.',
  },
  {
    q: 'How do I get a cleaning quote for the Arts District?',
    a: `Request a free quote through our online form or call ${SITE.phone.display}. Tell us your property type, square footage, and what you need cleaned, and we will provide a free estimate for your Arts District business or home. There is no obligation, and every clean is backed by our Blue Ribbon Guarantee.`,
  },
];

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  url: `${SITE.url}/locations/las-vegas/arts-district`,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  image: 'https://www.finaltouchcleaningteam.com/images/logo/final-touch-cleaning-company-logo.webp',
  sameAs: ['https://www.google.com/maps?cid=5303198646776788086'],
  areaServed: [
    { '@type': 'Place', name: 'Arts District, Las Vegas, NV' },
    { '@type': 'Place', name: 'Las Vegas, NV' },
    { '@type': 'Place', name: 'Clark County, NV' },
  ],
  description:
    'Family-owned cleaning company serving the Las Vegas Arts District, Las Vegas, and Clark County, NV.',
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
      name: 'Arts District',
      item: `${SITE.url}/locations/las-vegas/arts-district`,
    },
  ],
};

export default function ArtsDistrictPage() {
  return (
    <>
      {/* 1. Hero — split layout with quote form. No-photo pattern: HeroSection
          renders its gradient background when no image prop is passed. */}
      {/* TODO-PHOTO: wire hero image when public/images/locations/arts-district-*.webp exists */}
      <HeroSection
        eyebrow="Las Vegas Arts District"
        heading="Cleaning Services in the Las Vegas Arts District, NV"
        sub="Family-owned commercial, retail, and home cleaning for the Las Vegas Arts District. Backed by our Blue Ribbon Guarantee."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/locations/arts-district-las-vegas-commercial-cleaning-hero-image.webp',
          alt: 'Professional cleaning service by Final Touch in the Las Vegas Arts District, NV.',
        }}
      />

      {/* 2. Quick neighborhood answer — direct-answer paragraph, first 100 words */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
          <p className="text-lg text-brand-black leading-relaxed">
            Final Touch Cleaning Company provides commercial, retail, and home cleaning throughout the
            Las Vegas Arts District, the walkable creative and commercial neighborhood just south of
            the downtown Las Vegas core. We are a family-owned, owner-led company run by Scott and
            Nicole Maland, serving the Arts District as part of our Las Vegas and Clark County service
            area. Request a free quote or call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline">
              {SITE.phone.display}
            </a>{' '}
            to get started.
          </p>
        </div>
      </section>

      {/* 3. Local context — unique Arts District prose (public knowledge only) */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="About the Arts District"
            heading="Cleaning built for the Arts District."
          />
          <div className="mt-8 space-y-5 text-base sm:text-lg text-brand-black leading-relaxed">
            <p>
              The Las Vegas Arts District, also known as 18b, is a walkable creative and commercial
              neighborhood just south of the downtown Las Vegas core, within the City of Las Vegas. It
              is known for its galleries, studios, boutiques, restaurants, and bars, many of them
              housed in renovated older buildings and adaptive-reuse spaces. Alongside the creative
              businesses, the district has a growing base of lofts and condominium residences.
            </p>
            <p>
              That creative, mixed-use character shapes the cleaning we do here. Galleries, studios,
              boutiques, and storefronts rely on retail and commercial cleaning to stay polished and
              customer-ready, while restaurants, bars, and offices book routine janitorial programs to
              keep their spaces presentation-ready. The district&apos;s ongoing renovation and
              adaptive-reuse activity creates steady demand for post-construction cleanup as older
              buildings are converted to new uses. Residents in lofts and condos book deep cleaning
              and move-out service. Whether you run a gallery, a storefront, or a creative office,
              Final Touch brings the same detail-focused standard to every space.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Popular services in the Arts District — ServiceCard grid (creative/retail-led) */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Our services"
            heading="Popular cleaning services in the Arts District."
            sub="Every service is available to Arts District businesses and residents. Reordered by what customers in this creative district request most."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {ARTS_DISTRICT_SERVICES.map((s) => (
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

      {/* 5. Why businesses and residents in the Arts District choose Final Touch — verified only */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why Final Touch"
            heading="Why Arts District businesses and residents choose Final Touch."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                heading: 'Family-owned and local',
                body: 'Final Touch is owned and run by Scott and Nicole Maland. You work with a local team that treats your space like its own, not a faceless franchise.',
              },
              {
                heading: 'Detail-focused by name',
                body: 'It is in our name: the final touch. We clean the corners, edges, and finishes other services skip, because small details bring big results.',
              },
              {
                heading: 'Guaranteed and flexible',
                body: 'Every clean is backed by our Blue Ribbon Guarantee: 100% satisfaction or return within 24 hours. We are licensed and insured, and we can schedule after-hours or overnight cleans so your gallery, shop, or restaurant is never interrupted during open hours.',
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
            heading="Serving the Arts District and the wider Las Vegas Valley."
          />
          {/* TODO-BATCH-6: swap two Tier 2 service anchors for /services/<service>/las-vegas combos once Batch 6 ships */}
          <p className="mt-8 text-base sm:text-lg text-brand-black leading-relaxed">
            The Arts District is part of our broader Las Vegas and Clark County service area. Explore
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
              href="/services/retail-space-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              retail space cleaning
            </Link>
            ,{' '}
            <Link
              href="/services/janitorial-services"
              className="text-brand-blue font-semibold hover:underline"
            >
              janitorial services
            </Link>
            , or{' '}
            <Link
              href="/services/post-construction-cleanup"
              className="text-brand-blue font-semibold hover:underline"
            >
              post-construction cleanup
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

      {/* 7. FAQ — 5 Arts District-specific FAQs (FAQPage schema mirrors this array verbatim) */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="FAQ"
            heading="Frequently asked questions about cleaning in the Arts District."
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
        heading="Ready for a spotless Arts District space?"
        sub="Request a free quote or call our team today. We serve the Arts District and all of Clark County."
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
