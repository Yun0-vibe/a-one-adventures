'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Lock,
  LayoutDashboard,
  ClipboardCheck,
  StickyNote,
  ExternalLink,
  Copy,
  Check,
  Trash2,
  Plus,
  LogOut,
  Phone,
} from 'lucide-react';
import { PACKAGES, SITE } from '@/lib/site';

// Change this passcode to whatever only you know.
const ADMIN_PASSCODE = 'muktinath2082';

type Task = { id: number; text: string; done: boolean };

function useLocal<T>(key: string, initial: T): [T, (v: T) => void] {
  const [val, setVal] = useState<T>(initial);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw !== null) setVal(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

export default function AdminGate() {
  const [unlocked, setUnlocked] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const [tasks, setTasks] = useLocal<Task[]>('aone-admin-tasks', [
    { id: 1, text: 'Confirm upcoming trip dates on call', done: false },
    { id: 2, text: 'Service check before Mustang run', done: false },
  ]);
  const [notes, setNotes] = useLocal<string>('aone-admin-notes', '');
  const [newTask, setNewTask] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem('aone-admin') === '1') setUnlocked(true);
    } catch {
      /* ignore */
    }
  }, []);

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === ADMIN_PASSCODE) {
      try {
        sessionStorage.setItem('aone-admin', '1');
      } catch {
        /* ignore */
      }
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!unlocked) {
    return (
      <div className="mx-auto max-w-sm px-5 py-20">
        <div className="rounded-3xl border border-line bg-white p-8 text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-white">
            <Lock size={20} />
          </span>
          <h1 className="mt-4 font-display text-2xl">Restricted area</h1>
          <p className="mt-1 text-sm text-moss">Staff only. Enter passcode to continue.</p>
          <form onSubmit={login} className="mt-5 grid gap-3">
            <input
              type="password"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Passcode"
              className="w-full rounded-xl border border-line bg-[#FCFAF5] px-3.5 py-3 text-center text-[15px]"
            />
            {error ? <p className="m-0 text-sm font-bold text-red-700">Wrong passcode. Try again.</p> : null}
            <button className="rounded-full bg-ink px-5 py-3 text-[15px] font-bold text-white">Unlock</button>
          </form>
        </div>
      </div>
    );
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText('https://a-one-adventures.vercel.app');
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-brand2">
            <LayoutDashboard size={14} /> Staff portal
          </div>
          <h1 className="mt-1 font-display text-3xl tracking-tight">
            Namaste, {SITE.driver.split(' ')[0]} ji
          </h1>
        </div>
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
          className="flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-bold"
        >
          <LogOut size={15} /> Lock
        </button>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <div className="rounded-3xl border border-line bg-white p-6">
          <h2 className="flex items-center gap-2 font-display text-xl">
            <ClipboardCheck size={19} className="text-brand" /> Trip tasks
          </h2>
          <div className="mt-4 grid gap-2">
            {tasks.map((tk) => (
              <div key={tk.id} className="flex items-center gap-2.5 rounded-xl bg-cream px-3.5 py-2.5">
                <input
                  type="checkbox"
                  checked={tk.done}
                  onChange={() => setTasks(tasks.map((x) => (x.id === tk.id ? { ...x, done: !x.done } : x)))}
                  className="h-4 w-4 accent-[#14532D]"
                />
                <span className={`flex-1 text-[14.5px] ${tk.done ? 'text-moss line-through' : 'font-semibold'}`}>{tk.text}</span>
                <button
                  aria-label="Delete task"
                  onClick={() => setTasks(tasks.filter((x) => x.id !== tk.id))}
                  className="text-moss/60 hover:text-red-700"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            ))}
          </div>
          <form
            className="mt-3 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (!newTask.trim()) return;
              setTasks([...tasks, { id: Date.now(), text: newTask.trim(), done: false }]);
              setNewTask('');
            }}
          >
            <input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="New task, e.g. Call Ramesh about Saturday"
              className="w-full rounded-xl border border-line bg-[#FCFAF5] px-3.5 py-2.5 text-sm"
            />
            <button aria-label="Add task" className="shrink-0 rounded-xl bg-brand px-3.5 text-white">
              <Plus size={17} />
            </button>
          </form>
        </div>

        <div className="rounded-3xl border border-line bg-white p-6">
          <h2 className="flex items-center gap-2 font-display text-xl">
            <StickyNote size={19} className="text-brand" /> Notebook
          </h2>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={7}
            placeholder="Rates discussed on call, guest requests, fuel prices..."
            className="mt-4 w-full rounded-xl border border-line bg-[#FCFAF5] px-3.5 py-3 text-sm leading-relaxed"
          />
          <p className="m-0 mt-1 text-xs text-moss">Saved on this device automatically.</p>
        </div>

        <div className="rounded-3xl border border-line bg-white p-6">
          <h2 className="font-display text-xl">Live rate card</h2>
          <div className="mt-3 grid gap-2">
            {PACKAGES.map((p) => (
              <div key={p.slug} className="flex items-center justify-between gap-3 rounded-xl bg-cream px-3.5 py-2.5 text-sm">
                <span className="font-bold">{p.title} <span className="font-medium text-moss">{p.days}</span></span>
                <span className="font-extrabold text-brand">{p.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl bg-accentsoft px-3.5 py-2.5 text-[13px] font-semibold">
            Permits: ACAP NPR 3,000 per person · Upper Mustang USD 50 per day plus guide
          </div>
        </div>

        <div className="grid content-start gap-5">
          <div className="rounded-3xl panel-dark p-6 text-white">
            <h2 className="font-display text-xl">Share the site</h2>
            <p className="mt-1 text-sm text-white/70">Send this link to guests on call or message.</p>
            <div className="mt-3 flex gap-2">
              <code className="flex-1 truncate rounded-xl bg-white/10 px-3.5 py-2.5 text-sm">a-one-adventures.vercel.app</code>
              <button
                onClick={copyLink}
                className="flex items-center gap-1.5 rounded-xl bg-white px-4 text-sm font-bold text-ink"
              >
                {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <a href={SITE.phoneHref} className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-[15px] font-bold text-white">
              <Phone size={16} /> {SITE.phone}
            </a>
          </div>
          <div className="rounded-3xl border border-line bg-white p-6">
            <h2 className="font-display text-xl">Quick links</h2>
            <div className="mt-3 grid gap-2">
              {[
                ['GitHub repo', 'https://github.com/Yun0-vibe/a-one-adventures'],
                ['Vercel dashboard', 'https://vercel.com/dashboard'],
                ['Google Search Console', 'https://search.google.com/search-console'],
              ].map(([label, href]) => (
                <a key={href} href={href} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl bg-cream px-3.5 py-2.5 text-sm font-bold hover:text-brand">
                  {label} <ExternalLink size={14} className="opacity-60" />
                </a>
              ))}
              <Link href="/" className="flex items-center justify-between rounded-xl bg-cream px-3.5 py-2.5 text-sm font-bold hover:text-brand">
                View live site <ExternalLink size={14} className="opacity-60" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
