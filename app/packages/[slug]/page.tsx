import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PACKAGES } from '@/lib/site';
import { SITE_URL } from '@/app/layout';

export function generateStaticParams() {
  return PACKAGES.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = PACKAGES.find((x) => x.slug === params.slug);
  if (!p) return {};
  const title = `${p.title} ${p.days} from Pokhara, ${p.price}`;
  const description = `${p.summary} 8 seater 4WD with owner driver Ganesh Prasad Subedi. ${p.priceNote}. Call +977 9846020030 to reserve.`;
  return {
    title,
    description,
    alternates: { canonical: `/packages/${p.slug}` },
    openGraph: {
      title: `${p.title} ${p.days} | A-One Adventures`,
      description,
      url: `/packages/${p.slug}`,
      images: [{ url: p.image, width: 1200, height: 630, alt: `${p.title}, A-One Adventures` }],
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
    name: `${p.title}, ${p.days} from Pokhara`,
    description: p.summary,
    url: `${SITE_URL}/packages/${p.slug}`,
    image: p.image,
    touristType: 'Pilgrims, families, adventure travellers',
    provider: { '@type': 'TravelAgency', name: 'A-One Adventures', telephone: '+9779846020030', url: SITE_URL },
    itinerary: p.itinerary.map((i) => ({ '@type': 'TouristDestination', name: `${i.day}: ${i.title}`, description: i.detail })),
  };
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tourJsonLd) }} />
      <Link
        href="/packages"
        className="mb-4 inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-[15px] font-bold"
      >
        All packages
      </Link>
      <div className="overflow-hidden rounded-2xl border border-line bg-white">
        <div className="h-[320px] bg-cover bg-center" style={{ backgroundImage: `url('${p.image}')` }} />
        <div className="p-7">
          <span className="rounded-full bg-accent px-3 py-1.5 text-xs font-bold text-white">{p.tag}</span>
          <h1 className="mb-1 mt-2 font-display text-[clamp(28px,4vw,42px)] leading-tight tracking-tight">
            {p.title} {p.days}
          </h1>
          <div className="text-lg font-extrabold">
            {p.price}
            <small className="block text-[12.5px] font-medium text-moss">{p.priceNote}</small>
          </div>
          <p className="mt-2 max-w-[64ch] text-[16.5px] text-moss">{p.summary}</p>
          <div className="mt-6 grid gap-[18px] md:grid-cols-2">
            <div>
              <h3 className="font-display text-[22px]">Tour plan</h3>
              <div className="ml-1.5 mt-3.5 grid gap-4 border-l-2 border-line pl-5">
                {p.itinerary.map((i) => (
                  <div key={i.day + i.title}>
                    <b className="text-sm text-brand2">{i.day}</b>
                    <div>
                      <strong>{i.title}</strong>
                      <br />
                      <span className="text-moss">{i.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-[22px]">Highlights</h3>
              <ul className="list-disc pl-5 text-moss">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <h3 className="mt-4 font-display text-[22px]">Includes</h3>
              <ul className="list-disc pl-5 text-moss">
                {p.includes.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <Link href={`/booking?package=${p.slug}`} className="rounded-full bg-brand px-5 py-3 text-[15px] font-bold text-white">
                  Reserve this tour
                </Link>
                <Link href="/contact" className="rounded-full border border-line px-5 py-3 text-[15px] font-bold">
                  Contact to reserve
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
