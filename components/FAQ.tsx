'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'What exactly does Comply Vault do?',
    answer: 'Comply Vault turns your meeting recordings from Zoom, Teams, Google Meet, Webex, and other platforms into structured compliance documentation. You upload a recording, we transcribe it with timestamps and speaker labels, extract key information (topics, recommendations, disclosures, decisions, follow-ups), and let you review/edit before finalizing. You get a downloadable audit pack (PDF, CSV, TXT, ZIP) that you can file into your compliance system.',
  },
  {
    question: 'What file formats can I upload?',
    answer: 'We support MP3, MP4, WAV, and M4A files. These are standard formats from Zoom, Teams, Google Meet, Webex, and other meeting platforms. We recommend uploading the original recording for best transcription quality.',
  },
  {
    question: 'What do I get when I export?',
    answer: 'A complete audit pack containing: (1) PDF structured compliance note with topics, recommendations, disclosures, decisions, and follow-ups, (2) CSV evidence map linking each claim to timestamps, (3) CSV version history showing all edits, (4) TXT transcript with timestamps and speaker labels, (5) ZIP bundle with everything. You can also export individual files.',
  },
  {
    question: 'How does the finalization workflow work?',
    answer: 'Anyone in your workspace can upload recordings and edit draft records. But only users with the CCO/Owner role can finalize a record. This ensures a clear compliance boundary—the CCO reviews and approves before anything becomes an official record. All finalization is logged with who approved and when.',
  },
  {
    question: 'Is this SEC compliant?',
    answer: 'Comply Vault helps you create documentation that supports your books-and-records workflow. We generate structured records with evidence linking and complete audit trails. However, we don\'t make compliance determinations or guarantee SEC compliance. You and your CCO are responsible for ensuring your documentation meets your firm\'s requirements. Consult your compliance counsel for specific regulatory questions.',
  },
  {
    question: 'How do you ensure the AI extraction is accurate?',
    answer: 'Three ways: (1) Every extracted claim links to the exact transcript moment so you can verify, (2) We show confidence scores for extracted items, (3) You review and edit before finalizing—nothing becomes official until you approve it. We call this "human-in-the-loop" because your review is the final quality check.',
  },
  {
    question: 'Where is my data stored?',
    answer: 'All data is stored in US-based cloud infrastructure with AES-256 encryption at rest and TLS encryption in transit. Each workspace is completely isolated—there\'s no cross-tenant access possible. We maintain audit logs of all access to your data.',
  },
  {
    question: 'Do you have SOC 2 certification?',
    answer: 'We\'re actively working toward SOC 2 Type II certification. Currently, we have security-first architecture with encryption, role-based access, audit logging, and workspace isolation. Contact us for our current security documentation and subprocessor list.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-28 lg:py-36 bg-background relative overflow-hidden noise-texture">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-sm font-medium mb-8 border border-primary/20">
            <HelpCircle className="w-4 h-4" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
            Frequently Asked{' '}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Honest answers about what Comply Vault does and doesn't do.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                'bg-card dark:bg-[hsl(160_35%_10%)] rounded-2xl border transition-all duration-300',
                openIndex === index
                  ? 'border-primary/30 shadow-lg dark:shadow-black/20'
                  : 'border-border dark:border-white/10 hover:border-primary/20'
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-card-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0',
                    openIndex === index && 'rotate-180 text-primary'
                  )}
                />
              </button>

              <div
                className={cn(
                  'overflow-hidden transition-all duration-300',
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                )}
              >
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-12 text-center p-8 bg-card dark:bg-[hsl(160_35%_10%)] rounded-2xl border border-border dark:border-white/10">
          <p className="text-card-foreground font-medium mb-4">
            Want to see it in action?
          </p>
          <p className="text-muted-foreground mb-6">
            Schedule a demo and we'll walk you through the complete workflow with a sample meeting.
          </p>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 bg-vault-green-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-vault-green-600 dark:hover:bg-vault-green-400 transition-colors"
          >
            Schedule a Demo
          </a>
        </div>
      </div>
    </section>
  )
}
