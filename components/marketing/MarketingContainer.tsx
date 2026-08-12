import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type MarketingContainerProps = {
  children: ReactNode
  wide?: boolean
  className?: string
  as?: ElementType
}

export function MarketingContainer({
  children,
  wide = false,
  className,
  as: Tag = 'div',
}: MarketingContainerProps): React.ReactElement {
  return (
    <Tag
      className={cn(
        'mx-auto w-full',
        wide ? 'max-w-marketing-wide' : 'max-w-marketing',
        className
      )}
    >
      {children}
    </Tag>
  )
}

type MarketingSectionTone = 'grey' | 'bone' | 'ink'

type MarketingSectionProps = {
  children: ReactNode
  tone?: MarketingSectionTone
  className?: string
  id?: string
  compact?: boolean
}

const toneClass: Record<MarketingSectionTone, string> = {
  grey: 'bg-grey text-[#20201f]',
  bone: 'bg-bone text-[#20201f]',
  ink: 'bg-ink text-white',
}

export function MarketingSection({
  children,
  tone = 'grey',
  className,
  id,
  compact = false,
}: MarketingSectionProps): React.ReactElement {
  return (
    <section
      id={id}
      className={cn(
        'px-4 sm:px-6 lg:px-10',
        compact ? 'py-section-sm lg:py-section' : 'py-section lg:py-section-lg',
        toneClass[tone],
        className
      )}
    >
      {children}
    </section>
  )
}
