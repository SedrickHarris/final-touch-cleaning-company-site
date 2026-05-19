'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DURATION, EASE_OUT } from '@/lib/motion';

interface NavDropdownItem {
  label: string;
  href: string;
}

interface NavDropdownProps {
  label: string;
  href: string;
  items: ReadonlyArray<NavDropdownItem>;
  panelMinWidthClass: string;
}

const HOVER_OPEN_DELAY = 100;
const HOVER_CLOSE_DELAY = 150;

export default function NavDropdown({
  label,
  href,
  items,
  panelMinWidthClass,
}: NavDropdownProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const linkRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (h: string) =>
    h === '/' ? pathname === '/' : pathname === h || pathname.startsWith(`${h}/`);
  const triggerActive = isActive(href);

  const clearTimers = () => {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  useEffect(() => () => clearTimers(), []);

  // Close any open panel when the route changes (link click, programmatic
  // navigation, browser back/forward). Render-time previous-prop pattern
  // documented in React 19 docs — both setState calls batch into one render.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    if (isOpen) setIsOpen(false);
  }

  // Cancel any pending hover-intent timers when the route changes.
  useEffect(() => {
    clearTimers();
  }, [pathname]);

  const scheduleOpen = () => {
    clearTimers();
    openTimerRef.current = setTimeout(() => setIsOpen(true), HOVER_OPEN_DELAY);
  };
  const scheduleClose = () => {
    clearTimers();
    closeTimerRef.current = setTimeout(() => setIsOpen(false), HOVER_CLOSE_DELAY);
  };
  const openNow = () => {
    clearTimers();
    setIsOpen(true);
  };
  const closeNow = () => {
    clearTimers();
    setIsOpen(false);
  };

  const focusFirstLink = () =>
    requestAnimationFrame(() => linkRefs.current[0]?.focus());

  const handleTriggerKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openNow();
      focusFirstLink();
    } else if (e.key === 'Escape') {
      closeNow();
    }
  };

  const handlePanelKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeNow();
      triggerRef.current?.focus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const idx = linkRefs.current.findIndex((el) => el === document.activeElement);
      const next = idx === -1 ? 0 : (idx + 1) % linkRefs.current.length;
      linkRefs.current[next]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const idx = linkRefs.current.findIndex((el) => el === document.activeElement);
      const prev =
        idx === -1
          ? linkRefs.current.length - 1
          : (idx - 1 + linkRefs.current.length) % linkRefs.current.length;
      linkRefs.current[prev]?.focus();
    }
  };

  const handleLastLinkKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === 'Tab' && !e.shiftKey) {
      closeNow();
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={scheduleOpen}
      onMouseLeave={scheduleClose}
    >
      <Link
        ref={triggerRef}
        href={href}
        aria-current={triggerActive ? 'page' : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onKeyDown={handleTriggerKeyDown}
        className={`relative text-sm font-medium transition-colors py-1 ${
          triggerActive ? 'text-brand-blue' : 'text-brand-black hover:text-brand-blue'
        }`}
      >
        {label}
        {triggerActive && (
          <motion.span
            layoutId="primary-nav-underline"
            aria-hidden="true"
            transition={{ duration: DURATION.short, ease: EASE_OUT }}
            className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-brand-blue rounded-full"
          />
        )}
      </Link>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={panelId}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: DURATION.short, ease: EASE_OUT }}
            onKeyDown={handlePanelKeyDown}
            onMouseEnter={openNow}
            onMouseLeave={scheduleClose}
            className={`absolute left-0 top-full mt-2 ${panelMinWidthClass} rounded-[14px] border border-border-subtle bg-brand-white p-4 shadow-[0_6px_24px_rgba(26,26,26,0.06)] z-50`}
          >
            <ul className="flex flex-col gap-1">
              {items.map((item, idx) => {
                const itemActive = isActive(item.href);
                const isExactMatch = pathname === item.href;
                const isLast = idx === items.length - 1;
                return (
                  <li key={item.href}>
                    <Link
                      ref={(el) => {
                        linkRefs.current[idx] = el;
                      }}
                      href={item.href}
                      aria-current={isExactMatch ? 'page' : undefined}
                      onClick={closeNow}
                      onKeyDown={isLast ? handleLastLinkKeyDown : undefined}
                      className={`flex items-center min-h-[40px] px-3 py-2 rounded-md text-sm font-medium font-body transition-colors hover:bg-soft-blue hover:text-brand-blue ${
                        itemActive ? 'text-brand-blue' : 'text-brand-black'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
