'use client'

import { ArrowRight } from 'lucide-react'

interface PricingDisplayProps {
  plan: 'solo' | 'team'
  currency: 'gbp' | 'usd'
  isDetecting?: boolean
}

export function PricingDisplay({ plan, currency, isDetecting = false }: PricingDisplayProps) {

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
