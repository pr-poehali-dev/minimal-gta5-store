import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PriceSection from "@/components/PriceSection";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <div id="home" className="min-h-screen bg-slate-900">
      <Navigation />
      <HeroSection />
      <PriceSection />
      <SocialLinks />
    </div>
  );
};

export default Index;
