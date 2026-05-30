import { Sparkles, Zap, Crown } from 'lucide-react'
import { GlowCard } from '@/components/ui/spotlight-card'

export function SpotlightCardDemo() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 p-8 bg-obsidian">
      <GlowCard glowColor="gold" size="md">
        <div className="flex flex-col justify-between h-full">
          <Crown className="text-gold w-8 h-8" />
          <div>
            <h3 className="font-display text-xl text-snow mb-2">Premium</h3>
            <p className="text-mist text-sm">Luxury brand positioning</p>
          </div>
        </div>
      </GlowCard>

      <GlowCard glowColor="purple" size="md">
        <div className="flex flex-col justify-between h-full">
          <Sparkles className="text-purple-400 w-8 h-8" />
          <div>
            <h3 className="font-display text-xl text-snow mb-2">Creative</h3>
            <p className="text-mist text-sm">Immersive digital experiences</p>
          </div>
        </div>
      </GlowCard>

      <GlowCard glowColor="blue" size="md">
        <div className="flex flex-col justify-between h-full">
          <Zap className="text-blue-400 w-8 h-8" />
          <div>
            <h3 className="font-display text-xl text-snow mb-2">Performance</h3>
            <p className="text-mist text-sm">Data-driven growth</p>
          </div>
        </div>
      </GlowCard>
    </div>
  )
}
