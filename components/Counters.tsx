'use client';
import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { useLang } from './LangProvider';

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const run = () => {
      const start = performance.now();
      const tick = (tm: number) => {
        const k = Math.min((tm - start) / 1400, 1);
        setN(Math.round(target * (1 - Math.pow(1 - k, 3))));
        if (k < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    if (typeof IntersectionObserver === 'undefined') {
      run();
      return;
    }
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (run(), io.disconnect())),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Counters() {
  const { t } = useLang();
  const stats = [
    { v: 500, suffix: '+', label: t('cnt.1') },
    { v: 2500, suffix: '+', label: t('cnt.2') },
    { v: 20, suffix: '+', label: t('cnt.3') },
  ];
  return (
    <div className="grid gap-8 rounded-[28px] bg-cream px-8 py-12 sm:grid-cols-3 md:px-14">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className="font-display text-5xl tracking-tight text-brand">
            <Counter target={s.v} suffix={s.suffix} />
          </div>
          <div className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-moss">{s.label}</div>
        </div>
      ))}
      <div className="text-center sm:col-span-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-bold">
          <Star size={15} className="fill-accent text-accent" /> {t('cnt.badge')}
        </span>
      </div>
    </div>
  );
}
