'use client';
import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { PACKAGES, SITE } from '@/lib/site';

function Form() {
  const sp = useSearchParams();
  const [f, setF] = useState({
    name: '', phone: '', date: '', group: '4–6 people',
    package: sp.get('package') ?? 'muktinath-darshan',
    pickup: 'Pokhara Lakeside', notes: '',
  });
  const set = (k: string, v: string) => setF({ ...f, [k]: v });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const pkg = PACKAGES.find((p) => p.slug === f.package);
    const msg = `Namaste A-One Adventures! Booking request:%0A— Name: ${encodeURIComponent(f.name)}%0A— Phone: ${encodeURIComponent(f.phone)}%0A— Package: ${encodeURIComponent(pkg?.title ?? f.package)}%0A— Date: ${encodeURIComponent(f.date)}%0A— Group: ${encodeURIComponent(f.group)}%0A— Pickup: ${encodeURIComponent(f.pickup)}%0A— Notes: ${encodeURIComponent(f.notes)}`;
    window.open(`${SITE.whatsapp}?text=${msg}`, '_blank');
  };
  return (
    <form className="form" onSubmit={submit}>
      <div className="row2">
        <label>Full name<input required value={f.name} onChange={(e) => set('name', e.target.value)} placeholder="e.g. Ram Sharma" /></label>
        <label>Phone / WhatsApp<input required value={f.phone} onChange={(e) => set('phone', e.target.value)} placeholder="+977 ..." /></label>
      </div>
      <div className="row2">
        <label>Package
          <select value={f.package} onChange={(e) => set('package', e.target.value)}>
            {PACKAGES.map((p) => <option key={p.slug} value={p.slug}>{p.title} · {p.days}</option>)}
          </select>
        </label>
        <label>Travel date<input type="date" required value={f.date} onChange={(e) => set('date', e.target.value)} /></label>
      </div>
      <div className="row2">
        <label>Group size
          <select value={f.group} onChange={(e) => set('group', e.target.value)}>
            {['1–3 people', '4–6 people', '7 people (full jeep)', '8+ (need 2nd jeep help)'].map((g) => <option key={g}>{g}</option>)}
          </select>
        </label>
        <label>Pickup point<input value={f.pickup} onChange={(e) => set('pickup', e.target.value)} /></label>
      </div>
      <label>Anything we should know?<textarea rows={3} value={f.notes} onChange={(e) => set('notes', e.target.value)} placeholder="Elders in group, temple timing, hotel name..." /></label>
      <button className="btn btn-green" type="submit" style={{ justifyContent: 'center' }}>Send booking on WhatsApp →</button>
      <p style={{ fontSize: 13, color: 'var(--muted)', margin: 0 }}>No advance needed to enquire. We confirm availability within hours, then a small advance locks your date. Or call directly: <a href={SITE.phoneHref} style={{ fontWeight: 800 }}>{SITE.phone}</a></p>
    </form>
  );
}

export default function Booking() {
  return (
    <section className="section container">
      <div className="kicker">Booking</div>
      <h1 className="h2">Book the Scorpio in 30 seconds.</h1>
      <p className="sub">Fill this — it opens WhatsApp to {SITE.driver} with everything pre-typed. Simplest booking system: no accounts, no spam.</p>
      <div className="grid2" style={{ alignItems: 'start' }}>
        <Suspense><Form /></Suspense>
        <div className="card"><div className="card-body">
          <h3 className="serif">How it works</h3>
          <ol style={{ color: 'var(--muted)' }}>
            <li>You send the WhatsApp request.</li>
            <li>We confirm jeep + driver within hours.</li>
            <li>Small advance via eSewa / bank locks date.</li>
            <li>Pickup at your hotel, 5–6 AM for Mustang.</li>
          </ol>
          <div className="price">Muktinath 3D · NPR 55,000–65,000 <small>full jeep · split among 7 ≈ NPR 8–9k each</small></div>
          <div className="price">Day charter · NPR 9,000–15,000 <small>Pokhara sightseeing / airport</small></div>
        </div></div>
      </div>
    </section>
  );
}
