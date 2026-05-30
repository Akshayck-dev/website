import { lazy, Suspense } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const SparklesCore = lazy(() =>
  import('@/components/ui/sparkles').then((mod) => ({ default: mod.SparklesCore }))
)

export function HeroSparklesBackground() {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) return null

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Suspense fallback={null}>
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={80}
          className="h-full w-full"
          particleColor="#C9A962"
          speed={0.8}
        />
      </Suspense>
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian" />
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_75%)]" />
    </div>
  )
}
