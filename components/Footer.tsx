import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SITE, VEHICLE } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-pine text-[#CBD9CE]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-10 pt-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <img src="/logo.svg" alt="A-One Adventures logo" width={40} height={40} className="rounded-xl bg-white p-1" />
            <span className="leading-tight">
              <b className="block text-white">A-One Adventures</b>
              <small className="text-[11px] uppercase tracking-[0.16em] text-white/60">Tours and Treks, Nepal</small>
            </span>
          </div>
          <p className="max-w-[36ch] text-[14.5px] leading-relaxed">
            Family run 8 seater Scorpio tours from Pokhara across Nepal. Clean Scorpios, experienced mountain drivers,
            honest fares. Available for reservation for families, pilgrims and groups.
          </p>
          <p className="mt-3 text-[13px] text-white/60">
            Fleet includes {VEHICLE.name} {VEHICLE.year}. Photos coming soon.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-[13px] font-bold uppercase tracking-[0.14em] text-white">Company</h4>
          <Link href="/about" className="block py-1.5 text-[14.5px] hover:text-white">About us</Link>
          <Link href="/packages" className="block py-1.5 text-[14.5px] hover:text-white">All packages</Link>
          <Link href="/routes" className="block py-1.5 text-[14.5px] hover:text-white">Routes and fares</Link>
          <Link href="/contact" className="block py-1.5 text-[14.5px] hover:text-white">Reserve your seats</Link>
        </div>
        <div>
          <h4 className="mb-3 text-[13px] font-bold uppercase tracking-[0.14em] text-white">Top tours</h4>
          <Link href="/packages/muktinath-darshan" className="block py-1.5 text-[14.5px] hover:text-white">Muktinath Darshan, 3 days</Link>
          <Link href="/packages/lower-mustang-explorer" className="block py-1.5 text-[14.5px] hover:text-white">Lower Mustang, 4 days</Link>
          <Link href="/packages/upper-mustang-lo-manthang" className="block py-1.5 text-[14.5px] hover:text-white">Upper Mustang, Lo Manthang</Link>
          <Link href="/packages/all-nepal-tour" className="block py-1.5 text-[14.5px] hover:text-white">All Nepal Circuit</Link>
        </div>
        <div>
          <h4 className="mb-3 text-[13px] font-bold uppercase tracking-[0.14em] text-white">Reach us</h4>
          <a href={SITE.phoneHref} className="flex items-center gap-2.5 py-1.5 text-[15px] font-bold text-white hover:text-amber-300">
            <Phone size={16} /> {SITE.phone}
          </a>
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 py-1.5 text-[14.5px] hover:text-white">
            <Mail size={16} /> {SITE.email}
          </a>
          <span className="flex items-center gap-2.5 py-1.5 text-[14.5px]">
            <MapPin size={16} /> {SITE.location}
          </span>
          <span className="flex items-center gap-2.5 py-1.5 text-[14.5px]">
            <Clock size={16} /> Open 6 AM to 10 PM, 7 days
          </span>
          <Link
            href="/contact"
            className="mt-3 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-bold text-ink hover:bg-amber-300"
          >
            Send an enquiry
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-5 text-[13px] text-white/60">
          <span>© {new Date().getFullYear()} A-One Adventures, Pokhara. All rights reserved.</span>
          <span>eSewa and bank transfer accepted</span>
        </div>
      </div>
    </footer>
  );
}
