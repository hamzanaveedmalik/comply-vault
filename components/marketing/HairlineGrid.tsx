import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type HairlineGridProps = {
  children: ReactNode
  columns?: 2 | 3 | 4
  className?: string
  onInk?: boolean
}

const columnClass: Record<NonNullable<HairlineGridProps['columns']>, string> = {
  2: 'sm:grid-cols-2',
  3: 'md:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
}

export function HairlineGrid({
  children,
  columns = 3,
  className,
  onInk = false,
}: HairlineGridProps): React.ReactElement {
  return (
    <div
      className={cn(
        'grid gap-px overflow-hidden rounded-marketing border',
        onInk
          ? 'border-white/10 bg-white/10'
          : 'border-black/10 bg-black/10',
        columnClass[columns],
        className
      )}
    >
      {children}
    </div>
  )
}

type HairlineCellProps = {
  children: ReactNode
  className?: string
  onInk?: boolean
}

export function HairlineCell({
  children,
  className,
  onInk = false,
}: HairlineCellProps): React.ReactElement {
  return (
    <div
      className={cn(
        'p-7 transition-colors duration-marketing sm:p-9',
        onInk
          ? 'bg-ink hover:bg-white/5'
          : 'bg-bone hover:bg-white',
        className
      )}
    >
      {children}
    </div>
  )
}
