import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact — Call or WhatsApp Your Driver Directly',
  description:
    'Contact A-One Adventures Pokhara: call or WhatsApp Ganesh Prasad Subedi on +977 9846020030. Lakeside pickup, 6 AM – 10 PM, 7 days.',
  alternates: { canonical: '/contact' },
};

export default function Contact() {
  return (
    <section className="section container">
      <div className="kicker">Contact</div>
      <h1 className="h2">Call the driver, not a call centre.</h1>
      <div className="grid2">
        <div className="card"><div className="card-body">
          <span className="pill green">Fastest reply</span>
          <h3 className="serif">{SITE.driver}</h3>
          <p style={{ fontSize: 22, fontWeight: 800, margin: '6px 0' }}><a href={SITE.phoneHref}>{SITE.phone}</a></p>
          <p style={{ color: 'var(--muted)' }}>{SITE.location} · Available 6 AM – 10 PM NPT, 7 days.</p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a className="btn btn-green" target="_blank" rel="noreferrer" href={SITE.whatsapp}>WhatsApp now</a>
            <a className="btn btn-line" href={`mailto:${SITE.email}`}>Email us</a>
          </div>
        </div></div>
        <div className="card"><div className="card-body">
          <h3 className="serif">Find us</h3>
          <p style={{ color: 'var(--muted)' }}>Based in Lakeside, Pokhara. We pick up from any hotel in Pokhara valley, plus Kathmandu starts for All-Nepal & Pathivara tours.</p>
          <iframe title="Pokhara map" src="https://www.google.com/maps?q=Pokhara+Lakeside&output=embed" style={{ border: 0, borderRadius: 12, minHeight: 260, width: '100%' }} loading="lazy" />
        </div></div>
      </div>
    </section>
  );
}
