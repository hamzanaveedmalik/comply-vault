import { Upload, Settings, Rocket, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Capture',
    description:
      'Zoom auto-ingest, or upload MP3, MP4, WAV, or M4A. Media posture RETAIN or DISCARD is set before ingest continues.',
    details: ['Zoom auto-ingest', 'File upload', 'Forced media posture'],
  },
  {
    number: '02',
    icon: Settings,
    title: 'Human review',
    description:
      'Drafts move through advisor certification and compliance manager flag triage before CCO sign-off.',
    details: ['Advisor certification', 'CM triage', 'Evidence links'],
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Seal and export',
    description:
      'CCO sign-off finalizes the record into a sealed seven-file audit pack with supersession history.',
    details: ['RecordSeal ledger', 'Deterministic bytes', 'Seven-file pack'],
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 lg:py-36 bg-grey relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="section-kicker mb-8">Workflow</p>
          <h2 className="font-editorial text-display-section font-normal text-ink-soft mb-6">
            From capture to sealed pack
          </h2>
          <p className="text-lg text-body-muted max-w-2xl mx-auto leading-relaxed">
            Supervision is a recorded lifecycle. Nothing becomes official until
            advisor, compliance manager, and CCO gates complete.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-marketing-md border border-black/10 bg-white/55 p-8 h-full"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white font-editorial text-lg">
                {step.number}
              </div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-black/10 bg-white">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-editorial text-2xl font-normal tracking-[-0.02em] mb-3">
                {step.title}
              </h3>
              <p className="text-body-muted leading-relaxed mb-6">{step.description}</p>
              <ul className="space-y-3">
                {step.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-3 text-sm text-body-muted">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
