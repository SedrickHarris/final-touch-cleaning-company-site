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
  title: 'Smoke and Odor Removal Cleaning in Las Vegas, NV',
  description:
    'Smoke odor cleaning in Las Vegas, NV. Final Touch deep-cleans surfaces affected by smoke and lingering odors in homes, rentals, and commercial spaces. Call (702) 444-5077.',
  alternates: {
    canonical: '/cleaning-solutions/smoke-odor-removal',
  },
  openGraph: {
    title: 'Smoke and Odor Removal Cleaning in Las Vegas, NV | Final Touch',
    description:
      'Smoke odor cleaning in Las Vegas, NV. Final Touch deep-cleans surfaces affected by smoke and lingering odors in homes, rentals, and commercial spaces. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/cleaning-solutions/smoke-odor-removal`,
  },
};

const faq = [
  {
    q: 'What does smoke and odor removal cleaning include?',
    a: `Smoke and odor removal by Final Touch is a thorough, detailed clean of the surfaces where smoke residue and odor-causing buildup collect: walls and hard surfaces, floors and baseboards, hard furnishings, cabinet exteriors, fixtures, vents, and high-touch points throughout. We focus on detailed cleaning of the affected surfaces. Scope is confirmed at the initial walkthrough. Call ${SITE.phone.display}.`,
  },
  {
    q: 'Why is smoke and odor cleaning common in Las Vegas?',
    a: 'Las Vegas has a large rental and turnover market, and smoke odor from prior occupants is one of the most common reasons units need a detailed clean before the next tenant or sale. The dry desert air can also concentrate lingering odors indoors. Homes, vacation rentals, and commercial spaces all see odor concerns tied to smoke, cooking, and general occupancy that a standard clean does not fully address.',
  },
  {
    q: 'Can cleaning remove smoke smell completely?',
    a: 'Final Touch provides thorough cleaning of the hard surfaces where smoke residue settles, which reduces the source of lingering odor. We focus on detailed cleaning of the affected surfaces rather than promising a guaranteed result. Heavy, long-term smoke saturation in porous materials like drywall or carpet padding can require remediation beyond cleaning — we will assess and tell you honestly at the walkthrough.',
  },
  {
    q: 'Is this service useful for rentals and turnovers?',
    a: 'Yes, it is one of the most common requests. Smoke odor between tenants is a recurring problem for landlords and property managers, and a unit cannot show or re-rent well with it lingering. Final Touch frequently includes smoke and odor cleaning in move-out and turnover work so a space presents clean for the next occupant across Las Vegas and Clark County.',
  },
  {
    q: 'Do you clean commercial spaces affected by odor?',
    a: 'Yes. Final Touch is a commercial-first cleaning company. Offices, retail spaces, and shared facilities can develop lingering odors from occupancy, cooking areas, or prior use. We provide detailed cleaning of the affected surfaces as a one-time clean or part of a recurring program, scoped per facility at the walkthrough.',
  },
  {
    q: 'How do I get a quote for smoke and odor removal in Las Vegas?',
    a: `Call ${SITE.phone.display} or request a free quote online. ${SITE.owners} conduct the walkthrough personally, assess the affected surfaces, and quote based on what the job requires. Final Touch is licensed and insured in Nevada and backs work with the Blue Ribbon Guarantee.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Smoke and Odor Removal Cleaning in Las Vegas, NV',
  serviceType: 'Smoke and Odor Removal Cleaning',
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
  'Detailed cleaning of walls and hard surfaces where residue settles',
  'Floors, baseboards, and trim throughout',
  'Hard furnishings, cabinet exteriors, and fixtures',
  'Vents, registers, and return-air covers',
  'High-touch surfaces: door handles, switches, and hardware',
  'Trash removal and replacement of liners',
];

const audienceCards = [
  {
    title: 'Landlords and property managers',
    body: 'Smoke odor between tenants is a recurring turnover problem in Las Vegas rentals — a unit cannot show or re-rent well with it lingering. Final Touch frequently includes smoke and odor cleaning in turnover work so the next occupant walks into a clean space. Scope confirmed per unit at the walkthrough.',
  },
  {
    title: 'Vacation and short-term rentals',
    body: 'Short-term rental hosts in the Las Vegas market need units to present and smell clean for every guest. Final Touch provides detailed cleaning of the affected surfaces between stays, scoped to the property rather than a fixed template.',
  },
  {
    title: 'Offices and commercial spaces',
    body: 'Offices, retail spaces, and shared facilities can develop lingering odors from occupancy or prior use. Final Touch is commercial-first and provides detailed surface cleaning as a one-time clean or part of a recurring program.',
  },
  {
    title: 'Homeowners and home sales',
    body: 'Before a sale or move-in, lingering smoke odor is a first impression that turns buyers off. Final Touch serves residents across Clark County with thorough cleaning of the affected surfaces ahead of a sale or new occupancy.',
  },
];

const deepCleaning = SERVICES.find((s) => s.slug === 'deep-cleaning');
const moveOut = SERVICES.find((s) => s.slug === 'move-out-cleaning');
const commercialOffice = SERVICES.find((s) => s.slug === 'commercial-office-cleaning');

const relatedServiceCards = [deepCleaning, moveOut, commercialOffice]
  .filter((s): s is NonNullable<typeof s> => Boolean(s))
  .map((s) => ({
    name: s.name,
    href: s.href,
    description: s.shortDescription,
    image: s.image,
  }));

export default function SmokeOdorRemovalPage() {
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
          { label: 'Smoke and Odor Removal Cleaning' },
        ]}
      />

      <HeroSection
        eyebrow="Smoke & Odor Problem · Las Vegas, NV"
        heading="Smoke and Odor Removal Cleaning in Las Vegas, NV"
        sub="Lingering smoke and odor keep a space from showing, selling, or re-renting. Final Touch provides thorough smoke and odor removal cleaning for homes, rentals, and commercial spaces — detailed cleaning of the affected surfaces, scoped at an owner-led walkthrough."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Smoke and odor removal cleaning is a thorough, detailed clean of the hard surfaces where
            smoke residue and odor-causing buildup settle. It is a common request in Las Vegas
            because of the large rental and turnover market — smoke odor from prior occupants is one
            of the top reasons a unit needs a detailed clean before the next tenant — and the dry
            desert air can concentrate lingering odors indoors.{' '}
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
            heading="How Final Touch addresses smoke and odor."
            sub="Detailed cleaning of the surfaces where residue and odor-causing buildup collect. Scope confirmed at the walkthrough."
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
            Final Touch provides thorough cleaning of the hard surfaces where residue settles, which
            reduces the source of lingering odor. Heavy, long-term smoke saturation in porous
            materials like drywall or carpet padding can require remediation beyond cleaning — we
            will assess and tell you honestly at the walkthrough rather than over-promise a result.
          </p>
        </div>
      </section>

      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires this service"
            heading="Who schedules smoke and odor removal cleaning."
            sub="Final Touch is commercial-first and also serves residents, so smoke and odor cleaning covers properties and homes alike."
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
        heading="Smoke and odor removal in Las Vegas: frequently asked questions"
      />

      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Related services"
            heading="Services that pair with smoke and odor removal."
            sub="Deep cleaning and move-out cleaning are the most common pairings for turnovers and sales."
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
            For turnovers and sales, pair smoke and odor removal with{' '}
            <Link href="/services/deep-cleaning" className="text-brand-blue font-semibold hover:underline">
              deep cleaning
            </Link>{' '}
            or{' '}
            <Link href="/services/move-out-cleaning" className="text-brand-blue font-semibold hover:underline">
              move-out cleaning
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
        heading="Ready to clear the smoke and odor?"
        sub={`Free quotes for smoke and odor removal across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
