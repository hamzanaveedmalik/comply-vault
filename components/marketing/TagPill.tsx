import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type TagPillProps = {
  children: ReactNode
  className?: string
}

export function TagPill({
  children,
  className,
}: TagPillProps): React.ReactElement {
  return (
    <span
      className={cn(
        'rounded-full border border-black/10 bg-white/55 px-4 py-2 text-sm text-black/58',
        className
      )}
    >
      {children}
    </span>
  )
}
