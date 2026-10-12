'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'How much does a full Scorpio cost?',
    a: 'Muktinath Darshan (3 days) runs NPR 55,000 to 65,000 for the full Scorpio, fuel and driver included. Split among 7 guests that is about NPR 8,000 to 9,000 each. Longer routes like Upper Mustang and Pathivara are quoted by group size and dates.',
  },
  {
    q: 'How many people fit in one Scorpio?',
    a: '7 guests plus the driver. Groups of 8 or more travel in two Scorpios with the same team, so nobody is left behind and everyone stays on the same plan.',
  },
  {
    q: 'What permits do we need for Mustang?',
    a: 'Lower Mustang and Muktinath need the ACAP permit at NPR 3,000 per person. Upper Mustang beyond Kagbeni needs a restricted area permit at USD 50 per day per person plus a licensed guide. We arrange all of it before the trip.',
  },
  {
    q: 'What time does the trip start?',
    a: 'Mustang trips start 5 to 6 AM to cross before the Jomsom winds pick up around 11 AM. City tours and airport runs follow your schedule.',
  },
  {
    q: 'How do we confirm and pay?',
    a: 'Send the enquiry form, we call back to confirm Scorpios and fare, then a small advance via eSewa or bank transfer locks your dates. The balance is settled before or during the trip, whatever suits you.',
  },
  {
    q: 'Is the road safe for elders and kids?',
    a: 'Yes, with the right pacing. We drive slow on mountain stretches, plan temple timing so elders avoid crowds, arrange pony and palanquin help at Pathivara, and always carry oxygen plus a first aid kit.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="grid gap-3">
      {FAQS.map((f, i) => (
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
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};
