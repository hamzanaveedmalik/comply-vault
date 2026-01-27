import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation, Footer } from '@/components'
import { CheckCircle2, ArrowRight, CheckCheck, Mail, CalendarClock, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Payment Successful! | Comply Vault',
  description: 'Your payment has been successfully processed. Welcome to Comply Vault!',
  robots: {
    index: false,
    follow: false,
  },
}

export default function CheckoutSuccessPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Card */}
          <div className="bg-card shadow-xl border border-border rounded-3xl overflow-hidden mb-12">
            <div className="bg-gradient-to-br from-vault-green-500 to-vault-green-600 p-8 text-white text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold font-display mb-3">Payment Successful!</h1>
              <p className="text-white/90 text-lg max-w-md mx-auto">
                Thank you for your purchase. Your payment has been successfully processed.
              </p>
            </div>
            
            <div className="p-8">
              <div className="bg-vault-green-500/10 dark:bg-vault-green-500/5 border border-vault-green-500/20 rounded-xl p-4 mb-8 flex items-start gap-3">
                <CheckCheck className="w-5 h-5 text-vault-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Your order confirmation has been emailed to you.</span>{' '}
                  Please check your inbox for details about your subscription.
                </p>
              </div>
              
              {/* Next Steps */}
              <h2 className="text-xl font-bold mb-4">Next Steps</h2>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-vault-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-vault-green-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Check your email</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      You'll receive a welcome email with login instructions within the next few minutes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-vault-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CalendarClock className="w-5 h-5 text-vault-green-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Schedule your onboarding</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      If you purchased onboarding, you'll receive a separate email with a link to schedule your session.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-vault-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-vault-green-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Explore documentation</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Our knowledge base contains helpful guides to get you started with Comply Vault.
                    </p>
                  </div>
                </div>
              </div>
              
              <hr className="my-8 border-border" />
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-border bg-background hover:bg-muted transition-colors"
                >
                  Return to Homepage
                </Link>
                <Link
                  href="https://help.complyvault.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-vault-green-500 text-white hover:bg-vault-green-600 transition-colors"
                >
                  View Documentation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Support Section */}
          <div className="text-center">
            <h2 className="text-lg font-medium mb-2">Need help?</h2>
            <p className="text-muted-foreground mb-4">
              Our support team is ready to assist you with any questions.
            </p>
            <Link 
              href="mailto:support@complyvault.co"
              className="text-vault-green-500 hover:text-vault-green-600 font-medium"
            >
              support@complyvault.co
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}