import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, BarChart3 } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <TrendingUp className="w-8 h-8 text-primary opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <BarChart3 className="w-6 h-6 text-accent opacity-40" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <img 
            src="/quantel-logo.png" 
            alt="Quantel Logo" 
            className="h-24 md:h-32 lg:h-36 mx-auto mb-6 opacity-90"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
          Trade with Precision,
          <span className="block text-primary">Not Guesswork</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          Quantel delivers TradingView indicators built on profitable strategies and quantitative models, plus tools that automate what advanced traders usually identify manually.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="xl" 
            variant="hero"
            asChild
            className="animate-pulse-glow"
          >
            <a 
              href="https://whop.com/quantel-io/quantel-io-90/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Start Trading Smarter
              <ArrowRight className="ml-2" />
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            onClick={scrollToFeatures}
          >
            Learn More
          </Button>
        </div>

        <div className="mt-12 text-sm text-muted-foreground">
          Join <span className="text-primary font-semibold">100+ traders</span> already systematizing their trading with Quantel
        </div>
      </div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-gradient-shift opacity-30" />
    </section>
  );
};

export default Hero;