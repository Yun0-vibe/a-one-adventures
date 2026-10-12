'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLang } from './LangProvider';

export default function Faq() {
  const [open, setOpen] = useState(0);
  const { t } = useLang();
  const faqs = [1, 2, 3, 4, 5, 6].map((i) => ({ q: t(`faq.q${i}`), a: t(`faq.a${i}`) }));
  return (
    <div className="grid gap-3">
      {faqs.map((f, i) => (
        <div key={f.q} className={`overflow-hidden rounded-2xl border bg-white transition ${open === i ? 'border-ink/30 shadow-sm' : 'border-line'}`}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span className="text-[16px] font-bold">{f.q}</span>
            <ChevronDown size={18} className={`shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
          </button>
          {open === i ? <p className="m-0 px-6 pb-6 leading-relaxed text-moss">{f.a}</p> : null}
        </div>
      ))}
    </div>
  );
}

export const FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a full Scorpio cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Muktinath Darshan (3 days) runs NPR 55,000 to 70,000 for the full Scorpio, fuel and driver included. Split among 7 guests that is about NPR 8,000 to 10,000 each.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many people fit in one Scorpio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '7 guests plus the driver. Groups of 8 or more travel in two Scorpios with the same team.',
      },
    },
    {
      '@type': 'Question',
      name: 'What permits do we need for Mustang?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lower Mustang needs the ACAP permit at NPR 3,000 per person. Upper Mustang needs a restricted area permit at USD 50 per day per person plus a licensed guide.',
      },
    },
  ],
};
