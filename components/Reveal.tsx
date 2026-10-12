'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function revealEl(el: Element) {
  if (el.classList.contains('in')) return;
  const html = el as HTMLElement;
  const d = html.dataset.delay;
  if (d) html.style.transitionDelay = `${d}ms`;
  el.classList.add('in');
  setTimeout(() => {
    html.style.transitionDelay = '';
  }, 900);
}

export default function Reveal() {
  const path = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal:not(.in)'));
    if (els.length === 0) return;

    const showIfVisible = () => {
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight + 200) revealEl(el);
      });
    };

    if (typeof IntersectionObserver === 'undefined') {
      els.forEach(revealEl);
      return;
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            revealEl(e.target);
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.05, rootMargin: '0px 0px 100px 0px' }
    );
    els.forEach((el) => io.observe(el));

    showIfVisible();
    const t = setTimeout(showIfVisible, 1200);
    window.addEventListener('scroll', showIfVisible, { passive: true });
    return () => {
      io.disconnect();
      clearTimeout(t);
      window.removeEventListener('scroll', showIfVisible);
    };
  }, [path]);

  return null;
}
