import type { ComponentProps } from 'react'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { cn } from '@/lib/utils'

export type Logo = {
  src: string
  alt: string
  width?: number
  height?: number
}

type LogoCloudProps = ComponentProps<'div'> & {
  logos: Logo[]
  gap?: number
  speed?: number
  speedOnHover?: number
  reverse?: boolean
}

export function LogoCloud({
  className,
  logos,
  gap = 42,
  speed = 80,
  speedOnHover = 25,
  reverse = true,
  ...props
}: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        'overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]',
        className
      )}
    >
      <InfiniteSlider
        gap={gap}
        reverse={reverse}
        duration={speed}
        durationOnHover={speedOnHover}
      >
        {logos.map((logo) => (
          <img
            alt={logo.alt}
            className="pointer-events-none h-5 select-none opacity-40 transition-opacity duration-300 md:h-6"
            height={logo.height ?? 24}
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
            width={logo.width ?? 120}
          />
        ))}
      </InfiniteSlider>
    </div>
  )
}
