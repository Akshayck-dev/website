import { Header } from '@/components/ui/header-3'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'

import { ParallaxAbout } from '@/components/sections/ParallaxAbout'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import { FeaturedWork } from '@/components/sections/FeaturedWork'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTASection } from '@/components/sections/CTASection'
import { useLenis } from '@/hooks/useLenis'

function App() {
  useLenis()

  return (
    <>
      <Header />
      <main>
        {/* 1. Entry — sparkles hero + stats */}
        <Hero />


        {/* 3. Story — editorial parallax scroll */}
        <ParallaxAbout />

        {/* 4. Offer — carousel showcase + service bento grid */}
        <Services />

        {/* 5. Method — process bento grid */}
        <Process />

        {/* 6. Proof — case study cards */}
        <FeaturedWork />

        {/* 7. Trust — scrolling testimonial columns */}
        <TestimonialsSection />

        {/* 8. Convert — spotlight CTA */}
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

export default App
