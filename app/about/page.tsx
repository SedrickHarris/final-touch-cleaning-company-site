import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import SectionHeader from '@/components/shared/SectionHeader';
import TrustBar from '@/components/shared/TrustBar';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES } from '@/lib/constants/routes';
import { Heart, MapPin, ShieldCheck, CheckCircle, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: { absolute: 'About Final Touch Cleaning Company | Las Vegas, NV' },
  description: `Final Touch Cleaning Company is owned and run by ${SITE.owners}. Family-owned cleaning across ${SITE.serviceArea.metro}, NV. Free quotes, local team.`,
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Final Touch Cleaning Company | Clark County, NV',
    description: `${SITE.owners} own and run Final Touch, a family-owned cleaning company serving Las Vegas, Henderson, and Clark County, NV. Detail-focused work.`,
    type: 'website',
    url: `${SITE.url}/about`,
  },
};

const trustItems = [
  { label: 'Family owned',       sub: SITE.owners,                       icon: Heart       },
  { label: 'Local team',         sub: 'Based in Southern Nevada',        icon: MapPin      },
  { label: 'Licensed & insured', sub: 'Nevada licensed and insured',     icon: ShieldCheck },
  { label: 'Detail-focused',     sub: 'The corners other crews skip',    icon: CheckCircle },
  { label: 'Free quotes',        sub: 'No-pressure walkthroughs',        icon: Tag         },
];

const faq = [
  {
    q: 'Who owns Final Touch Cleaning Company?',
    a: `${SITE.owners} own and run Final Touch. It is a family-run cleaning company based in Southern Nevada, not a franchise.`,
  },
  {
    q: 'What areas does Final Touch serve?',
    a: `We serve ${SITE.serviceArea.county}, ${SITE.serviceArea.state}, including ${SITE.serviceArea.cities.join(', ')}.`,
  },
  {
    q: 'What cleaning services does Final Touch offer?',
    a: 'Commercial and office cleaning, janitorial services, post-construction cleanup, move-in cleaning, move-out cleaning, deep cleaning, and retail space cleaning. Each service is tailored to the space and timeline.',
  },
  {
    q: 'What does "Where small details bring BIG RESULTS" mean?',
    a: "It means we finish what other crews skip: baseboards, vents, switch plates, edges, and corners. The final ten percent of a clean is what makes a space feel done, and that is where we focus.",
  },
  {
    q: 'What does family-owned mean for the work?',
    a: `It means ${SITE.owners} are accountable for every job. The same owners who set the standard answer the phone, do walkthroughs, and check the finish.`,
  },
  {
    q: 'Where is Final Touch based?',
    a: `Final Touch is based in Southern Nevada and operates as a service-area business. We come to you. There is no public storefront to visit, but we serve every part of ${SITE.serviceArea.county}.`,
  },
  {
    q: 'What makes Final Touch different from a basic cleaning service?',
    a: 'We focus on the finishing details that most crews rush past: edges, corners, vents, baseboards, switch plates, the inside of the oven. Same team and same checklist on every job. No upsells, no surprise add-ons.',
  },
];

// Organization schema. No streetAddress: service-area-only business per
// docs/site-os/no-fake-data-policy.md sec 2.
// image: confirmed, logo at /images/logo/final-touch-cleaning-company-logo.webp (2026-05-29)
// sameAs: confirmed, GBP CID https://www.google.com/maps?cid=5303198646776788086 (2026-05-29)
// TODO-VERIFY: foundingDate, additional sameAs social profiles (Facebook, Instagram).
//              License number and insurance carrier remain omitted per no-fake-data policy.
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  image: 'https://www.finaltouchcleaningteam.com/images/logo/final-touch-cleaning-company-logo.webp',
  sameAs: ['https://www.google.com/maps?cid=5303198646776788086'],
  areaServed: [SITE.serviceArea.county, ...SITE.serviceArea.cities].map((name) => ({
    '@type': 'Place',
    name: `${name}, ${SITE.serviceArea.stateAbbr}`,
  })),
  founder: SITE.owners.split(' & ').map((name) => ({
    '@type': 'Person',
    name,
    jobTitle: 'Owner',
    worksFor: { '@type': 'Organization', name: SITE.name },
  })),
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

const detailExamples = [
  {
    label: 'Baseboards and door frames',
    body: 'Wiped, not just dusted. The line of grime at the top of a baseboard is one of the first things a buyer or new tenant notices.',
  },
  {
    label: 'Vents and switch plates',
    body: "HVAC return covers, ceiling vents, light-switch plates, outlet covers. The small surfaces that quietly read as neglected when they are skipped.",
  },
  {
    label: 'Edges and corners',
    body: 'Behind toilets, under sinks, the corner where the tile meets the wall, the inside of the oven door. The places where dust and residue collect.',
  },
  {
    label: 'Glass, hardware, and finishes',
    body: 'Streak-free glass, polished fixtures, fingerprints off cabinet pulls. The finish that catches light and makes a space feel done.',
  },
];

const howWeWorkItems = [
  {
    title: 'Same team, every job',
    body: 'Not a rotating pool of contractors. The same people who did the walkthrough do the work.',
  },
  {
    title: 'Same checklist, every time',
    body: 'Every job ends with the same finishing pass: the surfaces most crews skip on the way out the door.',
  },
  {
    title: 'No upsells, no surprises',
    body: 'The quote reflects the actual scope. Nothing gets added at the end that was not discussed at the start.',
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        eyebrow="About Final Touch"
        heading="A family-owned cleaning company built on the details."
        sub={`${SITE.owners} run Final Touch from right here in Southern Nevada. We serve ${SITE.serviceArea.metro} with the kind of detail-focused work that makes a space feel finished, not just cleaned.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        image={{
          src: '/images/heroes/family-owned-cleaning-company-las-vegas-hero.webp',
          alt: 'Family-owned cleaning team serving Las Vegas, NV.',
        }}
      />

      <TrustBar items={trustItems} />

      {/* Our story */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-14 lg:items-center">
            <figure className="order-1 lg:order-none">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[14px] border border-border-subtle bg-light-gray">
                <Image
                  src="/images/owners/team.webp"
                  alt={`${SITE.owners}, owners of ${SITE.name}.`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted">
                {SITE.owners}, owners.
              </figcaption>
            </figure>

            <div>
              <SectionHeader eyebrow="Our story" heading="Owner-led, owner-built." />
              <div className="mt-8 space-y-5 text-base sm:text-lg text-brand-black leading-relaxed">
                <p>
                  Final Touch is a family operation. {SITE.owners} started it to do
                  the kind of cleaning work that actually holds up to a close look:
                  the edges, corners, and surfaces that most crews skip on the way
                  out the door.
                </p>
                <p>
                  We serve {SITE.serviceArea.metro}: Las Vegas, Henderson, North Las
                  Vegas, and Boulder City. Every job runs on the same finishing
                  checklist, the same team, and the same owner-set standard. Final
                  Touch is licensed and insured in Nevada.
                </p>
                <p>
                  Final Touch is not a franchise and not a staffing platform. When
                  you call, you reach {SITE.owners} or the team directly. The
                  walkthrough, the quote, and the finish check all run through the
                  same people.
                </p>
              </div>
              <p className="mt-8 text-sm">
                <Link
                  href={ROUTES.services}
                  className="font-semibold text-brand-blue hover:underline"
                >
                  See our cleaning services →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we mean by details */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="What we mean by details"
            heading="The surfaces most crews skip."
            sub="Every Final Touch job ends with a finishing pass on the surfaces that separate a cleaned space from a finished one."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {detailExamples.map((item) => (
              <li
                key={item.label}
                className="rounded-[14px] border border-border-subtle bg-brand-white p-6"
              >
                <h3 className="font-display text-base font-semibold text-brand-black">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="How we work"
            heading="The same standard, every time."
            sub="Three things that stay consistent across every job, every city, every type of space."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-3 lg:gap-6">
            {howWeWorkItems.map((item) => (
              <li
                key={item.title}
                className="rounded-[14px] border border-border-subtle bg-light-gray p-6"
              >
                <h3 className="font-display text-lg font-semibold text-brand-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm">
            <Link
              href={ROUTES.cleaningProcess}
              className="font-semibold text-brand-blue hover:underline"
            >
              How our cleaning process works →
            </Link>
          </p>
        </div>
      </section>

      <FAQSection
        items={faq}
        heading="About our team and approach"
        defaultOpenFirst
      />

      {/* /faq link */}
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

      <CTASection
        heading="Want to see the difference the details make?"
        sub={`Request a free quote or call ${SITE.phone.display}.`}
        primaryCta={{ label: CTAS.estimate, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

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
