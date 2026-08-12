import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation, Footer } from '@/components'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'ROI calculator retired | ComplyVault',
  description:
    'ComplyVault no longer publishes ROI calculators or savings statistics. Book a demo to walk the sealed audit pack.',
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/roi` },
}

export default function RoiRetiredPage(): React.ReactElement {
  return (
    <main className="min-h-screen bg-grey">
      <Navigation />
      <section className="px-4 py-32 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-kicker">Retired</p>
          <h1 className="font-editorial mt-5 text-display-section font-normal text-ink-soft">
            We do not publish savings statistics.
          </h1>
          <p className="mt-6 text-lg leading-8 text-body-muted">
            Unsupported ROI claims and calculators have been removed. The product
            story is the sealed audit pack and the supervision trail behind it.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#cta"
              className="inline-flex h-14 items-center rounded-xl bg-primary px-7 text-base font-medium text-white hover:bg-primary-hover"
            >
              Book a demo
            </Link>
            <Link
              href="/sample-audit-pack"
              className="inline-flex h-14 items-center rounded-xl border border-black/15 bg-white/40 px-7 text-base font-medium hover:bg-white"
            >
              See a sample audit pack
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
