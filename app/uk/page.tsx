import type { Metadata } from 'next'
import {
  Navigation,
  Hero,
  TrustedBy,
  PainPoints,
  ROIStats,
  Outputs,
  Features,
  WhoItsFor,
  HowItWorks,
  Security,
  FAQ,
  CTA,
  Footer,
} from '@/components'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'FCA Compliance Software for UK Financial Services | ComplyVault',
  description: 'FCA compliance software for UK financial services firms. Turn meeting recordings into FCA review-ready file notes with evidence linking, supervision workflows, and complete audit trails.',
  alternates: {
    canonical: `${SITE_URL}/uk`,
    languages: {
      'en-GB': `${SITE_URL}/uk`,
      'en-US': SITE_URL,
      'x-default': SITE_URL,
    },
  },
}

export default function UKHomePage() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <TrustedBy />
      <PainPoints />
      <ROIStats />
      <Outputs />
      <Features />
      <WhoItsFor />
      <HowItWorks />
      <Security />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
