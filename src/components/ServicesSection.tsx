import { Search, Globe, Target, MessageCircle } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Google Visibility Boost",
    description: "We optimize your Google Business profile so more Oslo customers find you fast.",
    features: ["Google My Business optimization", "Local SEO ranking", "Review management", "Map pack visibility"]
  },
  {
    icon: Globe,
    title: "Website Design for Laundry Brands",
    description: "Clean, fast-loading websites with booking systems, price lists, and WhatsApp integration.",
    features: ["Mobile-responsive design", "Online booking system", "Price calculators", "WhatsApp integration"]
  },
  {
    icon: Target,
    title: "Paid Ads (Facebook & Google)",
    description: "Targeted campaigns that bring in new laundry customers daily.",
    features: ["Location-based targeting", "Custom audiences", "ROI tracking", "A/B tested campaigns"]
  },
  {
    icon: MessageCircle,
    title: "Customer Retention Funnels",
    description: "WhatsApp & Email campaigns to keep your customers coming back.",
    features: ["Automated follow-ups", "Loyalty programs", "Seasonal promotions", "SMS reminders"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Tailored Growth Services for
            <span className="text-accent block">Laundry & Dry Cleaning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every service is designed specifically for laundry businesses in Oslo, 
            ensuring maximum relevance and results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-premium p-8 group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground/70">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to see which services your business needs most?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get a free audit and discover the biggest growth opportunities for your laundry business.
            </p>
            <button className="btn-hero">
              Get Your Free Business Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;