import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type HorizontalCard = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export function HorizontalScrollCarousel({ cards, title, subtitle }: { cards: HorizontalCard[], title: string, subtitle?: string }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if mobile (disable horizontal scroll on small screens for better UX)
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        if (!containerRef.current) return 0;
        let containerWidth = containerRef.current.scrollWidth;
        return -(containerWidth - window.innerWidth);
      };

      const tween = gsap.to(containerRef.current, {
        x: getScrollAmount,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: targetRef.current,
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        pinSpacing: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
      });
    }, targetRef);

    // Refresh ScrollTrigger after a slight delay to ensure all layouts (like images) are fully computed
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timeout);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={targetRef} className="relative min-h-screen bg-obsidian overflow-hidden z-10">
      {/* Header section (Sticky on Desktop, Normal on Mobile) */}
      <div className="md:absolute top-16 lg:top-24 left-6 md:left-12 lg:left-24 z-10 flex flex-col gap-4 mt-16 md:mt-0 px-6 md:px-0">
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-12 bg-gold/50" />
          <span className="text-gold tracking-[0.3em] uppercase text-sm font-medium">{subtitle || 'Our Services'}</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-display text-snow max-w-2xl leading-tight">
          {title}
        </h2>
      </div>
      
      {/* Desktop: Horizontal Scroll, Mobile: Vertical Stack */}
      <div className="md:sticky md:top-0 flex md:h-screen items-center md:overflow-hidden pt-12 md:pt-0 pb-24 md:pb-0">
        <div 
          ref={containerRef} 
          className="flex flex-col md:flex-row gap-8 px-6 md:px-24 w-full md:w-auto mt-8 md:mt-24 lg:mt-32"
        >
          {cards.map((card, index) => (
            <Card card={card} key={card.id} index={index + 1} />
          ))}
          {/* Spacer block at the end for desktop scroll margin */}
          <div className="hidden md:block w-[10vw] flex-shrink-0" />
        </div>
      </div>
    </section>
  );
}

const Card = ({ card, index }: { card: HorizontalCard; index: number }) => {
  return (
    <div className="group relative h-[50vh] md:h-[60vh] lg:h-[65vh] w-full md:w-[60vw] lg:w-[45vw] overflow-hidden rounded-[2rem] bg-charcoal flex-shrink-0 border border-white/5 shadow-2xl cursor-pointer">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
        style={{ backgroundImage: `url(${card.image})` }}
      />
      
      {/* Heavy gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent md:opacity-80 md:group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="absolute inset-0 p-8 md:p-12 w-full flex flex-col justify-between h-full z-10">
        <div className="flex justify-end">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center opacity-100 md:opacity-0 transform md:-translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 shadow-lg">
             <ArrowUpRight className="text-white" size={24} />
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-gold font-display text-xl lg:text-2xl opacity-80">0{index}</span>
            <div className="h-[1px] flex-grow bg-white/20" />
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display text-snow mb-4 tracking-tight leading-tight transform transition-transform duration-500 md:group-hover:-translate-y-2 drop-shadow-xl">
            {card.title}
          </h3>
          <p className="text-mist text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-xl opacity-100 md:opacity-0 transform md:translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 delay-75">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
};
