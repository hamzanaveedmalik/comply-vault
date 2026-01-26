import { Metadata } from 'next'
import { FileText, Scale, AlertTriangle, CreditCard, Shield, Mail } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Comply Vault',
  description: 'Read the terms and conditions for using Comply Vault.',
  alternates: {
    canonical: 'https://www.complyvault.co/terms',
  },
}

const sections = [
  {
    icon: FileText,
    title: '1. Acceptance of Terms',
    content: `By accessing or using the services provided by COMPLY VAULT LTD, Company No. 16889706 ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.

These Terms apply to all visitors, users, and others who access or use the Service. By using the Service, you represent that you are at least 18 years old and have the legal authority to enter into these Terms.`,
  },
  {
    icon: Scale,
    title: '2. Description of Service',
    content: `Comply Vault provides a compliance documentation platform that helps Registered Investment Advisors (RIAs) create exam-ready client interaction records from meeting recordings.

The Service includes:
• Audio transcription and processing
• AI-assisted extraction of compliance-relevant information
• Review and editing tools
• Export functionality for audit packs
• Team collaboration features

We reserve the right to modify, suspend, or discontinue the Service at any time with reasonable notice.`,
  },
  {
    icon: Shield,
    title: '3. User Responsibilities',
    content: `You are responsible for:

• Account Security: Maintaining the confidentiality of your account credentials and restricting access to your account.

• Accurate Information: Providing accurate, current, and complete information during registration and keeping your account information updated.

• Compliance: Ensuring your use of the Service complies with all applicable laws and regulations, including SEC rules and state securities laws.

• Content Ownership: You retain all rights to the content you upload. By uploading content, you grant us a limited license to process it for service delivery.

• Appropriate Use: Using the Service only for its intended purpose of compliance documentation.`,
  },
  {
    icon: AlertTriangle,
    title: '4. Prohibited Uses',
    content: `You agree NOT to:

• Use the Service for any unlawful purpose
• Upload content that you do not have the right to share
• Attempt to gain unauthorized access to our systems
• Interfere with or disrupt the Service
• Use automated means to access the Service without permission
• Resell or redistribute the Service without authorization
• Use the Service to store or transmit malicious code
• Violate any applicable laws or regulations`,
  },
  {
    icon: CreditCard,
    title: '5. Payment Terms',
    content: `Subscription Fees: The Service is provided on a subscription basis. Current pricing is available on our website.

Billing: Subscriptions are billed monthly or annually, as selected. Payment is due at the beginning of each billing period.

Refunds: We offer a 60-day free trial for new customers. After the trial, fees are generally non-refundable, except as required by law.

Price Changes: We may change our prices with 30 days' notice. Continued use of the Service after price changes constitutes acceptance of the new prices.`,
  },
]

const additionalSections = [
  {
    title: '6. Intellectual Property',
    content: `The Service and its original content, features, and functionality are owned by COMPLY VAULT LTD (Company No. 16889706) and are protected by international copyright, trademark, and other intellectual property laws.

You retain ownership of all content you upload to the Service. We do not claim any intellectual property rights over your content.`,
  },
  {
    title: '7. Limitation of Liability',
    content: `To the maximum extent permitted by law, Comply Vault shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or other intangible losses.

Our total liability for any claims arising from the Service shall not exceed the amount you paid us in the twelve (12) months preceding the claim.

The Service is provided "as is" without warranties of any kind, either express or implied.`,
  },
  {
    title: '8. Disclaimer',
    content: `Comply Vault is a documentation tool, not a legal or compliance advisor. The Service:

• Does not provide legal advice
• Does not make compliance determinations
• Does not guarantee regulatory compliance
• Does not replace professional legal counsel

Users are responsible for ensuring their compliance practices meet regulatory requirements. All output should be reviewed by qualified compliance personnel before use.`,
  },
  {
    title: '9. Termination',
    content: `We may terminate or suspend your account immediately, without prior notice, for any breach of these Terms.

Upon termination:
• Your right to use the Service ceases immediately
• We may delete your data after a grace period (typically 30 days)
• You remain liable for any outstanding fees

You may cancel your subscription at any time through your account settings.`,
  },
  {
    title: '10. Changes to Terms',
    content: `We reserve the right to modify these Terms at any time. We will provide notice of material changes by:

• Posting the updated Terms on our website
• Sending an email to your registered email address
• Displaying a notice within the Service

Continued use of the Service after changes constitutes acceptance of the modified Terms.`,
  },
  {
    title: '11. Governing Law',
    content: `These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.

Any disputes arising from these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.`,
  },
]

export default function TermsPage() {
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
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-vault-green-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-white/80">
            Please read these terms carefully before using our service.
          </p>
          <p className="text-sm text-white/60 mt-4">
            Last updated: January 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Sections with Icons */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-vault-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-vault-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-foreground pt-2">{section.title}</h2>
              </div>
              <div className="pl-16">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Sections */}
        <div className="mt-16 space-y-12">
          {additionalSections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-16 bg-muted/50 rounded-2xl p-8 border border-border">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-vault-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-vault-green-500" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">Questions about these Terms?</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <a 
                href="mailto:legal@complyvault.co" 
                className="text-vault-green-500 hover:text-vault-green-400 font-medium"
              >
                legal@complyvault.co
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
