import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type MarketingButtonVariant = 'primary' | 'outline' | 'onAccent'
type MarketingButtonSize = 'md' | 'lg'

type MarketingButtonProps = {
  children: ReactNode
  variant?: MarketingButtonVariant
  size?: MarketingButtonSize
  href?: string
  className?: string
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

const sizeStyles: Record<MarketingButtonSize, string> = {
  md: 'h-12 rounded-xl px-6 text-sm',
  lg: 'h-14 rounded-xl px-7 text-base',
}

const variantStyles: Record<MarketingButtonVariant, string> = {
  primary:
    'bg-primary text-primary-foreground shadow-none hover:bg-primary-hover focus-visible:ring-primary',
  outline:
    'border border-black/15 bg-white/40 text-foreground hover:bg-white focus-visible:ring-primary',
  onAccent:
    'bg-white text-ink hover:bg-white/90 focus-visible:ring-white',
}

export function MarketingButton({
  children,
  variant = 'primary',
  size = 'lg',
  href,
  className,
  type = 'button',
  ...props
}: MarketingButtonProps): React.ReactElement {
  const styles = cn(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors duration-marketing',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'disabled:pointer-events-none disabled:opacity-50',
    sizeStyles[size],
    variantStyles[variant],
    className
  )

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={styles} {...props}>
      {children}
    </button>
  )
}
