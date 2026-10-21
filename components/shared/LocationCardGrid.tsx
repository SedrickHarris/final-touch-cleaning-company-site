import { Children, cloneElement, isValidElement, type ReactNode } from 'react';

type Props = {
  /** Already-rendered LocationCard elements (pages pass a mapped array). */
  children: ReactNode;
  /** Large-breakpoint columns for any card count other than 6 or 8. */
  columns?: '3' | '4';
  'aria-label'?: string;
};

// Full class strings so Tailwind can see them.
const COLUMNS_CLASS = {
  '3': 'lg:grid-cols-3',
  '4': 'lg:grid-cols-4',
} as const;

// Image sizes hint for a 4-column desktop grid. The 3-column hint is LocationCard's default.
const SIZES_FOUR_COLUMNS = '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw';

// List wrapper for LocationCards. ul/li semantics only; each card sits in an
// h-full li so cards in a row share equal height.
// Exactly 6 cards lay out 3x2 and exactly 8 cards 4x2 from the large breakpoint;
// every other count uses `columns`. Phones stay at one column, small screens at two.
export default function LocationCardGrid({
  children,
  columns = '3',
  'aria-label': ariaLabel,
}: Props) {
  const items = Children.toArray(children);
  const lgColumns = items.length === 6 ? '3' : items.length === 8 ? '4' : columns;
  return (
    <ul
      aria-label={ariaLabel}
      className={`grid gap-5 sm:grid-cols-2 ${COLUMNS_CLASS[lgColumns]} lg:gap-6`}
    >
      {items.map((child, i) => (
        <li key={i} className="h-full">
          {lgColumns === '4' && isValidElement<{ sizes?: string }>(child)
            ? cloneElement(child, { sizes: SIZES_FOUR_COLUMNS })
            : child}
        </li>
      ))}
    </ul>
  );
}
