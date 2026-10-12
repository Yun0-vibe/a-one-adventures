import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PACKAGES, SITE } from '@/lib/site';
import { SITE_URL } from '@/app/layout';

export function generateStaticParams() {
  return PACKAGES.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = PACKAGES.find((x) => x.slug === params.slug);
  if (!p) return {};
  const title = `${p.title} ${p.days} from Pokhara — ${p.price}`;
  const description = `${p.summary} Private Scorpio 4WD with owner-driver Ganesh Prasad Subedi. ${p.priceNote}. Book on WhatsApp +977 9846020030.`;
  return {
    title,
    description,
    alternates: { canonical: `/packages/${p.slug}` },
    openGraph: {
      title: `${p.title} ${p.days} | A-One Adventures`,
      description,
      url: `/packages/${p.slug}`,
      images: [{ url: p.image, width: 1200, height: 630, alt: `${p.title} — A-One Adventures` }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [p.image] },
  };
}

export default function Detail({ params }: { params: { slug: string } }) {
  const p = PACKAGES.find((x) => x.slug === params.slug);
  if (!p) return notFound();
  const tourJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: `${p.title} — ${p.days} from Pokhara`,
    description: p.summary,
    url: `${SITE_URL}/packages/${p.slug}`,
    image: p.image,
    touristType: 'Pilgrims, families, adventure travellers',
    provider: { '@type': 'TravelAgency', name: 'A-One Adventures', telephone: '+9779846020030', url: SITE_URL },
    itinerary: p.itinerary.map((i) => ({ '@type': 'TouristDestination', name: `${i.day}: ${i.title}`, description: i.detail })),
  };
  return (
    <section className="section container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tourJsonLd) }} />
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
