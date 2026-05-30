import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import SectionHeader from '@/components/shared/SectionHeader';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'Customer Reviews | Final Touch Cleaning | Clark County, NV',
  description:
    'Customer reviews for Final Touch Cleaning Company, serving Clark County, NV. Family-owned, owner-led, detail-focused. Call (702) 444-5077.',
  alternates: { canonical: '/reviews' },
  openGraph: {
    title: 'Customer Reviews | Final Touch Cleaning | Clark County, NV',
    description:
      'Read verified Google reviews for Final Touch Cleaning Company serving Las Vegas, Henderson, North Las Vegas, and Boulder City, NV.',
    type: 'website',
    url: `${SITE.url}/reviews`,
  },
};

// Both URLs confirmed by owners 2026-05-29.
const GBP_URL = 'https://www.google.com/maps?cid=5303198646776788086';
const GBP_REVIEW_URL = 'https://g.page/r/CXZ0dloSv5hJEBI/review';

type ReviewCard = {
  reviewerName: string;
  reviewText: string;
  starCount: 1 | 2 | 3 | 4 | 5;
  reviewDate: string;
  city: string;
};

// All three reviews supplied by owners 2026-05-29.
// Source: Final Touch Google Business Profile
// (https://www.google.com/maps?cid=5303198646776788086)
// Review text is verbatim from Google. Do not alter.
// City field: "Clark County, NV" (specific city not stated in reviews).
const reviews: ReviewCard[] = [
  {
    reviewerName: 'Carmen Mascolo',
    reviewText:
      'Scott and Nicole were punctual, professional and very detail oriented. Place sparkled when they finished! I would recommend them to anyone!',
    starCount: 5,
    reviewDate: 'May 2026',
    city: 'Clark County, NV',
  },
  {
    reviewerName: 'Deb Kollpainter',
    reviewText:
      'I recommend this company highly. I needed some assistance cleaning my home due to illness. I hadn\'t been able to clean for about a month. Scott and Nicole came and cleaned my house even better than I could clean it on my best day. They are pleasant and trustworthy, Cordial and pay close attention to details getting all the nooks and crannies clean as a whistle. If you need a really good cleaning service reach out to Final Touch. Best cleaning service I\'ve had in the past 30 years',
    starCount: 5,
    reviewDate: 'May 2026',
    city: 'Clark County, NV',
  },
  {
    reviewerName: 'Sara Green',
    reviewText:
      'Scott and Nicole of Final Touch Cleaning are excellent cleaners … they are professional and responsible… If they miss anything they will go back and make sure it is taken care of … they do what they say they are going to do. I will definitely be calling them back to do more cleaning jobs!',
    starCount: 5,
    reviewDate: 'May 2026',
    city: 'Clark County, NV',
  },
];

// All 3 reviews confirmed. Set to true.
const REVIEWS_READY = true;

function StarDisplay({ count }: { count: 1 | 2 | 3 | 4 | 5 }) {
  return (
    <span aria-label={`${count} out of 5 stars`} className="text-yellow-500 text-sm">
      {'★'.repeat(count)}{'☆'.repeat(5 - count)}
    </span>
  );
}

const faq = [
  {
    q: 'Where can I read reviews for Final Touch Cleaning Company?',
    a: `Final Touch reviews are available on Google. Search "Final Touch Cleaning Company Las Vegas" to find the Google Business Profile with customer reviews. This page also displays a selection of verified Google reviews from customers across ${SITE.serviceArea.county}, NV.`,
  },
  {
    q: 'Does Final Touch Cleaning Company have a Google Business Profile?',
    a: `Yes. Final Touch has a Google Business Profile for the Las Vegas Valley service area. Search for Final Touch Cleaning Company on Google to read reviews, confirm the service area, and get contact information including the direct phone number ${SITE.phone.display}.`,
  },
  {
    q: 'How do I leave a review for Final Touch Cleaning Company?',
    a: `The easiest way to leave a review is through the Google Business Profile. Search "Final Touch Cleaning Company" on Google and select "Write a review" from the listing. Your honest feedback helps other ${SITE.serviceArea.county} residents and businesses find a cleaning team they can trust.`,
  },
  {
    q: 'Are the reviews on this page verified?',
    a: 'Yes. The reviews displayed on this page come directly from the Final Touch Google Business Profile and are posted by verified Google users. No reviews on this page are invented, anonymized, or modified. Visit the Google listing for the complete and current review history.',
  },
];

// FAQPage: generated from the faq array above.
// Self-serving rating and review schema are intentionally omitted per
// build-status-reconciliation.md §4, even with real reviews present.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function ReviewsPage() {
  return (
    <>
      <HeroSection
        eyebrow="Customer Reviews"
        image={{
          src: '/images/builders/reviews-commercial-cleaning-hero-image.webp',
          alt: 'Customer reviewed cleaning service - Final Touch Cleaning Company, Clark County NV',
        }}
        heading="What Customers Say About Final Touch Cleaning Company"
        sub="Final Touch Cleaning Company receives reviews directly from customers across Clark County, NV. The reviews below come from verified Google users in Las Vegas, Henderson, North Las Vegas, and Boulder City. Read what customers say, then request a free quote or call (702) 444-5077."
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
      />

      {/* Reviews */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-16 sm:py-20 lg:py-24">
          <SectionHeader eyebrow="Google Reviews" heading="Verified customer reviews." />
          <p className="mt-2 text-sm text-muted">
            <a
              href={GBP_URL}
              className="font-semibold text-brand-blue hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              5.0 stars on Google
            </a>
          </p>
          {REVIEWS_READY && reviews.length > 0 && (
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {reviews.map((review) => (
                <li
                  key={review.reviewerName}
                  className="rounded-[14px] border border-border-subtle bg-brand-white p-6 flex flex-col"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-display text-base font-semibold text-brand-black">
                      {review.reviewerName}
                    </p>
                    <StarDisplay count={review.starCount} />
                  </div>
                  <p className="mt-3 text-sm text-muted leading-relaxed flex-1">
                    {review.reviewText}
                  </p>
                  <p className="mt-4 text-xs text-muted">
                    {review.city} · {review.reviewDate}
                  </p>
                </li>
              ))}
            </ul>
          )}
          <p className="mt-8 text-sm">
            <a
              href={GBP_URL}
              className="font-semibold text-brand-blue hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read all reviews on Google →
            </a>
          </p>
        </div>
      </section>

      {/* Why customers choose Final Touch */}
      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Why Final Touch"
            heading="Why customers choose Final Touch."
          />
          <p className="mt-6 text-base sm:text-lg text-brand-black leading-relaxed">
            Customers who hire Final Touch are choosing a family-owned cleaning company run directly
            by Scott and Nicole Maland. Every job runs on the same finishing checklist, with the same
            team and the same owner-led quality standard. The Blue Ribbon Guarantee means that if the
            result does not meet the standard, Final Touch returns within 24 hours to make it right.
          </p>
          <p className="mt-8 text-sm">
            <Link href={ROUTES.ourTeam} className="font-semibold text-brand-blue hover:underline">
              Meet Scott and Nicole →
            </Link>
          </p>
          <p className="mt-3 text-sm">
            <Link href={ROUTES.services} className="font-semibold text-brand-blue hover:underline">
              See our cleaning services →
            </Link>
          </p>
          <p className="mt-3 text-sm">
            <Link href={ROUTES.about} className="font-semibold text-brand-blue hover:underline">
              Learn about Final Touch →
            </Link>
          </p>
        </div>
      </section>

      {/* Share your experience */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Share your experience"
            heading="Leave a review for Final Touch."
          />
          <p className="mt-6 text-base sm:text-lg text-brand-black leading-relaxed">
            If Final Touch cleaned your space, your feedback helps other Clark County residents and
            businesses find a reliable cleaning team. Leave a review on the Final Touch Google
            Business Profile.
          </p>
          <p className="mt-6">
            <a
              href={GBP_REVIEW_URL}
              className="inline-flex items-center font-semibold text-brand-blue hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leave a review on Google →
            </a>
          </p>
          <p className="mt-4">
            <Link href={ROUTES.contact} className="font-semibold text-brand-blue hover:underline">
              Contact the team →
            </Link>
          </p>
        </div>
      </section>

      <FAQSection
        items={faq}
        heading="Questions about our reviews"
        defaultOpenFirst
      />

      {/* FAQ footer link */}
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
        heading="Ready to experience the difference?"
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
