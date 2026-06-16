import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import SectionHeader from '@/components/shared/SectionHeader';
import ServicesPreview from '@/components/shared/ServicesPreview';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES, SERVICES } from '@/lib/constants/routes';

// ─── Metadata ────────────────────────────────────────────────────────────────
// Primary keyword: commercial cleaning services Las Vegas
// Secondary: office cleaning LV, janitorial LV, post-construction LV,
//   retail cleaning LV, Clark County
// Search intent: commercial, transactional, local
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: { absolute: 'Commercial Cleaning Services in Las Vegas, NV | Final Touch' },
  description:
    'Final Touch offers seven commercial cleaning services in Las Vegas, Henderson & the Las Vegas Valley: office, janitorial & post-construction. (702) 444-5077.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Commercial Cleaning Services in Las Vegas, NV | Final Touch Cleaning Company',
    description:
      'Seven commercial cleaning services across Las Vegas, Henderson, and the Las Vegas Valley: office cleaning, janitorial, post-construction, retail. Free quotes.',
    type: 'website',
    url: `${SITE.url}/services`,
  },
};

export default function ServicesPage() {
  // ─── Who We Serve ──────────────────────────────────────────────────────────
  const audiences = [
    {
      title: 'Business owners and office managers',
      body: 'Recurring office cleaning and janitorial routes for professional services firms, medical practices, law offices, retail operators, and small-to-mid-size businesses across Clark County. Scheduled around your hours.',
    },
    {
      title: 'General contractors and builders',
      body: 'Post-construction cleanup for commercial buildouts, tenant improvement projects, and renovations. Final Touch works directly with GCs to schedule the final detail clean before client walkthrough or occupancy.',
    },
    {
      title: 'Property managers and landlords',
      body: 'Move-in and move-out cleans for rental unit turns, HOA common areas, and multi-unit portfolios across Clark County. Same standard at every property, without active supervision from you.',
    },
  ];

  // ─── AEO FAQ ───────────────────────────────────────────────────────────────
  // Rules: direct answer in sentence 1. No em dashes. No fake claims.
  // FAQPage JSON-LD generated from this array (exact text match).
  const faq = [
    {
      q: 'What commercial cleaning services does Final Touch offer?',
      a: `Final Touch offers seven commercial cleaning services: commercial and office cleaning, janitorial services, post-construction cleanup, retail space cleaning, move-in cleaning, move-out cleaning, and deep cleaning. All services are available across ${SITE.serviceArea.county}, Nevada. Call ${SITE.phone.display} or visit the free quote page to get started.`,
    },
    {
      q: 'What is the difference between commercial office cleaning and janitorial services?',
      a: 'Commercial office cleaning is typically a scheduled recurring clean of office surfaces, restrooms, and common areas. Janitorial services covers the same scope but often includes more frequent visits, supplies management, and ongoing facility maintenance. Final Touch scopes both during the initial walkthrough based on your space and schedule.',
    },
    {
      q: 'Does Final Touch offer post-construction cleanup in Las Vegas?',
      a: `Yes. Post-construction cleanup is a core Final Touch service. We serve general contractors, tenant improvement contractors, commercial developers, and property owners finishing builds and renovations across ${SITE.serviceArea.county}. Call ${SITE.phone.display} to schedule a walkthrough.`,
    },
    {
      q: 'Does Final Touch offer retail space cleaning?',
      a: `Yes. Final Touch provides before-open and after-close cleaning for retail shops, showrooms, and strip center tenants across Las Vegas, Henderson, and ${SITE.serviceArea.county}. Scope is confirmed per space at the initial walkthrough.`,
    },
    {
      q: 'Does Final Touch offer janitorial services for offices in Las Vegas?',
      a: `Yes. Final Touch provides recurring janitorial services for offices and commercial spaces across Las Vegas, Henderson, North Las Vegas, and ${SITE.serviceArea.county}. Schedules are set at the walkthrough and can include daily, weekly, or custom frequency.`,
    },
    {
      q: 'Who hires Final Touch for commercial cleaning?',
      a: `Final Touch works with business owners, office managers, general contractors, property managers, landlords, and retail operators across ${SITE.serviceArea.county}. Both one-time cleans and recurring programs are available depending on the type of space and the job.`,
    },
    {
      q: 'Do you offer one-time cleans or only recurring service?',
      a: 'Both. One-time cleans include post-construction cleanup, move-in, move-out, and deep cleaning. Recurring programs include commercial office cleaning, janitorial routes, and retail space cleaning. Tell us about your space and we will recommend the right fit.',
    },
    {
      q: 'What cities does Final Touch serve for commercial cleaning?',
      a: `Final Touch serves Las Vegas, Henderson, North Las Vegas, Boulder City, and all of ${SITE.serviceArea.county}, Nevada. Scott and Nicole Maland personally oversee every commercial account across the full service area.`,
    },
    {
      q: 'How do I get a commercial cleaning quote in Las Vegas?',
      a: `Call ${SITE.phone.display} or submit a request on the free quote page. Scott or Nicole will follow up to schedule a walkthrough of your space, confirm scope and frequency, and provide a written estimate before work begins. No obligation.`,
    },
    {
      q: 'Does Final Touch work with general contractors on post-construction cleanup?',
      a: `Yes. Final Touch works directly with general contractors and tenant improvement contractors to schedule post-construction cleanup around project handoff and occupancy dates across ${SITE.serviceArea.county}. Call ${SITE.phone.display} to discuss your project.`,
    },
  ];

  // ─── JSON-LD ───────────────────────────────────────────────────────────────
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
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

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Commercial Cleaning Services by Final Touch',
    description: 'Seven commercial cleaning services across Las Vegas, Henderson, and the Las Vegas Valley.',
    itemListElement: SERVICES.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.name,
      url: `${SITE.url}${s.href}`,
    })),
  };

  const heroSub = `Final Touch provides seven commercial cleaning services across Las Vegas, Henderson, North Las Vegas, and Boulder City: office and commercial cleaning, janitorial services, post-construction cleanup, retail space cleaning, move-in cleaning, move-out cleaning, and deep cleaning. Every job ends with the same finishing standard.`;

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <HeroSection
        eyebrow={`Commercial cleaning services · ${SITE.serviceArea.county}, ${SITE.serviceArea.stateAbbr}`}
        heading="Commercial Cleaning Services in Las Vegas, NV."
        sub={heroSub}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/heroes/cleaning-services-las-vegas-clark-county-hero.webp',
          alt: 'Commercial cleaning services in Las Vegas and Clark County, NV by Final Touch.',
        }}
      />

      {/* ── Direct-Answer Block ───────────────────────────────────────────── */}
      {/* AEO / featured-snippet target. Entity statement for LLM citation. */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Final Touch Cleaning Company provides commercial cleaning services across{' '}
            <Link href={ROUTES.locations} className="text-brand-blue font-semibold hover:underline">
              Las Vegas, Henderson, North Las Vegas, Boulder City, and Clark County, Nevada
            </Link>
            . Services include{' '}
            <Link href="/services/commercial-office-cleaning" className="text-brand-blue font-semibold hover:underline">
              commercial and office cleaning
            </Link>
            ,{' '}
            <Link href="/services/janitorial-services" className="text-brand-blue font-semibold hover:underline">
              janitorial services
            </Link>
            ,{' '}
            <Link href="/services/post-construction-cleanup" className="text-brand-blue font-semibold hover:underline">
              post-construction cleanup
            </Link>
            ,{' '}
            <Link href="/services/retail-space-cleaning" className="text-brand-blue font-semibold hover:underline">
              retail space cleaning
            </Link>
            ,{' '}
            <Link href="/services/move-in-cleaning" className="text-brand-blue font-semibold hover:underline">
              move-in cleaning
            </Link>
            ,{' '}
            <Link href="/services/move-out-cleaning" className="text-brand-blue font-semibold hover:underline">
              move-out cleaning
            </Link>
            , and{' '}
            <Link href="/services/deep-cleaning" className="text-brand-blue font-semibold hover:underline">
              deep cleaning
            </Link>
            . Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            or{' '}
            <Link href={ROUTES.freeQuote} className="text-brand-blue font-semibold hover:underline">
              request a free quote
            </Link>{' '}
            to schedule a walkthrough.
          </p>
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────────────────────── */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="What we offer"
            heading="Seven commercial cleaning services."
            sub="One owner-led team. The same finishing standard on every job, from a single post-construction cleanup to a weekly janitorial route."
          />
          <ServicesPreview services={SERVICES} />
        </div>
      </section>

      {/* ── Who We Serve ──────────────────────────────────────────────────── */}
      <section className="bg-light-gray border-t border-border-subtle">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who we serve"
            heading="Commercial cleaning built for how your business operates."
            sub="Final Touch works with business owners, contractors, and property managers who need a professional cleaning standard across their commercial properties."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {audiences.map((a) => (
              <li key={a.title} className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
                <h3 className="font-display text-lg font-semibold text-brand-black">{a.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">{a.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Cleaning by Location ──────────────────────────────────────────── */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="rounded-[14px] border border-border-subtle bg-soft-blue/40 p-6 sm:p-8">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
              Working in a specific city?
            </p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black">
              Commercial cleaning across all of {SITE.serviceArea.county}.
            </h2>
            <p className="mt-3 text-base text-brand-black leading-relaxed">
              Final Touch serves {SITE.serviceArea.cities.join(', ')} and all of{' '}
              {SITE.serviceArea.county}. One owner-led team. No franchise subcontractors.
            </p>
            <ul className="mt-5 flex flex-wrap gap-3">
              {[
                { label: 'Las Vegas',       href: '/locations/las-vegas'       },
                { label: 'Henderson',       href: '/locations/henderson'       },
                { label: 'North Las Vegas', href: '/locations/north-las-vegas' },
                { label: 'Boulder City',    href: '/locations/boulder-city'    },
                { label: 'Clark County',    href: '/locations/clark-county'    },
              ].map((city) => (
                <li key={city.label}>
                  <Link
                    href={city.href}
                    className="inline-flex min-h-[44px] items-center rounded-full bg-brand-white border border-border-subtle px-5 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue hover:text-brand-blue transition-colors"
                  >
                    {city.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm">
              <Link href={ROUTES.locations} className="font-semibold text-brand-blue hover:underline">
                View service area &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Industries Callout ────────────────────────────────────────────── */}
      <section className="bg-light-gray border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
          <SectionHeader
            eyebrow="Industries"
            heading="Cleaning built around how your business works."
            sub="Final Touch adapts scope and scheduling to match the way your industry operates."
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {[
              { label: 'Medical and dental offices', href: '/industries/medical-office-cleaning/las-vegas'     },
              { label: 'Law firms',                  href: '/industries/law-firm-cleaning/las-vegas'            },
              { label: 'Restaurants',                href: '/industries/restaurant-cleaning/las-vegas'          },
              { label: 'Retail stores',              href: '/industries/retail-store-cleaning/las-vegas'        },
              { label: 'Property management',        href: '/industries/property-management-cleaning/las-vegas' },
              { label: 'Chiropractic and PT',        href: '/industries'                                        },
            ].map((ind) => (
              <li key={ind.label}>
                <Link
                  href={ind.href}
                  className="inline-flex min-h-[44px] items-center rounded-full bg-brand-white border border-border-subtle px-5 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                  {ind.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm">
            <Link href="/industries" className="font-semibold text-brand-blue hover:underline">
              View all industry cleaning services &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <FAQSection
        heading="Commercial cleaning services questions, answered."
        items={faq}
        defaultOpenFirst
      />
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-sm text-muted">
            More questions?{' '}
            <Link href={ROUTES.faq} className="font-semibold text-brand-blue hover:underline">
              Read our full FAQ &rarr;
            </Link>
          </p>
        </div>
      </div>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <CTASection
        heading="Ready for commercial cleaning services that get the details right?"
        sub={`Free walkthrough and written estimate. No obligation. Serving offices, contractors, and property managers across ${SITE.serviceArea.county}, Nevada.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

      {/* ── JSON-LD ───────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
    </>
  );
}
