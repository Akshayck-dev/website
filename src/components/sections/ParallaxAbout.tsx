import { TextParallaxContentScroll } from '@/components/ui/text-parallax-content-scroll'
import { aboutParallaxSections } from '@/data/content'

export function ParallaxAbout() {
  return (
    <section id="about">
      <TextParallaxContentScroll sections={aboutParallaxSections} />
    </section>
  )
}
