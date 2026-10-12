import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PACKAGES } from '@/lib/site';
import { NE_PACKAGES } from '@/lib/ne-data';
import { getLang, makeT } from '@/lib/lang';

export const metadata: Metadata = {
  title: 'Tour Packages, Muktinath, Mustang, Pathivara, All Nepal',
  description:
    'Compare 6 Scorpio tour packages from Pokhara: Muktinath Darshan 3 days, Lower Mustang 4 days, Upper Mustang Lo Manthang 6 days, Pathivara, All Nepal circuit, day charter. Full Scorpio pricing.',
  alternates: { canonical: '/packages' },
};

export default function Packages() {
  const lang = getLang();
  const { t } = makeT(lang);
  const pkgs = PACKAGES.map((p) => (lang === 'ne' ? { ...p, ...NE_PACKAGES[p.slug] } : p));
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <div className="max-w-[68ch]">
        <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">{t('pg.kicker')}</div>
        <h1 className="mt-2 font-display text-[clamp(30px,4vw,44px)] leading-tight tracking-tight">{t('pg.title')}</h1>
        <p className="mt-2 text-[16.5px] leading-relaxed text-moss">{t('pg.sub')}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/estimator" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[15px] font-bold text-white">
          {t('nav.estimator')} <ArrowRight size={16} />
        </Link>
        <Link href="/builder" className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-[15px] font-bold">
          {t('nav.builder')} <ArrowRight size={16} />
        </Link>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {pkgs.map((p) => (
          <article
            key={p.slug}
            className="flex flex-col overflow-hidden rounded-3xl border border-line bg-white transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(26,46,34,0.12)]"
          >
            <div className="relative h-[220px] bg-cover bg-center" style={{ backgroundImage: `url('${p.image}')` }}>
              <span className="absolute left-4 top-4 rounded-full bg-accent px-3.5 py-1.5 text-xs font-bold text-white">
                {p.tag}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <h3 className="font-display text-2xl tracking-tight">{p.title}</h3>
              <div className="flex flex-wrap gap-2 text-sm font-semibold text-moss">
                <span>{p.days}</span>·<span>{p.nights}</span>
              </div>
              <p className="m-0 leading-relaxed text-moss">{p.summary}</p>
              <div className="text-base font-extrabold">
                {p.price}
                <small className="mt-0.5 block text-[13px] font-medium text-moss">{p.priceNote}</small>
              </div>
              <div className="mt-auto flex gap-2.5 pt-3">
                <Link
                  href={`/packages/${p.slug}`}
                  className="flex flex-1 justify-center rounded-full bg-ink px-5 py-3.5 text-[15px] font-bold text-white"
                >
                  {t('card.details')}
                </Link>
                <Link
                  href={`/contact?package=${p.slug}`}
                  className="flex flex-1 justify-center rounded-full border border-line px-5 py-3.5 text-[15px] font-bold"
                >
                  {t('card.reserve')}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
