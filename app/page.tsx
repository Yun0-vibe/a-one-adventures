import Link from 'next/link';
import { PACKAGES, ROUTES, SITE, VEHICLE } from '@/lib/site';

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-pine text-white">
        <div
          className="absolute inset-0 scale-[1.02] bg-cover bg-center opacity-55"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />
        <div className="relative z-[2] mx-auto max-w-6xl px-5 pb-14 pt-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[12.5px] font-bold uppercase tracking-wider">
            Pokhara · 4x4 Jeep Tours Across Nepal
          </span>
          <h1 className="mt-4 max-w-[16ch] font-display text-[clamp(38px,6vw,68px)] leading-[1.02] tracking-tight">
            All Nepal by road. <em className="font-normal italic text-amber-300">One jeep, one trusted driver.</em>
          </h1>
          <p className="mt-3.5 max-w-[56ch] text-[17.5px] text-[#E7EFE8]">
            A-One Adventures is a family run jeep service from Pokhara, available for reservation for full All Nepal
            circuits as well as Mustang, Muktinath, Pathivara, Chitwan and Lumbini trips. {SITE.driver} drives his own{' '}
            {VEHICLE.name} {VEHICLE.year} ({VEHICLE.seats}). No brokers, no swapped vehicles, no surprise charges.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[15px] font-bold text-white transition hover:brightness-95"
            >
              Check availability
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[15px] font-bold text-ink"
            >
              View 6 packages
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-[15px] font-bold text-white"
            >
              Contact us
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              ['8 seater 4WD jeep', 'High clearance, serviced'],
              ['All Nepal coverage', 'Mustang to Mechi to Mahakali'],
              ['Permits handled', 'ACAP and restricted area help'],
              ['4.9 rated by families', 'Elders and pilgrims welcome'],
            ].map(([b, s]) => (
              <div key={b} className="rounded-2xl border border-white/20 bg-white/10 p-3.5 backdrop-blur">
                <b className="block text-[15px]">{b}</b>
                <span className="text-[13px] text-[#D8E4DA]">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">Popular packages</div>
        <h2 className="mt-2 font-display text-[clamp(28px,4vw,42px)] leading-tight tracking-tight">
          Built around real road conditions, not brochure dreams.
        </h2>
        <p className="mt-2 max-w-[64ch] text-[16.5px] text-moss">
          Fares researched against 2026 operators across Nepal. Full jeep pricing. Split it among 6 to 7 people and it
          beats any bus.
        </p>
        <div className="mt-6 grid gap-[18px] md:grid-cols-3">
          {PACKAGES.slice(0, 3).map((p) => (
            <article
              key={p.slug}
              className="reveal flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(26,46,34,0.12)]"
            >
              <div className="relative h-[210px] bg-cover bg-center" style={{ backgroundImage: `url('${p.image}')` }}>
                <span className="absolute left-3 top-3 rounded-full bg-ink px-3 py-1.5 text-xs font-bold text-white">
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
                    Details
                  </Link>
                  <Link
                    href={`/booking?package=${p.slug}`}
                    className="flex flex-1 justify-center rounded-full border border-line px-5 py-3 text-[15px] font-bold"
                  >
                    Reserve
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-[18px]">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-[15px] font-bold"
          >
            See all 6 packages
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-0">
        <div className="reveal grid overflow-hidden rounded-[22px] bg-ink text-[#EDF3EE] lg:grid-cols-2">
          <div className="p-9">
            <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-amber-300">Why A-One</div>
            <h2 className="mt-2 font-display text-[clamp(28px,4vw,42px)] leading-tight tracking-tight text-white">
              You know exactly who is driving you.
            </h2>
            <ul className="mt-[18px] grid gap-3 p-0">
              {[
                ['Owner driven.', `${SITE.driver} owns and drives the jeep himself. No random subcontracted driver.`],
                ['All Nepal experience.', 'Mustang, Pathivara, Chitwan, Lumbini and Kathmandu routes driven regularly.'],
                ['Pilgrim friendly.', 'Slow pacing, temple timing help, pony and palanquin coordination for elders.'],
                ['Transparent fare.', 'Fuel, tolls and driver stay included in the quote. Permit guidance free.'],
              ].map(([b, s]) => (
                <li key={b} className="flex items-start gap-2.5 text-[15px] text-[#DCE7DE]">
                  <span className="text-amber-300">✓</span>
                  <span>
                    <b className="text-white">{b}</b> {s}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <Link href="/about" className="rounded-full bg-white px-5 py-3 text-[15px] font-bold text-ink">
                About us
              </Link>
              <Link href="/contact" className="rounded-full border border-white/30 px-5 py-3 text-[15px] font-bold text-white">
                Talk to {SITE.driver.split(' ')[0]}
              </Link>
            </div>
          </div>
          <div
            className="min-h-[340px] bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1400&auto=format&fit=crop')" }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 pt-16">
        <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">Routes we run</div>
        <h2 className="mt-2 font-display text-[clamp(28px,4vw,42px)] leading-tight tracking-tight">
          From Lakeside to every corner of Nepal.
        </h2>
        <div className="reveal mt-5 overflow-auto rounded-2xl border border-line bg-white">
          <table className="w-full min-w-[640px] border-collapse text-[14.5px]">
            <thead>
              <tr className="bg-[#F2EEE1] text-left text-xs uppercase tracking-widest text-moss">
                <th className="px-4 py-3.5">Route</th>
                <th className="px-4 py-3.5">Distance</th>
                <th className="px-4 py-3.5">Time</th>
                <th className="px-4 py-3.5">Via</th>
              </tr>
            </thead>
            <tbody>
              {ROUTES.map((r) => (
                <tr key={r.name} className="hover:bg-[#FCFAF4]">
                  <td className="border-t border-line px-4 py-3.5 font-bold">{r.name}</td>
                  <td className="border-t border-line px-4 py-3.5">{r.dist}</td>
                  <td className="border-t border-line px-4 py-3.5">{r.time}</td>
                  <td className="border-t border-line px-4 py-3.5">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex flex-wrap gap-3.5">
          {[`${VEHICLE.name} ${VEHICLE.year}`, VEHICLE.seats, VEHICLE.drive, 'Pokhara pickup, All Nepal drop'].map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[13.5px] font-bold"
            >
              ● {c}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
