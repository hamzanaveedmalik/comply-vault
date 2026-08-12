'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { DemoModal } from './DemoModal'

export function Navigation() {
  const pathname = usePathname()
  const isUK = pathname?.startsWith('/uk') ?? false
  const isHomepage = pathname === '/' || pathname === '/uk'

  // For anchor links, if not on homepage, link to homepage with anchor
  const getAnchorLink = (anchor: string) => {
    if (isHomepage) return anchor
    return isUK ? `/uk${anchor}` : anchor
  }

  const navLinks = [
    { label: 'Solutions', href: isUK ? '/uk/fca-compliance-software' : '/ria-compliance-software' },
    { label: 'Features', href: '/features' },
    { label: 'Insights', href: '/blog' },
    { label: 'How It Works', href: getAnchorLink('#how-it-works') },
    { label: 'Security', href: getAnchorLink('#security') },
    { label: 'Pricing', href: isUK ? '/uk/pricing' : '/pricing' },
  ]

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Use dark logo only when mounted and theme is dark
  const logoSrc = mounted && resolvedTheme === 'dark' ? '/logo-white.svg' : '/logo.svg'

  const openDemoModal = () => {
    setIsDemoModalOpen(true)
    setIsMobileMenuOpen(false)
  }

  const linkClassName = cn(
    'relative text-[15px] font-medium text-black/62 dark:text-white/62',
    'transition-colors duration-200 hover:text-primary',
    'after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:w-full',
    'after:origin-left after:scale-x-0 after:bg-primary',
    'after:transition-transform after:duration-300 after:ease-out',
    'hover:after:scale-x-100'
  )

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 pt-4 lg:pt-6">
        <div
          className={cn(
            'mx-auto max-w-[1600px] rounded-[22px] border',
            'transition-[background-color,box-shadow,border-color,backdrop-filter] duration-200',
            isMobileMenuOpen
              ? 'border-black/10 bg-[#f7f6f3] shadow-[0_18px_50px_rgba(27,27,25,0.12)] backdrop-blur-none dark:border-white/10 dark:bg-[hsl(160_40%_9%)] dark:shadow-[0_18px_50px_rgba(0,0,0,0.35)]'
              : 'border-black/5 bg-white/92 shadow-[0_10px_35px_rgba(27,27,25,0.05)] backdrop-blur-xl dark:border-white/10 dark:bg-[hsl(160_50%_6%/0.92)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.25)]'
          )}
        >
          <div className="flex h-[78px] items-center justify-between px-5 sm:px-7">
            {/* Logo */}
            <Link href={isUK ? '/uk' : '/'} className="flex items-center gap-3 group">
              <div className="relative h-10 w-10">
                <Image
                  src={logoSrc}
                  alt="ComplyVault Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-display text-xl font-bold text-foreground">
                Comply<span className="text-vault-green-500 dark:text-vault-green-400">Vault</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-9 md:flex">
              {navLinks.map((link) => {
                const isAnchor = link.href.startsWith('#')
                const Component = isAnchor ? 'a' : Link
                const props = isAnchor
                  ? { href: link.href }
                  : { href: link.href as string }

                return (
                  <Component key={link.label} {...props} className={linkClassName}>
                    {link.label}
                  </Component>
                )
              })}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden items-center gap-4 md:flex">
              <ThemeToggle />
              <button
                onClick={openDemoModal}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-200 hover:bg-primary/90 hover:shadow-lg active:scale-[0.98]"
              >
                Book a Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white text-foreground transition-colors hover:bg-black/[0.04] dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu , expands inside the same rounded shell */}
          <div
            className={cn(
              'md:hidden overflow-hidden transition-all duration-300 ease-out',
              isMobileMenuOpen
                ? 'max-h-[min(70vh,28rem)] opacity-100 translate-y-0'
                : 'max-h-0 opacity-0 -translate-y-1'
            )}
          >
            <div className="border-t border-black/5 px-5 pb-5 pt-3 sm:px-7 dark:border-white/10">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isAnchor = link.href.startsWith('#')
                  const Component = isAnchor ? 'a' : Link
                  const props = isAnchor
                    ? { href: link.href }
                    : { href: link.href as string }

                  return (
                    <Component
                      key={link.label}
                      {...props}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-black/62 transition-colors hover:bg-black/[0.04] hover:text-primary dark:text-white/62 dark:hover:bg-white/[0.06]"
                    >
                      {link.label}
                    </Component>
                  )
                })}
              </div>
              <div className="mt-3 border-t border-black/5 pt-4 dark:border-white/10">
                <button
                  onClick={openDemoModal}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-200 hover:bg-primary/90 hover:shadow-lg active:scale-[0.98]"
                >
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  )
}
