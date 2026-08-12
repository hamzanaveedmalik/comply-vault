'use client'

import { ArrowRight, FileCheck, Lock, Shield, Users } from 'lucide-react'
import { Button } from './Button'
import {
  HeroHeadline,
  MarketingButton,
  ProductMockShell,
  StatusPill,
} from './marketing'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-grey px-4 pb-16 pt-28 sm:px-6 lg:px-10 lg:pb-24 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 marketing-grid opacity-50" />

      <div className="relative mx-auto max-w-marketing-wide">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
          <div>
            <StatusPill>Built for the CCO</StatusPill>

            <HeroHeadline
              mode="tint"
              lead="Route attention,"
              accent="not retention."
            />

            <p className="mt-9 max-w-xl text-lg leading-8 text-body-muted sm:text-xl">
              ComplyVault is an evidence layer for RIA compliance. It turns client
              meeting recordings into sealed audit packs your CCO can defend,
              sitting alongside the tools advisors already use.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/sample-audit-pack" size="lg" className="group h-14 rounded-xl shadow-none">
                See a sample audit pack
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <MarketingButton href="#cta" variant="outline" size="lg">
                Book a demo
              </MarketingButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-body-muted">
              <span className="inline-flex items-center gap-2">
                <Lock className="h-4 w-4 text-primary" aria-hidden />
                Immutable seal layer
              </span>
              <span className="inline-flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" aria-hidden />
                Three-layer human review
              </span>
              <span className="inline-flex items-center gap-2">
                <FileCheck className="h-4 w-4 text-primary" aria-hidden />
                Seven-file audit pack
              </span>
            </div>
          </div>

          <ProductMockShell
            title="Review queue"
            sidebar={
              <>
                <div className="mb-9 flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-primary/90">
                    <Shield className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="text-sm font-medium">ComplyVault</span>
                </div>
                <div className="space-y-2 text-xs text-white/50">
                  {['Review queue', 'Sealed packs', 'Disclosures', 'Email evidence', 'Ask'].map(
                    (item, index) => (
                      <div
                        key={item}
                        className={`rounded-lg px-3 py-2.5 ${
                          index === 0 ? 'bg-white/10 text-white' : ''
                        }`}
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
              </>
            }
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/40">
                  Awaiting CCO sign-off
                </p>
                <h2 className="font-editorial mt-2 text-3xl font-normal tracking-[-0.035em] sm:text-4xl">
                  Harrison annual review
                </h2>
                <p className="mt-2 text-sm text-black/45">
                  Advisor certified · CM reviewed
                </p>
              </div>
              <div className="rounded-full border border-black/10 bg-white/70 px-3 py-2 text-xs text-black/55">
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-positive-soft" />
                Seal ready
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ['Seal ID', 'rs_8f2c…'],
                ['Content digest', 'sha256…'],
                ['Lifecycle', 'CM_REVIEWED'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-black/10 bg-white/65 p-4"
                >
                  <p className="text-[10px] uppercase tracking-[0.16em] text-black/40">
                    {label}
                  </p>
                  <p className="font-editorial mt-3 text-2xl tracking-[-0.03em] sm:text-3xl">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-black/10 bg-white/70 p-5">
              <p className="text-sm font-medium">Supervision trail</p>
              <p className="mt-1 text-xs text-black/42">
                Advisor certification → compliance manager triage → CCO sign-off
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  ['ADVISOR_CERTIFIED', 'Complete'],
                  ['CM_REVIEWED', 'Complete'],
                  ['CCO_SIGNED_OFF', 'Next'],
                ].map(([label, value], index) => (
                  <div key={label} className="rounded-xl bg-[#efede8] p-4">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[10px] font-semibold">
                      0{index + 1}
                    </span>
                    <p className="mt-4 text-xs text-black/45">{label}</p>
                    <p className="mt-1 text-sm font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </ProductMockShell>
        </div>
      </div>
    </section>
  )
}
