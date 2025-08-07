import { cn } from "@/lib/utils";

interface SectionDividerProps {
  variant?: "wave" | "diagonal" | "curved";
  className?: string;
  color?: "primary" | "secondary" | "accent";
}

const SectionDivider = ({ 
  variant = "wave", 
  className,
  color = "primary" 
}: SectionDividerProps) => {
  const colorClasses = {
    primary: "fill-primary-600",
    secondary: "fill-secondary-600", 
    accent: "fill-accent-600"
  };

  const WavePattern = () => (
    <svg 
      className={cn("w-full h-8", colorClasses[color])} 
      viewBox="0 0 1200 120" 
      preserveAspectRatio="none"
    >
      <path d="M0,0V60c240,20,480,40,600,0s360-40,600,0V0Z" />
    </svg>
  );

  const DiagonalPattern = () => (
    <svg 
      className={cn("w-full h-8", colorClasses[color])} 
      viewBox="0 0 1200 120" 
      preserveAspectRatio="none"
    >
      <polygon points="0,0 1200,0 0,120" />
    </svg>
  );

  const CurvedPattern = () => (
    <svg 
      className={cn("w-full h-12", colorClasses[color])} 
      viewBox="0 0 1200 120" 
      preserveAspectRatio="none"
    >
      <path d="M0,0V80Q600,40,1200,80V0Z" />
    </svg>
  );

  const patterns = {
    wave: <WavePattern />,
    diagonal: <DiagonalPattern />,
    curved: <CurvedPattern />
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {patterns[variant]}
    </div>
  );
};

export default SectionDivider;