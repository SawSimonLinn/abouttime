import { AboutSection } from "@/components/landing/about";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <AboutSection />

        {/* CREATE SOMETHING NOT ABOUT US */}
        <section id="mission" className="py-20 md:py-32">
          <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-headline text-4xl md:text-5xl font-black text-primary">
                Our Mission.
              </h2>
              <p className="text-muted-foreground text-lg">
                Our mission at AboutTime Hub is to create a vibrant community
                space where creativity and productivity thrive. We aim to
                provide more than just coffee; we offer an environment that
                inspires and supports your daily hustle.
              </p>
              <p className="text-muted-foreground text-lg">
                We are committed to sustainability and community engagement,
                sourcing our ingredients ethically and supporting local artists
                and entrepreneurs.
              </p>
              <p className="text-muted-foreground text-lg">
                We strive to be a catalyst for positive change in our community,
                fostering connections and supporting the dreams of those who
                walk through our doors.
              </p>
            </div>
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl md:h-[500px]">
              <Image
                src="/img/about-logo.png"
                alt="Inside the vibrant AboutTime Hub cafe"
                data-ai-hint="vibrant cafe"
                fill
                className="object-cover object-bottom"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
