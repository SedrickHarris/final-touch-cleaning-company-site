'use client';

import Link from 'next/link';

type Props = {
  averageRating: number;
  totalReviewCount: number;
  placeUrl: string;
  isDark?: boolean;
};

function StarRow({ rating, isDark }: { rating: number; isDark: boolean }) {
  return (
    <span aria-label={`${rating} out of 5 stars`} className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => {
        const filled = Math.min(1, Math.max(0, rating - i));
        const pct = Math.round(filled * 100);
        return (
          <span key={i} className="relative w-5 h-5">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="absolute inset-0 w-5 h-5"
              fill="none" stroke={isDark ? 'rgba(255,255,255,0.2)' : '#D1D5DB'} strokeWidth="1.2">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {pct > 0 && (
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="absolute inset-0 w-5 h-5"
                fill="#FBBF24" style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            )}
          </span>
        );
      })}
    </span>
  );
}

export default function GoogleReviewSummary({ averageRating, totalReviewCount, placeUrl, isDark = false }: Props) {
  const display = averageRating.toFixed(1);
  return (
    <div className={`inline-flex flex-wrap items-center gap-3 rounded-[10px] border px-5 py-3 ${isDark ? 'bg-white/5 border-white/10' : 'bg-brand-white border-border-subtle shadow-[0_2px_8px_rgba(26,26,26,0.04)]'}`}>
      <span className={`text-2xl font-bold font-body tabular-nums ${isDark ? 'text-white' : 'text-brand-black'}`}>{display}</span>
      <StarRow rating={averageRating} isDark={isDark} />
      <span className={`text-sm font-body ${isDark ? 'text-white/60' : 'text-muted'}`}>{totalReviewCount} {totalReviewCount === 1 ? 'review' : 'reviews'} on</span>
      <Link href={placeUrl} target="_blank" rel="noopener noreferrer"
        className={`inline-flex items-center gap-1 text-sm font-semibold font-body transition-colors ${isDark ? 'text-white/80 hover:text-white' : 'text-brand-blue hover:text-brand-blue-hover'}`}
        aria-label={`View all ${totalReviewCount} reviews on Google (opens in new tab)`}>
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className="w-4 h-4 shrink-0">
          <path fill="#4285F4" d="M17.64 9.2c0-.638-.057-1.252-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.258h2.908C16.658 14.074 17.64 11.84 17.64 9.2z" />
          <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.185l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" />
          <path fill="#FBBC05" d="M3.964 10.706A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" />
          <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.962l3.007 2.332C4.672 5.163 6.656 3.58 9 3.58z" />
        </svg>
        Google ↗
      </Link>
    </div>
  );
}
