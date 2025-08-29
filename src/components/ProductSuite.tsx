import { Card } from "@/components/ui/card";
import { TrendingUp, Zap, Droplets, RotateCw, Users, Target, Brain, Activity } from "lucide-react";

const ProductSuite = () => {
  const indicators = [
    {
      icon: Brain,
      title: "ICT/SMC Indicators",
      description: "Smart Money Concepts and Inner Circle Trader methodologies for institutional-level analysis"
    },
    {
      icon: Target,
      title: "PO3/AMD Indicator", 
      description: "Power of Three and Asia-London-New York session analysis for precise market timing"
    },
    {
      icon: Droplets,
      title: "Advanced Liquidity Indicator",
      description: "Identify liquidity pools and sweeps with institutional precision and clarity"
    },
    {
      icon: RotateCw,
      title: "Break & Retest Indicator",
      description: "Systematic identification of valid breaks and high-probability retest opportunities"
    },
    {
      icon: TrendingUp,
      title: "TJR Indicator",
      description: "Trade Journal Ready signals for consistent entry and exit management"
    },
    {
      icon: Zap,
      title: "RP Profits Indicator",
      description: "Risk-to-reward optimized signals for maximum profitability per trade"
    },
    {
      icon: Users,
      title: "Tom Trades Indicator",
      description: "Community-validated setups based on successful trading methodologies"
    },
    {
      icon: Activity,
      title: "SMC Casper Indicator",
      description: "Advanced Smart Money Concepts with enhanced market structure analysis"
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-gradient-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Institutional <span className="text-primary">Indicator Suite</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            One subscription. <span className="text-accent font-semibold">Endless possibilities.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {indicators.map((indicator, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:-translate-y-2 group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <indicator.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <h3 className="font-semibold text-foreground text-lg leading-tight">
                  {indicator.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {indicator.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All indicators include <span className="text-primary font-semibold">lifetime updates</span> and{" "}
            <span className="text-accent font-semibold">cross-market compatibility</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductSuite;