'use client'

interface OnboardingPriceProps {
  defaultCurrency?: 'gbp' | 'usd'
}

export function OnboardingPrice({ defaultCurrency = 'usd' }: OnboardingPriceProps) {
  const price = defaultCurrency === 'gbp' ? '£450' : '$499'
  return <span>{price}</span>
}
