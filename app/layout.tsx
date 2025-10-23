import type { Metadata } from 'next';
import './globals.css';  // en vez de "@/app/globals.css"
import Nav from '@/components/nav';
import Providers from './providers';

import { Noto_Serif, Plus_Jakarta_Sans } from 'next/font/google';

const Jakarta = Plus_Jakarta_Sans({
  weight: ['400', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
});

const notoSerif = Noto_Serif({
  weight: ['400', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-serif',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Vor coffee',
  description: 'Vor coffee',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${Jakarta.className} ${notoSerif.variable} antialiased font-sans`}>
        {/* Todo lo client (Nav + páginas) queda dentro del ClerkProvider */}
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
