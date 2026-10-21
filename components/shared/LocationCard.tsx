import Image from 'next/image';
import Link from 'next/link';

type Props = {
  href: string;
  name: string;
  description: string;
  image: { src: string };
  /** Small eyebrow above the title, e.g. the parent city. */
  label?: string;
  headingLevel?: 'h3' | 'h4';
  aspect?: '16/10' | '4/3';
};

// Full class strings so Tailwind can see them.
const ASPECT_CLASS = {
  '16/10': 'aspect-[16/10]',
  '4/3': 'aspect-[4/3]',
} as const;

// Reusable location card (city or neighborhood). Mirrors ServiceCard: one Link
// wraps the whole card, image on top, then eyebrow, title, description, CTA.
// The image is decorative (alt="") because the title already names the link.
export default function LocationCard({
  href,
  name,
  description,
  image,
  label,
  headingLevel = 'h3',
  aspect = '16/10',
}: Props) {
  const Heading = headingLevel;
  return (
    <Link
      href={href}
      className="
        group block h-full overflow-hidden
        rounded-[14px] border border-border-subtle bg-brand-white
        transition-all duration-200 ease-out
        hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(26,26,26,0.08)]
        hover:border-brand-blue/30
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2
      "
    >
      <div
        className={`relative ${ASPECT_CLASS[aspect]} w-full overflow-hidden border-b border-border-subtle bg-light-gray`}
      >
        <Image
          src={image.src}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
        />
      </div>
      <div className="p-6">
        {label ? (
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">{label}</p>
        ) : null}
        <Heading className="font-display text-xl font-semibold text-brand-black tracking-tight group-hover:text-brand-blue transition-colors">
          {name}
        </Heading>
        <p className="mt-2 font-body text-sm text-muted leading-relaxed">{description}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
          View details
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
