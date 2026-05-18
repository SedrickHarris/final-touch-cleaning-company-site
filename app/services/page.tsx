import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import SectionHeader from '@/components/shared/SectionHeader';
import ServicesPreview from '@/components/shared/ServicesPreview';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES, SERVICES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'Cleaning Services',
  description: `Final Touch offers seven cleaning services across ${SITE.serviceArea.county}, NV: commercial & office, janitorial, post-construction, move-in, move-out, deep cleaning, and retail space cleaning. Free quotes. Call ${SITE.phone.display}.`,
  alternates: { canonical: '/services' },
};

const faq = [
  {
    q: 'What cleaning services does Final Touch Cleaning Company offer?',
    a: 'Seven core services: commercial and office cleaning, janitorial routes, post-construction cleanup, move-in cleaning, move-out cleaning, deep cleaning, and retail space cleaning.',
  },
  {
    q: 'Do you provide both residential and commercial cleaning?',
    a: 'Yes, both. Homes, offices, retail, post-construction sites, and ongoing janitorial routes are all part of our seven core services.',
  },
  {
    q: 'How do I choose between move-in cleaning and deep cleaning?',
    a: 'Move-in cleaning prepares a space for someone to settle in: top-to-bottom before the boxes arrive. Deep cleaning is for periodic resets in a space you already live in or operate from. Both reach the corners standard service skips. The difference is timing and intent.',
  },
  {
    q: 'Does Final Touch offer post-construction cleanup?',
    a: 'Yes. Post-construction cleanup is one of our seven core services. We handle the dust, residue, and fine grit that lands on every surface after a build or renovation.',
  },
  {
    q: 'Does Final Touch offer commercial office cleaning?',
    a: 'Yes. We clean offices and commercial interiors across Clark County, both as one-time jobs and as ongoing janitorial routes.',
  },
  {
    q: 'Does Final Touch offer janitorial services?',
    a: 'Yes. We schedule ongoing janitorial routes for offices, retail, and commercial operations. The rhythm and scope are tailored to your space during the walkthrough.',
  },
  {
    q: 'Does Final Touch offer retail space cleaning?',
    a: 'Yes. Retail space cleaning is one of our seven core services. Customer-ready cleans for storefronts, showrooms, and retail interiors.',
  },
  {
    q: 'Do you offer one-time cleans or only ongoing service?',
    a: 'Both. One-time jobs (move-in, move-out, post-construction, deep cleaning) and ongoing janitorial routes for offices, retail, and commercial spaces. Tell us about your space and we\'ll suggest the right fit.',
  },
  {
    q: 'What should I do if I am not sure which service I need?',
    a: 'Tell us what triggered the request: moving in, finishing a build, opening a store, resetting a space, keeping an office tidy week to week. We\'ll match it to the right service on the walkthrough. No charge for that conversation.',
  },
  {
    q: 'Where do you work?',
    a: `We serve ${SITE.serviceArea.county}, ${SITE.serviceArea.state}, including ${SITE.serviceArea.cities.join(', ')}.`,
  },
];

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

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        eyebrow="Services"
        heading="Seven services. One standard."
        sub={`Final Touch covers seven core cleaning services across ${SITE.serviceArea.county}, Nevada. From a single deep clean to ongoing janitorial routes, every job ends with the same finishing checklist: baseboards, vents, switch plates, edges, and corners.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
      />

      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="What we do"
            heading="The seven services we cover."
            sub="Each service has its own scope and rhythm, but the finishing standard is the same. Pick a service to see what's included, or jump straight to a free quote."
          />

          <ServicesPreview services={SERVICES} />

          {/* TODO-BATCH-3: Per-service pages at /services/<slug> are not yet
              built. Cards above link to those routes. They will 404 until
              Batch 3 ships. */}
          <p className="mt-12 text-sm text-muted">
            Need help choosing? Call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold tabular-nums hover:underline"
            >
              {SITE.phone.display}
            </a>{' '}
            or{' '}
            <a
              href={SITE.email.href}
              className="text-brand-blue font-semibold break-all hover:underline"
            >
              {SITE.email.display}
            </a>{' '}
            and we&apos;ll talk you through it.
          </p>
        </div>
      </section>

      {/* Choose by need */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeader
            eyebrow="How to pick"
            heading="Choose by the moment, not the menu."
          />
          <div className="mt-8 space-y-5 text-base sm:text-lg text-brand-black leading-relaxed">
            <p>
              <strong className="font-semibold">Moving in or out?</strong>{' '}
              Move-in and move-out cleaning are built around the timing of new
              keys and deposit walkthroughs.
            </p>
            <p>
              <strong className="font-semibold">Finishing a build?</strong>{' '}
              Post-construction cleanup handles dust, residue, and the layer of
              fine grit that lands on every surface after construction.
            </p>
            <p>
              <strong className="font-semibold">Running an office or retail
              space?</strong>{' '}
              Commercial, janitorial, and retail-space cleaning are scheduled
              programs that keep the space ready for customers and staff.
            </p>
            <p>
              <strong className="font-semibold">Just need a reset?</strong>{' '}
              Deep cleaning is for the corners standard service skips. A
              periodic top-to-bottom that takes a space back to baseline.
            </p>
          </div>
        </div>
      </section>

      {/* Cleaning by location */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="rounded-[14px] border border-border-subtle bg-soft-blue/40 p-6 sm:p-8">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
              Working in a specific city?
            </p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black">
              Cleaning across all of {SITE.serviceArea.county}.
            </h2>
            <p className="mt-3 text-base text-brand-black leading-relaxed">
              Final Touch serves {SITE.serviceArea.cities.join(', ')}: every
              part of {SITE.serviceArea.county}. Same team, same finishing
              standard, no matter where the job is.
            </p>
            <p className="mt-5 text-sm">
              <Link
                href={ROUTES.locations}
                className="font-semibold text-brand-blue hover:underline"
              >
                View service area →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <FAQSection items={faq} heading="Common questions about our services" defaultOpenFirst />

      <CTASection
        heading="Tell us about your space."
        sub={`Free quotes across ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.estimate, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
