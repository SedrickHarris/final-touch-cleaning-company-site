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
  title: 'Allergy and Dust Mitigation Cleaning in Las Vegas, NV',
  description:
    'Allergy cleaning in Las Vegas, NV. Final Touch removes settled dust and allergens from the surfaces standard cleaning skips in the dusty desert climate. Call (702) 444-5077.',
  alternates: {
    canonical: '/cleaning-solutions/allergy-dust-mitigation-cleaning',
  },
  openGraph: {
    title: 'Allergy and Dust Mitigation Cleaning in Las Vegas, NV | Final Touch',
    description:
      'Allergy cleaning in Las Vegas, NV. Final Touch removes settled dust and allergens from the surfaces standard cleaning skips in the dusty desert climate. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/cleaning-solutions/allergy-dust-mitigation-cleaning`,
  },
};

const faq = [
  {
    q: 'What does allergy and dust mitigation cleaning include?',
    a: `Allergy and dust mitigation cleaning by Final Touch is a detailed clean targeting where dust and allergens settle: ceiling fans, vents and registers, blinds, light fixtures, baseboards, window sills and tracks, the tops of doors and cabinets, and other high and low surfaces standard cleaning skips. We work room by room. Scope is confirmed at the initial walkthrough. Call ${SITE.phone.display}.`,
  },
  {
    q: 'Why is dust such a problem in Las Vegas?',
    a: 'The Las Vegas Valley sits in a high desert where fine dust is a constant fact of the environment. Dry heat and frequent wind keep dust airborne, and it settles indoors on high surfaces, vents, and soft furnishings. Because the air is dry, dust tends to stay light and circulate, which is why surfaces that get skipped on a quick clean can build up noticeably between detailed cleanings.',
  },
  {
    q: 'Can cleaning help with allergies?',
    a: 'Regular, thorough dust removal can reduce the amount of settled dust and common allergens on surfaces in your space. Final Touch focuses on detailed cleaning of the affected surfaces. We do not make medical claims or promise specific health outcomes — what we offer is a thorough, targeted clean of where dust and allergens collect, which many people find makes a noticeable difference.',
  },
  {
    q: 'Is this service for businesses as well as homes?',
    a: 'Yes. Final Touch is a commercial-first cleaning company, and dust mitigation matters for offices, waiting rooms, retail spaces, and any commercial interior where settled dust affects comfort and presentation. Property managers and facility managers schedule it as a one-time detailed clean or as part of a recurring janitorial program across Las Vegas and Clark County.',
  },
  {
    q: 'How often should dust mitigation cleaning be done?',
    a: "In the dusty Las Vegas climate, many homes and businesses benefit from a thorough dust-focused clean on a recurring schedule, with detailed high-and-low dusting more often during windy seasons. Final Touch confirms the right cadence at the walkthrough based on your space, surfaces, and how quickly dust returns rather than assuming a fixed interval.",
  },
  {
    q: 'How do I get a quote for allergy and dust cleaning in Las Vegas?',
    a: `Call ${SITE.phone.display} or request a free quote online. ${SITE.owners} conduct the walkthrough personally, confirm the surfaces that need attention, and quote based on what the job requires. Final Touch is licensed and insured in Nevada and backs work with the Blue Ribbon Guarantee.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Allergy and Dust Mitigation Cleaning in Las Vegas, NV',
  serviceType: 'Allergy and Dust Mitigation Cleaning',
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
  'High dusting: ceiling fans, light fixtures, tops of cabinets and doors',
  'Vents, registers, and return-air covers where dust settles',
  'Blinds, window sills, and window tracks',
  'Baseboards and trim along floor edges',
  'Detailed surface dusting room by room, including hard-to-reach corners',
  'Floor cleaning to remove settled dust from edges and under furniture',
];

const audienceCards = [
  {
    title: 'Offices and waiting rooms',
    body: 'Settled dust affects both comfort and presentation in Las Vegas offices and waiting areas. Final Touch provides detailed dust mitigation cleaning for commercial interiors as a one-time clean or part of a recurring program, scoped per facility at the walkthrough.',
  },
  {
    title: 'Property and facility managers',
    body: 'Managers across the Las Vegas Valley schedule dust-focused detailed cleans for vents, fixtures, and high surfaces that routine cleaning skips. It keeps shared spaces presentable in a climate where dust returns quickly.',
  },
  {
    title: 'Households sensitive to dust and allergens',
    body: 'Homes where settled dust is a daily concern benefit from thorough, targeted dusting of the surfaces a quick clean misses. Final Touch scopes the clean to your home rather than applying a fixed template, and serves residents across Clark County.',
  },
  {
    title: 'Seasonal and post-windstorm cleans',
    body: "After windy desert stretches, fine dust coats surfaces throughout a home or business. A detailed dust mitigation clean resets the space. Final Touch confirms what is affected at an owner-led walkthrough.",
  },
];

const deepCleaning = SERVICES.find((s) => s.slug === 'deep-cleaning');
const janitorial = SERVICES.find((s) => s.slug === 'janitorial-services');
const commercialOffice = SERVICES.find((s) => s.slug === 'commercial-office-cleaning');

const relatedServiceCards = [deepCleaning, janitorial, commercialOffice]
  .filter((s): s is NonNullable<typeof s> => Boolean(s))
  .map((s) => ({
    name: s.name,
    href: s.href,
    description: s.shortDescription,
    image: s.image,
  }));

export default function AllergyDustMitigationCleaningPage() {
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
          { label: 'Allergy and Dust Mitigation Cleaning' },
        ]}
      />

      <HeroSection
        eyebrow="Dust & Allergen Problem · Las Vegas, NV"
        heading="Allergy and Dust Mitigation Cleaning in Las Vegas, NV"
        sub="In the dusty Las Vegas desert, fine dust settles on the high and low surfaces standard cleaning skips. Final Touch provides detailed allergy and dust mitigation cleaning for homes and businesses, scoped to the surfaces that need it at an owner-led walkthrough."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Allergy and dust mitigation cleaning is a detailed clean that targets where dust and
            common allergens settle — vents, fixtures, blinds, baseboards, and other surfaces a
            quick clean skips. It is a real concern in the Las Vegas Valley because the high desert
            climate keeps fine dust airborne with dry heat and frequent wind, so it settles back
            onto surfaces between cleanings.{' '}
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
            heading="How Final Touch addresses dust and allergens."
            sub="A thorough high-and-low dusting of the surfaces routine cleaning misses. Scope confirmed at the walkthrough."
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
            Final Touch provides thorough, targeted cleaning of the affected surfaces. We do not make
            medical claims or promise specific health outcomes — what we offer is a detailed clean of
            where dust and allergens collect.
          </p>
        </div>
      </section>

      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires this service"
            heading="Who schedules dust mitigation cleaning."
            sub="Final Touch is commercial-first and also serves residents, so dust mitigation covers facilities and homes alike."
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
        heading="Allergy and dust mitigation cleaning in Las Vegas: frequently asked questions"
      />

      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Related services"
            heading="Services that pair with dust mitigation."
            sub="A deep clean is the most common pairing for a thorough dust reset; janitorial keeps it up over time."
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
            For a full reset, pair dust mitigation with{' '}
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
        heading="Ready to clear the dust out?"
        sub={`Free quotes for allergy and dust mitigation cleaning across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
