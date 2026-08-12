'use client'

import { FileCheck, Lock, Shield, Users } from 'lucide-react'
import { DemoForm } from './DemoForm'

const benefits = [
  { icon: Lock, text: 'Immutable seal layer' },
  { icon: FileCheck, text: 'Seven-file sealed audit packs' },
  { icon: Users, text: 'Advisor, CM, and CCO review gates' },
  { icon: Shield, text: 'Books-and-records evidence posture' },
]

export function CTA() {
  return (
    <section id="cta" className="bg-grey px-4 pb-8 pt-20 sm:px-6 lg:px-10 lg:pt-28">
      <div className="mx-auto max-w-marketing overflow-hidden rounded-marketing-lg bg-cta px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
              Next step
            </p>
            <h2 className="font-editorial mt-5 text-display-cta font-normal">
              See the audit pack your exam would request.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/80">
              Share how your firm handles meeting evidence today. We will reply
              with a focused walkthrough of the seal layer and review lifecycle.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <div key={benefit.text} className="flex items-center gap-3 text-white/85">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10">
                      <Icon className="h-5 w-5 text-white" aria-hidden />
                    </span>
                    <span className="text-sm">{benefit.text}</span>
                  </div>
                )
              })}
            </div>

            <p className="mt-8 flex items-center gap-2 text-sm text-white/60">
              <Shield className="h-4 w-4" aria-hidden />
              AES-256 encryption · SOC 2 not started · US-based storage
            </p>
          </div>

          <div>
            <DemoForm />
          </div>
        </div>
      </div>
    </section>
  )
}
