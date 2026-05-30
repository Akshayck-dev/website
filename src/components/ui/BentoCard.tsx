import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'
import { scaleIn } from '../../lib/animations'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface BentoCardProps {
  children: ReactNode
  className?: string
  span?: string
  featured?: boolean
  index?: number
}

export function BentoCard({
  children,
  className,
  span,
  featured = false,
  index = 0,
}: BentoCardProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      variants={scaleIn}
      custom={index}
      initial={reducedMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.08 }}
      className={cn(
        'group relative rounded-2xl p-6 md:p-8',
        'glass glass-hover transition-all duration-500',
        'hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]',
        featured && 'md:p-10',
        span,
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(201, 169, 98, 0.06), transparent 60%)',
        }}
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
