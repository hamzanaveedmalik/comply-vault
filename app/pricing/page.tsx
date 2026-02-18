import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Navigation, Footer, PricingCards } from '@/components'
import { usPricingContent } from '@/src/content/us/pricing'

export const metadata: Metadata = {
  title: 'Pricing | Comply Vault - RIA Compliance Software',
  description: 'Flexible plans for RIA firms of every size. Essentials, Professional, and Enterprise tiers. No hidden fees.',
  alternates: {
    canonical: 'https://www.complyvault.co/pricing',
    languages: {
      'en-US': 'https://www.complyvault.co/pricing',
      'en-GB': 'https://www.complyvault.co/uk/pricing',
      'x-default': 'https://www.complyvault.co/pricing',
    },
  },
}

export default async function PricingPage() {
  const content = usPricingContent

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-vault-green-900 via-vault-green-800 to-vault-green-900 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mb-6">
              {content.hero.title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {content.hero.description}
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <PricingCards defaultCurrency="usd" market="us" />

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {content.faqs.map((faq, index) => (
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
                <h2 className="text-2xl font-bold mb-2">{content.enterprise.title}</h2>
                <p className="text-muted-foreground mb-4 md:mb-0">
                  {content.enterprise.description}
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
      </main>

      <Footer />
    </>
  )
}