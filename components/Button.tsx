'use client'

import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  onClick?: () => void
  className?: string
  disabled?: boolean
  fullWidth?: boolean
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    fullWidth && 'w-full'
  )

  const variants = {
    primary: cn(
      'bg-vault-green-500 text-white hover:bg-vault-green-600 focus:ring-vault-green-500',
      'shadow-lg shadow-vault-green-500/25 hover:shadow-xl hover:shadow-vault-green-500/30',
      'dark:bg-vault-green-500 dark:hover:bg-vault-green-400',
      'btn-primary'
    ),
    secondary: cn(
      'bg-vault-coral-500 text-white hover:bg-vault-coral-600 focus:ring-vault-coral-500',
      'shadow-lg shadow-vault-coral-500/25 hover:shadow-xl hover:shadow-vault-coral-500/30',
      'dark:bg-vault-coral-500 dark:hover:bg-vault-coral-400'
    ),
    outline: cn(
      'border-2 border-vault-green-500 text-vault-green-500 bg-transparent',
      'hover:bg-vault-green-500 hover:text-white focus:ring-vault-green-500',
      'dark:border-vault-green-400 dark:text-vault-green-400 dark:hover:bg-vault-green-400 dark:hover:text-white'
    ),
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const combinedStyles = cn(baseStyles, variants[variant], sizes[size], className)

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} disabled={disabled} className={combinedStyles}>
      {children}
    </button>
  )
}
