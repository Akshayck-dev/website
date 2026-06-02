// @ts-nocheck
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1000 * 2,
      height: 1000 * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.08, 0.08, 0.08], // very dark grey, almost black
      markerColor: [0.85, 0.7, 0.3], // Gold 
      glowColor: [0.05, 0.05, 0.05],
      markers: [
        { location: [37.7595, -122.4367], size: 0.08 }, // SF
        { location: [40.7128, -74.006], size: 0.08 }, // NY
        { location: [51.5074, -0.1278], size: 0.08 }, // London
        { location: [48.8566, 2.3522], size: 0.08 }, // Paris
        { location: [35.6762, 139.6503], size: 0.08 }, // Tokyo
        { location: [-33.8688, 151.2093], size: 0.08 }, // Sydney
        { location: [25.2048, 55.2708], size: 0.08 }, // Dubai
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <canvas
        ref={canvasRef}
        style={{
          width: 1000,
          height: 1000,
          maxWidth: "100%",
          aspectRatio: 1,
        }}
      />
    </div>
  );
}
