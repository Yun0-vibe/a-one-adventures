import type { Metadata } from 'next';
import { ROUTES } from '@/lib/site';
import { NE_ROUTES } from '@/lib/ne-data';
import { getLang, makeT } from '@/lib/lang';

export const metadata: Metadata = {
  title: 'Routes and Fares, Pokhara to Muktinath, Mustang, Kathmandu',
  description:
    'Scorpio routes from Pokhara: Muktinath 168km, Lo Manthang, Ghandruk, Kathmandu, Chitwan, Pathivara. Distances, drive times and 2026 fare guidance.',
  alternates: { canonical: '/routes' },
};

export default function Routes() {
  const lang = getLang();
  const { t } = makeT(lang);
  const routes = lang === 'ne' ? NE_ROUTES : ROUTES;
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">{t('rt.kicker')}</div>
      <h1 className="mt-2 font-display text-[clamp(30px,4vw,44px)] leading-tight tracking-tight">{t('rt.title')}</h1>
      <p className="mt-2 max-w-[64ch] text-[16.5px] leading-relaxed text-moss">{t('rt.sub')}</p>
      <div className="mt-6 overflow-auto rounded-3xl border border-line bg-white">
        <table className="w-full min-w-[640px] border-collapse text-[15px]">
          <thead>
            <tr className="bg-[#F2EEE1] text-left text-xs uppercase tracking-widest text-moss">
              <th className="px-5 py-4">Route</th>
              <th className="px-5 py-4">Distance</th>
              <th className="px-5 py-4">Time</th>
              <th className="px-5 py-4">Via</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((r) => (
              <tr key={r.name} className="hover:bg-[#FCFAF4]">
                <td className="border-t border-line px-5 py-4 font-bold">{r.name}</td>
                <td className="border-t border-line px-5 py-4">{r.dist}</td>
                <td className="border-t border-line px-5 py-4">{r.time}</td>
                <td className="border-t border-line px-5 py-4">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-line bg-white">
          <div className="p-6 md:p-7">
            <h3 className="font-display text-[22px]">{t('rt.good')}</h3>
            <ul className="list-disc pl-5 text-[15px] text-moss">
              <li>{t('rt.g1')}</li>
              <li>{t('rt.g2')}</li>
              <li>{t('rt.g3')}</li>
              <li>{t('rt.g4')}</li>
            </ul>
          </div>
        </div>
        <div className="rounded-3xl border border-line bg-white">
          <div className="p-6 md:p-7">
            <h3 className="font-display text-[22px]">{t('rt.real')}</h3>
            <p className="text-[15px] leading-relaxed text-moss">{t('rt.reald')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
