import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PropertyDiscovery } from "@/components/property-discovery";
import { Footer } from "@/components/footer";

export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PropertyDiscovery />
      <Footer />
    </div>
  );
}