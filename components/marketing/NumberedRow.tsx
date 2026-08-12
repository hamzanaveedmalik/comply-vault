import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type NumberedRowProps = {
  number: string
  title: string
  description: string
  className?: string
  action?: ReactNode
}

export function NumberedRow({
  number,
  title,
  description,
  className,
  action,
}: NumberedRowProps): React.ReactElement {
  return (
    <div
      className={cn(
        'grid gap-6 border-b border-white/15 py-9 sm:grid-cols-[90px_1fr] sm:py-12',
        className
      )}
    >
      <span className="font-editorial text-3xl text-primary">{number}</span>
      <div>
        <h3 className="font-editorial text-3xl font-normal tracking-[-0.025em] sm:text-4xl">
          {title}
        </h3>
        <p className="mt-4 max-w-xl leading-7 text-white/52">{description}</p>
        {action ? <div className="mt-6">{action}</div> : null}
      </div>
    </div>
  )
}
