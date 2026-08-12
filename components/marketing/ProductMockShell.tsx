import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ProductMockShellProps = {
  title?: string
  children: ReactNode
  sidebar?: ReactNode
  className?: string
  chromeClassName?: string
}

/**
 * Windowed product mock container (Intelliwave "Northfield" pattern).
 * Populate with real ComplyVault UI in later phases , no stock imagery.
 */
export function ProductMockShell({
  title = 'Compliance workspace',
  children,
  sidebar,
  className,
  chromeClassName,
}: ProductMockShellProps): React.ReactElement {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-marketing border border-black/10 bg-taupe shadow-marketing-media',
        className
      )}
    >
      <div
        className={cn(
          'flex items-center justify-between border-b border-black/10 bg-white/45 px-5 py-4 backdrop-blur-sm sm:px-7',
          chromeClassName
        )}
      >
        <div className="flex items-center gap-2" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
        </div>
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">
          {title}
        </span>
      </div>

      <div
        className={cn(
          'grid min-h-[420px]',
          sidebar ? 'grid-cols-1 md:grid-cols-[190px_1fr]' : 'grid-cols-1'
        )}
      >
        {sidebar ? (
          <aside className="hidden border-r border-black/10 bg-ink p-5 text-white md:block">
            {sidebar}
          </aside>
        ) : null}
        <div className="bg-gradient-to-br from-[#f7f5f0] to-[#e6dfd3] p-5 sm:p-8">
          {children}
        </div>
      </div>
    </div>
  )
}

type InkFeatureTileProps = {
  kicker: string
  children: ReactNode
  className?: string
  withArchitecture?: boolean
}

export function InkFeatureTile({
  kicker,
  children,
  className,
  withArchitecture = false,
}: InkFeatureTileProps): React.ReactElement {
  return (
    <div
      className={cn(
        'relative min-h-[248px] overflow-hidden rounded-marketing-md border border-white/10 bg-ink-soft p-7 text-white shadow-[0_24px_70px_rgba(0,0,0,0.12)]',
        className
      )}
    >
      {withArchitecture ? (
        <div className="pointer-events-none absolute inset-0 opacity-50 marketing-architecture" />
      ) : null}
      <div className="relative flex h-full flex-col justify-between">
        <span className="text-[10px] uppercase tracking-[0.22em] text-white/50">
          {kicker}
        </span>
        <div>{children}</div>
      </div>
    </div>
  )
}
