import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  glowEffect?: boolean;
  hoverLift?: boolean;
  magneticEffect?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const InteractiveCard = ({ 
  children, 
  className, 
  glowEffect = false, 
  hoverLift = true,
  magneticEffect = false,
  onClick,
  style 
}: InteractiveCardProps) => {
  return (
    <Card 
      className={cn(
        "transition-all duration-300 cursor-pointer border-border/50",
        hoverLift && "hover:shadow-elegant hover:-translate-y-2",
        magneticEffect && "magnetic",
        glowEffect && "hover:shadow-glow",
        "glass backdrop-blur-sm border-white/10",
        className
      )}
      onClick={onClick}
      style={style}
    >
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  );
};

export default InteractiveCard;