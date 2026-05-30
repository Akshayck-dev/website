import { motion } from 'motion/react'
import { TestimonialsColumn } from '@/components/ui/testimonials-columns-1'
import { columnTestimonials } from '@/data/content'

const firstColumn = columnTestimonials.slice(0, 3)
const secondColumn = columnTestimonials.slice(3, 6)
const thirdColumn = columnTestimonials.slice(6, 9)

export function TestimonialsColumnsDemo() {
  return (
    <section className="section-padding bg-obsidian relative">
      <div className="container-luxury z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-white/10 py-1 px-4 rounded-lg text-xs uppercase tracking-[0.2em] text-gold">
              Testimonials
            </div>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-snow tracking-tight mt-5 text-center">
            What our partners say
          </h2>
          <p className="text-center mt-5 text-mist">
            See what our clients have to say about working with Aether.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  )
}
