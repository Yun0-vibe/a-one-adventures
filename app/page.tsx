import Link from 'next/link';
import {
  Star,
  ShieldCheck,
  Compass,
  HeartHandshake,
  BadgeCheck,
  Users,
  Mountain,
  Wrench,
  Fuel,
  ClipboardList,
  PhoneCall,
  Wallet,
  Car,
  ArrowRight,
  Phone,
} from 'lucide-react';
import { PACKAGES, ROUTES, SITE, VEHICLE } from '@/lib/site';
import { NE_PACKAGES, NE_ROUTES } from '@/lib/ne-data';
import { getLang, makeT } from '@/lib/lang';
import Faq, { FAQ_JSON_LD } from '@/components/Faq';
import Counters from '@/components/Counters';
import Gallery from '@/components/Gallery';

const GALLERY = [
  { src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop', label: 'Muktinath valley' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop', label: 'Nilgiri range, Mustang' },
  { src: 'https://images.unsplash.com/photo-1573398643956-2b9e6ade3456?q=80&w=800&auto=format&fit=crop', label: 'Upper Mustang desert' },
  { src: 'https://images.unsplash.com/photo-1558799401-1dcba79834c2?q=80&w=800&auto=format&fit=crop', label: 'Phewa Lake, Pokhara' },
];

const TICKER = ['Muktinath', 'Lo Manthang', 'Pathivara', 'Jomsom', 'Marpha', 'Kagbeni', 'Chitwan', 'Lumbini', 'Kathmandu', 'Ghandruk', 'Tatopani', 'Ilam'];

export default function Home() {
  const lang = getLang();
  const { t } = makeT(lang);
  const pkgs = PACKAGES.slice(0, 3).map((p) => (lang === 'ne' ? { ...p, ...NE_PACKAGES[p.slug] } : p));
  const routes = lang === 'ne' ? NE_ROUTES : ROUTES;
  const why = [
    { icon: ShieldCheck, t: t('why.1t'), s: t('why.1s') },
    { icon: Compass, t: t('why.2t'), s: t('why.2s') },
    { icon: HeartHandshake, t: t('why.3t'), s: t('why.3s') },
    { icon: BadgeCheck, t: t('why.4t'), s: t('why.4s') },
  ];
  const fleetSpecs = [
    { icon: Users, t: t('fleet.s1') },
    { icon: Mountain, t: t('fleet.s2') },
    { icon: Fuel, t: t('fleet.s3') },
    { icon: Wrench, t: t('fleet.s4') },
  ];
  const steps = [
    { icon: ClipboardList, t: t('st.1t'), s: t('st.1s') },
    { icon: PhoneCall, t: t('st.2t'), s: t('st.2s') },
    { icon: Wallet, t: t('st.3t'), s: t('st.3s') },
    { icon: Car, t: t('st.4t'), s: t('st.4s') },
  ];
  const testimonials = [
    { name: 'Ramesh Adhikari', q: t('te.1q'), d: t('te.1d') },
    { name: 'Sita Gurung', q: t('te.2q'), d: t('te.2d') },
    { name: 'Daniel Kraus', q: t('te.3q'), d: t('te.3d') },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      <section className="relative overflow-hidden border-b border-line bg-pine text-white">
        <div
          className="kenburns absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/70" />
        <div className="relative z-[2] mx-auto max-w-6xl px-5 pb-16 pt-14 md:pb-32 md:pt-28">
          <div className="anim-hero flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em]">
              {t('hero.eyebrow')}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-ink">
              <Star size={13} className="fill-accent text-accent" /> {t('hero.badge')}
            </span>
          </div>
          <h1 className="anim-hero anim-d1 mt-6 max-w-[15ch] font-display text-[clamp(40px,7vw,80px)] leading-[1.0] tracking-tight">
            {t('hero.titleA')} <em className="font-normal italic text-amber-300">{t('hero.titleB')}</em>
          </h1>
          <p className="anim-hero anim-d2 mt-6 max-w-[54ch] text-lg leading-relaxed text-[#E7EFE8]">{t('hero.lead')}</p>
          <div className="anim-hero anim-d3 mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-bold text-white transition hover:brightness-95"
            >
              {t('hero.cta1')} <ArrowRight size={17} />
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-ink"
            >
              {t('hero.cta2')}
            </Link>
          </div>
          <div className="anim-hero anim-d4 mt-14 grid gap-8 border-t border-white/20 pt-8 sm:grid-cols-3">
            {[
              [t('hero.s1t'), t('hero.s1s')],
              [t('hero.s2t'), t('hero.s2s')],
              [t('hero.s3t'), t('hero.s3s')],
            ].map(([b, s]) => (
              <div key={b}>
                <b className="block font-display text-2xl tracking-tight">{b}</b>
                <span className="mt-1 block text-sm text-[#D8E4DA]">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="ticker overflow-hidden border-b border-line bg-accent py-4 text-white">
        <div className="ticker-track flex w-max items-center gap-10 pr-10">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-10" aria-hidden={dup === 1}>
              {TICKER.map((d) => (
                <span key={d} className="flex items-center gap-10 whitespace-nowrap font-display text-xl italic tracking-tight">
                  {d} <span className="text-sm not-italic">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-[60ch]">
            <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">{t('pkg.kicker')}</div>
            <h2 className="mt-3 font-display text-[clamp(30px,4vw,46px)] leading-tight tracking-tight">{t('pkg.title')}</h2>
          </div>
          <Link href="/packages" className="hidden items-center gap-1.5 font-bold text-brand md:inline-flex">
            {t('pkg.all')} <ArrowRight size={16} />
          </Link>
        </div>
        <p className="mt-3 max-w-[64ch] text-[17px] leading-relaxed text-moss">{t('pkg.sub')}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pkgs.map((p, i) => (
            <article
              key={p.slug}
              data-delay={i * 100}
              className="reveal flex flex-col overflow-hidden rounded-3xl border border-line bg-white transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(26,46,34,0.12)]"
            >
              <div className="relative h-[220px] bg-cover bg-center" style={{ backgroundImage: `url('${p.image}')` }}>
                <span className="absolute left-4 top-4 rounded-full bg-ink px-3.5 py-1.5 text-xs font-bold text-white">
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="font-display text-2xl tracking-tight">{p.title}</h3>
                <div className="flex flex-wrap gap-2 text-sm font-semibold text-moss">
                  <span>{p.days}</span>·<span>{p.nights}</span>
                </div>
                <p className="m-0 leading-relaxed text-moss">{p.summary}</p>
                <div className="text-base font-extrabold">
                  {p.price}
                  <small className="mt-0.5 block text-[13px] font-medium text-moss">{p.priceNote}</small>
                </div>
                <div className="mt-auto flex gap-2.5 pt-3">
                  <Link
                    href={`/packages/${p.slug}`}
                    className="flex flex-1 justify-center rounded-full bg-ink px-5 py-3.5 text-[15px] font-bold text-white"
                  >
                    {t('card.details')}
                  </Link>
                  <Link
                    href={`/contact?package=${p.slug}`}
                    className="flex flex-1 justify-center rounded-full border border-line px-5 py-3.5 text-[15px] font-bold"
                  >
                    {t('card.reserve')}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14 md:pb-24">
        <div className="reveal">
          <Counters />
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-24">
          <div className="max-w-[64ch]">
            <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">{t('why.kicker')}</div>
            <h2 className="mt-3 font-display text-[clamp(30px,4vw,46px)] leading-tight tracking-tight">{t('why.title')}</h2>
            <p className="mt-3 text-[17px] leading-relaxed text-moss">{t('why.sub')}</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((c, i) => (
              <div key={c.t} data-delay={i * 90} className="reveal rounded-3xl border border-line bg-cream p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white">
                  <c.icon size={22} />
                </span>
                <h3 className="mt-4 font-display text-xl tracking-tight">{c.t}</h3>
                <p className="m-0 mt-2 text-[14.5px] leading-relaxed text-moss">{c.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-24">
        <div className="reveal grid items-center gap-10 overflow-hidden rounded-[28px] panel-dark p-9 text-[#EDF3EE] md:p-14 lg:grid-cols-2">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-amber-300">{t('fleet.kicker')}</div>
            <h2 className="mt-3 font-display text-[clamp(28px,4vw,42px)] leading-tight tracking-tight text-white">
              {t('fleet.title')}
            </h2>
            <p className="mt-3 leading-relaxed text-[#DCE7DE]">
              {t('fleet.desc')}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {fleetSpecs.map((s) => (
                <div key={s.t} className="flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-[14.5px] font-semibold">
                  <s.icon size={18} className="shrink-0 text-amber-300" /> {s.t}
                </div>
              ))}
            </div>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-bold text-ink">
              {t('fleet.cta')} <ArrowRight size={16} />
            </Link>
          </div>
          <div
            className="min-h-[320px] rounded-2xl bg-cover bg-center lg:min-h-[440px]"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1400&auto=format&fit=crop')" }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14 md:pb-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[clamp(28px,4vw,42px)] leading-tight tracking-tight">{t('gal.title')}</h2>
          <Link href="/packages" className="hidden items-center gap-1.5 font-bold text-brand md:inline-flex">
            {t('gal.link')} <ArrowRight size={16} />
          </Link>
        </div>
        <Gallery items={GALLERY} />
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-24">
          <div className="max-w-[64ch]">
            <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">{t('steps.kicker')}</div>
            <h2 className="mt-3 font-display text-[clamp(30px,4vw,46px)] leading-tight tracking-tight">{t('steps.title')}</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.t} data-delay={i * 90} className="reveal relative rounded-3xl border border-line bg-cream p-7">
                <span className="absolute right-6 top-5 font-display text-4xl text-ink/10">{i + 1}</span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-white">
                  <s.icon size={22} />
                </span>
                <h3 className="mt-4 font-display text-xl tracking-tight">{s.t}</h3>
                <p className="m-0 mt-2 text-[14.5px] leading-relaxed text-moss">{s.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-24">
        <div className="max-w-[64ch]">
          <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">{t('testi.kicker')}</div>
          <h2 className="mt-3 font-display text-[clamp(30px,4vw,46px)] leading-tight tracking-tight">{t('testi.title')}</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <figure key={item.name} data-delay={i * 100} className="reveal m-0 flex flex-col gap-4 rounded-3xl border border-line bg-white p-7">
              <div className="flex gap-1 text-accent">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} size={16} className="fill-accent" />
                ))}
              </div>
              <blockquote className="m-0 leading-relaxed text-ink/85">“{item.q}”</blockquote>
              <figcaption className="mt-auto">
                <b className="block">{item.name}</b>
                <span className="text-sm text-moss">{item.d}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14 md:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">{t('faq.kicker')}</div>
            <h2 className="mt-3 font-display text-[clamp(30px,4vw,46px)] leading-tight tracking-tight">{t('faq.title')}</h2>
            <p className="mt-3 leading-relaxed text-moss">
              {t('faq.desc', { phone: SITE.phone }).split(SITE.phone)[0]}
              <a href={SITE.phoneHref} className="font-bold text-brand">{SITE.phone}</a>
              {t('faq.desc', { phone: SITE.phone }).split(SITE.phone)[1]}
            </p>
            <Link href="/routes" className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-[15px] font-bold">
              {t('faq.link')} <ArrowRight size={16} />
            </Link>
          </div>
          <div className="reveal">
            <Faq />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14 md:pb-24">
        <div className="mt-2 overflow-auto rounded-3xl border border-line bg-white">
          <table className="w-full min-w-[640px] border-collapse text-[15px]">
            <thead>
              <tr className="bg-[#F2EEE1] text-left text-xs uppercase tracking-widest text-moss">
                <th className="px-5 py-4">Route</th>
                <th className="px-5 py-4">Distance</th>
                <th className="px-5 py-4">Time</th>
                <th className="px-5 py-4">Via</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((r) => (
                <tr key={r.name} className="hover:bg-[#FCFAF4]">
                  <td className="border-t border-line px-5 py-4 font-bold">{r.name}</td>
                  <td className="border-t border-line px-5 py-4">{r.dist}</td>
                  <td className="border-t border-line px-5 py-4">{r.time}</td>
                  <td className="border-t border-line px-5 py-4">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14 md:pb-24">
        <div className="reveal rounded-[28px] panel-brand px-8 py-14 text-center text-white md:py-16">
          <h2 className="mx-auto max-w-[22ch] font-display text-[clamp(28px,4vw,44px)] leading-tight tracking-tight">
            {t('cta.title')}
          </h2>
          <p className="mx-auto mt-3 max-w-[52ch] text-[16.5px] text-white/85">{t('cta.sub')}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-ink">
              {t('cta.b1')} <ArrowRight size={17} />
            </Link>
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 text-base font-bold text-white">
              <Phone size={17} /> {t('cta.b2', { phone: SITE.phone })}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
