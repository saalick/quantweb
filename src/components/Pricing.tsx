import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, Zap } from "lucide-react";

const Pricing = () => {
  const features = [
    "All 8 institutional-grade indicators",
    "Lifetime updates and refinements", 
    "Multi-device access and compatibility",
    "Cross-market utility (Forex, Crypto, Indices, Stocks)",
    "ICT/SMC methodology integration",
    "Advanced quantitative analysis tools",
    "Community Discord access",
    "Priority customer support"
  ];

  return (
    <section className="py-24 px-6 bg-gradient-hero">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            One subscription gives you access to our complete institutional indicator suite
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-primary/20 shadow-elevated relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-primary" />
          
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">MOST POPULAR</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-6xl md:text-7xl font-bold text-foreground">$29</span>
                  <span className="text-2xl text-muted-foreground">.99</span>
                  <span className="text-lg text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground">
                  Cancel anytime. No hidden fees.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">What's included:</h3>
              <div className="grid md:grid-cols-2 gap-3 text-left">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              size="xl" 
              variant="hero"
              asChild
              className="w-full animate-pulse-glow"
            >
              <a 
                href="https://whop.com/quantel/institutional-indicator-suite/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Join Quantel Today
                <ArrowRight className="ml-2" />
              </a>
            </Button>

            <p className="text-sm text-muted-foreground">
              Join <span className="text-primary font-semibold">5+ traders</span> already using Quantel to systematize their trading
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;