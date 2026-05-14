import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#111415',
};

export const metadata: Metadata = {
  title: 'PCSO Lotto Results Today May 15, 2026 — Official 6/58 & 6/45 Winners',
  description: 'Get official PCSO lottery results for May 15, 2026. Check 6/58 Ultra, 6/45 Mega Lotto, 3D Swertres, Friday draw winners. Developed by Abhi C.',
  generator: 'v0.app',
  authors: [{ name: 'Abhi C' }],
  keywords: ['PCSO', 'lottery results', 'May 15 2026', '6/58 Ultra', '6/45 Mega', 'Swertres hearing', 'Friday draws', 'Philippines', 'jackpot'],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Lotto Results PH - Developed by Abhi C',
  },
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: 'https://lotto-results-ph.vercel.app',
    siteName: 'Lotto Results PH',
    title: 'PCSO Lotto Results Today May 15, 2026 — Official 6/58 & 6/45 Winners',
    description: 'Get official PCSO lottery results for May 15, 2026. Check 6/58 Ultra, 6/45 Mega Lotto, 3D Swertres, Friday draw winners.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Lotto Results PH" />
        <meta name="theme-color" content="#111415" />
        <link rel="manifest" href="/manifest.json" />
        {/* Google Indexing API Setup for Real-Time Indexing */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // May 15, 2026 URL Structure - Google Indexing API Ready
              const indexingApiUrl = 'https://lotto-results-ph.vercel.app/';
              
              // Log for GSC integration
              console.log('[v0] Lotto Results PH - May 15, 2026 SEO Deployment');
              console.log('[v0] Ready for Google Indexing API integration');
              
              // Register Service Worker for PWA "Add to Home Screen"
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js').catch(err => console.log('[v0] SW registration failed:', err));
              }
            `,
          }}
        />
        {/* Adsterra Social Bar Placeholder */}
        <script
          async
          src="https://platform.adsterra.com/s/socialbar.js?campaign=socialbar"
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
