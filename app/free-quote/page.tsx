import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import FAQSection from '@/components/shared/FAQSection';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import SectionHeader from '@/components/shared/SectionHeader';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'Request a Free Cleaning Quote | Final Touch | Las Vegas, NV',
  description:
    'Get a free cleaning estimate from Final Touch Cleaning Company. Serving Las Vegas, Henderson, and Clark County, NV. No pressure. Call (702) 444-5077.',
  alternates: { canonical: '/free-quote' },
  openGraph: {
    title: 'Free Cleaning Quote | Final Touch Cleaning Company',
    description:
      'Family-owned cleaning company serving Clark County, NV. Tell us about your space and get a real quote after a short walkthrough. No templated rates.',
    type: 'website',
    url: `${SITE.url}/free-quote`,
  },
};

const faq = [
  {
    q: 'How do I request a cleaning quote?',
    a: `Send the form above, call ${SITE.phone.display}, or email ${SITE.email.display}. Tell us the type of space, the city, and rough timing. We will set up a short walkthrough and give you a real number.`,
  },
  {
    q: 'Is the quote really free?',
    a: 'Yes. Quotes are free and there is no pressure to book.',
  },
  {
    q: 'What should I include in a quote request?',
    a: `Space type (home, office, retail, post-construction), rough square footage, the city or neighborhood within ${SITE.serviceArea.county}, your timing, and anything specific to the space (pets, post-construction dust, hard-water buildup, access notes). None of it is required. We will cover the rest on the walkthrough.`,
  },
  {
    q: 'How do you put together a quote?',
    a: 'We start with a short walkthrough, phone or on-site depending on the job. After the walkthrough you get a real number based on your space, your scope, and your timing.',
  },
  {
    q: 'Do you provide pricing online?',
    a: 'No. Pricing depends on the space, the scope, and the timing. We give you a real number after a short walkthrough rather than a one-size-fits-all rate that changes when we arrive.',
  },
  {
    q: 'What if I am not sure which cleaning service I need?',
    a: "That is what the walkthrough is for. Tell us what triggered the request: moving in, finishing a build, opening a store, resetting a space. We will match it to the right service.",
  },
  {
    q: 'How fast will I hear back?',
    a: `Call ${SITE.phone.display} or email ${SITE.email.display} for the fastest response. Our online quote form is being wired to our scheduling system right now. Once it is live, form submissions will reach us directly. Until then, phone and email are the reliable channels.`,
  },
  {
    q: 'Can I call instead of using the form?',
    a: `Yes. Calling ${SITE.phone.display} is often the fastest way to reach us. The phone is answered by ${SITE.owners} or someone on the team.`,
  },
  {
    q: 'Are the online forms active yet?',
    a: `Our online quote form is in setup right now. For the fastest response, call ${SITE.phone.display} or email ${SITE.email.display}. We are wiring the form to our scheduling system shortly.`,
  },
  {
    q: 'Do you serve Las Vegas, Henderson, North Las Vegas, Boulder City, and Clark County?',
    a: `Yes. Final Touch serves all of ${SITE.serviceArea.county}, ${SITE.serviceArea.state}, including ${SITE.serviceArea.cities.join(', ')}.`,
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
        eyebrow="Free cleaning estimate"
        heading="Request a free quote for cleaning services in Las Vegas and Clark County."
        sub={`Tell us about your space and we will set up a short walkthrough. You get a real number based on the actual job, not a templated rate. Free, no pressure. Or call ${SITE.phone.display} to talk now.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/heroes/free-cleaning-quote-las-vegas-hero.webp',
          alt: 'Request a free cleaning quote from Final Touch in Las Vegas, NV.',
        }}
      />

      {/* What to include */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeader
            eyebrow="What to include"
            heading="A few details help us prep a real quote."
            sub="None of this is required. We will cover anything missing on the walkthrough. But the more you can share up front, the faster we can get you a number."
          />
          <ul className="mt-8 space-y-3.5 text-base sm:text-lg text-brand-black">
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-brand-blue mt-1">•</span>
              <span>
                <strong className="font-semibold">Space type:</strong>{' '}
                home, office, retail, post-construction, vacation rental, or other.
                Not sure which category fits?{' '}
                <Link href={ROUTES.services} className="text-brand-blue font-semibold hover:underline">
                  See our cleaning services
                </Link>
                .
              </span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-brand-blue mt-1">•</span>
              <span>
                <strong className="font-semibold">Rough size:</strong>{' '}
                square footage or number of bedrooms and bathrooms is enough.
              </span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-brand-blue mt-1">•</span>
              <span>
                <strong className="font-semibold">City or neighborhood</strong>{' '}
                anywhere in{' '}
                <Link href={ROUTES.locations} className="text-brand-blue font-semibold hover:underline">
                  {SITE.serviceArea.county}
                </Link>
                : {SITE.serviceArea.cities.join(', ')}.
              </span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-brand-blue mt-1">•</span>
              <span>
                <strong className="font-semibold">Timing:</strong>{' '}
                one-time, recurring, or tied to a move-in or move-out date.
              </span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-brand-blue mt-1">•</span>
              <span>
                <strong className="font-semibold">Anything specific:</strong>{' '}
                pets, post-construction dust, hard-water buildup, the corners you want extra attention on.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeader
            eyebrow="What you get"
            heading="A real number, not a templated rate."
          />
          <ul className="mt-8 space-y-3.5 text-base sm:text-lg text-brand-black">
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-brand-blue mt-1">•</span>
              <span>A short walkthrough: phone or on-site, whichever fits the job.</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-brand-blue mt-1">•</span>
              <span>A real quote for the work, not a &ldquo;starting at&rdquo; rate.</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-brand-blue mt-1">•</span>
              <span>Honest pricing: no surprise add-ons, no upsell at the end.</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-brand-blue mt-1">•</span>
              <span>No pressure to book. We would rather earn the job than push you into it.</span>
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

      {/* How the quote process works */}
      <section className="bg-brand-white">
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
                body: 'A short conversation about the space, phone or on-site, whichever fits the job.',
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

      {/* /faq link - surfaces the full FAQ hub */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-sm text-muted">
            More questions?{' '}
            <Link href={ROUTES.faq} className="font-semibold text-brand-blue hover:underline">
              Read all frequently asked questions →
            </Link>
          </p>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
