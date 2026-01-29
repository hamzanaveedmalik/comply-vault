'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

interface PricingDisplayProps {
  serverCountry: 'GB' | null
  plan: 'solo' | 'team'
  currency: 'gbp' | 'usd'
  onCurrencyChange: (currency: 'gbp' | 'usd') => void
}

export function PricingDisplay({ serverCountry, plan, currency, onCurrencyChange }: PricingDisplayProps) {
  const [isDetecting, setIsDetecting] = useState(true)

  useEffect(() => {
    // If server detected GB, use GBP immediately
    if (serverCountry === 'GB') {
      onCurrencyChange('gbp')
      setIsDetecting(false)
      return
    }

    // Otherwise, try client-side detection via our API route
    fetch('/api/geolocation')
      .then(response => response.json())
      .then(data => {
        console.log('Client-side detection:', {
          country: data.country_code,
          countryName: data.country_name,
        })
        
        if (data.country_code === 'GB') {
          onCurrencyChange('gbp')
        } else {
          onCurrencyChange('usd')
        }
        setIsDetecting(false)
      })
      .catch(err => {
        console.log('Client-side detection failed:', err)
        onCurrencyChange('usd')
        setIsDetecting(false)
      })
  }, [serverCountry, onCurrencyChange])

  const prices = {
    solo: { gbp: '£129', usd: '$149' },
    team: { gbp: '£299', usd: '$349' },
  }

  // Stripe payment links - these redirect to app after successful payment
  const STRIPE_LINKS = {
    solo: {
      gbp: 'https://buy.stripe.com/9B628t3XadhM3lt2Vv9R601', // £129/month
      usd: 'https://buy.stripe.com/aFa28tbpC91waNV0Nn9R600' // $149/month
    },
    team: {
      gbp: 'https://buy.stripe.com/14AeVf51eelQ09hbs19R603', // £299/month
      usd: 'https://buy.stripe.com/14A7sNeBOdhM2hp67H9R602' // $349/month
    },
  }

  const stripeLink = STRIPE_LINKS[plan][currency]
  const price = prices[plan][currency]
  const buttonText = plan === 'solo' ? 'Start Solo' : 'Start Team'

  // Show loading state during detection to avoid hydration mismatch
  if (isDetecting) {
    return (
      <>
        <div className="flex items-end gap-2 mb-1">
          <span className="text-4xl font-bold" data-price={plan}>...</span>
          <span className="text-muted-foreground mb-1">/month</span>
        </div>
        <p className="text-sm text-muted-foreground mb-6">Monthly billing</p>
        <div className="w-full bg-primary/50 text-primary-foreground font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 mb-8">
          Loading...
        </div>
      </>
    )
  }

  return (
    <>
      <div className="flex items-end gap-2 mb-1">
        <span className="text-4xl font-bold" data-price={plan}>{price}</span>
        <span className="text-muted-foreground mb-1">/month</span>
      </div>
      <p className="text-sm text-muted-foreground mb-6">Monthly billing</p>
      <a 
        href={stripeLink}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 mb-8 transition-colors"
        data-link={plan}
      >
        {buttonText}
        <ArrowRight className="w-4 h-4" />
      </a>
    </>
  )
}
