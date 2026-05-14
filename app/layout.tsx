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
  title: 'Lotto Results PH - PCSO Lottery Results & Draw Schedule',
  description: 'Get the latest PCSO lottery results, draw schedules, and lucky numbers for 6/58 Ultra, 6/55 Grand, 3D Swertres, and more.',
  generator: 'v0.app',
  authors: [{ name: 'Abhi C' }],
  keywords: ['PCSO', 'lottery', 'results', 'Philippines', '6/58', '6/55', 'Swertres', 'jackpot'],
  robots: 'index, follow',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Lotto Results PH',
  },
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: 'https://lottoresponsesph.vercel.app',
    siteName: 'Lotto Results PH',
    title: 'Lotto Results PH - PCSO Lottery Results & Draw Schedule',
    description: 'Get the latest PCSO lottery results, draw schedules, and lucky numbers for 6/58 Ultra, 6/55 Grand, 3D Swertres, and more.',
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                  document.documentElement.classList.remove('dark')
                } else {
                  document.documentElement.classList.add('dark')
                }
              } catch (e) {}
              
              // Register Service Worker for PWA
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
