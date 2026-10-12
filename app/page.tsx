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
import Faq, { FAQ_JSON_LD } from '@/components/Faq';

const TESTIMONIALS = [
  {
    quote:
      'Reached Muktinath for morning aarti without any rush. The driver knew exactly when to leave Pokhara to beat the wind. My 68 year old father completed the darshan comfortably.',
    name: 'Ramesh Adhikari',
    detail: 'Kathmandu · Muktinath Darshan',
  },
  {
    quote:
      'We were 6 family members with two kids. Clean Scorpio, honest fare told upfront, and stops at every viewpoint the kids wanted. Felt like travelling with family, not a rental.',
    name: 'Sita Gurung',
    detail: 'Pokhara · Lower Mustang Explorer',
  },
  {
    quote:
      'Upper Mustang roads are rough but I always felt safe. Permits, guide, lodges, everything was arranged before I landed. Best organised part of my Nepal trip.',
    name: 'Daniel Kraus',
    detail: 'Germany · Upper Mustang',
  },
];

const GALLERY = [
  { src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop', label: 'Muktinath valley' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop', label: 'Nilgiri range, Mustang' },
  { src: 'https://images.unsplash.com/photo-1573398643956-2b9e6ade3456?q=80&w=800&auto=format&fit=crop', label: 'Upper Mustang desert' },
  { src: 'https://images.unsplash.com/photo-1558799401-1dcba79834c2?q=80&w=800&auto=format&fit=crop', label: 'Phewa Lake, Pokhara' },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      <section className="relative overflow-hidden border-b border-line bg-pine text-white">
        <div
          className="absolute inset-0 scale-[1.02] bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/70" />
        <div className="relative z-[2] mx-auto max-w-6xl px-5 pb-24 pt-20 md:pb-32 md:pt-28">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em]">
              Pokhara · 4x4 Scorpio Tours Across Nepal
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-ink">
              <Star size={13} className="fill-accent text-accent" /> 4.9 rated by 200 plus travellers
            </span>
          </div>
          <h1 className="mt-6 max-w-[15ch] font-display text-[clamp(40px,7vw,80px)] leading-[1.0] tracking-tight">
            Skip the bus. <em className="font-normal italic text-amber-300">See the real Nepal.</em>
          </h1>
          <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-[#E7EFE8]">
            A-One Adventures is a family run Scorpio service from Pokhara, open for reservation for full All Nepal
            circuits plus Mustang, Muktinath, Pathivara, Chitwan and Lumbini trips. Our 8 seater Scorpios come with
            experienced mountain drivers. No brokers, no swapped vehicles, no surprise charges.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-bold text-white transition hover:brightness-95"
            >
              Check availability <ArrowRight size={17} />
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-ink"
            >
              View 6 packages
            </Link>
          </div>
          <div className="mt-14 grid gap-8 border-t border-white/20 pt-8 sm:grid-cols-3">
            {[
              ['8 seater Scorpios', 'High clearance, serviced fleet'],
              ['All Nepal coverage', 'Mustang to Mechi to Mahakali'],
              ['Permits handled', 'ACAP and restricted area help'],
            ].map(([b, s]) => (
              <div key={b}>
                <b className="block font-display text-2xl tracking-tight">{b}</b>
                <span className="mt-1 block text-sm text-[#D8E4DA]">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-[60ch]">
            <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">Popular packages</div>
            <h2 className="mt-3 font-display text-[clamp(30px,4vw,46px)] leading-tight tracking-tight">
              Built around real road conditions, not brochure dreams.
            </h2>
          </div>
          <Link href="/packages" className="hidden items-center gap-1.5 font-bold text-brand md:inline-flex">
            All packages <ArrowRight size={16} />
          </Link>
        </div>
        <p className="mt-3 max-w-[64ch] text-[17px] leading-relaxed text-moss">
          Fares researched against 2026 operators across Nepal. Full Scorpio pricing. Split it among 6 to 7 people and
          it beats any bus.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PACKAGES.slice(0, 3).map((p) => (
            <article
              key={p.slug}
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
                    Details
                  </Link>
                  <Link
                    href={`/contact?package=${p.slug}`}
                    className="flex flex-1 justify-center rounded-full border border-line px-5 py-3.5 text-[15px] font-bold"
                  >
                    Reserve
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <div className="max-w-[64ch]">
            <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">Why A-One</div>
            <h2 className="mt-3 font-display text-[clamp(30px,4vw,46px)] leading-tight tracking-tight">
              A travel company that answers the phone.
            </h2>
            <p className="mt-3 text-[17px] leading-relaxed text-moss">
              Led by {SITE.driver}. Every trip is planned with you directly, then driven by mountain tested drivers.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, t: 'Safety first', s: 'Oxygen and first aid in every Scorpio. Slow mountain driving, wind aware starts.' },
              { icon: Compass, t: 'All Nepal experience', s: 'Mustang, Pathivara, Chitwan, Lumbini and Kathmandu routes driven regularly.' },
              { icon: HeartHandshake, t: 'Pilgrim friendly', s: 'Slow pacing, temple timing help, pony and palanquin coordination for elders.' },
              { icon: BadgeCheck, t: 'Transparent fare', s: 'Fuel, tolls and driver stay in the quote. Permit guidance free, no hidden costs.' },
            ].map((c) => (
              <div key={c.t} className="reveal rounded-3xl border border-line bg-cream p-7">
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

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="reveal grid items-center gap-10 overflow-hidden rounded-[28px] bg-ink p-9 text-[#EDF3EE] md:p-14 lg:grid-cols-2">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-amber-300">Our fleet</div>
            <h2 className="mt-3 font-display text-[clamp(28px,4vw,42px)] leading-tight tracking-tight text-white">
              Scorpios built for Himalayan roads.
            </h2>
            <p className="mt-3 leading-relaxed text-[#DCE7DE]">
              Including our {VEHICLE.name} {VEHICLE.year}. High clearance, serviced for mountain load, comfortable 7
              plus driver seating. Every Scorpio leaves with full fuel, oxygen backup and a driver who knows the route.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { icon: Users, t: '7 guests plus driver' },
                { icon: Mountain, t: '4WD, high clearance' },
                { icon: Fuel, t: 'Full fuel included in fare' },
                { icon: Wrench, t: 'Serviced before every trip' },
              ].map((s) => (
                <div key={s.t} className="flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-[14.5px] font-semibold">
                  <s.icon size={18} className="shrink-0 text-amber-300" /> {s.t}
                </div>
              ))}
            </div>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-bold text-ink">
              Reserve a Scorpio <ArrowRight size={16} />
            </Link>
          </div>
          <div
            className="min-h-[320px] rounded-2xl bg-cover bg-center lg:min-h-[440px]"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1400&auto=format&fit=crop')" }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 md:pb-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[clamp(28px,4vw,42px)] leading-tight tracking-tight">
            Postcards from the road.
          </h2>
          <Link href="/packages" className="hidden items-center gap-1.5 font-bold text-brand md:inline-flex">
            Plan your trip <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {GALLERY.map((g) => (
            <div key={g.label} className="reveal group relative h-[220px] overflow-hidden rounded-3xl md:h-[260px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${g.src}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-4 left-4 text-sm font-bold text-white">{g.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <div className="max-w-[64ch]">
            <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">How it works</div>
            <h2 className="mt-3 font-display text-[clamp(30px,4vw,46px)] leading-tight tracking-tight">
              Reserved in four simple steps.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ClipboardList, t: 'Send enquiry', s: 'Dates, group size and package on the contact form. Takes 30 seconds.' },
              { icon: PhoneCall, t: 'We call back', s: 'Confirmed Scorpios, exact fare and pickup plan within hours.' },
              { icon: Wallet, t: 'Small advance', s: 'eSewa or bank transfer locks your dates. Balance later, no stress.' },
              { icon: Car, t: 'Pickup and travel', s: 'Hotel pickup at 5 to 6 AM for Mustang. Enjoy the road.' },
            ].map((s, i) => (
              <div key={s.t} className="reveal relative rounded-3xl border border-line bg-cream p-7">
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

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="max-w-[64ch]">
          <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">Traveller stories</div>
          <h2 className="mt-3 font-display text-[clamp(30px,4vw,46px)] leading-tight tracking-tight">
            Rated 4.9 by families and pilgrims.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="reveal m-0 flex flex-col gap-4 rounded-3xl border border-line bg-white p-7">
              <div className="flex gap-1 text-accent">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} size={16} className="fill-accent" />
                ))}
              </div>
              <blockquote className="m-0 leading-relaxed text-ink/85">“{t.quote}”</blockquote>
              <figcaption className="mt-auto">
                <b className="block">{t.name}</b>
                <span className="text-sm text-moss">{t.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 md:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">Good to know</div>
            <h2 className="mt-3 font-display text-[clamp(30px,4vw,46px)] leading-tight tracking-tight">
              Questions, answered honestly.
            </h2>
            <p className="mt-3 leading-relaxed text-moss">
              Anything else on your mind? Call <a href={SITE.phoneHref} className="font-bold text-brand">{SITE.phone}</a> and
              ask directly.
            </p>
            <Link href="/routes" className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-[15px] font-bold">
              See routes and fares <ArrowRight size={16} />
            </Link>
          </div>
          <div className="reveal">
            <Faq />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 md:pb-24">
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
              {ROUTES.map((r) => (
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

      <section className="mx-auto max-w-6xl px-5 pb-20 md:pb-24">
        <div className="reveal rounded-[28px] bg-brand px-8 py-14 text-center text-white md:py-16">
          <h2 className="mx-auto max-w-[22ch] font-display text-[clamp(28px,4vw,44px)] leading-tight tracking-tight">
            Tell us your dates. We handle the road.
          </h2>
          <p className="mx-auto mt-3 max-w-[52ch] text-[16.5px] text-white/85">
            Send an enquiry with your dates and group size, and we call you back with confirmed Scorpios and fare.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-ink">
              Send an enquiry <ArrowRight size={17} />
            </Link>
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 text-base font-bold text-white">
              <Phone size={17} /> Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
