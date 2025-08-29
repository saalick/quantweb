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
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
          Systematize Your Trading
          <span className="block text-primary">with Quantel</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          Institutional-grade TradingView Indicators built on{" "}
          <span className="text-primary font-semibold">ICT</span>,{" "}
          <span className="text-primary font-semibold">SMC</span>, and{" "}
          <span className="text-accent font-semibold">Quantitative Models</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="xl" 
            variant="hero"
            asChild
            className="animate-pulse-glow"
          >
            <a 
              href="https://whop.com/quantel/institutional-indicator-suite/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Start Trading Smarter – $29.99/month
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
          Join <span className="text-primary font-semibold">5+ traders</span> already systematizing their trading
        </div>
      </div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-gradient-shift opacity-30" />
    </section>
  );
};

export default Hero;