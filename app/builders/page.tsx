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
  title: 'Builder Post-Construction Cleaning Las Vegas | Final Touch',
  description:
    'Post-construction cleanup for new builds across Clark County, NV. All major Las Vegas Valley builders. Final Touch. Call (702) 444-5077.',
  alternates: { canonical: `${SITE.url}/builders` },
  openGraph: {
    title: 'Builder Post-Construction Cleaning Las Vegas | Final Touch',
    description:
      'Post-construction cleanup for new builds across Clark County, NV. All major Las Vegas Valley builders. Final Touch. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/builders`,
  },
};

const builders = [
  {
    label: 'Toll Brothers',
    sub: 'Luxury new-home construction · Henderson, Summerlin',
    href: '/builders/toll-brothers-post-construction-cleaning',
  },
  {
    label: 'Pulte Homes',
    sub: 'Standard and Del Webb active adult communities · Henderson',
    href: '/builders/pulte-homes-post-construction-cleaning',
  },
  {
    label: 'D.R. Horton',
    sub: 'Standard and Express Homes · North Las Vegas, Henderson',
    href: '/builders/dr-horton-post-construction-cleaning',
  },
  {
    label: 'Lennar',
    sub: 'Standard and NextGen multi-generational homes · Henderson',
    href: '/builders/lennar-post-construction-cleaning',
  },
  {
    label: 'KB Home',
    sub: 'Built to Order custom finishes · Las Vegas Valley',
    href: '/builders/kb-home-post-construction-cleaning',
  },
  {
    label: 'Taylor Morrison',
    sub: 'Esplanade active adult and standard communities · Henderson',
    href: '/builders/taylor-morrison-post-construction-cleaning',
  },
  {
    label: 'Tri Pointe Homes',
    sub: 'Premium communities · Summerlin, Las Vegas',
    href: '/builders/tri-pointe-post-construction-cleaning',
  },
  {
    label: 'Century Communities',
    sub: 'Standard and Century Complete online purchase · North Las Vegas',
    href: '/builders/century-communities-post-construction-cleaning',
  },
  {
    label: 'Taylor Morrison at Ascension',
    sub: 'Gated community · Henderson, NV',
    href: '/builders/taylor-morrison-ascension-post-construction-cleaning',
  },
  {
    label: 'Shea Homes',
    sub: 'Privately held builder · Summerlin, Henderson',
    href: '/builders/shea-homes-post-construction-cleaning',
  },
];

const faq = [
  {
    q: 'Which builders does Final Touch serve for post-construction cleaning in Las Vegas?',
    a: `Final Touch serves post-construction cleanup for homebuyers and project teams from all major Las Vegas Valley builders, including Toll Brothers, Pulte Homes, D.R. Horton, Lennar, KB Home, Taylor Morrison, Tri Pointe, Century Communities, and Taylor Morrison at Ascension. If your builder is not listed, call ${SITE.phone.display}. Final Touch serves any new build in ${SITE.serviceArea.county} regardless of the builder.`,
  },
  {
    q: 'What is post-construction cleaning and why do new homes need it?',
    a: `Post-construction cleaning addresses the residue that builder cleaning does not remove: drywall dust on every surface including vents and cabinet interiors, adhesive and caulk residue around fixtures and tile, window film on all glass, and fine grit on floors and baseboards. Builder cleaning prepares a home for the final walkthrough. Post-construction cleaning prepares it for occupancy.`,
  },
  {
    q: 'Does Final Touch clean new builds from any builder in the Las Vegas Valley?',
    a: `Yes. Final Touch serves new builds from any builder in ${SITE.serviceArea.county}, not only the builders listed on this page. The listed builders have dedicated pages with community-specific FAQs. For any other builder or community, call ${SITE.phone.display} or request a free quote and describe the build and community at the time of scheduling.`,
  },
  {
    q: 'How do I schedule post-construction cleaning after my builder handoff in Las Vegas?',
    a: `Call ${SITE.phone.display}, email ${SITE.email.display}, or request a free quote on this site. Describe the builder, community, home size, and preferred timing. ${SITE.owners} will follow up to schedule a walkthrough and confirm the scope and quote before any work begins. For gated communities, provide access details at the time of scheduling.`,
  },
];

// No AggregateRating or Review schema.
// CollectionPage captures the hub nature of this page.
const collectionPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Builder Post-Construction Cleaning | Final Touch',
  description:
    'Post-construction cleanup for new builds across Clark County, NV. All major Las Vegas Valley builders.',
  url: `${SITE.url}/builders`,
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
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Builders',
      item: `${SITE.url}/builders`,
    },
  ],
};

export default function BuildersHubPage() {
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
        eyebrow="Builder Post-Construction Cleaning"
        heading="Post-Construction Cleaning for New Builds | Las Vegas Valley Builders"
        sub="Final Touch provides post-construction cleanup for homebuyers and project teams across Clark County, Nevada, regardless of builder. Select your builder below for community-specific information, or call (702) 444-5077 to schedule a walkthrough and free quote."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      {/* 2. Direct answer */}
      <section className="bg-brand-white border-b border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="text-base sm:text-lg text-brand-black leading-relaxed">
            Final Touch provides{' '}
            <Link
              href="/services/post-construction-cleanup"
              className="font-semibold text-brand-blue hover:underline"
            >
              post-construction cleanup
            </Link>{' '}
            for homebuyers and project teams across Clark County, Nevada, regardless of
            builder. The residue left behind after a builder handoff is consistent
            across every new build: drywall dust, adhesive, window film, and
            construction grit. We scope every job on-site before quoting. Select your
            builder below for community-specific information and FAQs.
          </p>
        </div>
      </section>

      {/* 3. Builder grid */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Las Vegas Valley builders"
            heading="Builders we serve."
            sub="Select your builder for community-specific post-construction cleaning information."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {builders.map((builder) => (
              <li key={builder.label}>
                {builder.href === '#' ? (
                  <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6 opacity-60">
                    <p className="font-display text-lg font-semibold text-brand-black">
                      {builder.label}
                    </p>
                    <p className="mt-1 text-sm text-muted">{builder.sub}</p>
                  </div>
                ) : (
                  <Link
                    href={builder.href}
                    className="block rounded-[14px] border border-border-subtle bg-brand-white p-6 hover:border-brand-blue/40 hover:shadow-sm transition-all"
                  >
                    <p className="font-display text-lg font-semibold text-brand-black">
                      {builder.label}
                    </p>
                    <p className="mt-1 text-sm text-muted">{builder.sub}</p>
                    <p className="mt-4 text-sm font-semibold text-brand-blue">
                      View post-construction cleaning →
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Why */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeader
            eyebrow="Why new builds need it"
            heading="Builder cleaning and post-construction cleaning are not the same thing."
          />
          <p className="mt-8 text-base sm:text-lg text-brand-black leading-relaxed">
            Builder cleaning prepares a home for the final walkthrough. It addresses
            visible surfaces and gives the home a presentation-ready appearance.
            Post-construction cleaning addresses what remains after the builder crew
            leaves: drywall dust in HVAC registers and cabinet interiors, adhesive
            residue around tile and fixtures, window film on all glass, and fine grit
            on floors and baseboards. These are not visible deficiencies during a
            walkthrough but become apparent once the home is occupied.
          </p>
          <p className="mt-8 text-sm">
            <Link
              href="/services/post-construction-cleanup"
              className="font-semibold text-brand-blue hover:underline"
            >
              See the full post-construction cleanup service →
            </Link>
          </p>
        </div>
      </section>

      {/* 5. How we scope */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeader
            eyebrow="How it works"
            heading="How Final Touch scopes builder jobs."
          />
          <p className="mt-8 text-base sm:text-lg text-brand-black leading-relaxed">
            Every post-construction job starts with an on-site walkthrough. Scott or
            Nicole Maland walks through the space, confirms the construction residue
            type, identifies any upgraded surfaces or custom finishes, notes access
            requirements including gated communities, and produces an accurate quote
            before work begins. Nothing is assumed from the builder name alone.
          </p>
          <p className="mt-8 text-sm">
            <Link
              href="/cleaning-process"
              className="font-semibold text-brand-blue hover:underline"
            >
              How our cleaning process works →
            </Link>
          </p>
        </div>
      </section>

      {/* 6. Service area */}
      <section className="bg-brand-white border-y border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <SectionHeader
            eyebrow="Service area"
            heading="New build cleanup across Clark County."
            sub="Final Touch serves builder communities throughout the Las Vegas Valley."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services/post-construction-cleanup"
              className="inline-flex items-center rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Post-Construction Cleanup
            </Link>
            <Link
              href="/locations/las-vegas"
              className="inline-flex items-center rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Las Vegas
            </Link>
            <Link
              href="/locations/henderson"
              className="inline-flex items-center rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Henderson
            </Link>
            <Link
              href="/locations/north-las-vegas"
              className="inline-flex items-center rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              North Las Vegas
            </Link>
            <Link
              href="/services/move-in-cleaning"
              className="inline-flex items-center rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Move-In Cleaning
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-border-subtle bg-light-gray min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
            >
              Contact the Team
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <FAQSection
        items={faq}
        heading="Builder post-construction cleaning questions"
        defaultOpenFirst
      />

      {/* 8. Final CTA */}
      <CTASection
        heading="Ready to schedule your post-construction clean?"
        sub={`Call ${SITE.phone.display} or request a free quote online. Final Touch walks through every job before quoting. ${SITE.owners} and the team serve Clark County, Nevada.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
