import {
  Mic,
  Brain,
  Link2,
  Edit3,
  UserCheck,
  History,
} from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Capture and transcription',
    description:
      'Zoom auto-ingest, or upload MP3, MP4, WAV, and M4A files. Speaker-diarized transcripts with timestamps.',
    color: 'green',
  },
  {
    icon: Brain,
    title: 'Structured extraction',
    description:
      'Topics, recommendations, disclosures, decisions, and follow-ups drafted for human review.',
    color: 'coral',
  },
  {
    icon: Link2,
    title: 'Evidence linking',
    description:
      'Every extracted claim links to the transcript moment with timestamp and snippet.',
    color: 'green',
  },
  {
    icon: Edit3,
    title: 'Three-layer review',
    description:
      'Advisor certification, compliance manager triage, then CCO sign-off before a pack can seal.',
    color: 'coral',
  },
  {
    icon: UserCheck,
    title: 'Firm disclosure profile',
    description:
      'Compliance Cockpit makes missing-disclosure flags firm-specific rather than generic.',
    color: 'green',
  },
  {
    icon: History,
    title: 'Seal and supersession',
    description:
      'Append-only RecordSeal ledger, deterministic pack bytes, and corrections that preserve prior seals.',
    color: 'coral',
  },
]

export function Features() {
  return (
    <section id="features-legacy" className="py-28 lg:py-36 bg-bone relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="section-kicker mb-8">Core capabilities</p>
          <h2 className="font-editorial text-display-section font-normal text-ink-soft mb-6">
            What ComplyVault actually does
          </h2>
          <p className="text-lg text-body-muted max-w-2xl mx-auto leading-relaxed">
            An evidence layer for CCOs: capture, review, seal, and export a
            defensible audit pack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-marketing-md border border-black/10 bg-white/55 p-8"
            >
              <div
                className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl ${
                  feature.color === 'green'
                    ? 'bg-vault-green-100'
                    : 'bg-vault-coral-100'
                }`}
              >
                <feature.icon
                  className={`h-7 w-7 ${
                    feature.color === 'green'
                      ? 'text-vault-green-500'
                      : 'text-vault-coral-500'
                  }`}
                />
              </div>
              <h3 className="font-editorial text-2xl font-normal tracking-[-0.02em] text-ink-soft mb-4">
                {feature.title}
              </h3>
              <p className="text-body-muted leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-sm text-body-muted max-w-2xl mx-auto">
          ComplyVault helps you create exam-ready documentation. It does not make
          compliance determinations or guarantee SEC compliance. Consult your CCO
          and counsel.
        </p>
      </div>
    </section>
  )
}
