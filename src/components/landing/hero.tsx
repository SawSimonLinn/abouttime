import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[500px] md:h-[calc(100vh-80px)] w-full flex items-center justify-start text-left text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          src="/video/hero-video.mp4"
          data-ai-hint="cafe atmosphere"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover md:object-top"
        />

        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 container mx-auto">
        <div className="max-w-lg space-y-6">
          <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tighter leading-tight">
            Your Daily Grind, Upgraded.
          </h1>
          <p className="text-md md:text-lg text-white/90">
            Next-level coffee, lightning-fast Wi-Fi, and a vibe that's always
            on. This isn't just a coffee shop. It's your new main hub.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transition-transform hover:scale-105"
          >
            <Link href="/menu">View Our Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
