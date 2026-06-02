// @ts-nocheck
import { motion } from 'framer-motion'
import { Search, Map, Palette, Rocket, RefreshCw } from 'lucide-react'
import { BentoGrid, type BentoItem } from '@/components/ui/bento-grid'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const processBentoItems: BentoItem[] = [
    {
        title: "Discovery",
        meta: "Step 01",
        description: "Deep immersion into your brand DNA, market landscape, and audience psychology to uncover strategic opportunities.",
        icon: <Search className="w-5 h-5 text-snow" />,
        status: "Start",
        tags: ["Research", "Analysis", "Data"],
        colSpan: 2,
        hasPersistentHover: true,
    },
    {
        title: "Strategy",
        meta: "Step 02",
        description: "Comprehensive roadmap development with clear KPIs, creative direction, and channel architecture.",
        icon: <Map className="w-5 h-5 text-snow" />,
        tags: ["Planning", "Roadmap"],
    },
    {
        title: "Creation",
        meta: "Step 03",
        description: "Meticulous execution across design, development, and content with uncompromising quality standards.",
        icon: <Palette className="w-5 h-5 text-snow" />,
        tags: ["Design", "Dev", "Content"],
        colSpan: 2,
    },
    {
        title: "Launch",
        meta: "Step 04",
        description: "Precision deployment with rigorous testing, optimization, and seamless rollout across all channels.",
        icon: <Rocket className="w-5 h-5 text-snow" />,
        status: "Deploy",
        tags: ["Testing", "Rollout"],
    },
    {
        title: "Evolution",
        meta: "Step 05",
        description: "Continuous refinement through data analysis, A/B testing, and strategic iteration for sustained growth.",
        icon: <RefreshCw className="w-5 h-5 text-snow" />,
        status: "Grow",
        tags: ["Iteration", "Scale"],
        colSpan: 2,
    },
];

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

        <BentoGrid items={processBentoItems} />
      </div>
    </section>
  )
}
