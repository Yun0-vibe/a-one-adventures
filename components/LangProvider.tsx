'use client';
import { createContext, useContext, useState, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
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
  return (
    <div
      className={`flex items-center gap-1 rounded-full border p-1 text-[13px] font-bold ${
        dark ? 'border-white/25 bg-white/10 text-white' : 'border-line bg-white text-ink'
      }`}
    >
      <Globe size={14} className="ml-1.5 opacity-70" />
      {(['en', 'ne'] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-full px-2.5 py-1 uppercase transition ${
            lang === l ? (dark ? 'bg-white text-ink' : 'bg-ink text-white') : 'opacity-60 hover:opacity-100'
          }`}
        >
          {l === 'en' ? 'EN' : 'ने'}
        </button>
      ))}
    </div>
  );
}
