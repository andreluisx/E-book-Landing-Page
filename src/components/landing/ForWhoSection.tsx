import { SectionTitle } from "./SectionTitle";
import { Check, X } from "lucide-react";

const forWho = [
  "Pais preocupados com o futuro dos filhos",
  "Futuros pais que querem começar certo",
  "Educadores e professores conscientes",
  "Avós que cuidam dos netos",
  "Qualquer adulto responsável por crianças",
];

const notForWho = [
  "Quem acha que \"é só uma fase\"",
  "Quem terceiriza a educação para as telas",
  "Quem não quer mudar hábitos próprios",
];

export function ForWhoSection() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-background">
      <div className="section-container">
        <SectionTitle 
          title="Este guia é para você?"
        />

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {/* For Who */}
          <div className="bg-green-100/90 rounded-2xl p-6 border border-green-200">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-green-500 mb-4 flex items-center gap-2">
              <Check className="h-5 w-5" />
              É para você se...
            </h3>
            <ul className="space-y-3">
              {forWho.map((item) => (
                <li key={item} className="flex items-start gap-3 font-sans text-sm sm:text-base text-foreground">
                  <Check className="h-4 w-4 text-green-500 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For Who */}
          <div className="bg-indigo-200/80 rounded-2xl p-6 border border-border">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-indigo-600/90 mb-4 flex items-center gap-2">
              <X className="h-5 w-5" />
              Não é para você se...
            </h3>
            <ul className="space-y-3">
              {notForWho.map((item) => (
                <li key={item} className="flex items-start gap-3 font-sans text-sm sm:text-base text-slate-500">
                  <X className="h-4 w-4 shrink-0 mt-1 text-indigo-600/90" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
