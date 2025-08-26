import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <CTASection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Contact;