'use client';

import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';

// Centralizes the prefers-reduced-motion policy. Any motion component rendered
// inside this provider will automatically reduce animation when the user's OS
// has "Reduce motion" enabled. See docs/brand-guide.md §8.
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
