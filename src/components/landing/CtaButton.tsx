import { Button } from "../ui/button"; 
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

interface CtaButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg";
  className?: string;
  onClick?: () => void;
}

export function CtaButton({ 
  children, 
  href = "#oferta", 
  variant = "primary",
  size = "lg",
  className,
  onClick
}: CtaButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, "_blank");
    }
  };

  const variants = {
    primary: "bg-gradient-hope font-semibold shadow-glow transition-all duration-300",
    secondary: "bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80",
    ghost: "bg-transparent text-primary underline underline-offset-4 hover:text-primary/80",
  };

  const sizes = {
    default: "py-3 px-6 text-sm",
    lg: "py-3 px-8 text-md",
  };

  return (
    <Button 
      onClick={handleClick}
      className={cn(
        "rounded-xl w-full h-auto whitespace-normal warp-break-words",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
      {variant === "primary" && <ArrowRight className="ml-2 h-6 w-6 " />}
    </Button>
  );
}
