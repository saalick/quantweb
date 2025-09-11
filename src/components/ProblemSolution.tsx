import { AlertTriangle, Target, Brain, TrendingUp } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Gambling Habits",
      description: "Chasing quick profits without strategy or structure"
    },
    {
      icon: Brain,
      title: "Emotional Decisions", 
      description: "FOMO and fear driving trading choices instead of data"
    },
    {
      icon: Target,
      title: "Inconsistent Entries",
      description: "No systematic approach to identifying high-probability setups"
    }
  ];

  const solutions = [
    {
      icon: Target,
      title: "Systematic Trading",
      description: "Data-driven entries based on institutional methodologies"
    },
    {
      icon: TrendingUp,
      title: "Structured Setups",
      description: "Clear, repeatable signals that eliminate guesswork"
    },
    {
      icon: Brain,
      title: "Institutional Tools",
      description: "Professional-grade indicators used by trading institutions"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problems */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                ❌ Still <span className="text-destructive">Gambling</span> in the Markets?
              </h2>
              <p className="text-muted-foreground text-lg">
                Most indicators lag, repaint, or rely on random signals. That leaves you guessing, chasing, and losing.
              </p>
            </div>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-destructive/5 border border-destructive/20 hover:bg-destructive/10 transition-colors duration-300"
                >
                  <problem.icon className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{problem.title}</h3>
                    <p className="text-muted-foreground text-sm">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                ✅ Turn Into a <span className="text-primary">Systematic</span> Trader
              </h2>
              <p className="text-muted-foreground text-lg">
                Quantel provides proven-edge strategy indicators with built-in entries, stop-loss, and take-profit levels, plus tools for liquidity, FVGs, and confirmations — automating the analysis pros usually do by hand.
              </p>
            </div>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors duration-300 hover:shadow-glow-primary/20"
                >
                  <solution.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{solution.title}</h3>
                    <p className="text-muted-foreground text-sm">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;