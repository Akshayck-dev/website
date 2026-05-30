import { serviceCarouselImages, serviceCarouselSteps } from '@/data/content'
import { HorizontalScrollCarousel, type HorizontalCard } from '@/components/ui/horizontal-scroll-carousel'

export function Services() {
  // Map existing content into the new Horizontal Scroll format
  const horizontalCards: HorizontalCard[] = serviceCarouselSteps.map((step, index) => {
    const images = [
      serviceCarouselImages.step1img1,
      serviceCarouselImages.step2img1,
      serviceCarouselImages.step3img,
      serviceCarouselImages.step4img,
    ]
    
    return {
      id: step.id,
      title: step.title,
      description: step.description,
      image: images[index] || images[0],
    }
  })

  return (
    <section id="services" className="bg-obsidian">
      {/* Cinematic Horizontal Scroll Gallery (Desktop) / Vertical Stack (Mobile) */}
      <HorizontalScrollCarousel 
        cards={horizontalCards} 
        subtitle="Services"
        title="Comprehensive solutions for premium brands."
      />
    </section>
  )
}
