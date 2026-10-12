import Link from 'next/link';
import { PACKAGES, ROUTES, SITE, VEHICLE } from '@/lib/site';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <div className="container hero-inner">
          <span className="eyebrow">● Pokhara · Private 4×4 Scorpio · Since the mountains called</span>
          <h1>
            Mustang, Muktinath & beyond — <em>one jeep, one trusted driver.</em>
          </h1>
          <p className="lead">
            A-One Adventures is a family-run jeep service from Pokhara. {SITE.driver} drives his own {VEHICLE.name}{' '}
            {VEHICLE.year} ({VEHICLE.seats}) — no brokers, no swapped vehicles, no surprise charges. You book, he shows up.
          </p>
          <div className="hero-cta">
            <Link href="/booking" className="btn btn-amber">Check availability →</Link>
            <Link href="/packages" className="btn" style={{ background: '#fff', color: '#1A2E22' }}>View 6 packages</Link>
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="btn btn-line" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.4)' }}>
              WhatsApp {SITE.phone}
            </a>
          </div>
          <div className="hero-cards">
            {[
              ['8-seater Scorpio S5+', '4WD · high clearance · serviced'],
              ['168 km to Muktinath', '6–8 hrs via Kali Gandaki gorge'],
              ['ACAP + permits', 'We handle all paperwork'],
              ['4.9 ★ family rated', 'Elders & pilgrims welcome'],
            ].map(([b, s]) => (
              <div className="hcard" key={b}><b>{b}</b><span>{s}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="kicker">Popular packages</div>
        <h2 className="h2">Built around real road conditions, not brochure dreams.</h2>
        <p className="sub">Fares researched against 2026 Mustang operators. Full-jeep pricing — split it among 6–7 people and it beats any bus.</p>
        <div className="grid3">
          {PACKAGES.slice(0, 3).map((p) => (
            <article className="card reveal" key={p.slug}>
              <div className="card-img" style={{ backgroundImage: `url('${p.image}')` }}>
                <span className="pill amber">{p.tag}</span>
              </div>
              <div className="card-body">
                <h3>{p.title}</h3>
                <div className="meta"><span>{p.days}</span>·<span>{p.nights}</span></div>
                <p style={{ color: 'var(--muted)', fontSize: 14.5, margin: 0 }}>{p.summary}</p>
                <div className="price">{p.price}<small>{p.priceNote}</small></div>
                <div className="card-foot">
                  <Link href={`/packages/${p.slug}`} className="btn btn-dark" style={{ flex: 1, justifyContent: 'center' }}>Details</Link>
                  <Link href={`/booking?package=${p.slug}`} className="btn btn-line" style={{ flex: 1, justifyContent: 'center' }}>Book</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 18 }}>
          <Link href="/packages" className="btn btn-line">See all 6 packages →</Link>
        </div>
      </section>

      <section className="section container" style={{ paddingTop: 0 }}>
        <div className="split reveal">
          <div className="split-text">
            <div className="kicker" style={{ color: '#FCD34D' }}>Why A-One</div>
            <h2 className="h2" style={{ color: '#fff' }}>You know exactly who is driving you into the Himalayas.</h2>
            <ul>
              <li>✓ <span><b style={{ color: '#fff' }}>Owner-driven.</b> {SITE.driver} owns & drives the Scorpio himself. No random subcontracted driver.</span></li>
              <li>✓ <span><b style={{ color: '#fff' }}>Mountain miles.</b> Pokhara–Jomsom–Muktinath weekly. Knows wind timings, landslide halts, fuel stops.</span></li>
              <li>✓ <span><b style={{ color: '#fff' }}>Pilgrim-friendly.</b> Slow pacing, temple timing help, pony/palanquin coordination for elders.</span></li>
              <li>✓ <span><b style={{ color: '#fff' }}>Transparent fare.</b> Fuel, tolls, driver stay included in quote. ACAP guidance free.</span></li>
            </ul>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Link href="/about" className="btn" style={{ background: '#fff', color: '#1A2E22' }}>About us</Link>
              <Link href="/contact" className="btn btn-line" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.35)' }}>Talk to {SITE.driver.split(' ')[0]}</Link>
            </div>
          </div>
          <div className="split-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1400&auto=format&fit=crop')" }} />
        </div>
      </section>

      <section className="section container" style={{ paddingTop: 0 }}>
        <div className="kicker">Routes we run weekly</div>
        <h2 className="h2">From Lakeside to the Forbidden Kingdom.</h2>
        <div className="table-wrap reveal">
          <table>
            <thead><tr><th>Route</th><th>Distance</th><th>Time</th><th>Via</th></tr></thead>
            <tbody>
              {ROUTES.map((r) => (
                <tr key={r.name}><td><b>{r.name}</b></td><td>{r.dist}</td><td>{r.time}</td><td>{r.note}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="vehicle-strip">
          {[VEHICLE.name + ' ' + VEHICLE.year, VEHICLE.seats, VEHICLE.drive, 'Pokhara pickup · All Nepal drop'].map((c) => (
            <span className="vchip" key={c}>● {c}</span>
          ))}
        </div>
      </section>
    </>
  );
}
