import { Wifi, Power, Zap } from 'lucide-react';
import Image from 'next/image';

export function WorkStudySection() {
  return (
    <section
      id="amenities"
      className="relative py-32 md:py-48 text-center text-white"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1651883623292-1508fe67687c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Comfortable work and study area in the cafe"
          data-ai-hint="study area"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 container mx-auto">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter">
            The Ultimate Work & Study Hub
          </h2>
          <p className="text-lg md:text-xl text-white/90">
            We built the perfect space for creators, students, and professionals
            to thrive. Settle in, get in the zone, and we'll handle the
            caffeine.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left pt-8">
            <div className="flex items-center gap-4">
              <div className="bg-accent/20 p-3 rounded-full">
                <Wifi className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Blazing-Fast Wi-Fi</h3>
                <p className="text-sm text-white/80">No lag, all focus.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-accent/20 p-3 rounded-full">
                <Power className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Unlimited Power</h3>
                <p className="text-sm text-white/80">Outlets everywhere.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-accent/20 p-3 rounded-full">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Focus Zones</h3>
                <p className="text-sm text-white/80">Quiet spots for deep work.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
