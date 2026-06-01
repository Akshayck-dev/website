import { CheckCircle2 } from 'lucide-react'

export function WhyChooseUs() {
  const points = [
    "Professional and responsive designs",
    "SEO-friendly development approach",
    "User-focused interface and experience",
    "Scalable and secure solutions",
    "Fast-loading and mobile-optimised platforms",
    "Dedicated technical support and maintenance",
    "Customised solutions for every business requirement"
  ]

  return (
    <section className="bg-obsidian py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-snow">Why Choose Us</h2>
          <p className="text-mist text-lg leading-relaxed">
            Grow Your Business Digitally. We combine creativity, technology, and strategy to deliver digital solutions that help businesses strengthen their online presence and improve operational performance. Whether you need a professional website, a powerful mobile application, or a complete ERP system, we deliver solutions that support your business growth efficiently.
          </p>
        </div>
        <div className="md:w-1/2">
          <ul className="space-y-4">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                <span className="text-snow text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
