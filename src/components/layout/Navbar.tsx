import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu } from 'lucide-react'
import { cn } from '../../lib/utils'
import { navLinks } from '../../data/content'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { MagneticButton } from '../ui/MagneticButton'
import { AntiGravityCanvas, ParticleMenuContent } from '../ui/particle-menu'

export function Navbar() {
  const scrolled = useScrollPosition(50)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled && !menuOpen
            ? 'glass py-3 md:py-4 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'bg-transparent py-5 md:py-6'
        )}
      >
        <nav className="container-luxury flex items-center justify-between relative z-50">
          <a
            href="/"
            className="font-display text-2xl md:text-3xl tracking-tight transition-colors duration-300 flex items-center gap-2 group"
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-blue-500 font-bold group-hover:text-blue-400 transition-colors">WebApp</span>
            <span className="text-snow group-hover:text-white transition-colors">Orbis</span>
          </a>

          {/* Desktop Links (Hidden when menu is open) */}
          {!menuOpen && (
            <ul className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-mist hover:text-snow transition-colors duration-300 tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}

          <div className="flex items-center gap-4">
            {!menuOpen && (
              <div className="hidden lg:block">
                <MagneticButton variant="primary" size="sm">
                  Start a Project
                </MagneticButton>
              </div>
            )}
            
            <button
              className="p-2 text-snow hover:text-gold transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? null : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-black"
          >
            <AntiGravityCanvas />
            <ParticleMenuContent onClose={() => setMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
