import Link from 'next/link';
import type { ReactNode } from 'react';

// Matches [label](/internal-path) or **bold**. Everything else is plain text,
// which React escapes. Only internal paths (leading "/") become links.
const INLINE = /\[([^\]]+)\]\((\/[^)\s]*)\)|\*\*([^*]+)\*\*/g;

export function renderInline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of text.matchAll(INLINE)) {
    const idx = m.index ?? 0;
    if (idx > last) out.push(text.slice(last, idx));
    if (m[1] !== undefined && m[2] !== undefined) {
      out.push(
        <Link
          key={key++}
          href={m[2]}
          className="font-semibold text-brand-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
        >
          {m[1]}
        </Link>,
      );
    } else if (m[3] !== undefined) {
      out.push(<strong key={key++}>{m[3]}</strong>);
    }
    last = idx + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

/** Strip inline markup to plain text (word counts, schema text). */
export function stripInline(text: string): string {
  return text.replace(INLINE, (_m, label, _href, bold) => label ?? bold ?? '');
}
