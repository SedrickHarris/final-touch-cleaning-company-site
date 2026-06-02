'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CTAS, SITE } from '@/lib/constants/site';
import { LOCATIONS, NEIGHBORHOODS, PRIMARY_NAV, ROUTES, SERVICES } from '@/lib/constants/routes';
import { DURATION, EASE_OUT } from '@/lib/motion';
import NavDropdown from './NavDropdown';

const SERVICES_DROPDOWN_ITEMS = SERVICES.map((s) => ({ label: s.name, href: s.href }));
const SERVICES_DROPDOWN_GROUPS = [
  {
    label: 'Specialty',
    items: [
      { name: 'Builders', href: ROUTES.builders },
      { name: 'Industries', href: ROUTES.industries },
    ],
  },
];
const LOCATIONS_DROPDOWN_ITEMS = LOCATIONS.map((l) => ({ label: l.name, href: l.href }));
// Only built neighborhoods render as links; city groups with zero built are
// dropped so the dropdown never shows a 404-bound link.
const LOCATIONS_DROPDOWN_GROUPS = NEIGHBORHOODS.map((g) => ({
  label: g.cityName,
  items: g.neighborhoods.filter((n) => n.built).map((n) => ({ name: n.name, href: n.href })),
})).filter((g) => g.items.length > 0);

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-white/95 backdrop-blur supports-[backdrop-filter]:bg-brand-white/80 border-b border-border-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-28 lg:h-36 items-center justify-between gap-4">
          <Link
            href={ROUTES.home}
            className="flex items-center shrink-0"
            aria-label={`${SITE.name}, home`}
          >
            <Image
              src="/images/logo/final-touch-cleaning-company-logo.webp"
              alt={SITE.name}
              width={2000}
              height={2000}
              priority
              className="h-24 lg:h-32 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
            {PRIMARY_NAV.map((item) => {
              if (item.href === ROUTES.services) {
                return (
                  <NavDropdown
                    key={item.href}
                    label={item.label}
                    href={item.href}
                    items={SERVICES_DROPDOWN_ITEMS}
                    panelMinWidthClass="min-w-[240px]"
                    groups={SERVICES_DROPDOWN_GROUPS}
                  />
                );
              }
              if (item.href === ROUTES.locations) {
                return (
                  <NavDropdown
                    key={item.href}
                    label={item.label}
                    href={item.href}
                    items={LOCATIONS_DROPDOWN_ITEMS}
                    panelMinWidthClass="min-w-[200px]"
                    groupedSectionLabel="Neighborhoods"
                    groups={LOCATIONS_DROPDOWN_GROUPS}
                  />
                );
              }
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative text-sm font-medium transition-colors py-1 ${
                    active ? 'text-brand-blue' : 'text-brand-black hover:text-brand-blue'
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="primary-nav-underline"
                      aria-hidden="true"
                      transition={{ duration: DURATION.short, ease: EASE_OUT }}
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-brand-blue rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={SITE.phone.href}
              className="text-sm font-semibold text-brand-blue hover:text-brand-blue-hover tabular-nums"
              aria-label={`${CTAS.call} ${SITE.phone.display}`}
            >
              {SITE.phone.display}
            </a>
            <Link
              href={ROUTES.freeQuote}
              className="inline-flex items-center justify-center rounded-[10px] bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue-hover transition-colors min-h-[44px]"
            >
              {CTAS.primary}
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-3 -mr-1 text-brand-black hover:bg-light-gray min-w-[48px] min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id="mobile-menu"
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: DURATION.short, ease: EASE_OUT }}
              style={{ overflow: 'hidden' }}
              className="lg:hidden"
            >
              <nav className="flex flex-col gap-1 pb-5 pt-1" aria-label="Mobile">
                {PRIMARY_NAV.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={`px-3 py-3 rounded-md text-base font-medium min-h-[48px] flex items-center transition-colors ${
                        active
                          ? 'bg-soft-blue text-brand-blue'
                          : 'text-brand-black hover:bg-light-gray'
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <div className="mt-4 flex flex-col gap-2 px-1">
                  <a
                    href={SITE.phone.href}
                    className="inline-flex items-center justify-center rounded-[10px] border-2 border-brand-black px-4 py-3 text-base font-semibold text-brand-black hover:bg-brand-black hover:text-white transition-colors min-h-[48px] tabular-nums"
                  >
                    {CTAS.call} · {SITE.phone.display}
                  </a>
                  <Link
                    href={ROUTES.freeQuote}
                    className="inline-flex items-center justify-center rounded-[10px] bg-brand-blue px-4 py-3 text-base font-semibold text-white hover:bg-brand-blue-hover transition-colors min-h-[48px]"
                    onClick={() => setOpen(false)}
                  >
                    {CTAS.primary}
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
