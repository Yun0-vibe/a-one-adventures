'use client';
import { Phone, ClipboardList } from 'lucide-react';
import { useLang } from './LangProvider';

export default function MobileBar() {
  const { t } = useLang();
  return (
    <>
      <div className="h-[76px] md:hidden" aria-hidden />
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
        <div className="grid grid-cols-2 gap-2.5">
          <a
            href="tel:+9779846020030"
            className="flex items-center justify-center gap-2 rounded-2xl bg-ink px-4 py-3.5 text-[15px] font-bold text-white"
          >
            <Phone size={17} /> {t('mb.call')}
          </a>
          <a
            href="/contact"
            className="flex items-center justify-center gap-2 rounded-2xl bg-accent px-4 py-3.5 text-[15px] font-bold text-white"
          >
            <ClipboardList size={17} /> {t('mb.enq')}
          </a>
        </div>
      </div>
    </>
  );
}
