import type { Metadata } from 'next';
import Link from 'next/link';
import Estimator from '@/components/Estimator';

export const metadata: Metadata = {
  title: 'Fare Estimator, Estimate Your Scorpio Trip Cost',
  description:
    'Estimate your private Scorpio tour cost in seconds. Pick trip type, days and travellers to see full Scorpio fare and per person cost. A-One Adventures Pokhara.',
  alternates: { canonical: '/estimator' },
};

export default function EstimatorPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <div className="max-w-[64ch]">
        <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">Fare estimator</div>
        <h1 className="mt-2 font-display text-[clamp(30px,4vw,44px)] leading-tight tracking-tight">
          How much will my trip cost?
        </h1>
        <p className="mt-2 text-[16.5px] leading-relaxed text-moss">
          Move the numbers and see an honest estimate instantly. No signup, no spam, no inflated tourist pricing.
        </p>
      </div>
      <div className="mt-8">
        <Estimator />
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/packages" className="rounded-full border border-line bg-white px-6 py-3.5 text-[15px] font-bold">
          Compare packages
        </Link>
        <Link href="/contact" className="rounded-full bg-ink px-6 py-3.5 text-[15px] font-bold text-white">
          Send an enquiry
        </Link>
      </div>
    </section>
  );
}
