
import { useEffect, useState } from "react";

interface LogoProps {
  className?: string;
  animate?: boolean;
}

const Logo = ({ className = "", animate = false }: LogoProps) => {
  const [isAnimating, setIsAnimating] = useState(animate);

  useEffect(() => {
    if (animate) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div 
        className={`w-16 h-16 flex items-center justify-center ${
          isAnimating ? 'rolling-logo' : ''
        }`}
      >
        <img 
          src="/lovable-uploads/b53482a7-7762-411a-9ce4-3e99968794a0.png" 
          alt="Fjord Growth Agency Logo" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Logo;
