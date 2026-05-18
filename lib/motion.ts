import type { Variants } from 'framer-motion';

// Centralized motion tokens. Every animation across the site should use these
// so duration, easing, and feel stay consistent. Per docs/brand-guide.md §8
// motion is 150–300ms, ease-out, and respects prefers-reduced-motion (handled
// globally via MotionConfig in components/motion/MotionProvider.tsx).

export const EASE_OUT = [0.22, 1, 0.36, 1] as const; // "out-quint" — quick start, soft finish

export const DURATION = {
  micro: 0.18,
  short: 0.28,
  medium: 0.4,
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const stagger = (staggerChildren = 0.06, delayChildren = 0.04): Variants => ({
  hidden: {},
  visible: {
    transition: { delayChildren, staggerChildren },
  },
});
