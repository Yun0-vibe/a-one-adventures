import { cookies } from 'next/headers';
import type { Lang } from './dict';

export function getLang(): Lang {
  try {
    return cookies().get('lang')?.value === 'ne' ? 'ne' : 'en';
  } catch {
    return 'en';
  }
}

export { makeT } from './t';
