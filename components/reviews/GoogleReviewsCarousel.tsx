'use client';

import { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import GoogleReviewCard from './GoogleReviewCard';
import GoogleReviewSummary from './GoogleReviewSummary';
import type { VerifiedReview } from '@/lib/google-reviews';
import type { CardVariant } from './GoogleReviewCard';

// Respect the user's reduced-motion preference: the marquee does not auto-scroll
// when set — reviews fall back to a manually scrollable row instead.
function useReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      mq.addEventListener('change', onChange);
      return () => mq.removeEventListener('change', onChange);
    },
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => false,
  );
}

type Props = {
  reviews: VerifiedReview[];
  placeUrl: string;
  writeReviewUrl: string | null;
  summary?: { averageRating: number; totalReviewCount: number } | null;
  heading?: string;
  eyebrow?: string;
  variant?: CardVariant;
  autoPlayMs?: number;
  count?: number;
};

const CARD_WRAP = 'w-[clamp(260px,82vw,340px)] shrink-0';
// Enough cards per copy that a single copy always exceeds the widest container,
// so the seamless -50% loop never reveals empty space.
const MIN_CARDS_PER_COPY = 5;

export default function GoogleReviewsCarousel({
  reviews: allReviews,
  placeUrl,
  writeReviewUrl,
  summary,
  heading = 'What our clients say.',
  eyebrow = 'Google Reviews',
  variant = 'dark',
  autoPlayMs = 6000,
  count,
}: Props) {
  const reviews = count !== undefined ? allReviews.slice(0, count) : allReviews;
  const total = reviews.length;
  const isDark = variant === 'dark';
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reducedMotion = useReducedMotion();

  if (!total) return null;

  const sectionBg = isDark ? 'bg-[#0B1120]' : 'bg-light-gray';
  const headingCls = isDark ? 'text-white' : 'text-brand-black';
  const footerLinkCls = isDark
    ? 'border-white/20 text-white hover:border-white/40 hover:bg-white/5'
    : 'border-brand-blue text-brand-blue hover:bg-soft-blue';

  const animate = !reducedMotion && total > 1;
  const paused = hovered || focused;

  // One "copy" = reviews repeated until it comfortably fills the viewport; the
  // track is two copies so translateX(-50%) lands exactly one copy over → seamless.
  const repeats = Math.max(1, Math.ceil(MIN_CARDS_PER_COPY / total));
  const copyCards = Array.from({ length: repeats }, () => reviews).flat();
  const trackCards = [...copyCards, ...copyCards];
  const perCardSec = Math.max((autoPlayMs ?? 6000) / 1000, 3);
  const durationSec = copyCards.length * perCardSec;

  return (
    <section
      className={`${sectionBg} py-10 sm:py-12 lg:py-14`}
      aria-label="Customer reviews"
      aria-roledescription="carousel"
    >
      {/* Marquee keyframes (global, idempotent — same name across instances). */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            '@keyframes ft-reviews-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}',
        }}
      />

      {/* Heading row: H2 left · chip center · buttons right */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="shrink-0">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
              {eyebrow}
            </p>
            <h2
              className={`mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.08] ${headingCls}`}
            >
              {heading}
            </h2>
          </div>
          {summary && (
            <div className="flex-1 flex justify-center">
              <GoogleReviewSummary
                averageRating={summary.averageRating}
                totalReviewCount={summary.totalReviewCount}
                placeUrl={placeUrl}
                isDark={true}
              />
            </div>
          )}
          <div className="flex flex-row items-center gap-3 shrink-0 sm:ml-auto">
            <Link
              href={placeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-[10px] border-2 px-5 py-2.5 text-sm font-semibold font-body transition-colors min-h-[44px] ${footerLinkCls}`}
            >
              View all reviews <span aria-hidden="true">↗</span>
            </Link>
            {writeReviewUrl && (
              <Link
                href={writeReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[10px] bg-brand-blue px-5 py-2.5 text-sm font-semibold font-body text-white hover:bg-brand-blue-hover transition-colors min-h-[44px]"
              >
                Leave us a review <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {animate ? (
        // Continuous auto-scrolling marquee. Pauses on hover/focus over the track
        // only — heading and buttons are unaffected. Only the first `total` cards
        // are real content; the rest are decorative repeats, hidden from assistive
        // tech and removed from the tab order via `inert`.
        <div
          className="overflow-hidden"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={() => setFocused(false)}
        >
          <div
            className="flex w-max items-start gap-5 lg:gap-6"
            style={{
              animation: `ft-reviews-marquee ${durationSec}s linear infinite`,
              animationPlayState: paused ? 'paused' : 'running',
            }}
          >
            {trackCards.map((review, idx) => {
              const decorative = idx >= total;
              return (
                <div
                  key={`${review.id}-${idx}`}
                  className={CARD_WRAP}
                  aria-hidden={decorative ? true : undefined}
                  inert={decorative ? true : undefined}
                >
                  <GoogleReviewCard review={review} variant={variant} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        // Reduced motion (or a single review): a static, manually scrollable row —
        // no autoplay, fully keyboard/touch accessible.
        <div className="overflow-x-auto">
          <div className="flex w-max items-start gap-5 lg:gap-6 snap-x snap-mandatory">
            {reviews.map((review) => (
              <div key={review.id} className={`${CARD_WRAP} snap-start`}>
                <GoogleReviewCard review={review} variant={variant} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
