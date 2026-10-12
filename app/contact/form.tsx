'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { PACKAGES, SITE } from '@/lib/site';

const inputCls =
  'w-full rounded-xl border border-line bg-[#FCFAF5] px-3.5 py-3 text-[15px] focus:border-brand2 focus:outline-2 focus:outline-brand2';
const labelCls = 'grid gap-1.5 text-[13px] font-bold text-ink/80';

function tripLength(from: string, to: string): string | null {
  if (!from || !to) return null;
  const nights = Math.round((new Date(to).getTime() - new Date(from).getTime()) / 86400000);
  if (isNaN(nights) || nights < 0) return null;
  if (nights === 0) return 'Same day trip';
  return `${nights + 1} days, ${nights} night${nights > 1 ? 's' : ''}`;
}

export default function ContactForm() {
  const sp = useSearchParams();
  const [sent, setSent] = useState(false);
  const [f, setF] = useState({
    name: '',
    phone: '',
    email: '',
    package: sp.get('package') ?? 'muktinath-darshan',
    from: '',
    to: '',
    persons: '4',
    pickup: 'Pokhara Lakeside',
    message: '',
  });
  const set = (k: string, v: string) => setF({ ...f, [k]: v });
  const length = tripLength(f.from, f.to);
  const pkg = PACKAGES.find((p) => p.slug === f.package);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (sent) {
    return (
      <div className="grid gap-4 rounded-3xl border border-line bg-white p-7 md:p-9">
        <span className="w-fit rounded-full bg-brand px-3.5 py-1.5 text-xs font-bold text-white">Enquiry received</span>
        <h3 className="font-display text-3xl tracking-tight">
          Thanks {f.name.split(' ')[0] || 'traveller'}. We have your details.
        </h3>
        <div className="grid gap-2 rounded-2xl bg-cream p-5 text-[15px]">
          <div><b>Package:</b> {pkg ? `${pkg.title} ${pkg.days}` : 'Custom trip'}</div>
          <div><b>Dates:</b> {f.from || 'Open'} to {f.to || 'Open'}{length ? ` (${length})` : ''}</div>
          <div><b>Group:</b> {f.persons} person{f.persons === '1' ? '' : 's'}</div>
          <div><b>Phone:</b> {f.phone}</div>
          {f.email ? <div><b>Email:</b> {f.email}</div> : null}
          <div><b>Pickup:</b> {f.pickup}</div>
        </div>
        <p className="m-0 text-moss">
          To confirm fast, call us now and mention your name. We confirm availability within hours, then a small
          advance locks your dates.
        </p>
        <div className="flex flex-wrap gap-2.5">
          <a href={SITE.phoneHref} className="rounded-full bg-brand px-6 py-3.5 text-[15px] font-bold text-white hover:bg-brand2">
            Call {SITE.phone}
          </a>
          <button
            onClick={() => setSent(false)}
            className="rounded-full border border-line px-6 py-3.5 text-[15px] font-bold"
          >
            Edit enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="grid gap-4 rounded-3xl border border-line bg-white p-7 md:p-9" onSubmit={submit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className={labelCls}>
          Full name *
          <input required value={f.name} onChange={(e) => set('name', e.target.value)} placeholder="e.g. Ram Sharma" className={inputCls} />
        </label>
        <label className={labelCls}>
          Phone number *
          <input
            required
            type="tel"
            value={f.phone}
            onChange={(e) => set('phone', e.target.value)}
            placeholder="+977 ..."
            className={inputCls}
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className={labelCls}>
          Email (Gmail works best)
          <input
            type="email"
            value={f.email}
            onChange={(e) => set('email', e.target.value)}
            placeholder="you@gmail.com"
            className={inputCls}
          />
        </label>
        <label className={labelCls}>
          Select package *
          <select value={f.package} onChange={(e) => set('package', e.target.value)} className={inputCls}>
            {PACKAGES.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.title} {p.days}
              </option>
            ))}
            <option value="custom">Custom trip / Not sure yet</option>
          </select>
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <label className={labelCls}>
          Date from *
          <input type="date" required value={f.from} onChange={(e) => set('from', e.target.value)} className={inputCls} />
        </label>
        <label className={labelCls}>
          Date to *
          <input type="date" required value={f.to} onChange={(e) => set('to', e.target.value)} className={inputCls} />
        </label>
        <label className={labelCls}>
          Person count *
          <input
            type="number"
            min={1}
            max={60}
            required
            value={f.persons}
            onChange={(e) => set('persons', e.target.value)}
            className={inputCls}
          />
        </label>
      </div>
      {length ? (
        <div className="w-fit rounded-full bg-accentsoft px-4 py-2 text-sm font-bold text-ink">
          Trip length: {length} · about {Math.ceil(Number(f.persons || 1) / 7)} jeep{Number(f.persons) > 7 ? 's' : ''} needed
        </div>
      ) : (
        <p className="m-0 text-[13px] text-moss">Pick both dates and we show your trip length plus jeeps needed (7 seats per jeep).</p>
      )}
      <label className={labelCls}>
        Pickup point
        <input value={f.pickup} onChange={(e) => set('pickup', e.target.value)} placeholder="Hotel name and area" className={inputCls} />
      </label>
      <label className={labelCls}>
        Message (optional)
        <textarea
          rows={3}
          value={f.message}
          onChange={(e) => set('message', e.target.value)}
          placeholder="Elders in group, temple timing, places you want to add..."
          className={inputCls}
        />
      </label>
      <button className="rounded-full bg-brand px-6 py-3.5 text-[15px] font-bold text-white hover:bg-brand2" type="submit">
        Send enquiry
      </button>
      <p className="m-0 text-[13px] text-moss">
        No advance needed to enquire. Prefer talking? Call <a href={SITE.phoneHref} className="font-extrabold">{SITE.phone}</a>
      </p>
    </form>
  );
}
