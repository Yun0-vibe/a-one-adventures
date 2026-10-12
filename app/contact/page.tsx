import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact, Call or Message Your Driver Directly',
  description:
    'Contact A-One Adventures Pokhara: call Ganesh Prasad Subedi on +977 9846020030. Lakeside pickup, 6 AM to 10 PM, 7 days.',
  alternates: { canonical: '/contact' },
};

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">Contact</div>
      <h1 className="mt-2 font-display text-[clamp(28px,4vw,42px)] leading-tight tracking-tight">
        Call the driver, not a call centre.
      </h1>
      <div className="mt-6 grid gap-[18px] md:grid-cols-2">
        <div className="rounded-2xl border border-line bg-white">
          <div className="flex flex-col gap-2.5 p-5">
            <span className="w-fit rounded-full bg-brand px-3 py-1.5 text-xs font-bold text-white">Fastest reply</span>
            <h3 className="font-display text-[22px]">{SITE.driver}</h3>
            <p className="my-1.5 text-[22px] font-extrabold">
              <a href={SITE.phoneHref}>{SITE.phone}</a>
            </p>
            <p className="text-moss">
              {SITE.location}. Available 6 AM to 10 PM Nepal time, 7 days. For email: {SITE.email}
            </p>
            <div className="flex flex-wrap gap-2.5">
              <a href={SITE.phoneHref} className="rounded-full bg-brand px-5 py-3 text-[15px] font-bold text-white">
                Call now
              </a>
              <a href={`mailto:${SITE.email}`} className="rounded-full border border-line px-5 py-3 text-[15px] font-bold">
                Email us
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-white">
          <div className="flex flex-col gap-2.5 p-5">
            <h3 className="font-display text-[22px]">Find us</h3>
            <p className="text-moss">
              Based in Lakeside, Pokhara. We pick up from any hotel in Pokhara valley, plus Kathmandu starts for All
              Nepal and Pathivara tours.
            </p>
            <iframe
              title="Pokhara map"
              src="https://www.google.com/maps?q=Pokhara+Lakeside&output=embed"
              className="min-h-[260px] w-full rounded-xl border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
