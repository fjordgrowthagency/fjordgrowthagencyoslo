import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-glow to-accent relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 bg-white/5 rounded-full floating-bubbles"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm">
            <Sparkles className="h-10 w-10 text-white" />
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Wash Away Your 
          <span className="block text-accent">Marketing Stress?</span>
        </h2>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join the growing list of Oslo laundry businesses that have transformed 
          their customer acquisition and retention with our proven strategies.
        </p>

        {/* CTA Button */}
        <div className="space-y-6">
          <Button className="bg-white text-primary hover:bg-white/90 px-12 py-6 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            Let's Grow Your Laundry Business
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="text-white/70 text-sm">
            Free consultation • No commitment • Results guaranteed
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">48h</div>
            <div className="text-white/70 text-sm">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-white/70 text-sm">Money Back</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">Local</div>
            <div className="text-white/70 text-sm">Oslo Team</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;