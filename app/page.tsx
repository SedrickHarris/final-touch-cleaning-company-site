import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import HeroSection from '@/components/shared/HeroSection';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import SectionHeader from '@/components/shared/SectionHeader';
import ServicesPreview from '@/components/shared/ServicesPreview';
import TrustBar from '@/components/shared/TrustBar';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES, SERVICES } from '@/lib/constants/routes';

// ─── Metadata ────────────────────────────────────────────────────────────────
// Primary keyword: commercial cleaning company Las Vegas
// Secondary: office cleaning Las Vegas, janitorial services Las Vegas,
//   post-construction cleanup Las Vegas, Clark County NV
// Search intent: commercial, transactional, local
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Commercial Cleaning Company in Las Vegas, NV | Final Touch',
  description:
    'Family-owned commercial cleaning services in Las Vegas, NV. Office cleaning, janitorial, post-construction, move-in/move-out, and retail. Licensed and insured. Call (702) 444-5077.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Commercial Cleaning Company in Las Vegas, NV | Final Touch Cleaning Company',
    description:
      'Family-owned commercial cleaning in Las Vegas, NV. Scott & Nicole Maland serve offices, retailers, and property managers. Free quotes. Call (702) 444-5077.',
    type: 'website',
    url: SITE.url,
  },
};

export default function HomePage() {
  // ─── Trust Bar ─────────────────────────────────────────────────────────────
  const trustItems = [
    { label: 'Commercial cleaning company',       sub: 'Offices, retail, post-construction'  },
    { label: 'Family owned',                      sub: SITE.owners                           },
    { label: 'Licensed & insured',                sub: 'Nevada licensed and insured'         },
    { label: `Serving ${SITE.serviceArea.metro}`, sub: SITE.serviceArea.cities.join(' · ')   },
    { label: 'Free walkthroughs',                 sub: 'Written estimate before work begins' },
  ];

  // ─── Who We Serve ──────────────────────────────────────────────────────────
  // Commercial-first. Move-in/move-out framed for property managers and
  // landlords, not personal home moves. No ongoing residential cleaning.
  const audiences = [
    {
      title: 'Offices and businesses',
      body: 'Commercial cleaning and janitorial routes for offices, retail spaces, and small commercial operations across Las Vegas and Clark County. One-time jobs and ongoing scheduled programs.',
    },
    {
      title: 'Property managers and landlords',
      body: 'Unit turn cleaning, move-in preps, and portfolio programs for property managers and landlords across Clark County. Consistent standard across every unit, every turn.',
    },
    {
      title: 'Contractors and builders',
      body: 'Post-construction cleanup for new builds, tenant improvements, and renovations in Clark County. Dust, residue, and the fine grit that settles on every surface after a build.',
    },
    {
      title: 'Move-in and move-out clients',
      body: 'Move-in cleans before new keys. Move-out cleans when you hand back the space. For property managers, landlords, renters, and real estate agents across Clark County.',
    },
  ];

  // ─── Why Final Touch ───────────────────────────────────────────────────────
  const whyItems = [
    {
      title: 'Owner-led on every account',
      body: `${SITE.owners} personally oversee every commercial account. Your business is not handed to a rotation of subcontractors. The same standard, the same team, every visit.`,
    },
    {
      title: 'Scheduled around your operations',
      body: 'Commercial clients need cleaning that does not disrupt their business day. We clean after hours, overnight, or early morning on a schedule that works for your business.',
    },
    {
      title: 'The details that make a space feel finished',
      body: 'Baseboards, vents, switch plates, edges, glass, and hardware. The surfaces a standard cleaning crew skips are the ones we focus on. That is the final touch.',
    },
  ];

  // ─── How It Works ──────────────────────────────────────────────────────────
  const processSteps = [
    {
      step: '01',
      title: 'Call or request a quote',
      body: `${SITE.phone.display} or submit a request online. Tell us your business type, location, and what you need cleaned.`,
    },
    {
      step: '02',
      title: 'Walkthrough',
      body: 'Scott or Nicole visits your space, confirms scope, reviews access and scheduling requirements, and identifies your priorities.',
    },
    {
      step: '03',
      title: 'Written estimate',
      body: 'You receive a written estimate before any work begins. No surprises. No obligation until you approve.',
    },
    {
      step: '04',
      title: 'Cleaning begins',
      body: 'Work starts on the agreed schedule. Same team, same finishing standard, every visit. If anything needs attention, we want to know.',
    },
  ];

  // ─── AEO FAQ ───────────────────────────────────────────────────────────────
  // Rules: direct answer in sentence 1. Real customer phrasing. No em dashes.
  // No fake claims. FAQPage JSON-LD generated from this array (exact text match).
  const faq = [
    {
      q: 'Is Final Touch a commercial cleaning company?',
      a: `Yes. Final Touch Cleaning Company is a family-owned commercial cleaning company serving offices, retail spaces, post-construction sites, and commercial properties across Las Vegas, Henderson, North Las Vegas, Boulder City, and Clark County, Nevada. The company is owned and operated by Scott and Nicole Maland. Call ${SITE.phone.display} to request a free walkthrough.`,
    },
    {
      q: 'What commercial cleaning services does Final Touch offer?',
      a: `Final Touch offers seven commercial cleaning services: commercial and office cleaning, janitorial services, post-construction cleanup, retail space cleaning, move-in cleaning, move-out cleaning, and deep cleaning. All services are available across ${SITE.serviceArea.county}, Nevada. Call ${SITE.phone.display} or visit the services page for full details.`,
    },
    {
      q: 'Does Final Touch clean office buildings in Las Vegas?',
      a: `Yes. Final Touch provides commercial office cleaning and janitorial services for offices, professional services firms, and commercial buildings across Las Vegas and ${SITE.serviceArea.county}. Recurring programs and one-time cleans are both available. Scott and Nicole Maland oversee every commercial account personally.`,
    },
    {
      q: 'Do you offer post-construction cleanup for commercial projects?',
      a: `Yes. Post-construction cleanup is a core service at Final Touch. We work with general contractors, tenant improvement contractors, commercial developers, and property owners finishing buildouts and renovations across ${SITE.serviceArea.county}. Call ${SITE.phone.display} to arrange a walkthrough.`,
    },
    {
      q: 'What areas does Final Touch serve?',
      a: `Final Touch serves Las Vegas, Henderson, North Las Vegas, Boulder City, and all of ${SITE.serviceArea.county}, Nevada. Scott and Nicole travel to your commercial property for the initial walkthrough and all cleaning visits.`,
    },
    {
      q: 'How do I get a commercial cleaning quote in Las Vegas?',
      a: `Call ${SITE.phone.display} or submit a request on the free quote page. Scott or Nicole will follow up to schedule a walkthrough, confirm scope and access requirements, and provide a written estimate. There is no obligation and no cost for the walkthrough.`,
    },
    {
      q: 'Does Final Touch work with property managers?',
      a: `Yes. Final Touch works with property managers and landlords across ${SITE.serviceArea.county} who need move-in cleaning, move-out cleaning, and common area maintenance across their rental portfolios. One vendor, consistent standard at every property.`,
    },
    {
      q: 'Is Final Touch licensed and insured in Nevada?',
      a: `Yes. Final Touch Cleaning Company is licensed and fully insured in Nevada. For commercial accounts where vendor documentation is required, it is available on request. Call ${SITE.phone.display} or request a free quote to get started.`,
    },
    {
      q: 'Are your online quote forms active?',
      a: `The online quote form is being connected to our scheduling system. For the fastest response, call ${SITE.phone.display} or email ${SITE.email.display}.`,
    },
  ];

  // ─── JSON-LD ───────────────────────────────────────────────────────────────
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  // LocalBusiness JSON-LD lives in the global layout (app/layout.tsx) as a
  // single site-wide node per docs/site-os/build-status-reconciliation.md §5.
  // Intentionally omitted here to avoid a duplicate LocalBusiness node on the
  // homepage (owner decision, 2026-06-07).

  const heroSub = `Scott and Nicole Maland run Final Touch, a family-owned commercial cleaning company serving Las Vegas, Henderson, North Las Vegas, and Boulder City. We clean offices, post-construction sites, retail spaces, and rental properties with the detail focus that makes a space feel finished.`;

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <HeroSection
        eyebrow={`Commercial cleaning · ${SITE.serviceArea.county}, ${SITE.serviceArea.stateAbbr}`}
        heading="Commercial Cleaning Company in Las Vegas, NV."
        emphasis="Commercial Cleaning Company"
        sub={heroSub}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{
          label: `${CTAS.call} · ${SITE.phone.display}`,
          href: SITE.phone.href,
        }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/heroes/final-touch-cleaning-services-las-vegas-hero.webp',
          alt: 'Commercial office cleaned by Final Touch Cleaning Company in Las Vegas, NV.',
        }}
      />

      {/* ── Trust Bar ─────────────────────────────────────────────────────── */}
      <TrustBar items={trustItems} />

      {/* ── Services Preview ──────────────────────────────────────────────── */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="What we do"
            heading="Seven commercial cleaning services. One standard."
            sub="From recurring janitorial routes and post-construction cleanup to move-in and retail cleans, every job ends with the same finishing checklist."
          />
          <ServicesPreview services={SERVICES} />
          <p className="mt-10 text-sm">
            <Link href={ROUTES.services} className="font-semibold text-brand-blue hover:underline">
              View all commercial cleaning services &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* ── Who We Serve ──────────────────────────────────────────────────── */}
      <section className="bg-light-gray border-t border-border-subtle">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who we serve"
            heading="Built for commercial, post-construction, and property-management work."
            sub="Final Touch serves offices, retail businesses, contractors, property managers, and landlords across the Las Vegas Valley."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {audiences.map((a) => (
              <li key={a.title} className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
                <h3 className="font-display text-lg font-semibold text-brand-black">{a.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">{a.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Direct-Answer Block ───────────────────────────────────────────── */}
      {/* AEO / featured-snippet target. Entity statement for LLM citation. */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Final Touch Cleaning Company is a commercial cleaning company based in Southern Nevada.
            Scott and Nicole Maland serve offices, retail spaces, post-construction sites, janitorial
            accounts, and property-managed buildings across{' '}
            <Link href={ROUTES.locations} className="text-brand-blue font-semibold hover:underline">
              Las Vegas, Henderson, North Las Vegas, Boulder City, and Clark County
            </Link>
            . Every commercial account starts with a free walkthrough and a written estimate before
            work begins. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            or{' '}
            <Link href={ROUTES.freeQuote} className="text-brand-blue font-semibold hover:underline">
              request a free quote
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── Why Final Touch ───────────────────────────────────────────────── */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why Final Touch"
            heading="Where small details bring big results."
            sub="Three things that separate a detail-focused commercial cleaning company from a standard cleaning service."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {whyItems.map((item) => (
              <li key={item.title} className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
                <h3 className="font-display text-lg font-semibold text-brand-black">{item.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <Link href={ROUTES.about}    className="font-semibold text-brand-blue hover:underline">Learn about our company &rarr;</Link>
            <Link href={ROUTES.ourTeam}  className="font-semibold text-brand-blue hover:underline">Meet Scott and Nicole &rarr;</Link>
            <Link href={ROUTES.reviews}  className="font-semibold text-brand-blue hover:underline">Read client reviews &rarr;</Link>
            <Link href={ROUTES.pricing}  className="font-semibold text-brand-blue hover:underline">How our pricing works &rarr;</Link>
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────────────── */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="How it works"
            heading="From first call to first clean."
            sub="Every new commercial account starts with a walkthrough. No templated quotes. No guesswork."
          />
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((item) => (
              <li key={item.step} className="flex gap-5 rounded-[14px] border border-border-subtle bg-light-gray p-6">
                <span
                  aria-hidden="true"
                  className="font-display text-2xl font-semibold tracking-tight text-brand-blue tabular-nums shrink-0"
                >
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-brand-black">{item.title}</h3>
                  <p className="mt-1.5 text-sm sm:text-base text-muted leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Service Area ──────────────────────────────────────────────────── */}
      {/* GEO + local SERP / Google Map Pack / Apple Search signal. */}
      <section className="bg-light-gray border-t border-border-subtle">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Service area"
            heading="Commercial cleaning across the Las Vegas Valley."
            sub={`Final Touch serves commercial clients throughout ${SITE.serviceArea.county}, Nevada. One owner-led team. No franchise subcontractors.`}
          />
          <ul className="mt-8 flex flex-wrap gap-3">
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
          <p className="mt-8 text-sm text-muted leading-relaxed max-w-2xl">
            Final Touch is a service-area business. Scott and Nicole Maland travel to every
            commercial property for the initial walkthrough and all cleaning visits.{' '}
            <Link href={ROUTES.locations} className="font-semibold text-brand-blue hover:underline">
              See all service locations
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── Industries ────────────────────────────────────────────────────── */}
      {/* Topical authority signal. Links to industry verticals. */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Industries"
            heading="Commercial cleaning built around how your business works."
            sub="Different industries have different cleaning requirements. Final Touch adapts scope, timing, and access to match the way your operation runs."
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {[
              { label: 'Medical and dental offices',        href: '/industries/medical-office-cleaning/las-vegas'     },
              { label: 'Law firms',                         href: '/industries/law-firm-cleaning/las-vegas'            },
              { label: 'Restaurants',                       href: '/industries/restaurant-cleaning/las-vegas'          },
              { label: 'Retail stores',                     href: '/industries/retail-store-cleaning/las-vegas'        },
              { label: 'Property management',               href: '/industries/property-management-cleaning/las-vegas' },
              { label: 'Chiropractic and physical therapy', href: '/industries/chiropractic-cleaning/las-vegas'           },
            ].map((ind) => (
              <li key={ind.label}>
                <Link
                  href={ind.href}
                  className="inline-flex min-h-[44px] items-center rounded-full bg-light-gray border border-border-subtle px-5 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue hover:text-brand-blue transition-colors"
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
        heading="Commercial cleaning questions, answered."
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
        heading="Ready for a commercial cleaning company that gets the details right?"
        sub={`Request a free walkthrough and written estimate. No obligation. Serving offices, retailers, contractors, and property managers across ${SITE.serviceArea.county}, Nevada.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

      {/* ── JSON-LD ───────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
