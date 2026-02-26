import HeaderInitials from "@/components/HeaderInitials";
import InfoBar from "@/components/InfoBar";
import HeroSection from "@/components/HeroSection";
import ProjectGrid from "@/components/ProjectGrid";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background max-w-[1440px] mx-auto">
      <HeaderInitials />
      <InfoBar />
      <HeroSection />
      <ProjectGrid />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
