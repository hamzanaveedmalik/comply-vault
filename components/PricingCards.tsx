'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { PricingDisplay } from './PricingDisplay'
import { getDemoLink } from '@/lib/utils'
import { usPlanFeatures } from '@/src/content/us/planFeatures'
import { ukPlanFeatures } from '@/src/content/uk/planFeatures'

interface PricingCardsProps {
  defaultCurrency?: 'gbp' | 'usd'
  market?: 'us' | 'uk'
}

export function PricingCards({ defaultCurrency = 'usd', market = 'us' }: PricingCardsProps) {
  const [currency, setCurrency] = useState<'gbp' | 'usd'>(defaultCurrency)
  const [isDetecting, setIsDetecting] = useState(false)
  
  const planFeatures = market === 'uk' ? ukPlanFeatures : usPlanFeatures
  const demoLink = getDemoLink(market)

  useEffect(() => {
    setCurrency(defaultCurrency)
    setIsDetecting(false)
  }, [defaultCurrency])

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
      <div className="bg-card shadow-xl border border-border rounded-3xl overflow-hidden">
        <div className="p-6 sm:p-10">
          {/* Primary CTA - Book a Demo */}
          <div className="text-center mb-8">
            <Link
              href={demoLink}
              className="inline-flex items-center gap-2 bg-vault-green-500 hover:bg-vault-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg shadow-lg"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Essentials Plan */}
            <div className="border border-border rounded-2xl p-8 hover:border-vault-green-500/50 transition-colors">
              <h3 className="text-2xl font-bold mb-2">Essentials</h3>
              <p className="text-muted-foreground mb-6">{planFeatures.essentialsDescription}</p>
              
              <PricingDisplay 
                plan="essentials" 
                currency={currency}
                market={market}
                isDetecting={isDetecting}
              />
              
              <div className="space-y-4">
                {planFeatures.essentials.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-vault-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Plan */}
            <div className="border border-primary bg-primary/5 rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-sm font-medium py-1 px-4 rounded-full">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <p className="text-muted-foreground mb-6">{planFeatures.professionalDescription}</p>
              
              <PricingDisplay 
                plan="professional" 
                currency={currency}
                market={market}
                isDetecting={isDetecting}
              />
              
              <div className="space-y-4">
                {planFeatures.professional.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-vault-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="border border-border rounded-2xl p-8 hover:border-vault-green-500/50 transition-colors">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-muted-foreground mb-6">{planFeatures.enterpriseDescription}</p>
              
              <PricingDisplay 
                plan="enterprise" 
                currency={currency}
                market={market}
                isDetecting={isDetecting}
              />
              
              <div className="space-y-4">
                {planFeatures.enterprise.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-vault-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Implementation note */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            Implementation available from $2,500. Waived with 6-month or annual commitment.
          </p>
        </div>
      </div>
    </div>
  )
}
