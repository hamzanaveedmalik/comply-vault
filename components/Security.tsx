import { CheckCircle2, Clock, Lock, Server, Shield } from 'lucide-react'
import {
  MarketingContainer,
  MarketingSection,
  SectionKicker,
} from './marketing'

const implemented = [
  { name: 'AES-256 encryption', description: 'At rest and in transit' },
  { name: 'Role-based access', description: 'Advisor, CM, and CCO gates' },
  { name: 'Audit trail', description: 'Append-only action history' },
  { name: 'Workspace isolation', description: 'Strict tenant separation' },
  { name: 'WORM retention', description: 'Object Lock seal layer shipped' },
  { name: 'SOC 2', description: 'Not started' },
]

const features = [
  {
    icon: Lock,
    title: 'Encryption everywhere',
    description: 'TLS in transit and AES-256 at rest for recordings, packs, and correspondence.',
  },
  {
    icon: Shield,
    title: 'Role-gated supervision',
    description: 'Advisor certification, compliance manager review, and CCO sign-off are separate roles.',
  },
  {
    icon: Server,
    title: 'Workspace isolation',
    description: 'Each firm workspace is isolated. Cross-tenant access is not possible.',
  },
]

export function Security() {
  return (
    <MarketingSection tone="ink" id="security">
      <MarketingContainer>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionKicker onInk>Trust</SectionKicker>
            <h2 className="font-editorial mt-5 text-display-section font-normal">
              Built for sensitive meeting evidence.
            </h2>
            <p className="mt-7 text-lg leading-8 text-white/55">
              Client recordings and correspondence stay inside a sealed evidence
              posture with human review gates.
            </p>

            <div className="mt-10 space-y-8">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className="flex items-start gap-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5">
                      <Icon className="h-5 w-5 text-primary" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-editorial text-2xl font-normal tracking-[-0.02em]">
                        {feature.title}
                      </h3>
                      <p className="mt-2 leading-7 text-white/52">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="rounded-marketing border border-white/12 bg-white/[0.04] p-8 sm:p-10">
            <h3 className="flex items-center gap-3 text-lg font-medium text-white">
              <Shield className="h-5 w-5 text-primary" aria-hidden />
              Security status
            </h3>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {implemented.map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="mb-2 flex items-center gap-2">
                    {item.name === 'SOC 2' ? (
                      <Clock className="h-4 w-4 text-white/45" aria-hidden />
                    ) : (
                      <CheckCircle2 className="h-4 w-4 text-positive-soft" aria-hidden />
                    )}
                    <span className="text-sm font-medium text-white">{item.name}</span>
                  </div>
                  <p className="text-xs text-white/45">{item.description}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-6 text-white/55">
              SOC 2 status: Not started. Download the ungated security overview
              from the trust page when available, or request a walkthrough of
              current controls.
            </p>
            <a
              href="/trust"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
            >
              Security documentation
              <Shield className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </MarketingContainer>
    </MarketingSection>
  )
}
