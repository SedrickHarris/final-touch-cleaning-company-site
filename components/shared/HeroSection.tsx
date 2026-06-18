'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from 'react';
import { DURATION, EASE_OUT, fadeUp, stagger } from '@/lib/motion';

type CTA = { label: string; href: string };

type HeroImage = { src: string; alt?: string };

type HeroVideo = {
  /** Looping MP4 source, e.g. '/videos/hero-bg.mp4'. */
  src: string;
  /** Static fallback image shown before load and under reduced motion. */
  poster: string;
};

type Props = {
  eyebrow?: string;
  heading: string;
  /** Optional substring of `heading` to render in italic Fraunces for editorial emphasis. */
  emphasis?: string;
  sub?: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
  /** Right-column slot. Typically a quote form. Presence implies split layout. */
  formSlot?: ReactNode;
  /** Force layout. Defaults to 'split' when `formSlot` is provided. */
  layout?: 'standard' | 'split';
  /** Container width. Split layout defaults to 'wide'. */
  container?: 'normal' | 'wide';
  /** Background photo. Renders behind content with a 40% black overlay; text switches to light. */
  image?: HeroImage;
  /**
   * Looping background video. Renders behind content with the same dark overlay
   * and light text as `image`. Takes precedence over `image` when both are set.
   * Honors `prefers-reduced-motion`: no autoplay, poster shown, no pause control.
   */
  video?: HeroVideo;
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
  image,
  video,
}: Props) {
  const isSplit = layout === 'split' || (layout !== 'standard' && !!formSlot);
  const isWide = container === 'wide' || (container !== 'normal' && isSplit);
  const hasVideo = !!video;
  // Video and image are mutually exclusive; video wins if both are passed.
  const hasImage = !hasVideo && !!image;
  // Either a video or image activates dark-background mode (light text + overlay).
  const hasDarkBg = hasVideo || hasImage;

  const containerClass = isWide
    ? 'max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12'
    : 'max-w-7xl px-4 sm:px-6 lg:px-8';

  const headingSize = isSplit
    ? 'text-[2.25rem] sm:text-5xl lg:text-[3.25rem] xl:text-6xl 2xl:text-7xl'
    : 'text-[2.25rem] sm:text-5xl lg:text-6xl xl:text-7xl';

  const sectionBg = hasDarkBg ? 'bg-brand-black' : 'bg-light-gray';
  const eyebrowColor = hasDarkBg ? 'text-white/90' : 'text-brand-blue';
  const headingColor = hasDarkBg ? 'text-white' : 'text-brand-black';
  const subColor = hasDarkBg ? 'text-white/85' : 'text-muted';
  const secondaryCtaClass = hasDarkBg
    ? 'border-white text-white hover:bg-white hover:text-brand-black'
    : 'border-brand-black text-brand-black hover:bg-brand-black hover:text-white';

  return (
    <section className={`relative overflow-hidden ${sectionBg}`}>
      {video ? (
        <HeroVideoBackground video={video} />
      ) : hasImage ? (
        <>
          <Image
            src={image.src}
            alt={image.alt ?? ''}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            aria-hidden={image.alt ? undefined : 'true'}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-black/60"
          />
        </>
      ) : (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_15%_15%,rgba(26,95,180,0.10)_0%,rgba(26,95,180,0)_60%)]"
        />
      )}
      <div
        className={`relative mx-auto ${containerClass} py-16 sm:py-20 lg:py-24 xl:py-28`}
      >
        <div
          className={
            isSplit
              ? 'grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(480px,1fr)] gap-10 lg:gap-12 xl:gap-16 items-start'
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
                className={`font-body text-xs font-semibold uppercase tracking-[0.18em] ${eyebrowColor}`}
              >
                {eyebrow}
              </motion.p>
            )}
            <motion.h1
              variants={fadeUp}
              transition={{ duration: DURATION.short, ease: EASE_OUT }}
              className={`mt-4 font-display ${headingSize} font-semibold leading-[1.05] tracking-tight ${headingColor}`}
            >
              {renderHeading(heading, emphasis)}
            </motion.h1>
            {sub && (
              <motion.p
                variants={fadeUp}
                transition={{ duration: DURATION.short, ease: EASE_OUT }}
                className={`mt-5 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed ${subColor}`}
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
                className="group inline-flex items-center justify-center rounded-[10px] bg-brand-blue px-6 py-4 text-base font-semibold text-white hover:bg-brand-blue-hover transition-colors min-h-[48px]"
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
                  className={`inline-flex items-center justify-center rounded-[10px] border-2 px-6 py-4 text-base font-semibold transition-colors min-h-[48px] tabular-nums ${secondaryCtaClass}`}
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
              className="w-full lg:justify-self-end"
            >
              {formSlot}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

/**
 * Decorative looping background video with the same dark overlay as the image path.
 * Accessibility:
 *  - The <video> is aria-hidden (purely decorative).
 *  - Under `prefers-reduced-motion: reduce`, no video plays: the poster image is
 *    shown instead and no pause control renders (there is no motion to pause).
 *  - Otherwise a WCAG 2.1 AA pause/play control renders bottom-right (44x44 target).
 */
function useReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      mq.addEventListener('change', onChange);
      return () => mq.removeEventListener('change', onChange);
    },
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => false,
  );
}

function HeroVideoBackground({ video }: { video: HeroVideo }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();
  // `isPlaying` mirrors the element's actual play/pause state via its own events,
  // so we never call setState synchronously inside an effect.
  const [isPlaying, setIsPlaying] = useState(false);

  // Drive playback from the preference rather than the `autoPlay` attribute, so no
  // motion ever starts under reduced motion. State updates come from the video's
  // play/pause events below, not from here.
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (reducedMotion) {
      el.pause();
    } else {
      void el.play().catch(() => {});
    }
  }, [reducedMotion]);

  const toggle = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) void el.play().catch(() => {});
    else el.pause();
  };

  return (
    <>
      {reducedMotion ? (
        <Image
          src={video.poster}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
      ) : (
        <video
          ref={videoRef}
          aria-hidden="true"
          muted
          loop
          playsInline
          poster={video.poster}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={video.src} type="video/mp4" />
        </video>
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black/60"
      />
      {!reducedMotion && (
        <button
          type="button"
          onClick={toggle}
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
          className="absolute bottom-4 right-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      )}
    </>
  );
}

function PauseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.29-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
    </svg>
  );
}
