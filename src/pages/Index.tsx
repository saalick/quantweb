import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import ProductSuite from "@/components/ProductSuite";
import WhyQuantel from "@/components/WhyQuantel";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Affiliate from "@/components/Affiliate";
import Footer from "@/components/Footer";

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
    </div>
  );
};

export default Index;
