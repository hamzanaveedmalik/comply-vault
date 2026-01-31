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

export const metadata: Metadata = {
  title: 'FCA Compliance Software for UK Financial Services | Comply Vault',
  description: 'FCA compliance software for UK financial services firms. Turn meeting recordings into FCA review-ready file notes with evidence linking, supervision workflows, and complete audit trails.',
  alternates: {
    canonical: 'https://www.complyvault.co/uk',
    languages: {
      'en-GB': 'https://www.complyvault.co/uk',
      'en-US': 'https://www.complyvault.co',
      'x-default': 'https://www.complyvault.co',
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
