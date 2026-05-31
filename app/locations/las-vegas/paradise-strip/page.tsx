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
// single source of truth, no hardcoded parent slug.
const NEIGHBORHOOD = NEIGHBORHOODS.flatMap((g) => g.neighborhoods).find(
  (n) => n.slug === 'paradise-strip',
)!;
const PARENT_CITY = LOCATIONS.find((l) => l.slug === NEIGHBORHOOD.parentCity)!;

export const metadata: Metadata = {
  title: 'Las Vegas Strip & Paradise Cleaning | NV',
  description:
    'Family-owned commercial, office, and retail cleaning near the Las Vegas Strip and Paradise, NV. Free quotes across Clark County. Call (702) 444-5077.',
  alternates: { canonical: '/locations/las-vegas/paradise-strip' },
  openGraph: {
    title: 'Las Vegas Strip & Paradise Cleaning Services | NV | Final Touch Cleaning Company',
    description:
      'Scott & Nicole Maland serve Paradise and the Las Vegas Strip corridor. Commercial, janitorial, retail, and post-construction cleaning. Free quotes across Clark County.',
    type: 'website',
    url: `${SITE.url}/locations/las-vegas/paradise-strip`,
  },
};

// Paradise/Strip is the most commercial- and hospitality-dense area in the batch -> commercial/janitorial/retail first, post-construction elevated for constant corridor renovation/buildout. Differentiates from Spring Valley (west-valley retail corridors), Sunrise Manor (rental turnover), and Centennial Hills (new-build residential) leans.
const PARADISE_STRIP_SERVICES = [
  SERVICES.find((s) => s.slug === 'commercial-office-cleaning')!,
  SERVICES.find((s) => s.slug === 'janitorial-services')!,
  SERVICES.find((s) => s.slug === 'retail-space-cleaning')!,
  SERVICES.find((s) => s.slug === 'post-construction-cleanup')!,
  SERVICES.find((s) => s.slug === 'deep-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-out-cleaning')!,
  SERVICES.find((s) => s.slug === 'move-in-cleaning')!,
];

const faq = [
  {
    q: 'Does Final Touch serve the Las Vegas Strip and Paradise?',
    a: `Yes, Final Touch Cleaning Company serves Paradise and the Las Vegas Strip corridor as part of our Las Vegas and Clark County service area. We are a family-owned, owner-led company run by Scott and Nicole Maland, cleaning businesses and homes throughout this part of the Las Vegas Valley. Request a free quote or call ${SITE.phone.display} to get started.`,
  },
  {
    q: 'What cleaning services do you offer near the Las Vegas Strip?',
    a: 'We offer commercial and office cleaning, janitorial programs, retail space cleaning, post-construction cleanup, deep cleaning, and move-out and move-in cleaning. Businesses and residents in Paradise and along the Strip corridor can request any of these services. Tell us your property type and what you need cleaned, and we will tailor the visit to fit it.',
  },
  {
    q: 'Do you clean offices, retail, and restaurants along the Las Vegas Strip corridor?',
    a: 'Yes. The Strip corridor and surrounding Paradise area are among the most commercially dense in the valley, and we regularly clean offices, retail storefronts, restaurants, and professional spaces here. We tailor routine commercial and janitorial programs to your space, and we can work outside business hours so guests, customers, and staff are never disrupted.',
  },
  {
    q: 'Can you clean our business near the Strip after hours or overnight?',
    a: 'Yes. We can schedule cleaning after hours or overnight so your business day is never interrupted. This is a natural fit for the offices, retail spaces, and restaurants around the Las Vegas Strip and Paradise that stay busy during the day and need a consistent, professional clean on their own schedule.',
  },
  {
    q: 'How do I get a cleaning quote for the Strip or Paradise area?',
    a: `Request a free quote through our online form or call ${SITE.phone.display}. Tell us your property type, square footage, and what you need cleaned, and we will provide a free estimate for your business or home near the Las Vegas Strip. There is no obligation, and every clean is backed by our Blue Ribbon Guarantee.`,
  },
];

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  url: `${SITE.url}/locations/las-vegas/paradise-strip`,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  image: 'https://www.finaltouchcleaningteam.com/images/logo/final-touch-cleaning-company-logo.webp',
  sameAs: ['https://www.google.com/maps?cid=5303198646776788086'],
  areaServed: [
    { '@type': 'Place', name: 'Paradise, Las Vegas, NV' },
    { '@type': 'Place', name: 'Las Vegas Strip, NV' },
    { '@type': 'Place', name: 'Las Vegas, NV' },
    { '@type': 'Place', name: 'Clark County, NV' },
  ],
  description:
    'Family-owned cleaning company serving Paradise, the Las Vegas Strip corridor, and Clark County, NV.',
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
  { label: 'Las Vegas', href: '/locations/las-vegas' },
  { label: 'Paradise / Strip' },
];

export default function ParadiseStripPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* 1. Hero — split layout with quote form. No-photo pattern: HeroSection
          renders its gradient background when no image prop is passed. */}
      {/* TODO-PHOTO: wire hero image when public/images/locations/paradise-strip-*.webp exists */}
      <HeroSection
        eyebrow="Las Vegas Strip Corridor"
        heading="Cleaning Services in Paradise and the Las Vegas Strip, NV"
        sub="Family-owned commercial, janitorial, and retail cleaning for the Las Vegas Strip corridor and Paradise. Backed by our Blue Ribbon Guarantee."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/locations/paradise-las-vegas-strip-commercial-cleaning-hero-image.webp',
          alt: 'Professional cleaning service by Final Touch in Paradise and the Las Vegas Strip, NV.',
        }}
      />

      {/* 2. Quick neighborhood answer — direct-answer paragraph, first 100 words */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
          <p className="text-lg text-brand-black leading-relaxed">
            Final Touch Cleaning Company provides commercial, office, retail, and home cleaning
            across Paradise and the Las Vegas Strip corridor, at the center of the Las Vegas Valley.
            We are a family-owned, owner-led company run by Scott and Nicole Maland, serving this area
            as part of our Las Vegas and Clark County service area. Request a free quote or call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline">
              {SITE.phone.display}
            </a>{' '}
            to get started.
          </p>
        </div>
      </section>

      {/* 3. Local context — unique Paradise/Strip prose (public knowledge only) */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="About Paradise and the Strip"
            heading="Cleaning built for Paradise and the Strip."
          />
          <div className="mt-8 space-y-5 text-base sm:text-lg text-brand-black leading-relaxed">
            <p>
              Paradise is the community that surrounds the Las Vegas Strip, the resort and commercial
              corridor at the center of the Las Vegas Valley. It is one of the most commercially dense
              areas in the metro, home to offices, retail, restaurants, the convention district, and
              the high-rise residences that sit alongside them. It is a community in the Las Vegas
              Valley rather than part of the City of Las Vegas, but it carries a Las Vegas address and
              sits at the geographic heart of the region.
            </p>
            <p>
              That density shapes the cleaning we do here. Offices, retail storefronts, restaurants,
              and professional spaces along and around the corridor rely on routine commercial and
              janitorial programs to stay clean and presentation-ready, often outside of business
              hours. The constant pace of renovation and tenant buildout in the area creates ongoing
              demand for post-construction cleanup. High-rise condos and rental residences near the
              Strip and the university area drive deep cleaning and move-out work as residents turn
              over. Whether you manage a storefront, an office suite, or a residence in the corridor,
              Final Touch brings the same detail-focused standard to every property.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Popular services in Paradise/Strip — ServiceCard grid (commercial/hospitality-led) */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Our services"
            heading="Popular cleaning services in Paradise and the Strip."
            sub="Every service is available to businesses and residents around the Las Vegas Strip. Reordered by what customers in this corridor request most."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {PARADISE_STRIP_SERVICES.map((s) => (
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

      {/* 5. Why businesses and residents in Paradise/Strip choose Final Touch — verified only */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why Final Touch"
            heading="Why Paradise and Strip businesses and residents choose Final Touch."
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
                body: 'Every clean is backed by our Blue Ribbon Guarantee: 100% satisfaction or return within 24 hours. We are licensed and insured, and we can schedule after-hours or overnight cleans so your business stays open and uninterrupted during peak hours.',
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
            heading="Serving Paradise, the Strip, and the wider Las Vegas Valley."
          />
          {/* TODO-BATCH-6: swap two Tier 2 service anchors for /services/<service>/las-vegas combos once Batch 6 ships */}
          <p className="mt-8 text-base sm:text-lg text-brand-black leading-relaxed">
            Paradise and the Las Vegas Strip corridor are part of our broader Las Vegas and Clark
            County service area. Explore our{' '}
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
              href="/services/janitorial-services"
              className="text-brand-blue font-semibold hover:underline"
            >
              janitorial services
            </Link>
            ,{' '}
            <Link
              href="/services/retail-space-cleaning"
              className="text-brand-blue font-semibold hover:underline"
            >
              retail space cleaning
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

      {/* 7. FAQ — 5 Paradise/Strip-specific FAQs (FAQPage schema mirrors this array verbatim) */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="FAQ"
            heading="Frequently asked questions about cleaning near the Las Vegas Strip."
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
        heading="Ready for a spotless business or home near the Las Vegas Strip?"
        sub="Request a free quote or call our team today. We serve Paradise, the Strip corridor, and all of Clark County."
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
