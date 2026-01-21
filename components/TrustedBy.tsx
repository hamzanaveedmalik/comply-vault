'use client'

const companies = [
  { name: 'Bridgewater Wealth', initials: 'BW' },
  { name: 'Summit Financial', initials: 'SF' },
  { name: 'Alpine Advisors', initials: 'AA' },
  { name: 'Horizon Partners', initials: 'HP' },
  { name: 'Oakwood Capital', initials: 'OC' },
  { name: 'Sterling Wealth', initials: 'SW' },
]

export function TrustedBy() {
  return (
    <section className="py-20 bg-card dark:section-dark-deeper border-y border-border section-divider-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-10">
          Trusted by 200+ RIA firms managing over $50B in assets
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16">
          {companies.map((company) => (
            <div
              key={company.name}
              className="group flex items-center gap-3 opacity-50 hover:opacity-100 transition-all duration-300"
            >
              <div className="w-11 h-11 bg-muted dark:bg-white/5 rounded-lg flex items-center justify-center text-sm font-bold text-muted-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors border border-transparent dark:border-white/5 group-hover:border-primary/30">
                {company.initials}
              </div>
              <span className="text-muted-foreground font-medium hidden sm:block group-hover:text-foreground transition-colors">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
