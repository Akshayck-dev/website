import { ParallaxAbout } from '@/components/sections/ParallaxAbout'
import { WhyTrustUs } from '@/components/sections/WhyTrustUs'

export function About() {
  return (
    <div className="flex flex-col min-h-screen pt-20 bg-obsidian">
      <ParallaxAbout />
      <WhyTrustUs />
    </div>
  )
}
