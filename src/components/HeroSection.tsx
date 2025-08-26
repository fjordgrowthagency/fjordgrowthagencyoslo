import { Button } from "@/components/ui/button";
import { Rocket, Phone } from "lucide-react";
import HeroSlideshow from "./HeroSlideshow";
import Logo from "./Logo";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroSlideshow />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Logo with Animation */}
        <div className="mb-8 flex justify-center">
          <Logo animate={true} className="text-white w-40 h-40" />
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow leading-tight">
          We Help Laundry & Dry Cleaning Services in Oslo
          <span className="text-accent block mt-2">Get More Customers</span>
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
          From Google optimization to customer funnels — we grow your laundry business 
          while you focus on keeping Oslo fresh and clean.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button className="btn-hero group">
            <Rocket className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Get Free Growth Audit
          </Button>
          <Button className="btn-secondary">
            <Phone className="mr-2 h-5 w-5" />
            Book a Call Now
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;