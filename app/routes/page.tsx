import type { Metadata } from 'next';
import { ROUTES } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Routes & Fares — Pokhara to Muktinath, Mustang, Kathmandu',
  description:
    'Jeep routes from Pokhara: Muktinath 168km, Lo Manthang, Ghandruk, Kathmandu, Chitwan, Pathivara. Distances, drive times and 2026 fare guidance.',
  alternates: { canonical: '/routes' },
};

export default function Routes() {
  return (
    <section className="section container">
      <div className="kicker">Routes & fares</div>
      <h1 className="h2">Every road our Scorpio knows by heart.</h1>
      <p className="sub">One-way charter fares are indicative for 2026 (fuel + driver included). Round-trip packages on the Packages page are better value. Monsoon & festival weeks may vary — confirm on WhatsApp.</p>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Route</th><th>Distance</th><th>Time</th><th>Via / notes</th></tr></thead>
          <tbody>{ROUTES.map((r) => (<tr key={r.name}><td><b>{r.name}</b></td><td>{r.dist}</td><td>{r.time}</td><td>{r.note}</td></tr>))}</tbody>
        </table>
      </div>
      <div className="grid2">
        <div className="card"><div className="card-body">
          <h3 className="serif">Good to know</h3>
          <ul style={{ color: 'var(--muted)', fontSize: 15 }}>
            <li>Start 5–6 AM for Mustang — Jomsom winds pick up after 11 AM.</li>
            <li>ACAP permit NPR 3,000pp for Mustang; Upper Mustang USD 50/day + licensed guide.</li>
            <li>Best months: Mar–May & Sep–Nov. Upper Mustang is rain-shadow, doable in monsoon.</li>
            <li>Carry warm layers — Muktinath (3,710m) is 15° colder than Pokhara.</li>
          </ul>
        </div></div>
        <div className="card"><div className="card-body">
          <h3 className="serif">Road reality check</h3>
          <p style={{ color: 'var(--muted)', fontSize: 15 }}>Beni → Jomsom is part-gravel mountain road. Our Scorpio 4WD handles it weekly, but expect a bumpy, beautiful adventure — not an expressway. We drive slow where it matters and stop where it counts: Rupse falls, Marpha, Dhumba Lake.</p>
        </div></div>
      </div>
    </section>
  );
}
