import { Quote, Star, TrendingUp } from "lucide-react";

const testimonials = [
  {
    name: "Erik Andersen",
    business: "Oslo Express Laundry",
    quote: "My laundry got 50% more walk-ins after Fjord Growth Agency helped optimize my Google profile. The booking system on our new website has been a game-changer!",
    growth: "50% more customers",
    timeframe: "3 months"
  },
  {
    name: "Maria Olsen",
    business: "Fresh & Clean Dry Cleaning",
    quote: "The WhatsApp integration and automated follow-ups have increased our repeat customers by 75%. Our revenue has doubled since working with Fjord Agency.",
    growth: "75% repeat rate",
    timeframe: "4 months"
  }
];

const stats = [
  { label: "Average Customer Increase", value: "85%", icon: TrendingUp },
  { label: "Average Revenue Growth", value: "120%", icon: TrendingUp },
  { label: "Client Satisfaction Rate", value: "98%", icon: Star }
];

const TestimonialsSection = () => {
  return (
    <section id="results" className="py-20 section-premium">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Real Results for 
            <span className="text-accent block">Real Oslo Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See how we've helped local laundry businesses transform their growth
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-soft">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-soft relative">
              <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6" />
              
              <div className="mb-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-accent">{testimonial.growth}</div>
                  <div className="text-xs text-muted-foreground">in {testimonial.timeframe}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Highlight */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Want to see a detailed case study?
          </h3>
          <p className="mb-6 opacity-90">
            Download our free case study showing exactly how we helped a local Oslo laundry 
            increase their bookings by 200% in just 6 months.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
            Download Free Case Study
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;