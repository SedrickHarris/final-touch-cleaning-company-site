'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { DURATION, EASE_OUT, fadeUp, stagger } from '@/lib/motion';

type CTA = { label: string; href: string };

type Props = {
  eyebrow?: string;
  heading: string;
  /** Optional substring of `heading` to render in italic Fraunces for editorial emphasis. */
  emphasis?: string;
  sub?: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
  /** Right-column slot — typically a quote form. Presence implies split layout. */
  formSlot?: ReactNode;
  /** Force layout. Defaults to 'split' when `formSlot` is provided. */
  layout?: 'standard' | 'split';
  /** Container width. Split layout defaults to 'wide'. */
  container?: 'normal' | 'wide';
};

function renderHeading(heading: string, emphasis?: string) {
  if (!emphasis) return heading;
  const idx = heading.toLowerCase().indexOf(emphasis.toLowerCase());
  if (idx < 0) return heading;
  const before = heading.slice(0, idx);
  const match = heading.slice(idx, idx + emphasis.length);
  const after = heading.slice(idx + emphasis.length);
  return (
    <>
      {before}
      <em className="italic font-medium">{match}</em>
      {after}
    </>
  );
}

export default function HeroSection({
  eyebrow,
  heading,
  emphasis,
  sub,
  primaryCta,
  secondaryCta,
  formSlot,
  layout,
  container,
}: Props) {
  const isSplit = layout === 'split' || (layout !== 'standard' && !!formSlot);
  const isWide = container === 'wide' || (container !== 'normal' && isSplit);

  const containerClass = isWide
    ? 'max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12'
    : 'max-w-7xl px-4 sm:px-6 lg:px-8';

  const headingSize = isSplit
    ? 'text-[2.25rem] sm:text-5xl lg:text-[3.25rem] xl:text-6xl 2xl:text-7xl'
    : 'text-[2.25rem] sm:text-5xl lg:text-6xl xl:text-7xl';

  return (
    <section className="relative overflow-hidden bg-light-gray">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_15%_15%,rgba(26,95,180,0.10)_0%,rgba(26,95,180,0)_60%)]"
      />
      <div
        className={`relative mx-auto ${containerClass} py-16 sm:py-20 lg:py-24 xl:py-28`}
      >
        <div
          className={
            isSplit
              ? 'grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.75fr)] gap-10 lg:gap-14 xl:gap-20 items-start'
              : ''
          }
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger(0.08, 0.05)}
            className={isSplit ? '' : 'max-w-3xl'}
          >
            {eyebrow && (
              <motion.p
                variants={fadeUp}
                transition={{ duration: DURATION.short, ease: EASE_OUT }}
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue"
              >
                {eyebrow}
              </motion.p>
            )}
            <motion.h1
              variants={fadeUp}
              transition={{ duration: DURATION.short, ease: EASE_OUT }}
              className={`mt-4 font-display ${headingSize} font-semibold leading-[1.05] tracking-tight text-brand-black`}
            >
              {renderHeading(heading, emphasis)}
            </motion.h1>
            {sub && (
              <motion.p
                variants={fadeUp}
                transition={{ duration: DURATION.short, ease: EASE_OUT }}
                className="mt-5 text-base sm:text-lg lg:text-xl text-muted max-w-2xl leading-relaxed"
              >
                {sub}
              </motion.p>
            )}
            <motion.div
              variants={fadeUp}
              transition={{ duration: DURATION.short, ease: EASE_OUT }}
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link
                href={primaryCta.href}
                className="group inline-flex items-center justify-center rounded-[10px] bg-brand-blue px-6 py-4 text-base font-semibold text-brand-white hover:bg-brand-blue-hover transition-colors min-h-[48px]"
              >
                {primaryCta.label}
                <span
                  aria-hidden="true"
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-[10px] border-2 border-brand-black px-6 py-4 text-base font-semibold text-brand-black hover:bg-brand-black hover:text-brand-white transition-colors min-h-[48px] tabular-nums"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </motion.div>
          </motion.div>

          {isSplit && formSlot && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.short, ease: EASE_OUT, delay: 0.2 }}
              className="w-full lg:max-w-xl lg:justify-self-end"
            >
              {formSlot}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
