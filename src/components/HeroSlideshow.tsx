import { useState, useEffect } from "react";
import heroLaundryShop from "@/assets/hero-laundry-shop.jpg";
import heroFoldedLaundry from "@/assets/hero-folded-laundry.jpg";
import heroDelivery from "@/assets/hero-delivery.jpg";
import heroHappyCustomer from "@/assets/hero-happy-customer.jpg";

const slides = [
  {
    image: heroFoldedLaundry,
    alt: "Neatly folded clean laundry stacks"
  },
  {
    image: heroLaundryShop,
    alt: "Modern laundry shop in Oslo"
  },
  {
    image: heroDelivery,
    alt: "Laundry delivery service in Oslo"
  },
  {
    image: heroHappyCustomer,
    alt: "Happy customer receiving clean laundry"
  }
];

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>
      ))}
      
      {/* Floating Bubbles Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 bg-white/20 rounded-full floating-bubbles`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlideshow;