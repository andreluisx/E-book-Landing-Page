import { SectionTitle } from "./SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    question: "Funciona para qualquer idade?",
    answer: "Sim! O guia aborda estratégias específicas para diferentes faixas etárias, desde bebês até adolescentes. Você vai encontrar orientações adequadas para cada fase do desenvolvimento."
  },
  {
    question: "O conteúdo é muito radical ou extremo?",
    answer: "Não. O guia não defende eliminar 100% das telas. Defendemos o uso consciente, equilibrado e adequado à idade. O objetivo é criar uma relação saudável com a tecnologia, não proibi-la."
  },
  {
    question: "Preciso tirar o celular totalmente do meu filho?",
    answer: "Não necessariamente. O guia ensina como estabelecer limites saudáveis, criar rotinas balanceadas e substituir o tempo excessivo de tela por atividades que desenvolvem habilidades importantes."
  },
  {
    question: "É baseado em estudos científicos?",
    answer: "Sim! Todo o conteúdo é fundamentado em pesquisas de neurociência, psicologia do desenvolvimento e recomendações de organizações como OMS, NIH e American Academy of Pediatrics."
  },
  {
    question: "Consigo aplicar mesmo trabalhando muito?",
    answer: "Com certeza. As estratégias foram pensadas para famílias reais, com rotinas corridas. Você vai encontrar checklists práticos e ações simples que se encaixam no dia a dia de quem trabalha."
  },
  {
    question: "Como recebo o material?",
    answer: "Imediatamente após a confirmação do pagamento, você recebe um email com o link para download do PDF. Você pode ler no celular, tablet, computador ou imprimir."
  },
];

export function FaqSection() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-slate-100">
      <div className="section-container">
        <SectionTitle 
          title="Perguntas Frequentes"
          subtitle="Tire suas dúvidas antes de decidir"
        />

        <div className="mt-10 max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-slate-50 rounded-xl border border-border/50 px-4 sm:px-6 shadow-card"
              >
                <AccordionTrigger className="font-sans font-semibold text-foreground text-left text-sm sm:text-base py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground text-sm sm:text-base pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
