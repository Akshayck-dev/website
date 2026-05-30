import { SectionHeader } from '@/components/ui/SectionHeader'
import { TestimonialsColumns } from '@/components/sections/TestimonialsColumns'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-obsidian">
      <div className="section-padding pb-12 md:pb-16">
        <div className="container-luxury">
          <SectionHeader
            label="Testimonials"
            title="Voices from our partners"
            description="The relationships we build are as important as the work we create. Here's what our clients have to say."
            align="center"
          />
        </div>
      </div>
      <TestimonialsColumns />
    </section>
  )
}
