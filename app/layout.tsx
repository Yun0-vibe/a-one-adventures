import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'A-One Adventures — Private Scorpio Tours from Pokhara | Muktinath, Mustang, Pathivara',
  description:
    'Pokhara-based private Mahindra Scorpio tours. Muktinath Darshan, Lower & Upper Mustang, Pathivara, All Nepal circuit. Driver Ganesh Prasad Subedi. Book on WhatsApp +977 9846020030.',
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
