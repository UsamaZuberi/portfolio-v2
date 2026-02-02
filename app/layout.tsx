import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import FloatingGitHubBadge from '@/components/ui/FloatingGitHubBadge';
import StructuredData from '@/components/seo/StructuredData';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://usamazuberi.vercel.app'),
  title: {
    default: 'Muhammad Usama Zuberi | Senior Front-end Web Developer | React & Next.js Expert',
    template: '%s | Muhammad Usama Zuberi',
  },
  description:
    'Senior Front-end Web Developer specializing in React, Next.js, TypeScript, and Web3. 5+ years building scalable web applications and DeFi platforms. Available for hire in Karachi, Pakistan.',
  applicationName: 'Muhammad Usama Zuberi Portfolio',
  authors: [{ name: 'Muhammad Usama Zuberi', url: 'https://usamazuberi.vercel.app' }],
  creator: 'Muhammad Usama Zuberi',
  publisher: 'Muhammad Usama Zuberi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/uz-logo.png',
    shortcut: '/uz-logo.png',
    apple: '/uz-logo.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://usamazuberi.vercel.app',
    title: 'Muhammad Usama Zuberi | Senior Front-end Web Developer',
    description:
      'Senior Front-end Developer with 5+ years of experience in React, Next.js, TypeScript, and Web3 technologies. Building scalable web applications and DeFi platforms.',
    siteName: 'Muhammad Usama Zuberi Portfolio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Usama Zuberi - Senior Front-end Web Developer',
      },
      {
        url: '/uz-logo.png',
        width: 512,
        height: 512,
        alt: 'UZ Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Usama Zuberi | Senior Front-end Web Developer',
    description:
      'Senior Front-end Developer specializing in React, Next.js, TypeScript, and Web3. Building scalable web applications and DeFi platforms.',
    site: '@usamazuberi',
    creator: '@usamazuberi',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://usamazuberi.vercel.app',
  },
  category: 'technology',
  classification: 'Web Development Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className="bg-white font-sans text-gray-900 transition-colors duration-200 dark:bg-gray-900 dark:text-gray-100">
        <ThemeProvider>
          {/* Vercel Speed Insights */}
          <SpeedInsights />

          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to main content
          </a>

          <Header />

          <main id="main-content" role="main">
            {children}
          </main>

          <Footer />
          <ScrollToTop />
          <FloatingGitHubBadge />
        </ThemeProvider>
      </body>
    </html>
  );
}
