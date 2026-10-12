import type { Metadata } from 'next';
import { Phone, ClipboardList } from 'lucide-react';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

// TODO: replace with your custom domain if you add one in Vercel
// (e.g. https://aoneadventures.com). Used for canonical URLs, sitemap and OG tags.
export const SITE_URL = 'https://a-one-adventures.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'A-One Adventures | 4x4 Scorpio Tours Across Nepal from Pokhara',
    template: '%s | A-One Adventures Pokhara',
  },
  description:
    'Pokhara based 8 seater 4WD Scorpio tours across Nepal. Muktinath Darshan, Lower and Upper Mustang, Pathivara Devi, All Nepal circuit. Owner driver Ganesh Prasad Subedi. Call +977 9846020030 to reserve.',
  keywords: [
    'Pokhara Scorpio rental',
    'Scorpio hire Pokhara',
    'Muktinath Scorpio tour',
    'Muktinath Darshan package',
    'Upper Mustang Scorpio tour',
    'Lo Manthang tour',
    'Pathivara Darshan',
    'Nepal tour package',
    'Jomsom Scorpio',
    'Kagbeni Muktinath',
    'All Nepal tour',
    'A-One Adventures',
  ],
  authors: [{ name: 'A-One Adventures' }],
  creator: 'A-One Adventures',
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'A-One Adventures',
    title: 'A-One Adventures | 4x4 Scorpio Tours Across Nepal from Pokhara',
    description:
      'Muktinath, Mustang, Pathivara, Chitwan, Lumbini and full All Nepal circuits by 8 seater Scorpio with trusted local drivers.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Mustang Himalayas covered by A-One Adventures tours',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A-One Adventures | 4x4 Scorpio Tours Across Nepal from Pokhara',
    description: 'Muktinath, Mustang, Pathivara and All Nepal by 8 seater Scorpio. Call +977 9846020030 to reserve.',
    images: ['https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop'],
  },
  icons: { icon: '/logo.svg', apple: '/logo.svg' },
};

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'A-One Adventures',
  description:
    'Family run 8 seater 4WD Scorpio tours from Pokhara across Nepal: Muktinath Darshan, Lower and Upper Mustang, Pathivara Devi, All Nepal circuit.',
  url: SITE_URL,
  telephone: '+9779846020030',
  priceRange: 'NPR 9,000 to 85,000',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Lakeside',
    addressLocality: 'Pokhara',
    addressCountry: 'NP',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 28.2096, longitude: 83.9856 },
  openingHours: 'Mo-Su 06:00-22:00',
  founder: { '@type': 'Person', name: 'Ganesh Prasad Subedi', telephone: '+9779846020030' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.svg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <div className="h-[76px] md:hidden" aria-hidden />
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
          <div className="grid grid-cols-2 gap-2.5">
            <a
              href="tel:+9779846020030"
              className="flex items-center justify-center gap-2 rounded-2xl bg-ink px-4 py-3.5 text-[15px] font-bold text-white"
            >
              <Phone size={17} /> Call Now
            </a>
            <a
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-2xl bg-accent px-4 py-3.5 text-[15px] font-bold text-white"
            >
              <ClipboardList size={17} /> Enquire
            </a>
          </div>
        </div>
        <Reveal />
      </body>
    </html>
  );
}
