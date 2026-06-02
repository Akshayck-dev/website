// @ts-nocheck
'use client'

import { useRef } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'

export interface ParallaxSection {
    id: string | number;
    title: string;
    description: string;
    imageUrl: string;
    reverse?: boolean;
    category?: string;
    metrics?: { label: string; value: string }[];
}

const ParallaxSectionItem = ({ section, index }: { section: ParallaxSection; index: number }) => {
    const sectionRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "center start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
    const clipPath = useTransform(scrollYProgress, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
    const translateY = useTransform(scrollYProgress, [0, 1], [-50, 0]);

    return (
        <div 
            ref={sectionRef} 
            className={`min-h-[80vh] flex flex-col lg:flex-row items-center justify-center lg:gap-32 gap-16 py-16 ${section.reverse ? 'lg:flex-row-reverse' : ''}`}
        >
            <motion.div style={{ y: translateY }} className="flex-1 w-full max-w-lg">
                {section.category && (
                    <span className="text-xs uppercase tracking-[0.2em] text-gold mb-4 block">
                        {section.category}
                    </span>
                )}
                <div className="text-4xl md:text-5xl lg:text-6xl font-display text-snow">{section.title}</div>
                <motion.p 
                    style={{ y: translateY }} 
                    className="text-mist text-lg mt-8 leading-relaxed"
                >
                    {section.description}
                </motion.p>
                
                {section.metrics && (
                    <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
                        {section.metrics.map((metric) => (
                        <div key={metric.label}>
                            <p className="font-display text-2xl md:text-3xl text-snow mb-1">
                            {metric.value}
                            </p>
                            <p className="text-sm text-mist">{metric.label}</p>
                        </div>
                        ))}
                    </div>
                )}
            </motion.div>

            <motion.div 
                style={{ 
                    opacity,
                    clipPath,
                }}
                className="flex-1 w-full relative"
            >
                <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] w-full max-w-lg mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                        src={section.imageUrl} 
                        className="w-full h-full object-cover" 
                        alt={section.title}
                    />
                    <div className="absolute inset-0 bg-obsidian/20 mix-blend-multiply" />
                </div>
            </motion.div>
        </div>
    );
};

export const ParallaxScrollFeatureSection = ({ sections }: { sections: ParallaxSection[] }) => {
  return (
       <div className="flex flex-col md:px-0">
            {sections.map((section, index) => (
                <ParallaxSectionItem key={section.id} section={section} index={index} />
            ))}
        </div>
  );
};
