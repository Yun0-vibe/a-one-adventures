import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PACKAGES, SITE } from '@/lib/site';

export function generateStaticParams() {
  return PACKAGES.map((p) => ({ slug: p.slug }));
}

export default function Detail({ params }: { params: { slug: string } }) {
  const p = PACKAGES.find((x) => x.slug === params.slug);
  if (!p) return notFound();
  return (
    <section className="section container">
      <Link href="/packages" className="btn btn-line" style={{ marginBottom: 16 }}>← All packages</Link>
      <div className="card" style={{ overflow: 'hidden' }}>
        <div style={{ height: 320, backgroundImage: `url('${p.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="card-body" style={{ padding: 28 }}>
          <span className="pill amber">{p.tag}</span>
          <h1 className="h2" style={{ marginBottom: 4 }}>{p.title} · {p.days}</h1>
          <div className="price" style={{ fontSize: 18 }}>{p.price}<small>{p.priceNote}</small></div>
          <p className="sub">{p.summary}</p>
          <div className="grid2">
            <div>
              <h3 className="serif">Day-wise plan</h3>
              <div className="itin">
                {p.itinerary.map((i) => (
                  <div key={i.day + i.title}><b>{i.day}</b><div><strong>{i.title}</strong><br /><span style={{ color: 'var(--muted)' }}>{i.detail}</span></div></div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="serif">Highlights</h3>
              <ul style={{ color: 'var(--muted)' }}>{p.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
              <h3 className="serif">Includes</h3>
              <ul style={{ color: 'var(--muted)' }}>{p.includes.map((h) => <li key={h}>{h}</li>)}</ul>
              <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
                <Link href={`/booking?package=${p.slug}`} className="btn btn-green">Book this tour →</Link>
                <a className="btn btn-line" target="_blank" rel="noreferrer" href={`${SITE.whatsapp}?text=${encodeURIComponent(`Namaste! I want to book ${p.title} (${p.days}). My date is _ . Group size _ .`)}`}>Ask on WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
