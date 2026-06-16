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
  title: 'Pet Hair Removal Cleaning in Las Vegas, NV',
  description:
    'Pet hair removal cleaning in Las Vegas, NV. Final Touch lifts embedded pet hair and dander from floors, soft surfaces, and high-touch areas. Call (702) 444-5077.',
  alternates: {
    canonical: '/cleaning-solutions/pet-hair-removal-cleaning',
  },
  openGraph: {
    title: 'Pet Hair Removal Cleaning in Las Vegas, NV | Final Touch',
    description:
      'Pet hair removal cleaning in Las Vegas, NV. Final Touch lifts embedded pet hair and dander from floors, soft surfaces, and high-touch areas. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/cleaning-solutions/pet-hair-removal-cleaning`,
  },
};

const faq = [
  {
    q: 'What does pet hair removal cleaning include?',
    a: `Pet hair removal cleaning by Final Touch is a detailed clean focused on the surfaces where pet hair and dander collect: floors and floor edges, baseboards, upholstered furniture, rugs and carpet, stairs, vents and registers, and high-touch surfaces throughout. We work room by room rather than applying a single pass. Scope is confirmed at the initial walkthrough based on your pets, surfaces, and layout. Call ${SITE.phone.display}.`,
  },
  {
    q: 'Why does pet hair seem worse in Las Vegas homes?',
    a: 'The Las Vegas Valley is a dry high desert, and dry indoor air can make pet hair and dander more noticeable as it lifts and circulates. Pets also shed more during seasonal changes. Hard floors common in Southern Nevada homes show hair and tumbleweeds of fur quickly, especially along edges and under furniture where standard quick cleans tend to miss it.',
  },
  {
    q: 'Can Final Touch remove pet hair from carpet and upholstery?',
    a: 'Final Touch provides detailed cleaning of carpet, rugs, and upholstered surfaces to lift visible pet hair and dander as part of the clean. We focus on thorough, targeted cleaning of the affected surfaces. Deeply embedded hair in some fabrics may need specialty restoration, which we will tell you honestly at the walkthrough rather than over-promise.',
  },
  {
    q: 'Is pet hair removal cleaning available for businesses and rentals?',
    a: 'Yes. Final Touch is a commercial-first cleaning company, and pet hair removal is common for pet-friendly rentals, vacation properties, veterinary and grooming-adjacent offices, and any commercial space that allows animals. Property managers often schedule it during tenant turnover. We serve both businesses and residents across Las Vegas and Clark County.',
  },
  {
    q: 'How often should I schedule pet hair cleaning?',
    a: "It depends on how many pets you have, how much they shed, and your surfaces. Many pet households add it to a recurring clean, while others schedule a one-time detailed clean before guests or a move. Final Touch confirms the right cadence during the walkthrough based on your home or property rather than assuming a fixed schedule.",
  },
  {
    q: 'How do I get a quote for pet hair removal cleaning in Las Vegas?',
    a: `Call ${SITE.phone.display} or request a free quote online. ${SITE.owners} conduct the walkthrough personally, confirm the affected surfaces, and quote based on what the job requires. Final Touch is licensed and insured in Nevada and backs work with the Blue Ribbon Guarantee.`,
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Pet Hair Removal Cleaning in Las Vegas, NV',
  serviceType: 'Pet Hair Removal Cleaning',
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
  'Detailed cleaning of floors and floor edges where hair collects',
  'Vacuuming and detailing of carpet, rugs, and stair runners',
  'Cleaning of upholstered furniture surfaces to lift hair and dander',
  'Baseboards, vents, and registers where dander settles',
  'High-touch surfaces: door handles, switches, and pet-area fixtures',
  'Trash removal and replacement of liners',
];

const audienceCards = [
  {
    title: 'Pet-friendly rentals and property managers',
    body: 'Pet-friendly rentals and vacation properties accumulate hair and dander between tenants. Property managers in Las Vegas schedule pet hair removal cleaning during turnover so the next occupant walks into a clean, hair-free space. Final Touch confirms scope per unit at the walkthrough.',
  },
  {
    title: 'Offices and commercial spaces that allow pets',
    body: 'More Las Vegas workplaces allow pets, and animal-adjacent businesses like grooming-area offices see hair build up fast. Final Touch provides detailed pet hair cleaning for commercial interiors as a one-time clean or part of a recurring program.',
  },
  {
    title: 'Pet households and multi-pet homes',
    body: 'Homes with one or several pets deal with hair on floors, furniture, and along baseboards year-round, with heavier shedding during seasonal changes. Final Touch scopes the clean to your pets and surfaces rather than applying a fixed template.',
  },
  {
    title: 'Homes preparing for guests or a move',
    body: 'Before guests arrive or during a move, a one-time detailed pet hair clean resets the space. Final Touch serves residents across Las Vegas and Clark County and confirms what is needed at an owner-led walkthrough.',
  },
];

const deepCleaning = SERVICES.find((s) => s.slug === 'deep-cleaning');
const commercialOffice = SERVICES.find((s) => s.slug === 'commercial-office-cleaning');
const moveOut = SERVICES.find((s) => s.slug === 'move-out-cleaning');

const relatedServiceCards = [deepCleaning, commercialOffice, moveOut]
  .filter((s): s is NonNullable<typeof s> => Boolean(s))
  .map((s) => ({
    name: s.name,
    href: s.href,
    description: s.shortDescription,
    image: s.image,
  }));

export default function PetHairRemovalCleaningPage() {
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
          { label: 'Pet Hair Removal Cleaning' },
        ]}
      />

      <HeroSection
        eyebrow="Pet Hair Problem · Las Vegas, NV"
        heading="Pet Hair Removal Cleaning in Las Vegas, NV"
        sub="Pet hair and dander collect on floors, furniture, and baseboards faster than a standard quick clean can keep up with. Final Touch provides detailed pet hair removal cleaning for Las Vegas homes and pet-friendly properties, scoped to your pets and surfaces at an owner-led walkthrough."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        formSlot={<QuoteFormPlaceholder />}
      />

      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-lg sm:text-xl text-brand-black leading-relaxed">
            Pet hair removal cleaning is a detailed clean focused on lifting embedded pet hair and
            dander from floors, soft surfaces, baseboards, and high-touch areas. It feels worse in
            the Las Vegas Valley because the dry high-desert air keeps fine hair and dander
            circulating, and the hard floors common in Southern Nevada homes show hair quickly along
            edges and under furniture.{' '}
            <Link href={ROUTES.services} className="text-brand-blue font-semibold hover:underline">
              Final Touch
            </Link>{' '}
            serves both homes and businesses. Call{' '}
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
            heading="How Final Touch addresses pet hair."
            sub="A targeted, room-by-room clean of the surfaces where pet hair and dander collect. Scope confirmed at the walkthrough."
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
            Final Touch focuses on thorough, targeted cleaning of the affected surfaces. Where
            deeply embedded hair in certain fabrics would need specialty restoration, we will tell
            you honestly at the walkthrough rather than over-promise.
          </p>
        </div>
      </section>

      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Who hires this service"
            heading="Who schedules pet hair removal cleaning."
            sub="Final Touch is commercial-first and also serves residents, so pet hair cleaning covers properties and homes alike."
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
        heading="Pet hair removal cleaning in Las Vegas: frequently asked questions"
      />

      <section className="bg-light-gray">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Related services"
            heading="Services that pair with pet hair removal."
            sub="A deep clean is the most common pairing for pet households and pet-friendly turnovers."
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
            For households with heavy shedding, pair pet hair removal with{' '}
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
        heading="Ready to clear out the pet hair?"
        sub={`Free quotes for pet hair removal cleaning across Las Vegas and ${SITE.serviceArea.county}. Call ${SITE.phone.display} or send a quote request.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />
    </>
  );
}
