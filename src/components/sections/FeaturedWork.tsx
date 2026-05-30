import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { caseStudies } from '@/data/content'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { scaleIn } from '@/lib/animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

export function FeaturedWork() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="work" className="section-padding bg-charcoal/20">
      <div className="container-luxury">
        <SectionHeader
          label="Featured Work"
          title="Projects that define categories"
          description="Selected case studies showcasing our approach to elevating premium brands through strategic digital transformation."
        />

        <div className="space-y-6 md:space-y-8">
          {caseStudies.map((project, index) => (
            <motion.article
              key={project.id}
              variants={scaleIn}
              initial={reducedMotion ? 'visible' : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <a
                href="#"
                className={cn(
                  'block rounded-3xl overflow-hidden glass glass-hover',
                  'transition-all duration-500 hover:-translate-y-1',
                  'hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]'
                )}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div
                    className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px] overflow-hidden"
                    style={{ background: project.image }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent lg:bg-gradient-to-r" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-16 h-16 rounded-full bg-snow/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <ArrowUpRight size={28} className="text-snow" />
                      </div>
                    </div>
                  </div>

                  <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <span className="text-xs uppercase tracking-[0.2em] text-gold mb-4">
                      {project.category}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl text-snow mb-4 group-hover:text-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-mist text-base md:text-lg leading-relaxed mb-8 max-w-md">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-8">
                      {project.metrics.map((metric) => (
                        <div key={metric.label}>
                          <p className="font-display text-2xl md:text-3xl text-snow mb-1">
                            {metric.value}
                          </p>
                          <p className="text-sm text-mist">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
