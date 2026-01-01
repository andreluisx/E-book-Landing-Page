interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({ 
  title, 
  subtitle, 
  align = "center",
  className = "" 
}: SectionTitleProps) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <h2 className="font-serif text-3xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-500 text-xl sm:text-lg font-sans max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
