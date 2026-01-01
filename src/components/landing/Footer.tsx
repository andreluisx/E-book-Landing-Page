export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 mb-20 px-4 bg-foreground text-background">
      <div className="section-container">
        <div className="text-center">
          <p className="font-serif text-lg font-semibold mb-2">
            Criando Filhos Longe do Vício em Telas
          </p>
          <p className="text-sm text-background/60 mb-4">
            O guia definitivo para pais conscientes na era digital
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-xs text-background/50 mb-4">
            <a href="#" className="hover:text-background transition-colors">Termos de Uso</a>
            <span>•</span>
            <a href="#" className="hover:text-background transition-colors">Política de Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:text-background transition-colors">Contato</a>
          </div>

          <p className="text-xs text-background/40">
            © {currentYear} Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
