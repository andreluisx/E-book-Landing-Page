import { Shield, Sparkles } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { CountdownTimer } from "./CountdownTimer";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-warm py-12 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-hope/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-hope-light/20 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6 shadow-soft">
          <Shield className="sm:h-4 sm:w-4 h-8 w-8 text-orange-500" />
          <span className="text-xs sm:text-sm text-slate-500 font-medium">
            Baseado em neurociência, psicologia infantil e recomendações médicas
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
          Como proteger seu filho do{" "}
          <span className="text-gradient-hope">vício em telas</span>{" "}
          antes que seja tarde demais
        </h1>

        {/* Subheadline */}
        <p className="font-sans text-slate-600 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
          Um guia científico e prático para criar crianças mais focadas, criativas e emocionalmente saudáveis — mesmo na era do TikTok e do scroll infinito.
        </p>

        {/* Urgency Counter */}
        <div className="mb-8">
          <p className="text-sm text-alert font-semibold mb-3 flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4" />
            Oferta especial termina em:
          </p>
          <CountdownTimer hours={1} minutes={47} seconds={33} />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CtaButton className="text-slate-100" variant="primary" size="lg">
            Quero proteger meu filho agora
          </CtaButton>
          <CtaButton variant="ghost" size="default" href="#o-que-voce-aprende">
            Ver o que vou aprender
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
