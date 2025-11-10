
import type { Metadata } from "next";
import { Archivo_Black, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from './component/Navbar';

// Load Archivo Black font (for headings)
const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

// Load Poppins font (for body text)
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "HYPER - Where Old Money Meets Meme",
  description: "Building on Gen Z influence to create next-gen investment strategies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivoBlack.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <div className="bg-[var(--color-primary)] relative min-h-screen">
          
          {/* Vertical lines - completely separate, lowest layer with FIXED positioning */}
          <div className="fixed mx-[200px] inset-0 pointer-events-none z-[25]">
            <div className="absolute top-0 left-0 h-full w-[1px] bg-white opacity-10" />
            <div className="absolute top-0 left-1/3 h-full w-[1px] bg-white opacity-10" />
            <div className="absolute top-0 left-2/3 h-full w-[1px] bg-white opacity-10" />
            <div className="absolute top-0 right-0 h-full w-[1px] bg-white opacity-10" />
          </div>

          {/* Navbar - separate, will be hidden by Hero's z-100 */}
          <Navbar />
          
          {/* Content - Hero with z-100 will cover navbar */}
          {children}
        </div>
      </body>
    </html>
  );
}