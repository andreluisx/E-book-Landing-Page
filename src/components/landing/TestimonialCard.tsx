import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  img: string;
  role: string;
}

export function TestimonialCard({ quote, name, img, role }: TestimonialCardProps) {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 relative">
      <Quote className="absolute top-4 right-4 h-8 w-8 text-orange-400/40" />
      <p className="text-foreground font-sans text-base leading-relaxed mb-4 italic">
        "{quote}"
      </p>
      <div className="flex items-center gap-3">
        <img src={img} className="w-11 h-11 border-2 border-orange-500 rounded-full bg-gradient-hope flex items-center justify-center text-primary-foreground font-semibold" alt="" />
        <div>
          <p className="font-semibold text-foreground text-sm">{name}</p>
          <p className="text-muted-foreground text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}
