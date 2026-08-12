import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionKickerProps = {
  children: ReactNode
  onInk?: boolean
  className?: string
}

export function SectionKicker({
  children,
  onInk = false,
  className,
}: SectionKickerProps): React.ReactElement {
  return (
    <p
      className={cn(
        'section-kicker',
        onInk && 'section-kicker-on-ink',
        className
      )}
    >
      {children}
    </p>
  )
}
