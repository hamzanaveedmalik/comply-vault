import type { Metadata } from 'next'
import {
  CtaSlab,
  CtaSlabDemoAction,
  HeroHeadline,
  MarketingContainer,
  MarketingSection,
  SectionKicker,
  StatusPill,
} from '@/components/marketing'

export const metadata: Metadata = {
  title: 'Palette preview | ComplyVault',
  robots: { index: false, follow: false },
}

export default function PalettePreviewPage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-grey text-[#20201f]">
      <header className="border-b border-black/10 bg-bone px-4 py-6 sm:px-6 lg:px-10">
        <MarketingContainer>
          <p className="section-kicker">Phase 2 , internal preview</p>
          <h1 className="font-editorial mt-3 text-3xl font-normal tracking-[-0.03em] sm:text-4xl">
            Palette variants
          </h1>
          <p className="mt-3 max-w-2xl text-body-muted leading-7">
            Pick one hero treatment and one CTA text tone. Accent budget stays
            sparse. Section rhythm is grey → bone → ink → grey → CTA.
          </p>
        </MarketingContainer>
      </header>

      <MarketingSection tone="grey" compact>
        <MarketingContainer>
          <SectionKicker>Hero option A</SectionKicker>
          <p className="mt-2 max-w-xl text-sm text-body-muted">
            Drop the accent word. Entire headline in near-black.
          </p>
          <div className="relative mt-10 overflow-hidden rounded-marketing border border-black/10 bg-grey p-8 sm:p-12">
            <div className="pointer-events-none absolute inset-0 marketing-grid opacity-50" />
            <div className="relative max-w-3xl">
              <StatusPill>Evidence for the CCO</StatusPill>
              <HeroHeadline
                mode="ink"
                lead="Route attention,"
                accent="not retention."
              />
              <p className="mt-8 max-w-xl text-lg leading-8 text-body-muted">
                ComplyVault seals meeting evidence into an audit pack the CCO
                can defend.
              </p>
            </div>
          </div>
        </MarketingContainer>
      </MarketingSection>

      <MarketingSection tone="bone" compact>
        <MarketingContainer>
          <SectionKicker>Hero option B</SectionKicker>
          <p className="mt-2 max-w-xl text-sm text-body-muted">
            Brighter green tint reserved solely for the accent word
            (--hero-accent #1B8F57). Not reused on buttons or body.
          </p>
          <div className="relative mt-10 overflow-hidden rounded-marketing border border-black/10 bg-bone p-8 sm:p-12">
            <div className="pointer-events-none absolute inset-0 marketing-grid opacity-50" />
            <div className="relative max-w-3xl">
              <StatusPill>Evidence for the CCO</StatusPill>
              <HeroHeadline
                mode="tint"
                lead="Route attention,"
                accent="not retention."
              />
              <p className="mt-8 max-w-xl text-lg leading-8 text-body-muted">
                ComplyVault seals meeting evidence into an audit pack the CCO
                can defend.
              </p>
            </div>
          </div>
        </MarketingContainer>
      </MarketingSection>

      <MarketingSection tone="ink" compact>
        <MarketingContainer>
          <SectionKicker onInk>Section rhythm check</SectionKicker>
          <h2 className="font-editorial mt-5 max-w-xl text-display-section font-normal">
            Near-black section with brand-green numerals.
          </h2>
          <div className="mt-10 border-t border-white/15">
            <div className="grid gap-6 border-b border-white/15 py-9 sm:grid-cols-[90px_1fr]">
              <span className="font-editorial text-3xl text-primary">01</span>
              <div>
                <h3 className="font-editorial text-3xl font-normal tracking-[-0.025em]">
                  Seal layer first
                </h3>
                <p className="mt-4 max-w-xl leading-7 text-white/55">
                  Immutable Object Lock storage and an append-only seal ledger.
                </p>
              </div>
            </div>
          </div>
        </MarketingContainer>
      </MarketingSection>

      <MarketingSection tone="grey" compact>
        <MarketingContainer className="space-y-14">
          <div>
            <SectionKicker>CTA variant , white text</SectionKicker>
            <p className="mt-2 mb-8 max-w-xl text-sm text-body-muted">
              Deep green CTA (--cta-bg #0A2E1F) with white title and white/80
              body.
            </p>
            <CtaSlab
              textTone="white"
              kicker="Next step"
              title="See the audit pack your exam would request."
              description="Share how your firm handles meeting evidence today. We will reply with a focused walkthrough."
              action={<CtaSlabDemoAction />}
            />
          </div>

          <div>
            <SectionKicker>CTA variant , bone text</SectionKicker>
            <p className="mt-2 mb-8 max-w-xl text-sm text-body-muted">
              Same deep green field with bone (#f7f6f3) title and bone/80 body.
            </p>
            <CtaSlab
              textTone="bone"
              kicker="Next step"
              title="See the audit pack your exam would request."
              description="Share how your firm handles meeting evidence today. We will reply with a focused walkthrough."
              action={<CtaSlabDemoAction />}
            />
          </div>
        </MarketingContainer>
      </MarketingSection>

      <footer className="border-t border-black/10 bg-bone px-4 py-10 sm:px-6 lg:px-10">
        <MarketingContainer>
          <p className="text-sm text-body-muted">
            Reply with: hero A or B, and CTA white or bone. Then Phase 3.
          </p>
        </MarketingContainer>
      </footer>
    </div>
  )
}
