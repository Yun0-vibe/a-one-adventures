import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Check, X, Backpack, MapPin, Moon, Clock3, MoveRight, ClipboardCheck } from 'lucide-react';
import { PACKAGES } from '@/lib/site';
import { SITE_URL } from '@/app/layout';
import { DEFAULT_EXCLUDED, ELEVATION, packingFor } from '@/lib/extras';
import { ROUTE_ROWS, DESTINATIONS, REQUIRED } from '@/lib/route-data';
import { NE_PACKAGES, NE_EXCLUDED, NE_MOUNTAIN_PACKING, NE_STANDARD_PACKING } from '@/lib/ne-data';
import { getLang, makeT } from '@/lib/lang';
import Elevation from '@/components/Elevation';
import PrintButton from '@/components/PrintButton';

export function generateStaticParams() {
  return PACKAGES.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = PACKAGES.find((x) => x.slug === params.slug);
  if (!p) return {};
  const title = `${p.title} ${p.days} from Pokhara, ${p.price}`;
  const description = `${p.summary} 8 seater Scorpio with owner driver Ganesh Prasad Subedi. ${p.priceNote}. Call +977 9846020030 to reserve.`;
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
  const base = PACKAGES.find((x) => x.slug === params.slug);
  if (!base) return notFound();
  const lang = getLang();
  const { t } = makeT(lang);
  const p = lang === 'ne' ? { ...base, ...NE_PACKAGES[base.slug] } : base;
  const related = PACKAGES.filter((x) => x.slug !== base.slug)
    .slice(0, 2)
    .map((r) => (lang === 'ne' ? { ...r, ...NE_PACKAGES[r.slug] } : r));
  const excluded = lang === 'ne' ? NE_EXCLUDED : DEFAULT_EXCLUDED;
  const packing = lang === 'ne'
    ? (base.slug === 'pathivara-darshan' || base.slug === 'all-nepal-tour' || base.slug === 'pokhara-day-charter'
        ? NE_STANDARD_PACKING
        : NE_MOUNTAIN_PACKING)
    : packingFor(base.slug);
  const tourJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: `${p.title}, ${p.days} from Pokhara`,
    description: p.summary,
    url: `${SITE_URL}/packages/${base.slug}`,
    image: p.image,
    touristType: 'Pilgrims, families, adventure travellers',
    provider: { '@type': 'TravelAgency', name: 'A-One Adventures', telephone: '+9779846020030', url: SITE_URL },
    itinerary: p.itinerary.map((i) => ({ '@type': 'TouristDestination', name: `${i.day}: ${i.title}`, description: i.detail })),
  };
  const crumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Packages', item: `${SITE_URL}/packages` },
      { '@type': 'ListItem', position: 3, name: p.title, item: `${SITE_URL}/packages/${base.slug}` },
    ],
  };
  return (
    <section className="mx-auto max-w-6xl px-5 py-10 md:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tourJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbJsonLd) }} />
      <nav className="no-print mb-5 flex flex-wrap items-center gap-1.5 text-sm font-semibold text-moss" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-ink">{t('dt.home')}</Link>
        <ChevronRight size={14} />
        <Link href="/packages" className="hover:text-ink">{t('dt.pkgs')}</Link>
        <ChevronRight size={14} />
        <span className="text-ink">{p.title}</span>
      </nav>
      <div className="overflow-hidden rounded-[28px] border border-line bg-white">
        <div className="h-[280px] bg-cover bg-center md:h-[360px]" style={{ backgroundImage: `url('${p.image}')` }} />
        <div className="p-6 md:p-10">
          <span className="rounded-full bg-accent px-3.5 py-1.5 text-xs font-bold text-white">{p.tag}</span>
          <h1 className="mb-1 mt-3 font-display text-[clamp(30px,4vw,46px)] leading-tight tracking-tight">
            {p.title} {p.days}
          </h1>
          <div className="text-xl font-extrabold">
            {p.price}
            <small className="block text-[13px] font-medium text-moss">{p.priceNote}</small>
          </div>
          <p className="mt-3 max-w-[68ch] text-[16.5px] leading-relaxed text-moss">{p.summary}</p>
          <div className="mt-5">
            <div className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand2">{t('dt.dest')}</div>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {(DESTINATIONS[base.slug] ?? []).map((d) => (
                <span key={d} className="inline-flex items-center gap-1.5 rounded-full bg-cream px-3.5 py-1.5 text-[13px] font-bold">
                  <MapPin size={13} className="text-brand2" /> {d}
                </span>
              ))}
            </div>
          </div>
          <div className="no-print mt-5 flex flex-wrap gap-2.5">
            <Link href={`/contact?package=${base.slug}`} className="rounded-full bg-brand px-6 py-3.5 text-[15px] font-bold text-white hover:bg-brand2">
              {t('dt.reserve')}
            </Link>
            <Link href="/contact" className="rounded-full border border-line px-6 py-3.5 text-[15px] font-bold">
              {t('dt.contact')}
            </Link>
            <PrintButton />
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl tracking-tight">{t('dt.plan')}</h2>
              <div className="ml-1.5 mt-4 grid gap-5 border-l-2 border-line pl-5">
                {p.itinerary.map((i) => (
                  <div key={i.day + i.title} className="relative">
                    <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full bg-brand" />
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
            <div className="grid content-start gap-6">
              <div className="rounded-3xl bg-cream p-6">
                <h2 className="font-display text-2xl tracking-tight">{t('dt.high')}</h2>
                <ul className="mt-3 grid gap-2.5 p-0">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-[15px]">
                      <Check size={17} className="mt-0.5 shrink-0 text-brand2" /> {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-line p-6">
                <h2 className="font-display text-2xl tracking-tight">{t('dt.inc')}</h2>
                <ul className="mt-3 grid gap-2.5 p-0">
                  {p.includes.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-[15px] text-moss">
                      <Check size={17} className="mt-0.5 shrink-0 text-brand2" /> {h}
                    </li>
                  ))}
                </ul>
                <h2 className="mt-6 font-display text-2xl tracking-tight">{t('dt.exc')}</h2>
                <ul className="mt-3 grid gap-2.5 p-0">
                  {excluded.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-[15px] text-moss">
                      <X size={17} className="mt-0.5 shrink-0 text-moss/60" /> {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="font-display text-2xl tracking-tight">{t('dt.route')}</h2>
            <div className="mt-4 overflow-auto rounded-2xl border border-line">
              <table className="w-full min-w-[620px] border-collapse text-[14.5px]">
                <thead>
                  <tr className="bg-[#F2EEE1] text-left text-xs uppercase tracking-widest text-moss">
                    <th className="px-4 py-3">{t('dt.c1')}</th>
                    <th className="px-4 py-3">{t('dt.c2')}</th>
                    <th className="px-4 py-3">{t('dt.c3')}</th>
                    <th className="px-4 py-3">{t('dt.c4')}</th>
                  </tr>
                </thead>
                <tbody>
                  {(ROUTE_ROWS[base.slug] ?? []).map((r) => (
                    <tr key={r.day + r.to} className="border-t border-line hover:bg-[#FCFAF4]">
                      <td className="whitespace-nowrap px-4 py-3.5 font-extrabold text-brand">{r.day}</td>
                      <td className="px-4 py-3.5">
                        <span className="font-semibold">{r.from}</span>
                        <span className="mx-1.5 inline-flex items-center align-middle text-brand2"><MoveRight size={15} /></span>
                        <span className="text-moss">{r.to}</span>
                      </td>
                      <td className="px-4 py-3.5">
                        <span className="inline-flex items-center gap-1.5 font-semibold"><Moon size={14} className="text-brand2" /> {r.stay}</span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3.5 text-moss">
                        <span className="inline-flex items-center gap-1.5"><Clock3 size={14} /> {r.drive}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8">
            <Elevation data={ELEVATION[base.slug] ?? ELEVATION['muktinath-darshan']} title={t('dt.alt')} highest={t('dt.highest')} note={t('dt.altnote')} />
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-cream p-6 md:p-8">
              <h2 className="flex items-center gap-2.5 font-display text-2xl tracking-tight">
                <ClipboardCheck size={22} className="text-brand" /> {t('dt.req')}
              </h2>
              <ul className="mt-4 grid gap-2.5">
                {(REQUIRED[base.slug] ?? []).map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-[15px]">
                    <Check size={17} className="mt-0.5 shrink-0 text-brand2" /> {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-dashed border-ink/25 bg-[#FCFAF5] p-6 md:p-8">
              <h2 className="flex items-center gap-2.5 font-display text-2xl tracking-tight">
                <Backpack size={22} className="text-brand" /> {t('dt.pack')}
              </h2>
              <ul className="mt-4 grid gap-2.5">
                {packing.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-[15px] text-moss">
                    <Check size={17} className="mt-0.5 shrink-0 text-accent" /> {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="no-print mt-10">
        <h2 className="font-display text-[clamp(24px,3vw,34px)] tracking-tight">{t('dt.related')}</h2>
        <div className="mt-5 grid gap-6 md:grid-cols-2">
          {related.map((r) => (
            <Link
              key={r.slug}
              href={`/packages/${r.slug}`}
              className="group flex gap-4 rounded-3xl border border-line bg-white p-4 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(26,46,34,0.12)]"
            >
              <div
                className="h-[130px] w-[150px] shrink-0 rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: `url('${r.image}')` }}
              />
              <div className="flex flex-col justify-center gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-brand2">{r.days}</span>
                <b className="font-display text-xl leading-snug group-hover:underline">{r.title}</b>
                <span className="text-sm font-bold">{r.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
