import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceCard from '@/components/shared/ServiceCard';
import Breadcrumb from '@/components/shared/Breadcrumb';
import QuoteFormPlaceholder from '@/components/shared/QuoteFormPlaceholder';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES, SERVICES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'Post-Illness Deep Sanitation Cleaning in Las Vegas, NV',
  description:
    'Post illness cleaning in Las Vegas, NV. Final Touch deep-cleans and sanitizes high-touch surfaces after illness for homes, offices, and shared facilities. Call (702) 444-5077.',
  alternates: {
    canonical: '/cleaning-solutions/post-illness-deep-sanitation-cleaning',
  },
  openGraph: {
    title: 'Post-Illness Deep Sanitation Cleaning in Las Vegas, NV | Final Touch',
    description:
      'Post illness cleaning in Las Vegas, NV. Final Touch deep-cleans and sanitizes high-touch surfaces after illness for homes, offices, and shared facilities. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/cleaning-solutions/post-illness-deep-sanitation-cleaning`,
  },
};

const faq = [
  {
    q: 'What does post-illness deep sanitation cleaning include?',
    a: `Post-illness deep sanitation by Final Touch is a thorough clean with focused attention on high-touch surfaces: door handles, light switches, faucets and fixtures, countertops, railings, remotes and shared controls, restroom surfaces, and frequently handled areas throughout. We combine detailed cleaning with surface sanitation of those points. Scope is confirmed at the initial walkthrough. Call ${SITE.phone.display}.`,
  },
  {
    q: 'Why do people request post-illness cleaning?',
    a: 'After an illness moves through a household, office, or shared facility, people want the high-touch surfaces thoroughly cleaned and sanitized before normal use resumes. It is a common request anywhere people share space — homes, workplaces, and facilities alike. Las Vegas businesses with shared workspaces and high foot traffic schedule it to reset a space after an illness has circulated among staff or occupants.',
  },
  {
    q: 'Does Final Touch disinfect or just clean?',
    a: 'Final Touch combines thorough cleaning with surface sanitation of high-touch points. We focus on detailed cleaning and surface sanitation of the affected areas. We do not make medical or clinical claims, do not represent this as medical-grade decontamination, and do not guarantee the elimination of any specific pathogen — what we provide is a thorough clean with focused attention on the surfaces people handle most.',
  },
  {
    q: 'Is this service available for offices and shared facilities?',
    a: 'Yes. Final Touch is a commercial-first cleaning company, and post-illness sanitation is common for offices, shared workspaces, retail spaces, and any facility where staff or visitors share surfaces. Property and facility managers schedule it as a one-time reset or as part of a recurring program across Las Vegas and Clark County.',
  },
  {
    q: 'How quickly can you schedule post-illness cleaning?',
    a: `Timing matters for a post-illness clean, and Final Touch works to schedule it promptly. Call ${SITE.phone.display} and we will confirm availability and the cleaning window. ${SITE.owners} confirm scope and high-touch priorities so the team focuses on the surfaces that matter most for your home or facility.`,
  },
  {
    q: 'How do I get a quote for post-illness cleaning in Las Vegas?',
    a: `Call ${SITE.phone.display} or request a free quote online. ${SITE.owners} conduct the walkthrough personally, confirm high-touch priorities, and quote based on what the job requires. Final Touch is licensed and insured in Nevada and backs work with the Blue Ribbon Guarantee.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Post-Illness Deep Sanitation Cleaning in Las Vegas, NV',
  serviceType: 'Post-Illness Deep Sanitation Cleaning',
  provider: {
    '@type': 'Organization',
    name: 'Final Touch Cleaning Company LLC',
    url: SITE.url,
    telephone: '+17024445077',
  },
  areaServed: { '@type': 'City', name: 'Las Vegas, NV' },
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

const whatWeDo = [
  'Detailed cleaning and surface sanitation of door handles and light switches',
  'Faucets, fixtures, and restroom high-touch surfaces',
  'Countertops, tables, and frequently used work surfaces',
  'Railings, handrails, and shared controls or remotes',
  'Thorough cleaning of floors, surfaces, and common areas throughout',
  'Trash removal and replacement of liners',
];

const audienceCards = [
  {
    title: 'Offices and shared workspaces',
    body: 'When an illness circulates among staff, Las Vegas employers schedule a post-illness clean to reset shared desks, break rooms, and high-touch surfaces before normal use resumes. Final Touch is commercial-first and confirms high-touch priorities per facility at the walkthrough.',
  },
  {
    title: 'Property and facility managers',
    body: 'Managers of shared facilities, retail spaces, and common areas request post-illness sanitation to reset frequently handled surfaces after an illness has moved through occupants or visitors. Available as a one-time reset or part of a recurring program.',
  },
  {
    title: 'Households after illness',
    body: 'After illness passes through a home, families want high-touch surfaces thoroughly cleaned and sanitized before things return to normal. Final Touch serves residents across Clark County and scopes the clean to your home rather than a fixed template.',
  },
  {
    title: 'High-traffic and customer-facing spaces',
    body: 'Spaces with steady foot traffic see many hands on the same surfaces. A focused post-illness clean of those high-touch points is a sensible reset. Final Touch confirms the priority surfaces at an owner-led walkthrough.',
  },
];

const deepCleaning = SERVICES.find((s) => s.slug === 'deep-cleaning');
const commercialOffice = SERVICES.find((s) => s.slug === 'commercial-office-cleaning');
const janitorial = SERVICES.find((s) => s.slug === 'janitorial-services');

const relatedServiceCards = [deepCleaning, commercialOffice, janitorial]
  .filter((s): s is NonNullable<typeof s> => Boolean(s))
  .map((s) => ({
    name: s.name,
    href: s.href,
    description: s.shortDescription,
    image: s.image,
  }));

export default function PostIllnessDeepSanitationCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Cleaning Solutions', href: '/cleaning-solutions' },
          { label: 'Post-Illness Deep Sanitation Cleaning' },
        ]}
      />

      <HeroSection
        eyebrow="Post-Illness Problem · Las Vegas, NV"
        heading="Post-Illness Deep Sanitation Cleaning in Las Vegas, NV"
        sub="After illness moves through a home, office, or shared facility, the high-touch surfaces need a thorough reset. Final Touch provides post-illness deep sanitation cleaning for Las Vegas homes and businesses — detailed cleaning and surface sanitation, scoped at an owner-led walkthrough."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Post-illness deep sanitation cleaning is a thorough clean with focused attention on the
            high-touch surfaces people handle most — door handles, switches, fixtures, railings, and
            shared controls. It is a common request anywhere people share space: homes, workplaces,
            and facilities. Las Vegas businesses with shared workspaces and high foot traffic often
            schedule it to reset a space after an illness has circulated.{' '}
            <Link href={ROUTES.services} className="text-brand-blue font-semibold hover:underline">
              Final Touch
            </Link>{' '}
            serves homes and businesses. Call{' '}
            <a
              href={SITE.phone.href}
              className="text-brand-blue font-semibold hover:underline tabular-nums"
            >
              {SITE.phone.display}
            </a>{' '}
            to discuss your space.
          </p>
        </div>
      </section>

      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="What we do"
            heading="How Final Touch addresses post-illness cleaning."
            sub="Thorough cleaning with focused surface sanitation of high-touch points. Scope confirmed at the walkthrough."
          />
          <ul className="mt-8 space-y-3">
            {whatWeDo.map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-black">
                <span aria-hidden="true" className="text-brand-blue mt-0.5 shrink-0">
                  &#10003;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Final Touch combines thorough cleaning with surface sanitation of high-touch points. We
            do not make medical or clinical claims, do not represent this as medical-grade
            decontamination, and do not guarantee the elimination of any specific pathogen — what we
            provide is a thorough clean with focused attention on the surfaces people handle most.
          </p>
        </div>
      </section>

      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires this service"
            heading="Who schedules post-illness deep sanitation."
            sub="Final Touch is commercial-first and also serves residents, so post-illness cleaning covers facilities and homes alike."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {audienceCards.map((item) => (
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

      <FAQSection
        items={faq}
        heading="Post-illness deep sanitation in Las Vegas: frequently asked questions"
      />

      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Related services"
            heading="Services that pair with post-illness sanitation."
            sub="A deep clean is the most common pairing; janitorial keeps high-touch surfaces maintained over time."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {relatedServiceCards.map((card) => (
              <li key={card.href} className="h-full">
                <ServiceCard
                  href={card.href}
                  name={card.name}
                  description={card.description}
                  image={card.image}
                />
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base text-brand-black">
            For a full reset, pair post-illness sanitation with{' '}
            <Link href="/services/deep-cleaning" className="text-brand-blue font-semibold hover:underline">
              deep cleaning
            </Link>
            , or{' '}
            <Link href={ROUTES.freeQuote} className="text-brand-blue font-semibold hover:underline">
              request a free quote
            </Link>{' '}
            and we will recommend the right scope.
          </p>
        </div>
      </section>

      <CTASection
        heading="Need a post-illness reset?"
        sub={`Free quotes for post-illness deep sanitation across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
