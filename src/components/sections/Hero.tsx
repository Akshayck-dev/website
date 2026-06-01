import { SparklesCore } from '../ui/sparkles'
import { Button } from '../ui/button'
import { SplitText } from '../ui/SplitText'

export function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen bg-obsidian flex flex-col items-center overflow-hidden pt-24">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={1.5}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-6 flex flex-col items-center my-auto">
        
        <SplitText
          text="Build Smarter Digital Experiences."
          className="md:text-7xl text-5xl lg:text-8xl font-bold text-snow tracking-tight leading-tight"
          delay={50}
          duration={1}
          tag="h1"
        />
        
        <div className="space-y-4 mt-4">
          <p className="text-mist md:text-lg text-base max-w-3xl mx-auto leading-relaxed">
            Transform your business with professional website designing and development, mobile app development, and customised ERP solutions tailored to your operational needs. We create modern digital platforms that improve customer engagement, streamline business processes, and support long-term growth.
          </p>
          <p className="text-mist md:text-lg text-base max-w-3xl mx-auto leading-relaxed">
            From responsive business websites to advanced enterprise systems, our solutions are designed to deliver performance, functionality, and seamless user experiences across every device.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-10">
            <Button className="bg-snow text-obsidian hover:bg-gold hover:text-obsidian rounded-full px-8 py-6 text-lg transition-colors font-medium">
              Grow Your Business
            </Button>
            <Button variant="outline" className="border-border/50 hover:bg-accent/50 text-snow rounded-full px-8 py-6 text-lg transition-colors font-medium">
              Explore Solutions
            </Button>
        </div>
      </div>

      {/* Radial Gradient overlay to prevent sharp edges and blend with background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#030303_100%)]"></div>
    </section>
  )
}
