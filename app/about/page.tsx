import type { Metadata } from 'next';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import SectionHeader from '@/components/shared/SectionHeader';
import TrustBar from '@/components/shared/TrustBar';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'About',
  description: `Final Touch Cleaning Company is owned and run by ${SITE.owners}. Family-owned cleaning across ${SITE.serviceArea.county}, Nevada. Detail-focused work, local team, free quotes.`,
  alternates: { canonical: '/about' },
};

const trustItems = [
  { label: 'Family owned', sub: SITE.owners },
  { label: 'Local team', sub: 'Based in Southern Nevada' },
  { label: 'Detail-focused', sub: 'The corners other crews skip' },
  { label: 'Free quotes', sub: 'No-pressure walkthroughs' },
];

const faq = [
  {
    q: 'Who owns Final Touch Cleaning Company?',
    a: `${SITE.owners} own and run Final Touch. It's a family-run cleaning company based in Southern Nevada, not a franchise.`,
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
    a: 'It means we finish what other crews skip: baseboards, vents, switch plates, edges, and corners. The final ten percent of a clean is what makes a space feel done, and that\'s where we focus.',
  },
  {
    q: 'What does family-owned mean for the work?',
    a: `It means ${SITE.owners} are accountable for every job. The same owners who set the standard answer the phone, do walkthroughs, and check the finish.`,
  },
  {
    q: 'Where is Final Touch based?',
    a: `Final Touch is based in Southern Nevada and operates as a service-area business. We come to you. There's no public storefront to visit, but we do serve every part of ${SITE.serviceArea.county}.`,
  },
  {
    q: 'What makes Final Touch different from a basic cleaning service?',
    a: 'We focus on the finishing details that most crews rush past: edges, corners, vents, baseboards, switch plates, the inside of the oven. Same team and same checklist on every job. No upsells, no surprise add-ons.',
  },
];

// Organization schema. NOTE: no streetAddress because Final Touch is a
// service-area-only business per docs/site-os/no-fake-data-policy.md sec 2.
// TODO-VERIFY: license number, insurance carrier, foundingDate, social
// profiles (sameAs). Add only after owner-supplied verification.
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone.href.replace('tel:', ''),
  email: SITE.email.display,
  areaServed: [SITE.serviceArea.county, ...SITE.serviceArea.cities].map((name) => ({
    '@type': 'Place',
    name: `${name}, ${SITE.serviceArea.stateAbbr}`,
  })),
  founder: SITE.owners.split(' & ').map((name) => ({ '@type': 'Person', name })),
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
    label: 'Baseboards & door frames',
    body:
      'Wiped, not just dusted. The line of grime at the top of a baseboard is one of the first things a buyer or new tenant notices.',
  },
  {
    label: 'Vents & switch plates',
    body:
      'HVAC return covers, ceiling vents, light-switch plates, outlet covers. The small surfaces that quietly read as neglected when they\'re skipped.',
  },
  {
    label: 'Edges & corners',
    body:
      'Behind toilets, under sinks, the corner where the tile meets the wall, the inside of the oven door. The places where dust and residue collect.',
  },
  {
    label: 'Glass, hardware, & finishes',
    body:
      'Streak-free glass, polished fixtures, fingerprints off cabinet pulls. The finish that catches light and makes a space feel done.',
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        eyebrow="About Final Touch"
        heading="A family-owned cleaning company built on the details."
        sub={`${SITE.owners} run Final Touch from right here in Southern Nevada. We serve ${SITE.serviceArea.county} with the kind of detail-focused work that makes a space feel finished, not just cleaned.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
      />

      <TrustBar items={trustItems} />

      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader eyebrow="Our story" heading="Owner-led, owner-built." />
          <div className="mt-8 space-y-5 text-base sm:text-lg text-brand-black leading-relaxed">
            <p>
              Final Touch is a family operation. {SITE.owners} run it together.
              Not a franchise, not a national chain, not a marketplace of
              subcontractors. The same people who answer the phone set the
              standard for every job.
            </p>
            <p>
              We started Final Touch because the average cleaning crew rushes
              the last ten percent of a job: the baseboards, the vents, the
              switch plates, the inside of the oven, the corners behind the
              toilet. That final ten percent is what makes a space feel
              finished, and that&apos;s where we put our focus.
            </p>
            <p>
              We serve {SITE.serviceArea.cities.slice(0, 3).join(', ')}, and{' '}
              {SITE.serviceArea.cities[3]}. Every part of {SITE.serviceArea.county},
              Nevada. We treat every home and every business like our own.
            </p>
          </div>
        </div>
      </section>

      {/* What "small details" actually means */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="What we mean by details"
            heading="The finish, in concrete terms."
            sub={SITE.coreMessage}
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6">
            {detailExamples.map((item) => (
              <li
                key={item.label}
                className="rounded-[14px] border border-border-subtle bg-brand-white p-6"
              >
                <h3 className="font-display text-lg sm:text-xl font-semibold text-brand-black tracking-tight">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted max-w-2xl">
            None of these are upsells. They&apos;re part of every job: the
            finishing standard that makes a space feel done, not just wiped.
          </p>
        </div>
      </section>

      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="How we work"
            heading="Three things we promise."
            sub="No theatrics, no upsells, no surprise add-ons. Just the things that make a clean a clean."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black tracking-tight">
                Honest pricing
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Free walkthroughs, real numbers, no surprise add-ons. If a job
                is going to cost more, you hear it before we start, not after.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black tracking-tight">
                Detail-focused work
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Baseboards, vents, switch plates, edges, and corners. The places
                most crews skip are the places we focus on.
              </p>
            </div>
            <div className="rounded-[14px] border border-border-subtle bg-brand-white p-6">
              <h3 className="font-display text-xl font-semibold text-brand-black tracking-tight">
                Local team
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Owner-led and locally based. Call{' '}
                <a
                  href={SITE.phone.href}
                  className="text-brand-blue font-semibold tabular-nums hover:underline"
                >
                  {SITE.phone.display}
                </a>{' '}
                and you talk to someone who knows the job, not a call center.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        items={faq}
        heading="About our team and approach"
        defaultOpenFirst
      />

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
