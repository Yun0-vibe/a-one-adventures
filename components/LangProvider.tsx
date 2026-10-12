'use client';
import { createContext, useContext, useState, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, Check } from 'lucide-react';
import { useState } from 'react';
import { makeT, type Lang } from '@/lib/t';

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: ReturnType<typeof makeT>['t']; ta: ReturnType<typeof makeT>['ta'] };

const LangCtx = createContext<Ctx | null>(null);

function initialLang(): Lang {
  if (typeof document === 'undefined') return 'en';
  return document.cookie.split(';').some((c) => c.trim() === 'lang=ne') ? 'ne' : 'en';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const router = useRouter();
  const setLang = (l: Lang) => {
    document.cookie = `lang=${l}; path=/; max-age=31536000`;
    setLangState(l);
    router.refresh();
  };
  const { t, ta } = makeT(lang);
  return <LangCtx.Provider value={{ lang, setLang, t, ta }}>{children}</LangCtx.Provider>;
}

export function useLang(): Ctx {
  const ctx = useContext(LangCtx);
  if (!ctx) {
    const { t, ta } = makeT('en');
    return { lang: 'en', setLang: () => {}, t, ta };
  }
  return ctx;
}

export function LangMenu({ dark }: { dark?: boolean }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Language / भाषा"
        aria-expanded={open}
        className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${
          dark
            ? 'border-white/25 bg-white/10 text-white hover:bg-white/20'
            : 'border-line bg-white text-ink hover:border-ink'
        }`}
      >
        <Globe size={17} />
      </button>
      {open ? (
        <div className="absolute right-0 top-12 z-50 w-44 overflow-hidden rounded-2xl border border-line bg-white p-1.5 text-ink shadow-[0_18px_40px_rgba(26,46,34,0.2)]">
          {(['en', 'ne'] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => {
                setLang(l);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-bold transition ${
                lang === l ? 'bg-cream text-brand' : 'hover:bg-cream'
              }`}
            >
              {l === 'en' ? 'English' : 'नेपाली'}
              {lang === l ? <Check size={15} /> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
