'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'What exactly does ComplyVault do?',
    answer:
      'ComplyVault is a CCO-facing evidence layer. Zoom auto-ingest or a manual upload of MP3, MP4, WAV, or M4A produces a draft record. Humans review through advisor certification, compliance manager triage, and CCO sign-off. The output is a sealed seven-file audit pack with an append-only seal ledger.',
  },
  {
    question: 'What file formats can I upload?',
    answer:
      'MP3, MP4, WAV, and M4A. Zoom is the live capture integration. Other meeting sources are supported through file upload, without claiming platform-native integrations that are not built.',
  },
  {
    question: 'What is in the audit pack?',
    answer:
      'Seven files: 01_Compliance_Note.pdf, 02_Evidence_Map.csv, 03_Version_History.csv, 04_Transcript.txt, 05_Email_Correspondence.csv, 06_Supersession_Chain.txt, and README.txt.',
  },
  {
    question: 'How does human review work?',
    answer:
      'Lifecycle stages run UPLOADING → PROCESSING → DRAFT_READY → ADVISOR_CERTIFIED → CM_REVIEWED → CCO_SIGNED_OFF → FINALIZED. Each gate is recorded. Finalization is not a single CCO-only shortcut that skips earlier supervision.',
  },
  {
    question: 'Is this SEC compliant?',
    answer:
      'ComplyVault helps you create documentation that supports books-and-records and supervision workflows. It does not make compliance determinations or guarantee SEC compliance. You and your CCO remain responsible for your firm\'s obligations. Consult compliance counsel for regulatory questions.',
  },
  {
    question: 'How do you keep extraction accountable?',
    answer:
      'Extracted claims link to transcript moments, humans must certify and sign off, and sealed packs carry digests and supersession history. AI does not replace policy, judgement, or accountability.',
  },
  {
    question: 'Where is my data stored?',
    answer:
      'Data is stored in US-based cloud infrastructure with encryption in transit and at rest. Workspaces are isolated. Access and seal events are logged.',
  },
  {
    question: 'Do you have SOC 2 certification?',
    answer:
      'SOC 2 status: Not started. Encryption, role-based access, audit logging, workspace isolation, and the WORM seal layer are implemented today. Ask for the ungated security overview for current controls and subprocessors.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-grey px-4 py-section sm:px-6 lg:px-10 lg:py-section-lg">
      <div className="mx-auto grid max-w-marketing gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 text-kicker-muted">
            <HelpCircle className="h-4 w-4" aria-hidden />
          </div>
          <p className="section-kicker">Frequently asked</p>
          <h2 className="font-editorial mt-5 max-w-md text-display-section font-normal">
            Honest answers about what is shipped.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={cn(
                'rounded-marketing-md border transition-colors duration-marketing',
                openIndex === index
                  ? 'border-primary/25 bg-white'
                  : 'border-black/10 bg-white/55'
              )}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-editorial pr-4 text-xl font-normal tracking-[-0.02em] text-ink-soft sm:text-2xl">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 shrink-0 text-black/40 transition-transform duration-marketing',
                    openIndex === index && 'rotate-180 text-primary'
                  )}
                />
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all duration-marketing',
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                )}
              >
                <p className="px-6 pb-6 leading-7 text-body-muted">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
