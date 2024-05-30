import React from 'react';
import { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from './componments/Navbar';
import favicon from './favicon.ico';

const playfair = Playfair_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PerinneSeura',
  description: 'Teekkarien PerinneSeura ry',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const faviconUrl = favicon.src;

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={faviconUrl} sizes="any" />
      </head>
      <body className={playfair.className}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
