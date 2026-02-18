import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get the app URL based on environment
 * - Production: https://app.complyvault.co
 * - Staging: https://app-staging.complyvault.co
 * - Development: http://localhost:8888
 * 
 * Set NEXT_PUBLIC_APP_URL in Vercel environment variables for each environment:
 * - Production: NEXT_PUBLIC_APP_URL=https://app.complyvault.co
 * - Staging: NEXT_PUBLIC_APP_URL=https://app-staging.complyvault.co
 */
export function getAppUrl(): string {
  // Allow override via environment variable (set in Vercel for each environment)
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL
  }
  
  // Fallback: In production, use the app subdomain
  if (process.env.NODE_ENV === 'production') {
    return 'https://app.complyvault.co'
  }
  
  // In development, default to localhost:8888
  return 'http://localhost:8888'
}

/**
 * Get the demo booking link for the marketing site
 * Links to #cta section (DemoForm) on homepage
 */
export function getDemoLink(market: 'us' | 'uk' = 'us'): string {
  return market === 'uk' ? '/uk#cta' : '/#cta'
}
