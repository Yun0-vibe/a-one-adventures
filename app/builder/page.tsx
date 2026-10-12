import type { Metadata } from 'next';
import Builder from '@/components/Builder';
import { getLang, makeT } from '@/lib/lang';

export const metadata: Metadata = {
  title: 'Custom Trip Builder, Design Your Own Nepal Route',
  description:
    'Build your own Nepal trip: pick places, dates and group size for an instant route and fare estimate. A-One Adventures Pokhara plans it around you.',
  alternates: { canonical: '/builder' },
};

export default function BuilderPage() {
  const { t } = makeT(getLang());
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <div className="max-w-[64ch]">
        <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">{t('bd.kicker')}</div>
        <h1 className="mt-2 font-display text-[clamp(30px,4vw,44px)] leading-tight tracking-tight">{t('bd.title')}</h1>
        <p className="mt-2 text-[16.5px] leading-relaxed text-moss">{t('bd.sub')}</p>
      </div>
      <div className="mt-8 rounded-[28px] border border-line bg-white p-6 md:p-10">
        <Builder />
      </div>
    </section>
  );
}
