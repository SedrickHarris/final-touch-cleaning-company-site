import type { Metadata } from 'next';
import HeroSection from '@/components/shared/HeroSection';
import CTASection from '@/components/shared/CTASection';
import FAQSection from '@/components/shared/FAQSection';
import Breadcrumb from '@/components/shared/Breadcrumb';
import GoogleReviewsSection from '@/components/reviews/GoogleReviewsSection';
import { getPlaceUrl } from '@/lib/google-reviews';
import { CTAS, SITE } from '@/lib/constants/site';
import { ROUTES } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: { absolute: 'Commercial Cleaning Reviews | Las Vegas, NV' },
  description:
    'Family-owned commercial cleaning reviews for Final Touch Cleaning Company, serving Las Vegas and the Las Vegas Valley, NV. Call (702) 444-5077.',
  alternates: { canonical: '/reviews' },
  openGraph: {
    title: 'Commercial Cleaning Reviews | Final Touch | Las Vegas, NV',
    description:
      'Family-owned commercial cleaning reviews for Final Touch Cleaning Company, serving Las Vegas and the Las Vegas Valley, NV. Call (702) 444-5077.',
    type: 'website',
    url: `${SITE.url}/reviews`,
  },
};

const GBP_URL = getPlaceUrl();
const GBP_REVIEW_URL = 'https://g.page/r/CXZ0dloSv5hJEBI/review';

const faq = [
  {
    q: 'Where can I read reviews for Final Touch Cleaning Company?',
    a: `Final Touch reviews are available on Google. Search "Final Touch Cleaning Company Las Vegas" to find the Google Business Profile with customer reviews. This page also displays verified Google reviews from customers across ${SITE.serviceArea.county}, NV.`,
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
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Reviews' }]} />

      <HeroSection
        eyebrow="Customer Reviews"
        image={{
          src: '/images/builders/reviews-commercial-cleaning-hero-image.webp',
          alt: 'Customer reviewed cleaning service - Final Touch Cleaning Company, Clark County NV',
        }}
        heading="What Commercial Cleaning Clients Say About Final Touch"
        sub={`Final Touch Cleaning Company receives reviews directly from customers across the Las Vegas Valley. The reviews below come from verified Google users in Las Vegas, Henderson, North Las Vegas, and Boulder City. Read what customers say, then request a free quote or call ${SITE.phone.display}.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
      />

      <GoogleReviewsSection variant="grid" heading="Verified customer reviews." eyebrow="Google Reviews" showSummary />

      <section className="bg-light-gray">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-brand-black">About these reviews</h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            Every review displayed on this page comes directly from the Final Touch Cleaning Company Google Business Profile. Reviews are posted by verified Google users who hired Final Touch for cleaning services across Clark County, NV, including Las Vegas, Henderson, North Las Vegas, and Boulder City. No reviews on this page are invented, altered, or anonymized. Visit the{' '}
            <a href={GBP_URL} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Final Touch Google listing</a>{' '}
            to see the complete and current review history, or{' '}
            <a href={GBP_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">leave a review</a>{' '}
            if you have used the service.
          </p>
        </div>
      </section>

      <FAQSection heading="Common questions about Final Touch reviews." items={faq} defaultOpenFirst />

      <CTASection
        heading="Request a free cleaning quote."
        sub={`Join customers across ${SITE.serviceArea.county}, NV who trust Final Touch for detail-focused, owner-led cleaning. Call ${SITE.phone.display} or request a free estimate online.`}
        primaryCta={{ label: CTAS.primary, href: ROUTES.freeQuote }}
        secondaryCta={{ label: `${CTAS.call} · ${SITE.phone.display}`, href: SITE.phone.href }}
        tone="blue"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
