import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { MarketingButton } from './MarketingButton'

type CtaSlabProps = {
  kicker?: string
  title: string
  description?: string
  action?: ReactNode
  className?: string
  /** white on deep green, or bone on deep green */
  textTone?: 'white' | 'bone'
}

export function CtaSlab({
  kicker,
  title,
  description,
  action,
  className,
  textTone = 'white',
}: CtaSlabProps): React.ReactElement {
  const titleColor = textTone === 'bone' ? 'text-bone' : 'text-white'
  // bone/80 on --cta-bg (#0A2E1F) ≈ 9.2:1; white/72 ≈ 8.7:1 equivalent on ink depth
  const bodyColor = textTone === 'bone' ? 'text-bone/80' : 'text-white/80'
  const kickerColor = textTone === 'bone' ? 'text-bone/70' : 'text-white/70'

  return (
    <div
      className={cn(
        'overflow-hidden rounded-marketing-lg bg-cta px-6 py-16 sm:px-10 lg:px-16 lg:py-20',
        className
      )}
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          {kicker ? (
            <p
              className={cn(
                'text-[11px] font-medium uppercase tracking-[0.22em]',
                kickerColor
              )}
            >
              {kicker}
            </p>
          ) : null}
          <h2
            className={cn(
              'font-editorial mt-5 max-w-4xl text-display-cta font-normal',
              titleColor
            )}
          >
            {title}
          </h2>
          {description ? (
            <p className={cn('mt-7 max-w-2xl text-lg leading-8', bodyColor)}>
              {description}
            </p>
          ) : null}
        </div>
        {action ? <div>{action}</div> : null}
      </div>
    </div>
  )
}

/** Convenience demo actions for palette previews */
export function CtaSlabDemoAction(): React.ReactElement {
  return (
    <MarketingButton variant="onAccent" size="lg">
      Request a demo
    </MarketingButton>
  )
}
