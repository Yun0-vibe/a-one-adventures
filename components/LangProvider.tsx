'use client';
import { createContext, useContext, useState, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
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

export function LangToggle({ dark }: { dark?: boolean }) {
  const { lang, setLang } = useLang();
  const btn = (active: boolean) =>
    `rounded-full px-3 py-1.5 transition ${
      active
        ? dark
          ? 'bg-white text-ink shadow-sm'
          : 'bg-ink text-white shadow-sm'
        : dark
          ? 'text-white/70 hover:text-white'
          : 'text-moss hover:text-ink'
    }`;
  return (
    <div
      className={`flex items-center gap-0.5 rounded-full p-1 text-[13px] font-bold ${
        dark ? 'bg-white/10 text-white' : 'border border-line bg-[#F2EEE1] text-ink'
      }`}
      role="group"
      aria-label="Language"
    >
      <button onClick={() => setLang('en')} className={btn(lang === 'en')} aria-pressed={lang === 'en'}>
        EN
      </button>
      <button onClick={() => setLang('ne')} className={btn(lang === 'ne')} aria-pressed={lang === 'ne'}>
        नेपाली
      </button>
    </div>
  );
}
