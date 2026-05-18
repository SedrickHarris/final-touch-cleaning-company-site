import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/lib/constants/site';
import { FOOTER_NAV } from '@/lib/constants/routes';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-brand-white mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/favicons/final-touch-blue-sparkle-transparent-favicon.webp"
                alt=""
                width={1254}
                height={1254}
                aria-hidden="true"
                className="h-10 w-10 shrink-0"
              />
              <div>
                <div className="font-display font-semibold text-xl tracking-tight">
                  {SITE.shortName}
                </div>
                <div className="font-body text-[11px] uppercase tracking-[0.18em] text-white/70 mt-1">
                  Cleaning Company
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/80 max-w-xs leading-relaxed">
              Family-owned by {SITE.owners}. {SITE.coreMessage}
            </p>
            <div className="mt-5 space-y-1 text-sm">
              <div>
                <a
                  href={SITE.phone.href}
                  className="text-white hover:underline tabular-nums"
                >
                  {SITE.phone.display}
                </a>
              </div>
              <div>
                <a
                  href={SITE.email.href}
                  className="text-white/90 hover:underline break-all"
                >
                  {SITE.email.display}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-base font-semibold text-white tracking-tight">
              Services
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {FOOTER_NAV.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-base font-semibold text-white tracking-tight">
              Company
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {FOOTER_NAV.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-base font-semibold text-white tracking-tight">
              Service Area
            </h2>
            <ul className="mt-4 space-y-1 text-sm text-white/80">
              <li>
                {SITE.serviceArea.county}, {SITE.serviceArea.stateAbbr}
              </li>
              {SITE.serviceArea.cities.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-white/70">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/80">
            {FOOTER_NAV.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
