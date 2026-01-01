import { SectionTitle } from "./SectionTitle";

export function VideoSection() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-alert">
      <div className="section-container">
        <SectionTitle
          title="Assista e entenda o impacto das telas"
          subtitle="Uma explicação clara e direta sobre o que está acontecendo com nossos filhos"
          className="text-primary-foreground [&_p]:text-primary-foreground/80"
        />

        <div className="mt-10 max-w-3xl mx-auto">
          {/* Container do vídeo */}
          <div className="relative aspect-9/16 md:aspect-video bg-black rounded-2xl overflow-hidden border-4 border-primary-foreground/20 shadow-lg">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/CLpaAFLcTmY"
              title="Vídeo explicativo - Criança Sem Tela"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <p className="mt-6 text-center text-primary-foreground/80 text-sm sm:text-base font-sans">
            💡 <strong className="text-primary-foreground">Dica:</strong> Assista com seu cônjuge para alinharem as estratégias.
          </p>
        </div>
      </div>
    </section>
  );
}
