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
  alternates: {
    canonical: 'https://www.complyvault.co',
  },
}

export default function Home() {
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
