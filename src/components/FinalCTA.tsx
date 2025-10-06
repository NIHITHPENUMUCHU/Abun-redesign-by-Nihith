import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Scale Your Traffic & Rankings?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 5,325+ marketers, founders, and SEO experts who are already driving massive growth with Abun.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              asChild
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-lg group"
            >
              <a href="/auth" className="flex items-center">
                Start Free Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              asChild
              className="px-8 py-6 text-lg"
            >
              <a href="https://abun.com/pricing">View Pricing</a>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • Free accounts available for a limited time
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
