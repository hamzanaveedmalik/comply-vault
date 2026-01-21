'use client'

import { Mic, Clock, FileCheck, Link2 } from 'lucide-react'

const benefits = [
  {
    icon: Mic,
    title: 'AI Transcription',
    description: 'Upload your meeting recording from any platform and get a complete, speaker-diarized transcript in minutes.',
  },
  {
    icon: Clock,
    title: 'Under 10 Minutes',
    description: 'Review AI-extracted key points, edit if needed, and finalize. Fast, accurate documentation.',
  },
  {
    icon: FileCheck,
    title: 'Structured Output',
    description: 'Every meeting produces the same professional format. Consistent across your entire team.',
  },
  {
    icon: Link2,
    title: 'Evidence Linking',
    description: 'Every claim in your notes links back to the exact transcript moment. Audit-ready by default.',
  },
]

export function PainPoints() {
  return (
    <section className="py-28 lg:py-36 bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-transparent relative noise-texture">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
            From Meeting to{' '}
            <span className="text-vault-green-600 dark:text-vault-green-400">Audit Pack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Client meeting documentation shouldn't take longer than the meeting itself. 
            Let AI do the heavy lifting.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-card dark:bg-[hsl(160_35%_10%)] rounded-2xl p-8 border border-border dark:border-white/10 hover:border-vault-green-500/40 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-vault-green-500/10 dark:bg-vault-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-vault-green-500/20 dark:group-hover:bg-vault-green-500/30 transition-colors">
                <benefit.icon className="w-7 h-7 text-vault-green-600 dark:text-vault-green-400" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
