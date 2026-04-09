import NavigationBar from "@/components/NavigationBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesGridSection from "@/components/ServicesGridSection";
import BenefitsGridSection from "@/components/BenefitsGridSection";
import ProcessWorkflowSection from "@/components/ProcessWorkflowSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsGridSection from "@/components/TestimonialsGridSection";
import FooterCTASection from "@/components/FooterCTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="services">
        <ServicesGridSection />
      </div>
      <div id="benefits">
        <BenefitsGridSection />
      </div>
      <div id="work">
        <PortfolioSection />
      </div>
      <div id="process">
        <ProcessWorkflowSection />
      </div>
      <div id="testimonials">
        <TestimonialsGridSection />
      </div>
      <div id="contact">
        <FooterCTASection />
      </div>
    </div>
  );
}
