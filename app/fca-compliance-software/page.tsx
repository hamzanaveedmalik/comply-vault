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

export const metadata: Metadata = {
  title: 'FCA Compliance Software for SYSC 9 Supervision & Monitoring | Comply Vault',
  description: 'FCA compliance software for UK financial services firms. Generate file notes, supervision records, and advice suitability documentation with evidence linking and audit trails. FCA SYSC 9 compliant workflows.',
  keywords: ['FCA compliance software', 'FCA SYSC 9', 'supervision software', 'monitoring software', 'file notes', 'advice suitability', 'UK compliance', 'FCA supervision'],
  authors: [{ name: 'Comply Vault' }],
  alternates: {
    canonical: 'https://www.complyvault.co/fca-compliance-software',
  },
  openGraph: {
    title: 'FCA Compliance Software for SYSC 9 Supervision & Monitoring | Comply Vault',
    description: 'FCA compliance software for UK financial services firms. Generate file notes, supervision records, and advice suitability documentation.',
    url: 'https://www.complyvault.co/fca-compliance-software',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Comply Vault',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FCA Compliance Software for SYSC 9 Supervision & Monitoring | Comply Vault',
    description: 'FCA compliance software with evidence-linked file notes, supervision workflows, and audit trails.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const faqs = [
  {
    question: 'What does FCA SYSC 9 require for supervision and monitoring?',
    answer: 'FCA SYSC 9 requires firms to establish and maintain systems and controls for effective supervision and monitoring of staff. This includes documenting advice conversations, maintaining file notes with evidence of suitability assessments, and demonstrating that supervision processes are working effectively. Comply Vault helps you create structured file notes with evidence linking, supervision sign-off workflows, and complete audit trails that support your SYSC 9 obligations.',
  },
  {
    question: 'What are file notes and how does Comply Vault help?',
    answer: 'File notes are contemporaneous records of client interactions, advice given, and suitability assessments. Comply Vault turns meeting recordings into structured file notes with timestamped evidence, topics discussed, recommendations made, and suitability considerations. Every claim in your file note links back to the exact moment in the recording, providing full traceability for FCA reviews.',
  },
  {
    question: 'How does advice suitability documentation work?',
    answer: 'Comply Vault extracts key information from client meetings including client circumstances, objectives, risk tolerance, and recommendations made. The system structures this into a suitability assessment format with evidence links. Your compliance team can review and finalize these records, ensuring they demonstrate that advice was suitable for the client\'s circumstances and objectives.',
  },
  {
    question: 'Can we edit file notes before approval?',
    answer: 'Yes. After the AI generates a draft file note, anyone in your workspace can review and edit it. You can add context, correct any extraction errors, or enhance suitability assessments. All edits are tracked in version history. Once satisfied, a supervisor or compliance officer finalizes the record, which locks it from further editing and creates the official audit trail.',
  },
  {
    question: 'How does supervision sign-off work?',
    answer: 'Comply Vault enforces role-based access control. Only users with supervisor or compliance officer roles can finalize a file note. When a record is finalized, the system logs who approved it and when. This creates a clear supervision boundary—draft work is separated from officially approved records. All finalization actions are recorded in the audit trail, demonstrating effective supervision processes.',
  },
  {
    question: 'What export formats are available?',
    answer: 'You can export individual files or a complete documentation pack. Available formats include: PDF (structured file note with all extracted items), CSV (evidence map linking claims to timestamps), CSV (version history showing all edits), TXT (full transcript with timestamps and speaker labels), and ZIP (bundle of all files). Each export includes metadata like who finalized the record and when.',
  },
  {
    question: 'Do you support UK meeting platforms?',
    answer: 'Yes. Comply Vault supports recordings from Zoom, Microsoft Teams, Google Meet, Webex, and any other platform that can export audio or video files. We accept MP3, MP4, WAV, and M4A formats up to 500MB. The system automatically transcribes with speaker separation, timestamps, and extracts compliance-relevant information for UK financial services firms.',
  },
  {
    question: 'How long does it take per meeting?',
    answer: 'Processing time depends on recording length, but most meetings are ready for review in 5-10 minutes. Transcription happens first (usually 1-2 minutes per hour of audio), then AI extraction takes another few minutes. Once the draft is ready, supervisor review typically takes 5-10 minutes depending on meeting complexity. Total time from upload to finalized file note is usually under 15 minutes.',
  },
  {
    question: 'What if the AI makes a mistake in extraction?',
    answer: 'AI extraction is not perfect, which is why we require human review before finalization. Every extracted item includes a link to the exact transcript moment where it was found, so you can verify accuracy. If the AI missed something or extracted incorrectly, you can edit the draft before finalizing. The evidence map ensures you can always trace back to the source recording.',
  },
  {
    question: 'Do you provide legal or compliance advice?',
    answer: 'No. Comply Vault is a documentation tool, not a compliance advisory service. We help you create structured, evidence-linked file notes with complete audit trails, but we do not make compliance determinations or provide legal advice. You and your compliance team are responsible for ensuring your documentation meets your firm\'s regulatory requirements. Always consult with your compliance counsel for specific regulatory questions.',
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
            Common questions about FCA compliance software and SYSC 9 supervision
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

export default function FCAComplianceSoftwarePage() {
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
              priceCurrency: 'GBP',
            },
            description: 'FCA compliance software for UK financial services firms. Generate file notes, supervision records, and advice suitability documentation with evidence linking and audit trails.',
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
              <span>FCA SYSC 9 Supervision & Monitoring</span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight mb-8 text-foreground">
              FCA Compliance Software for{' '}
              <span className="text-gradient">Supervision & File Notes</span>
            </h1>

            {/* Value Prop */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
              Upload meeting recordings, get AI-drafted file notes with evidence timestamps, 
              supervision workflows, and complete documentation packs. Turn every client interaction into 
              defensible file notes with full audit trails and evidence linking for FCA SYSC 9 compliance.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                href="#cta" 
                size="lg" 
                className="group"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                href="/sample-audit-pack" 
                variant="outline" 
                size="lg"
              >
                See Sample Export Pack
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
                <span>Supervision sign-off</span>
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
              Built for <span className="text-vault-green-500">UK Financial Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're an independent financial adviser or managing compliance for a larger firm
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Independent Financial Advisers',
                description: 'Handle your own file notes and supervision documentation efficiently',
              },
              {
                icon: Shield,
                title: 'Small Firms',
                description: 'Collaborate on draft file notes with clear supervision boundaries and approval workflows',
              },
              {
                icon: FileCheck,
                title: 'Compliance Officers',
                description: 'Review and approve client interaction records with full evidence traceability',
              },
              {
                icon: Scale,
                title: 'Outsourced Compliance',
                description: 'Manage multiple clients with centralized file notes and audit trails',
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
              From recording to supervision-ready file notes in 5 simple steps
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
                title: 'Draft File Note',
                description: 'AI extracts client circumstances, objectives, risk tolerance, recommendations made, advice suitability considerations, and follow-up actions into a structured file note.',
              },
              {
                number: '04',
                icon: Link2,
                title: 'Evidence Mapping',
                description: 'Every claim in the file note links to the exact timestamp and transcript snippet where it occurred. Full traceability from note to recording.',
              },
              {
                number: '05',
                icon: CheckCircle2,
                title: 'Supervision Review/Approve + Export',
                description: 'Review and edit the draft, then finalize with supervisor approval. Export complete documentation pack with PDF file note, CSV evidence map, version history, and transcript.',
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
              Complete <span className="text-vault-coral-500">Documentation</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything needed for FCA supervision and monitoring requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Link2,
                title: 'Evidence Map',
                description: 'CSV file linking every claim in your file note to exact timestamps and transcript snippets',
              },
              {
                icon: History,
                title: 'Version History',
                description: 'Complete audit trail of all edits made to the record, including who made changes and when',
              },
              {
                icon: CheckCircle2,
                title: 'Supervisor Sign-Off',
                description: 'Supervision approval metadata showing who finalized the record and when it was approved',
              },
              {
                icon: Download,
                title: 'Export Formats',
                description: 'PDF structured file note, CSV evidence map, CSV version history, TXT transcript, or ZIP bundle of all files',
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

        {/* Why It Matters for FCA Compliance */}
        <section className="py-20 lg:py-28 bg-muted/30 dark:bg-white/[0.02] rounded-3xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
                Why It Matters for <span className="text-gradient">FCA Compliance</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                FCA supervision focuses on defensibility, accuracy, and effective monitoring
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Accuracy & Contemporaneous File Notes',
                  description: 'Records created within days of the meeting with timestamped evidence. No relying on memory weeks later.',
                  icon: Clock,
                },
                {
                  title: 'Provenance & Metadata',
                  description: 'Complete audit trail showing who created, edited, and finalized each file note. File hashes prove document integrity.',
                  icon: Database,
                },
                {
                  title: 'Supervision Sign-Off',
                  description: 'Clear compliance boundary with supervisor-only finalization. FCA can see that records were reviewed and approved by qualified personnel.',
                  icon: Shield,
                },
                {
                  title: 'Evidence Traceability',
                  description: 'Every claim in your file note links back to the exact moment in the recording where it occurred. No unsupported assertions.',
                  icon: Link2,
                },
                {
                  title: 'Advice Suitability Documentation',
                  description: 'Structured records demonstrating that advice was suitable for client circumstances, objectives, and risk tolerance.',
                  icon: FileCheck,
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
                <strong className="text-foreground">Important:</strong> Comply Vault helps you create structured file notes and supervision records that support your FCA SYSC 9 obligations. 
                However, we do not make compliance determinations or provide legal advice. 
                You and your compliance team are responsible for ensuring your documentation meets your firm's regulatory requirements. 
                Always consult with your compliance counsel for specific regulatory questions. 
                Learn more <Link href="/about" className="text-vault-green-500 hover:text-vault-green-600 underline">about our company</Link> and <Link href="/contact" className="text-vault-green-500 hover:text-vault-green-600 underline">contact us</Link>.
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
              >
                Book a Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                href="/sample-audit-pack" 
                variant="outline" 
                size="lg"
              >
                See Sample Export Pack
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
