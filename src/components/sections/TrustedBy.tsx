import { brandLogos } from '@/data/content'
import { LogoCloud } from '@/components/ui/logo-cloud-3'
import { SectionReveal } from '@/components/ui/SectionReveal'

export function TrustedBy() {
  return (
    <section className="py-16 md:py-20 border-y border-white/6 bg-charcoal/30">
      <div className="container-luxury">
        <SectionReveal>
          <p className="text-center text-xs uppercase tracking-[0.2em] text-mist mb-10 md:mb-12">
            Trusted by industry leaders
          </p>
        </SectionReveal>
        <LogoCloud logos={brandLogos} speed={60} speedOnHover={20} />
      </div>
    </section>
  )
}
