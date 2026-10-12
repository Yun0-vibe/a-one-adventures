'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Calculator, ArrowRight } from 'lucide-react';
import { ESTIMATOR_RATES } from '@/lib/extras';

const inputCls =
  'w-full rounded-xl border border-line bg-[#FCFAF5] px-3.5 py-3 text-[15px] focus:border-brand2 focus:outline-2 focus:outline-brand2';
const labelCls = 'grid gap-1.5 text-[13px] font-bold text-ink/80';

export default function Estimator() {
  const [type, setType] = useState('mountain');
  const [days, setDays] = useState('3');
  const [persons, setPersons] = useState('5');
  const rate = ESTIMATOR_RATES.find((r) => r.id === type)?.rate ?? 15000;
  const d = Math.max(Number(days) || 0, 0);
  const p = Math.max(Number(persons) || 0, 0);
  const low = Math.round(rate * d * 0.9);
  const high = Math.round(rate * d * 1.15);
  const scorpios = p > 0 ? Math.max(Math.ceil(p / 7), 1) : 0;

  return (
    <div className="grid gap-6 rounded-[28px] border border-line bg-white p-7 md:p-10 lg:grid-cols-[1fr_1fr]">
      <div className="grid content-start gap-4">
        <label className={labelCls}>
          Trip type
          <select value={type} onChange={(e) => setType(e.target.value)} className={inputCls}>
            {ESTIMATOR_RATES.map((r) => (
              <option key={r.id} value={r.id}>
                {r.label}
              </option>
            ))}
          </select>
        </label>
        <div className="grid grid-cols-2 gap-4">
          <label className={labelCls}>
            Number of days
            <input type="number" min={1} max={30} value={days} onChange={(e) => setDays(e.target.value)} className={inputCls} />
          </label>
          <label className={labelCls}>
            Number of travellers
            <input type="number" min={1} max={60} value={persons} onChange={(e) => setPersons(e.target.value)} className={inputCls} />
          </label>
        </div>
        <p className="m-0 text-[13px] leading-relaxed text-moss">
          Estimate only, based on 2026 full Scorpio fares with fuel and driver. Final fare depends on fuel price, road
          condition and season. 7 seats per Scorpio.
        </p>
      </div>
      <div className="flex flex-col justify-center gap-3 rounded-3xl bg-ink p-7 text-white md:p-9">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-300">
          <Calculator size={14} /> Your estimate
        </span>
        {d > 0 && p > 0 ? (
          <>
            <div className="font-display text-4xl tracking-tight md:text-5xl">
              NPR {low.toLocaleString()} to {high.toLocaleString()}
            </div>
            <div className="text-[15px] text-white/80">
              About NPR {Math.round(low / p).toLocaleString()} to {Math.round(high / p).toLocaleString()} per person ·{' '}
              {scorpios} Scorpio{scorpios > 1 ? 's' : ''} needed
            </div>
          </>
        ) : (
          <div className="font-display text-2xl">Enter days and travellers to see your fare.</div>
        )}
        <Link href="/contact" className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[15px] font-bold text-white hover:brightness-95">
          Get exact quote <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
