import type { Metadata } from 'next'
import type { ReactElement } from 'react'

import { Footer, Navigation } from '@/components'

import { RoiPageClient } from './roi-page-client'

export const metadata: Metadata = {
  title: 'ROI Calculator | ComplyVault',
  description:
    'See how much time and money your practice loses to manual meeting documentation. Enter your numbers and get instant results.',
}

export default function RoiPage(): ReactElement {
  return (
    <main className="relative">
      <Navigation />
      <RoiPageClient />
      <Footer />
    </main>
  )
}
