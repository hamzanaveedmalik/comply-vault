import { Archive, FileText, History, Link2, Mail, MessageSquare } from 'lucide-react'
import {
  MarketingContainer,
  MarketingSection,
  SectionKicker,
} from './marketing'

const packFiles = [
  {
    icon: FileText,
    name: '01_Compliance_Note.pdf',
    description: 'Structured note covering topics, recommendations, disclosures, decisions, and follow-ups.',
  },
  {
    icon: Link2,
    name: '02_Evidence_Map.csv',
    description: 'Each claim linked to timestamp, speaker, and transcript snippet.',
  },
  {
    icon: History,
    name: '03_Version_History.csv',
    description: 'Edit trail from draft through advisor, CM, and CCO gates.',
  },
  {
    icon: MessageSquare,
    name: '04_Transcript.txt',
    description: 'Full transcript with timestamps and speaker labels.',
  },
  {
    icon: Mail,
    name: '05_Email_Correspondence.csv',
    description: 'Linked email threads with custody hashes where ingested.',
  },
  {
    icon: Archive,
    name: '06_Supersession_Chain.txt',
    description: 'Successor links when a sealed record is corrected without erasure.',
  },
  {
    icon: FileText,
    name: 'README.txt',
    description: 'Pack inventory, seal identifiers, and how to verify digests.',
  },
]

export function Outputs() {
  return (
    <MarketingSection tone="grey" id="outputs">
      <MarketingContainer>
        <div className="max-w-3xl">
          <SectionKicker>Audit pack</SectionKicker>
          <h2 className="font-editorial mt-5 text-display-section font-normal">
            Seven files. One sealed pack.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-body-muted">
            The export is an audit pack, not a meeting summary. Capture is Zoom
            auto-ingest or a manual upload of MP3, MP4, WAV, or M4A.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-marketing border border-black/10 bg-black/10 md:grid-cols-2">
          {packFiles.map((file) => {
            const Icon = file.icon
            return (
              <article key={file.name} className="bg-grey p-7 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-black/10 bg-white">
                    <Icon className="h-5 w-5 text-primary" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-editorial text-xl font-normal tracking-[-0.02em]">
                      {file.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-body-muted">
                      {file.description}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </MarketingContainer>
    </MarketingSection>
  )
}
