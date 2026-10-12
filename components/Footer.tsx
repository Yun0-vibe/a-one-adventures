import Link from 'next/link';
import { SITE, VEHICLE } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="mt-5 border-t border-line bg-pine text-[#CBD9CE]">
      <div className="mx-auto grid max-w-6xl gap-7 px-5 pb-7 pt-11 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            <img src="/logo.svg" alt="" width={36} height={36} className="rounded-[10px] bg-white p-1" />
            <b className="text-white">A-One Adventures</b>
          </div>
          <p className="max-w-[38ch] text-[14.5px]">
            8 seater 4WD tours from Pokhara across Nepal. Clean jeeps, experienced mountain drivers. Available
            for reservation for families, pilgrims and groups.
          </p>
          <p className="mt-3 text-sm">
            Driver: <b className="text-white">{SITE.driver}</b>
            <br />
            <a href={SITE.phoneHref} className="font-extrabold text-amber-300">
              {SITE.phone}
            </a>{' '}
            · {SITE.location}
          </p>
        </div>
        <div>
          <h4 className="mb-2.5 text-sm font-bold uppercase tracking-widest text-white">Explore</h4>
          <Link href="/about" className="block py-1 text-[14.5px] hover:text-white">About us</Link>
          <Link href="/packages" className="block py-1 text-[14.5px] hover:text-white">All packages</Link>
          <Link href="/routes" className="block py-1 text-[14.5px] hover:text-white">Routes and fares</Link>
          <Link href="/contact" className="block py-1 text-[14.5px] hover:text-white">Reserve your seats</Link>
          <Link href="/contact" className="block py-1 text-[14.5px] hover:text-white">Contact</Link>
        </div>
        <div>
          <h4 className="mb-2.5 text-sm font-bold uppercase tracking-widest text-white">Top tours</h4>
          <Link href="/packages/muktinath-darshan" className="block py-1 text-[14.5px] hover:text-white">Muktinath Darshan, 3 days</Link>
          <Link href="/packages/upper-mustang-lo-manthang" className="block py-1 text-[14.5px] hover:text-white">Upper Mustang, Lo Manthang</Link>
          <Link href="/packages/pathivara-darshan" className="block py-1 text-[14.5px] hover:text-white">Pathivara Devi Darshan</Link>
          <Link href="/packages/all-nepal-tour" className="block py-1 text-[14.5px] hover:text-white">All Nepal Circuit</Link>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap gap-2.5 justify-between border-t border-white/10 px-5 py-4 text-[13px]">
        <span>© {new Date().getFullYear()} A-One Adventures, Pokhara. All rights reserved.</span>
        <span>
          Vehicle: {VEHICLE.name} {VEHICLE.year} · Plate: {VEHICLE.plate} (photo coming soon)
        </span>
      </div>
    </footer>
  );
}
