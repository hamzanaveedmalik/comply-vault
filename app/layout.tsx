import type { Metadata } from 'next'
import { Inter, Source_Serif_4, Space_Mono } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from '@/components/theme-provider'
import { SITE_URL } from '@/lib/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  weight: ['400', '600'],
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'ComplyVault | RIA Compliance Made Simple',
  description: 'The all-in-one compliance vault for Registered Investment Advisors. Automate compliance workflows, manage documentation, and stay audit-ready with ease.',
  keywords: ['RIA compliance', 'investment advisor', 'compliance management', 'SEC compliance', 'regulatory compliance', 'compliance software'],
  authors: [{ name: 'ComplyVault' }],
  openGraph: {
    title: 'ComplyVault | RIA Compliance Made Simple',
    description: 'The all-in-one compliance vault for Registered Investment Advisors. Automate workflows, manage documentation, and stay audit-ready.',
    type: 'website',
    locale: 'en_US',
    siteName: 'ComplyVault',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ComplyVault | RIA Compliance Made Simple',
    description: 'The all-in-one compliance vault for Registered Investment Advisors.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2NDFEE4GSW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2NDFEE4GSW');
          `}
        </Script>
        {/* Apollo.io Website Visitor Tracking */}
        <Script id="apollo-tracker" strategy="afterInteractive">
          {`
            function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
            o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=true,o.defer=true,
            o.onload=function(){window.trackingFunctions.onLoad({appId:"6993aae50f8f7f00155d468e"})},
            document.head.appendChild(o)}initApollo();
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${sourceSerif.variable} ${spaceMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
