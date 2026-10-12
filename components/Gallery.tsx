'use client';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery({ items }: { items: { src: string; label: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {items.map((g, i) => (
          <button
            key={g.label}
            data-delay={i * 80}
            onClick={() => setOpen(i)}
            className="reveal group relative h-[220px] overflow-hidden rounded-3xl text-left md:h-[260px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('${g.src}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute bottom-4 left-4 text-sm font-bold text-white">{g.label}</span>
          </button>
        ))}
      </div>
      {open !== null ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-5"
          onClick={() => setOpen(null)}
        >
          <button
            aria-label="Close"
            className="absolute right-5 top-5 rounded-full bg-white/15 p-2.5 text-white hover:bg-white/30"
            onClick={() => setOpen(null)}
          >
            <X size={22} />
          </button>
          <button
            aria-label="Previous photo"
            className="absolute left-3 rounded-full bg-white/15 p-2.5 text-white hover:bg-white/30 md:left-8"
            onClick={(e) => (e.stopPropagation(), setOpen((open + items.length - 1) % items.length))}
          >
            <ChevronLeft size={24} />
          </button>
          <figure className="m-0 max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img src={items[open].src} alt={items[open].label} className="max-h-[78vh] w-auto rounded-2xl" />
            <figcaption className="mt-3 text-center font-bold text-white">{items[open].label}</figcaption>
          </figure>
          <button
            aria-label="Next photo"
            className="absolute right-3 rounded-full bg-white/15 p-2.5 text-white hover:bg-white/30 md:right-8"
            onClick={(e) => (e.stopPropagation(), setOpen((open + 1) % items.length))}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      ) : null}
    </>
  );
}
