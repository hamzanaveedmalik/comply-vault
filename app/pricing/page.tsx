import { Metadata } from 'next'
import { CheckCircle2, XCircle, HelpCircle, CreditCard, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Navigation, Footer } from '@/components'

export const metadata: Metadata = {
  title: 'Simple, Transparent Pricing | Comply Vault',
  description: 'Choose the plan that fits your RIA firm. Solo for individual advisors and Team plans for growing practices.',
  alternates: {
    canonical: 'https://www.complyvault.co/pricing',
  },
}

// Actual Stripe checkout links
const PAYMENT_LINKS = {
  solo: {
    gbp: 'https://buy.stripe.com/9B628t3XadhM3lt2Vv9R601', // £129/month
    usd: 'https://buy.stripe.com/aFa28tbpC91waNV0Nn9R600' // $149/month
  },
  team: {
    gbp: 'https://buy.stripe.com/14AeVf51eelQ09hbs19R603', // £299/month
    usd: 'https://buy.stripe.com/14A7sNeBOdhM2hp67H9R602' // $349/month
  },
  onboarding: {
    gbp: 'https://buy.stripe.com/28E28t2T67Xse0753D9R604', // £450
    usd: 'https://buy.stripe.com/8x2dRb9hu5Pk6xF9jT9R605' // $499
  }
}

const PLAN_FEATURES = {
  solo: [
    { name: 'Single-user access', included: true },
    { name: 'Upload limit: 10 recordings/month', included: true },
    { name: 'Evidence-linked notes', included: true },
    { name: 'SEC-ready documentation', included: true },
    { name: 'Export: PDF + CSV', included: true },
    { name: 'Email support', included: true },
    { name: 'API access', included: false },
    { name: 'Team roles & permissions', included: false },
    { name: 'Custom retention policies', included: false },
    { name: 'Dedicated account manager', included: false },
  ],
  team: [
    { name: 'Up to 10 users', included: true },
    { name: 'Upload limit: 50 recordings/month', included: true },
    { name: 'Evidence-linked notes', included: true },
    { name: 'SEC-ready documentation', included: true },
    { name: 'Export: PDF + CSV + ZIP bundles', included: true },
    { name: 'Priority support', included: true },
    { name: 'API access', included: true },
    { name: 'Team roles & permissions', included: true },
    { name: 'Custom retention policies', included: true },
    { name: 'Dedicated account manager', included: true },
  ],
}

export default function PricingPage() {
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
          <div className="bg-card shadow-xl border border-border rounded-3xl overflow-hidden">
            <div className="p-6 sm:p-10">
              {/* Currency Toggle */}
              <div className="flex justify-center mb-10">
                <div className="bg-muted rounded-full p-1 flex items-center">
                  <button 
                    id="gbp-toggle" 
                    className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm"
                  >
                    UK (£)
                  </button>
                  <button 
                    id="usd-toggle" 
                    className="px-6 py-2 rounded-full font-medium text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    US ($)
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Solo Plan */}
                <div className="border border-border rounded-2xl p-8 hover:border-vault-green-500/50 transition-colors">
                  <h3 className="text-2xl font-bold mb-2">Solo</h3>
                  <p className="text-muted-foreground mb-6">Perfect for individual RIAs</p>
                  
                  {/* Price - GBP */}
                  <div className="currency-gbp">
                    <div className="flex items-end gap-2 mb-1">
                      <span className="text-4xl font-bold">£129</span>
                      <span className="text-muted-foreground mb-1">/month</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">Billed annually (£1,548/year)</p>
                  </div>
                  
                  {/* Price - USD (hidden by default) */}
                  <div className="currency-usd hidden">
                    <div className="flex items-end gap-2 mb-1">
                      <span className="text-4xl font-bold">$149</span>
                      <span className="text-muted-foreground mb-1">/month</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">Billed annually ($1,788/year)</p>
                  </div>

                  <button 
                    id="solo-button"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 mb-8 transition-colors"
                  >
                    Start Solo
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  <div className="space-y-4">
                    {PLAN_FEATURES.solo.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        {feature.included ? (
                          <CheckCircle2 className="w-5 h-5 text-vault-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Team Plan */}
                <div className="border border-primary bg-primary/5 rounded-2xl p-8 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-sm font-medium py-1 px-4 rounded-full">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Team</h3>
                  <p className="text-muted-foreground mb-6">For growing RIA practices</p>
                  
                  {/* Price - GBP */}
                  <div className="currency-gbp">
                    <div className="flex items-end gap-2 mb-1">
                      <span className="text-4xl font-bold">£299</span>
                      <span className="text-muted-foreground mb-1">/month</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">Billed annually (£3,588/year)</p>
                  </div>
                  
                  {/* Price - USD (hidden by default) */}
                  <div className="currency-usd hidden">
                    <div className="flex items-end gap-2 mb-1">
                      <span className="text-4xl font-bold">$349</span>
                      <span className="text-muted-foreground mb-1">/month</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">Billed annually ($4,188/year)</p>
                  </div>

                  <button 
                    id="team-button"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 mb-8 transition-colors"
                  >
                    Start Team
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  <div className="space-y-4">
                    {PLAN_FEATURES.team.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        {feature.included ? (
                          <CheckCircle2 className="w-5 h-5 text-vault-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Optional Onboarding Note */}
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Optional onboarding: <span className="currency-gbp">£450</span><span className="currency-usd hidden">$499</span> 
                  <button className="optional-onboarding-help inline-flex items-center justify-center cursor-pointer hover:text-vault-green-500 transition-colors">
                    <HelpCircle className="w-4 h-4 ml-1" />
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: 'Do you offer a trial period?',
                answer: 'Yes, we offer a 14-day free trial for both Solo and Team plans with no credit card required. This allows you to test all features before committing.'
              },
              {
                question: 'What happens if I need more uploads?',
                answer: 'If you exceed your monthly upload limit, additional uploads are charged at £10/$15 per recording. Unused uploads don\'t roll over to the next month.'
              },
              {
                question: 'Can I change plans later?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, the change takes effect immediately. When downgrading, the change will take effect at the end of your current billing period.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards (Visa, Mastercard, American Express) and direct debit/ACH for annual plans. We do not currently support PayPal or cryptocurrency payments.'
              },
              {
                question: 'What\'s included in the optional onboarding?',
                answer: 'Optional onboarding includes a personalized 90-minute setup session with our compliance specialists, custom workspace configuration, team training, and priority support for the first 30 days.'
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

      {/* Client-side JavaScript for toggling currency */}
      <script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener('DOMContentLoaded', function() {
          // Get elements
          const gbpToggle = document.getElementById('gbp-toggle');
          const usdToggle = document.getElementById('usd-toggle');
          const soloButton = document.getElementById('solo-button');
          const teamButton = document.getElementById('team-button');
          const onboardingHelpIcon = document.querySelector('.optional-onboarding-help');
          const gbpElements = document.querySelectorAll('.currency-gbp');
          const usdElements = document.querySelectorAll('.currency-usd');
          
          // Payment links from server-side constants
          const PAYMENT_LINKS = {
            solo: {
              gbp: 'https://buy.stripe.com/9B628t3XadhM3lt2Vv9R601', // £129/month
              usd: 'https://buy.stripe.com/aFa28tbpC91waNV0Nn9R600' // $149/month
            },
            team: {
              gbp: 'https://buy.stripe.com/14AeVf51eelQ09hbs19R603', // £299/month
              usd: 'https://buy.stripe.com/14A7sNeBOdhM2hp67H9R602' // $349/month
            },
            onboarding: {
              gbp: 'https://buy.stripe.com/28E28t2T67Xse0753D9R604', // £450
              usd: 'https://buy.stripe.com/8x2dRb9hu5Pk6xF9jT9R605' // $499
            }
          };
          
          // Set initial currency based on geolocation (simplified example - using browser language)
          let currentCurrency = navigator.language.includes('en-US') ? 'usd' : 'gbp';
          
          // Update UI based on selected currency
          function updateCurrencyDisplay() {
            if (currentCurrency === 'gbp') {
              gbpToggle.classList.add('bg-primary', 'text-primary-foreground');
              gbpToggle.classList.remove('text-muted-foreground');
              usdToggle.classList.remove('bg-primary', 'text-primary-foreground');
              usdToggle.classList.add('text-muted-foreground');
              
              gbpElements.forEach(el => el.classList.remove('hidden'));
              usdElements.forEach(el => el.classList.add('hidden'));
            } else {
              usdToggle.classList.add('bg-primary', 'text-primary-foreground');
              usdToggle.classList.remove('text-muted-foreground');
              gbpToggle.classList.remove('bg-primary', 'text-primary-foreground');
              gbpToggle.classList.add('text-muted-foreground');
              
              usdElements.forEach(el => el.classList.remove('hidden'));
              gbpElements.forEach(el => el.classList.add('hidden'));
            }
            
            // Update button links
            soloButton.onclick = function() { window.location.href = PAYMENT_LINKS.solo[currentCurrency]; };
            teamButton.onclick = function() { window.location.href = PAYMENT_LINKS.team[currentCurrency]; };
            
            // Setup onboarding tooltip if it exists
            if (onboardingHelpIcon) {
              onboardingHelpIcon.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = PAYMENT_LINKS.onboarding[currentCurrency];
              };
            }
          }
          
          // Add event listeners
          gbpToggle.addEventListener('click', function() {
            currentCurrency = 'gbp';
            updateCurrencyDisplay();
          });
          
          usdToggle.addEventListener('click', function() {
            currentCurrency = 'usd';
            updateCurrencyDisplay();
          });
          
          // Set initial state
          updateCurrencyDisplay();
          
          // Default to USD for US visitors, GBP for everyone else
          if (navigator.language.includes('en-US')) {
            usdToggle.click();
          } else {
            gbpToggle.click();
          }
        });
      `}} />

      <Footer />
    </>
  )
}