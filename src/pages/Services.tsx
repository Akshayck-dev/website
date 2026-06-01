import { Services as ServicesSection } from '@/components/sections/Services'
import { DetailedServices } from '@/components/sections/DetailedServices'

export function Services() {
  return (
    <div className="flex flex-col min-h-screen pt-20 bg-obsidian">
      <ServicesSection />
      <DetailedServices />
    </div>
  )
}
