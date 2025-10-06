import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-transparent pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        {/* Testimonials */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 fade-in">
          {[
            "biggest value bomb",
            "my entire team can't stop using it",
            "helped us scale & grow"
          ].map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">"{testimonial}"</p>
            </div>
          ))}
        </div>
        
        {/* Main Heading */}
        <div className="text-center max-w-5xl mx-auto fade-in" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            The All-In-One Toolkit for{" "}
            <br />
            <span className="text-gradient">SEO & Growth Marketing</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Used by <span className="font-semibold text-foreground">5,325 Marketers, Founders, SEO Experts</span>
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            to Drive Traffic, Generate Leads, Rank Faster & Achieve Solid Business Growth
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 fade-in" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg" 
              asChild
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-lg group"
            >
              <a href="/auth" className="flex items-center">
                Claim Your Free Account
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mb-12 fade-in" style={{ animationDelay: '0.3s' }}>
            Free Accounts available only for a Limited Time
          </p>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 fade-in" style={{ animationDelay: '0.4s' }}>
            <img 
              src="https://abun.com/wp-content/uploads/2024/08/image-123.png" 
              alt="Microsoft Partner" 
              className="h-8 sm:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
            <img 
              src="https://abun.com/wp-content/uploads/2024/08/nvidia-inception-program-badge-rgb-for-screen.png" 
              alt="NVIDIA Inception Program" 
              className="h-8 sm:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
