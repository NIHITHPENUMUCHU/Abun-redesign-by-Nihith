import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Seed",
      price: "$12",
      originalPrice: "$24",
      description: "First month offer",
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
        "Coming Soon: AI Article Updater",
        "Coming Soon: AI Auto Technical SEO",
        "Coming Soon: AI Internal Links Builder",
        "Coming Soon: GMB SEO Tracker",
        "Coming Soon: AI SEO Tracker"
      ],
      cta: "PROCEED"
    },
    {
      name: "Starter",
      price: "$29",
      originalPrice: "$59",
      description: "First month offer",
      features: [
        "25 AI Articles",
        "2500 Keyword Research Credits",
        "5 Sites",
        "Access to All Tools",
        "All Integrations",
        "5 Blog Automation",
        "Content Calendar",
        "Unlimited Search Console Insights",
        "Unlimited Fast Indexing",
        "Unlimited Backlink Directory",
        "15 AI Calculator Widgets",
        "15 AI Statistics Pages",
        "15 AI Comparison Pages",
        "30 Guest Post Finder",
        "30 Reddit SEO",
        "1000 URLs AI Auto Schema",
        "100 AI Glossary Creator",
        "AI Programmatic SEO",
        "LongTail Keyword Research",
        "Steal Competitor Keywords",
        "AI Keyword Research",
        "ICP to KW Research",
        "Manual Keyword Research",
        "Video to Article",
        "Coming Soon: AI Article Updater",
        "Coming Soon: AI Auto Technical SEO",
        "Coming Soon: AI Internal Links Builder",
        "Coming Soon: GMB SEO Tracker",
        "Coming Soon: AI SEO Tracker"
      ],
      cta: "PROCEED"
    },
    {
      name: "Growth",
      price: "$39",
      originalPrice: "$79",
      description: "First month offer",
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
        "Coming Soon: AI Article Updater",
        "Coming Soon: AI Auto Technical SEO",
        "Coming Soon: AI Internal Links Builder",
        "Coming Soon: GMB SEO Tracker",
        "Coming Soon: AI SEO Tracker"
      ],
      cta: "PROCEED"
    },
    {
      name: "Growth Max",
      price: "$74",
      originalPrice: "$149",
      description: "First month offer",
      features: [
        "500 AI Articles",
        "20000 Keyword Research Credits",
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
        "Coming Soon: AI Article Updater",
        "Coming Soon: AI Auto Technical SEO",
        "Coming Soon: AI Internal Links Builder",
        "Coming Soon: GMB SEO Tracker",
        "Coming Soon: AI SEO Tracker"
      ],
      cta: "PROCEED"
    }
  ];

  const cardGradient = "bg-gradient-to-br from-primary/20 to-secondary/20";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Choose Your <span className="text-gradient">Plan</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Pick the plan that fits your SEO and content needs. All plans include a first-month offer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`hover-lift border-border/50 relative ${cardGradient}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                  <CardDescription className="mb-4">{plan.description}</CardDescription>
                  <div className="text-3xl font-bold">
                    <span className="line-through text-muted-foreground mr-2">{plan.originalPrice}</span>
                    {plan.price}
                    <span className="text-sm text-muted-foreground ml-1">first month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6 max-h-72 overflow-y-auto">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link to="/auth">{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
