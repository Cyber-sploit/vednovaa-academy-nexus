import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface StatsCounterProps {
  end: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

const StatsCounter = ({ 
  end, 
  duration = 2000, 
  className, 
  suffix = "", 
  prefix = "" 
}: StatsCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutCubic * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`stats-${end}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end]);

  return (
    <span 
      id={`stats-${end}`} 
      className={cn("font-bold", className)}
    >
      {prefix}{count}{suffix}
    </span>
  );
};

export default StatsCounter;