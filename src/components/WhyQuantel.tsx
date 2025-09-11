import { Building2, RefreshCw, Globe, BarChart3 } from "lucide-react";

const WhyQuantel = () => {
  const differentiators = [
    {
      icon: Building2,
      title: "Strategy-Based Indicators with a Proven Edge",
      description: "Every model is developed and tested by our in-house quantitative team — backtested, forward-tested, and built to deliver consistency."
    },
    {
      icon: RefreshCw,
      title: "Advanced Tools for Precision",
      description: "Identify liquidity sweeps, FVGs, and market reactions instantly, without manually drawing levels."
    },
    {
      icon: Globe,
      title: "No Extra Software Needed",
      description: "Runs entirely on TradingView. Just link your account and start trading with institutional-grade signals."
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why <span className="text-primary">Quantel</span> Works
          </h2>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
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