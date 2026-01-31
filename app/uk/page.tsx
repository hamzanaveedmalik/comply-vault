import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'FCA Compliance Software for UK Financial Services | Comply Vault',
  description: 'FCA compliance software for UK financial services firms. Generate file notes, supervision records, and advice suitability documentation with evidence linking and audit trails.',
  alternates: {
    canonical: 'https://www.complyvault.co/uk',
    languages: {
      'en-GB': 'https://www.complyvault.co/uk',
      'en-US': 'https://www.complyvault.co',
      'x-default': 'https://www.complyvault.co',
    },
  },
}

export default function UKHomePage() {
  // Redirect UK homepage to FCA compliance page
  redirect('/uk/fca-compliance-software')
}
