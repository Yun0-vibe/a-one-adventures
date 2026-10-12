'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, ArrowLeft, MapPin, RotateCcw } from 'lucide-react';
import { ESTIMATOR_RATES } from '@/lib/extras';
import { useLang } from './LangProvider';

type Terrain = 'local' | 'highway' | 'mountain' | 'longhaul';

const PLACES: { id: string; terrain: Terrain }[] = [
  { id: 'muktinath', terrain: 'mountain' },
  { id: 'jomsom', terrain: 'mountain' },
  { id: 'marpha', terrain: 'mountain' },
  { id: 'kagbeni', terrain: 'mountain' },
  { id: 'lomanthang', terrain: 'mountain' },
  { id: 'tatopani', terrain: 'mountain' },
  { id: 'ghandruk', terrain: 'mountain' },
  { id: 'kathmandu', terrain: 'highway' },
  { id: 'chitwan', terrain: 'highway' },
  { id: 'lumbini', terrain: 'highway' },
  { id: 'pokhara', terrain: 'local' },
  { id: 'pathivara', terrain: 'longhaul' },
];

const ORDER: Terrain[] = ['local', 'highway', 'mountain', 'longhaul'];

const inputCls =
  'w-full rounded-xl border border-line bg-[#FCFAF5] px-3.5 py-3 text-[15px] focus:border-brand2 focus:outline-2 focus:outline-brand2';
const labelCls = 'grid gap-1.5 text-[13px] font-bold text-ink/80';

function nightsBetween(from: string, to: string): number | null {
  if (!from || !to) return null;
  const n = Math.round((new Date(to).getTime() - new Date(from).getTime()) / 86400000);
  return isNaN(n) || n < 0 ? null : n;
}

export default function Builder() {
  const { t } = useLang();
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<string[]>(['muktinath', 'jomsom']);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [persons, setPersons] = useState('5');

  const toggle = (id: string) => setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  const terrains = PLACES.filter((p) => picked.includes(p.id)).map((p) => p.terrain);
  const top: Terrain = ORDER.reduce<Terrain>((a, b) => (terrains.includes(b) ? b : a), 'local');
  const rate = ESTIMATOR_RATES.find((r) => r.id === top)?.rate ?? 14000;
  const suggested = Math.min(Math.max(picked.length + 1, 2), 12);
  const chosen = nightsBetween(from, to);
  const days = chosen === null ? suggested : Math.max(chosen + 1, suggested);
  const low = Math.round(rate * days * 0.9);
  const high = Math.round(rate * days * 1.15);
  const p = Math.max(Number(persons) || 0, 1);
  const scorpios = Math.max(Math.ceil(p / 7), 1);
  const needsM = picked.some((id) => ['muktinath', 'jomsom', 'marpha', 'kagbeni', 'lomanthang', 'tatopani', 'ghandruk'].includes(id));
  const needsU = picked.includes('lomanthang');
  const routeNames = picked.map((id) => t(`pl.${id}`));

  return (
    <div>
      <div className="mb-8 flex items-center gap-2">
        {[t('bd.s1'), t('bd.s2'), t('bd.s3')].map((s, i) => (
          <div key={s} className="flex flex-1 items-center gap-2">
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-extrabold ${
                i <= step ? 'bg-brand text-white' : 'bg-white text-moss'
              } border border-line`}
            >
              {i + 1}
            </span>
            <span className={`text-sm font-bold ${i <= step ? 'text-ink' : 'text-moss/60'}`}>{s}</span>
            {i < 2 ? <span className="mx-1 hidden h-px flex-1 bg-line sm:block" /> : null}
          </div>
        ))}
      </div>

      {step === 0 ? (
        <div>
          <p className="text-[16px] font-semibold">{t('bd.pick')}</p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {PLACES.map((pl) => {
              const on = picked.includes(pl.id);
              return (
                <button
                  key={pl.id}
                  onClick={() => toggle(pl.id)}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-[14.5px] font-bold transition ${
                    on ? 'border-brand bg-brand text-white' : 'border-line bg-white hover:border-brand'
                  }`}
                >
                  {on ? <Check size={15} /> : <MapPin size={15} className="opacity-50" />}
                  {t(`pl.${pl.id}`)}
                </button>
              );
            })}
          </div>
          <p className="mt-4 text-sm font-semibold text-brand2">{t('bd.min', { d: String(suggested) })}</p>
          {picked.length === 0 ? <p className="mt-2 text-sm font-bold text-red-700">{t('bd.need')}</p> : null}
          <button
            disabled={picked.length === 0}
            onClick={() => setStep(1)}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[15px] font-bold text-white disabled:opacity-40"
          >
            {t('bd.next')} <ArrowRight size={16} />
          </button>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="grid max-w-xl gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className={labelCls}>
              {t('bd.from')}
              <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} className={inputCls} />
            </label>
            <label className={labelCls}>
              {t('bd.to')}
              <input type="date" value={to} onChange={(e) => setTo(e.target.value)} className={inputCls} />
            </label>
          </div>
          <label className={labelCls}>
            {t('bd.persons')}
            <input type="number" min={1} max={60} value={persons} onChange={(e) => setPersons(e.target.value)} className={inputCls} />
          </label>
          {from && !to ? <p className="m-0 text-sm font-bold text-red-700">{t('bd.datesneed')}</p> : null}
          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => setStep(0)}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-[15px] font-bold"
            >
              <ArrowLeft size={16} /> {t('bd.back')}
            </button>
            <button
              disabled={!from || !to}
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[15px] font-bold text-white disabled:opacity-40"
            >
              {t('bd.next')} <ArrowRight size={16} />
            </button>
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="grid gap-5 rounded-[28px] panel-dark p-7 text-white md:p-10">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-amber-300">{t('bd.result')}</div>
            <h3 className="mt-1 font-display text-3xl tracking-tight">{routeNames.join(' · ')}</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-5">
              <div className="text-xs font-bold uppercase tracking-wider text-white/60">{t('bd.route')}</div>
              <div className="mt-1 text-[14.5px] font-semibold leading-relaxed">{routeNames.join(' → ')}</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-5">
              <div className="text-xs font-bold uppercase tracking-wider text-white/60">
                {t('bd.days')} · {t('bd.persons')}
              </div>
              <div className="mt-1 font-display text-3xl">
                {days} · {p}
              </div>
              <div className="text-[13px] text-white/60">
                {from} → {to}
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 p-5">
              <div className="text-xs font-bold uppercase tracking-wider text-white/60">{t('bd.fare')}</div>
              <div className="mt-1 font-display text-2xl">
                NPR {low.toLocaleString()} to {high.toLocaleString()}
              </div>
              <div className="text-[13px] text-white/60">
                ~NPR {Math.round(low / p).toLocaleString()} {t('bd.perperson')} · {scorpios} Scorpio{scorpios > 1 ? 's' : ''}
              </div>
            </div>
          </div>
          {needsM ? <p className="m-0 text-sm text-amber-300">{t('bd.permitM')}</p> : null}
          {needsU ? <p className="m-0 text-sm text-amber-300">{t('bd.permitU')}</p> : null}
          <div className="flex flex-wrap gap-2.5">
            <Link
              href={`/contact?package=custom&from=${from}&to=${to}&persons=${p}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[15px] font-bold text-white"
            >
              {t('bd.cta')} <ArrowRight size={16} />
            </Link>
            <button
              onClick={() => (setStep(0), setPicked([]))}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-[15px] font-bold text-white"
            >
              <RotateCcw size={15} /> {t('bd.again')}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
