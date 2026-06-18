'use client';

import { motion } from 'framer-motion';
import { DURATION, EASE_OUT, fadeUp, stagger } from '@/lib/motion';
import GoogleReviewCard from './GoogleReviewCard';
import type { VerifiedReview } from '@/lib/google-reviews';
import type { CardVariant } from './GoogleReviewCard';

type Props = {
  reviews: VerifiedReview[];
  variant?: CardVariant;
  count?: number;
};

export default function GoogleReviewsGrid({ reviews: allReviews, variant = 'light', count }: Props) {
  const reviews = count !== undefined ? allReviews.slice(0, count) : allReviews;
  if (!reviews.length) return null;

  return (
    <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
      variants={stagger(0.07, 0.05)} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
      aria-label={`${reviews.length} verified Google reviews`}>
      {reviews.map((review) => (
        <motion.li key={review.id} variants={fadeUp} transition={{ duration: DURATION.short, ease: EASE_OUT }} className="h-full">
          <GoogleReviewCard review={review} variant={variant} />
        </motion.li>
      ))}
    </motion.ul>
  );
}
