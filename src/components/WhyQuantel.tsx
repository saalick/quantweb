import { Building2, RefreshCw, Globe, BarChart3 } from "lucide-react";

const WhyQuantel = () => {
  const differentiators = [
    {
      icon: Building2,
      title: "Institutional-Grade Tools",
      description: "Built on ICT/SMC methodologies combined with advanced quantitative analysis for professional-level trading precision"
    },
    {
      icon: RefreshCw,
      title: "Constant Evolution",
      description: "Regular updates and refinements based on market changes and community feedback to maintain cutting-edge performance"
    },
    {
      icon: Globe,
      title: "Cross-Market Utility",
      description: "Works seamlessly across forex, indices, cryptocurrency, and equities for complete market versatility"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Precision",
      description: "Eliminates emotion and guesswork with systematic, algorithmic approaches to market analysis and trade execution"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trade with <span className="text-primary">Structure</span>. Trade with <span className="text-accent">Confidence</span>.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What sets Quantel apart from the countless other trading tools in the market
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gradient-card border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-elevated hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                  <item.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <BarChart3 className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Turning intuition into algorithms</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyQuantel;