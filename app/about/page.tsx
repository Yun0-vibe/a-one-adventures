import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE, VEHICLE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Us — Family-Run Scorpio Tours in Pokhara',
  description:
    'Meet Ganesh Prasad Subedi, owner-driver of A-One Adventures Pokhara. One Mahindra Scorpio S5+ 2019 4WD, years of Mustang road experience, pilgrim-friendly driving.',
  alternates: { canonical: '/about' },
};

export default function About() {
  return (
    <section className="section container">
      <div className="kicker">About us</div>
      <h1 className="h2">A father, a Scorpio, and a promise to drive safe.</h1>
      <p className="sub">
        A-One Adventures started with one vehicle — our family's {VEHICLE.name} {VEHICLE.year} — and one idea: give
        travellers in Pokhara a driver they can call by name. {SITE.driver} has spent years on the Kali Gandaki highway
        and knows every waterfall halt, wind window and tea stop between Beni and Muktinath.
      </p>
      <div className="grid2">
        <div className="card"><div className="card-body">
          <span className="pill green">Owner-driver</span>
          <h3 className="serif">{SITE.driver}</h3>
          <p style={{ color: 'var(--muted)' }}>Mountain driver · Hindi / Nepali / basic English · Pilgrim & family specialist. Phone & WhatsApp: <a href={SITE.phoneHref} style={{ fontWeight: 800, color: 'var(--brand)' }}>{SITE.phone}</a></p>
          <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--muted)', fontSize: 15 }}>
            <li>Early starts (5–6 AM) to beat Jomsom winds</li>
            <li>Oxygen + first-aid always in the jeep</li>
            <li>Helps with ACAP & Upper Mustang permits</li>
          </ul>
        </div></div>
        <div className="card"><div className="card-body">
          <span className="pill">The vehicle</span>
          <h3 className="serif">{VEHICLE.name} · {VEHICLE.year}</h3>
          <p style={{ color: 'var(--muted)' }}>{VEHICLE.seats} · {VEHICLE.drive}. Serviced for mountain load, new hill tyres, comfortable 2+3+2 seating. Number plate & photos being added — ask on WhatsApp for latest pictures.</p>
          <div className="gallery" style={{ marginTop: 4 }}>
            {[
              'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop',
            ].map((u) => (<div key={u} style={{ backgroundImage: `url('${u}')` }} />))}
          </div>
          <p style={{ fontSize: 13, color: 'var(--muted)' }}>Placeholder photos — replace with your Scorpio shots in <code>public/scorpio-1.jpg</code>.</p>
        </div></div>
      </div>
      <div style={{ display: 'flex', gap: 10, marginTop: 22, flexWrap: 'wrap' }}>
        <Link href="/packages" className="btn btn-dark">See packages →</Link>
        <Link href="/booking" className="btn btn-line">Book the Scorpio</Link>
      </div>
    </section>
  );
}
