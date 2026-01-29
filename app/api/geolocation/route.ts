import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Proxy the geolocation request to avoid CORS issues
    const response = await fetch('https://ipapi.co/json/', {
      headers: {
        'User-Agent': 'ComplyVault-Marketing/1.0',
      },
    })

    if (!response.ok) {
      throw new Error(`Geolocation API returned ${response.status}`)
    }

    const data = await response.json()
    
    // Return only the country code we need
    return NextResponse.json({
      country_code: data.country_code || null,
      country_name: data.country_name || null,
    })
  } catch (error) {
    console.error('Geolocation API error:', error)
    // Return null on error - components will handle fallback
    return NextResponse.json({
      country_code: null,
      country_name: null,
    })
  }
}
