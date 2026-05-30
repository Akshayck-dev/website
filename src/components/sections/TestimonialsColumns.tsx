import { TestimonialsColumn } from '@/components/ui/testimonials-columns-1'
import { columnTestimonials } from '@/data/content'

const firstColumn = columnTestimonials.slice(0, 3)
const secondColumn = columnTestimonials.slice(3, 6)
const thirdColumn = columnTestimonials.slice(6, 9)

export function TestimonialsColumns() {
  return (
    <div className="pb-16 md:pb-20">
      <div className="container-luxury">
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
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
    </div>
  )
}
