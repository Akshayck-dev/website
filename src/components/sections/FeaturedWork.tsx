// @ts-nocheck
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { caseStudies } from '@/data/content'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { HorizontalScrollCarousel, type HorizontalCard } from '@/components/ui/horizontal-scroll-carousel'

const imageUrls = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2669&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600596542811-ffad6c7680e1?q=80&w=2675&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
];

const horizontalCaseStudies: HorizontalCard[] = caseStudies.map((study, index) => ({
  id: study.id,
  title: study.title,
  description: study.description,
  image: imageUrls[index],
}))

export function FeaturedWork() {
  return (
    <HorizontalScrollCarousel 
      cards={horizontalCaseStudies} 
      title="Projects that define categories" 
      subtitle="Featured Work" 
    />
  )
}
