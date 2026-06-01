import { Monitor, Smartphone, Database } from 'lucide-react'

export function DetailedServices() {
  const webServices = [
    "Corporate website development",
    "Business and portfolio websites",
    "E-commerce website development",
    "Responsive web design",
    "Custom web application development",
    "Website maintenance and support",
    "UI and UX design solutions",
    "SEO-friendly website structure"
  ]

  const appServices = [
    "Android app development",
    "iOS app development",
    "Cross-platform mobile applications",
    "Business application development",
    "E-commerce mobile applications",
    "Custom application interfaces",
    "App maintenance and updates",
    "Secure and scalable app architecture"
  ]

  const erpServices = [
    "Custom ERP software development",
    "Inventory and stock management systems",
    "Human resource management systems",
    "Accounting and finance modules",
    "CRM and customer management systems",
    "Reporting and analytics integration",
    "Workflow automation solutions",
    "ERP maintenance and support"
  ]

  return (
    <section className="bg-obsidian py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-snow">Comprehensive Digital Services</h2>
          <p className="text-mist text-lg">
            Our goal is to build websites that look appealing and improve conversions. We deliver user-friendly mobile experiences and provide businesses with better operational control through our ERP platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Web Design */}
          <div className="bg-charcoal/50 p-8 rounded-2xl border border-border/50 hover:border-gold/30 transition-colors">
            <Monitor className="w-12 h-12 text-gold mb-6" />
            <h3 className="text-2xl font-bold text-snow mb-4">Our Website Services Include</h3>
            <ul className="space-y-3">
              {webServices.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2"></span>
                  <span className="text-mist">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Apps */}
          <div className="bg-charcoal/50 p-8 rounded-2xl border border-border/50 hover:border-blue-500/30 transition-colors">
            <Smartphone className="w-12 h-12 text-blue-500 mb-6" />
            <h3 className="text-2xl font-bold text-snow mb-4">Our App Development Services Include</h3>
            <ul className="space-y-3">
              {appServices.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2"></span>
                  <span className="text-mist">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ERP */}
          <div className="bg-charcoal/50 p-8 rounded-2xl border border-border/50 hover:border-purple-500/30 transition-colors">
            <Database className="w-12 h-12 text-purple-500 mb-6" />
            <h3 className="text-2xl font-bold text-snow mb-4">Our ERP Services Include</h3>
            <ul className="space-y-3">
              {erpServices.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 mt-2"></span>
                  <span className="text-mist">{item}</span>
             </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
