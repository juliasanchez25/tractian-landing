import { WhyChooseSection } from "./components/why-choose";
import { HeroSection } from "./components/hero";
import { HowItWorksSection } from "./components/how-it-works";
import { TestimonialsSection } from "./components/testimonials";
import { StepsSection } from "./components/steps";
import { CtaSection } from "./components/cta";
import { FaqSection } from "./components/faq";
import { YouControlSection } from "./components/you-control";
import { TrustedBySection } from "./components/trusted-by";
import { Footer } from "./components/footer";

export default function WhoWeServePage() {
  return (
    <div>
      <HeroSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <YouControlSection />
      <TestimonialsSection />
      <TrustedBySection />
      <StepsSection />
      <CtaSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
