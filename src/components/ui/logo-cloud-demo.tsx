import { cn } from '@/lib/utils'
import { LogoCloud } from '@/components/ui/logo-cloud-3'
import { techLogos } from '@/data/content'

export function LogoCloudDemo() {
  return (
    <div className="relative min-h-[420px] w-full place-content-center py-20">
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute -top-1/2 left-1/2 -z-10 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-b-full blur-[30px]',
          'bg-[radial-gradient(ellipse_at_center,rgba(250,250,250,0.06),transparent_50%)]'
        )}
      />

      <section className="relative mx-auto max-w-3xl px-6">
        <h2 className="mb-5 text-center text-xl font-medium tracking-tight text-foreground md:text-3xl">
          <span className="text-muted-foreground">Trusted by experts.</span>
          <br />
          <span className="font-semibold">Used by the leaders.</span>
        </h2>
        <div className="mx-auto my-5 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

        <LogoCloud logos={techLogos} />

        <div className="mt-5 h-px bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </section>
    </div>
  )
}
