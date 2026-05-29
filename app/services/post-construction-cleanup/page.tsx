import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceCard from '@/components/shared/ServiceCard';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES, SERVICES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'Post-Construction Cleanup in Las Vegas, NV | Final Touch',
  description:
    'Post-construction cleaning for new builds and renovations across Las Vegas and Clark County, NV. Detail-focused. Free walkthrough quotes. Call (702) 444-5077.',
  alternates: { canonical: '/services/post-construction-cleanup' },
  openGraph: {
    title: 'Post-Construction Cleanup in Las Vegas, NV | Final Touch Cleaning',
    description:
      'Final-touch detail cleans after new builds and renovations across Clark County, NV. Residential and commercial. Free quotes. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/services/post-construction-cleanup`,
  },
};

const faq = [
  {
    q: 'What does post-construction cleanup include?',
    a: 'Post-construction cleanup covers the removal of construction dust, fine grit, and debris from all surfaces: floors, countertops, windowsills, cabinets, fixtures, vents, and glass. We address compound residue, paint overspray, adhesive, and the fine particulate that lands everywhere during a build or renovation. The exact scope is confirmed during a walkthrough of the site.',
  },
  {
    q: 'Who hires post-construction cleaning in Las Vegas?',
    a: 'General contractors, builders, homeowners taking possession of a new build, and property owners finishing a renovation. Post-construction cleanup is often the last step before a client walkthrough, occupancy, or a new tenant move-in. We work with both residential and commercial construction sites across Clark County.',
  },
  {
    q: 'How is post-construction cleanup different from a standard clean?',
    a: 'Post-construction cleanup is more intensive than a routine clean. The scope includes construction dust and fine debris that a standard crew is not scoped or equipped to handle. It typically requires multiple passes on surfaces, attention to vents and windows, and the right materials to address compound and residue.',
  },
  {
    q: 'How soon after construction can you clean the site?',
    a: `Once the construction work is complete and the site is safe to access, we can schedule the cleanup. We recommend scheduling in advance so the clean aligns with your handoff or move-in date. Call ${SITE.phone.display} to discuss timing for your specific project.`,
  },
  {
    q: 'Do you handle post-construction cleanup for commercial builds?',
    a: 'Yes. We handle post-construction cleanup for both residential and commercial construction sites across Clark County, Nevada, including Las Vegas, Henderson, North Las Vegas, and Boulder City.',
  },
  {
    q: 'What is the difference between post-construction cleanup and move-in cleaning?',
    a: 'Post-construction cleanup addresses the residue, dust, and debris left by construction work. Move-in cleaning prepares a space that is already construction-complete but has not been lived in yet. Sometimes both are needed in sequence. We can scope and schedule both together.',
  },
  {
    q: 'How do I get a post-construction cleaning quote in Las Vegas?',
    a: `Call ${SITE.phone.display} or request a free quote online. For post-construction jobs, a site walkthrough is the best way to scope accurately. We confirm scope, debris type, and timeline before quoting.`,
  },
];

const current = SERVICES.find((s) => s.slug === 'post-construction-cleanup')!;
const siblings = SERVICES.filter((s) => s.slug !== 'post-construction-cleanup');

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Post-Construction Cleanup',
  serviceType: 'Post-Construction Cleaning',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone.href.replace('tel:', ''),
    email: SITE.email.display,
  },
  areaServed: [SITE.serviceArea.county, ...SITE.serviceArea.cities].map(
    (name) => ({ '@type': 'City', name: `${name}, ${SITE.serviceArea.stateAbbr}` })
  ),
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
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Post-Construction Cleanup',
      item: `${SITE.url}/services/post-construction-cleanup`,
    },
  ],
};

export default function PostConstructionCleanupPage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection
        eyebrow="Post-Construction Cleanup"
        heading="Post-Construction Cleanup in Las Vegas, NV"
        sub={`Detail cleans for new builds and renovations across ${SITE.serviceArea.county}. We handle the dust, residue, and fine debris that construction leaves behind.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={current.image}
      />

      {/* 2. Quick Answer */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue font-body">
            What it is
          </p>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black">
            Post-construction cleaning in Las Vegas, NV
          </h2>
          <p className="mt-5 text-base sm:text-lg text-brand-black leading-relaxed">
            Final Touch provides post-construction cleanup for residential and commercial sites
            across {SITE.serviceArea.county}, Nevada. Construction and renovation leave fine dust,
            compound residue, adhesive, and debris on every surface, including areas that look
            clean until you look closely. Our post-construction clean addresses what a standard
            crew is not scoped to handle, so your space is ready for occupancy, handoff, or
            client walkthrough. Call{' '}
            <a href={SITE.phone.href} className="text-brand-blue font-semibold hover:underline tabular-nums">
              {SITE.phone.display}
            </a>{' '}
            or{' '}
            <Link href={ROUTES.freeQuote} className="text-brand-blue font-semibold hover:underline">
              request a free quote
            </Link>{' '}
            to schedule your site walkthrough.
          </p>
        </div>
      </section>

      {/* 3. Who this is for */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who we serve"
            heading="Contractors, builders, and property owners across Clark County."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                title: 'General contractors',
                body: 'The final clean before your client walkthrough or handoff. A professional finish is the last impression you leave on every project.',
              },
              {
                title: 'Builders and developers',
                body: 'New construction sites across Clark County cleaned before occupancy or sale. Residential and commercial both.',
              },
              {
                title: 'Homeowners',
                body: 'Moving into a new build or finishing a renovation? Post-construction cleanup makes the space actually ready to live in.',
              },
              {
                title: 'Commercial property owners',
                body: 'Office buildouts, retail fitouts, and commercial renovation projects cleaned to an occupancy-ready standard.',
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

      {/* 4. What's included */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Scope"
            heading="What post-construction cleanup covers."
            sub="Scope is confirmed during your site walkthrough. The list below reflects what a thorough post-construction clean addresses."
          />
          <ul className="mt-8 space-y-3">
            {[
              'Construction dust from all surfaces: floors, counters, shelves, fixtures',
              'Fine particulate on vents, grilles, and air returns',
              'Compound residue and paint overspray on walls and trim',
              'Adhesive and tape residue from surfaces and glass',
              'Windows and glass: construction film and compound removal',
              'Cabinet interiors and drawer tracks',
              'Baseboards, window sills, and ledges',
              'Hard floor care: sweeping, vacuuming, and mopping',
              'Bathroom fixtures and tiles',
              'Final finishing pass on all visible surfaces',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Post-construction scope varies by project type and size. A site walkthrough lets us
            scope accurately before quoting.
          </p>
        </div>
      </section>

      {/* 5. Why Final Touch */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why Final Touch"
            heading="Detail-focused from the first pass to the last."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-3 lg:gap-6">
            {[
              {
                title: 'Built for post-construction conditions',
                body: 'Fine construction dust, compound, and residue require a different approach than a standard clean. We scope to what the job actually needs.',
              },
              {
                title: 'Finishing details are our standard',
                body: 'Vents, glass edges, cabinet interiors, and baseboards are on our checklist, not afterthoughts. The final ten percent of a clean is what makes a space feel done.',
              },
              {
                title: 'Local and family-owned',
                body: `${SITE.owners} run Final Touch from Southern Nevada. We serve contractors and homeowners across Clark County and are available to discuss your project directly.`,
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

      {/* 6. Process */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader eyebrow="How it works" heading="From construction complete to move-in ready." />
          <ol className="mt-10 space-y-8">
            {[
              {
                n: '01',
                title: 'Tell us about your project',
                body: `Call ${SITE.phone.display} or request a quote online. Let us know the project type, size, and your target handoff or occupancy date.`,
              },
              {
                n: '02',
                title: 'Site walkthrough',
                body: 'We visit the site to assess debris type, surface conditions, and any specific scope requirements before quoting.',
              },
              {
                n: '03',
                title: 'Scope and timeline confirmed',
                body: 'We give you a real quote based on the actual site, with a timeline that fits your handoff or move-in schedule.',
              },
              {
                n: '04',
                title: 'Post-construction clean',
                body: 'We work through the site systematically: dust, debris, residue, glass, vents, and the finishing pass that makes the space occupancy-ready.',
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-6">
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-soft-blue text-brand-blue font-semibold text-sm font-body"
                >
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-brand-black">{step.title}</h3>
                  <p className="mt-1.5 text-base text-muted leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. Service areas */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Service area"
            heading="Post-construction cleanup across Clark County."
            sub={`We serve construction sites throughout ${SITE.serviceArea.county}, Nevada, including active development areas across Las Vegas, Henderson, and North Las Vegas.`}
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {[
              { name: 'Las Vegas, NV', href: '/services/post-construction-cleanup/las-vegas' },
              { name: 'Henderson, NV', href: '/services/post-construction-cleanup/henderson' },
              { name: 'North Las Vegas, NV', href: '/services/post-construction-cleanup/north-las-vegas' },
              { name: 'Boulder City, NV', href: '/services/post-construction-cleanup/boulder-city' },
              { name: 'Clark County, NV', href: '/services/post-construction-cleanup/clark-county' },
            ].map((city) => (
              <li key={city.name}>
                <Link
                  href={city.href}
                  className="inline-block rounded-full border border-border-subtle bg-brand-white min-h-[44px] px-4 py-2 text-sm font-semibold text-brand-black hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
                >
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. Related services */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Other services"
            heading="More cleaning services from Final Touch."
            sub={`Seven core cleaning services across ${SITE.serviceArea.county}.`}
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {siblings.map((s) => (
              <li key={s.slug} className="h-full">
                <ServiceCard href={s.href} name={s.name} description={s.shortDescription} image={s.image} />
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm">
            <Link href={ROUTES.services} className="font-semibold text-brand-blue hover:underline">
              View all cleaning services →
            </Link>
          </p>
        </div>
      </section>

      {/* 9. FAQ */}
      <FAQSection
        heading="Post-construction cleanup questions"
        items={faq}
        defaultOpenFirst
      />

      {/* 10. Final CTA */}
      <CTASection
        heading="Ready to schedule your post-construction clean?"
        sub={`Free site walkthrough quotes across ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a request and we will get back to you.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

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
    </>
  );
}
