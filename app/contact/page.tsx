import { Metadata } from 'next'
import { Mail, MessageSquare, Clock, Linkedin } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us | Comply Vault',
  description: 'Get in touch with the Comply Vault team.',
}

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'For general inquiries and support',
    contact: 'hamza@complyvault.co',
    href: 'mailto:hamza@complyvault.co',
    action: 'Send Email',
  },
  {
    icon: MessageSquare,
    title: 'Book a Demo',
    description: 'See the platform in action',
    contact: 'Schedule a 30-minute walkthrough',
    href: '/#cta',
    action: 'Book Demo',
  },
  {
    icon: Linkedin,
    title: 'Connect on LinkedIn',
    description: 'Follow for updates and insights',
    contact: 'Comply Vault',
    href: 'https://www.linkedin.com/company/complyvault',
    action: 'Follow Us',
    external: true,
  },
]

const faqs = [
  {
    question: 'How quickly can I get started?',
    answer: 'You can book a demo today and be onboarded within a week. Our pilot program includes hands-on setup support.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! We offer a 60-day free trial for new customers. No credit card required to start.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We provide email support for all customers, with priority support and dedicated onboarding for pilot customers.',
  },
  {
    question: 'Can I see a demo before committing?',
    answer: 'Absolutely. Book a demo and we\'ll give you a personalized walkthrough of the platform with your specific use case in mind.',
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-vault-green-900 via-vault-green-800 to-vault-green-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Have questions about ComplyVault? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.external ? '_blank' : undefined}
              rel={method.external ? 'noopener noreferrer' : undefined}
              className="bg-card rounded-2xl p-8 border border-border hover:border-vault-green-500/50 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-vault-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-vault-green-500/20 transition-colors">
                <method.icon className="w-7 h-7 text-vault-green-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{method.title}</h3>
              <p className="text-muted-foreground mb-4">{method.description}</p>
              <p className="text-vault-green-500 font-medium mb-4">{method.contact}</p>
              <span className="inline-flex items-center text-sm font-medium text-muted-foreground group-hover:text-vault-green-500 transition-colors">
                {method.action} →
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Response Time */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-muted/30 rounded-2xl p-8 border border-border flex items-center gap-6">
          <div className="w-14 h-14 bg-vault-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Clock className="w-7 h-7 text-vault-green-500" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-1">Quick Response Time</h3>
            <p className="text-muted-foreground">
              We typically respond to emails within 24 hours during business days. 
              For demo requests, we'll reach out to schedule at your convenience.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-muted/30 border-y border-border py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link 
              href="/#faq"
              className="text-vault-green-500 hover:text-vault-green-400 font-medium"
            >
              View all FAQs →
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Ready to transform your compliance workflow?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Book a demo and see ComplyVault in action.
        </p>
        <Link
          href="/#cta"
          className="inline-flex items-center gap-2 bg-vault-green-500 text-white font-semibold px-8 py-4 rounded-xl hover:bg-vault-green-600 transition-colors shadow-lg text-lg"
        >
          Book a Demo →
        </Link>
      </div>
    </main>
  )
}
