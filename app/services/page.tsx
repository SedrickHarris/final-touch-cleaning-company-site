import type { Metadata } from 'next';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import SectionHeader from '@/components/shared/SectionHeader';
import ServicesPreview from '@/components/shared/ServicesPreview';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES, SERVICES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'Cleaning Services',
  description: `Final Touch offers seven cleaning services across ${SITE.serviceArea.county}, NV: commercial & office, janitorial, post-construction, move-in, move-out, deep cleaning, and retail space cleaning. Free quotes — call ${SITE.phone.display}.`,
  alternates: { canonical: '/services' },
};

const faq = [
  {
    q: 'How do I choose between move-in cleaning and deep cleaning?',
    a: 'Move-in cleaning prepares a space for someone to settle in — top-to-bottom before the boxes arrive. Deep cleaning is for periodic resets in a space you already live in or operate from. Both reach the corners standard service skips; the difference is timing and intent.',
  },
  {
    q: 'Do you offer one-time cleans or only ongoing service?',
    a: 'Both. We do one-time jobs (move-in, move-out, post-construction, deep cleaning) and ongoing janitorial routes for offices, retail, and commercial spaces. Tell us about your space and we\'ll suggest the right fit.',
  },
  {
    q: 'What kinds of businesses hire Final Touch?',
    a: 'Offices, retail stores, post-construction sites, property managers, and small commercial operations. We tailor the scope and schedule to each space.',
  },
  {
    q: 'Where do you work?',
    a: `We serve ${SITE.serviceArea.county}, ${SITE.serviceArea.state} — including ${SITE.serviceArea.cities.join(', ')}.`,
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
        sub={`Final Touch covers seven core cleaning services across ${SITE.serviceArea.county}, Nevada — from a single deep clean to ongoing janitorial routes. Every job ends with the same finishing checklist.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
      />

      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="What we do"
            heading="The seven services we cover."
            sub="Each service has its own scope and rhythm, but the finishing standard is the same: baseboards, vents, switch plates, edges, and corners. The details that make a space feel done."
          />

          <ServicesPreview services={SERVICES} />

          {/* TODO-BATCH-3: Per-service pages at /services/<slug> are not yet
              built. Cards above link to those routes — they will 404 until
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

      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeader
            eyebrow="How to pick"
            heading="Choose by the moment, not the menu."
          />
          <div className="mt-8 space-y-5 text-base sm:text-lg text-brand-black leading-relaxed">
            <p>
              <strong className="font-semibold">Moving in or out?</strong> Move-in
              and move-out cleaning are built around the timing of new keys and
              walkthroughs.
            </p>
            <p>
              <strong className="font-semibold">Finishing a build?</strong>{' '}
              Post-construction cleanup handles dust, residue, and the layer of
              fine grit that lands on every surface after construction.
            </p>
            <p>
              <strong className="font-semibold">Running an office or retail
              space?</strong> Commercial, janitorial, and retail-space cleaning are
              scheduled programs that keep the space ready for customers and staff.
            </p>
            <p>
              <strong className="font-semibold">Just need a reset?</strong> Deep
              cleaning is for the corners standard service skips — a periodic
              top-to-bottom that takes a space back to baseline.
            </p>
          </div>
        </div>
      </section>

      <FAQSection items={faq} heading="Common questions about our services" defaultOpenFirst />

      <CTASection
        heading="Tell us about your space."
        sub={`Free quotes across ${SITE.serviceArea.county}.`}
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
