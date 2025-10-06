import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const EnhancedPricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Trial",
      monthlyPrice: "$0",
      annualPrice: "$0",
      description: "Try before you commit",
      features: ["2 Credits", "Basic Access", "Email Support"],
      cta: "PROCEED",
      popular: false,
      isTrial: true
    },
    {
      name: "Seed",
      monthlyPrice: "$24",
      annualPrice: "$144",
      description: "Get started with essential tools",
      features: [
        "10 AI Articles",
        "1000 Keyword Research Credits",
        "2 Sites",
        "Access to All Tools",
        "All Integrations",
        "2 Blog Automation",
        "Content Calendar",
        "Unlimited Search Console Insights",
        "Unlimited Fast Indexing",
        "Unlimited Backlink Directory",
        "5 AI Calculator Widgets",
        "5 AI Statistics Pages",
        "5 AI Comparison Pages",
        "2 Guest Post Finder",
        "2 Reddit SEO",
        "100 URLs AI Auto Schema",
        "10 AI Glossary Creator",
        "AI Programmatic SEO",
        "LongTail Keyword Research",
        "Steal Competitor Keywords",
        "AI Keyword Research",
        "ICP to KW Research",
        "Manual Keyword Research",
        "Video to Article",
        "AI Article Updater (Coming Soon)",
        "AI Auto Technical SEO (Coming Soon)",
        "AI Internal Links Builder (Coming Soon)",
        "GMB SEO Tracker (Coming Soon)",
        "AI SEO Tracker (Coming Soon)"
      ],
      cta: "PROCEED",
      popular: false
    },
    {
      name: "Starter",
      monthlyPrice: "$79",
      annualPrice: "$474",
      description: "Perfect for large teams and high-volume needs",
      features: [
        "100 AI Articles",
        "6000 Keyword Research Credits",
        "15 Sites",
        "Access to All Tools",
        "All Integrations",
        "10 Blog Automation",
        "Content Calendar",
        "Unlimited Search Console Insights",
        "Unlimited Fast Indexing",
        "Unlimited Backlink Directory",
        "30 AI Calculator Widgets",
        "30 AI Statistics Pages",
        "30 AI Comparison Pages",
        "100 Guest Post Finder",
        "100 Reddit SEO",
        "5000 URLs AI Auto Schema",
        "200 AI Glossary Creator",
        "AI Programmatic SEO",
        "LongTail Keyword Research",
        "Steal Competitor Keywords",
        "AI Keyword Research",
        "ICP to KW Research",
        "Manual Keyword Research",
        "Video to Article",
        "AI Article Updater (Coming Soon)",
        "AI Auto Technical SEO (Coming Soon)",
        "AI Internal Links Builder (Coming Soon)",
        "GMB SEO Tracker (Coming Soon)",
        "AI SEO Tracker (Coming Soon)"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Growth Max",
      monthlyPrice: "$149",
      annualPrice: "$894",
      description: "Maximum power for enterprise scaling",
      features: [
        "500 AI Articles",
        "20,000 Keyword Research Credits",
        "Unlimited Sites",
        "Access to All Tools",
        "All Integrations",
        "Unlimited Blog Automation",
        "Unlimited Content Calendar",
        "Unlimited Search Console Insights",
        "Unlimited Fast Indexing",
        "Unlimited Backlink Directory",
        "Unlimited AI Calculator Widgets",
        "Unlimited AI Statistics Pages",
        "Unlimited AI Comparison Pages",
        "Unlimited Guest Post Finder",
        "Unlimited Reddit SEO",
        "Unlimited AI Auto Schema",
        "1000 AI Glossary Creator",
        "AI Programmatic SEO",
        "LongTail Keyword Research",
        "Steal Competitor Keywords",
        "AI Keyword Research",
        "ICP to KW Research",
        "Manual Keyword Research",
        "Video to Article",
        "AI Article Updater (Coming Soon)",
        "AI Auto Technical SEO (Coming Soon)",
        "AI Internal Links Builder (Coming Soon)",
        "GMB SEO Tracker (Coming Soon)",
        "AI SEO Tracker (Coming Soon)"
      ],
      cta: "Contact Sales",
      popular: true,
      isEnhanced: true
    },
    {
      name: "Growth",
      monthlyPrice: "$149",
      annualPrice: "$894",
      description: "For scaling teams with advanced needs",
      features: [
        "500 AI Articles",
        "20000 Keyword Research Credits",
        "Unlimited Sites",
        "Access to All Tools",
        "All Integrations",
        "Blog Automation",
        "Content Calendar",
        "Unlimited Search Console Insights",
        "Unlimited Fast Indexing",
        "Unlimited Backlink Directory",
        "AI Calculator Widgets",
        "AI Statistics Pages",
        "AI Comparison Pages",
        "Guest Post Finder",
        "Reddit SEO",
        "AI Auto Schema",
        "AI Glossary Creator",
        "AI Programmatic SEO",
        "LongTail Keyword Research",
        "Steal Competitor Keywords",
        "AI Keyword Research",
        "ICP to KW Research",
        "Manual Keyword Research",
        "Video to Article",
        "AI Article Updater (Coming Soon)",
        "AI Auto Technical SEO (Coming Soon)",
        "AI Internal Links Builder (Coming Soon)",
        "GMB SEO Tracker (Coming Soon)",
        "AI SEO Tracker (Coming Soon)"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

 

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your SEO and content needs. All plans include a 14-day free trial.
          </p>

          <div className="inline-flex items-center gap-4 bg-muted/50 p-2 rounded-lg">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-md transition-all ${!isAnnual ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-md transition-all relative ${isAnnual ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}
            >
              Annual
              <Badge className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs">
                6 Months Free
              </Badge>
            </button>
          </div>
          {isAnnual && (
            <p className="text-sm text-secondary mt-2 font-semibold">
              Limited Time Offer: Save 50% with annual billing!
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover-lift ${plan.popular
                ? 'border-2 border-orange-400 shadow-xl bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20'
                : plan.isTrial
                  ? 'border-border/50'
                  : 'border-border/50'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="mb-4">{plan.description}</CardDescription>
                <div className="text-4xl font-bold">
                  {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  <span className="text-lg font-normal text-muted-foreground">/{isAnnual ? 'year' : 'month'}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full mb-4 ${plan.popular ? 'bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600' : ''}`}
                  variant={plan.popular ? 'default' : plan.isTrial ? 'outline' : 'outline'}
                >
                  <Link to="/auth">{plan.cta}</Link>
                </Button>

                {plan.isEnhanced && (
                  <div className="space-y-4 mt-6 pt-6 border-t border-orange-200">
                    <p className="text-sm text-center text-muted-foreground font-semibold">works with</p>
                

            
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedPricing;
