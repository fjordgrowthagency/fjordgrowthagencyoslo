import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, MessageCircle, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Ready to Start Growing?
                <span className="text-accent block">Let's Talk!</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get in touch with our Oslo-based team and discover how we can 
                help your laundry business thrive in the digital age.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-primary">WhatsApp</div>
                  <div className="text-muted-foreground">Quick chat for instant answers</div>
                </div>
                <Button className="ml-auto bg-green-500 hover:bg-green-600 text-white">
                  Chat Now
                </Button>
              </div>

              <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-primary">Phone Call</div>
                  <div className="text-muted-foreground">Schedule a strategy session</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-primary">Oslo Location</div>
                  <div className="text-muted-foreground">Local team, local knowledge</div>
                </div>
              </div>
            </div>

            {/* Map Visualization */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
              <h3 className="text-lg font-semibold text-primary mb-3">
                Serving All of Oslo
              </h3>
              <p className="text-muted-foreground text-sm">
                From Grünerløkka to Frogner, we help laundry businesses across 
                all Oslo neighborhoods grow their customer base and increase revenue.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-premium">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Get Your Free Growth Audit
              </h3>
              <p className="text-muted-foreground">
                Tell us about your laundry business and we'll send you a personalized growth plan.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Business Name *
                  </label>
                  <Input
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="Your laundry business"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+47 xxx xx xxx"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tell us about your goals
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What challenges are you facing? What growth goals do you have?"
                  rows={4}
                />
              </div>

              <Button type="submit" className="btn-hero w-full">
                <Mail className="mr-2 h-5 w-5" />
                Send My Free Audit Request
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                We'll respond within 24 hours with your personalized growth plan.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;