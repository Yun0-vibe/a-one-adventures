import type { Metadata } from 'next';
import { ROUTES } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Routes and Fares, Pokhara to Muktinath, Mustang, Kathmandu',
  description:
    'Scorpio routes from Pokhara: Muktinath 168km, Lo Manthang, Ghandruk, Kathmandu, Chitwan, Pathivara. Distances, drive times and 2026 fare guidance.',
  alternates: { canonical: '/routes' },
};

export default function Routes() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">Routes and fares</div>
      <h1 className="mt-2 font-display text-[clamp(28px,4vw,42px)] leading-tight tracking-tight">
        Every road our Scorpio knows by heart.
      </h1>
      <p className="mt-2 max-w-[64ch] text-[16.5px] text-moss">
        Indicative 2026 charter fares (fuel plus driver included). Round trip packages on the Packages page are better
        value. Monsoon and festival weeks may vary. Confirm on call.
      </p>
      <div className="mt-5 overflow-auto rounded-2xl border border-line bg-white">
        <table className="w-full min-w-[640px] border-collapse text-[14.5px]">
          <thead>
            <tr className="bg-[#F2EEE1] text-left text-xs uppercase tracking-widest text-moss">
              <th className="px-4 py-3.5">Route</th>
              <th className="px-4 py-3.5">Distance</th>
              <th className="px-4 py-3.5">Time</th>
              <th className="px-4 py-3.5">Via and notes</th>
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
      <div className="mt-6 grid gap-[18px] md:grid-cols-2">
        <div className="rounded-2xl border border-line bg-white">
          <div className="p-5">
            <h3 className="font-display text-[22px]">Good to know</h3>
            <ul className="list-disc pl-5 text-[15px] text-moss">
              <li>Start 5 to 6 AM for Mustang. Jomsom winds pick up after 11 AM.</li>
              <li>ACAP permit NPR 3,000 per person for Mustang. Upper Mustang USD 50 per day plus licensed guide.</li>
              <li>Best months: March to May and September to November. Upper Mustang is rain shadow, fine in monsoon.</li>
              <li>Carry warm layers. Muktinath (3,710m) is much colder than Pokhara.</li>
            </ul>
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-white">
          <div className="p-5">
            <h3 className="font-display text-[22px]">Road reality check</h3>
            <p className="text-[15px] text-moss">
              Beni to Jomsom is part gravel mountain road. Our Scorpios handle it weekly, but expect a bumpy, beautiful
              adventure, not an expressway. We drive slow where it matters and stop where it counts: Rupse falls,
              Marpha, Dhumba Lake.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
