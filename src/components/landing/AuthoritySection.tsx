import { SectionTitle } from "./SectionTitle";
import { CtaButton } from "./CtaButton";
import { Award, FileCheck, Globe, BookOpen } from "lucide-react";

const authorities = [
  {
    icon: Globe,
    name: "OMS",
    description: "Organização Mundial da Saúde",
  },
  {
    icon: BookOpen,
    name: "NIH",
    description: "National Institutes of Health",
  },
  {
    icon: Award,
    name: "AAP",
    description: "American Academy of Pediatrics",
  },
  {
    icon: FileCheck,
    name: "Estudos",
    description: "Revisados por pares",
  },
];

export function AuthoritySection() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-background">
      <div className="section-container">
        <SectionTitle
          title="Isso não é opinião. É ciência."
          subtitle="Baseado em pesquisas das instituições mais respeitadas do mundo"
        />

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {authorities.map((auth) => (
            <div
              key={auth.name}
              className="bg-card rounded-xl p-4 sm:p-6 text-center border border-border/50 shadow-card hover:shadow-soft transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-orange-100 rounded-full flex items-center justify-center">
                <auth.icon className="h-6 w-6 text-orange-500" />
              </div>
              <p className="font-semibold text-foreground text-lg sm:text-md">
                {auth.name}
              </p>
              <p className="text-sm text-slate-500 mt-1">{auth.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-slate-100 rounded-2xl border border-border">
          <p className="font-sans text-sm sm:text-md text-slate-600 leading-relaxed text-center max-w-2xl mx-auto">
            Estudos associam o uso excessivo de telas a{" "}
            <strong className="text-black">ansiedade</strong>,{" "}
            <strong className="text-black">déficit de atenção</strong>,{" "}
            <strong className="text-black">problemas de sono</strong> e{" "}
            <strong className="text-black">queda no desempenho escolar</strong>.
          </p>
        </div>

        <div className="mt-8 text-center">
          <CtaButton
            variant="primary"
            size="lg"
            className="w-full text-white animate-pulse-glow
                  transition-transform
                  hover:scale-[1.03]
                  active:scale-[0.98]"
          >
            Quero uma solução baseada em ciência
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
