import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type PrincipleCardProps = {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function PrincipleCard({
  icon: Icon,
  title,
  description,
  className,
}: PrincipleCardProps): React.ReactElement {
  return (
    <article
      className={cn(
        'rounded-marketing-md border border-black/10 bg-white/55 p-6 sm:p-7',
        className
      )}
    >
      <Icon className="h-6 w-6 text-primary" aria-hidden />
      <h3 className="font-editorial mt-12 text-3xl font-normal tracking-[-0.03em]">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-black/50">{description}</p>
    </article>
  )
}
