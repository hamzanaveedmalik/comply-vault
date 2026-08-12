import {
  FileCheck2,
  Layers3,
  LockKeyhole,
  Network,
  ShieldCheck,
} from 'lucide-react'
import {
  HairlineCell,
  HairlineGrid,
  MarketingContainer,
  MarketingSection,
  NumberedRow,
  PrincipleCard,
  SectionKicker,
  TagPill,
} from './marketing'

const principles = [
  {
    icon: ShieldCheck,
    title: 'Built for the CCO',
    description:
      'The product organises attention for compliance officers, not another note-taker for advisors.',
  },
  {
    icon: Network,
    title: 'Completes the stack',
    description:
      'ComplyVault sits beside Hadrius, Zocks, or Jump. It does not ask you to replace them.',
  },
  {
    icon: FileCheck2,
    title: 'Built for evidence',
    description:
      'Important actions, decisions, and approvals can be reconstructed rather than inferred after the fact.',
  },
  {
    icon: LockKeyhole,
    title: 'Route attention',
    description:
      'The output is a sealed audit pack with a supervision trail, not a meeting summary.',
  },
]

export function PainPoints() {
  return (
    <MarketingSection tone="bone" id="positioning">
      <MarketingContainer>
        <div className="max-w-3xl">
          <SectionKicker>Positioning</SectionKicker>
          <h2 className="font-editorial mt-5 text-display-section font-normal">
            Evidence the exam can follow.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-body-muted">
            ComplyVault converts meeting recordings and related correspondence into
            a CCO-facing evidence layer with human review at every gate.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <PrincipleCard key={principle.title} {...principle} />
          ))}
        </div>
      </MarketingContainer>
    </MarketingSection>
  )
}

const sealPoints = [
  {
    number: '01',
    title: 'Immutable Object Lock storage',
    description:
      'Sealed packs land in Object Lock storage with an append-only RecordSeal ledger.',
  },
  {
    number: '02',
    title: 'Deterministic pack bytes',
    description:
      'The same input produces the same bytes, every time. Digests are reproducible.',
  },
  {
    number: '03',
    title: 'Supersession without erasure',
    description:
      'Correct a sealed record by creating a successor. The chain stays in the pack. The original seal stays intact.',
  },
  {
    number: '04',
    title: 'Fiscal-year retention you cannot shorten',
    description:
      'Retention follows firm timezone and fiscal year-end month. Policy cannot be quietly reduced.',
  },
  {
    number: '05',
    title: 'Media posture as a forced CCO decision',
    description:
      'RETAIN or DISCARD blocks ingest until set. Transcript SHA-256 readback is required before media is discarded.',
  },
]

export function SealLayer() {
  return (
    <MarketingSection tone="ink" id="seal">
      <MarketingContainer>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionKicker onInk>Seal layer</SectionKicker>
            <h2 className="font-editorial mt-5 max-w-xl text-display-section font-normal">
              The differentiator is the seal, not the summary.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/55">
              Once a pack is sealed, the bytes and the custody story are fixed.
              Corrections create successors. Nothing is erased from the chain.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Object Lock', 'RecordSeal ledger', 'SHA-256 readback'].map(
                (tag) => (
                  <TagPill
                    key={tag}
                    className="border-white/15 bg-white/5 text-white/70"
                  >
                    {tag}
                  </TagPill>
                )
              )}
            </div>
          </div>

          <div className="border-t border-white/15">
            {sealPoints.map((point) => (
              <NumberedRow key={point.number} {...point} />
            ))}
          </div>
        </div>
      </MarketingContainer>
    </MarketingSection>
  )
}

const lifecycle = [
  { number: '01', title: 'UPLOADING', detail: 'Zoom auto-ingest or MP3/MP4/WAV/M4A upload' },
  { number: '02', title: 'PROCESSING', detail: 'Transcription and draft extraction' },
  { number: '03', title: 'DRAFT_READY', detail: 'Structured note ready for humans' },
  { number: '04', title: 'ADVISOR_CERTIFIED', detail: 'Advisor certifies the record' },
  { number: '05', title: 'CM_REVIEWED', detail: 'Compliance manager flag triage' },
  { number: '06', title: 'CCO_SIGNED_OFF', detail: 'CCO sign-off gate' },
  { number: '07', title: 'FINALIZED', detail: 'Sealed audit pack issued' },
]

export function ReviewLifecycle() {
  return (
    <MarketingSection tone="grey" id="how-it-works">
      <MarketingContainer>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <SectionKicker>Three-layer human review</SectionKicker>
            <h2 className="font-editorial mt-5 max-w-xl text-display-section font-normal">
              Supervision is a lifecycle, not a single click.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-body-muted lg:justify-self-end">
            Advisor certification, compliance manager triage, then CCO sign-off.
            Each stage is recorded. Nothing becomes official until the chain completes.
          </p>
        </div>

        <HairlineGrid columns={4} className="mt-16 lg:grid-cols-4">
          {lifecycle.map((stage) => (
            <HairlineCell key={stage.title} className="lg:min-h-[220px]">
              <span className="text-xs font-medium tracking-[0.16em] text-black/35">
                {stage.number}
              </span>
              <h3 className="font-editorial mt-8 text-xl font-normal tracking-[-0.02em] sm:text-2xl">
                {stage.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-body-muted">{stage.detail}</p>
            </HairlineCell>
          ))}
        </HairlineGrid>
      </MarketingContainer>
    </MarketingSection>
  )
}

const capabilities = [
  {
    icon: Layers3,
    number: '01',
    title: 'Compliance Cockpit',
    description:
      'IAPD and CRD firm lookup, configurable disclosure categories, a locked never-suppress set, approval workflow, version history, and a suppression log.',
    outcomes: ['Firm-specific flags', 'Disclosure profile', 'Suppression log'],
  },
  {
    icon: Network,
    number: '02',
    title: 'Zoom auto-ingest',
    description:
      'The live capture path is Zoom. For every other source, upload MP3, MP4, WAV, or M4A files.',
    outcomes: ['Zoom integration', 'Manual file upload', 'Custody preserved'],
  },
  {
    icon: FileCheck2,
    number: '03',
    title: 'Email evidence',
    description:
      'M365 and Gmail mailbox ingest with thread export, custody manifest, SHA-256 hashes, and links to meetings and clients.',
    outcomes: ['M365', 'Gmail', 'Custody manifest'],
  },
]

export function CapabilityGrid() {
  return (
    <MarketingSection tone="bone" id="features">
      <MarketingContainer>
        <div className="max-w-3xl">
          <SectionKicker>Shipped capabilities</SectionKicker>
          <h2 className="font-editorial mt-5 text-display-section font-normal">
            Firm-specific evidence, not generic AI output.
          </h2>
        </div>

        <HairlineGrid columns={3} className="mt-16">
          {capabilities.map((capability) => {
            const Icon = capability.icon
            return (
              <HairlineCell key={capability.title} className="lg:min-h-[420px]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.16em] text-black/35">
                    {capability.number}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-black/10 bg-white">
                    <Icon className="h-5 w-5 text-primary" aria-hidden />
                  </span>
                </div>
                <h3 className="font-editorial mt-16 text-3xl font-normal tracking-[-0.035em] sm:text-4xl">
                  {capability.title}
                </h3>
                <p className="mt-6 leading-7 text-body-muted">
                  {capability.description}
                </p>
                <div className="mt-10 border-t border-black/10 pt-6">
                  {capability.outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className="flex items-center gap-3 py-2 text-sm text-black/62"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {outcome}
                    </div>
                  ))}
                </div>
              </HairlineCell>
            )
          })}
        </HairlineGrid>

        <p className="mt-10 max-w-3xl text-sm leading-6 text-body-muted">
          Ask ComplyVault and full-text search cover the workspace so CCOs can find
          sealed packs, disclosures, and correspondence without leaving the product.
        </p>
      </MarketingContainer>
    </MarketingSection>
  )
}
