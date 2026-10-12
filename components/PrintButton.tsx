'use client';
import { Printer } from 'lucide-react';

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-[15px] font-bold hover:border-ink"
    >
      <Printer size={16} /> Print itinerary
    </button>
  );
}
