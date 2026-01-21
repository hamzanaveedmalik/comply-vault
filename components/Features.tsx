'use client'

import { 
  Mic, 
  Brain, 
  Link2, 
  Edit3, 
  UserCheck, 
  History,
  ArrowRight 
} from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Smart Transcription',
    description: 'Upload Zoom recordings (MP3, MP4, WAV, M4A) and get speaker-diarized transcripts with precise timestamps.',
    color: 'green',
  },
  {
    icon: Brain,
    title: 'AI Extraction',
    description: 'Automatically identify topics discussed, recommendations made, disclosures, decisions, and follow-up items.',
    color: 'coral',
  },
  {
    icon: Link2,
    title: 'Evidence Linking',
    description: 'Every extracted claim links to the exact transcript moment with timestamp and snippet. Click to verify.',
    color: 'green',
  },
  {
    icon: Edit3,
    title: 'Review Workflow',
    description: 'Edit extracted fields before finalizing. Add context, correct errors, and ensure accuracy with your review.',
    color: 'coral',
  },
  {
    icon: UserCheck,
    title: 'CCO-Only Finalization',
    description: 'Role-gated workflow ensures only CCO/Owner can finalize records. Members can upload and edit drafts.',
    color: 'green',
  },
  {
    icon: History,
    title: 'Complete Audit Trail',
    description: 'Every action logged: who uploaded, who edited what, who finalized, when. Full version history included.',
    color: 'coral',
  },
]

export function Features() {
  return (
    <section id="features" className="py-28 lg:py-36 dark:section-dark-deeper relative overflow-hidden noise-texture section-divider-top">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-30" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-vault-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-vault-coral-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-sm font-medium mb-8 border border-primary/20">
            <Brain className="w-4 h-4" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
            What Comply Vault{' '}
            <span className="text-gradient">Actually Does</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Upload meeting recordings, get structured documentation with evidence linking. 
            Review, finalize, and export.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card dark:bg-[hsl(160_35%_10%)] rounded-2xl p-8 lg:p-10 border border-border dark:border-white/10 shadow-sm hover:shadow-xl dark:hover:shadow-black/20 hover:border-primary/30 transition-all duration-300 card-hover"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 ${
                feature.color === 'green' 
                  ? 'bg-vault-green-100 dark:bg-vault-green-800/30 group-hover:bg-vault-green-500' 
                  : 'bg-vault-coral-100 dark:bg-vault-coral-800/30 group-hover:bg-vault-coral-500'
              }`}>
                <feature.icon className={`w-8 h-8 transition-colors duration-300 ${
                  feature.color === 'green'
                    ? 'text-vault-green-500 dark:text-vault-green-400 group-hover:text-white'
                    : 'text-vault-coral-500 dark:text-vault-coral-400 group-hover:text-white'
                }`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Note about what this ISN'T */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            <strong>Note:</strong> Comply Vault helps you create exam-ready documentation. 
            It does not make compliance determinations or guarantee SEC compliance. 
            Always consult with your CCO.
          </p>
        </div>
      </div>
    </section>
  )
}
