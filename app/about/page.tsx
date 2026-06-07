import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import SectionHeader from '@/components/shared/SectionHeader';
import TrustBar from '@/components/shared/TrustBar';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: { absolute: 'About Final Touch Cleaning Company | Las Vegas, NV' },
  description:
    'Family-owned commercial cleaning company in Las Vegas, NV, serving offices, contractors & property managers across Clark County. Call (702) 444-5077.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Final Touch Cleaning Company | Las Vegas, NV',
    description:
      'Final Touch is a family-owned commercial cleaning company. Scott and Nicole Maland serve offices, contractors, and property managers across Las Vegas, Henderson, and Clark County, NV. Licensed and insured. Free quotes.',
    type: 'website',
    url: `${SITE.url}/about`,
  },
};

// ─── Trust Bar ───────────────────────────────────────────────────────────────
const trustItems = [
  { label: 'Commercial cleaning company', sub: 'Offices, retail, post-construction' },
  { label: 'Family owned',                sub: SITE.owners                          },
  { label: 'Licensed & insured',          sub: 'Nevada licensed and insured'        },
  { label: 'Local team',                  sub: 'Based in Southern Nevada'           },
  { label: 'Free walkthroughs',           sub: 'Written estimate before work begins' },
  // TODO-VERIFY-ECO: activate after owner confirms eco-friendly product use.
  // Uncomment the item below once eco claims are owner-confirmed.
  // { label: 'Eco-friendly products', sub: 'Green cleaning solutions' },
];

// ─── Our Values ──────────────────────────────────────────────────────────────
const valuesItems = [
  {
    title: 'Integrity',
    body: 'We scope every job honestly, quote in writing before work begins, and tell you what is included and what is not. No hidden scope. No templated rates applied without seeing your space.',
  },
  {
    title: 'Reliability',
    body: 'Commercial clients need a cleaning partner who shows up, follows the agreed schedule, and delivers the same standard every visit. Reliability is not a feature; it is the baseline.',
  },
  {
    title: 'Excellence',
    body: 'Excellence in commercial cleaning means finishing the job, not just completing it. The baseboards, vents, switch plates, and corners that a basic service skips are the surfaces that define whether a space feels clean or just looks like someone tried.',
  },
];

// ─── Why Choose Final Touch ──────────────────────────────────────────────────
const whyChooseItems = [
  {
    title: 'Owner-led on every account',
    body: `${SITE.owners} personally oversee every commercial account. Your business is not passed to a subcontractor pool or managed through a dispatch center. Same people, same standard, every visit.`,
  },
  // TODO-VERIFY-ECO: activate after owner confirms eco-friendly product use.
  // Uncomment the card below once eco claims are owner-confirmed.
  // {
  //   title: 'Eco-friendly cleaning solutions',
  //   body: 'Final Touch uses professional-grade, eco-friendly cleaning products. Green cleaning solutions protect the health of your employees, customers, and the spaces we clean. Clients with specific product requirements can discuss them at the walkthrough.',
  // },
  {
    title: 'Scope customized to your business',
    body: 'Every commercial account starts with a walkthrough. We confirm your space, your schedule, your access requirements, and what the job actually involves before quoting. No templated rates. No assumptions.',
  },
  {
    title: 'Reliable and consistent',
    body: 'Commercial clients need the same result every visit without active supervision. Final Touch maintains a consistent finishing standard across every job, from a single office to a multi-location portfolio.',
  },
  {
    title: 'Licensed and insured in Nevada',
    body: 'Final Touch is licensed and fully insured in Nevada. For commercial accounts where vendor documentation is required, it is available on request.',
  },
  {
    title: 'Free walkthrough before every job',
    body: 'Every new commercial account starts with a no-obligation walkthrough. We confirm scope, identify priorities, and provide a written estimate before any work begins.',
  },
];

// ─── What we mean by details (retained exactly) ──────────────────────────────
const detailExamples = [
  {
    label: 'Baseboards and door frames',
    body: 'Wiped, not just dusted. The line of grime at the top of a baseboard is one of the first things a buyer or new tenant notices.',
  },
  {
    label: 'Vents and switch plates',
    body: "HVAC return covers, ceiling vents, light-switch plates, outlet covers. The small surfaces that quietly read as neglected when they are skipped.",
  },
  {
    label: 'Edges and corners',
    body: 'Behind toilets, under sinks, the corner where the tile meets the wall, the inside of the oven door. The places where dust and residue collect.',
  },
  {
    label: 'Glass, hardware, and finishes',
    body: 'Streak-free glass, polished fixtures, fingerprints off cabinet pulls. The finish that catches light and makes a space feel done.',
  },
];

// ─── How we work (retained exactly) ──────────────────────────────────────────
const howWeWorkItems = [
  {
    title: 'Same team, every job',
    body: 'Not a rotating pool of contractors. The same people who did the walkthrough do the work.',
  },
  {
    title: 'Same checklist, every time',
    body: 'Every job ends with the same finishing pass: the surfaces most crews skip on the way out the door.',
  },
  {
    title: 'No upsells, no surprises',
    body: 'The quote reflects the actual scope. Nothing gets added at the end that was not discussed at the start.',
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faq = [
  {
    q: 'Who owns Final Touch Cleaning Company?',
    a: 'Final Touch Cleaning Company is owned and operated by Scott and Nicole Maland, a husband-and-wife team based in Southern Nevada. They personally oversee every commercial account across Las Vegas, Henderson, North Las Vegas, Boulder City, and Clark County.',
  },
  {
    q: 'Is Final Touch a franchise or locally owned?',
    a: 'Final Touch is a locally owned, family-operated business, not a franchise. Scott and Nicole Maland run the company directly. Every account is owner-led, not passed to a subcontractor rotation or managed through a staffing platform.',
  },
  {
    q: "What is Final Touch Cleaning Company's mission?",
    a: 'Final Touch exists to provide commercial cleaning that business owners and property managers can rely on without supervising every visit. Every job ends with a finishing pass on the surfaces most crews skip: baseboards, vents, edges, glass, and hardware.',
  },
  // TODO-VERIFY-ECO: activate after owner confirms eco-friendly product use.
  // Uncomment the FAQ item below once eco claims are owner-confirmed.
  // {
  //   q: 'Does Final Touch use eco-friendly cleaning products?',
  //   a: 'Yes. Final Touch uses professional-grade, eco-friendly cleaning products. Green cleaning solutions protect the health of your employees and customers. Clients with specific product sensitivities or preferences can discuss requirements at the initial walkthrough.',
  // },
  {
    q: 'What makes Final Touch different from other cleaning companies in Las Vegas?',
    a: 'Final Touch is owner-led on every account. Scott and Nicole Maland personally oversee the work, not a dispatch center or subcontractor pool. Every job is scoped during a walkthrough, quoted in writing, and finished to the same detail standard regardless of job size.',
  },
  {
    q: 'Is Final Touch licensed and insured in Nevada?',
    a: `Yes. Final Touch Cleaning Company is licensed and fully insured in Nevada. For commercial accounts where vendor documentation is required, it is available on request. Call ${SITE.phone.display} or request a free quote to get started.`,
  },
  {
    q: 'What commercial cleaning services does Final Touch offer?',
    a: `Final Touch offers seven commercial cleaning services: commercial and office cleaning, janitorial services, post-construction cleanup, retail space cleaning, move-in cleaning, move-out cleaning, and deep cleaning. All are available across ${SITE.serviceArea.county}, Nevada. Call ${SITE.phone.display} to discuss your space.`,
  },
  {
    q: 'How do I get a quote from Final Touch Cleaning Company?',
    a: `Call ${SITE.phone.display} or submit a request on the free quote page. Scott or Nicole will schedule a walkthrough of your space, confirm scope, and provide a written estimate before any work begins. No obligation.`,
  },
];

// ─── JSON-LD ─────────────────────────────────────────────────────────────────
// Organization schema. No streetAddress: service-area-only business per
// docs/site-os/no-fake-data-policy.md sec 2.
// image: confirmed, logo at /images/logo/final-touch-cleaning-company-logo.webp (2026-05-29)
// sameAs: confirmed, GBP CID https://www.google.com/maps?cid=5303198646776788086 (2026-05-29)
// TODO-VERIFY: foundingDate, additional sameAs social profiles (Facebook, Instagram).
//              License number and insurance carrier remain omitted per no-fake-data policy.
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  image: 'https://www.finaltouchcleaningteam.com/images/logo/final-touch-cleaning-company-logo.webp',
  sameAs: ['https://www.google.com/maps?cid=5303198646776788086'],
  areaServed: [SITE.serviceArea.county, ...SITE.serviceArea.cities].map((name) => ({
    '@type': 'Place',
    name: `${name}, ${SITE.serviceArea.stateAbbr}`,
  })),
  founder: SITE.owners.split(' & ').map((name) => ({
    '@type': 'Person',
    name,
    jobTitle: 'Owner',
    worksFor: { '@type': 'Organization', name: SITE.name },
  })),
  knowsAbout: [
    'Commercial cleaning',
    'Janitorial services',
    'Post-construction cleanup',
    'Retail space cleaning',
    'Office cleaning',
    // TODO-VERIFY-ECO: activate after owner confirms eco-friendly product use.
    // 'Eco-friendly cleaning',
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

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <HeroSection
        eyebrow="About Final Touch Cleaning Company"
        heading="A commercial cleaning company built on the details."
        sub={`Final Touch is a family-owned commercial cleaning company serving Las Vegas, Henderson, North Las Vegas, Boulder City, and ${SITE.serviceArea.county}, Nevada. ${SITE.owners.replace(' & ', ' and ')} own and operate the company, overseeing every account personally.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        image={{
          src: '/images/heroes/family-owned-cleaning-company-las-vegas-hero.webp',
          alt: 'Family-owned commercial cleaning team serving Las Vegas, NV.',
        }}
      />

      {/* ── Trust Bar ─────────────────────────────────────────────────────── */}
      <TrustBar items={trustItems} />

      {/* ── Direct-Answer Block ───────────────────────────────────────────── */}
      {/* AEO / LLM citation target. Entity statement for the company. */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Final Touch Cleaning Company is a family-owned commercial cleaning company based in
            Southern Nevada.{' '}
            <Link href={ROUTES.ourTeam} className="text-brand-blue font-semibold hover:underline">
              Scott and Nicole Maland
            </Link>{' '}
            own and operate the business, providing commercial office cleaning, janitorial services,
            post-construction cleanup, retail space cleaning, and move-in and move-out cleaning
            across{' '}
            <Link href={ROUTES.locations} className="text-brand-blue font-semibold hover:underline">
              Las Vegas, Henderson, North Las Vegas, Boulder City, and Clark County
            </Link>
            . Every account starts with a free walkthrough and a written estimate. Call{' '}
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

      {/* ── Our Story ─────────────────────────────────────────────────────── */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-14 lg:items-center">
            <figure className="order-1 lg:order-none">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[14px] border border-border-subtle bg-light-gray">
                <Image
                  src="/images/owners/team.webp"
                  alt={`${SITE.owners}, owners of ${SITE.name}.`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted">
                {SITE.owners}, owners.
              </figcaption>
            </figure>

            <div>
              <SectionHeader eyebrow="Our story" heading="Owner-led, owner-built." />
              <div className="mt-8 space-y-5 text-base sm:text-lg text-brand-black leading-relaxed">
                <p>
                  Final Touch is a family operation. {SITE.owners} started the company to do
                  commercial cleaning that holds up to a close look: the edges, corners, and
                  surfaces that most crews skip on the way out the door. That finishing standard is
                  what the name means.
                </p>
                <p>
                  We serve {SITE.serviceArea.metro}: Las Vegas, Henderson, North Las Vegas, and
                  Boulder City. Every commercial job runs on the same finishing checklist, the same
                  team, and the same owner-set standard. Final Touch is licensed and insured in
                  Nevada.
                </p>
                <p>
                  Final Touch is not a franchise and not a staffing platform. When you call, you
                  reach {SITE.owners} or the team directly. The walkthrough, the quote, and the
                  finish check all run through the same people who own the business.
                </p>
              </div>
              <p className="mt-8 text-sm">
                <Link
                  href={ROUTES.services}
                  className="font-semibold text-brand-blue hover:underline"
                >
                  See our cleaning services &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Mission ───────────────────────────────────────────────────── */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Our mission"
            heading="A clean space that holds up to a close look."
          />
          <p className="mt-8 text-lg text-brand-black leading-relaxed">
            Our mission is to deliver commercial cleaning that business owners, property managers,
            and contractors can rely on without supervising every visit. We build programs around
            the way your business operates: your hours, your access requirements, your standard.
            Every job ends the same way, with a finishing pass on the surfaces that make a space feel
            done, not just cleaned.
          </p>
        </div>
      </section>

      {/* ── Our Values ────────────────────────────────────────────────────── */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Our values"
            heading="What drives the work."
            sub="Three principles behind every Final Touch commercial account."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {valuesItems.map((item) => (
              <li key={item.title} className="rounded-[14px] border border-border-subtle bg-light-gray p-6">
                <h3 className="font-display text-lg font-semibold text-brand-black">{item.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── What we mean by details (retained exactly) ────────────────────── */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="What we mean by details"
            heading="The surfaces most crews skip."
            sub="Every Final Touch job ends with a finishing pass on the surfaces that separate a cleaned space from a finished one."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {detailExamples.map((item) => (
              <li
                key={item.label}
                className="rounded-[14px] border border-border-subtle bg-brand-white p-6"
              >
                <h3 className="font-display text-base font-semibold text-brand-black">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Why Choose Final Touch ────────────────────────────────────────── */}
      <section className="bg-light-gray border-t border-border-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why Final Touch"
            heading="What sets a detail-focused commercial cleaning company apart."
            sub="Six reasons commercial clients across Clark County choose Final Touch over a franchise or a general service."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseItems.map((item) => (
              <li key={item.title} className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
                <h3 className="font-display text-lg font-semibold text-brand-black">{item.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── How we work (cards retained exactly) ──────────────────────────── */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="How we work"
            heading="The same standard, every time."
            sub="Three things that stay consistent across every job, every city, every type of commercial space."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-3 lg:gap-6">
            {howWeWorkItems.map((item) => (
              <li
                key={item.title}
                className="rounded-[14px] border border-border-subtle bg-light-gray p-6"
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
          <p className="mt-8 text-sm">
            <Link
              href={ROUTES.cleaningProcess}
              className="font-semibold text-brand-blue hover:underline"
            >
              How our cleaning process works &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <FAQSection
        heading="About our company and approach"
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
        heading="Want to see what a detail-focused commercial cleaning company looks like in your space?"
        sub={`Request a free walkthrough and written estimate. No obligation. Serving commercial properties across ${SITE.serviceArea.county}, Nevada.`}
        primaryCta={{ label: CTAS.estimate, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

      {/* ── JSON-LD ───────────────────────────────────────────────────────── */}
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
