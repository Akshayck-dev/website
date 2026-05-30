import { useEffect } from 'react'
import Lenis from 'lenis'
import { useReducedMotion } from './useReducedMotion'

export function useLenis() {
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    document.documentElement.classList.add('lenis', 'lenis-smooth')

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      document.documentElement.classList.remove('lenis', 'lenis-smooth')
    }
  }, [reducedMotion])
}
