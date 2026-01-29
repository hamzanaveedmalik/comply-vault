import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get the app URL based on environment
 * - Production: https://app.complyvault.co
 * - Development: http://localhost:8888 (or NEXT_PUBLIC_APP_URL env var)
 */
export function getAppUrl(): string {
  // Allow override via environment variable
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL
  }
  
  // In production, use the app subdomain
  if (process.env.NODE_ENV === 'production') {
    return 'https://app.complyvault.co'
  }
  
  // In development, default to localhost:8888
  return 'http://localhost:8888'
}
