import { FeatureCarousel } from '@/components/ui/animated-feature-carousel'
import { serviceCarouselImages, serviceCarouselSteps } from '@/data/content'

export function AnimatedFeatureCarouselDemo() {
  return (
    <div className="w-full py-20 bg-obsidian">
      <FeatureCarousel image={serviceCarouselImages} steps={serviceCarouselSteps} />
    </div>
  )
}
