import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./_components/Navbar";
import localFont from 'next/font/local'
import { ThemeScript } from "./_components/ThemeScript";
import { ThemeProvider } from "./_components/ThemeProvider";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, LINKEDIN_URL, GITHUB_URL } from "./configs/config";
import BackToTop from "./_components/BackToTop";

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
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Next.js", "TypeScript", "UK Developer"],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Self-employed",
  },
  sameAs: [LINKEDIN_URL, GITHUB_URL],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "Full Stack Development",
    "Web Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Cloud Computing",
    "AI/ML Integration",
    "Kubernetes",
    "DevOps",
    "Microservices",
    "RESTful APIs",
    "GraphQL",
    "Agile Methodologies",
    "Software Architecture",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${wano.className} antialiased`}
      >
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100]
              focus:px-4 focus:py-2 focus:bg-gray-900 focus:text-white focus:rounded-lg
              dark:focus:bg-white dark:focus:text-gray-900"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content">
            {children}
          </main>
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
