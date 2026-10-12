import type { Metadata } from 'next';
import { Suspense } from 'react';
import { SITE } from '@/lib/site';
import ContactForm from './form';

export const metadata: Metadata = {
  title: 'Contact and Reservation, Enquire with Dates and Group Size',
  description:
    'Send your tour enquiry: phone, email, travel dates, person count and package. A-One Adventures Pokhara calls you back fast. Or call Ganesh Prasad Subedi on +977 9846020030.',
  alternates: { canonical: '/contact' },
};

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <div className="max-w-[64ch]">
        <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">Contact and reservation</div>
        <h1 className="mt-2 font-display text-[clamp(30px,4vw,44px)] leading-tight tracking-tight">
          Tell us your dates. We handle the road.
        </h1>
        <p className="mt-2 text-[16.5px] text-moss">
          Fill the enquiry form and we call you back to confirm jeeps, fare and pickup. Led by {SITE.driver}.
        </p>
      </div>
      <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Suspense>
          <ContactForm />
        </Suspense>
        <div className="grid gap-6">
          <div className="rounded-3xl bg-ink p-7 text-[#DCE7DE]">
            <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-amber-300">Fastest reply</div>
            <h3 className="mt-1 font-display text-2xl text-white">{SITE.driver}</h3>
            <p className="my-2 text-xl font-extrabold text-white">
              <a href={SITE.phoneHref}>{SITE.phone}</a>
            </p>
            <p className="text-[14.5px]">
              {SITE.location}. Open 6 AM to 10 PM Nepal time, 7 days. Email: {SITE.email}
            </p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              <a href={SITE.phoneHref} className="rounded-full bg-white px-5 py-3 text-[15px] font-bold text-ink">
                Call now
              </a>
              <a href={`mailto:${SITE.email}`} className="rounded-full border border-white/30 px-5 py-3 text-[15px] font-bold text-white">
                Email us
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-line bg-white p-7">
            <h3 className="font-display text-[22px]">Find us</h3>
            <p className="text-[14.5px] text-moss">
              Based in Lakeside, Pokhara. Pickup from any hotel in Pokhara valley, plus Kathmandu starts for All Nepal
              and Pathivara tours.
            </p>
            <iframe
              title="Pokhara map"
              src="https://www.google.com/maps?q=Pokhara+Lakeside&output=embed"
              className="mt-3 min-h-[240px] w-full rounded-xl border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
