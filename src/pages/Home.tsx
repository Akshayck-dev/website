import { Hero } from '@/components/sections/Hero'
import { HomeServices } from '@/components/sections/HomeServices'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Process } from '@/components/sections/Process'
import { FeaturedWork } from '@/components/sections/FeaturedWork'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTASection } from '@/components/sections/CTASection'

export function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <HomeServices />
      <WhyChooseUs />
      <Process />
      <FeaturedWork />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
