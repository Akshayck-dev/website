import { ArrowUpRight } from 'lucide-react'
import { footerLinks } from '../../data/content'
import { SectionReveal } from '../ui/SectionReveal'
import { MagneticButton } from '../ui/MagneticButton'

export function Footer() {
  return (
    <footer className="border-t border-white/6 bg-void">
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 md:mb-20">
          <SectionReveal className="lg:col-span-4">
            <a href="#" className="font-display text-3xl text-snow tracking-tight inline-block mb-6">
              Aether
            </a>
            <p className="text-mist leading-relaxed mb-8 max-w-sm">
              A luxury digital marketing agency crafting premium brand experiences
              for the world&apos;s most discerning clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-snow placeholder:text-mist/60 text-sm focus:outline-none focus:border-gold/40 transition-colors"
                aria-label="Email for newsletter"
              />
              <MagneticButton variant="primary" size="sm">
                Subscribe
              </MagneticButton>
            </div>
          </SectionReveal>

          <SectionReveal className="lg:col-span-2 lg:col-start-6" delay={0.1}>
            <h3 className="text-xs uppercase tracking-[0.2em] text-mist mb-6">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-pearl/70 hover:text-snow transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </SectionReveal>

          <SectionReveal className="lg:col-span-2" delay={0.15}>
            <h3 className="text-xs uppercase tracking-[0.2em] text-mist mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-pearl/70 hover:text-snow transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </SectionReveal>

          <SectionReveal className="lg:col-span-2" delay={0.2}>
            <h3 className="text-xs uppercase tracking-[0.2em] text-mist mb-6">Connect</h3>
            <ul className="space-y-4">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-pearl/70 hover:text-snow transition-colors duration-300 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-300"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </SectionReveal>
        </div>

        <SectionReveal delay={0.25}>
          <div className="pt-8 border-t border-white/6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-mist/60">
              &copy; {new Date().getFullYear()} Aether Agency. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm text-mist/60 hover:text-snow transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-mist/60 hover:text-snow transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </footer>
  )
}
