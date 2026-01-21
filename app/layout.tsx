import type { Metadata } from 'next'
import Script from 'next/script'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Comply Vault | RIA Compliance Made Simple',
  description: 'The all-in-one compliance vault for Registered Investment Advisors. Automate compliance workflows, manage documentation, and stay audit-ready with ease.',
  keywords: ['RIA compliance', 'investment advisor', 'compliance management', 'SEC compliance', 'regulatory compliance', 'compliance software'],
  authors: [{ name: 'Comply Vault' }],
  openGraph: {
    title: 'Comply Vault | RIA Compliance Made Simple',
    description: 'The all-in-one compliance vault for Registered Investment Advisors. Automate workflows, manage documentation, and stay audit-ready.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Comply Vault',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comply Vault | RIA Compliance Made Simple',
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
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D47HNBRPNG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D47HNBRPNG');
          `}
        </Script>
      </head>
      <body className="antialiased">
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
