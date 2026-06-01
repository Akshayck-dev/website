import { useRef } from "react";
import { motion } from "framer-motion";

export function ClientFeedback() {
    const testimonialRef = useRef<HTMLDivElement>(null);
  
    const revealVariants = {
      visible: (i: number) => ({
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          delay: i * 0.4,
          duration: 0.5,
        },
      }),
      hidden: {
        filter: "blur(10px)",
        y: -20,
        opacity: 0,
      },
    };

    const TimelineContent = ({
      as: Tag = "div",
      className,
      animationNum,
      children,
      customVariants,
      ...props
    }: any) => {
      const MotionTag = motion[Tag as keyof typeof motion] as any;
      return (
        <MotionTag
          className={className}
          custom={animationNum}
          variants={customVariants || revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          {...props}
        >
          {children}
        </MotionTag>
      );
    };
  
  return (
    <section className="relative w-full container mx-auto rounded-lg py-24" ref={testimonialRef}>
      <article className="max-w-screen-md mx-auto text-center space-y-4 px-4">
        <TimelineContent as="h2" className="xl:text-5xl text-4xl font-display font-medium tracking-tight text-snow" animationNum={0}>
          Trusted by Startups and the world's largest companies
        </TimelineContent>
        <TimelineContent as="p" className="mx-auto text-mist text-lg" animationNum={1}>
          Let's hear how our clients feel about our service
        </TimelineContent>
      </article>
      
      <div className="lg:grid lg:grid-cols-3 gap-4 flex flex-col w-full lg:py-16 pt-10 pb-4 lg:px-10 px-4">
        {/* Column 1 */}
        <div className="md:flex lg:flex-col lg:space-y-4 h-full lg:gap-0 gap-4">
          <TimelineContent animationNum={2} className="lg:flex-[7] flex-[6] flex flex-col justify-between relative bg-charcoal text-snow overflow-hidden rounded-2xl border border-white/10 p-8 shadow-xl">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
            <article className="mt-auto relative z-10">
              <p className="text-lg leading-relaxed font-light mb-8">
                "Hypersphere has been a game-changer for us. Their service is
                top-notch and their team is incredibly responsive."
              </p>
              <div className="flex justify-between items-center pt-5 border-t border-white/10">
                <div>
                  <h3 className="font-semibold lg:text-xl text-lg text-gold">
                    Guillermo Rauch
                  </h3>
                  <p className="text-mist">CEO of Enigma</p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop"
                  alt="Guillermo Rauch"
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/10"
                />
              </div>
            </article>
          </TimelineContent>
          
          <TimelineContent animationNum={3} className="lg:flex-[3] flex-[4] lg:h-fit lg:shrink-0 flex flex-col justify-between relative bg-blue-600 text-white overflow-hidden rounded-2xl border border-blue-500/30 p-8 shadow-xl">
            <article className="mt-auto">
              <p className="text-lg leading-relaxed font-light mb-8">
                "We've seen incredible results. Their expertise and dedication are unmatched."
              </p>
              <div className="flex justify-between items-center pt-5 border-t border-white/20">
                <div>
                  <h3 className="font-semibold text-xl">Rika Shinoda</h3>
                  <p className="text-blue-200">CEO of Kintsugi</p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?q=80&w=687&auto=format&fit=crop"
                  alt="Rika Shinoda"
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                />
              </div>
            </article>
          </TimelineContent>
        </div>

        {/* Column 2 */}
        <div className="lg:h-full md:flex lg:flex-col h-fit lg:space-y-4 lg:gap-0 gap-4">
          <TimelineContent animationNum={4} className="flex flex-col justify-between relative bg-obsidian text-snow overflow-hidden rounded-2xl border border-white/10 p-8 shadow-xl">
            <article className="mt-auto">
              <p className="text-lg leading-relaxed font-light mb-8">
                "Their team is highly professional, and their innovative
                solutions have truly transformed the way we operate."
              </p>
              <div className="flex justify-between items-center pt-5 border-t border-white/10">
                <div>
                  <h3 className="font-semibold lg:text-xl text-lg text-gold">
                    Reacher
                  </h3>
                  <p className="text-mist">CEO of OdeaoLabs</p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1021&auto=format&fit=crop"
                  alt="Reacher"
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/10"
                />
              </div>
            </article>
          </TimelineContent>
          
          <TimelineContent animationNum={5} className="flex flex-col justify-between relative bg-obsidian text-snow overflow-hidden rounded-2xl border border-white/10 p-8 shadow-xl">
            <article className="mt-auto">
              <p className="text-lg leading-relaxed font-light mb-8">
                "We're extremely satisfied. Their expertise
                and dedication have exceeded our expectations."
              </p>
              <div className="flex justify-between items-center pt-5 border-t border-white/10">
                <div>
                  <h3 className="font-semibold lg:text-xl text-lg text-gold">John</h3>
                  <p className="text-mist">CEO of Labsbo</p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop"
                  alt="John"
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/10"
                />
              </div>
            </article>
          </TimelineContent>
          
          <TimelineContent animationNum={6} className="flex flex-col justify-between relative bg-obsidian text-snow overflow-hidden rounded-2xl border border-white/10 p-8 shadow-xl">
            <article className="mt-auto">
              <p className="text-lg leading-relaxed font-light mb-8">
                "Their customer support is absolutely exceptional. They are
                always available, incredibly helpful."
              </p>
              <div className="flex justify-between items-center pt-5 border-t border-white/10">
                <div>
                  <h3 className="font-semibold lg:text-xl text-lg text-gold">
                    Steven Sunny
                  </h3>
                  <p className="text-mist">CEO of boxefi</p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1740102074295-c13fae3e4f8a?q=80&w=687&auto=format&fit=crop"
                  alt="Steven Sunny"
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/10"
                />
              </div>
            </article>
          </TimelineContent>
        </div>

        {/* Column 3 */}
        <div className="h-full md:flex lg:flex-col lg:space-y-4 lg:gap-0 gap-4">
          <TimelineContent animationNum={7} className="lg:flex-[3] flex-[4] flex flex-col justify-between relative bg-blue-600 text-white overflow-hidden rounded-2xl border border-blue-500/30 p-8 shadow-xl">
            <article className="mt-auto">
              <p className="text-lg leading-relaxed font-light mb-8">
                "A key partner in our growth journey."
              </p>
              <div className="flex justify-between items-center pt-5 border-t border-white/20">
                <div>
                  <h3 className="font-semibold text-xl">Guillermo</h3>
                  <p className="text-blue-200">CEO of OdeaoLabs</p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=765&auto=format&fit=crop"
                  alt="Guillermo"
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                />
              </div>
            </article>
          </TimelineContent>
          
          <TimelineContent animationNum={8} className="lg:flex-[7] flex-[6] flex flex-col justify-between relative bg-charcoal text-snow overflow-hidden rounded-2xl border border-white/10 p-8 shadow-xl">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
            <article className="mt-auto relative z-10">
              <p className="text-lg leading-relaxed font-light mb-8">
                "Hypersphere has been a true game-changer for us. Their
                exceptional service, combined with their deep expertise and
                commitment to excellence, has made a significant impact."
              </p>
              <div className="flex justify-between items-center pt-5 border-t border-white/10">
                <div>
                  <h3 className="font-semibold text-xl text-gold">Paul Brauch</h3>
                  <p className="text-mist">CTO of Spectrum</p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=687&auto=format&fit=crop"
                  alt="Paul Brauch"
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/10"
                />
              </div>
            </article>
          </TimelineContent>
        </div>
      </div>
    </section>
  );
}

export default ClientFeedback;
