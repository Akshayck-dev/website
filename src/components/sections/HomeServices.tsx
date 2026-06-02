// @ts-nocheck
import React from 'react'
import { TextParallaxContent } from '@/components/ui/text-parallax-content-scroll'
import { Monitor, Smartphone, Database } from 'lucide-react'

export function HomeServices() {
  return (
    <section className="bg-obsidian relative w-full">
      
      {/* 1. Website Designing & Development */}
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2664&auto=format&fit=crop"
        subheading="Digital Presence"
        heading="Website Designing & Development"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 text-snow">
          <div className="col-span-1 md:col-span-4 flex justify-center md:justify-start">
            <Monitor className="w-24 h-24 text-gold" />
          </div>
          <div className="col-span-1 md:col-span-8">
            <p className="mb-6 text-xl text-mist md:text-2xl leading-relaxed">
              Your website is often the first impression of your business. We design and develop visually appealing, fast-loading, and mobile-friendly websites that reflect your brand identity while delivering a smooth browsing experience.
            </p>
            <p className="mb-8 text-xl text-mist md:text-2xl leading-relaxed">
              Whether you require a corporate website, portfolio, e-commerce platform, or custom web application, we provide scalable solutions that combine creativity with functionality.
            </p>
          </div>
        </div>
      </TextParallaxContent>

      {/* 2. Mobile App Development */}
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop"
        subheading="Innovation"
        heading="Mobile App Development"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 text-snow">
          <div className="col-span-1 md:col-span-4 flex justify-center md:justify-start">
            <Smartphone className="w-24 h-24 text-blue-400" />
          </div>
          <div className="col-span-1 md:col-span-8">
            <p className="mb-6 text-xl text-mist md:text-2xl leading-relaxed">
              Bring your business closer to your customers with innovative mobile applications designed for Android and iOS platforms. Our app development services focus on intuitive user interfaces, seamless functionality, and reliable performance.
            </p>
            <p className="mb-8 text-xl text-mist md:text-2xl leading-relaxed">
              We develop customised applications for businesses across various industries, ensuring every app is secure, efficient, and aligned with your operational goals.
            </p>
          </div>
        </div>
      </TextParallaxContent>

      {/* 3. ERP Solutions */}
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
        subheading="Efficiency"
        heading="ERP Solutions"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 text-snow">
          <div className="col-span-1 md:col-span-4 flex justify-center md:justify-start">
            <Database className="w-24 h-24 text-purple-400" />
          </div>
          <div className="col-span-1 md:col-span-8">
            <p className="mb-6 text-xl text-mist md:text-2xl leading-relaxed">
              Simplify business operations with intelligent ERP systems designed to improve productivity and workflow management. Our ERP solutions integrate multiple business functions into one efficient platform.
            </p>
            <p className="mb-8 text-xl text-mist md:text-2xl leading-relaxed">
              We create flexible ERP systems tailored to your business structure, enabling better decision-making and operational efficiency.
            </p>
          </div>
        </div>
      </TextParallaxContent>

    </section>
  )
}
