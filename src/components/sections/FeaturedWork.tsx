import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { caseStudies } from '@/data/content'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { scaleIn } from '@/lib/animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'
import { ParallaxScrollFeatureSection, type ParallaxSection } from '@/components/ui/parallax-scroll-feature-section'

const imageUrls = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2669&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600596542811-ffad6c7680e1?q=80&w=2675&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
];

const parallaxCaseStudies: ParallaxSection[] = caseStudies.map((study, index) => ({
  id: study.id,
  title: study.title,
  description: study.description,
  category: study.category,
  metrics: study.metrics,
  imageUrl: imageUrls[index],
  reverse: index % 2 !== 0,
}))

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

        <div className="mt-20">
          <ParallaxScrollFeatureSection sections={parallaxCaseStudies} />
        </div>
      </div>
    </section>
  )
}
