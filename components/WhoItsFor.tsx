import { CheckCircle2, XCircle, Building2, Users, FileCheck, Scale } from 'lucide-react'
import {
  MarketingContainer,
  MarketingSection,
  SectionKicker,
} from './marketing'

const bestFor = [
  {
    icon: Users,
    title: 'Solo RIAs and small teams',
    description: 'Firms that want a repeatable, exam-ready documentation workflow.',
  },
  {
    icon: Scale,
    title: 'SEC-registered or state-registered RIAs',
    description: 'Teams that run ongoing client review meetings.',
  },
  {
    icon: FileCheck,
    title: 'CCO-led supervision',
    description: 'Dedicated or part-time compliance function with a sign-off gate.',
  },
  {
    icon: Building2,
    title: 'Outsourced CCOs and compliance partners',
    description: 'Practices serving multiple RIA clients from one operating view.',
  },
]

const notIdealFor = [
  'Firms without advice conversations to document',
  'Teams without compliance or supervision needs',
  'Broker-dealers seeking FINRA workflows',
]

export function WhoItsFor() {
  return (
    <MarketingSection tone="bone" id="who-its-for">
      <MarketingContainer>
        <div className="text-center">
          <SectionKicker>Who it is for</SectionKicker>
          <h2 className="font-editorial mx-auto mt-5 max-w-3xl text-display-section font-normal">
            Is ComplyVault right for your firm?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-body-muted">
            Built for RIAs and the CCOs who supervise them, including solo practices
            and small teams.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-marketing-md border border-black/10 bg-white/55 p-8 sm:p-10">
            <div className="mb-8 flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="font-editorial text-3xl font-normal tracking-[-0.03em]">
                Best for
              </h3>
            </div>
            <div className="space-y-6">
              {bestFor.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/10 bg-white">
                      <Icon className="h-5 w-5 text-primary" aria-hidden />
                    </span>
                    <div>
                      <h4 className="font-medium text-ink-soft">{item.title}</h4>
                      <p className="mt-1 text-sm text-body-muted">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="rounded-marketing-md border border-black/10 bg-white/35 p-8 sm:p-10">
            <div className="mb-8 flex items-center gap-3">
              <XCircle className="h-6 w-6 text-black/35" aria-hidden />
              <h3 className="font-editorial text-3xl font-normal tracking-[-0.03em]">
                Not ideal for
              </h3>
            </div>
            <div className="space-y-5">
              {notIdealFor.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <XCircle className="h-5 w-5 shrink-0 text-black/30" aria-hidden />
                  <span className="text-body-muted">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 border-t border-black/10 pt-6 text-sm text-body-muted">
              Not sure? Book a demo and we will map your supervision workflow against
              what is shipped today.
            </p>
          </div>
        </div>
      </MarketingContainer>
    </MarketingSection>
  )
}
