import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ShareStash — Rent Anything from People Nearby',
  description: 'Peer-to-peer rental marketplace. Rent tools, electronics, sports gear, and more from people in your neighborhood. Save money, reduce waste.',
  keywords: 'rental marketplace, peer to peer rental, rent tools, sharing economy',
  openGraph: {
    title: 'ShareStash — Rent Anything from People Nearby',
    description: 'Browse thousands of items available for rent in your area.',
    siteName: 'ShareStash',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
