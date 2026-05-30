import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import SectionHeader from '@/components/shared/SectionHeader';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES } from '@/lib/constants/routes';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Team | Scott & Nicole Maland | Final Touch Cleaning',
  description:
    'Final Touch Cleaning Company is owned and run by Scott & Nicole Maland in Southern Nevada. Family-owned, owner-led on every job. Call (702) 444-5077.',
  alternates: { canonical: '/our-team' },
  openGraph: {
    title: 'Our Team | Scott & Nicole Maland | Final Touch Cleaning',
    description:
      'Final Touch Cleaning Company is owned and run by Scott & Nicole Maland in Southern Nevada. Family-owned, owner-led on every job. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/our-team`,
  },
};

const faq = [
  {
    q: 'Are Scott and Nicole Maland personally involved in every cleaning job?',
    a: `${SITE.owners} are directly involved in walkthroughs, scope confirmation, and finish checks. Final Touch is not a franchise or staffing platform with rotating contractors, so the same ownership that sets the standard is accountable for maintaining it on every job.`,
  },
  {
    q: 'Is Final Touch Cleaning Company a franchise?',
    a: 'No. Final Touch is an independently owned and operated cleaning company run by Scott and Nicole Maland. It is not affiliated with any franchise system or national cleaning brand. All decisions, standards, and quality checks come directly from the owners.',
  },
  {
    q: 'Do the owners handle walkthroughs and quotes themselves?',
    a: `Yes. ${SITE.owners} conduct walkthroughs and confirm the scope and quote directly. This keeps expectations clear from the start and avoids the gap that can occur when a salesperson quotes the job and a different team does the work.`,
  },
  {
    q: 'How do I get in touch with Scott or Nicole directly?',
    a: `Call ${SITE.phone.display} or email ${SITE.email.display}. ${SITE.owners} are reachable directly and respond to every inquiry. You can also request a quote through the form on this site.`,
  },
  {
    q: 'What does owner-led mean for the quality of the cleaning?',
    a: `Owner-led means the people responsible for the final result also care about the reputation behind it. ${SITE.owners} apply the same finishing checklist, the same product standards, and the same attention to edges, corners, and overlooked surfaces on every job because their name is on the company.`,
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

// Person schema for Scott & Nicole.
// TODO-VERIFY: Person schema requires explicit owner consent per
// docs/site-os/no-fake-data-policy.md. Omit until confirmed.
// When confirmed, shape: [{ '@type': 'Person', name: 'Scott Maland', jobTitle: 'Owner' },
//                         { '@type': 'Person', name: 'Nicole Maland', jobTitle: 'Owner' }]

const ownerImageSlot = (
  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[16px] border border-border-subtle shadow-[0_8px_28px_rgba(26,26,26,0.08)]">
    <Image
      src="/images/owners/team.webp"
      alt="Scott and Nicole Maland, owners of Final Touch Cleaning Company, Las Vegas NV"
      fill
      sizes="(min-width: 1024px) 45vw, 100vw"
      className="object-cover object-top"
      priority
    />
  </div>
);

export default function OurTeamPage() {
  return (
    <>
      <HeroSection
        eyebrow="Our Team"
        heading="Meet Scott & Nicole Maland, Owners of Final Touch Cleaning Company"
        formSlot={ownerImageSlot}
        sub="Final Touch Cleaning Company is owned and run by Scott & Nicole Maland, a husband-and-wife team based in Southern Nevada. The same owners who set the cleaning standard also answer the phone, walk through the space, and confirm the finish on every job."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
      />

      {/* Owner-led, not absentee */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader heading="Owner-led, not absentee" />
          <p className="mt-8 text-base sm:text-lg text-brand-black leading-relaxed">
            Scott and Nicole built Final Touch around one idea: the people responsible for the
            standard should also be the ones maintaining it. This is not a staffing platform or a
            franchise operation. Every job runs through the same ownership, the same checklist, and
            the same finishing criteria.
          </p>
          <p className="mt-8 text-sm">
            <Link href={ROUTES.about} className="font-semibold text-brand-blue hover:underline">
              Our story and approach →
            </Link>
          </p>
        </div>
      </section>

      {/* Why owner involvement matters on a cleaning job */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader heading="Why owner involvement matters on a cleaning job" />
          <p className="mt-8 text-base sm:text-lg text-brand-black leading-relaxed">
            When the owners are directly involved, accountability is not a policy; it is personal.
            Scott and Nicole care about the result of every job because their name and reputation are
            attached to it. You get the same level of attention whether the job is a single-room deep
            clean or a full post-construction site.
          </p>
        </div>
      </section>

      {/* What you can expect from Scott and Nicole */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader heading="What you can expect from Scott and Nicole" />
          <p className="mt-8 text-base sm:text-lg text-brand-black leading-relaxed">
            Scott and Nicole handle walkthroughs and quotes directly. They confirm the scope before
            work starts and follow up to make sure the result meets the standard. If something is not
            right, they return to correct it. That is the Blue Ribbon Guarantee: 100% satisfaction or
            a return visit within 24 hours.
          </p>
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

      {/* Serving the Las Vegas Valley from Southern Nevada */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader heading="Serving the Las Vegas Valley from Southern Nevada" />
          <p className="mt-8 text-base sm:text-lg text-brand-black leading-relaxed">
            Final Touch operates as a service-area business across Clark County, NV. Scott and Nicole
            serve Las Vegas, Henderson, North Las Vegas, and Boulder City. There is no public
            storefront; the team comes to the client&apos;s location.
          </p>
          <p className="mt-8 text-sm">
            <Link href={ROUTES.services} className="font-semibold text-brand-blue hover:underline">
              See all cleaning services →
            </Link>
          </p>
        </div>
      </section>

      <FAQSection items={faq} heading="Meet the owners" defaultOpenFirst />

      {/* /contact link */}
      <div className="bg-brand-white border-t border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-sm">
            <Link href={ROUTES.contact} className="font-semibold text-brand-blue hover:underline">
              Contact the team →
            </Link>
          </p>
        </div>
      </div>

      <CTASection
        heading="Want to work with Scott and Nicole directly?"
        sub={`Request a free quote or call ${SITE.phone.display}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
