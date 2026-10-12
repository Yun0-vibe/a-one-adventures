import type { Metadata } from 'next';
import Link from 'next/link';
import { PACKAGES } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Tour Packages, Muktinath, Mustang, Pathivara, All Nepal',
  description:
    'Compare 6 jeep tour packages from Pokhara: Muktinath Darshan 3 days, Lower Mustang 4 days, Upper Mustang Lo Manthang 6 days, Pathivara, All Nepal circuit, day charter. Full jeep pricing.',
  alternates: { canonical: '/packages' },
};

export default function Packages() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">Packages</div>
      <h1 className="mt-2 font-display text-[clamp(28px,4vw,42px)] leading-tight tracking-tight">
        Six honest packages. One team that runs them all.
      </h1>
      <p className="mt-2 max-w-[64ch] text-[16.5px] text-moss">
        All prices are full jeep, not per person. Share with 6 to 7 travellers. Permits (ACAP NPR 3,000, Upper Mustang
        USD 50 per day) extra at actuals. We arrange them.
      </p>
      <div className="mt-6 grid gap-[18px] md:grid-cols-3">
        {PACKAGES.map((p) => (
          <article
            key={p.slug}
            className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(26,46,34,0.12)]"
          >
            <div className="relative h-[210px] bg-cover bg-center" style={{ backgroundImage: `url('${p.image}')` }}>
              <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1.5 text-xs font-bold text-white">
                {p.tag}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-2.5 p-5">
              <h3 className="font-display text-[22px] tracking-tight">{p.title}</h3>
              <div className="flex flex-wrap gap-2 text-[13.5px] font-semibold text-moss">
                <span>{p.days}</span>·<span>{p.nights}</span>
              </div>
              <p className="m-0 text-[14.5px] text-moss">{p.summary}</p>
              <div className="text-[15px] font-extrabold">
                {p.price}
                <small className="block text-[12.5px] font-medium text-moss">{p.priceNote}</small>
              </div>
              <div className="mt-auto flex gap-2.5 pt-2">
                <Link
                  href={`/packages/${p.slug}`}
                  className="flex flex-1 justify-center rounded-full bg-ink px-5 py-3 text-[15px] font-bold text-white"
                >
                  Itinerary
                </Link>
                <Link
                  href={`/contact?package=${p.slug}`}
                  className="flex flex-1 justify-center rounded-full border border-line px-5 py-3 text-[15px] font-bold"
                >
                  Reserve
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
