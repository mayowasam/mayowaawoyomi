import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./_components/Navbar";
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
const wano = localFont({
  src: './_fonts/WanoQuin-ExtraBold.otf',
  display: 'swap',
  variable: '--font-wano'
})

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mayowa Awoyomi",
  description: "Welcome to Awoyomi Mayowa's Portfolio Website",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${wano.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
