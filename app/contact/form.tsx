'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { PACKAGES, SITE } from '@/lib/site';
import { useLang } from '@/components/LangProvider';

const inputCls =
  'w-full rounded-xl border border-line bg-[#FCFAF5] px-3.5 py-3 text-[15px] focus:border-brand2 focus:outline-2 focus:outline-brand2';
const labelCls = 'grid gap-1.5 text-[13px] font-bold text-ink/80';

export default function ContactForm() {
  const sp = useSearchParams();
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const rawPkg = sp.get('package') ?? 'muktinath-darshan';
  const [f, setF] = useState({
    name: '',
    phone: '',
    email: '',
    package: PACKAGES.some((p) => p.slug === rawPkg) || rawPkg === 'custom' ? rawPkg : 'muktinath-darshan',
    from: sp.get('from') ?? '',
    to: sp.get('to') ?? '',
    persons: sp.get('persons') ?? '4',
    pickup: 'Pokhara Lakeside',
    message: '',
  });
  const set = (k: string, v: string) => setF({ ...f, [k]: v });

  const length = (() => {
    if (!f.from || !f.to) return null;
    const nights = Math.round((new Date(f.to).getTime() - new Date(f.from).getTime()) / 86400000);
    if (isNaN(nights) || nights < 0) return null;
    if (nights === 0) return t('fm.sameday');
    return `${nights + 1} days, ${nights} ${t('fm.night1')}${nights > 1 ? 's' : ''}`;
  })();
  const pkg = PACKAGES.find((p) => p.slug === f.package);
  const persons = Math.max(Number(f.persons) || 0, 1);
  const scorpios = Math.max(Math.ceil(persons / 7), 1);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fid = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (fid) {
      try {
        await fetch(`https://formspree.io/f/${fid}`, {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: f.name, phone: f.phone, email: f.email,
            package: pkg ? `${pkg.title} ${pkg.days}` : 'Custom trip',
            from: f.from, to: f.to, persons: f.persons,
            pickup: f.pickup, message: f.message,
          }),
        });
      } catch {
        /* still show confirmation even if the email send fails */
      }
    }
    setSent(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (sent) {
    return (
      <div className="grid gap-4 rounded-3xl border border-line bg-white p-7 md:p-9">
        <span className="w-fit rounded-full bg-brand px-3.5 py-1.5 text-xs font-bold text-white">{t('fm.ok')}</span>
        <h3 className="font-display text-3xl tracking-tight">
          {t('fm.thanks', { name: f.name.split(' ')[0] || 'traveller' })}
        </h3>
        <div className="grid gap-2 rounded-2xl bg-cream p-5 text-[15px]">
          <div><b>{t('fm.sumPkg')}</b> {pkg ? `${pkg.title} ${pkg.days}` : t('fm.custom')}</div>
          <div><b>{t('fm.sumDates')}</b> {f.from || t('fm.open')} to {f.to || t('fm.open')}{length ? ` (${length})` : ''}</div>
          <div><b>{t('fm.sumGroup')}</b> {f.persons} {t('fm.personn')}</div>
          <div><b>{t('fm.sumPhone')}</b> {f.phone}</div>
          {f.email ? <div><b>{t('fm.sumEmail')}</b> {f.email}</div> : null}
          <div><b>{t('fm.sumPickup')}</b> {f.pickup}</div>
        </div>
        <p className="m-0 text-moss">{t('fm.confirm')}</p>
        <div className="flex flex-wrap gap-2.5">
          <a href={SITE.phoneHref} className="rounded-full bg-brand px-6 py-3.5 text-[15px] font-bold text-white hover:bg-brand2">
            {t('fm.call', { phone: SITE.phone })}
          </a>
          <button
            onClick={() => setSent(false)}
            className="rounded-full border border-line px-6 py-3.5 text-[15px] font-bold"
          >
            {t('fm.edit')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="grid gap-4 rounded-3xl border border-line bg-white p-7 md:p-9" onSubmit={submit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className={labelCls}>
          {t('fm.name')}
          <input required value={f.name} onChange={(e) => set('name', e.target.value)} placeholder="e.g. Ram Sharma" className={inputCls} />
        </label>
        <label className={labelCls}>
          {t('fm.phone')}
          <input
            required
            type="tel"
            value={f.phone}
            onChange={(e) => set('phone', e.target.value)}
            placeholder="+977 ..."
            className={inputCls}
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className={labelCls}>
          {t('fm.email')}
          <input
            type="email"
            value={f.email}
            onChange={(e) => set('email', e.target.value)}
            placeholder="you@gmail.com"
            className={inputCls}
          />
        </label>
        <label className={labelCls}>
          {t('fm.pkg')}
          <select value={f.package} onChange={(e) => set('package', e.target.value)} className={inputCls}>
            {PACKAGES.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.title} {p.days}
              </option>
            ))}
            <option value="custom">{t('fm.custom')}</option>
          </select>
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <label className={labelCls}>
          {t('fm.from')}
          <input type="date" required value={f.from} onChange={(e) => set('from', e.target.value)} className={inputCls} />
        </label>
        <label className={labelCls}>
          {t('fm.to')}
          <input type="date" required value={f.to} onChange={(e) => set('to', e.target.value)} className={inputCls} />
        </label>
        <label className={labelCls}>
          {t('fm.persons')}
          <input
            type="number"
            min={1}
            max={60}
            required
            value={f.persons}
            onChange={(e) => set('persons', e.target.value)}
            className={inputCls}
          />
        </label>
      </div>
      {length ? (
        <div className="w-fit rounded-full bg-accentsoft px-4 py-2 text-sm font-bold text-ink">
          {length === t('fm.sameday')
            ? length
            : `Trip length: ${length} · about ${scorpios} ${scorpios > 1 ? t('fm.jeepsn') : t('fm.jeeps1')}`}
        </div>
      ) : (
        <p className="m-0 text-[13px] text-moss">{t('fm.pickhint')}</p>
      )}
      <label className={labelCls}>
        {t('fm.pickup')}
        <input value={f.pickup} onChange={(e) => set('pickup', e.target.value)} placeholder={t('fm.pickupPh')} className={inputCls} />
      </label>
      <label className={labelCls}>
        {t('fm.msg')}
        <textarea
          rows={3}
          value={f.message}
          onChange={(e) => set('message', e.target.value)}
          placeholder={t('fm.msgPh')}
          className={inputCls}
        />
      </label>
      <button className="rounded-full bg-brand px-6 py-3.5 text-[15px] font-bold text-white hover:bg-brand2" type="submit">
        {t('fm.submit')}
      </button>
      <p className="m-0 text-[13px] text-moss">
        {t('fm.note', { phone: SITE.phone }).split(SITE.phone)[0]}
        <a href={SITE.phoneHref} className="font-extrabold">{SITE.phone}</a>
        {t('fm.note', { phone: SITE.phone }).split(SITE.phone)[1]}
      </p>
    </form>
  );
}
