// lib/google-reviews.ts
//
// Single access layer for the GBP reviews data file.
// All components and pages import from here — never directly from
// data/google-reviews.json. This keeps the gating logic in one place.
//
// Gating rule (matches docs/site-os/no-fake-data-policy.md §9):
//   hasVerifiedReviews() returns true ONLY when:
//     1. Top-level "verified" flag is true
//     2. Every review object has verified: true AND permissionToPublish: true
//   If either check fails, all review-consuming components receive an empty
//   array and render the neutral trust fallback. No placeholders, no fake stars.
//
// AggregateRating schema (see app/reviews/page.tsx):
//   Only emit AggregateRating JSON-LD when hasVerifiedReviews() is true
//   AND summary.averageRating and summary.totalReviewCount are non-null.
//   Values come from this file, never from hardcoded estimates.

import reviewsData from '@/data/google-reviews.json';

// --------------------------------------------------------------------------
// Types
// --------------------------------------------------------------------------

export type VerifiedReview = {
  id: string;
  reviewerName: string;
  avatarUrl: string | null;
  reviewText: string;
  starCount: 1 | 2 | 3 | 4 | 5;
  reviewDate: string;
  publishedAt: string;
  city: string;
  reviewUrl: string | null;
  verified: boolean;
  permissionToPublish: boolean;
};

export type ReviewsSummary = {
  averageRating: number | null;
  totalReviewCount: number | null;
  lastFetchedAt: string | null;
};

export type ReviewsData = {
  verified: boolean;
  lastVerifiedAt: string | null;
  source: string;
  placeId: string | null;
  placeUrl: string | null;
  writeReviewUrl: string | null;
  summary: ReviewsSummary;
  reviews: VerifiedReview[];
};

// --------------------------------------------------------------------------
// Access layer
// --------------------------------------------------------------------------

const data = reviewsData as ReviewsData;

export function hasVerifiedReviews(): boolean {
  if (!data.verified) return false;
  if (!data.reviews.length) return false;
  return data.reviews.every((r) => r.verified === true && r.permissionToPublish === true);
}

export function getVerifiedReviews(count?: number): VerifiedReview[] {
  if (!hasVerifiedReviews()) return [];
  const approved = data.reviews.filter((r) => r.verified && r.permissionToPublish);
  return count !== undefined ? approved.slice(0, count) : approved;
}

export function getVerifiedSummary(): ReviewsSummary | null {
  if (!hasVerifiedReviews()) return null;
  const { averageRating, totalReviewCount, lastFetchedAt } = data.summary;
  if (averageRating === null || totalReviewCount === null) return null;
  return { averageRating, totalReviewCount, lastFetchedAt };
}

export function getPlaceUrl(): string {
  return data.placeUrl ?? 'https://www.google.com/maps/search/Final+Touch+Cleaning+Company';
}

export function getWriteReviewUrl(): string | null {
  return data.writeReviewUrl ?? null;
}
