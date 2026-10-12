'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';
import { SITE } from '@/lib/site';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/packages', label: 'Packages' },
  { href: '/estimator', label: 'Estimator' },
  { href: '/routes', label: 'Routes' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-line bg-cream/95 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5">
          <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <img src="/logo.svg" alt="A-One Adventures logo" className="h-11 w-11" />
            <span className="leading-tight">
              <span className="block text-[17px] font-extrabold tracking-tight">A-One Adventures</span>
              <small className="block text-[10.5px] font-semibold uppercase tracking-[0.18em] text-moss">
                Tours and Treks, Nepal
              </small>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-2.5 text-[14.5px] font-semibold text-ink/75 transition hover:bg-[#EDE8D9] hover:text-ink ${
                  path === l.href ? 'bg-ink text-white hover:bg-ink hover:text-white' : ''
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 rounded-full bg-accent px-6 py-3 text-[15px] font-bold text-white shadow-sm transition hover:brightness-95"
            >
              Reserve Seats
            </Link>
          </nav>
          <button
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open ? (
          <nav className="grid gap-1 border-t border-line bg-cream px-5 pb-5 pt-3 md:hidden">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-semibold ${
                  path === l.href ? 'bg-ink text-white' : 'bg-white text-ink'
                }`}
              >
                {l.label} <ChevronRight size={16} className="opacity-50" />
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a
                href={SITE.phoneHref}
                className="flex items-center justify-center gap-2 rounded-xl bg-ink px-4 py-3.5 text-[15px] font-bold text-white"
              >
                <Phone size={16} /> Call
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3.5 text-[15px] font-bold text-white"
              >
                Reserve Seats
              </Link>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
