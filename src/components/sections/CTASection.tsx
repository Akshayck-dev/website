import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Spotlight } from '@/components/ui/Spotlight'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function CTASection() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="contact" className="section-padding">
      <div className="container-luxury">
        <SectionReveal>
          <div className="relative rounded-3xl overflow-hidden">
            <Spotlight />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse at 50% 0%, rgba(201,169,98,0.12) 0%, transparent 60%), linear-gradient(180deg, rgba(26,26,26,0.8) 0%, rgba(10,10,10,0.95) 100%)',
              }}
            />
            <div className="absolute inset-0 border border-white/6 rounded-3xl pointer-events-none" />

            <div className="relative z-10 px-8 py-20 md:px-16 md:py-28 lg:px-24 lg:py-32 text-center">
              <motion.div
                variants={staggerContainer}
                initial={reducedMotion ? 'visible' : 'hidden'}
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
              >
                <motion.span
                  variants={fadeUp}
                  className="inline-block text-xs uppercase tracking-[0.25em] text-gold font-medium mb-6"
                >
                  Ready to begin?
                </motion.span>

                <motion.h2
                  variants={fadeUp}
                  className="font-display text-4xl md:text-5xl lg:text-6xl text-snow tracking-tight leading-[1.1] mb-6 max-w-3xl mx-auto"
                >
                  Let&apos;s create something{' '}
                  <span className="italic gradient-gold">extraordinary</span>{' '}
                  together.
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  className="text-mist text-lg md:text-xl max-w-xl mx-auto mb-10 md:mb-12"
                >
                  Every great brand story starts with a conversation. Tell us about
                  your vision, and we&apos;ll show you what&apos;s possible.
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
                  <MagneticButton variant="primary" size="lg">
                    Schedule a Consultation
                    <ArrowRight size={18} />
                  </MagneticButton>
                  <MagneticButton variant="secondary" size="lg">
                    View Case Studies
                  </MagneticButton>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
