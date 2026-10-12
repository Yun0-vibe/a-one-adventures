import type { Metadata } from 'next';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { Suspense } from 'react';
import { SITE } from '@/lib/site';
import { getLang, makeT } from '@/lib/lang';
import ContactForm from './form';

export const metadata: Metadata = {
  title: 'Contact and Reservation, Enquire with Dates and Group Size',
  description:
    'Send your tour enquiry: phone, email, travel dates, person count and package. A-One Adventures Pokhara calls you back fast. Or call Ganesh Prasad Subedi on +977 9846020030.',
  alternates: { canonical: '/contact' },
};

export default function Contact() {
  const lang = getLang();
  const { t } = makeT(lang);
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <div className="max-w-[64ch]">
        <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">{t('ct.kicker')}</div>
        <h1 className="mt-2 font-display text-[clamp(30px,4vw,44px)] leading-tight tracking-tight">
          {t('ct.title')}
        </h1>
        <p className="mt-2 text-[16.5px] leading-relaxed text-moss">{t('ct.sub')}</p>
      </div>
      <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Suspense>
          <ContactForm />
        </Suspense>
        <div className="grid gap-6">
          <div className="rounded-3xl panel-dark p-7 text-[#DCE7DE]">
            <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-amber-300">{t('ct.fast')}</div>
            <h3 className="mt-1 font-display text-2xl text-white">{SITE.driver}</h3>
            <a href={SITE.phoneHref} className="my-2 flex items-center gap-2.5 text-xl font-extrabold text-white hover:text-amber-300">
              <Phone size={20} /> {SITE.phone}
            </a>
            <p className="flex items-start gap-2.5 text-[14.5px]">
              <MapPin size={16} className="mt-1 shrink-0" /> {t('ct.locline', { loc: SITE.location })}
            </p>
            <p className="flex items-center gap-2.5 text-[14.5px]">
              <Mail size={16} className="shrink-0" /> {SITE.email}
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[15px] font-bold text-ink">
                <Phone size={16} /> {t('ct.callnow')}
              </a>
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-[15px] font-bold text-white">
                <Mail size={16} /> {t('ct.emailus')}
              </a>
            </div>
            <p className="mb-0 mt-4 flex items-center gap-2.5 text-[13px] text-white/60">
              <Clock size={14} className="shrink-0" /> {t('ct.cb')}
            </p>
          </div>
          <div className="rounded-3xl border border-line bg-white p-7">
            <h3 className="font-display text-[22px]">{t('ct.find')}</h3>
            <p className="text-[14.5px] text-moss">{t('ct.finddesc')}</p>
            <iframe
              title="Pokhara map"
              src="https://www.google.com/maps?q=Pokhara+Lakeside&output=embed"
              className="mt-3 min-h-[240px] w-full rounded-xl border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
