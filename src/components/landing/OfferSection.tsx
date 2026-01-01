import { SectionTitle } from "./SectionTitle";
import { CtaButton } from "./CtaButton";
import { CountdownTimer } from "./CountdownTimer";
import { Check, Sparkles } from "lucide-react";

const included = [
  "Ebook completo em PDF",
  "Checklists prontos para imprimir",
  "Contrato digital familiar",
  "Estratégias por faixa etária",
  "Atualizações gratuitas",
];

export function OfferSection() {
  return (
    <section id="oferta" className="py-16 sm:py-20 px-4 bg-gradient-warm">
      <div className="section-container">
        <SectionTitle title="Quanto vale o desenvolvimento emocional do seu filho?" />

        <div className="mt-10 max-w-xl mx-auto">
          {/* Price Anchoring */}
          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border border-border">
            <p className="text-center text-muted-foreground font-sans text-sm mb-6">
              Compare com outras soluções:
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-muted-foreground text-sm line-through">
                  1 sessão de terapia infantil
                </span>
                <span className="text-muted-foreground text-sm line-through">
                  R$ 250+
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-muted-foreground text-sm line-through">
                  Curso presencial parental
                </span>
                <span className="text-muted-foreground text-sm line-through">
                  R$ 500+
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-muted-foreground text-sm line-through">
                  Consulta com neuropediatra
                </span>
                <span className="text-muted-foreground text-sm line-through">
                  R$ 400+
                </span>
              </div>
            </div>

            {/* What's included */}
            <div className="bg-secondary/50 rounded-xl p-4 mb-6">
              <p className="font-semibold text-foreground text-sm mb-3">
                Tudo isso incluso:
              </p>
              <ul className="space-y-2">
                {included.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <Check className="h-4 w-4 text-success" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div className="text-center mb-6">
              <p className="text-sm text-muted-foreground mb-1">
                Acesso imediato por apenas
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-lg text-muted-foreground line-through">
                  R$ 97
                </span>
                <span className="text-4xl sm:text-5xl font-bold text-green-600 text-primary">
                  R$ 37
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Pagamento único • Acesso vitalício
              </p>
            </div>

            {/* Urgency */}
            <div className="mb-6">
              <p className="text-center text-sm text-alert font-semibold mb-3 flex items-center justify-center gap-2">
                <Sparkles className="h-4 w-4" />
                Oferta especial termina em:
              </p>
              <CountdownTimer hours={1} minutes={47} seconds={33} />
            </div>

            {/* CTA */}
            <CtaButton
              onClick={() => window.open("https://pay.kiwify.com.br/avV3r8A", "_blank")}
              variant="primary"
              size="lg"
              className="w-full text-white animate-pulse-glow
                  transition-transform
                  hover:scale-[1.03]
                  active:scale-[0.98]"
            >
              Quero acesso imediato
            </CtaButton>

            <p className="text-center text-xs text-muted-foreground mt-4">
              🔒 Pagamento seguro no Kiwify • Entrega imediata no site e e-mail
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
