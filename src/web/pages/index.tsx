import Header from "../components/Header";
import Hero from "../components/Hero";
import LogoBar from "../components/LogoBar";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import HowItWorks from "../components/HowItWorks";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ComparisonSection from "../components/ComparisonSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <main className="bg-[#070E1C] text-[#EFF6FF] overflow-x-hidden">
      <Header />
      <Hero />
      <LogoBar />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <FeaturesSection />
      <TestimonialsSection />
      <ComparisonSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
