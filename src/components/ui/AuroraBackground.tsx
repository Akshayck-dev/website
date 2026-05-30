import { useEffect, useRef } from 'react'
import { cn } from '../../lib/utils'

interface AuroraBackgroundProps {
  className?: string
}

export function AuroraBackground({ className }: AuroraBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const draw = () => {
      time += 0.003
      const { width, height } = canvas

      ctx.clearRect(0, 0, width, height)

      const gradients = [
        {
          x: width * 0.3 + Math.sin(time) * 100,
          y: height * 0.3 + Math.cos(time * 0.7) * 80,
          radius: width * 0.5,
          color: 'rgba(201, 169, 98, 0.04)',
        },
        {
          x: width * 0.7 + Math.cos(time * 0.8) * 120,
          y: height * 0.5 + Math.sin(time * 0.6) * 60,
          radius: width * 0.4,
          color: 'rgba(255, 255, 255, 0.02)',
        },
        {
          x: width * 0.5 + Math.sin(time * 0.5) * 80,
          y: height * 0.7 + Math.cos(time * 0.9) * 100,
          radius: width * 0.35,
          color: 'rgba(201, 169, 98, 0.03)',
        },
      ]

      gradients.forEach(({ x, y, radius, color }) => {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        gradient.addColorStop(0, color)
        gradient.addColorStop(1, 'transparent')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)
      })

      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={cn('pointer-events-none absolute inset-0 z-0', className)}
      aria-hidden="true"
    />
  )
}
