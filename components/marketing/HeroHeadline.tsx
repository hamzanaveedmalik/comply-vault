import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export type HeroAccentMode = 'ink' | 'tint'

type HeroHeadlineProps = {
  /** Lines before the optional accent word/phrase */
  lead: ReactNode
  /** Accented final word or phrase (option B). Ignored when mode is "ink". */
  accent?: ReactNode
  mode?: HeroAccentMode
  className?: string
  as?: 'h1' | 'h2'
}

/**
 * Hero display headline.
 * - mode "ink": entire headline in near-black (option A)
 * - mode "tint": accent phrase uses --hero-accent only (option B)
 */
export function HeroHeadline({
  lead,
  accent,
  mode = 'ink',
  className,
  as: Tag = 'h1',
}: HeroHeadlineProps): React.ReactElement {
  return (
    <Tag
      className={cn(
        'font-editorial text-display-hero font-normal text-ink-soft',
        className
      )}
    >
      {lead}
      {accent ? (
        <span
          className={cn(
            'block',
            mode === 'tint' ? 'text-hero-accent' : 'text-ink-soft'
          )}
        >
          {accent}
        </span>
      ) : null}
    </Tag>
  )
}
