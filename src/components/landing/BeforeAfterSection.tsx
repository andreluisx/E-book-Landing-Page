import { SectionTitle } from "./SectionTitle";
import { X, Check } from "lucide-react";

const beforeItems = [
  "Vício em vídeos curtos",
  "Baixa tolerância ao tédio",
  "Falta de criatividade",
  "Explosões emocionais",
  "Sono irregular",
];

const afterItems = [
  "Mais foco e paciência",
  "Criatividade ativa",
  "Sono regulado",
  "Equilíbrio emocional",
  "Relação saudável com tecnologia",
];

export function BeforeAfterSection() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-gradient-warm">
      <div className="section-container">
        <SectionTitle 
          title="A transformação é possível"
          subtitle="Veja a diferença que o conhecimento certo pode fazer"
        />

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {/* Before Card */}
          <div className="bg-indigo-200/90 border-indigo-400 rounded-2xl p-6 border">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-11 h-11 rounded-full bg-indigo-900 flex items-center justify-center">
                <X className="h-7 w-7 text-slate-50" />
              </div>
              <h3 className="font-serif text-xl font-bold text-alert">Antes</h3>
            </div>
            <ul className="space-y-3">
              {beforeItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-black font-sans">
                  <X className="h-5 w-5 text-indigo-950 shrink-0" />
                  <span className="text-md ">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After Card */}
          <div className="bg-green-100/90 rounded-2xl p-6 border border-green-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-11 h-11 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="h-7 w-7 text-slate-50" />
              </div>
              <h3 className="font-serif text-xl font-bold text-success">Depois</h3>
            </div>
            <ul className="space-y-3">
              {afterItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground font-sans">
                  <Check className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="text-md ">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-center font-sans text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
          <strong className="text-lg">A diferença não está na criança.</strong>
          <br />
          Está no <span className="text-primary font-semibold">ambiente</span> que ela cresce.
        </p>
      </div>
    </section>
  );
}
