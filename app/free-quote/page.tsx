import type { Metadata } from 'next';
import HeroSection from '@/components/shared/HeroSection';
import FAQSection from '@/components/shared/FAQSection';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import SectionHeader from '@/components/shared/SectionHeader';
import { CTAS, SITE } from '@/lib/constants/site';

export const metadata: Metadata = {
  title: 'Free Quote',
  description: `Request a free cleaning quote from ${SITE.name}. Family-owned, serving ${SITE.serviceArea.county}, ${SITE.serviceArea.state}. No pressure — just a real number after a quick walkthrough.`,
  alternates: { canonical: '/free-quote' },
};

const faq = [
  {
    q: 'Is the quote really free?',
    a: 'Yes. Quotes are free and there\'s no pressure to book.',
  },
  {
    q: 'How do you put together a quote?',
    a: 'We start with a short walkthrough — phone or on-site, depending on the job. After the walkthrough you get a real number based on your space, your scope, and your timing.',
  },
  {
    q: 'How fast will I hear back?',
    a: `We answer the phone and respond to email and form requests when our team is available. Call ${SITE.phone.display} if you need to reach someone directly.`,
  },
  {
    q: 'What information should I include in the request?',
    a: 'The type of space (home, office, retail, post-construction), rough square footage, the city or neighborhood, and your timing. If you don\'t know all of it, that\'s fine — we\'ll cover the rest on the walkthrough.',
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

export default function FreeQuotePage() {
  return (
    <>
      <HeroSection
        eyebrow="Free quote"
        heading="Tell us about your space."
        sub={`We'll set up a short walkthrough and put a real number on the job — not a templated rate. Free, no pressure. Or call ${SITE.phone.display} to talk now.`}
        primaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        secondaryCta={{ label: 'Email us', href: SITE.email.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="What you get"
            heading="A real number, not a templated rate."
          />
          <ul className="mt-8 space-y-3.5 text-base sm:text-lg text-brand-black">
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-brand-blue mt-1">•</span>
              <span>A short walkthrough — phone or on-site, whichever fits the job.</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-brand-blue mt-1">•</span>
              <span>A real quote for the work, not a &ldquo;starting at&rdquo; rate.</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-brand-blue mt-1">•</span>
              <span>Honest pricing — no surprise add-ons, no upsell at the end.</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-brand-blue mt-1">•</span>
              <span>No pressure to book. We&apos;d rather earn the job than push you into it.</span>
            </li>
          </ul>
          <p className="mt-8 text-sm text-muted">
            Prefer to talk it through? Call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold tabular-nums hover:underline"
            >
              {SITE.phone.display}
            </a>{' '}
            or email{' '}
            <a
              href={SITE.email.href}
              className="text-brand-blue font-semibold break-all hover:underline"
            >
              {SITE.email.display}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeader
            eyebrow="How the quote process works"
            heading="Three steps to a real number."
          />
          <ol className="mt-8 space-y-5">
            {[
              {
                step: '01',
                title: 'Send the request',
                body: 'Fill the form, call, or email. Tell us the type of space, the city, and rough timing.',
              },
              {
                step: '02',
                title: 'Walkthrough',
                body: 'A short conversation about the space — phone or on-site, whichever fits the job.',
              },
              {
                step: '03',
                title: 'Real quote',
                body: 'You get a real number for the work. No pressure to book.',
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

      <FAQSection items={faq} heading="Common questions about quotes" defaultOpenFirst />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
