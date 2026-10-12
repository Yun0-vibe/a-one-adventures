'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE } from '@/lib/site';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/packages', label: 'Packages' },
  { href: '/routes', label: 'Routes' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5 font-extrabold tracking-tight">
          <img src="/logo.svg" alt="A-One Adventures logo" className="h-10 w-10" />
          <span className="leading-tight">
            A-One Adventures
            <small className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-moss">
              Pokhara, Nepal
            </small>
          </span>
        </Link>
        <nav
          className={`${
            open ? 'absolute inset-x-0 top-[68px] flex-col items-stretch gap-1 border-b border-line bg-cream px-5 pb-4 pt-2' : 'hidden'
          } flex items-center gap-1 md:static md:flex md:flex-row`}
        >
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`rounded-full px-3.5 py-2 text-[14.5px] font-semibold text-ink/80 hover:bg-[#EDE8D9] ${
                path === l.href ? 'bg-ink text-white hover:bg-ink' : ''
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setOpen(false)}
            className="rounded-full bg-ink px-5 py-2.5 text-[15px] font-bold text-white transition hover:bg-pine md:ml-1.5"
          >
            Reserve Seats
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <a href={SITE.phoneHref} className="hidden text-sm font-extrabold lg:block">
            {SITE.phone}
          </a>
          <button
            className="rounded-lg border border-line px-2.5 py-1.5 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
