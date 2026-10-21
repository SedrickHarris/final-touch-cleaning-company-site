import { Children, type ReactNode } from 'react';

type Props = {
  /** Already-rendered LocationCard elements (pages pass a mapped array). */
  children: ReactNode;
  columns?: '3' | '4';
  'aria-label'?: string;
};

// Full class strings so Tailwind can see them.
const COLUMNS_CLASS = {
  '3': 'lg:grid-cols-3',
  '4': 'lg:grid-cols-4',
} as const;

// List wrapper for LocationCards. ul/li semantics only; each card sits in an
// h-full li so cards in a row share equal height.
export default function LocationCardGrid({
  children,
  columns = '3',
  'aria-label': ariaLabel,
}: Props) {
  return (
    <ul
      aria-label={ariaLabel}
      className={`grid gap-5 sm:grid-cols-2 ${COLUMNS_CLASS[columns]} lg:gap-6`}
    >
      {Children.toArray(children).map((child, i) => (
        <li key={i} className="h-full">
          {child}
        </li>
      ))}
    </ul>
  );
}
