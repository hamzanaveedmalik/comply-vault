'use client'

import { useState, useEffect } from 'react'
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react'
import { PricingDisplay } from './PricingDisplay'
import { getAppUrl } from '@/lib/utils'
import { usPlanFeatures } from '@/src/content/us/planFeatures'
import { ukPlanFeatures } from '@/src/content/uk/planFeatures'

interface PricingCardsProps {
  defaultCurrency?: 'gbp' | 'usd'
  market?: 'us' | 'uk'
}

export function PricingCards({ defaultCurrency = 'usd', market = 'us' }: PricingCardsProps) {
  const [currency, setCurrency] = useState<'gbp' | 'usd'>(defaultCurrency)
  const [isDetecting, setIsDetecting] = useState(false)
  
  // Determine plan features based on market
  const planFeatures = market === 'uk' ? ukPlanFeatures : usPlanFeatures

  // Currency is now route-based, no need for detection
  useEffect(() => {
    setCurrency(defaultCurrency)
    setIsDetecting(false)
  }, [defaultCurrency])

  // Get currency param for URLs
  const currencyParam = currency.toUpperCase() as 'GBP' | 'USD'
  const appUrl = getAppUrl()
  const trialLink = `${appUrl}/auth/signup?intent=trial&currency=${currencyParam}`

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
      <div className="bg-card shadow-xl border border-border rounded-3xl overflow-hidden">
        <div className="p-6 sm:p-10">
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
              <p className="text-muted-foreground mb-6">{planFeatures.soloDescription}</p>
              
              <PricingDisplay 
                plan="solo" 
                currency={currency}
                isDetecting={isDetecting}
              />
              
              <div className="space-y-4">
                {planFeatures.solo.map((feature, index) => (
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
              <p className="text-muted-foreground mb-6">{planFeatures.teamDescription}</p>
              
              <PricingDisplay 
                plan="team" 
                currency={currency}
                isDetecting={isDetecting}
              />
              
              <div className="space-y-4">
                {planFeatures.team.map((feature, index) => (
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
