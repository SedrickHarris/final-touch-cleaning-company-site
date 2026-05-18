import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import FAQSection from '@/components/shared/FAQSection';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import SectionHeader from '@/components/shared/SectionHeader';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'Contact Final Touch Cleaning Company | Las Vegas, NV',
  description:
    'Call (702) 444-5077, email info@finaltouchcleaningteam.com, or send a quote request. Final Touch serves Las Vegas, Henderson, and Clark County, NV.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Final Touch Cleaning Company | Clark County, NV',
    description:
      'Call, email, or send a quote request. Scott & Nicole Maland own and run Final Touch, a family-owned cleaning company based in Southern Nevada.',
    type: 'website',
    url: `${SITE.url}/contact`,
  },
};

const faq = [
  {
    q: 'How do I reach Final Touch?',
    a: `Call ${SITE.phone.display}, email ${SITE.email.display}, or send a quote request through the form. We answer phone calls from real people, not a call center.`,
  },
  {
    q: 'Can I call instead of using the form?',
    a: `Yes. Calling ${SITE.phone.display} is often the fastest way to reach us. The phone is answered by ${SITE.owners} or someone on the team.`,
  },
  {
    q: 'What information should I have ready?',
    a: 'It helps to know the type of space (home, office, retail, post-construction), rough square footage, the city or neighborhood, and timing. None of it is required. We can walk through it on the call.',
  },
  {
    q: 'What happens after I send a quote request?',
    a: 'We respond to set up a short walkthrough, usually a phone call or a brief on-site visit if the job calls for it. After the walkthrough you get a real quote, not a templated rate.',
  },
  {
    q: 'Where do you work?',
    a: `We serve ${SITE.serviceArea.county}, ${SITE.serviceArea.state}, including ${SITE.serviceArea.cities.join(', ')}.`,
  },
  {
    q: 'Are your online forms active yet?',
    a: `Our online quote form is in setup right now. For the fastest response, call ${SITE.phone.display} or email ${SITE.email.display}. We are wiring the form to our scheduling system shortly.`,
  },
  {
    q: 'What should I do if I am not sure which service I need?',
    a: 'Tell us what triggered the request: moving in, finishing a build, opening a store, resetting a space. We will match it to the right service during the walkthrough. There is no charge for that conversation.',
  },
  {
    q: 'What are your business hours?',
    a: `Call ${SITE.phone.display} or email ${SITE.email.display} and we will get back to you. Specific business hours will be posted here once we have confirmed our published schedule.`,
  },
  {
    q: 'What services does Final Touch offer?',
    a: `Seven core services: commercial and office cleaning, janitorial routes, post-construction cleanup, move-in cleaning, move-out cleaning, deep cleaning, and retail space cleaning. Not sure which fits your job? Tell us what triggered the request and we will match it on the walkthrough.`,
  },
  {
    q: 'Is Final Touch a local company or a franchise?',
    a: `${SITE.owners} own and run Final Touch. It is a family-run cleaning company based in Southern Nevada, not a franchise or a staffing platform. When you call, you reach the owners or the team, not a call center.`,
  },
];

// Organization schema with contactPoint. Service-area-only, no street
// address. TODO-VERIFY: business hours (openingHours). Add only after owner
// confirms.
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  email: SITE.email.display,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: SITE.phone.href.replace('tel:', ''),
      email: SITE.email.display,
      contactType: 'customer service',
      areaServed: [SITE.serviceArea.county, ...SITE.serviceArea.cities].map(
        (name) => `${name}, ${SITE.serviceArea.stateAbbr}`
      ),
      availableLanguage: 'English',
    },
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

// TODO-VERIFY: business hours of operation. Until confirmed, the page does
// not claim specific hours. Phone and email are always-listed channels.

function ContactTile({
  label,
  value,
  href,
  isPhone = false,
}: {
  label: string;
  value: string;
  href: string;
  isPhone?: boolean;
}) {
  return (
    <a
      href={href}
      className="group block rounded-[14px] border border-border-subtle bg-brand-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(26,26,26,0.06)] hover:border-brand-blue/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
    >
      <div className="text-[11px] uppercase tracking-[0.14em] font-semibold text-muted">
        {label}
      </div>
      <div
        className={`mt-1 font-display text-lg sm:text-xl font-semibold text-brand-black group-hover:text-brand-blue transition-colors break-words ${isPhone ? 'tabular-nums' : ''}`}
      >
        {value}
      </div>
    </a>
  );
}

export default function ContactPage() {
  return (
    <>
      <HeroSection
        eyebrow="Contact"
        heading="Get in touch with Final Touch Cleaning Company."
        sub={`Call, email, or send a quote request. We serve every part of ${SITE.serviceArea.county}, Nevada. The phone is answered by the owners or the team, not a call center.`}
        primaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        secondaryCta={{ label: 'Email us', href: SITE.email.href }}
        formSlot={<QuoteFormPlaceholder />}
        image={{
          src: '/images/heroes/contact-final-touch-cleaning-company-hero.webp',
          alt: 'Contact Final Touch Cleaning Company in Las Vegas, NV.',
        }}
      />

      {/* Ways to reach us */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Ways to reach us"
            heading="Three direct channels."
            sub={`No call center, no ticket queue. ${SITE.owners} or the team answer.`}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            <ContactTile
              label="Phone"
              value={SITE.phone.display}
              href={SITE.phone.href}
              isPhone
            />
            <ContactTile
              label="Email"
              value={SITE.email.display}
              href={SITE.email.href}
            />
            <ContactTile
              label="Service area"
              value={`${SITE.serviceArea.county}, ${SITE.serviceArea.stateAbbr}`}
              href={ROUTES.locations}
            />
          </div>
          <p className="mt-6 text-sm text-muted">
            Cities we serve: {SITE.serviceArea.cities.join(', ')}.
          </p>
        </div>
      </section>

      {/* What to include */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeader
            eyebrow="What to include"
            heading="A few details help us help you faster."
          />
          <ul className="mt-8 space-y-3 text-base text-brand-black">
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-brand-blue mt-1">•</span>
              <span>
                Type of space: home, office, retail, post-construction, vacation rental. Not sure which service fits?{' '}
                <Link href={ROUTES.services} className="text-brand-blue font-semibold hover:underline">
                  See all our cleaning services
                </Link>
                .
              </span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-brand-blue mt-1">•</span>
              <span>City or neighborhood within {SITE.serviceArea.county}.</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-brand-blue mt-1">•</span>
              <span>Rough size and timing: one-time, recurring, or move-in/move-out tied.</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-brand-blue mt-1">•</span>
              <span>Anything specific: pets, post-construction dust, hard-water buildup, access notes.</span>
            </li>
          </ul>
          <p className="mt-6 text-sm text-muted">
            None of this is required. We will cover what is missing on the walkthrough.
          </p>
        </div>
      </section>

      {/* What happens next */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeader
            eyebrow="What happens next"
            heading="Four steps from request to clean."
          />
          <ol className="mt-8 space-y-5">
            {[
              {
                step: '01',
                title: 'You reach out',
                body: 'Call, email, or send a quote request through the form.',
              },
              {
                step: '02',
                title: 'We schedule a walkthrough',
                body: 'A short conversation about the space, phone or on-site, whichever fits the job.',
              },
              {
                step: '03',
                title: 'You get a real quote',
                body: 'A real number for the work, not a templated rate. No pressure to book.',
              },
              {
                step: '04',
                title: 'We do the job and follow up',
                body: 'Same team, same finishing standard. If anything needs attention after the job, we want to know.',
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

      <FAQSection items={faq} heading="Common questions about reaching us" defaultOpenFirst />

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
