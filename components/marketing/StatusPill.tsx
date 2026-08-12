import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type StatusPillProps = {
  children: ReactNode
  className?: string
  showDot?: boolean
}

export function StatusPill({
  children,
  className,
  showDot = true,
}: StatusPillProps): React.ReactElement {
  return (
    <div
      className={cn(
        'mb-7 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-black/60 backdrop-blur',
        className
      )}
    >
      {showDot ? (
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
      ) : null}
      {children}
    </div>
  )
}
