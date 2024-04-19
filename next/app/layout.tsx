import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../app/componments/Navbar"
import favicon from "../public/pseura-filled.svg";
import Footer from "./componments/Footer";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PerinneSeura",
  description: "Teekkarien PerinneSeura ry"
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
          <Footer/>
        </main>
      </body>
    </html>
  );
}