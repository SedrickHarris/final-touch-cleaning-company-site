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

// TODO-BATCH-3: Individual service pages (/services/<slug>) are not yet
// built. Until they ship, service card hrefs fall back to ROUTES.services so
// cards link to the hub rather than 404. Replace each card href with the
// real slug once Batch 3 lands. The SERVICES constant already holds the
// correct per-service hrefs; update ServicesPreview to use them directly
// after Batch 3 is live.
const SERVICES_WITH_FALLBACK = SERVICES.map((s) => ({
  ...s,
  href: ROUTES.services,
}));

export const metadata: Metadata = {
  title: 'Cleaning Services in Las Vegas & Clark County, NV | Final Touch',
  description:
    'Family-owned cleaning services in Las Vegas, Henderson, and Clark County, NV. Residential and commercial. Free quotes. Call (702) 444-5077.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Cleaning Services in Las Vegas, NV | Final Touch Cleaning Company',
    description:
      'Scott & Nicole Maland own and run Final Touch, serving Clark County, NV. Homes, offices, post-construction, move-out, and more. Free quotes.',
    type: 'website',
    url: SITE.url,
  },
};

// Homepage. Conversion flow: split hero with form, trust bar, services
// preview, who we help, why Final Touch, how the quote process works,
// service area section, FAQ, final CTA. No unverified claims. Every fact
// maps to lib/constants/site.ts or to brand-voice positioning already in
// docs/site-os/final-touch-build-context.md.
export default function HomePage() {
  const trustItems = [
    { label: 'Family owned', sub: SITE.owners },
    { label: 'Local team', sub: 'Based in Southern Nevada' },
    {
      label: 'Serving Clark County',
      sub: SITE.serviceArea.cities.join(' · '),
    },
    { label: 'Free quotes', sub: 'No-pressure walkthroughs' },
  ];

  const audiences = [
    {
      title: 'Homeowners',
      body:
        'Move-in cleans for new keys, deep cleans when a space needs a real reset, and recurring residential service across Clark County.',
    },
    {
      title: 'Renters and landlords',
      body:
        'Move-out cleans for deposit-ready handoffs. Move-in cleans before a new tenant settles in. Property managers and real-estate agents welcome.',
    },
    {
      title: 'Offices and businesses',
      body:
        'Commercial cleaning and janitorial routes for offices, retail spaces, and small commercial operations in Las Vegas and across the county.',
    },
    {
      title: 'Contractors and builders',
      body:
        'Post-construction cleanup for new builds and renovations in Clark County: dust, residue, and the fine grit that settles on every surface after a build.',
    },
  ];

  const whyItems = [
    {
      title: 'Family owned, owner led',
      body: `${SITE.owners} run every aspect of Final Touch. It is not a franchise or a staffing platform. The owners set the standard and are accountable for every job.`,
    },
    {
      title: 'The details other crews skip',
      body:
        'Baseboards, vents, switch plates, corners, and edges. The finishing ten percent that turns a cleaned space into a finished one.',
    },
    {
      title: 'Free walkthroughs, real quotes',
      body:
        'Every quote starts with a short walkthrough, phone or on-site. You get a real number for the actual scope, not a templated price. No obligation to book.',
    },
  ];

  // TODO-BATCH-4: Per-city location pages at /locations/<city> are not yet
  // built. These links will 404 until Batch 4 ships. Using ROUTES.locations
  // as the fallback href until city pages are live.
  const serviceAreaCities = [
    { name: 'Las Vegas', href: ROUTES.locations },
    { name: 'Henderson', href: ROUTES.locations },
    { name: 'North Las Vegas', href: ROUTES.locations },
    { name: 'Boulder City', href: ROUTES.locations },
    { name: 'Clark County', href: ROUTES.locations },
  ];

  const faq = [
    {
      q: 'What cleaning services does Final Touch Cleaning Company offer?',
      a: 'Final Touch offers seven core services: commercial and office cleaning, janitorial routes, post-construction cleanup, move-in cleaning, move-out cleaning, deep cleaning, and retail space cleaning. Each service is scoped to the specific space and timeline.',
    },
    {
      q: 'What cities and areas does Final Touch serve?',
      a: `Final Touch serves ${SITE.serviceArea.county}, ${SITE.serviceArea.state}, including ${SITE.serviceArea.cities.join(', ')}. If you are in Clark County and unsure whether your location is covered, call ${SITE.phone.display} and we will confirm.`,
    },
    {
      q: 'Does Final Touch clean homes and businesses?',
      a: 'Yes, both. Residential services include move-in, move-out, and deep cleaning. Commercial services include office cleaning, janitorial services, and retail space cleaning. Post-construction cleanup covers new builds and renovation sites.',
    },
    {
      q: 'Who owns Final Touch Cleaning Company?',
      a: `${SITE.owners} own and operate Final Touch. It is a family-run business based in Southern Nevada, not a franchise. The owners are directly involved in every job.`,
    },
    {
      q: 'How do I get a free cleaning estimate?',
      a: `Call ${SITE.phone.display}, email ${SITE.email.display}, or submit a quote request online. We schedule a short walkthrough, either by phone or on-site. After the walkthrough you receive a specific quote for your space. The walkthrough is free and there is no obligation to book.`,
    },
    {
      q: 'Does Final Touch serve Henderson and North Las Vegas?',
      a: `Yes. Final Touch serves Henderson, North Las Vegas, Las Vegas, Boulder City, and the broader Clark County area. Coverage extends across the county, not just central Las Vegas.`,
    },
    {
      q: 'What does Final Touch do that other cleaning companies do not?',
      a: 'Final Touch focuses on the finishing details most crews rush past: baseboards, vents, switch plates, corners, and edges. The same owners who set the standard answer the phone and check the finish. No upsells, no surprise add-ons.',
    },
    {
      q: 'Do you provide move-in and move-out cleaning?',
      a: 'Yes. Move-in cleaning preps a space before you settle in. Move-out cleaning gets a home or unit deposit-ready for handoff. Both are scoped during the walkthrough so the quote reflects the actual condition of the space.',
    },
    {
      q: 'Can I request recurring cleaning services?',
      a: 'Yes. Final Touch offers recurring service for both commercial and residential clients. Commercial clients can set up regular janitorial routes. Residential clients can request recurring service at the frequency that works for their space and schedule.',
    },
    {
      q: 'What happens after I request a quote?',
      a: 'We set up a short walkthrough to understand the space, the scope, and the timing. It is usually a phone call, or a brief on-site visit for larger or more complex jobs. After the walkthrough you get a real quote. No pressure to commit.',
    },
    {
      q: 'Does Final Touch offer post-construction cleanup in Las Vegas?',
      a: `Yes. Post-construction cleanup is one of Final Touch's core services. We serve contractors, builders, and property owners in Las Vegas, Henderson, North Las Vegas, Boulder City, and across Clark County. Call ${SITE.phone.display} to set up a walkthrough.`,
    },
    {
      q: 'Are your online quote forms active yet?',
      a: `Our online quote form is being wired to our scheduling system right now. For the fastest response, call ${SITE.phone.display} or email ${SITE.email.display}. We will get back to you to schedule a walkthrough.`,
    },
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  // Organization JSON-LD. No streetAddress: service-area-only business per
  // docs/site-os/no-fake-data-policy.md sec 2.
  // TODO-VERIFY: foundingDate, license, insurance, sameAs (social/GBP links).
  // Add only after owner-supplied verification.
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone.href.replace('tel:', ''),
    email: SITE.email.display,
    areaServed: [SITE.serviceArea.county, ...SITE.serviceArea.cities].map(
      (name) => ({ '@type': 'Place', name: `${name}, ${SITE.serviceArea.stateAbbr}` })
    ),
    founder: SITE.owners.split(' & ').map((name) => ({ '@type': 'Person', name })),
  };

  const heroSub = `Scott and Nicole Maland run Final Touch, a family-owned cleaning company serving Las Vegas, Henderson, North Las Vegas, and Boulder City. We clean homes, offices, post-construction sites, and retail spaces with attention to the finishing details that make a space feel done.`;

  return (
    <>
      <HeroSection
        eyebrow={`Cleaning services · ${SITE.serviceArea.county}, ${SITE.serviceArea.stateAbbr}`}
        heading="Professional Cleaning Services in Las Vegas and Clark County, NV."
        sub={heroSub}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{
          label: `${CTAS.call} · ${SITE.phone.display}`,
          href: SITE.phone.href,
        }}
        formSlot={<QuoteFormPlaceholder />}
      />

      <TrustBar items={trustItems} />

      {/* Services preview */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="What we do"
            heading="Seven services. One standard."
            sub="From a single deep clean to ongoing janitorial routes, every job ends with the same checklist: the details that make a space feel finished."
          />

          <ServicesPreview services={SERVICES_WITH_FALLBACK} />

          <p className="mt-10 text-sm">
            <Link
              href={ROUTES.services}
              className="font-semibold text-brand-blue hover:underline"
            >
              View all cleaning services →
            </Link>
          </p>
        </div>
      </section>

      {/* Who we help */}
      <section className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who we help"
            heading="Built for homes, offices, and everything in between."
            sub="Final Touch serves homeowners, renters, property managers, business owners, and contractors across Clark County, Nevada."
          />

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {audiences.map((a) => (
              <li
                key={a.title}
                className="rounded-[14px] border border-border-subtle bg-light-gray p-6"
              >
                <h3 className="font-display text-lg font-semibold text-brand-black">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">
                  {a.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Final Touch */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why Final Touch"
            heading="Where small details bring big results."
            sub="Three things that separate a detail-focused cleaning company from a basic cleaning service."
          />

          <ul className="mt-10 grid gap-5 sm:grid-cols-3 lg:gap-6">
            {whyItems.map((item) => (
              <li
                key={item.title}
                className="rounded-[14px] border border-border-subtle bg-brand-white p-6"
              >
                <h3 className="font-display text-lg font-semibold text-brand-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-sm">
            <Link
              href={ROUTES.about}
              className="font-semibold text-brand-blue hover:underline"
            >
              Learn about our team →
            </Link>
          </p>

          {/* TODO-DEFERRED-TIER1: /reviews and /pricing are Tier 1 brand
              pages listed in site-build-plan.md but explicitly deferred from
              Batch 2 (batch-2-core-brand-pages-prompt.md) pending owner-
              supplied data (/reviews needs verified review content;
              /pricing needs owner-confirmed pricing structure). They have no
              assigned build batch yet. Do not link here until both pages are
              built and confirmed in the static export (out/ directory).
              When they land, restore two links in this block:
                "Read client reviews"  → ROUTES.reviews
                "How our pricing works" → ROUTES.pricing
              Suggested placement: this same paragraph, directly below the
              "Learn about our team" link. */}
        </div>
      </section>

      {/* How the quote process works */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="How it works"
            heading="Free quote in three steps."
            sub="No templated pricing, no pressure. We walk through the space first so the quote reflects the actual job."
          />

          <ol className="mt-10 space-y-4">
            {[
              {
                step: '01',
                title: 'Tell us about your space',
                body: `Call ${SITE.phone.display}, email ${SITE.email.display}, or send a quote request. Mention the space type, the city, and rough timing.`,
              },
              {
                step: '02',
                title: 'Short walkthrough',
                body:
                  'A quick conversation about the space, by phone or on-site, whichever fits the job. No commitment, no pressure.',
              },
              {
                step: '03',
                title: 'Real quote, your call',
                body:
                  'A real number based on the actual scope of the job. Book when it works for you, or not. The walkthrough is always free.',
              },
            ].map((item) => (
              <li
                key={item.step}
                className="flex gap-5 rounded-[14px] border border-border-subtle bg-brand-white p-5"
              >
                <span
                  aria-hidden="true"
                  className="font-display text-2xl font-semibold tracking-tight text-brand-blue tabular-nums"
                >
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-brand-black">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm sm:text-base text-muted leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Service area section */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Service area"
            heading={`Serving Las Vegas, Henderson, North Las Vegas, Boulder City, and Clark County.`}
            sub={`Final Touch is a service-area business based in Southern Nevada. We come to you. There is no public storefront, but we serve every part of ${SITE.serviceArea.county}.`}
          />

          {/* TODO-BATCH-4: City hrefs below point to /locations until individual
              city pages ship in Batch 4 (/locations/las-vegas, etc.). Update
              each href to the city slug once that batch is live. */}
          <ul className="mt-8 flex flex-wrap gap-3">
            {serviceAreaCities.map((city) => (
              <li key={city.name}>
                <Link
                  href={city.href}
                  className="inline-flex items-center rounded-full border border-border-subtle bg-brand-white px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm">
            <Link
              href={ROUTES.locations}
              className="font-semibold text-brand-blue hover:underline"
            >
              View full service area →
            </Link>
          </p>
        </div>
      </section>

      <FAQSection
        items={faq}
        heading="Common questions about Final Touch Cleaning Company"
        defaultOpenFirst
      />

      {/* /faq Tier 1 link - surfaces the full FAQ hub from the homepage */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-sm text-muted">
            More questions?{' '}
            <Link
              href={ROUTES.faq}
              className="font-semibold text-brand-blue hover:underline"
            >
              Read all frequently asked questions →
            </Link>
          </p>
        </div>
      </div>

      {/* TODO-BLOG: A blog hub at /blog and category pages are planned per
          site-build-plan.md. When the blog section launches (likely Batch 7
          or a dedicated content batch), add a "From the blog" preview section
          here or above the final CTA, linking to the 2-3 most recent posts. */}

      <CTASection
        heading="Ready to bring the details to your space?"
        sub={`Free quotes for cleaning across ${SITE.serviceArea.county}. Call ${SITE.phone.display} or request a quote online.`}
        primaryCta={{ label: CTAS.estimate, href: ROUTES.freeQuote }}
        secondaryCta={{
          label: `${CTAS.call} · ${SITE.phone.display}`,
          href: SITE.phone.href,
        }}
        tone="blue"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
