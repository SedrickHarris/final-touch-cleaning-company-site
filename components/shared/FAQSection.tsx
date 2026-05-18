'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DURATION, EASE_OUT } from '@/lib/motion';

type FAQItem = { q: string; a: string };

type Props = {
  heading?: string;
  items: ReadonlyArray<FAQItem>;
  defaultOpenFirst?: boolean;
};

// Accessible accordion: button trigger with aria-expanded + region with
// aria-labelledby. The motion-animated height is purely presentational —
// the underlying control is a standard button and is keyboard operable.
export default function FAQSection({
  heading = 'Frequently asked questions',
  items,
  defaultOpenFirst = false,
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenFirst ? 0 : null);

  if (items.length === 0) return null;

  return (
    <section className="bg-brand-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-black">
          {heading}
        </h2>
        <ul className="mt-8 divide-y divide-border-subtle border-t border-b border-border-subtle">
          {items.map((it, i) => {
            const isOpen = openIndex === i;
            const triggerId = `faq-trigger-${i}`;
            const panelId = `faq-panel-${i}`;
            return (
              <li key={it.q}>
                <button
                  id={triggerId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left min-h-[56px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 rounded-sm"
                >
                  <span className="font-body text-base sm:text-lg font-semibold text-brand-black">
                    {it.q}
                  </span>
                  <motion.span
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: DURATION.micro, ease: EASE_OUT }}
                    className="shrink-0 text-brand-blue text-2xl leading-none"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: DURATION.short, ease: EASE_OUT }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="pb-5 pr-10 text-base text-muted leading-relaxed">
                        {it.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
