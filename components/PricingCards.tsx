'use client'

import { useState, useEffect } from 'react'
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react'
import { PricingDisplay } from './PricingDisplay'
import { getAppUrl } from '@/lib/utils'

const PLAN_FEATURES = {
  solo: [
    { name: 'Single-user access', included: true },
    { name: 'Meeting uploads: 10 per month', included: true },
    { name: 'Evidence-linked notes', included: true },
    { name: 'SEC-ready documentation', included: true },
    { name: 'Export: PDF + CSV', included: true },
    { name: 'Email support', included: true },
    { name: 'API access', included: false },
    { name: 'Team roles & permissions', included: false },
    { name: 'Custom retention policies', included: false },
    { name: 'Dedicated account manager', included: false },
  ],
  team: [
    { name: 'Up to 10 users', included: true },
    { name: 'Meeting uploads: 50 per month', included: true },
    { name: 'Evidence-linked notes', included: true },
    { name: 'SEC-ready documentation', included: true },
    { name: 'Export: PDF + CSV + ZIP bundles', included: true },
    { name: 'Priority support', included: true },
    { name: 'API access', included: true },
    { name: 'Team roles & permissions', included: true },
    { name: 'Custom retention policies', included: true },
    { name: 'Dedicated account manager', included: true },
  ],
}

interface PricingCardsProps {
  serverCountry: 'GB' | null
}

export function PricingCards({ serverCountry }: PricingCardsProps) {
  const [currency, setCurrency] = useState<'gbp' | 'usd'>(() => {
    // Initialize currency based on server detection
    return serverCountry === 'GB' ? 'gbp' : 'usd'
  })

  // Update currency if server detection changes (shouldn't happen, but for consistency)
  useEffect(() => {
    if (serverCountry === 'GB') {
      setCurrency('gbp')
    }
  }, [serverCountry])

  // Get currency param for URLs
  const currencyParam = currency.toUpperCase() as 'GBP' | 'USD'
  const appUrl = getAppUrl()
  const trialLink = `${appUrl}/auth/signup?intent=trial&currency=${currencyParam}`

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
      <div className="bg-card shadow-xl border border-border rounded-3xl overflow-hidden">
        <div className="p-6 sm:p-10">
          {/* Currency Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-muted p-1 rounded-lg">
              <button
                onClick={() => setCurrency('usd')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currency === 'usd'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                USD
              </button>
              <button
                onClick={() => setCurrency('gbp')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currency === 'gbp'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                GBP
              </button>
            </div>
          </div>

          {/* Primary CTA - Start Free Trial */}
          <div className="text-center mb-8">
            <a
              href={trialLink}
              className="inline-flex items-center gap-2 bg-vault-green-500 hover:bg-vault-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg shadow-lg"
            >
              Start Free Trial (7 days)
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-muted-foreground mt-3">
              3 meeting uploads • Watermarked exports • No credit card required
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Solo Plan */}
            <div className="border border-border rounded-2xl p-8 hover:border-vault-green-500/50 transition-colors">
              <h3 className="text-2xl font-bold mb-2">Solo</h3>
              <p className="text-muted-foreground mb-6">Perfect for individual RIAs</p>
              
              <PricingDisplay 
                serverCountry={serverCountry} 
                plan="solo" 
                currency={currency}
                onCurrencyChange={setCurrency}
              />
              
              <div className="space-y-4">
                {PLAN_FEATURES.solo.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {feature.included ? (
                      <CheckCircle2 className="w-5 h-5 text-vault-green-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Plan */}
            <div className="border border-primary bg-primary/5 rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-sm font-medium py-1 px-4 rounded-full">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Team</h3>
              <p className="text-muted-foreground mb-6">For growing RIA practices</p>
              
              <PricingDisplay 
                serverCountry={serverCountry} 
                plan="team" 
                currency={currency}
                onCurrencyChange={setCurrency}
              />
              
              <div className="space-y-4">
                {PLAN_FEATURES.team.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {feature.included ? (
                      <CheckCircle2 className="w-5 h-5 text-vault-green-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
