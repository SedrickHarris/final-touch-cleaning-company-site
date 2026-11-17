import type { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  heading: string;
  /** Substring of `heading` rendered in italic Fraunces (same pattern as HeroSection). */
  emphasis?: string;
  sub: string;
  children?: ReactNode;
};

function renderHeading(heading: string, emphasis?: string) {
  if (!emphasis) return heading;
  const idx = heading.toLowerCase().indexOf(emphasis.toLowerCase());
  if (idx < 0) return heading;
  return (
    <>
      {heading.slice(0, idx)}
      <em className="italic font-medium">{heading.slice(idx, idx + emphasis.length)}</em>
      {heading.slice(idx + emphasis.length)}
    </>
  );
}

// Used instead of HeroSection because HeroSection requires a primary CTA and
// has no slot for category chips, and shared primitives are off limits here.
export default function BlogHero({ eyebrow, heading, emphasis, sub, children }: Props) {
  return (
    <section className="bg-light-gray">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-[2rem] font-semibold leading-[1.1] tracking-tight text-brand-black sm:text-5xl lg:text-6xl">
          {renderHeading(heading, emphasis)}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg lg:text-xl">
          {sub}
        </p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
