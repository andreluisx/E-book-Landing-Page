import { HeroSection } from "../components/landing/HeroSection";
import { ProblemSection } from "../components/landing/ProblemSection";
import { AuthoritySection } from "../components/landing/AuthoritySection";
import { BeforeAfterSection } from "../components/landing/BeforeAfterSection";
import { ProductSection } from "../components/landing/ProductSection";
import { VideoSection } from "../components/landing/VideoSection";
import { WhatYouLearnSection } from "../components/landing/WhatYouLearnSection";
import { ForWhoSection } from "../components/landing/ForWhoSection";
import { TestimonialsSection } from "../components/landing/TestimonialsSection";
import { OfferSection } from "../components/landing/OfferSection";
import { GuaranteeSection } from "../components/landing/GuaranteeSection";
import { FaqSection } from "../components/landing/FaqSection";
import { FinalCtaSection } from "../components/landing/FinalCtaSection";
import { Footer } from "../components/landing/Footer";
import { StickyCtaButton } from "../components/landing/StickyCtaButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <AuthoritySection />
      <BeforeAfterSection />
      <ProductSection />
      <VideoSection />
      <WhatYouLearnSection />
      <ForWhoSection />
      <TestimonialsSection />
      <OfferSection />
      <GuaranteeSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
      <StickyCtaButton  />
    </main>
  );
};

export default Index;
