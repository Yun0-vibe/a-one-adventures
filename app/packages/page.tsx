import type { Metadata } from 'next';
import Link from 'next/link';
import { PACKAGES } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Tour Packages — Muktinath, Mustang, Pathivara, All Nepal',
  description:
    'Compare 6 private Scorpio tour packages from Pokhara: Muktinath Darshan 3D, Lower Mustang 4D, Upper Mustang Lo Manthang 6D, Pathivara, All Nepal circuit, day charter. Full-jeep pricing.',
  alternates: { canonical: '/packages' },
};

export default function Packages() {
  return (
    <section className="section container">
      <div className="kicker">Packages</div>
      <h1 className="h2">Six honest packages. One jeep that does them all.</h1>
      <p className="sub">All prices are full-jeep (not per person). Share with 6–7 travellers. Permits (ACAP NPR 3,000, Upper Mustang USD 50/day) extra at actuals — we arrange them.</p>
      <div className="grid3">
        {PACKAGES.map((p) => (
          <article className="card reveal in" key={p.slug}>
            <div className="card-img" style={{ backgroundImage: `url('${p.image}')` }}>
              <span className="pill amber">{p.tag}</span>
            </div>
            <div className="card-body">
              <h3>{p.title}</h3>
              <div className="meta"><span>{p.days}</span>·<span>{p.nights}</span></div>
              <p style={{ color: 'var(--muted)', fontSize: 14.5, margin: 0 }}>{p.summary}</p>
              <div className="price">{p.price}<small>{p.priceNote}</small></div>
              <div className="card-foot">
                <Link href={`/packages/${p.slug}`} className="btn btn-dark" style={{ flex: 1, justifyContent: 'center' }}>Itinerary</Link>
                <Link href={`/booking?package=${p.slug}`} className="btn btn-line" style={{ flex: 1, justifyContent: 'center' }}>Book</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
