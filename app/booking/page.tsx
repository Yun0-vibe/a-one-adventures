'use client';
import { Suspense, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { PACKAGES, SITE } from '@/lib/site';

const inputCls =
  'w-full rounded-xl border border-line bg-[#FCFAF5] px-3.5 py-3 font-body text-[15px] focus:border-brand2 focus:outline-2 focus:outline-brand2';
const labelCls = 'grid gap-1.5 text-[13px] font-bold text-ink/80';

function Form() {
  const sp = useSearchParams();
  const [sent, setSent] = useState(false);
  const [f, setF] = useState({
    name: '',
    phone: '',
    date: '',
    group: '4 to 6 people',
    package: sp.get('package') ?? 'muktinath-darshan',
    pickup: 'Pokhara Lakeside',
    notes: '',
  });
  const set = (k: string, v: string) => setF({ ...f, [k]: v });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (sent) {
    const pkg = PACKAGES.find((p) => p.slug === f.package);
    return (
      <div className="grid gap-3.5 rounded-[20px] border border-line bg-white p-6">
        <span className="w-fit rounded-full bg-brand px-3 py-1.5 text-xs font-bold text-white">Request noted</span>
        <h3 className="font-display text-2xl">
          Thanks {f.name.split(' ')[0] || 'traveller'}. Your seats are almost reserved.
        </h3>
        <p className="text-moss">
          You picked <b>{pkg?.title}</b> on <b>{f.date}</b> for <b>{f.group}</b>. To lock it in, call us now and we
          confirm availability within hours.
        </p>
        <div className="flex flex-wrap gap-2.5">
          <a href={SITE.phoneHref} className="rounded-full bg-brand px-5 py-3 text-[15px] font-bold text-white">
            Call {SITE.phone}
          </a>
          <Link href="/contact" className="rounded-full border border-line px-5 py-3 text-[15px] font-bold">
            More contact options
          </Link>
        </div>
        <p className="m-0 text-[13px] text-moss">
          A small advance via eSewa or bank transfer locks your date. Pickup at your hotel, 5 to 6 AM for Mustang.
        </p>
      </div>
    );
  }

  return (
    <form className="grid gap-3.5 rounded-[20px] border border-line bg-white p-6" onSubmit={submit}>
      <div className="grid gap-3.5 md:grid-cols-2">
        <label className={labelCls}>
          Full name
          <input required value={f.name} onChange={(e) => set('name', e.target.value)} placeholder="e.g. Ram Sharma" className={inputCls} />
        </label>
        <label className={labelCls}>
          Phone
          <input required value={f.phone} onChange={(e) => set('phone', e.target.value)} placeholder="+977 ..." className={inputCls} />
        </label>
      </div>
      <div className="grid gap-3.5 md:grid-cols-2">
        <label className={labelCls}>
          Package
          <select value={f.package} onChange={(e) => set('package', e.target.value)} className={inputCls}>
            {PACKAGES.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.title} {p.days}
              </option>
            ))}
          </select>
        </label>
        <label className={labelCls}>
          Travel date
          <input type="date" required value={f.date} onChange={(e) => set('date', e.target.value)} className={inputCls} />
        </label>
      </div>
      <div className="grid gap-3.5 md:grid-cols-2">
        <label className={labelCls}>
          Group size
          <select value={f.group} onChange={(e) => set('group', e.target.value)} className={inputCls}>
            {['1 to 3 people', '4 to 6 people', '7 people (full jeep)', '8 plus (we arrange a 2nd jeep)'].map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
        </label>
        <label className={labelCls}>
          Pickup point
          <input value={f.pickup} onChange={(e) => set('pickup', e.target.value)} className={inputCls} />
        </label>
      </div>
      <label className={labelCls}>
        Anything we should know?
        <textarea
          rows={3}
          value={f.notes}
          onChange={(e) => set('notes', e.target.value)}
          placeholder="Elders in group, temple timing, hotel name..."
          className={inputCls}
        />
      </label>
      <button className="rounded-full bg-brand px-5 py-3 text-[15px] font-bold text-white hover:bg-brand2" type="submit">
        Reserve my seats
      </button>
      <p className="m-0 text-[13px] text-moss">
        No advance needed to enquire. We confirm availability within hours, then a small advance locks your date. Or
        call directly: <a href={SITE.phoneHref} className="font-extrabold">{SITE.phone}</a>
      </p>
    </form>
  );
}

export default function Booking() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">Reservation</div>
      <h1 className="mt-2 font-display text-[clamp(28px,4vw,42px)] leading-tight tracking-tight">
        Reserve your seats in 30 seconds.
      </h1>
      <p className="mt-2 max-w-[64ch] text-[16.5px] text-moss">
        Fill this in and call us to confirm. Simplest reservation system: no accounts, no spam.
      </p>
      <div className="mt-6 grid items-start gap-[18px] md:grid-cols-2">
        <Suspense>
          <Form />
        </Suspense>
        <div className="rounded-2xl border border-line bg-white">
          <div className="flex flex-col gap-2.5 p-5">
            <h3 className="font-display text-[22px]">How it works</h3>
            <ol className="list-decimal pl-5 text-moss">
              <li>You send the reservation request.</li>
              <li>We confirm jeep plus driver within hours.</li>
              <li>Small advance via eSewa or bank locks date.</li>
              <li>Pickup at your hotel, 5 to 6 AM for Mustang.</li>
            </ol>
            <div className="text-[15px] font-extrabold">
              Muktinath 3 days, NPR 55,000 to 65,000
              <small className="block text-[12.5px] font-medium text-moss">full jeep, split among 7 is about NPR 8 to 9k each</small>
            </div>
            <div className="text-[15px] font-extrabold">
              Day charter, NPR 9,000 to 15,000
              <small className="block text-[12.5px] font-medium text-moss">Pokhara sightseeing and airport</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
