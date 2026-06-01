'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Instagram, Linkedin, Twitter } from 'lucide-react';
import logo from '../../assets/logo.png';

const NAV_LINKS = [
  { label: 'About',        href: '/about' },
  { label: 'Services',     href: '/services' },
  { label: 'Our Works',    href: '#' },
  { label: 'Solutions',    href: '#' },
  { label: 'Career',       href: '#' },
  { label: 'Technologies', href: '#' },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);
  const location = useLocation();

  // Close menu on route change
  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

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
                    <Link
                      key={link.label}
                      to={link.href}
                      className="px-4 py-2 text-base font-medium text-snow/70 hover:text-gold transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      className="px-4 py-2 text-base font-medium text-snow/70 hover:text-gold transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  )
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Right side: phone + menu toggle */}
          <div className="flex items-center gap-4 relative z-[60]">
            <a
              href="tel:+1234567890"
              className={cn(
                'hidden md:flex items-center gap-2 text-sm font-medium transition-colors duration-300',
                open ? 'text-snow/40 hover:text-snow' : 'text-snow/60 hover:text-gold'
              )}
            >
              <Phone className="size-4" />
              <span>Let&apos;s Talk</span>
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="fullscreen-menu"
              aria-label="Toggle menu"
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 text-sm font-semibold tracking-widest uppercase',
                open
                  ? 'border-white/20 bg-white/5 text-snow'
                  : 'border-white/20 bg-charcoal/40 text-snow hover:border-gold/40 hover:bg-gold/5'
              )}
            >
              <span className="hidden md:block">{open ? 'CLOSE' : 'MENU'}</span>
              <MenuToggleIcon open={open} className="size-5 text-snow" duration={300} />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-Screen Cinematic Overlay */}
      <FullScreenMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

/* ─────────────────────────────────────────── */
/*  Full-Screen Cinematic Overlay              */
/* ─────────────────────────────────────────── */

const overlayVariants = {
  closed: { clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
  open:   { clipPath: 'inset(0 0 0% 0)',   transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
};

const linkVariants = {
  closed: { y: 80, opacity: 0 },
  open: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.35 + i * 0.08, duration: 0.55, ease: [0.33, 1, 0.68, 1] },
  }),
};

const fadeIn = {
  closed: { opacity: 0, y: 12 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.55 + i * 0.06, duration: 0.4, ease: 'easeOut' },
  }),
};

function FullScreenMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          id="fullscreen-menu"
          key="fullscreen-menu"
          variants={overlayVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed inset-0 z-40 bg-obsidian flex flex-col overflow-hidden"
        >
          {/* Background decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-blue-900/10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/3 rounded-full blur-[120px] pointer-events-none" />

          {/* Divider line */}
          <div className="absolute top-20 left-0 right-0 h-px bg-white/5" />

          {/* Content */}
          <div className="relative flex-1 flex flex-col md:flex-row gap-0 pt-24 px-8 md:px-16 lg:px-24 pb-8 md:pb-16 overflow-auto">

            {/* Left: Big Nav Links */}
            <div className="flex-1 flex flex-col justify-center gap-2 md:gap-0">
              {NAV_LINKS.map((link, i) =>
                link.href.startsWith('/') ? (
                  <motion.div
                    key={link.label}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="overflow-hidden"
                  >
                    <Link
                      to={link.href}
                      onClick={onClose}
                      className="group block py-3 md:py-4"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="text-gold/40 text-sm font-mono tracking-widest group-hover:text-gold transition-colors duration-300">
                          0{i + 1}
                        </span>
                        <span className="text-4xl md:text-6xl lg:text-7xl font-display text-snow/80 group-hover:text-snow transition-colors duration-300 tracking-tight leading-none group-hover:italic">
                          {link.label}
                        </span>
                      </span>
                      <div className="h-px w-0 group-hover:w-full bg-gold/30 transition-all duration-500 mt-2" />
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key={link.label}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="overflow-hidden"
                  >
                    <a href={link.href} onClick={onClose} className="group block py-3 md:py-4">
                      <span className="flex items-baseline gap-4">
                        <span className="text-gold/40 text-sm font-mono tracking-widest group-hover:text-gold transition-colors duration-300">
                          0{i + 1}
                        </span>
                        <span className="text-4xl md:text-6xl lg:text-7xl font-display text-snow/80 group-hover:text-snow transition-colors duration-300 tracking-tight leading-none group-hover:italic">
                          {link.label}
                        </span>
                      </span>
                      <div className="h-px w-0 group-hover:w-full bg-gold/30 transition-all duration-500 mt-2" />
                    </a>
                  </motion.div>
                )
              )}
            </div>

            {/* Right: Contact & Socials (visible on md+) */}
            <div className="hidden md:flex flex-col justify-end gap-10 min-w-[260px] pb-4">
              <motion.div custom={0} variants={fadeIn} initial="closed" animate="open" exit="closed" className="flex flex-col gap-3">
                <p className="text-gold/60 text-xs tracking-[0.25em] uppercase font-medium">Contact</p>
                <a href="mailto:hello@webapporbis.com" className="flex items-center gap-2 text-snow/60 hover:text-gold transition-colors text-sm">
                  <Mail className="size-4" />
                  hello@webapporbis.com
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-2 text-snow/60 hover:text-gold transition-colors text-sm">
                  <Phone className="size-4" />
                  +1 (234) 567-890
                </a>
              </motion.div>

              <motion.div custom={1} variants={fadeIn} initial="closed" animate="open" exit="closed" className="flex flex-col gap-3">
                <p className="text-gold/60 text-xs tracking-[0.25em] uppercase font-medium">Follow Us</p>
                <div className="flex items-center gap-4">
                  <a href="#" className="text-snow/40 hover:text-gold transition-colors"><Instagram className="size-5" /></a>
                  <a href="#" className="text-snow/40 hover:text-gold transition-colors"><Linkedin className="size-5" /></a>
                  <a href="#" className="text-snow/40 hover:text-gold transition-colors"><Twitter className="size-5" /></a>
                </div>
              </motion.div>

              <motion.div custom={2} variants={fadeIn} initial="closed" animate="open" exit="closed">
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold/40 text-gold text-sm font-medium hover:bg-gold hover:text-obsidian transition-all duration-300"
                >
                  Start a Project →
                </Link>
              </motion.div>
            </div>

            {/* Mobile: Bottom row socials */}
            <motion.div
              custom={6}
              variants={fadeIn}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex md:hidden items-center justify-between pt-6 mt-4 border-t border-white/10"
            >
              <div className="flex items-center gap-5">
                <a href="#" className="text-snow/40 hover:text-gold transition-colors"><Instagram className="size-5" /></a>
                <a href="#" className="text-snow/40 hover:text-gold transition-colors"><Linkedin className="size-5" /></a>
                <a href="#" className="text-snow/40 hover:text-gold transition-colors"><Twitter className="size-5" /></a>
              </div>
              <Link
                to="/contact"
                onClick={onClose}
                className="px-5 py-2 rounded-full border border-gold/40 text-gold text-sm font-medium hover:bg-gold hover:text-obsidian transition-all duration-300"
              >
                Let&apos;s Talk
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

/* ─────────────────────────────────────────── */
/*  useScroll hook                             */
/* ─────────────────────────────────────────── */

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
