import {  RefreshCcw } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-background">
      <div className="section-container">
        <div className="max-w-2xl mx-auto bg-green-200/90 rounded-2xl p-6 sm:p-10 border border-green-300 text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-success/20 rounded-full flex items-center justify-center">
            <img src="images/kiwify.jpg" className="w-full h-full object-cover rounded-full" alt="" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Garantia De compra segura pelo kiwify
          </h2>

          <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
            Seus dados nunca serão vistos por ninguém graças ao kiwify! <strong className="text-foreground">Compra totalmente segura e rápida</strong>, em segundos voce recebe seu e-book
          </p>

          <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
            <RefreshCcw className="h-5 w-5" />
            <span>Risco zero para você</span>
          </div>
        </div>
      </div>
    </section>
  );
}
