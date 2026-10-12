import { STR, type Lang } from './dict';

export type { Lang };

export function makeT(lang: Lang) {
  const t = (k: string, vars?: Record<string, string>) => {
    let s = String(STR[lang][k] ?? STR.en[k] ?? k);
    if (vars) for (const key of Object.keys(vars)) s = s.split(`{${key}}`).join(vars[key]);
    return s;
  };
  const ta = (k: string): string[] => {
    const v = STR[lang][k] ?? STR.en[k];
    return Array.isArray(v) ? v : [String(v ?? k)];
  };
  return { t, ta };
}
