import { AboutSection } from "@/components/landing/about";
import { FaqSection } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";
import { GallerySection } from "@/components/landing/gallery";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero";
import { ReelsSection } from "@/components/landing/reels";
import { ReviewsSection } from "@/components/landing/reviews";
import { WorkStudySection } from "@/components/landing/work-study";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <GallerySection />
        <WorkStudySection />
        <ReelsSection />
        <AboutSection />
        <FaqSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}
