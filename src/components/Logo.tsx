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
        className={`w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg ${
          isAnimating ? 'rolling-logo' : ''
        }`}
      >
        F
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-primary">Fjord Growth</span>
        <span className="text-sm text-muted-foreground">Agency</span>
      </div>
    </div>
  );
};

export default Logo;