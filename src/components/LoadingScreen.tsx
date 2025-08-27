import { useEffect, useState } from "react";
import Logo from "./Logo";

interface LoadingScreenProps {
  isVisible: boolean;
  onComplete: () => void;
}

const LoadingScreen = ({ isVisible, onComplete }: LoadingScreenProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1500); // Loading duration
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="mb-4">
          <Logo animate={true} className="w-24 h-24 mx-auto" />
        </div>
        <div className="w-16 h-1 bg-primary/20 rounded-full mx-auto overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-primary to-primary-glow animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;