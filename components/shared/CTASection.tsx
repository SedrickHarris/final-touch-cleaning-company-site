'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { DURATION, EASE_OUT, fadeUp, stagger } from '@/lib/motion';

type CTA = { label: string; href: string };

type Props = {
  heading: string;
  sub?: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
  tone?: 'blue' | 'soft';
  /** Right-column slot. Typically a quote form. Presence implies split layout. */
  formSlot?: ReactNode;
  /** Force layout. Defaults to 'split' when `formSlot` is provided, else 'standard'. */
  layout?: 'standard' | 'split';
  /** Container width. Split layout defaults to 'wide'. */
  container?: 'normal' | 'wide';
};

export default function CTASection({
  heading,
  sub,
  primaryCta,
  secondaryCta,
  tone = 'blue',
  formSlot,
  layout,
  container,
}: Props) {
  const isSplit = layout === 'split' || (layout !== 'standard' && !!formSlot);
  const isWide = container === 'wide' || (container !== 'normal' && isSplit);

  const isBlue = tone === 'blue';
  const wrapClass = isBlue ? 'bg-brand-blue' : 'bg-soft-blue';
  const headingClass = isBlue ? 'text-white' : 'text-brand-black';
  const subClass = isBlue ? 'text-white/85' : 'text-muted';
  const primaryClass = isBlue
    ? 'bg-white text-brand-blue hover:bg-soft-blue'
    : 'bg-brand-blue text-white hover:bg-brand-blue-hover';
  const secondaryClass = isBlue
    ? 'border-2 border-white/60 text-white hover:bg-white hover:text-brand-blue'
    : 'border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white';

  const containerClass = isWide
    ? 'max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12'
    : 'max-w-7xl px-4 sm:px-6 lg:px-8';

  if (isSplit) {
    return (
      <section className={wrapClass}>
        <div className={`mx-auto ${containerClass} py-16 lg:py-20 xl:py-24`}>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.75fr)] gap-10 lg:gap-14 xl:gap-20 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger(0.08, 0.05)}
            >
              <motion.h2
                variants={fadeUp}
                transition={{ duration: DURATION.short, ease: EASE_OUT }}
                className={`font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight ${headingClass}`}
              >
                {heading}
              </motion.h2>
              {sub && (
                <motion.p
                  variants={fadeUp}
                  transition={{ duration: DURATION.short, ease: EASE_OUT }}
                  className={`mt-4 text-base sm:text-lg leading-relaxed max-w-xl ${subClass}`}
                >
                  {sub}
                </motion.p>
              )}
              <motion.div
                variants={fadeUp}
                transition={{ duration: DURATION.short, ease: EASE_OUT }}
                className="mt-7 flex flex-col sm:flex-row gap-3"
              >
                <Link
                  href={primaryCta.href}
                  className={`group inline-flex items-center justify-center rounded-[10px] px-6 py-4 text-base font-semibold transition-colors min-h-[48px] ${primaryClass}`}
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
                    className={`inline-flex items-center justify-center rounded-[10px] px-6 py-4 text-base font-semibold transition-colors min-h-[48px] tabular-nums ${secondaryClass}`}
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: DURATION.short, ease: EASE_OUT, delay: 0.15 }}
              className="w-full lg:max-w-xl lg:justify-self-end"
            >
              {formSlot}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={wrapClass}>
      <div className={`mx-auto ${containerClass} py-16 lg:py-24`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger(0.08, 0.05)}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: DURATION.short, ease: EASE_OUT }}
            className="max-w-2xl"
          >
            <h2
              className={`font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight ${headingClass}`}
            >
              {heading}
            </h2>
            {sub && (
              <p className={`mt-3 text-base sm:text-lg leading-relaxed ${subClass}`}>{sub}</p>
            )}
          </motion.div>
          <motion.div
            variants={fadeUp}
            transition={{ duration: DURATION.short, ease: EASE_OUT }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href={primaryCta.href}
              className={`group inline-flex items-center justify-center rounded-[10px] px-6 py-4 text-base font-semibold transition-colors min-h-[48px] ${primaryClass}`}
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
                className={`inline-flex items-center justify-center rounded-[10px] px-6 py-4 text-base font-semibold transition-colors min-h-[48px] tabular-nums ${secondaryClass}`}
              >
                {secondaryCta.label}
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
