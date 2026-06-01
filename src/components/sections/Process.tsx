import { motion } from 'framer-motion'
import { Search, Map, Palette, Rocket, RefreshCw, type LucideIcon } from 'lucide-react'
import { processSteps } from '@/data/content'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { BentoGrid } from '@/components/ui/BentoGrid'
import { GlowCard } from '@/components/ui/spotlight-card'
import { scaleIn } from '@/lib/animations'
import { ClientFeedback } from '@/components/ui/testimonial'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const iconMap: Record<string, LucideIcon> = {
  Search,
  Map,
  Palette,
  Rocket,
  RefreshCw,
}

export function Process() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="process" className="section-padding">
      <div className="container-luxury">
        <SectionHeader
          label="Our Process"
          title="A refined approach to digital excellence"
          description="Our methodology has been honed through hundreds of engagements, delivering consistent excellence without sacrificing creativity."
          align="center"
        />

        <BentoGrid className="lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = iconMap[step.icon]
            return (
              <motion.div
                key={step.step}
                variants={scaleIn}
                initial={reducedMotion ? 'visible' : 'hidden'}
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: index * 0.08 }}
                className={step.span}
              >
                <GlowCard
                  glowColor={index % 2 === 0 ? 'gold' : 'purple'}
                  customSize
                  className="w-full h-full min-h-[220px] p-6 md:p-8"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-xs font-medium text-gold tracking-[0.2em]">
                        {step.step}
                      </span>
                      <div className="flex-1 h-px bg-white/6" />
                      <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center">
                        <Icon size={18} className="text-mist" />
                      </div>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl text-snow mb-3">
                      {step.title}
                    </h3>
                    <p className="text-mist text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </GlowCard>
              </motion.div>
            )
          })}
        </BentoGrid>

        <div className="mt-32">
          <ClientFeedback />
        </div>
      </div>
    </section>
  )
}
