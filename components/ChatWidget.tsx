'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, X, Phone, ClipboardList, ChevronRight } from 'lucide-react';
import { SITE } from '@/lib/site';
import { useLang } from './LangProvider';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const { t } = useLang();
  const qs = [
    { q: t('ch.q1'), a: t('ch.a1') },
    { q: t('ch.q2'), a: t('ch.a2') },
    { q: t('ch.q3'), a: t('ch.a3') },
  ];

  return (
    <div className="fixed bottom-24 right-4 z-[70] flex flex-col items-end gap-3 md:bottom-6 md:right-6">
      {open ? (
        <div className="w-[300px] overflow-hidden rounded-3xl border border-line bg-white shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
          <div className="bg-ink px-5 py-4 text-white">
            <b className="block text-[15px]">A-One Adventures</b>
            <span className="flex items-center gap-1.5 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-green-400" /> {t('ct.fast')}
            </span>
          </div>
          <div className="grid max-h-[320px] gap-2.5 overflow-auto p-4">
            <div className="w-fit max-w-[90%] rounded-2xl rounded-tl-md bg-cream px-3.5 py-2.5 text-[13.5px]">
              {t('ch.hi')}
            </div>
            {answers.map((a, i) => (
              <div key={i} className="w-fit max-w-[90%] rounded-2xl rounded-tl-md bg-cream px-3.5 py-2.5 text-[13.5px]">
                {a}
              </div>
            ))}
            <div className="mt-1 grid gap-1.5">
              {qs.map((item) => (
                <button
                  key={item.q}
                  onClick={() => setAnswers((p) => (p.includes(item.a) ? p : [...p, item.a]))}
                  className="flex items-center justify-between gap-2 rounded-xl border border-line px-3.5 py-2.5 text-left text-[13.5px] font-bold text-brand hover:border-brand"
                >
                  {item.q} <ChevronRight size={14} className="shrink-0 opacity-50" />
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 border-t border-line p-3">
            <a
              href={SITE.phoneHref}
              className="flex items-center justify-center gap-1.5 rounded-xl bg-ink px-3 py-2.5 text-[13px] font-bold text-white"
            >
              <Phone size={14} /> {t('ch.call')}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-1.5 rounded-xl bg-accent px-3 py-2.5 text-[13px] font-bold text-white"
            >
              <ClipboardList size={14} /> {t('ch.enq')}
            </Link>
          </div>
        </div>
      ) : null}
      <button
        onClick={() => setOpen(!open)}
        aria-label={t('ch.open')}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-[0_14px_30px_rgba(0,0,0,0.3)] transition hover:bg-brand2"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
