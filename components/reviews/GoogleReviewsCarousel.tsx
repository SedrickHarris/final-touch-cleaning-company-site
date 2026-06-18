'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { DURATION, EASE_OUT } from '@/lib/motion';
import GoogleReviewCard from './GoogleReviewCard';
import type { VerifiedReview } from '@/lib/google-reviews';
import type { CardVariant } from './GoogleReviewCard';

type Props = {
  reviews: VerifiedReview[];
  placeUrl: string;
  writeReviewUrl: string | null;
  heading?: string;
  eyebrow?: string;
  variant?: CardVariant;
  autoPlayMs?: number;
  count?: number;
};

export default function GoogleReviewsCarousel({
  reviews: allReviews,
  placeUrl,
  writeReviewUrl,
  heading = 'What our clients say.',
  eyebrow = 'Google Reviews',
  variant = 'dark',
  autoPlayMs = 6000,
  count,
}: Props) {
  const reviews = count !== undefined ? allReviews.slice(0, count) : allReviews;
  const total = reviews.length;
  const isDark = variant === 'dark';
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((idx: number) => setActive(((idx % total) + total) % total), [total]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);
  const next = useCallback(() => goTo(active + 1), [active, goTo]);

  useEffect(() => {
    if (!autoPlayMs || paused || total <= 1) return;
    intervalRef.current = setInterval(() => setActive((a) => (a + 1) % total), autoPlayMs);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [autoPlayMs, paused, total]);

  if (!reviews.length) return null;

  const sectionBg = isDark ? 'bg-[#0B1120]' : 'bg-light-gray';
  const headingCls = isDark ? 'text-white' : 'text-brand-black';
  const arrowCls = isDark ? 'bg-white/10 hover:bg-white/20 text-white border-white/10' : 'bg-brand-white hover:bg-soft-blue text-brand-black border-border-subtle';
  const dotActiveCls = 'bg-brand-blue w-6 h-2';
  const dotInactiveCls = isDark ? 'bg-white/20 w-2 h-2' : 'bg-border-subtle w-2 h-2';
  const footerLinkCls = isDark ? 'border-white/20 text-white hover:border-white/40 hover:bg-white/5' : 'border-brand-blue text-brand-blue hover:bg-soft-blue';

  const windowSize = Math.min(3, total);
  const windowedReviews = Array.from({ length: windowSize }, (_, i) => reviews[(active + i) % total]);

  return (
    <section className={`${sectionBg} py-16 sm:py-20 lg:py-24`} aria-label="Customer reviews"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">{eyebrow}</p>
            <h2 className={`mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.08] ${headingCls}`}>{heading}</h2>
          </div>
          {total > 1 && (
            <div className="flex items-center gap-3 shrink-0">
              <button type="button" onClick={prev} aria-label="Previous review" className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${arrowCls}`}>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button type="button" onClick={next} aria-label="Next review" className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${arrowCls}`}>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 overflow-hidden" aria-live="polite" aria-atomic="false">
          <AnimatePresence mode="popLayout" initial={false}>
            {windowedReviews.map((review, i) => (
              <motion.div key={`${active}-${i}`}
                initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}
                transition={{ duration: DURATION.short, ease: EASE_OUT, delay: i * 0.06 }}
                className={`${i >= 2 ? 'hidden lg:block' : ''} ${i >= 1 ? 'hidden sm:block' : ''}`}>
                <GoogleReviewCard review={review} variant={variant} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {total > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8" role="tablist" aria-label="Review navigation">
            {reviews.map((_, i) => (
              <button key={i} type="button" role="tab" aria-selected={i === active}
                aria-label={`Go to review ${i + 1} of ${total}`} onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-200 ${i === active ? dotActiveCls : dotInactiveCls}`} />
            ))}
          </div>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link href={placeUrl} target="_blank" rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-[10px] border-2 px-6 py-3 text-sm font-semibold font-body transition-colors min-h-[44px] ${footerLinkCls}`}>
            View all reviews on Google <span aria-hidden="true">↗</span>
          </Link>
          {writeReviewUrl && (
            <Link href={writeReviewUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand-blue px-6 py-3 text-sm font-semibold font-body text-white hover:bg-brand-blue-hover transition-colors min-h-[44px]">
              Leave us a review <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
