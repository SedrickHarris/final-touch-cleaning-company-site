'use client';

import Link from 'next/link';
import type { VerifiedReview } from '@/lib/google-reviews';
import { getPlaceUrl } from '@/lib/google-reviews';

export type CardVariant = 'dark' | 'light';

type Props = {
  review: VerifiedReview;
  variant?: CardVariant;
};

const AVATAR_COLORS = [
  { bg: '#1A5FB4', text: '#FFFFFF' },
  { bg: '#164F96', text: '#FFFFFF' },
  { bg: '#1F8A5B', text: '#FFFFFF' },
  { bg: '#2563EB', text: '#FFFFFF' },
  { bg: '#0F4C81', text: '#FFFFFF' },
];

function avatarColor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function getInitial(name: string): string {
  return (name.trim()[0] ?? '?').toUpperCase();
}

function StarRow({ count }: { count: 1 | 2 | 3 | 4 | 5 }) {
  return (
    <span aria-label={`${count} out of 5 stars`} className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
          fill={i < count ? '#FBBF24' : 'none'} stroke={i < count ? '#FBBF24' : '#6B7280'}
          strokeWidth="1.2" className="w-4 h-4 shrink-0">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

function GoogleBadge({ isDark }: { isDark: boolean }) {
  return (
    <span aria-label="Google review" className={`inline-flex items-center gap-1 text-[11px] font-semibold font-body uppercase tracking-wide ${isDark ? 'text-white/40' : 'text-muted'}`}>
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className="w-3.5 h-3.5 shrink-0">
        <path fill="#4285F4" d="M17.64 9.2c0-.638-.057-1.252-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.258h2.908C16.658 14.074 17.64 11.84 17.64 9.2z" />
        <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.185l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" />
        <path fill="#FBBC05" d="M3.964 10.706A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" />
        <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.962l3.007 2.332C4.672 5.163 6.656 3.58 9 3.58z" />
      </svg>
      Google
    </span>
  );
}

export default function GoogleReviewCard({ review, variant = 'dark' }: Props) {
  const isDark = variant === 'dark';
  const color = avatarColor(review.reviewerName);
  const linkUrl = review.reviewUrl ?? getPlaceUrl();

  return (
    <article className={`flex flex-col gap-4 rounded-[14px] border p-6 h-full ${isDark ? 'bg-[#111827] border-white/10' : 'bg-brand-white border-border-subtle shadow-[0_2px_12px_rgba(26,26,26,0.04)]'}`}>
      <div className="flex items-center gap-3">
        {review.avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={review.avatarUrl} alt={`${review.reviewerName} Google profile`} className="w-10 h-10 rounded-full object-cover shrink-0" loading="lazy" />
        ) : (
          <span aria-hidden="true" className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-sm font-bold font-body select-none" style={{ backgroundColor: color.bg, color: color.text }}>
            {getInitial(review.reviewerName)}
          </span>
        )}
        <div className="min-w-0">
          <p className={`text-sm font-semibold font-body leading-tight truncate ${isDark ? 'text-white' : 'text-brand-black'}`}>{review.reviewerName}</p>
          <p className={`text-xs font-body ${isDark ? 'text-white/50' : 'text-muted'}`}>{review.reviewDate}{review.city ? ` · ${review.city}` : ''}</p>
        </div>
      </div>
      <StarRow count={review.starCount} />
      {review.reviewText ? (
        <p className={`text-sm font-body leading-relaxed flex-1 ${isDark ? 'text-white/80' : 'text-brand-black/80'}`}>&ldquo;{review.reviewText}&rdquo;</p>
      ) : (
        <p className={`text-sm font-body italic flex-1 ${isDark ? 'text-white/40' : 'text-muted'}`}>Rating only — no written review.</p>
      )}
      <div className={`flex items-center justify-between pt-3 mt-auto border-t ${isDark ? 'border-white/10' : 'border-border-subtle'}`}>
        <GoogleBadge isDark={isDark} />
        <Link href={linkUrl} target="_blank" rel="noopener noreferrer"
          className={`text-xs font-semibold font-body transition-colors ${isDark ? 'text-brand-blue hover:text-[#EAF3FF]' : 'text-brand-blue hover:text-brand-blue-hover'}`}
          aria-label={`View ${review.reviewerName}'s review on Google (opens in new tab)`}>
          View on Google ↗
        </Link>
      </div>
    </article>
  );
}
