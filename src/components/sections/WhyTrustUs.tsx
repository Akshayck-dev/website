import { ShieldCheck } from 'lucide-react'

export function WhyTrustUs() {
  const points = [
    "Experienced development and design team",
    "Customised business-focused solutions",
    "Modern and scalable technologies",
    "SEO-friendly and responsive development",
    "Reliable technical support and maintenance",
    "Focus on quality, performance, and security"
  ]

  return (
    <section className="bg-charcoal py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse gap-12 items-center">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-snow">Why Businesses Trust Us</h2>
          <p className="text-mist text-lg leading-relaxed">
            We believe every business requires unique digital solutions. Our team works closely with clients to understand their goals, industry requirements, and operational challenges before creating customised strategies and technology platforms. From planning and design to development and deployment, we maintain a transparent and collaborative process to ensure high-quality project delivery.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="grid gap-4 sm:grid-cols-1">
            {points.map((point, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-obsidian/50 border border-border/50">
                <ShieldCheck className="w-8 h-8 text-blue-500 shrink-0" />
                <span className="text-snow font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
