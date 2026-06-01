import React from 'react';
import { motion } from 'framer-motion';

const Sparkles = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

export function CTASection() {
  return (
    <section className="relative py-24 bg-obsidian overflow-hidden">
      {/* Floating Graphic Element */}
      <motion.div 
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-5%] top-[10%] w-[450px] h-[450px] bg-gradient-to-br from-gold/20 to-gold-dim/10 rounded-full blur-[90px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="w-full rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          
          {/* Left Text Block */}
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-gold font-medium text-sm mb-4">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Unleash True Performance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-snow mb-4 leading-tight">
              Ready to take full control of your stack?
            </h2>
            <p className="text-mist font-normal leading-relaxed text-sm sm:text-base">
              Deploy serverless components natively, scale instantly to global edges, and track data flow architecture with a centralized platform engine.
            </p>
          </div>

          {/* Right Action Block */}
          <div className="w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-3.5 shrink-0 sm:w-full md:w-64">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-4 rounded-xl font-semibold bg-gradient-to-r from-gold to-gold-dim text-obsidian shadow-[0_4px_20px_rgba(201,169,98,0.3)] hover:opacity-95 transition-all text-center"
            >
              Get Started for Free
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.01, backgroundColor: 'rgba(255,255,255,0.03)' }}
              whileTap={{ scale: 0.99 }}
              className="w-full px-6 py-4 rounded-xl font-medium border border-white/10 text-mist hover:text-snow transition-colors text-center bg-black/20"
            >
              View Pricing Matrix
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
}
