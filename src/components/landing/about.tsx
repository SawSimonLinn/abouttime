import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl md:h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1627401318951-badc4bf90cd1?q=80&w=2350&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Inside the vibrant AboutTime Hub cafe"
            data-ai-hint="vibrant cafe"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="font-headline text-4xl md:text-5xl font-black text-primary">
            About Us.
          </h2>
          <p className="text-muted-foreground text-lg">
            We're not just a coffee shop; we're a launchpad. AboutTime Hub is
            where killer coffee, high-speed Wi-Fi, and creative energy collide.
            It's a space designed for connection, focus, and making things
            happen.
          </p>
          <p className="text-muted-foreground text-lg">
            Our goal is simple: fuel your hustle. We serve up ethically sourced
            brews and epic snacks in a place that feels less like a cafe and
            more like your second home. Whether you're grinding on a project,
            cramming for an exam, or just chilling, we got you.
          </p>
          <p className="text-muted-foreground text-lg">
            Explore our two-story space, including a cozy loft perfect for focused work. We also offer plenty of outdoor seating with a vibrant street-side patio and a chill backyard area.
          </p>
        </div>
      </div>
    </section>
  );
}
