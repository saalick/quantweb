import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import ProductSuite from "@/components/ProductSuite";
import WhyQuantel from "@/components/WhyQuantel";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Affiliate from "@/components/Affiliate";
import Footer from "@/components/Footer";
import DiscountPopup from "@/components/DiscountPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProblemSolution />
      <ProductSuite />
      <WhyQuantel />
      <Pricing />
      <About />
      <FAQ />
      <Affiliate />
      <Footer />
      <DiscountPopup />
    </div>
  );
};

export default Index;
