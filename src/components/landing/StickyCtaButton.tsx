import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface StickyCtaButtonProps {
  checkoutUrl?: string;
}

export function StickyCtaButton({ checkoutUrl = "https://pay.kiwify.com.br/avV3r8A" }: StickyCtaButtonProps) {
  const handleClick = () => {
    if (checkoutUrl.startsWith("#")) {
      document.querySelector(checkoutUrl)?.scrollIntoView({ behavior: "smooth" });
    } else {
      
      window.open(checkoutUrl, "_blank");
    }
  };

  return (
    <div className="fixed bottom-0 text-white left-0 right-0 z-50 p-3 bg-background/95 backdrop-blur-sm border-t border-border md:hidden">
      <Button 
        onClick={handleClick}
        className="w-full  bg-gradient-hope text-primary-foreground font-semibold text-base py-6 rounded-xl shadow-glow animate-pulse-glow"
        size="lg"
      >
        Quero proteger meu filho agora
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
}
