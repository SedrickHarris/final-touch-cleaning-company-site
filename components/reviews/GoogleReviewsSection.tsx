import {
  getVerifiedReviews,
  getVerifiedSummary,
  getPlaceUrl,
  getWriteReviewUrl,
  hasVerifiedReviews,
} from '@/lib/google-reviews';
import GoogleReviewsCarousel from './GoogleReviewsCarousel';
import GoogleReviewsGrid from './GoogleReviewsGrid';
import GoogleReviewSummary from './GoogleReviewSummary';
import type { CardVariant } from './GoogleReviewCard';
import Link from 'next/link';

type SectionVariant = 'carousel' | 'grid';

type Props = {
  variant?: SectionVariant;
  cardVariant?: CardVariant;
  heading?: string;
  eyebrow?: string;
  autoPlayMs?: number;
  count?: number;
  showSummary?: boolean;
};

function NeutralFallback({ placeUrl }: { placeUrl: string }) {
  return (
    <section className="bg-light-gray py-16 sm:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 text-center">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">Google Reviews</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-brand-black">Read our reviews on Google.</h2>
        <p className="mt-4 text-base text-muted leading-relaxed max-w-xl mx-auto">
          Final Touch Cleaning Company has customer reviews on Google. Visit the listing to read what customers across Clark County, NV say about the cleaning service.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={placeUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] bg-brand-blue px-6 py-3 text-sm font-semibold font-body text-white hover:bg-brand-blue-hover transition-colors min-h-[44px]">
            Read reviews on Google <span aria-hidden="true">↗</span>
          </Link>
          {getWriteReviewUrl() && (
            <Link href={getWriteReviewUrl()!} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] border-2 border-brand-blue px-6 py-3 text-sm font-semibold font-body text-brand-blue hover:bg-soft-blue transition-colors min-h-[44px]">
              Leave a review <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default function GoogleReviewsSection({
  variant = 'carousel',
  cardVariant,
  heading,
  eyebrow = 'Google Reviews',
  autoPlayMs = 6000,
  count,
  showSummary = true,
}: Props) {
  const placeUrl = getPlaceUrl();

  if (!hasVerifiedReviews()) {
    return <NeutralFallback placeUrl={placeUrl} />;
  }

  const reviews = getVerifiedReviews(count);
  const summary = getVerifiedSummary();
  const writeReviewUrl = getWriteReviewUrl();
  const resolvedCardVariant: CardVariant = cardVariant ?? (variant === 'carousel' ? 'dark' : 'light');
  const defaultHeading = variant === 'carousel' ? 'What our clients say.' : 'Verified customer reviews.';
  const resolvedHeading = heading ?? defaultHeading;

  if (variant === 'grid') {
    return (
      <section className="bg-brand-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="mb-10 flex flex-col gap-4">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">{eyebrow}</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-black">{resolvedHeading}</h2>
            {showSummary && summary && (
              <GoogleReviewSummary averageRating={summary.averageRating!} totalReviewCount={summary.totalReviewCount!} placeUrl={placeUrl} isDark={false} />
            )}
          </div>
          <GoogleReviewsGrid reviews={reviews} variant={resolvedCardVariant} />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href={placeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] border-2 border-brand-blue px-6 py-3 text-sm font-semibold font-body text-brand-blue hover:bg-soft-blue transition-colors min-h-[44px]"
            >
              View all reviews on Google <span aria-hidden="true">↗</span>
            </Link>
            {writeReviewUrl && (
              <Link
                href={writeReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[10px] bg-brand-blue px-6 py-3 text-sm font-semibold font-body text-white hover:bg-brand-blue-hover transition-colors min-h-[44px]"
              >
                Leave us a review <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <GoogleReviewsCarousel reviews={reviews} placeUrl={placeUrl} writeReviewUrl={writeReviewUrl}
      summary={summary ? { averageRating: summary.averageRating!, totalReviewCount: summary.totalReviewCount! } : null} heading={resolvedHeading} eyebrow={eyebrow} variant={resolvedCardVariant} autoPlayMs={autoPlayMs} />
  );
}
