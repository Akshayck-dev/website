import { type ReactNode, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { aboutParallaxSections } from '@/data/content'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { SplitText } from '@/components/ui/SplitText'

const IMG_PADDING = 12

export type TextParallaxContentProps = {
  imgUrl: string
  subheading: string
  heading: string
  children: ReactNode
  className?: string
}

export function TextParallaxContent({
  imgUrl,
  subheading,
  heading,
  children,
  className,
}: TextParallaxContentProps) {
  return (
    <div
      className={className}
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  )
}

type StickyImageProps = {
  imgUrl: string
}

function StickyImage({ imgUrl }: StickyImageProps) {
  const reducedMotion = useReducedMotion()
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], reducedMotion ? [1, 1] : [1, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0.5, 0.5] : [1, 0])

  return (
    <motion.div
      ref={targetRef}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-obsidian/70"
        style={{ opacity }}
      />
    </motion.div>
  )
}

type OverlayCopyProps = {
  subheading: string
  heading: string
}

function OverlayCopy({ subheading, heading }: OverlayCopyProps) {
  const reducedMotion = useReducedMotion()
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [200, -200])
  const opacity = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6],
    reducedMotion ? [1, 1, 1] : [0, 1, 0]
  )

  return (
    <motion.div
      ref={targetRef}
      style={{ y, opacity }}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-start justify-end pb-32 text-snow px-8 md:px-16 lg:px-32 max-w-6xl"
    >
      <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold font-medium">
        {subheading}
      </p>
      <SplitText
        text={heading}
        className="font-display text-5xl tracking-tight md:text-6xl lg:text-8xl drop-shadow-2xl"
        delay={50}
        duration={1}
        tag="p"
        textAlign="left"
      />
    </motion.div>
  )
}

export type ParallaxContentBlockProps = {
  title: string
  paragraphs: string[]
  ctaLabel?: string
  ctaHref?: string
  metrics?: { label: string; value: string }[]
  showCta?: boolean
}

export function ParallaxContentBlock({
  title,
  paragraphs,
  ctaLabel = 'Learn more',
  ctaHref = '#services',
  metrics,
  showCta = true,
}: ParallaxContentBlockProps) {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-32 pt-16 md:grid-cols-12 md:px-12 relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-6 right-6 md:left-12 md:right-12 h-[1px] bg-gradient-to-r from-gold/50 via-white/10 to-transparent" />
      
      {/* Left Column: Sticky Title */}
      <div className="col-span-1 md:col-span-5 relative">
        <div className="md:sticky md:top-32 flex flex-col gap-6">
          <SplitText
            text={title}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-snow leading-tight tracking-tight"
            delay={50}
            duration={1}
            tag="h2"
            textAlign="left"
          />
          {showCta && (
            <a href={ctaHref} className="hidden md:inline-block w-fit">
              <MagneticButton variant="secondary" size="lg" type="button">
                {ctaLabel}
                <ArrowUpRight size={18} />
              </MagneticButton>
            </a>
          )}
        </div>
      </div>

      {/* Right Column: Flowing Content */}
      <div className="col-span-1 md:col-span-7 flex flex-col gap-8 md:pl-8 lg:pl-16">
        {paragraphs.map((paragraph, index) => (
          <p 
            key={paragraph.slice(0, 32)} 
            className={
              index === 0 
                ? "text-2xl md:text-3xl lg:text-4xl text-snow font-light leading-snug tracking-tight" // Lead paragraph
                : "text-lg md:text-xl text-mist leading-relaxed font-light" // Subsequent paragraphs
            }
          >
            {paragraph}
          </p>
        ))}
        
        {metrics && metrics.length > 0 && (
          <div className="flex flex-wrap gap-12 mt-8 py-8 border-t border-white/10">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col gap-2">
                <p className="font-display text-4xl md:text-5xl text-gold">{metric.value}</p>
                <p className="text-sm md:text-base text-snow/60 uppercase tracking-widest font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Mobile CTA (hidden on desktop) */}
        {showCta && (
          <a href={ctaHref} className="inline-block mt-8 md:hidden">
            <MagneticButton variant="secondary" size="lg" type="button">
              {ctaLabel}
              <ArrowUpRight size={18} />
            </MagneticButton>
          </a>
        )}
      </div>
    </div>
  )
}

export type ParallaxSection = {
  imgUrl: string
  subheading: string
  heading: string
  contentTitle: string
  paragraphs: string[]
  ctaLabel?: string
  ctaHref?: string
  metrics?: { label: string; value: string }[]
  showCta?: boolean
}

export function TextParallaxContentScroll({
  sections,
  className,
}: {
  sections: ParallaxSection[]
  className?: string
}) {
  return (
    <div className={className ?? 'bg-obsidian'}>
      {sections.map((section) => (
        <TextParallaxContent
          key={`${section.subheading}-${section.heading}`}
          imgUrl={section.imgUrl}
          subheading={section.subheading}
          heading={section.heading}
        >
          <ParallaxContentBlock
            title={section.contentTitle}
            paragraphs={section.paragraphs}
            ctaLabel={section.ctaLabel}
            ctaHref={section.ctaHref}
            metrics={section.metrics}
            showCta={section.showCta ?? true}
          />
        </TextParallaxContent>
      ))}
    </div>
  )
}

export function TextParallaxContentExample() {
  return <TextParallaxContentScroll sections={aboutParallaxSections} />
}
