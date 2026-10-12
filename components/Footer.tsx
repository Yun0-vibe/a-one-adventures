import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SITE, VEHICLE } from '@/lib/site';
import { getLang, makeT } from '@/lib/lang';
import { NE_PACKAGES } from '@/lib/ne-data';

const TOP_LINKS: { slug: string; href: string }[] = [
  { slug: 'muktinath-darshan', href: '/packages/muktinath-darshan' },
  { slug: 'lower-mustang-explorer', href: '/packages/lower-mustang-explorer' },
  { slug: 'upper-mustang-lo-manthang', href: '/packages/upper-mustang-lo-manthang' },
  { slug: 'all-nepal-tour', href: '/packages/all-nepal-tour' },
];

export default function Footer() {
  const lang = getLang();
  const { t } = makeT(lang);
  return (
    <footer className="border-t border-line footer-grad text-[#CBD9CE]">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 pb-7 pt-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <img src="/logo.svg" alt="A-One Adventures logo" width={40} height={40} className="rounded-xl bg-white p-1" />
            <span className="leading-tight">
              <b className="block text-white">A-One Adventures</b>
              <small className="text-[11px] uppercase tracking-[0.16em] text-white/60">Tours and Treks, Nepal</small>
            </span>
          </div>
          <p className="max-w-[36ch] text-[14.5px] leading-relaxed">{t('foot.blurb')}</p>
          <p className="mt-3 text-[13px] text-white/60">
            {t('foot.fleet')}
          </p>
        </div>
        <div>
          <h4 className="mb-2 text-[13px] font-bold uppercase tracking-[0.14em] text-white">{t('foot.company')}</h4>
          <Link href="/about" className="block py-1 text-[14.5px] hover:text-white">{t('foot.l1')}</Link>
          <Link href="/packages" className="block py-1 text-[14.5px] hover:text-white">{t('foot.l2')}</Link>
          <Link href="/routes" className="block py-1 text-[14.5px] hover:text-white">{t('foot.l3')}</Link>
          <Link href="/contact" className="block py-1 text-[14.5px] hover:text-white">{t('foot.l4')}</Link>
        </div>
        <div>
          <h4 className="mb-2 text-[13px] font-bold uppercase tracking-[0.14em] text-white">{t('foot.top')}</h4>
          {TOP_LINKS.map((l) => (
            <Link key={l.slug} href={l.href} className="block py-1 text-[14.5px] hover:text-white">
              {lang === 'ne' ? NE_PACKAGES[l.slug].title : l.slug === 'muktinath-darshan' ? 'Muktinath Darshan, 3 days' : l.slug === 'lower-mustang-explorer' ? 'Lower Mustang, 4 days' : l.slug === 'upper-mustang-lo-manthang' ? 'Upper Mustang, Lo Manthang' : 'All Nepal Circuit'}
            </Link>
          ))}
        </div>
        <div>
          <h4 className="mb-2 text-[13px] font-bold uppercase tracking-[0.14em] text-white">{t('foot.reach')}</h4>
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
            <Clock size={16} /> {t('foot.hours')}
          </span>
          <Link
            href="/contact"
            className="mt-3 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-bold text-ink hover:bg-amber-300"
          >
            {t('foot.enquire')}
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-4 text-[13px] text-white/60">
          <span>© {new Date().getFullYear()} A-One Adventures, Pokhara. {t('foot.rights')}</span>
          <span>{t('foot.pay')}</span>
        </div>
      </div>
    </footer>
  );
}
