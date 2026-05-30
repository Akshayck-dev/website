import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote } from 'lucide-react'
import { cn } from '../../lib/utils'
import { luxuryEase } from '../../lib/animations'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
  company: string
  avatar: string
  result: string
}

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[]
  className?: string
  interval?: number
}

export function AnimatedTestimonials({
  testimonials,
  className,
  interval = 6000,
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const reducedMotion = useReducedMotion()

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  useEffect(() => {
    if (isPaused || reducedMotion) return
    const timer = setInterval(next, interval)
    return () => clearInterval(timer)
  }, [isPaused, next, interval, reducedMotion])

  const active = testimonials[activeIndex]

  return (
    <div
      className={cn('relative', className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="glass rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
        <Quote
          className="absolute top-8 right-8 md:top-12 md:right-12 w-16 h-16 text-gold/10"
          aria-hidden="true"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: luxuryEase }}
          >
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-snow leading-snug tracking-tight mb-10 md:mb-12 max-w-4xl">
              &ldquo;{active.quote}&rdquo;
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center">
                  <span className="text-sm font-medium text-gold tracking-wider">
                    {active.avatar}
                  </span>
                </div>
                <div>
                  <p className="text-snow font-medium">{active.author}</p>
                  <p className="text-mist text-sm">
                    {active.role}, {active.company}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-sm text-gold font-medium">{active.result}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-2 mt-10 md:mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                'h-1 rounded-full transition-all duration-500',
                i === activeIndex
                  ? 'w-8 bg-gold'
                  : 'w-4 bg-white/10 hover:bg-white/20'
              )}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
