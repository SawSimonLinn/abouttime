import { AboutSection } from '@/components/landing/about';
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
