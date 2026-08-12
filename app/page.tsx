import type { Metadata } from 'next'
import {
  Navigation,
  Hero,
  PainPoints,
  SealLayer,
  ReviewLifecycle,
  CapabilityGrid,
  Outputs,
  WhoItsFor,
  Security,
  FAQ,
  CTA,
  Footer,
} from '@/components'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'ComplyVault | Evidence layer for RIA compliance',
  description:
    'ComplyVault seals client meeting evidence into CCO-ready audit packs with Object Lock retention, three-layer human review, and firm-specific disclosure controls.',
  alternates: {
    canonical: SITE_URL,
    languages: {
      'en-US': SITE_URL,
      'x-default': SITE_URL,
    },
  },
}

export default function Home(): React.ReactElement {
  return (
    <main className="relative bg-grey">
      <Navigation />
      <Hero />
      <PainPoints />
      <SealLayer />
      <ReviewLifecycle />
      <CapabilityGrid />
      <Outputs />
      <WhoItsFor />
      <Security />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
