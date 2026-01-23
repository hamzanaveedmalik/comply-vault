import type { Metadata } from 'next'
import { Navigation, Footer } from '@/components'
import { Button } from '@/components/Button'
import { 
  ArrowRight, 
  FileText, 
  Download,
  FileCheck,
  Link2,
  History,
  Clock,
  Shield
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sample Audit Pack | Comply Vault',
  description: 'See a real example of Comply Vault\'s SEC exam-ready audit pack including structured compliance notes, evidence maps, version history, and full transcripts.',
  keywords: ['audit pack example', 'compliance documentation sample', 'RIA audit trail', 'SEC exam documentation'],
  authors: [{ name: 'Comply Vault' }],
  alternates: {
    canonical: 'https://www.complyvault.co/sample-audit-pack',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function SampleAuditPackPage() {
  return (
    <main className="relative">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] pt-28 pb-20 overflow-hidden noise-texture">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-vault-green-500/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-8 border border-primary/20">
              <FileCheck className="w-4 h-4" />
              <span>Redacted Example</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight mb-8 text-foreground">
              Sample <span className="text-gradient">Audit Pack</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
              See exactly what you get with Comply Vault: structured compliance notes with evidence linking, 
              version history, reviewer sign-off, and complete audit trails. This is a redacted example 
              of a real client interaction record.
            </p>

            <Button href="/ria-compliance-software" variant="outline" size="lg">
              Learn More About RIA Compliance Software
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* What's Included Section */}
        <section className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              What's Included in an <span className="text-vault-green-500">Audit Pack</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each audit pack contains everything an SEC examiner expects to see
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: FileText,
                title: 'Structured Compliance Note (PDF)',
                description: 'Organized sections for topics discussed, recommendations made, disclosures provided, client decisions, and follow-up actions',
                included: ['Client & meeting details', 'Topics discussed', 'Recommendations', 'Disclosures', 'Decisions', 'Follow-ups'],
              },
              {
                icon: Link2,
                title: 'Evidence Map (CSV)',
                description: 'Links every claim in the compliance note to exact timestamps and transcript snippets',
                included: ['Claim text', 'Timestamp', 'Speaker', 'Transcript snippet', 'Confidence score'],
              },
              {
                icon: History,
                title: 'Version History (CSV)',
                description: 'Complete audit trail of all edits made before finalization',
                included: ['Edit timestamp', 'User', 'Field changed', 'Old value', 'New value', 'Action type'],
              },
              {
                icon: FileCheck,
                title: 'Full Transcript (TXT)',
                description: 'Complete meeting transcript with timestamps and speaker labels',
                included: ['Speaker labels', 'Timestamps', 'Full conversation', 'File metadata'],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card dark:bg-[hsl(160_35%_10%)] rounded-2xl p-6 border border-border dark:border-white/10"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-vault-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-vault-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {item.included.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-vault-green-500 rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sample Document Section */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto bg-card dark:bg-[hsl(160_35%_10%)] rounded-3xl p-12 border border-border dark:border-white/10">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-vault-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Download className="w-10 h-10 text-vault-green-500" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground mb-4">
                Download Sample Audit Pack
              </h2>
              <p className="text-muted-foreground mb-8">
                This is a redacted example showing the structure and format of a complete audit pack. 
                All client information and specific details have been removed for privacy.
              </p>
              
              {/* TODO: Add actual link to sample PDF when available */}
              <div className="inline-block">
                <div className="px-8 py-4 bg-muted dark:bg-white/5 rounded-xl border border-border dark:border-white/10 text-muted-foreground">
                  <p className="text-sm font-medium mb-2">Sample Audit Pack Coming Soon</p>
                  <p className="text-xs">We're preparing a comprehensive redacted example for you to review</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-muted/50 dark:bg-white/5 rounded-xl">
                <Clock className="w-6 h-6 text-vault-green-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">45 min meeting</p>
                <p className="text-xs text-muted-foreground">Typical portfolio review</p>
              </div>
              <div className="text-center p-4 bg-muted/50 dark:bg-white/5 rounded-xl">
                <Link2 className="w-6 h-6 text-vault-green-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">23 evidence links</p>
                <p className="text-xs text-muted-foreground">Every claim timestamped</p>
              </div>
              <div className="text-center p-4 bg-muted/50 dark:bg-white/5 rounded-xl">
                <Shield className="w-6 h-6 text-vault-green-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">CCO approved</p>
                <p className="text-xs text-muted-foreground">Complete audit trail</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-vault-green-500/10 to-vault-coral-500/10 dark:from-vault-green-500/20 dark:to-vault-coral-500/20 rounded-3xl p-12 border border-vault-green-500/20">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-6">
              Ready to Create Your Own Audit Packs?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a demo and we'll show you how to turn your meeting recordings into exam-ready documentation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/#cta" 
                size="lg" 
                className="group"
                eventName="book_demo_click"
                eventParams={{ location: 'sample_audit_pack_page' }}
              >
                Book a Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button href="/ria-compliance-software" variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
