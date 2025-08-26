import { MapPin, Target, Heart } from "lucide-react";
import osloServices from "@/assets/oslo-services.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-premium">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Why We Focus on 
                <span className="text-accent block">Laundry Businesses in Oslo</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p className="flex items-start gap-3">
                <Target className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                Many laundry owners struggle with online visibility, losing potential customers 
                to competitors who show up first on Google searches.
              </p>
              
              <p className="flex items-start gap-3">
                <Heart className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                Fjord Agency's mission is simple: Help local laundry businesses attract more 
                bookings, scale efficiently, and compete in the digital marketplace.
              </p>
              
              <p className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                Our Oslo-based touch means we understand the local market, customer behavior, 
                and what it takes to build trust with Norwegian customers.
              </p>
            </div>

            <div className="bg-white/50 rounded-xl p-6 border border-primary/20">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Local Expertise, Digital Growth
              </h3>
              <p className="text-foreground/70">
                We combine deep knowledge of Oslo's laundry market with proven digital 
                marketing strategies to deliver results that matter.
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-premium">
              <img 
                src={osloServices} 
                alt="Oslo laundry services map"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Oslo Businesses</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">300%</div>
                <div className="text-sm text-muted-foreground">Avg Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;