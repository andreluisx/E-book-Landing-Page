import { CtaButton } from "./CtaButton";
import { Heart } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-gradient-alert text-white">
      <div className="section-container text-center max-w-2xl mx-auto">
        <Heart className="h-12 w-12 mx-auto mb-6 text-hope-light" />

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6">
          Você não pode controlar o mundo digital.
          <br />
          <span className="text-hope-light">Mas pode controlar como seu filho cresce dentro dele.</span>
        </h2>

        <p className="font-sans text-base sm:text-lg text-primary-foreground/80 leading-relaxed mb-8">
          A janela de oportunidade para formar hábitos saudáveis é agora. Cada dia conta no desenvolvimento do seu filho.
        </p>

        <CtaButton 
          variant="primary" 
          size="lg"
          className="bg-white text-blue-500 hover:bg-primary-foreground/90"
        >
          Quero começar agora
        </CtaButton>

      </div>
    </section>
  );
}
