import { SectionTitle } from "./SectionTitle";
import { Check } from "lucide-react";

const learnings = [
  "Como o cérebro infantil reage às redes sociais e por que isso é perigoso",
  "Como criar limites saudáveis sem brigas constantes",
  "Atividades práticas que substituem telas e desenvolvem inteligência",
  "O que fazer se o vício já existe — estratégias de recuperação",
  "Como preparar seu filho para o mundo digital sem adoecer",
  "Rotinas diárias testadas e aprovadas por famílias reais",
  "Como lidar com a pressão social de outras crianças",
];

export function WhatYouLearnSection() {
  return (
    <section id="o-que-voce-aprende" className="py-16 sm:py-20 px-4 bg-slate-100">
      <div className="section-container">
        <SectionTitle 
          title="O que você vai aprender"
          subtitle="Conhecimento prático que transforma a realidade da sua família"
        />

        <div className="mt-10 max-w-2xl mx-auto space-y-4">
          {learnings.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-border/50 shadow-card hover:shadow-soft transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-hope flex items-center justify-center shrink-0">
                <Check className="h-4 w-4 text-slate-50" />
              </div>
              <p className="font-sans text-sm sm:text-base text-foreground leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
