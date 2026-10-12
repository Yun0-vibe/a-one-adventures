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
    <header className="header">
      <div className="container nav">
        <Link href="/" className="brand">
          <img src="/logo.svg" alt="A-One Adventures logo" />
          <span>
            A-One Adventures
            <small>Pokhara · Nepal</small>
          </span>
        </Link>
        <nav className={`links ${open ? 'open' : ''}`}>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={path === l.href ? 'active' : ''} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/booking" className="btn btn-dark" style={{ marginLeft: 6 }} onClick={() => setOpen(false)}>
            Book Jeep →
          </Link>
        </nav>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <a href={SITE.phoneHref} style={{ fontWeight: 800, fontSize: 14 }} className="hide-m">
            {SITE.phone}
          </a>
          <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
