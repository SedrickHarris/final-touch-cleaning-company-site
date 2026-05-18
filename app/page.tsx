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

// Batch 1 homepage placeholder.
// Full Tier-2/Tier-3 homepage content lives in Batch 2. Anything that would
// require unverified business data (reviews, ratings, license numbers,
// insurance details, years in business, certifications, awards, pricing
// guarantees) is intentionally omitted here.
// See: docs/site-os/no-fake-data-policy.md and
// docs/site-os/final-touch-build-context.md § "Do Not Invent".
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

  const faq = [
    {
      q: 'What areas do you serve?',
      a: `We serve ${SITE.serviceArea.county}, ${SITE.serviceArea.state} — including ${SITE.serviceArea.cities.join(', ')}.`,
    },
    {
      q: 'What types of cleaning do you offer?',
      a: 'Commercial and office, janitorial, post-construction cleanup, move-in, move-out, deep cleaning, and retail space cleaning. Each service is tailored to the space and timeline.',
    },
    {
      q: 'How do I get a quote?',
      a: `Call ${SITE.phone.display} or email ${SITE.email.display} and we'll set up a walkthrough. Quotes are free and there's no pressure to book.`,
    },
    {
      q: 'Who runs Final Touch?',
      a: `${SITE.owners} own and run Final Touch. It's a family-run operation, not a franchise.`,
    },
  ];

  const heroSub = `Family-owned cleaning for homes, offices, and new builds across ${SITE.serviceArea.cities.slice(0, 3).join(', ')}, and ${SITE.serviceArea.cities[3]}. We finish what other crews skip — baseboards, vents, switch plates, and the details that change how a space feels.`;

  return (
    <>
      <HeroSection
        eyebrow={`Cleaning · ${SITE.serviceArea.county}`}
        heading={SITE.coreMessage}
        emphasis="details"
        sub={heroSub}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{
          label: `${CTAS.call} · ${SITE.phone.display}`,
          href: SITE.phone.href,
        }}
        formSlot={<QuoteFormPlaceholder />}
      />

      <TrustBar items={trustItems} />

      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="What we do"
            heading="Seven services. One standard."
            sub="From a single deep clean to ongoing janitorial routes, every job ends with the same checklist — the details that make a space feel finished."
          />

          <ServicesPreview services={SERVICES} />

          <p className="mt-10 text-sm">
            <Link
              href={ROUTES.services}
              className="font-semibold text-brand-blue hover:underline"
            >
              View all services →
            </Link>
          </p>
        </div>
      </section>

      <FAQSection items={faq} defaultOpenFirst />

      <CTASection
        heading="Ready to bring the small details to your space?"
        sub={`Free quotes for cleaning across ${SITE.serviceArea.county}.`}
        primaryCta={{ label: CTAS.estimate, href: ROUTES.freeQuote }}
        secondaryCta={{
          label: `${CTAS.call} · ${SITE.phone.display}`,
          href: SITE.phone.href,
        }}
        tone="blue"
      />
    </>
  );
}
