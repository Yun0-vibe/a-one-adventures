'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Lock, LogOut, Plus, Trash2, Copy, Check, ExternalLink, Phone,
  Home, BookOpen, Wallet, Tag, StickyNote, Link2, ClipboardCheck, Printer,
} from 'lucide-react';
import { PACKAGES, SITE } from '@/lib/site';
import { NE_PACKAGES } from '@/lib/ne-data';
import { useLang } from './LangProvider';

// Change this passcode to whatever only you know.
const ADMIN_PASSCODE = 'muktinath2082';

type Task = { id: number; text: string; done: boolean };
type Booking = {
  id: number; name: string; phone: string; pkg: string;
  from: string; to: string; persons: string;
  total: string; advance: string; status: 'new' | 'confirmed' | 'done';
};
type Expense = { id: number; label: string; amount: string; date: string };

function useLocal<T>(key: string, initial: T): [T, (v: T) => void] {
  const [val, setVal] = useState<T>(initial);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw !== null) setVal(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, [key]);
  const save = (v: T) => {
    setVal(v);
    try {
      localStorage.setItem(key, JSON.stringify(v));
    } catch {
      /* ignore */
    }
  };
  return [val, save];
}

const inputCls =
  'w-full rounded-xl border border-line bg-[#FCFAF5] px-3.5 py-3 text-[15px] text-ink focus:border-brand2 focus:outline-2 focus:outline-brand2';
const labelCls = 'grid gap-1.5 text-[13px] font-bold text-ink/80';

export default function AdminGate() {
  const { t, lang } = useLang();
  const [unlocked, setUnlocked] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const [tab, setTab] = useState<'home' | 'bookings' | 'expenses' | 'rates' | 'notes' | 'links'>('home');
  const [tasks, setTasks] = useLocal<Task[]>('aone-admin-tasks', [
    { id: 1, text: 'Confirm upcoming trip dates on call', done: false },
    { id: 2, text: 'Service check before Mustang run', done: false },
  ]);
  const [notes, setNotes] = useLocal<string>('aone-admin-notes', '');
  const [bookings, setBookings] = useLocal<Booking[]>('aone-admin-bookings', []);
  const [expenses, setExpenses] = useLocal<Expense[]>('aone-admin-expenses', []);
  const [newTask, setNewTask] = useState('');
  const [copied, setCopied] = useState(false);
  const [bf, setBf] = useState({ name: '', phone: '', pkg: 'muktinath-darshan', from: '', to: '', persons: '5', total: '', advance: '', status: 'new' as Booking['status'] });
  const [ef, setEf] = useState({ label: '', amount: '', date: new Date().toISOString().slice(0, 10) });

  useEffect(() => {
    try {
      if (sessionStorage.getItem('aone-admin') === '1') setUnlocked(true);
    } catch {
      /* ignore */
    }
  }, []);

  if (!unlocked) {
    return (
      <div className="mx-auto max-w-sm px-5 py-20">
        <div className="rounded-3xl border border-line bg-white p-8 text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-white">
            <Lock size={22} />
          </span>
          <h1 className="mt-4 font-display text-2xl">{t('ad.restricted')}</h1>
          <p className="mt-1 text-sm text-moss">{t('ad.sub')}</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (code === ADMIN_PASSCODE) {
                try {
                  sessionStorage.setItem('aone-admin', '1');
                } catch {
                  /* ignore */
                }
                setUnlocked(true);
                setError(false);
              } else setError(true);
            }}
            className="mt-5 grid gap-3"
          >
            <input
              type="password"
              inputMode="numeric"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder={t('ad.passcode')}
              className="w-full rounded-xl border border-line bg-[#FCFAF5] px-3.5 py-4 text-center text-lg tracking-widest"
            />
            {error ? <p className="m-0 text-sm font-bold text-red-700">{t('ad.wrong')}</p> : null}
            <button className="rounded-full bg-ink px-5 py-4 text-base font-bold text-white">{t('ad.unlock')}</button>
          </form>
        </div>
      </div>
    );
  }

  const today = new Date().toISOString().slice(0, 10);
  const upcoming = bookings.filter((b) => b.status !== 'done' && (!b.to || b.to >= today));
  const advSum = bookings.reduce((s, b) => s + (Number(b.advance) || 0), 0);
  const expSum = expenses.reduce((s, e) => s + (Number(e.amount) || 0), 0);
  const pkgName = (slug: string) => {
    if (slug === 'custom') return t('fm.custom');
    const p = PACKAGES.find((x) => x.slug === slug);
    if (!p) return slug;
    return lang === 'ne' ? NE_PACKAGES[slug].title : `${p.title}`;
  };
  const copyList = async () => {
    const lines = bookings.map(
      (b) => `${b.name} (${b.phone}) · ${pkgName(b.pkg)} · ${b.from || '?'} to ${b.to || '?'} · ${b.persons}p · Total ${b.total || '?'} · Adv ${b.advance || '0'} · ${b.status}`
    );
    try {
      await navigator.clipboard.writeText(lines.join('\n') || t('ad.emptyBk'));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  };

  const tabs = [
    { id: 'home' as const, icon: Home, label: t('ad.home') },
    { id: 'bookings' as const, icon: BookOpen, label: t('ad.bookings') },
    { id: 'expenses' as const, icon: Wallet, label: t('ad.expenses') },
    { id: 'rates' as const, icon: Tag, label: t('ad.rates') },
    { id: 'notes' as const, icon: StickyNote, label: t('ad.notes') },
    { id: 'links' as const, icon: Link2, label: t('ad.links') },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-display text-2xl tracking-tight md:text-3xl">
          {t('ad.hello', { name: SITE.driver.split(' ')[0] })}
        </h1>
        <button
          onClick={() => {
            try {
              sessionStorage.removeItem('aone-admin');
            } catch {
              /* ignore */
            }
            setUnlocked(false);
            setCode('');
          }}
          className="no-print flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-bold"
        >
          <LogOut size={15} /> {t('ad.lock')}
        </button>
      </div>

      <div className="no-print mt-5 grid grid-cols-3 gap-2 md:grid-cols-6">
        {tabs.map((tb) => (
          <button
            key={tb.id}
            onClick={() => setTab(tb.id)}
            className={`flex items-center justify-center gap-1.5 rounded-2xl px-2 py-3.5 text-[14px] font-bold transition ${
              tab === tb.id ? 'bg-ink text-white' : 'border border-line bg-white'
            }`}
          >
            <tb.icon size={16} /> {tb.label}
          </button>
        ))}
      </div>

      {tab === 'home' ? (
        <div className="mt-5 grid gap-4">
          <div className="grid grid-cols-3 gap-3">
            {[
              [String(upcoming.length), t('ad.upcoming')],
              [`NPR ${advSum.toLocaleString()}`, t('ad.advSum')],
              [String(bookings.length), t('ad.totalBk')],
            ].map(([v, l]) => (
              <div key={l} className="rounded-3xl border border-line bg-white p-4 text-center md:p-6">
                <div className="font-display text-2xl tracking-tight text-brand md:text-4xl">{v}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wider text-moss md:text-sm">{l}</div>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-line bg-white p-6">
            <h2 className="flex items-center gap-2 font-display text-xl">
              <ClipboardCheck size={19} className="text-brand" /> {t('ad.tasks')}
            </h2>
            <div className="mt-3 grid gap-2">
              {tasks.filter((x) => !x.done).slice(0, 3).map((tk) => (
                <div key={tk.id} className="flex items-center gap-2.5 rounded-xl bg-cream px-3.5 py-2.5 text-[14.5px] font-semibold">
                  <input
                    type="checkbox"
                    checked={tk.done}
                    onChange={() => setTasks(tasks.map((x) => (x.id === tk.id ? { ...x, done: !x.done } : x)))}
                    className="h-5 w-5 accent-[#14532D]"
                  />
                  {tk.text}
                </div>
              ))}
              {tasks.filter((x) => !x.done).length === 0 ? <p className="m-0 text-sm text-moss">{t('ad.allDone')}</p> : null}
            </div>
            <button onClick={() => setTab('bookings')} className="mt-4 w-full rounded-full bg-brand px-5 py-4 text-base font-bold text-white">
              + {t('ad.addBk')}
            </button>
          </div>
        </div>
      ) : null}

      {tab === 'bookings' ? (
        <div className="mt-5 grid gap-4">
          <form
            className="grid gap-3 rounded-3xl border border-line bg-white p-5 md:p-7"
            onSubmit={(e) => {
              e.preventDefault();
              if (!bf.name.trim() || !bf.phone.trim()) return;
              setBookings([...bookings, { ...bf, name: bf.name.trim(), phone: bf.phone.trim(), id: Date.now() }]);
              setBf({ ...bf, name: '', phone: '', total: '', advance: '' });
            }}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <label className={labelCls}>{t('fm.name')}<input required value={bf.name} onChange={(e) => setBf({ ...bf, name: e.target.value })} className={inputCls} /></label>
              <label className={labelCls}>{t('fm.phone')}<input required type="tel" value={bf.phone} onChange={(e) => setBf({ ...bf, phone: e.target.value })} className={inputCls} /></label>
            </div>
            <label className={labelCls}>{t('fm.pkg')}
              <select value={bf.pkg} onChange={(e) => setBf({ ...bf, pkg: e.target.value })} className={inputCls}>
                {PACKAGES.map((p) => <option key={p.slug} value={p.slug}>{lang === 'ne' ? NE_PACKAGES[p.slug].title : p.title}</option>)}
                <option value="custom">{t('fm.custom')}</option>
              </select>
            </label>
            <div className="grid grid-cols-3 gap-3">
              <label className={labelCls}>{t('fm.from')}<input type="date" value={bf.from} onChange={(e) => setBf({ ...bf, from: e.target.value })} className={inputCls} /></label>
              <label className={labelCls}>{t('fm.to')}<input type="date" value={bf.to} onChange={(e) => setBf({ ...bf, to: e.target.value })} className={inputCls} /></label>
              <label className={labelCls}>{t('fm.persons')}<input type="number" min={1} value={bf.persons} onChange={(e) => setBf({ ...bf, persons: e.target.value })} className={inputCls} /></label>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <label className={labelCls}>{t('ad.total')}<input type="number" min={0} value={bf.total} onChange={(e) => setBf({ ...bf, total: e.target.value })} placeholder="55000" className={inputCls} /></label>
              <label className={labelCls}>{t('ad.adv')}<input type="number" min={0} value={bf.advance} onChange={(e) => setBf({ ...bf, advance: e.target.value })} placeholder="10000" className={inputCls} /></label>
              <label className={labelCls}>{t('ad.status')}
                <select value={bf.status} onChange={(e) => setBf({ ...bf, status: e.target.value as Booking['status'] })} className={inputCls}>
                  <option value="new">{t('ad.stNew')}</option>
                  <option value="confirmed">{t('ad.stConf')}</option>
                  <option value="done">{t('ad.stDone')}</option>
                </select>
              </label>
            </div>
            <button className="rounded-full bg-brand px-5 py-4 text-base font-bold text-white">+ {t('ad.addBk')}</button>
          </form>
          <div className="no-print flex flex-wrap gap-2">
            <button onClick={copyList} className="flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-bold">
              {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? t('ad.copied') : t('ad.copy')}
            </button>
            <button onClick={() => window.print()} className="flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-bold">
              <Printer size={15} /> {t('ad.print')}
            </button>
          </div>
          <div className="grid gap-3">
            {bookings.length === 0 ? <p className="rounded-3xl border border-line bg-white p-6 text-moss">{t('ad.emptyBk')}</p> : null}
            {bookings.map((b) => (
              <div key={b.id} className="rounded-3xl border border-line bg-white p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <b className="text-lg">{b.name} <span className="font-medium text-moss">· {b.phone}</span></b>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold text-white ${b.status === 'done' ? 'bg-brand' : b.status === 'confirmed' ? 'bg-accent' : 'bg-moss'}`}>
                    {b.status === 'done' ? t('ad.stDone') : b.status === 'confirmed' ? t('ad.stConf') : t('ad.stNew')}
                  </span>
                </div>
                <div className="mt-1 text-[14.5px] text-moss">{pkgName(b.pkg)} · {b.from || '?'} to {b.to || '?'} · {b.persons}p</div>
                <div className="mt-2 flex flex-wrap gap-2 text-sm font-bold">
                  <span className="rounded-full bg-cream px-3 py-1.5">Total {b.total ? Number(b.total).toLocaleString() : '?'}</span>
                  <span className="rounded-full bg-cream px-3 py-1.5">Adv {b.advance ? Number(b.advance).toLocaleString() : '0'}</span>
                  <span className="rounded-full bg-accentsoft px-3 py-1.5">{t('ad.bal')} {(Number(b.total) || 0) - (Number(b.advance) || 0) > 0 ? ((Number(b.total) || 0) - (Number(b.advance) || 0)).toLocaleString() : '0'}</span>
                </div>
                <div className="no-print mt-3 flex flex-wrap gap-2">
                  {(['new', 'confirmed', 'done'] as const).map((s) => (
                    <button key={s} onClick={() => setBookings(bookings.map((x) => (x.id === b.id ? { ...x, status: s } : x)))}
                      className={`rounded-full px-4 py-2 text-[13px] font-bold ${b.status === s ? 'bg-ink text-white' : 'border border-line'}`}>
                      {s === 'done' ? t('ad.stDone') : s === 'confirmed' ? t('ad.stConf') : t('ad.stNew')}
                    </button>
                  ))}
                  <button onClick={() => setBookings(bookings.filter((x) => x.id !== b.id))} className="ml-auto flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-bold text-red-700">
                    <Trash2 size={14} /> {t('ad.del')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {tab === 'expenses' ? (
        <div className="mt-5 grid gap-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-3xl bg-ink p-5 text-center text-white">
              <div className="font-display text-2xl md:text-3xl">NPR {advSum.toLocaleString()}</div>
              <div className="mt-1 text-xs font-bold uppercase tracking-wider text-white/60">{t('ad.inSum')}</div>
            </div>
            <div className="rounded-3xl border border-line bg-white p-5 text-center">
              <div className="font-display text-2xl text-brand md:text-3xl">NPR {expSum.toLocaleString()}</div>
              <div className="mt-1 text-xs font-bold uppercase tracking-wider text-moss">{t('ad.totalOut')}</div>
            </div>
          </div>
          <form
            className="grid grid-cols-[1fr_130px_auto] gap-2 rounded-3xl border border-line bg-white p-4"
            onSubmit={(e) => {
              e.preventDefault();
              if (!ef.label.trim() || !ef.amount) return;
              setExpenses([...expenses, { id: Date.now(), label: ef.label.trim(), amount: ef.amount, date: ef.date }]);
              setEf({ label: '', amount: '', date: new Date().toISOString().slice(0, 10) });
            }}
          >
            <input value={ef.label} onChange={(e) => setEf({ ...ef, label: e.target.value })} placeholder={t('ad.exPh')} className={inputCls} />
            <input type="number" min={0} value={ef.amount} onChange={(e) => setEf({ ...ef, amount: e.target.value })} placeholder="NPR" className={inputCls} />
            <button aria-label={t('ad.addEx')} className="rounded-xl bg-brand px-4 text-white"><Plus size={18} /></button>
          </form>
          <div className="grid gap-2">
            {expenses.map((x) => (
              <div key={x.id} className="flex items-center gap-2.5 rounded-xl bg-white border border-line px-3.5 py-2.5 text-sm">
                <span className="flex-1 font-semibold">{x.label} <span className="font-normal text-moss">· {x.date}</span></span>
                <b>NPR {Number(x.amount).toLocaleString()}</b>
                <button aria-label={t('ad.del')} onClick={() => setExpenses(expenses.filter((y) => y.id !== x.id))} className="text-moss/60 hover:text-red-700"><Trash2 size={15} /></button>
              </div>
            ))}
            {expenses.length === 0 ? <p className="rounded-3xl border border-line bg-white p-6 text-sm text-moss">{t('ad.emptyEx')}</p> : null}
          </div>
        </div>
      ) : null}

      {tab === 'rates' ? (
        <div className="mt-5 rounded-3xl border border-line bg-white p-5 md:p-7">
          <div className="grid gap-2">
            {PACKAGES.map((p) => (
              <div key={p.slug} className="flex items-center justify-between gap-3 rounded-xl bg-cream px-3.5 py-3 text-sm">
                <span className="font-bold">{lang === 'ne' ? NE_PACKAGES[p.slug].title : p.title} <span className="font-medium text-moss">{lang === 'ne' ? NE_PACKAGES[p.slug].days : p.days}</span></span>
                <span className="font-extrabold text-brand">{p.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl bg-accentsoft px-3.5 py-2.5 text-[13px] font-semibold">{t('ad.permit')}</div>
        </div>
      ) : null}

      {tab === 'notes' ? (
        <div className="mt-5 grid gap-4">
          <div className="rounded-3xl border border-line bg-white p-5 md:p-7">
            <h2 className="flex items-center gap-2 font-display text-xl"><StickyNote size={19} className="text-brand" /> {t('ad.notes')}</h2>
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={8}
              placeholder={t('ad.notesPh')} className="mt-4 w-full rounded-xl border border-line bg-[#FCFAF5] px-3.5 py-3 text-[15px] leading-relaxed" />
            <p className="m-0 mt-1 text-xs text-moss">{t('ad.savedDev')}</p>
          </div>
          <div className="rounded-3xl border border-line bg-white p-5 md:p-7">
            <h2 className="font-display text-xl">{t('ad.tasks')}</h2>
            <div className="mt-3 grid gap-2">
              {tasks.map((tk) => (
                <div key={tk.id} className="flex items-center gap-2.5 rounded-xl bg-cream px-3.5 py-2.5">
                  <input type="checkbox" checked={tk.done} onChange={() => setTasks(tasks.map((x) => (x.id === tk.id ? { ...x, done: !x.done } : x)))} className="h-5 w-5 accent-[#14532D]" />
                  <span className={`flex-1 text-[14.5px] ${tk.done ? 'text-moss line-through' : 'font-semibold'}`}>{tk.text}</span>
                  <button aria-label={t('ad.del')} onClick={() => setTasks(tasks.filter((x) => x.id !== tk.id))} className="text-moss/60 hover:text-red-700"><Trash2 size={15} /></button>
                </div>
              ))}
            </div>
            <form className="mt-3 flex gap-2" onSubmit={(e) => { e.preventDefault(); if (!newTask.trim()) return; setTasks([...tasks, { id: Date.now(), text: newTask.trim(), done: false }]); setNewTask(''); }}>
              <input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder={t('ad.taskPh')} className="w-full rounded-xl border border-line bg-[#FCFAF5] px-3.5 py-3 text-sm" />
              <button aria-label={t('ad.addBk')} className="shrink-0 rounded-xl bg-brand px-4 text-white"><Plus size={18} /></button>
            </form>
          </div>
        </div>
      ) : null}

      {tab === 'links' ? (
        <div className="mt-5 grid gap-4">
          <div className="rounded-3xl panel-dark p-6 text-white md:p-7">
            <h2 className="font-display text-xl">{t('ad.share')}</h2>
            <p className="mt-1 text-sm text-white/70">{t('ad.shareSub')}</p>
            <div className="mt-3 flex gap-2">
              <code className="flex-1 truncate rounded-xl bg-white/10 px-3.5 py-3 text-sm">a-one-adventures.vercel.app</code>
              <button onClick={async () => { try { await navigator.clipboard.writeText('https://a-one-adventures.vercel.app'); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch { /* ignore */ } }}
                className="flex items-center gap-1.5 rounded-xl bg-white px-4 text-sm font-bold text-ink">
                {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? t('ad.copied') : t('ad.copy')}
              </button>
            </div>
            <a href={SITE.phoneHref} className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3.5 text-base font-bold text-white">
              <Phone size={16} /> {SITE.phone}
            </a>
          </div>
          <div className="rounded-3xl border border-line bg-white p-6">
            <h2 className="font-display text-xl">{t('ad.links')}</h2>
            <div className="mt-3 grid gap-2">
              {[
                ['GitHub repo', 'https://github.com/Yun0-vibe/a-one-adventures'],
                ['Vercel dashboard', 'https://vercel.com/dashboard'],
                ['Google Search Console', 'https://search.google.com/search-console'],
              ].map(([label, href]) => (
                <a key={href} href={href} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl bg-cream px-3.5 py-3 text-[15px] font-bold hover:text-brand">
                  {label} <ExternalLink size={14} className="opacity-60" />
                </a>
              ))}
              <Link href="/" className="flex items-center justify-between rounded-xl bg-cream px-3.5 py-3 text-[15px] font-bold hover:text-brand">
                {t('ad.viewLive')} <ExternalLink size={14} className="opacity-60" />
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
