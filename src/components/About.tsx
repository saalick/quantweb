import { Brain, Code, BarChart3 } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About <span className="text-primary">Quantel</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                At Quantel, we believe trading isn't a skill—it's a <span className="text-accent font-semibold">science</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are transforming markets through data science, coding, and automation—turning{" "}
                <span className="text-primary font-semibold">intuition into algorithms</span> and{" "}
                <span className="text-accent font-semibold">strategies into repeatable, systematic processes</span>.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="flex gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <Brain className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Data Science</h3>
                  <p className="text-muted-foreground text-sm">Advanced quantitative analysis and machine learning applied to market dynamics</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-accent/5 border border-accent/10">
                <Code className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Automation</h3>
                  <p className="text-muted-foreground text-sm">Systematic trading approaches that remove emotion and human error from decisions</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <BarChart3 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Market Innovation</h3>
                  <p className="text-muted-foreground text-sm">Pioneering new methodologies that bridge institutional trading with retail accessibility</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-card border border-primary/20 p-8 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto flex items-center justify-center shadow-glow-primary">
                    <BarChart3 className="w-16 h-16 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse-glow" />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-float" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Trading + Technology</h3>
                  <p className="text-muted-foreground">Where algorithms meet opportunity</p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-primary/10 rounded-full animate-float opacity-60" />
            <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-accent/10 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;