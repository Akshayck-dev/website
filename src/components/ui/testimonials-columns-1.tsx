import { Fragment } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export type ColumnTestimonial = {
  text: string
  image: string
  name: string
  role: string
}

interface TestimonialsColumnProps {
  className?: string
  testimonials: ColumnTestimonial[]
  duration?: number
}

export function TestimonialsColumn({
  className,
  testimonials,
  duration = 10,
}: TestimonialsColumnProps) {
  const reducedMotion = useReducedMotion()

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        animate={reducedMotion ? undefined : { translateY: '-50%' }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[0, 1].map((index) => (
          <Fragment key={index}>
            {testimonials.map(({ text, image, name, role }) => (
              <div
                key={`${index}-${name}`}
                className="glass p-8 rounded-3xl max-w-xs w-full shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]"
              >
                <p className="text-pearl text-sm leading-relaxed">{text}</p>
                <div className="flex items-center gap-3 mt-6">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover border border-white/10"
                    loading="lazy"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium text-snow text-sm tracking-tight leading-5">
                      {name}
                    </span>
                    <span className="text-mist text-sm leading-5">{role}</span>
                  </div>
                </div>
              </div>
            ))}
          </Fragment>
        ))}
      </motion.div>
    </div>
  )
}
