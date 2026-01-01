import { SectionTitle } from "./SectionTitle";
import { FeatureCard } from "./FeatureCard";
import { 
  Smartphone, 
  BrainCog, 
  Moon, 
  Users, 
  HeartCrack 
} from "lucide-react";

const problems = [
  {
    icon: Smartphone,
    title: "Crianças irritadas quando ficam sem celular",
    description: "Choro, gritos e birras ao tentar limitar o tempo de tela"
  },
  {
    icon: BrainCog,
    title: "Falta de foco e dificuldade de aprendizado",
    description: "Não conseguem se concentrar em atividades que não sejam telas"
  },
  {
    icon: Moon,
    title: "Sono desregulado",
    description: "Dificuldade para dormir e acordar, impactando o desenvolvimento"
  },
  {
    icon: Users,
    title: "Isolamento social",
    description: "Preferem telas a brincar com outras crianças"
  },
  {
    icon: HeartCrack,
    title: "Dependência emocional de telas",
    description: "Usam dispositivos para se acalmar ou fugir de emoções"
  },
];

export function ProblemSection() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-alert/5">
      <div className="section-container">
        <SectionTitle 
          title="Isso já está acontecendo dentro da sua casa?"
          subtitle="Reconheça os sinais antes que se tornem padrões irreversíveis"
        />

        <div className="mt-10 grid gap-4">
          {problems.map((problem) => (
            <FeatureCard
              key={problem.title}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
              variant="alert"
            />
          ))}
        </div>

        <div className="mt-10 p-6 bg-slate-200 rounded-2xl  border border-slate-300">
          <p className="font-sans text-base sm:text-lg  leading-relaxed text-center">
            <strong className="text-alert text-xl text-indigo-900">Não é falta de disciplina.</strong>
            <br />
            É <span className="font-bold">engenharia de dopamina</span> trabalhando contra o cérebro do seu filho.
          </p>
        </div>
      </div>
    </section>
  );
}
