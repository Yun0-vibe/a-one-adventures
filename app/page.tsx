import Link from 'next/link';
import { PACKAGES, ROUTES, SITE, VEHICLE } from '@/lib/site';

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-pine text-white">
        <div
          className="absolute inset-0 scale-[1.02] bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/70" />
        <div className="relative z-[2] mx-auto max-w-6xl px-5 pb-24 pt-24 md:pb-32 md:pt-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em]">
            Pokhara · 4x4 Jeep Tours Across Nepal
          </span>
          <h1 className="mt-6 max-w-[15ch] font-display text-[clamp(42px,7vw,80px)] leading-[1.0] tracking-tight">
            All Nepal by road. <em className="font-normal italic text-amber-300">Drivers you can call by name.</em>
          </h1>
          <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-[#E7EFE8]">
            A-One Adventures is a family run jeep service from Pokhara, open for reservation for full All Nepal
            circuits plus Mustang, Muktinath, Pathivara, Chitwan and Lumbini trips. Our 8 seater 4WDs come with
            experienced mountain drivers. No brokers, no swapped vehicles, no surprise charges.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-bold text-white transition hover:brightness-95"
            >
              Check availability
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
              ['8 seater 4WDs', 'High clearance, serviced fleet'],
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
        <div className="max-w-[64ch]">
          <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">Popular packages</div>
          <h2 className="mt-3 font-display text-[clamp(30px,4vw,46px)] leading-tight tracking-tight">
            Built around real road conditions, not brochure dreams.
          </h2>
          <p className="mt-3 text-[17px] leading-relaxed text-moss">
            Fares researched against 2026 operators across Nepal. Full jeep pricing. Split it among 6 to 7 people and
            it beats any bus.
          </p>
        </div>
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
        <div className="mt-10">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-[15px] font-bold"
          >
            See all 6 packages
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 md:pb-24">
        <div className="reveal grid overflow-hidden rounded-[28px] bg-ink text-[#EDF3EE] lg:grid-cols-2">
          <div className="p-9 md:p-14">
            <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-amber-300">Why A-One</div>
            <h2 className="mt-3 font-display text-[clamp(28px,4vw,42px)] leading-tight tracking-tight text-white">
              You know exactly who is driving you.
            </h2>
            <ul className="mt-8 grid gap-5 p-0">
              {[
                ['Reservation led.', `${SITE.driver} heads bookings and drives the high mountain routes himself.`],
                ['All Nepal experience.', 'Mustang, Pathivara, Chitwan, Lumbini and Kathmandu routes driven regularly.'],
                ['Pilgrim friendly.', 'Slow pacing, temple timing help, pony and palanquin coordination for elders.'],
                ['Transparent fare.', 'Fuel, tolls and driver stay included in the quote. Permit guidance free.'],
              ].map(([b, s]) => (
                <li key={b} className="flex items-start gap-3 text-[15.5px] leading-relaxed text-[#DCE7DE]">
                  <span className="mt-0.5 text-amber-300">✓</span>
                  <span>
                    <b className="text-white">{b}</b> {s}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/about" className="rounded-full bg-white px-6 py-3.5 text-[15px] font-bold text-ink">
                About us
              </Link>
              <Link href="/contact" className="rounded-full border border-white/30 px-6 py-3.5 text-[15px] font-bold text-white">
                Talk to {SITE.driver.split(' ')[0]}
              </Link>
            </div>
          </div>
          <div
            className="min-h-[360px] bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1400&auto=format&fit=crop')" }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 md:pb-24">
        <div className="max-w-[64ch]">
          <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">Routes we run</div>
          <h2 className="mt-3 font-display text-[clamp(30px,4vw,46px)] leading-tight tracking-tight">
            From Lakeside to every corner of Nepal.
          </h2>
        </div>
        <div className="reveal mt-8 overflow-auto rounded-3xl border border-line bg-white">
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
        <div className="mt-5 flex flex-wrap gap-3">
          {[`${VEHICLE.name} ${VEHICLE.year} in the fleet`, 'Experienced mountain drivers', 'Pokhara pickup, All Nepal drop'].map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-sm font-bold"
            >
              ● {c}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 md:pb-24">
        <div className="reveal rounded-[28px] bg-brand px-8 py-14 text-center text-white md:py-16">
          <h2 className="mx-auto max-w-[22ch] font-display text-[clamp(28px,4vw,44px)] leading-tight tracking-tight">
            Tell us your dates. We handle the road.
          </h2>
          <p className="mx-auto mt-3 max-w-[52ch] text-[16.5px] text-white/85">
            Send an enquiry with your dates and group size, and we call you back with confirmed jeeps and fare.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="rounded-full bg-white px-7 py-4 text-base font-bold text-ink">
              Send an enquiry
            </Link>
            <a href={SITE.phoneHref} className="rounded-full border border-white/40 px-7 py-4 text-base font-bold text-white">
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
