type Props = {
  eyebrow?: string;
  heading: string;
  sub?: string;
  align?: 'left' | 'center';
  as?: 'h2' | 'h3';
};

export default function SectionHeader({
  eyebrow,
  heading,
  sub,
  align = 'left',
  as: Tag = 'h2',
}: Props) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
          {eyebrow}
        </p>
      )}
      <Tag className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight text-brand-black">
        {heading}
      </Tag>
      {sub && <p className="mt-4 text-base sm:text-lg text-muted">{sub}</p>}
    </div>
  );
}
