import { motion } from 'framer-motion'
import { Search, Map, Palette, Rocket, RefreshCw, type LucideIcon } from 'lucide-react'
import { processSteps } from '@/data/content'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { scaleIn } from '@/lib/animations'
import { FeatureCarousel } from '@/components/ui/feature-carousel'
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

        <FeatureCarousel />
      </div>
    </section>
  )
}
