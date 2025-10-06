import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const UnfairAdvantage = () => {
  const advantages = [
    "25+ Tools",
    "Feature Rich Tools",
    "Growing Integrations",
    "New Tools Every Month",
    "Frequent Feature Drops",
    "No Learning Curve",
    "Community Driven",
    "All in one Pricing",
    "Great Support",
    "Privacy First",
    "Built for Scale",
    "Zero Setup Time",
    "Transparent Pricing",
    "Designed for Efficiency",
    "Enterprise-Grade Security"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            We are your <span className="text-gradient">unfair advantage.</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our users see guaranteed growth within 30 days.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg hover-lift"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium">{advantage}</span>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-lg group heartbeat"
            asChild
          >
            <a href="/auth" className="flex items-center">
              Claim Your Free Account
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">
            Free Accounts available only for a Limited Time
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnfairAdvantage;
