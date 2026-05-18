'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { DURATION, EASE_OUT, fadeUp } from '@/lib/motion';

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
  amount?: number;
  variants?: Variants;
};

// Generic in-view reveal wrapper. Fades + translates a single block when it
// enters the viewport. Inherits reducedMotion from MotionProvider.
export default function Reveal({
  children,
  delay = 0,
  className,
  once = true,
  amount = 0.2,
  variants = fadeUp,
}: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ duration: DURATION.short, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}
