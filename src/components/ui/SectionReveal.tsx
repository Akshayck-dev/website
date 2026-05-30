import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'
import { fadeUp } from '../../lib/animations'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface SectionRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function SectionReveal({ children, className, delay = 0 }: SectionRevealProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      variants={fadeUp}
      initial={reducedMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
