import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE, VEHICLE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Us, Family Run Jeep Tours in Pokhara',
  description:
    'Meet Ganesh Prasad Subedi, owner driver of A-One Adventures Pokhara. One 8 seater 4WD, years of All Nepal road experience, pilgrim friendly driving.',
  alternates: { canonical: '/about' },
};

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">About us</div>
      <h1 className="mt-2 max-w-[20ch] font-display text-[clamp(28px,4vw,42px)] leading-tight tracking-tight">
        A father, a jeep, and a promise to drive safe.
      </h1>
      <p className="mt-2 max-w-[64ch] text-[16.5px] text-moss">
        A-One Adventures started with one vehicle, our family 4x4, and one idea: give travellers in Pokhara a driver
        they can call by name. {SITE.driver} has spent years on highways and mountain roads across Nepal and knows
        every waterfall halt, wind window and tea stop on the way.
      </p>
      <div className="mt-6 grid gap-[18px] md:grid-cols-2">
        <div className="rounded-2xl border border-line bg-white">
          <div className="flex flex-col gap-2.5 p-5">
            <span className="w-fit rounded-full bg-brand px-3 py-1.5 text-xs font-bold text-white">Owner driver</span>
            <h3 className="font-display text-[22px]">{SITE.driver}</h3>
            <p className="text-moss">
              Mountain driver, Hindi and Nepali plus basic English, pilgrim and family specialist. Phone:{' '}
              <a href={SITE.phoneHref} className="font-extrabold text-brand">
                {SITE.phone}
              </a>
            </p>
            <ul className="m-0 list-disc pl-[18px] text-[15px] text-moss">
              <li>Early starts (5 to 6 AM) to beat Jomsom winds</li>
              <li>Oxygen and first aid always in the jeep</li>
              <li>Helps with ACAP and Upper Mustang permits</li>
            </ul>
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-white">
          <div className="flex flex-col gap-2.5 p-5">
            <span className="w-fit rounded-full bg-ink px-3 py-1.5 text-xs font-bold text-white">The vehicle</span>
            <h3 className="font-display text-[22px]">
              {VEHICLE.name} {VEHICLE.year}
            </h3>
            <p className="text-moss">
              {VEHICLE.seats}, {VEHICLE.drive}. Serviced for mountain load, comfortable 2 plus 3 plus 2 seating.
              Number plate and photos being added. Call us for the latest pictures.
            </p>
            <div className="mt-1 grid grid-cols-3 gap-3">
              {[
                'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop',
              ].map((u) => (
                <div key={u} className="h-[120px] rounded-2xl border border-line bg-cover bg-center" style={{ backgroundImage: `url('${u}')` }} />
              ))}
            </div>
            <p className="text-[13px] text-moss">Placeholder photos. Swap with your own jeep shots when ready.</p>
          </div>
        </div>
      </div>
      <div className="mt-[22px] flex flex-wrap gap-2.5">
        <Link href="/packages" className="rounded-full bg-ink px-5 py-3 text-[15px] font-bold text-white">
          See packages
        </Link>
        <Link href="/booking" className="rounded-full border border-line px-5 py-3 text-[15px] font-bold">
          Reserve your seats
        </Link>
      </div>
    </section>
  );
}
