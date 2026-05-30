import { type ReactNode } from 'react'
import { cn } from '../../lib/utils'
import { SectionReveal } from './SectionReveal'

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  children?: ReactNode
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'left',
  className,
  children,
}: SectionHeaderProps) {
  return (
    <SectionReveal className={cn('mb-16 md:mb-20', className)}>
      <div
        className={cn(
          align === 'center' && 'text-center mx-auto max-w-3xl',
          align === 'left' && 'max-w-2xl'
        )}
      >
        {label && (
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-gold font-medium mb-4">
            {label}
          </span>
        )}
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-snow tracking-tight leading-[1.1] mb-6">
          {title}
        </h2>
        {description && (
          <p className="text-mist text-lg md:text-xl leading-relaxed">{description}</p>
        )}
        {children}
      </div>
    </SectionReveal>
  )
}
