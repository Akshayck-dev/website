import { useRef, type ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '../../lib/utils'

interface MagneticButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const variants = {
  primary:
    'bg-snow text-obsidian hover:bg-pearl border border-transparent',
  secondary:
    'bg-transparent text-snow border border-white/15 hover:border-white/30 hover:bg-white/5',
  ghost:
    'bg-transparent text-mist hover:text-snow border border-transparent',
}

const sizes = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-9 py-4 text-base',
}

export function MagneticButton({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = 'translate(0, 0)'
  }

  return (
    <motion.button
      ref={ref}
      className={cn(
        'relative inline-flex items-center justify-center gap-2',
        'font-medium tracking-wide rounded-full',
        'transition-all duration-300 ease-out',
        'focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold',
        variants[variant],
        sizes[size],
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
