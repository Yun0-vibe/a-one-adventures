import Link from 'next/link';
import { SITE, VEHICLE } from '@/lib/site';

export default function Footer() {
  return (
    <footer>
      <div className="container foot">
        <div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
            <img src="/logo.svg" alt="" width={36} height={36} style={{ background: '#fff', borderRadius: 10, padding: 3 }} />
            <b style={{ color: '#fff' }}>A-One Adventures</b>
          </div>
          <p style={{ maxWidth: 38 + 'ch', fontSize: 14.5 }}>
            Private {VEHICLE.name} ({VEHICLE.year}) tours from Pokhara. One clean jeep, one experienced mountain driver —
            Muktinath, Mustang, Pathivara & all Nepal.
          </p>
          <p style={{ fontSize: 14 }}>
            Driver: <b style={{ color: '#fff' }}>{SITE.driver}</b>
            <br />
            <a href={SITE.phoneHref} style={{ color: '#FCD34D', fontWeight: 800 }}>{SITE.phone}</a> · {SITE.location}
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link href="/about">About us</Link>
          <Link href="/packages">All packages</Link>
          <Link href="/routes">Routes & fares</Link>
          <Link href="/booking">Book your jeep</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h4>Top tours</h4>
          <Link href="/packages/muktinath-darshan">Muktinath Darshan · 3D</Link>
          <Link href="/packages/upper-mustang-lo-manthang">Upper Mustang · Lo Manthang</Link>
          <Link href="/packages/pathivara-darshan">Pathivara Devi Darshan</Link>
          <Link href="/packages/all-nepal-tour">All Nepal Circuit</Link>
        </div>
      </div>
      <div className="container copy">
        <span>© {new Date().getFullYear()} A-One Adventures, Pokhara. All rights reserved.</span>
        <span>Vehicle: {VEHICLE.name} {VEHICLE.year} · Plate: {VEHICLE.plate} (photo coming soon)</span>
      </div>
    </footer>
  );
}
