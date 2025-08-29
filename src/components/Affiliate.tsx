import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, Users, TrendingUp, ArrowRight } from "lucide-react";

const Affiliate = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "20% Commission",
      description: "Earn 20% commission on every trader you refer to our platform"
    },
    {
      icon: Users,
      title: "Growing Community",
      description: "Join our expanding network of successful trading affiliates"
    },
    {
      icon: TrendingUp,
      title: "Recurring Income",
      description: "Build passive income as your referrals continue their subscriptions"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Earn While You <span className="text-accent">Trade</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the Quantel Affiliate Program and build additional income streams while helping other traders systematize their approach
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-accent/5 border border-accent/10 hover:bg-accent/10 transition-colors duration-300"
                >
                  <benefit.icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-gradient-accent/10 border border-accent/20">
              <h3 className="text-xl font-bold text-foreground mb-2">How It Works</h3>
              <ol className="space-y-2 text-muted-foreground">
                <li>1. Apply to become a Quantel affiliate</li>
                <li>2. Get your unique referral link and materials</li>
                <li>3. Share with your network and social media</li>
                <li>4. Earn 20% commission on every successful referral</li>
              </ol>
            </div>
          </div>

          <Card className="p-8 bg-gradient-card border border-accent/20 shadow-elevated">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-accent rounded-full mx-auto flex items-center justify-center shadow-glow-accent">
                <DollarSign className="w-10 h-10 text-accent-foreground" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Start Earning Today
                </h3>
                <p className="text-muted-foreground">
                  Join our affiliate program and turn your trading success into additional income streams
                </p>
              </div>

              <Button 
                size="lg" 
                variant="accent"
                className="w-full"
              >
                Become an Affiliate
                <ArrowRight className="ml-2" />
              </Button>

              <p className="text-xs text-muted-foreground">
                No application fees. Start earning immediately upon approval.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Affiliate;