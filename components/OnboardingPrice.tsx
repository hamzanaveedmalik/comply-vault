'use client'

import { useEffect, useState } from 'react'

interface OnboardingPriceProps {
  serverCountry: 'GB' | null
}

export function OnboardingPrice({ serverCountry }: OnboardingPriceProps) {
  const [price, setPrice] = useState('$499')
  const [isDetecting, setIsDetecting] = useState(true)

  useEffect(() => {
    // If server detected GB, use GBP immediately
    if (serverCountry === 'GB') {
      setPrice('£450')
      setIsDetecting(false)
      return
    }

    // Otherwise, try client-side detection via our API route
    fetch('/api/geolocation')
      .then(response => response.json())
      .then(data => {
        if (data.country_code === 'GB') {
          setPrice('£450')
        } else {
          setPrice('$499')
        }
        setIsDetecting(false)
      })
      .catch(() => {
        setPrice('$499')
        setIsDetecting(false)
      })
  }, [serverCountry])

  if (isDetecting) {
    return <span>...</span>
  }

  return <span>{price}</span>
}
