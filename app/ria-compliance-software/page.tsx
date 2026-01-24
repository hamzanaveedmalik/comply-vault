import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation, Footer } from '@/components'
import { Button } from '@/components/Button'
import { 
  ArrowRight, 
  Upload, 
  MessageSquare, 
  FileText, 
  Link2, 
  CheckCircle2,
  Shield,
  FileCheck,
  Clock,
  Users,
  Database,
  History,
  Download,
  Search,
  Scale,
  ChevronDown
} from 'lucide-react'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'RIA Compliance Software for SEC Exam-Ready Records | Comply Vault',
  description: 'RIA compliance software and platform with evidence-linked notes, audit trails, and CCO sign-off. Upload meeting recordings and export complete SEC exam-ready audit packs in under 10 minutes.',
  keywords: ['RIA compliance software', 'RIA compliance platform', 'RIA compliance tool', 'SEC exam readiness', 'compliance audit trail', 'evidence-linked notes', 'CCO approval', 'investment advisor compliance'],
  authors: [{ name: 'Comply Vault' }],
  alternates: {
    canonical: 'https://www.complyvault.co/ria-compliance-software',
  },
  openGraph: {
    title: 'RIA Compliance Software for SEC Exam-Ready Records | Comply Vault',
    description: 'RIA compliance software and platform with evidence-linked notes, audit trails, and CCO sign-off. Upload meeting recordings and export complete SEC exam-ready audit packs.',
    url: 'https://www.complyvault.co/ria-compliance-software',
    type: 'website',
    locale: 'en_US',
    siteName: 'Comply Vault',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RIA Compliance Software for SEC Exam-Ready Records | Comply Vault',
    description: 'RIA compliance software and platform with evidence-linked notes, audit trails, and CCO sign-off workflows.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const faqs = [
  {
    question: 'What does an SEC examiner expect to see in client interaction records?',
    answer: 'SEC examiners look for documentation that proves you provided suitable advice and followed your fiduciary duty. This includes: clear evidence of what was discussed, recommendations made, disclosures provided, client decisions, and follow-up actions. The documentation must be contemporaneous, accurate, and verifiable. Comply Vault creates structured records with direct evidence linking—every claim in your compliance note links back to the exact timestamp and transcript snippet where it occurred.',
  },
  {
    question: 'Can we edit notes before approval?',
    answer: 'Yes. After the AI generates a draft compliance note, anyone in your workspace can review and edit it. You can add context, correct any extraction errors, or remove items that aren\'t relevant. All edits are tracked in version history. Once you\'re satisfied, a CCO or owner finalizes the record, which locks it from further editing and creates the official audit trail.',
  },
  {
    question: 'How does supervision sign-off work?',
    answer: 'Comply Vault enforces role-based access control. Only users with the CCO or Owner role can finalize a compliance record. When a record is finalized, the system logs who approved it and when. This creates a clear supervision boundary—draft work is separated from officially approved records. All finalization actions are recorded in the audit trail.',
  },
  {
    question: 'What export formats are available?',
    answer: 'You can export individual files or a complete audit pack. Available formats include: PDF (structured compliance note with all extracted items), CSV (evidence map linking claims to timestamps), CSV (version history showing all edits), TXT (full transcript with timestamps and speaker labels), and ZIP (bundle of all files). Each export includes metadata like who finalized the record and when. See our sample audit pack page to view an example export.',
  },
  {
    question: 'Do you support Zoom recordings?',
    answer: 'Yes. Comply Vault supports recordings from Zoom, Microsoft Teams, Google Meet, Webex, and any other platform that can export audio or video files. We accept MP3, MP4, WAV, and M4A formats up to 500MB. The system automatically transcribes with speaker separation, timestamps, and extracts compliance-relevant information.',
  },
  {
    question: 'How long does it take per meeting?',
    answer: 'Processing time depends on recording length, but most meetings are ready for review in 5-10 minutes. Transcription happens first (usually 1-2 minutes per hour of audio), then AI extraction takes another few minutes. Once the draft is ready, CCO review typically takes 5-10 minutes depending on meeting complexity. Total time from upload to finalized record is usually under 15 minutes.',
  },
  {
    question: 'Is the system WORM-compliant or SOC2 certified?',
    answer: 'We do not claim WORM compliance or SOC 2 certification unless explicitly stated. Comply Vault provides audit trail logging, evidence linking, role-based approvals, and exportable audit packs.',
  },
  {
    question: 'What if the AI makes a mistake in extraction?',
    answer: 'AI extraction is not perfect, which is why we require human review before finalization. Every extracted item includes a link to the exact transcript moment where it was found, so you can verify accuracy. If the AI missed something or extracted incorrectly, you can edit the draft before finalizing. The evidence map ensures you can always trace back to the source recording.',
  },
  {
    question: 'Can we use this for annual compliance reviews?',
    answer: 'Yes. Comply Vault is designed to support ongoing books-and-records obligations, including annual reviews. Once records are finalized, they\'re stored in a searchable archive with full audit trails. You can export compliance reports, review version histories, and demonstrate your supervision process to examiners. The system maintains metadata on all records, making it easy to pull documentation for specific time periods or clients.',
  },
  {
    question: 'Do you provide legal or compliance advice?',
    answer: 'No. Comply Vault is a documentation tool, not a compliance advisory service. We help you create structured, evidence-linked records with complete audit trails, but we do not make compliance determinations or provide legal advice. You and your CCO are responsible for ensuring your documentation meets your firm\'s regulatory requirements. Always consult with your compliance counsel for specific regulatory questions.',
  },
]

function FAQSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Common questions about RIA compliance software and exam readiness
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-card dark:bg-[hsl(160_35%_10%)] rounded-2xl border border-border dark:border-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-semibold text-card-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 group-open:rotate-180 group-open:text-primary" />
              </summary>
              <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function RIAComplianceSoftwarePage() {
  return (
    <main className="relative">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Comply Vault',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            description: 'SEC exam-ready compliance software for RIAs. Upload meeting recordings, generate audit trails with evidence-linked notes, CCO approval workflows, and complete export packs.',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] pt-28 pb-20 overflow-hidden noise-texture">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-vault-green-500/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-8 border border-primary/20">
              <Scale className="w-4 h-4" />
              <span>SEC Rule 206(4)-7 Documentation</span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight mb-8 text-foreground">
              RIA Compliance Software for{' '}
              <span className="text-gradient">SEC Exam-Ready Records</span>
            </h1>

            {/* Value Prop */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
              Upload meeting recordings, get AI-drafted compliance notes with evidence timestamps, 
              CCO approval workflows, and complete audit packs. Turn every client interaction into 
              defensible documentation with full audit trails and evidence linking.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                href="#cta" 
                size="lg" 
                className="group"
                eventName="book_demo_click"
                eventParams={{ location: 'ria_page_hero' }}
              >
                Book a Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                href="/sample-audit-pack" 
                variant="outline" 
                size="lg"
                eventName="sample_audit_pack_click"
                eventParams={{ location: 'ria_page_hero' }}
              >
                See Sample Audit Pack
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-vault-green-500" />
                <span>Evidence timestamps</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-vault-green-500" />
                <span>Audit trail logging</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-vault-green-500" />
                <span>CCO-only finalization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Who It's For Section */}
        <section className="py-20 lg:py-28">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Built for <span className="text-vault-green-500">RIA Compliance Teams</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're a solo RIA or managing compliance for a growing firm
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Solo RIAs',
                description: 'Handle your own compliance documentation efficiently without hiring a full-time CCO',
              },
              {
                icon: Shield,
                title: 'Small Teams',
                description: 'Collaborate on draft records with clear supervision boundaries and approval workflows',
              },
              {
                icon: FileCheck,
                title: 'Compliance Officers',
                description: 'Review and approve client interaction records with full evidence traceability',
              },
              {
                icon: Scale,
                title: 'Outsourced CCOs',
                description: 'Manage multiple clients with centralized compliance documentation and audit trails',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card dark:bg-[hsl(160_35%_10%)] rounded-2xl p-6 border border-border dark:border-white/10 hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 bg-vault-green-500/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-vault-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 lg:py-28 bg-muted/30 dark:bg-white/[0.02] rounded-3xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From recording to exam-ready documentation in 5 simple steps
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                number: '01',
                icon: Upload,
                title: 'Upload Recording',
                description: 'Upload your meeting recording from Zoom, Teams, Google Meet, or any platform. Supports MP3, MP4, WAV, and M4A formats up to 500MB.',
              },
              {
                number: '02',
                icon: MessageSquare,
                title: 'Transcript + Speaker Separation',
                description: 'Automated transcription with timestamp precision and speaker diarization. Each speaker is identified and labeled throughout the conversation.',
              },
              {
                number: '03',
                icon: FileText,
                title: 'Draft Compliance Note',
                description: 'AI extracts topics discussed, recommendations made, disclosures provided, client decisions, and follow-up actions into a structured compliance note.',
              },
              {
                number: '04',
                icon: Link2,
                title: 'Evidence Mapping',
                description: 'Every claim in the compliance note links to the exact timestamp and transcript snippet where it occurred. Full traceability from note to recording.',
              },
              {
                number: '05',
                icon: CheckCircle2,
                title: 'CCO Review/Approve + Export',
                description: 'Review and edit the draft, then finalize with CCO approval. Export complete audit pack with PDF note, CSV evidence map, version history, and transcript.',
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-card dark:bg-[hsl(160_35%_10%)] rounded-2xl p-8 border border-border dark:border-white/10"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-vault-green-500 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4">
                      {step.number}
                    </div>
                    <div className="w-12 h-12 bg-muted dark:bg-white/5 rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-vault-green-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-20 lg:py-28">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Complete <span className="text-vault-coral-500">Audit Documentation</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything an SEC examiner expects to see in your books and records
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Link2,
                title: 'Evidence Map',
                description: 'CSV file linking every claim in your compliance note to exact timestamps and transcript snippets',
              },
              {
                icon: History,
                title: 'Version History',
                description: 'Complete audit trail of all edits made to the record, including who made changes and when',
              },
              {
                icon: CheckCircle2,
                title: 'Reviewer Sign-Off',
                description: 'CCO approval metadata showing who finalized the record and when it was approved',
              },
              {
                icon: Download,
                title: 'Export Formats',
                description: 'PDF structured note, CSV evidence map, CSV version history, TXT transcript, or ZIP bundle of all files',
              },
              {
                icon: Search,
                title: 'Searchable Archive',
                description: 'All finalized records stored in a searchable archive with full metadata and filtering',
              },
              {
                icon: Database,
                title: 'Metadata Logging',
                description: 'Recording details, upload time, finalization time, file hashes, and access logs',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card dark:bg-[hsl(160_35%_10%)] rounded-2xl p-6 border border-border dark:border-white/10"
              >
                <div className="w-12 h-12 bg-vault-green-500/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-vault-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why It Matters for SEC Exams */}
        <section className="py-20 lg:py-28 bg-muted/30 dark:bg-white/[0.02] rounded-3xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
                Why It Matters for <span className="text-gradient">SEC Exams</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                SEC examiners focus on defensibility, accuracy, and supervision
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Accuracy & Contemporaneous Documentation',
                  description: 'Records created within days of the meeting with timestamped evidence. No relying on memory weeks later.',
                  icon: Clock,
                },
                {
                  title: 'Provenance & Metadata',
                  description: 'Complete audit trail showing who created, edited, and finalized each record. File hashes prove document integrity.',
                  icon: Database,
                },
                {
                  title: 'Supervision Sign-Off',
                  description: 'Clear compliance boundary with CCO-only finalization. Examiners can see that records were reviewed and approved by qualified personnel.',
                  icon: Shield,
                },
                {
                  title: 'Evidence Traceability',
                  description: 'Every claim in your compliance note links back to the exact moment in the recording where it occurred. No unsupported assertions.',
                  icon: Link2,
                },
                {
                  title: 'Audit Trail',
                  description: 'Version history shows all changes made to the record before finalization. Demonstrates thorough review process and quality control.',
                  icon: History,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-card dark:bg-[hsl(160_35%_10%)] rounded-2xl p-6 border border-border dark:border-white/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-vault-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-vault-green-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-card dark:bg-[hsl(160_35%_10%)] rounded-2xl border border-border dark:border-white/10">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Important:</strong> Comply Vault does not claim WORM compliance or SOC 2 certification unless explicitly stated. 
                Our infrastructure includes enterprise-grade encryption, role-based access control, comprehensive audit logging, and workspace isolation. 
                Always consult your compliance counsel to ensure your documentation meets your firm's regulatory requirements. 
                Learn more <Link href="/about" className="text-vault-green-500 hover:text-vault-green-600 underline">about our company</Link> and <Link href="/contact" className="text-vault-green-500 hover:text-vault-green-600 underline">security practices</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQSection />

        {/* Bottom CTA */}
        <section id="cta" className="py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-vault-green-500/10 to-vault-coral-500/10 dark:from-vault-green-500/20 dark:to-vault-coral-500/20 rounded-3xl p-12 border border-vault-green-500/20">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-6">
              Ready to See It in Action?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a demo and we'll walk you through the complete workflow with a sample meeting recording
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="#cta" 
                size="lg" 
                className="group"
                eventName="book_demo_click"
                eventParams={{ location: 'ria_page_bottom' }}
              >
                Book a Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                href="/sample-audit-pack" 
                variant="outline" 
                size="lg"
                eventName="sample_audit_pack_click"
                eventParams={{ location: 'ria_page_bottom' }}
              >
                See Sample Audit Pack
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
