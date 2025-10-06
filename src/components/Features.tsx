import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  Bot, 
  BarChart3, 
  BookOpen, 
  Search, 
  Target,
  Code,
  Zap,
  Link,
  RefreshCw,
  Calculator,
  FileCheck,
  Image,
  Mail,
  Youtube,
  MessageSquare,
  CheckCircle,
  TrendingUp,
  Calendar,
  MapPin
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "AI Articles",
    description: "Human Like Articles that doesn't suck. All type of Articles Supported."
  },
  {
    icon: Bot,
    title: "AI Blog Automation",
    description: "Automate your blog from months to a complete year."
  },
  {
    icon: BarChart3,
    title: "AI Programmatic SEO",
    description: "Create Multiple Programmatic SEO based articles to rank faster."
  },
  {
    icon: BookOpen,
    title: "AI Glossary Creator",
    description: "Turn a single topic into a glossary of high-ranking, Google-optimized definitions."
  },
  {
    icon: Search,
    title: "LongTail Keyword Research",
    description: "Instantly generate hundreds of long-tail keywords for any topic or niche."
  },
  {
    icon: Target,
    title: "Steal Competitor Keywords",
    description: "Find & Steal keywords for which your competitors are ranking."
  },
  {
    icon: Search,
    title: "AI Keyword Research",
    description: "Let AI uncover the best keywords for ranking and traffic growth."
  },
  {
    icon: Code,
    title: "AI Auto Schema",
    description: "Auto add JSON schema to all of your pages to boost your technical SEO."
  },
  {
    icon: Zap,
    title: "Fast Indexing",
    description: "Get your pages seen now. Lightning-speed indexing for quicker SEO wins."
  },
  {
    icon: RefreshCw,
    title: "AI Article Updater",
    description: "Auto update your existing article so that you get better rankings."
  },
  {
    icon: Link,
    title: "AI Internal Links Builder",
    description: "AI scans your content and adds internal links where they matter most."
  },
  {
    icon: Calculator,
    title: "AI Calculator Widgets",
    description: "Create calculators for your niche with one-click create & publish."
  },
  {
    icon: FileCheck,
    title: "AI Comparison Pages",
    description: "Create dozens of competitor vs. competitor pages without writing a word."
  },
  {
    icon: Image,
    title: "AI Infographic / Stats Page",
    description: "Auto Create Infographic & Statistics Page relevant to your niche."
  },
  {
    icon: Mail,
    title: "Email Finder",
    description: "Find email using First, Last Name & Domain."
  },
  {
    icon: Youtube,
    title: "Video to Article",
    description: "Convert any YouTube video to a blog article."
  },
  {
    icon: MessageSquare,
    title: "Reddit SEO",
    description: "Find reddit posts in your niche, so you can comment at the right place."
  },
  {
    icon: CheckCircle,
    title: "Email Verifier",
    description: "Verify if an email address exists or not."
  },
  {
    icon: Calendar,
    title: "Content Calendar",
    description: "Plan like a pro. Organize and schedule all your content for consistent publishing."
  },
  {
    icon: MapPin,
    title: "GMB SEO Tracker",
    description: "Track your local power. Monitor Google My Business rankings and boost local SEO."
  },
  {
    icon: TrendingUp,
    title: "AI SEO Tracker",
    description: "Smarter tracking, better rankings. Let AI monitor your SEO performance."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
            AI SEO & Marketing Tools
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Start Scaling your Traffic
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="hover-lift border-border/50 bg-card/50 backdrop-blur-sm fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
