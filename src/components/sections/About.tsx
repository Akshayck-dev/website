import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { SectionReveal } from '../ui/SectionReveal'
import { slideInLeft, slideInRight } from '../../lib/animations'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function About() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="about" className="section-padding">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <SectionHeader
              label="About Us"
              title="Where strategy meets artistry"
            />
          </div>

          <div className="lg:col-span-7 space-y-8">
            <motion.p
              variants={slideInRight}
              initial={reducedMotion ? 'visible' : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="text-xl md:text-2xl text-pearl leading-relaxed font-display"
            >
              MBWS is a collective of strategists, designers, and technologists
              united by a singular obsession: creating digital experiences worthy of
              the world&apos;s most exceptional brands.
            </motion.p>

            <motion.p
              variants={slideInRight}
              initial={reducedMotion ? 'visible' : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.1 }}
              className="text-mist text-lg leading-relaxed"
            >
              Founded in 2018, we&apos;ve partnered with luxury fashion houses,
              premium hospitality groups, and forward-thinking enterprises to
              redefine what digital marketing can achieve. Our approach blends
              editorial sensibility with performance rigor — because beautiful
              work should also drive measurable results.
            </motion.p>

            <motion.div
              variants={slideInLeft}
              initial={reducedMotion ? 'visible' : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-8 pt-8"
            >
              <div>
                <p className="font-display text-5xl text-gold mb-2">7+</p>
                <p className="text-sm text-mist">Years of Excellence</p>
              </div>
              <div>
                <p className="font-display text-5xl text-gold mb-2">35</p>
                <p className="text-sm text-mist">Global Team Members</p>
              </div>
            </motion.div>
          </div>
        </div>

        <SectionReveal className="mt-20 md:mt-28">
          <div className="relative rounded-3xl overflow-hidden aspect-[21/9] glass">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(135deg, rgba(201,169,98,0.08) 0%, rgba(10,10,10,0.9) 50%, rgba(201,169,98,0.05) 100%)',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-display text-3xl md:text-5xl lg:text-6xl text-snow/20 tracking-wider text-center px-6">
                Crafting the extraordinary, daily.
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
