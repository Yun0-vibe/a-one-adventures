import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

// TODO: replace with your custom domain if you add one in Vercel
// (e.g. https://aoneadventures.com). Used for canonical URLs, sitemap & OG tags.
export const SITE_URL = 'https://a-one-adventures.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'A-One Adventures — Private Scorpio Tours from Pokhara | Muktinath, Mustang, Pathivara',
    template: '%s | A-One Adventures Pokhara',
  },
  description:
    'Pokhara-based private Mahindra Scorpio (8-seater 4WD) tours. Muktinath Darshan, Lower & Upper Mustang, Pathivara Devi, All Nepal circuit. Owner-driver Ganesh Prasad Subedi. Book on WhatsApp +977 9846020030.',
  keywords: [
    'Pokhara jeep rental',
    'Scorpio rental Pokhara',
    'Muktinath jeep tour',
    'Muktinath Darshan package',
    'Upper Mustang jeep tour',
    'Lo Manthang tour',
    'Pathivara Darshan',
    'Nepal tour package',
    'Jomsom jeep',
    'Kagbeni Muktinath',
    'private 4x4 Nepal',
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
    title: 'A-One Adventures — Private Scorpio Tours from Pokhara',
    description:
      'Muktinath, Mustang, Pathivara & All Nepal by private 8-seater Scorpio 4WD. One jeep, one trusted driver. Book on WhatsApp.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Muktinath and Mustang Himalayas — A-One Adventures tours',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A-One Adventures — Private Scorpio Tours from Pokhara',
    description: 'Muktinath, Mustang, Pathivara & All Nepal by private Scorpio 4WD. Book on WhatsApp +977 9846020030.',
    images: ['https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop'],
  },
  icons: { icon: '/logo.svg', apple: '/logo.svg' },
};

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'A-One Adventures',
  description:
    'Family-run private Mahindra Scorpio 4WD tours from Pokhara: Muktinath Darshan, Lower & Upper Mustang, Pathivara Devi, All Nepal circuit.',
  url: SITE_URL,
  telephone: '+9779846020030',
  priceRange: 'NPR 9,000 – 85,000',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Lakeside',
    addressLocality: 'Pokhara',
    addressCountry: 'NP',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 28.2096, longitude: 83.9856 },
  openingHours: 'Mo-Su 06:00-22:00',
  founder: { '@type': 'Person', name: 'Ganesh Prasad Subedi', telephone: '+9779846020030' },
  sameAs: ['https://wa.me/9779846020030'],
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
        <a
          className="float-wa"
          href="https://wa.me/9779846020030?text=Namaste%20A-One%20Adventures!%20I%20want%20to%20book%20a%20tour."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <span style={{ fontSize: 18 }}>◉</span> WhatsApp Us
        </a>
        <Reveal />
      </body>
    </html>
  );
}
