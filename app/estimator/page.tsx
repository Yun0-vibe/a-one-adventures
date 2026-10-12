import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Estimator from '@/components/Estimator';
import { getLang, makeT } from '@/lib/lang';

export const metadata: Metadata = {
  title: 'Fare Estimator, Estimate Your Scorpio Trip Cost',
  description:
    'Estimate your private Scorpio tour cost in seconds. Pick trip type, days and travellers to see full Scorpio fare and per person cost. A-One Adventures Pokhara.',
  alternates: { canonical: '/estimator' },
};

export default function EstimatorPage() {
  const { t } = makeT(getLang());
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <div className="max-w-[64ch]">
        <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">{t('es.kicker')}</div>
        <h1 className="mt-2 font-display text-[clamp(30px,4vw,44px)] leading-tight tracking-tight">{t('es.title')}</h1>
        <p className="mt-2 text-[16.5px] leading-relaxed text-moss">{t('es.sub')}</p>
      </div>
      <div className="mt-8">
        <Estimator />
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/packages" className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-[15px] font-bold">
          {t('es.compare')} <ArrowRight size={16} />
        </Link>
        <Link href="/builder" className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-[15px] font-bold">
          {t('nav.builder')} <ArrowRight size={16} />
        </Link>
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[15px] font-bold text-white">
          {t('es.send')} <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
