import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import SectionHeader from '@/components/shared/SectionHeader';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES } from '@/lib/constants/routes';

// TODO-VERIFY: Licensed in Nevada — listed in site-build-plan.md as a trust signal
// but not independently confirmed in source docs. Do not display as customer-facing
// body copy until owner confirms.

// TODO-VERIFY: Fully insured — same status as above. Carry comment, omit from
// visible copy until owner confirms.

// TODO-VERIFY: Same-day or rush scheduling for builder handoffs — not confirmed
// in any source document. Do not claim in copy.

// TODO-VERIFY: Years in business / volume of Toll Brothers homes cleaned — not
// confirmed in source docs. Do not reference in copy.

export const metadata: Metadata = {
  title: 'Toll Brothers Post-Construction Cleaning Las Vegas | Final Touch',
  description:
    'Post-construction cleanup after your Toll Brothers home handoff in Las Vegas, NV. Detail-focused, Clark County local. Call (702) 444-5077.',
  alternates: {
    canonical: `${SITE.url}/builders/toll-brothers-post-construction-cleaning`,
  },
  openGraph: {
    title: 'Toll Brothers Post-Construction Cleaning Las Vegas | Final Touch',
    description:
      'Post-construction cleanup after your Toll Brothers home handoff in Las Vegas, NV. Detail-focused, Clark County local. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/builders/toll-brothers-post-construction-cleaning`,
  },
};

const faq = [
  {
    q: 'What does post-construction cleaning include after a Toll Brothers home?',
    a: 'After a Toll Brothers handoff, post-construction cleanup addresses the residue that builder cleaning does not remove: drywall dust on every surface including vents, HVAC returns, and cabinet interiors; adhesive and caulk residue around fixtures and tile; window film on all glass; construction debris from trim and baseboard work; and fine particulate that settles in corners and on sills. Scope is confirmed during a walkthrough before the clean begins.',
  },
  {
    q: 'Do Toll Brothers homes in Las Vegas need post-construction cleaning before move-in?',
    a: "Toll Brothers homes are built to a premium standard, but builder cleaning is not the same as a professional post-construction detail clean. Construction dust and adhesive residue are present in every new build regardless of the builder's quality tier. Most buyers schedule a professional post-construction clean between the final walkthrough and move-in day.",
  },
  {
    q: 'How do I schedule post-construction cleaning after a Toll Brothers handoff in Las Vegas?',
    a: `Call ${SITE.phone.display} or request a free quote online. For post-construction jobs, a walkthrough of the property is the best way to scope accurately. Final Touch confirms the debris type, access timeline, and schedule before quoting. The goal is to align the clean with your move-in date.`,
  },
  {
    q: 'Is post-construction cleaning the same as move-in cleaning for a new Toll Brothers home?',
    a: 'They address related but different needs. Post-construction cleaning focuses on construction residue: dust, adhesive, compound, window film, and debris from the build process. Move-in cleaning prepares a space that is construction-complete for occupancy. On a new Toll Brothers home, both are often needed in sequence or combined into one scope.',
  },
  {
    q: 'What Las Vegas Valley communities does Final Touch serve for Toll Brothers post-construction cleaning?',
    a: `Final Touch serves post-construction cleanup across Clark County, Nevada, including Las Vegas, Henderson, and North Las Vegas. Toll Brothers builds in several master-planned communities throughout the Las Vegas Valley. Call ${SITE.phone.display} to confirm coverage for your specific community and address.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Toll Brothers Post-Construction Cleanup',
  serviceType: 'Post-Construction Cleaning',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone.href.replace('tel:', ''),
    email: SITE.email.display,
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: `${SITE.serviceArea.county}, ${SITE.serviceArea.stateAbbr}` },
    ...SITE.serviceArea.cities.map((name) => ({
      '@type': 'City',
      name: `${name}, ${SITE.serviceArea.stateAbbr}`,
    })),
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

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Builders', item: `${SITE.url}/builders` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Toll Brothers Post-Construction Cleaning',
      item: `${SITE.url}/builders/toll-brothers-post-construction-cleaning`,
    },
  ],
};

export default function TollBrothersPostConstructionPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
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
        eyebrow="Toll Brothers · Post-Construction Cleaning"
        heading="Toll Brothers Post-Construction Cleanup | Las Vegas, NV"
        sub={`Final Touch provides post-construction cleanup for Toll Brothers homebuyers and project teams across Clark County, Nevada. From drywall dust on every surface to adhesive residue around fixtures, we handle the detail work your builder's cleaning crew is not scoped to do. Call ${SITE.phone.display} or request a free quote to schedule around your handoff date.`}
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
            for Toll Brothers homes across Las Vegas, Henderson, and North Las Vegas. After a
            builder handoff, every surface holds construction residue that standard cleaning
            cannot address: drywall dust in vents and cabinet interiors, adhesive and caulk
            around fixtures, window film on every pane of glass, and fine particulate in every
            corner. We scope the clean against the actual site before quoting. The goal is a
            space that is genuinely ready to move into, not just visually checked.
          </p>
        </div>
      </section>

      {/* 3. What builder handoffs typically include */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeader
            eyebrow="Builder handoffs"
            heading="What a new-home handoff typically includes and where residue remains."
            sub="General overview based on how new residential construction works. No builder-specific claims."
          />
          <div className="mt-10 space-y-6 text-base text-brand-black leading-relaxed">
            <p>
              Most builders complete a cosmetic clean before the final walkthrough: surface wipe-downs,
              a vacuum pass on floors, and glass cleaned in common areas. This is standard practice
              across the industry and prepares the home for the walk without addressing construction
              residue at the detail level.
            </p>
            <p>
              What remains after a builder clean is consistent regardless of the builder&apos;s quality tier.
              Drywall dust is ultrafine and airborne during construction; it settles into HVAC registers,
              inside cabinet interiors, on top of door frames, and on every horizontal surface. Adhesive
              and caulk residue collect around tile edges, fixtures, and trim. Window film is applied
              during construction to protect glass and must be removed before occupancy. Fine grit from
              cutting and sanding settles on floors and baseboards throughout the home.
            </p>
            <p>
              A professional post-construction clean addresses this layer of residue that a cosmetic
              builder clean is not intended to cover. The scope is confirmed on-site before the clean
              begins so nothing is assumed.
            </p>
          </div>
        </div>
      </section>

      {/* 4. What post-construction cleanup adds */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeader
            eyebrow="Scope"
            heading="What post-construction cleanup covers."
            sub="Scope drawn from our post-construction service. Confirmed on-site before the clean begins."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Construction dust and fine grit',
                body: 'All surfaces: floors, countertops, windowsills, shelving, door frames, and cabinet interiors. Multiple passes where the build left heavy residue.',
              },
              {
                title: 'HVAC vents and registers',
                body: 'Drywall dust settles into every register during a build. We address vents and registers throughout the home so the dust does not re-circulate after move-in.',
              },
              {
                title: 'Adhesive and caulk residue',
                body: 'Around tile edges, fixture bases, trim, and baseboards. Residue from construction adhesive and caulk requires targeted removal, not standard wiping.',
              },
              {
                title: 'Window film and glass cleaning',
                body: 'Protective film applied during construction is removed and all glass surfaces are cleaned throughout the home.',
              },
              {
                title: 'Paint overspray',
                body: 'Light paint overspray on fixtures, hardware, and surfaces adjacent to painted areas is addressed during the detail pass.',
              },
              {
                title: 'Floor surfaces',
                body: 'Hard floors cleaned and scrubbed. Carpet areas vacuumed and spot-checked. Transitions and edges addressed where grit collects.',
              },
            ].map((item) => (
              <li
                key={item.title}
                className="rounded-[14px] border border-border-subtle bg-light-gray p-6"
              >
                <h3 className="font-display text-lg font-semibold text-brand-black">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Who hires this service */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeader
            eyebrow="Who we serve"
            heading="Who schedules post-construction cleaning after a Toll Brothers build."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              {
                title: 'New homebuyers',
                body: 'Taking possession of a new Toll Brothers home and scheduling a professional clean between the final walkthrough and move-in day. A genuine detail clean, not a cosmetic touch-up.',
              },
              {
                title: 'Builder project teams',
                body: 'Superintendents and project coordinators finishing a punch list who need a reliable cleaning vendor before the client walkthrough or occupancy sign-off.',
              },
              {
                title: 'Real estate professionals',
                body: 'Agents and buyer representatives guiding clients through new home purchases who recommend a professional post-construction clean as part of the closing process.',
              },
            ].map((item) => (
              <li
                key={item.title}
                className="rounded-[14px] border border-border-subtle bg-brand-white p-6"
              >
                <h3 className="font-display text-lg font-semibold text-brand-black">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Service area and back-links */}
      <section className="bg-brand-white border-y border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <SectionHeader
            eyebrow="Service area"
            heading="Post-construction cleanup across Clark County."
            sub="Final Touch serves Toll Brothers communities throughout the Las Vegas Valley."
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
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <FAQSection items={faq} />

      {/* 8. Final CTA */}
      <CTASection
        heading="Ready to schedule your Toll Brothers post-construction clean?"
        sub={`Call ${SITE.phone.display} or request a free quote online. Final Touch walks through the job before quoting so the estimate reflects the actual scope. ${SITE.owners} and the team serve Clark County, Nevada.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
