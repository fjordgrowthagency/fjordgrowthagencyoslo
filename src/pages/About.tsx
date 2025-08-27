import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const teamMembers = [
    {
      name: "LUKMAN JEJE",
      role: "JEJESTICALLY PRO",
      expertise: ["Digital Marketing", "Brand Strategy", "Creative Solutions"],
      description: "Expert in creating compelling digital experiences and brand strategies for laundry businesses.",
      image: "/lovable-uploads/bc0bf7c4-3118-4994-8fa7-bdae5975a8c7.png"
    },
    {
      name: "MUSBAU BASIT", 
      role: "BASIT DIGITAL HUB",
      expertise: ["Digital Innovation", "Growth Hacking", "Performance Marketing"],
      description: "Specialist in digital transformation and performance-driven marketing solutions.",
      image: "/lovable-uploads/0866dbc8-df0a-4a46-9567-854b04fe9b47.png"
    },
    {
      name: "ALANI TEMITOPE",
      role: "LEAMZY GROWTH TECH", 
      expertise: ["Growth Technology", "Analytics", "Customer Acquisition"],
      description: "Expert in leveraging technology for sustainable business growth and customer acquisition.",
      image: "/lovable-uploads/b1063ee6-690d-4dfe-adb6-703d154d6856.png"
    },
    {
      name: "HAMMED TAWWAB",
      role: "MAXI TAWWAB", 
      expertise: ["Strategic Consulting", "Business Development", "Market Expansion"],
      description: "Consultant specializing in business development and market expansion strategies.",
      image: "/lovable-uploads/5fa598dc-95cc-4aee-84b2-b7be3060e065.png"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-hero">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Fjord Growth Agency
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
            We're the Norwegian growth experts helping laundry and dry cleaning businesses 
            across Oslo dominate their local market.
          </p>
        </div>
      </section>

      {/* About Story */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded in the heart of Oslo, Fjord Growth Agency was born from a simple observation: 
                  amazing laundry and dry cleaning services were struggling to be found by customers who needed them most.
                </p>
                <p>
                  Like the powerful Norwegian fjords that shape our landscape, we believe in the force of 
                  strategic, sustained growth that carves new paths to success.
                </p>
                <p>
                  Today, we've helped over 50+ laundry businesses across Oslo increase their customer base 
                  by an average of 200% within the first 6 months.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <img 
                  src="/lovable-uploads/b53482a7-7762-411a-9ce4-3e99968794a0.png"
                  alt="Fjord Growth Agency Logo"
                  className="w-48 h-48 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 section-premium">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our Team of Experts
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our specialists combine Norwegian business acumen with cutting-edge digital marketing 
              to deliver exceptional results for laundry businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-premium border-0 overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className={`w-full h-full object-cover ${
                      member.name === "MUSBAU BASIT" || member.name === "HAMMED TAWWAB" 
                        ? "object-top" 
                        : ""
                    }`}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4">{member.role}</p>
                  <p className="text-muted-foreground mb-4">{member.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Our Values</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Results-Driven</h3>
              <p className="text-muted-foreground">
                Every strategy is measured by real customer growth and revenue increase.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Partnership Focused</h3>
              <p className="text-muted-foreground">
                We work as an extension of your team, not just another vendor.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Continuous Innovation</h3>
              <p className="text-muted-foreground">
                Always testing new approaches to stay ahead of the competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;