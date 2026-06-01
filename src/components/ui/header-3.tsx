'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

const NAV_LINKS = [
  { label: 'About',        href: '/about' },
  { label: 'Services',     href: '/services' },
  { label: 'Our Works',    href: '#' },
  { label: 'Solutions',    href: '#' },
  { label: 'Career',       href: '#' },
  { label: 'Technologies', href: '#' },
];

const STATS = [
  { value: '200+', label: 'Projects launched successfully across the globe' },
  { value: '50M+', label: 'Daily customer engagement through our projects' },
  { value: '100+', label: 'Digital transformation stories that made a difference' },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);
  const location = useLocation();

  React.useEffect(() => { setOpen(false); }, [location.pathname]);
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 z-50 w-full border-b border-transparent transition-all duration-500',
          {
            'bg-obsidian/80 backdrop-blur-xl border-white/5 shadow-lg': scrolled && !open,
            'bg-transparent': open,
          }
        )}
      >
        <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="relative z-[60] hover:opacity-80 transition-opacity duration-300 flex items-center"
          >
            <img src={logo} alt="WebApp Orbis Logo" className="h-16 w-auto object-contain drop-shadow-lg" />
          </Link>

          {/* Desktop Nav Links (hidden when menu is open) */}
          <AnimatePresence>
            {!open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="hidden md:flex items-center gap-1"
              >
                {NAV_LINKS.map((link) =>
                  link.href.startsWith('/') ? (
                    <Link key={link.label} to={link.href}
                      className="px-4 py-2 text-base font-medium text-snow/60 hover:text-gold transition-colors duration-200">
                      {link.label}
                    </Link>
                  ) : (
                    <a key={link.label} href={link.href}
                      className="px-4 py-2 text-base font-medium text-snow/60 hover:text-gold transition-colors duration-200">
                      {link.label}
                    </a>
                  )
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Menu toggle button */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="relative z-[60] flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-charcoal/40 text-snow text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:border-gold/40 hover:bg-gold/5"
          >
            <span className="hidden md:block">{open ? 'CLOSE' : 'MENU'}</span>
            {/* Animated hamburger/X */}
            <span className="relative w-5 h-5 flex flex-col items-center justify-center gap-[5px]">
              <span className={cn('block h-[1.5px] w-5 bg-snow transition-all duration-300 origin-center', open ? 'rotate-45 translate-y-[3.5px]' : '')} />
              <span className={cn('block h-[1.5px] w-5 bg-snow transition-all duration-300', open ? 'opacity-0 scale-x-0' : '')} />
              <span className={cn('block h-[1.5px] w-5 bg-snow transition-all duration-300 origin-center', open ? '-rotate-45 -translate-y-[3.5px]' : '')} />
            </span>
          </button>
        </nav>
      </header>

      <FullScreenMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

/* ─────────────────────────────────────────────────── */
/*  Full-Screen Cinematic Menu                         */
/* ─────────────────────────────────────────────────── */

const overlayVariants = {
  closed: { clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] } },
  open:   { clipPath: 'inset(0 0 0% 0)',   transition: { duration: 0.7,  ease: [0.76, 0, 0.24, 1] } },
};

const linkVariants = {
  closed: { y: 40, opacity: 0 },
  open: (i: number) => ({
    y: 0, opacity: 1,
    transition: { delay: 0.3 + i * 0.07, duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  }),
};

const panelVariants = {
  closed: { opacity: 0, x: -24 },
  open: { opacity: 1, x: 0, transition: { delay: 0.35, duration: 0.55, ease: 'easeOut' } },
};

function FullScreenMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [hovered, setHovered] = React.useState<number | null>(null);

  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="fullscreen-menu"
          variants={overlayVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed inset-0 z-40 overflow-hidden"
          style={{ background: '#07080e' }}
        >
          {/* Blue glowing orb — bottom right */}
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.35) 0%, rgba(99,102,241,0.15) 50%, transparent 75%)' }}
          />
          {/* Subtle purple top-left glow */}
          <div className="absolute top-0 left-1/3 w-[400px] h-[300px] rounded-full pointer-events-none opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)' }}
          />

          {/* Close button — top right */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 z-10 flex items-center justify-center w-10 h-10 text-snow/50 hover:text-snow transition-colors duration-200"
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Main layout: left panel + right nav */}
          <div className="h-full flex flex-col md:flex-row">

            {/* ── Left Panel: Impact story + stats ── */}
            <motion.div
              variants={panelVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex-1 flex flex-col justify-center px-10 md:px-16 lg:px-20 pt-24 md:pt-0 pb-16 md:pb-0"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-snow leading-tight mb-6">
                Our Impact
              </h2>
              <p className="text-snow/40 text-sm md:text-base leading-relaxed max-w-sm mb-12">
                Every innovation that happens here is out of a quest to get better at what we are already doing. We deliver ideas that make a difference, create experiences that transform lives and build ecosystems that foster progress.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-10 mb-12">
                {STATS.map((stat) => (
                  <div key={stat.value} className="flex flex-col gap-1">
                    <span className="text-3xl md:text-4xl font-display text-snow">{stat.value}</span>
                    <span className="text-snow/40 text-xs leading-snug max-w-[140px]">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                to="/about"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-6 py-3 border border-snow/30 text-snow text-sm font-medium hover:border-snow hover:bg-white/5 transition-all duration-300 w-fit"
              >
                Our Impact <span className="text-lg">›</span>
              </Link>
            </motion.div>

            {/* ── Right Panel: Nav links ── */}
            <div className="flex flex-col justify-center px-10 md:px-16 lg:px-20 pt-4 md:pt-0 pb-16 md:pb-0 gap-1 md:gap-2 md:min-w-[380px] lg:min-w-[440px]">
              {NAV_LINKS.map((link, i) => {
                const isActive = hovered === null ? i === 0 : hovered === i;
                const content = (
                  <motion.div
                    key={link.label}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className="overflow-hidden"
                  >
                    <span className={cn(
                      'block text-4xl md:text-5xl lg:text-6xl font-display leading-tight py-1 md:py-2 transition-colors duration-300 cursor-pointer',
                      isActive ? 'text-snow' : 'text-snow/25'
                    )}>
                      {link.label}
                    </span>
                  </motion.div>
                );

                return link.href.startsWith('/') ? (
                  <Link key={link.label} to={link.href} onClick={onClose}>{content}</Link>
                ) : (
                  <a key={link.label} href={link.href} onClick={onClose}>{content}</a>
                );
              })}
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

/* ─────────────────────────────────────── */
/*  useScroll hook                         */
/* ─────────────────────────────────────── */

function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false);
  const onScroll = React.useCallback(() => setScrolled(window.scrollY > threshold), [threshold]);
  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);
  React.useEffect(() => { onScroll(); }, [onScroll]);
  return scrolled;
}
