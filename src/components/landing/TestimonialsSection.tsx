import { SectionTitle } from "./SectionTitle";
import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    quote: "Meu filho voltou a brincar, ler e conversar. Mudou completamente a dinâmica aqui em casa. Eu não sabia o que estava fazendo de errado até ler esse guia.",
    name: "Ana Paula",
    img: "images/pai1.png",
    role: "Mãe de 2 filhos",
  },
  {
    quote: "Eu não fazia ideia do impacto dos vídeos curtos no cérebro das crianças. Esse livro abriu meus olhos e me deu ferramentas práticas para agir.",
    name: "Ricardo",
    img: "images/pai2.jpg",
    role: "Pai e professor",
  },
  {
    quote: "Deveria ser leitura obrigatória para todos os pais. Informação científica apresentada de forma acessível e com estratégias que funcionam de verdade.",
    name: "Juliana",
    img: "images/pai3.jpg",
    role: "Psicopedagoga",
  },
  {
    quote: "Aplicamos as estratégias com nosso filho de 8 anos e em 2 semanas já vimos diferença no humor e no sono dele. Valeu cada centavo.",
    name: "Marcos e Carla",
    img: "images/pai4.jpg",
    role: "Pais de primeira viagem",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-secondary/30">
      <div className="section-container">
        <SectionTitle 
          title="O que os pais estão dizendo"
          subtitle="Histórias reais de famílias que transformaram sua relação com as telas"
        />

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              quote={testimonial.quote}
              name={testimonial.name}
              img={testimonial.img}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
