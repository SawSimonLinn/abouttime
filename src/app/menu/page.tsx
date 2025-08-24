import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { MenuCarousel } from "@/components/landing/menu-carousel";
import { MenuSection } from "@/components/landing/menu";

export default function MenuPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        {/* <MenuCarousel /> */}
        <MenuSection />
      </main>
      <Footer />
    </div>
  );
}
