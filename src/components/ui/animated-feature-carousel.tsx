import {
  useCallback,
  useEffect,
  useState,
  type ComponentProps,
  type MouseEvent,
  type ReactNode,
} from 'react'
import { Check } from 'lucide-react'
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  type MotionStyle,
  type MotionValue,
  type Variants,
} from 'framer-motion'
import { cn } from '@/lib/utils'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const placeholderImage = (text = 'Image') =>
  `https://placehold.co/600x400/1a1a1a/ffffff?text=${encodeURIComponent(text)}`

export type ImageSet = {
  step1img1: string
  step1img2: string
  step2img1: string
  step2img2: string
  step3img: string
  step4img: string
  alt: string
}

export type CarouselStep = {
  id: string
  name: string
  title: string
  description: string
}

type WrapperStyle = MotionStyle & {
  '--x': MotionValue<string>
  '--y': MotionValue<string>
}

interface FeatureCarouselProps {
  image: ImageSet
  steps?: readonly CarouselStep[]
  interval?: number
  step1img1Class?: string
  step1img2Class?: string
  step2img1Class?: string
  step2img2Class?: string
  step3imgClass?: string
  step4imgClass?: string
  className?: string
}

interface StepImageProps extends ComponentProps<'img'> {
  src: string
  alt: string
}

const TOTAL_STEPS = 4

const defaultSteps: readonly CarouselStep[] = [
  {
    id: '1',
    name: 'Brand Strategy',
    title: 'Distinctive positioning',
    description:
      'We architect brand identities that resonate with discerning audiences and command premium positioning in competitive markets.',
  },
  {
    id: '2',
    name: 'Digital Experience',
    title: 'Immersive web craft',
    description:
      'Immersive experiences engineered for conversion, crafted with meticulous attention to interaction design and performance.',
  },
  {
    id: '3',
    name: 'Content Production',
    title: 'Editorial excellence',
    description:
      'Cinematic content that tells your story with strategic precision across every touchpoint — from film to social to print.',
  },
  {
    id: '4',
    name: 'Performance',
    title: 'Measurable growth',
    description:
      'Data-driven campaigns and analytics frameworks that deliver ROI while maintaining the elevated aesthetic your brand demands.',
  },
]

const ANIMATION_PRESETS = {
  fadeInScale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { type: 'spring' as const, stiffness: 300, damping: 25, mass: 0.5 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { type: 'spring' as const, stiffness: 300, damping: 25, mass: 0.5 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { type: 'spring' as const, stiffness: 300, damping: 25, mass: 0.5 },
  },
}

type AnimationPreset = keyof typeof ANIMATION_PRESETS

interface AnimatedStepImageProps extends StepImageProps {
  preset?: AnimationPreset
  delay?: number
}

function useNumberCycler(totalSteps: number = TOTAL_STEPS, interval = 5000, paused = false) {
  const [currentNumber, setCurrentNumber] = useState(0)

  useEffect(() => {
    if (paused) return
    const timerId = setTimeout(() => {
      setCurrentNumber((prev) => (prev + 1) % totalSteps)
    }, interval)
    return () => clearTimeout(timerId)
  }, [currentNumber, totalSteps, interval, paused])

  const setStep = useCallback(
    (stepIndex: number) => {
      setCurrentNumber(stepIndex % totalSteps)
    },
    [totalSteps]
  )

  return { currentNumber, setStep }
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const checkDevice = () => setIsMobile(window.matchMedia('(max-width: 768px)').matches)
    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])
  return isMobile
}

const stepVariants: Variants = {
  inactive: { scale: 0.9, opacity: 0.7 },
  active: { scale: 1, opacity: 1 },
}

function AnimatedStepImage({ preset = 'fadeInScale', delay = 0, src, alt, className, style }: AnimatedStepImageProps) {
  const presetConfig = ANIMATION_PRESETS[preset]
  return (
    <motion.img
      alt={alt}
      className={className}
      src={src}
      loading="lazy"
      style={{ position: 'absolute', userSelect: 'none', maxWidth: 'unset', ...style }}
      onError={(e) => {
        e.currentTarget.src = placeholderImage(alt)
      }}
      {...presetConfig}
      transition={{ ...presetConfig.transition, delay }}
    />
  )
}

function FeatureCard({ children, step, steps }: { children: ReactNode; step: number; steps: readonly CarouselStep[] }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const isMobile = useIsMobile()

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLDivElement>) {
    if (isMobile) return
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      className="group relative w-full rounded-2xl"
      onMouseMove={handleMouseMove}
      style={
        {
          '--x': useMotionTemplate`${mouseX}px`,
          '--y': useMotionTemplate`${mouseY}px`,
        } as WrapperStyle
      }
    >
      <div className="relative w-full overflow-hidden rounded-3xl glass border-white/8">
        <div className="m-6 min-h-[420px] w-full md:m-10 md:min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              className="relative z-10 flex w-full flex-col gap-4 md:w-3/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="text-xs font-medium uppercase tracking-[0.2em] text-gold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {steps[step].name}
              </motion.div>
              <motion.h2
                className="font-display text-2xl tracking-tight text-snow md:text-3xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {steps[step].title}
              </motion.h2>
              <motion.p
                className="text-base leading-relaxed text-mist"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {steps[step].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
          {children}
        </div>
      </div>
    </motion.div>
  )
}

function StepsNav({
  steps: stepItems,
  current,
  onChange,
}: {
  steps: readonly CarouselStep[]
  current: number
  onChange: (index: number) => void
}) {
  return (
    <nav aria-label="Service features" className="flex justify-center px-4">
      <ol className="flex w-full flex-wrap items-center justify-center gap-2" role="list">
        {stepItems.map((step, stepIdx) => {
          const isCompleted = current > stepIdx
          const isCurrent = current === stepIdx
          return (
            <motion.li
              key={step.id}
              initial="inactive"
              animate={isCurrent ? 'active' : 'inactive'}
              variants={stepVariants}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <button
                type="button"
                className={cn(
                  'group flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-300',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian',
                  isCurrent
                    ? 'bg-gold text-obsidian'
                    : 'bg-white/5 text-mist hover:bg-white/10 hover:text-snow'
                )}
                onClick={() => onChange(stepIdx)}
              >
                <span
                  className={cn(
                    'flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all duration-300 text-xs',
                    isCompleted
                      ? 'bg-gold text-obsidian'
                      : isCurrent
                        ? 'bg-gold/30 text-gold'
                        : 'bg-white/10 text-mist group-hover:bg-white/15'
                  )}
                >
                  {isCompleted ? <Check className="h-3 w-3" strokeWidth={3} /> : stepIdx + 1}
                </span>
                <span className="hidden sm:inline-block">{step.name}</span>
              </button>
            </motion.li>
          )
        })}
      </ol>
    </nav>
  )
}

const defaultClasses = {
  img: 'rounded-xl border border-white/10 shadow-2xl shadow-black/40 object-cover',
  step1img1: 'w-[50%] left-0 top-[15%]',
  step1img2: 'w-[60%] left-[40%] top-[35%]',
  step2img1: 'w-[50%] left-[5%] top-[20%]',
  step2img2: 'w-[40%] left-[55%] top-[45%]',
  step3img: 'w-[90%] left-[5%] top-[25%]',
  step4img: 'w-[90%] left-[5%] top-[25%]',
} as const

export function FeatureCarousel({
  image,
  steps = defaultSteps,
  interval = 5000,
  step1img1Class = defaultClasses.step1img1,
  step1img2Class = defaultClasses.step1img2,
  step2img1Class = defaultClasses.step2img1,
  step2img2Class = defaultClasses.step2img2,
  step3imgClass = defaultClasses.step3img,
  step4imgClass = defaultClasses.step4img,
  className,
}: FeatureCarouselProps) {
  const reducedMotion = useReducedMotion()
  const [paused, setPaused] = useState(false)
  const { currentNumber: step, setStep } = useNumberCycler(steps.length, interval, paused || reducedMotion)

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <div className="relative h-full w-full">
            <AnimatedStepImage
              alt={image.alt}
              className={cn(defaultClasses.img, step1img1Class)}
              src={image.step1img1}
              preset="slideInLeft"
            />
            <AnimatedStepImage
              alt={image.alt}
              className={cn(defaultClasses.img, step1img2Class)}
              src={image.step1img2}
              preset="slideInRight"
              delay={0.1}
            />
          </div>
        )
      case 1:
        return (
          <div className="relative h-full w-full">
            <AnimatedStepImage
              alt={image.alt}
              className={cn(defaultClasses.img, step2img1Class)}
              src={image.step2img1}
              preset="fadeInScale"
            />
            <AnimatedStepImage
              alt={image.alt}
              className={cn(defaultClasses.img, step2img2Class)}
              src={image.step2img2}
              preset="fadeInScale"
              delay={0.1}
            />
          </div>
        )
      case 2:
        return (
          <AnimatedStepImage
            alt={image.alt}
            className={cn(defaultClasses.img, step3imgClass)}
            src={image.step3img}
            preset="fadeInScale"
          />
        )
      case 3:
        return (
          <AnimatedStepImage
            alt={image.alt}
            className={cn(defaultClasses.img, step4imgClass)}
            src={image.step4img}
            preset="fadeInScale"
          />
        )
      default:
        return null
    }
  }

  return (
    <div
      className={cn('mx-auto flex w-full max-w-4xl flex-col gap-10 p-4', className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <FeatureCard step={step} steps={steps}>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            {...ANIMATION_PRESETS.fadeInScale}
            className="absolute h-full w-full"
          >
            {renderStepContent()}
          </motion.div>
        </AnimatePresence>
      </FeatureCard>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <StepsNav current={step} onChange={setStep} steps={steps} />
      </motion.div>
    </div>
  )
}
