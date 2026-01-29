import { Metadata } from 'next'
import { headers } from 'next/headers'
import { CreditCard, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Navigation, Footer, PricingCards, OnboardingPrice } from '@/components'

export const metadata: Metadata = {
  title: 'Simple, Transparent Pricing | Comply Vault',
  description: 'Choose the plan that fits your RIA firm. Solo for individual advisors and Team plans for growing practices.',
  alternates: {
    canonical: 'https://www.complyvault.co/pricing',
  },
}

// Detect user's country from headers
async function getUserCountry(): Promise<'GB' | null> {
  const headersList = await headers()
  // Vercel provides country via x-vercel-ip-country header
  // Also check Cloudflare's header and other common headers
  const country = headersList.get('x-vercel-ip-country') || 
                  headersList.get('cf-ipcountry') || 
                  headersList.get('x-country-code') ||
                  headersList.get('cloudfront-viewer-country') ||
                  null
  
  // Log all available headers for debugging
  console.log('Available headers:', {
    'x-vercel-ip-country': headersList.get('x-vercel-ip-country'),
    'cf-ipcountry': headersList.get('cf-ipcountry'),
    'x-country-code': headersList.get('x-country-code'),
    'cloudfront-viewer-country': headersList.get('cloudfront-viewer-country'),
    'x-forwarded-for': headersList.get('x-forwarded-for'),
  })
  
  // Only return GB for UK, everything else defaults to USD
  if (country === 'GB') return 'GB'
  return null
}

export default async function PricingPage() {
  const userCountry = await getUserCountry()
  
  // Log country detection for debugging
  console.log('Server Detected country:', userCountry || 'Not detected (will use client-side detection)')

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-vault-green-900 via-vault-green-800 to-vault-green-900 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mb-6">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Choose the plan that fits your RIA firm. No hidden fees or long-term commitments.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <PricingCards serverCountry={userCountry} />
        
        {/* Optional Onboarding Note */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Optional onboarding: <OnboardingPrice serverCountry={userCountry} />
            <button id="onboarding-help" className="ml-2 text-xs px-2 py-0.5 bg-vault-green-500/10 hover:bg-vault-green-500/20 text-vault-green-500 rounded-full transition-colors">
              What's included?
            </button>
          </p>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: 'Do you offer a trial period?',
                answer: 'Yes! We offer a 7-day free trial with 3 meeting uploads. Exports during the trial are watermarked. No credit card required to start. Upgrading to Solo or Team unlocks full limits and removes the watermark.'
              },
              {
                question: 'What happens when I upgrade from the trial?',
                answer: 'Upgrading unlocks full plan limits (10 uploads/month for Solo, 50 uploads/month for Team) and removes the watermark from exports. You\'ll also get access to all plan features including team collaboration (Team plan), API access, and priority support.'
              },
              {
                question: 'What\'s included in the Team plan?',
                answer: 'The Team plan includes up to 10 users, 50 meeting uploads per month, ZIP bundle exports, API access, team roles & permissions, custom retention policies, and a dedicated account manager. Perfect for growing RIA practices.'
              },
              {
                question: 'What counts as a meeting upload?',
                answer: 'A meeting upload is a single audio or video recording of a client interaction, regardless of duration. Supported formats include MP3, MP4, WAV, and M4A files up to 500MB per recording.'
              },
              {
                question: 'Can I change plans later?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, the change takes effect immediately. When downgrading, the change will take effect at the end of your current billing period.'
              },
              {
                question: 'What\'s included in the optional onboarding?',
                answer: 'Optional onboarding (Standard or Premium) can be purchased during upgrade. It includes a personalized setup session with our compliance specialists, custom workspace configuration, team training, and priority support. Onboarding is completely optional—you can start using Comply Vault immediately without it.'
              },
            ].map((faq, index) => (
              <details 
                key={index}
                className="group bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-all duration-300"
              >
                <summary className="flex cursor-pointer items-center justify-between text-lg font-medium">
                  {faq.question}
                  <span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full border border-muted">
                    <svg className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground group-open:rotate-180 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="bg-muted py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8 bg-card p-8 rounded-2xl border border-border">
              <div className="md:w-7/12">
                <h2 className="text-2xl font-bold mb-2">Need a custom solution?</h2>
                <p className="text-muted-foreground mb-4 md:mb-0">
                  We offer enterprise plans for larger teams with custom requirements, including advanced compliance workflows, custom integrations, and volume discounts.
                </p>
              </div>
              <div className="md:w-5/12 flex justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
                >
                  Contact Sales
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="w-16 h-16 bg-vault-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <CreditCard className="w-8 h-8 text-vault-green-500" />
            </div>
            <h2 className="text-2xl font-bold mb-2">30-Day Money-Back Guarantee</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              If you're not completely satisfied with Comply Vault within the first 30 days, let us know and we'll refund your payment. No questions asked.
            </p>
          </div>
        </div>
      </main>

      {/* Onboarding help button handler */}
      <script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener('DOMContentLoaded', function() {
          const onboardingHelpButton = document.getElementById('onboarding-help');
          if (onboardingHelpButton) {
            onboardingHelpButton.onclick = function(e) {
              e.preventDefault();
              e.stopPropagation();
              // Find and scroll to the onboarding FAQ
              const faqItems = document.querySelectorAll('details');
              for (let i = 0; i < faqItems.length; i++) {
                if (faqItems[i].textContent.includes("What's included in the optional onboarding?")) {
                  faqItems[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
                  faqItems[i].setAttribute('open', 'true');
                  break;
                }
              }
            };
          }
        });
      `}} />

      <Footer />
    </>
  )
}