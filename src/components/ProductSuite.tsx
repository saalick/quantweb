import { Card } from "@/components/ui/card";
import { TrendingUp, Zap, Droplets, RotateCw, Users, Target, Brain, Activity } from "lucide-react";

const ProductSuite = () => {
  const strategyIndicators = [
    {
      icon: TrendingUp,
      title: "Quantel NY AM Break & Retest",
      description: "High-probability break & retest setups around the NY open."
    },
    {
      icon: Activity,
      title: "15min Opening Range Breakout",
      description: "Trades momentum breakouts from the high or low of the first 15 minutes of price action, capturing early-move opportunities."
    },
    {
      icon: Target,
      title: "Quantel Liquidity Breakout Model", 
      description: "Identifies breakout moves with high accuracy, also doubles as a tool for key liquidity levels."
    },
    {
      icon: RotateCw,
      title: "Quantel Swing Pro",
      description: "Enters near swing highs/lows to ride short to medium-term trends for big overnight futures gains."
    }
  ];

  const tradingTools = [
    {
      icon: Droplets,
      title: "Session Liquidity & Sweep Detector",
      description: "Visualize liquidity grabs before major moves."
    },
    {
      icon: Zap,
      title: "iFVG & Breakout Detector",
      description: "Spots inefficiencies and breakout opportunities instantly."
    },
    {
      icon: Brain,
      title: "FVG & iFVG ICT Indicator",
      description: "Highlights fair value gaps and imbalances using ICT concepts."
    },
    {
      icon: Users,
      title: "ICT Killzones & Pivots",
      description: "Automatically marks optimal trading zones and key pivot areas."
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-gradient-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The <span className="text-primary">Quantel Suite</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quantel isn't just one indicator — it's a full trading arsenal:
          </p>
        </div>

        <div className="space-y-12">
          {/* Strategy-Based Indicators */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              <span className="text-primary">Strategy-Based</span> Indicators
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {strategyIndicators.map((indicator, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:-translate-y-2 group cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <indicator.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    <h4 className="font-semibold text-foreground text-lg leading-tight">
                      {indicator.title}
                    </h4>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {indicator.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Advanced Trading Tools */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              <span className="text-accent">Advanced Trading</span> Tools
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tradingTools.map((tool, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-card hover:-translate-y-2 group cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                      <tool.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    <h4 className="font-semibold text-foreground text-lg leading-tight">
                      {tool.title}
                    </h4>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
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