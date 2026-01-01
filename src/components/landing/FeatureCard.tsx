import { type LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  variant?: "default" | "alert" | "success";
}

export function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  variant = "default" 
}: FeatureCardProps) {
  const variants = {
    default: "bg-card border-border/50",
    alert: "bg-alert/10 border-alert/20",
    success: "bg-success/10 border-success/20",
  };

  const iconVariants = {
    default: "text-primary",
    alert: "text-alert",
    success: "text-success",
  };

  return (
    <div className={`rounded-xl p-4 border border-slate-300 bg-slate-200 ${variants[variant]} transition-all duration-300 hover:shadow-soft`}>
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-xl bg-white ${iconVariants[variant]}`}>
          <Icon className="h-6 w-6 text-indigo-900" />
        </div>
        <div className="flex-1">
          <h4 className="font-sans font-bold text-foreground text-md leading-tight">
            {title}
          </h4>
          {description && (
            <p className="text-slate-600 text-sm mt-1 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
