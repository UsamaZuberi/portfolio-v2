import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import FloatingGitHubBadge from '@/components/ui/FloatingGitHubBadge';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
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
  title: 'Muhammad Usama Zuberi - Front-end Web Developer',
  description:
    'Portfolio of Muhammad Usama Zuberi, a passionate Front-end Web Developer specializing in React, Next.js, TypeScript, and modern web technologies.',
  keywords: ['Web Developer', 'Front-end Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Muhammad Usama Zuberi' }],
  creator: 'Muhammad Usama Zuberi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://usamazuberi.com',
    title: 'Muhammad Usama Zuberi - Front-end Web Developer',
    description:
      'Portfolio of Muhammad Usama Zuberi, showcasing modern web development projects and expertise.',
    siteName: 'Muhammad Usama Zuberi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Usama Zuberi - Front-end Web Developer',
    description:
      'Portfolio of Muhammad Usama Zuberi, showcasing modern web development projects and expertise.',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="bg-white font-sans text-gray-900 transition-colors duration-200 dark:bg-gray-900 dark:text-gray-100">
        <ThemeProvider>
          {/* Vercel Speed Insights */}
          <SpeedInsights />
          {/* Vercel Analytics */}
          <Analytics />

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
