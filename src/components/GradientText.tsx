import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "rainbow";
}

const GradientText = ({ children, className, variant = "primary" }: GradientTextProps) => {
  const gradients = {
    primary: "bg-gradient-to-r from-primary-600 to-primary-800",
    secondary: "bg-gradient-to-r from-secondary-600 to-accent-600", 
    rainbow: "bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
  };

  return (
    <span 
      className={cn(
        "bg-clip-text text-transparent font-bold",
        gradients[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default GradientText;