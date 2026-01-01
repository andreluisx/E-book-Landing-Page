import { SectionTitle } from "./SectionTitle";
import {
  BookOpen,
  MessageCircle,
  CheckSquare,
  FileText,
  Users,
  Shield,
  Smartphone,
} from "lucide-react";

const features = [
  { icon: BookOpen, text: "Ebook completo em PDF" },
  { icon: MessageCircle, text: "Linguagem acessível e prática" },
  { icon: CheckSquare, text: "Estratégias por idade" },
  { icon: FileText, text: "Checklists prontos para usar" },
  { icon: Users, text: "Contrato digital familiar incluso" },
];

export function ProductSection() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-background">
      <div className="section-container">
        <SectionTitle title="O guia que todo pai deveria ter antes de entregar um celular ao filho" />

        <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
          {/* Mockup */}
          {/* Apresentação Épica do Produto */}
          <div className="relative flex justify-center items-center">
            {/* Base flutuante e sombra */}
            <div className="absolute -bottom-6 w-[80%] h-12 bg-linear-to-t from-black/40 to-transparent blur-2xl rounded-full" />

            {/* Card de apresentação épico */}
            <div className="relative group">
              {/* Efeito de brilho ao redor */}
              <div className="absolute -inset-4 bg-linear-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card principal */}
              <div className="relative rounded-3xl p-3px bg-linear-to-br from-orange-200 via-indigo-900 to-orange-200">
                {/* Efeito de gradiente interno */}
                <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-background/90 to-background/70" />

                <div className="relative rounded-3xl bg-linear-to-b from-background/95 to-background/90 backdrop-blur-xl p-8 shadow-2xl border border-white/10 overflow-hidden">
                  {/* Elementos decorativos no card */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-linear-to-tr from-purple-500/10 to-transparent rounded-full translate-y-20 -translate-x-20" />

                  {/* Marcador de selo premium */}
                  <div className="absolute -top-3 -right-3 z-20">
                    <div className="relative">
                      <div className="w-24 h-24 bg-linear-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg rotate-12">
                        <div className="w-20 h-20 bg-linear-to-br from-yellow-300 to-amber-400 rounded-full flex flex-col items-center justify-center">
                          <Shield className="h-8 w-8 text-white" />
                          <span className="text-xs font-bold text-white mt-1">
                            ESSENCIAL
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Capa do ebook com efeito 3D */}
                  <div
                    className="relative "
                    onClick={() =>
                      window.open("https://pay.kiwify.com.br/avV3r8A", "_blank")
                    }
                  >
                    <div className="relative mx-auto w-full max-w-md">
                      {/* Efeito de páginas */}
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-linear-to-t from-gray-800/40 to-transparent rounded-[50%] blur-sm" />
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[92%] h-6 bg-linear-to-t from-gray-800/30 to-transparent rounded-[50%] blur-sm" />

                      {/* Capa principal com efeito de brilho */}
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-2xl">
                        {/* Borda sutil */}
                        <div className="absolute inset-0 ring-2 ring-white/20 pointer-events-none rounded-2xl z-10" />

                        {/* Gradiente sobre a imagem */}
                        <div className="absolute inset-0 bg-linear-to-t from-primary/20 via-transparent to-transparent z-0" />

                        {/* Imagem da capa */}
                        <img
                          src="images/livrosemfundo.png"
                          alt="Capa do guia 'Celular Consciente - Um guia para pais'"
                          className="w-full h-full object-cover rounded-2xl z-0 relative"
                        />

                        {/* Overlay de informações */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 via-black/50 to-transparent z-20 rounded-b-2xl">
                          <div className="flex items-center gap-3 mb-3">
                            <Smartphone className="h-5 w-5 text-white" />
                            <span className="text-white font-semibold text-sm">
                              GUIA COMPLETO
                            </span>
                          </div>
                          <p className="text-white/80 text-sm mt-1">
                            Um guia para pais
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-6">
              O que está incluso:
            </h3>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li
                  key={feature.text}
                  className="flex items-center gap-4 p-3 bg-slate-200 rounded-xl border border-slate-300"
                >
                  <div className="w-11 h-11 rounded-lg bg-orange-100  flex items-center justify-center shrink-0">
                    <feature.icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <span className="font-sans font-medium text-md sm:text-base">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-orange-100 rounded-xl border border-orange-200">
              <p className="font-sans text-sm text-foreground">
                <strong className="text-orange-600">
                  Não é um livro contra tecnologia.
                </strong>
                <br />É um livro sobre{" "}
                <span className="font-semibold">
                  controle, consciência e desenvolvimento saudável
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
