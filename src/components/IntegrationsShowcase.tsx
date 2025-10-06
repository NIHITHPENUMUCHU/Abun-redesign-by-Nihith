import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const IntegrationsShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const integrations = [
    { name: "WordPress", logo: "https://abun.com/wp-content/uploads/2025/04/Software-pack.png" },
    { name: "Shopify", logo: "https://abun.com/wp-content/uploads/2025/04/Vector-1.png" },
    { name: "Wix", logo: "https://abun.com/wp-content/uploads/2025/04/Vector.png" },
    { name: "Webflow", logo: "https://abun.com/wp-content/uploads/2025/04/webflow_logo.svg.png" },
    { name: "Google Search Console", logo: "https://abun.com/wp-content/uploads/2025/04/google-search-console-logo-2.png" },
  ];

  const languages = [
    "Hello World!",
    "¡Hola, Mundo!",
    "Bonjour, le monde !",
    "Hallo, Welt!",
    "नमस्ते, दुनिया!",
    "你好，世界！",
    "مرحباً، أيها العالم!",
    "Привет, мир!",
    "Olá, Mundo!",
    "Ciao, Mondo!",
    "Xin chào, Thế giới!",
    "こんにちは、世界！",
    "안녕, 세상!",
    "Hujambo, Dunia!"
  ];

  const languagesRef = useRef<HTMLDivElement>(null);

  // Cycle integration logos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % integrations.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Smooth continuous vertical marquee for languages
  useEffect(() => {
    if (!languagesRef.current) return;

    const scrollHeight = languagesRef.current.scrollHeight / 2;
    let start = 0;

    const step = () => {
      start += 1; // 1px per frame
      if (start >= scrollHeight) start = 0;
      if (languagesRef.current)
        languagesRef.current.style.transform = `translateY(-${start}px)`;
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, []);

  // Gradient background for all cards
  const cardGradient = "bg-gradient-to-br from-[#FECF5A]/20 to-[#FF7F50]/20"; // example: yellow-orange gradient

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            All Good things Packed into <span className="text-gradient">One Software</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We integrate with all the latest tech, so you are not left behind. <br /> Our system is built to support top platforms today, and ready for what's next tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Fast & Reliable Card */}
          <Card className={`p-8 hover-lift border-border/50 backdrop-blur-sm ${cardGradient}`}>
            <div className="w-full h-48 rounded-lg flex items-center justify-center mb-6">
              <img
                src="https://abun.com/wp-content/uploads/2025/04/Software-pack.png"
                alt="Software Pack"
                className="max-h-full object-contain"
              />
            </div>
            <p className="text-muted-foreground text-center">
              Fast, reliable, and built for teams that need their tools to work together seamlessly
            </p>
          </Card>

          {/* Software Pack Card */}
          <Card className={`p-8 hover-lift border-border/50 backdrop-blur-sm ${cardGradient}`}>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4 text-center">Software Pack</h3>
              <div className="flex justify-center gap-3 flex-wrap mb-6">
                {integrations.map((integration, index) => (
                  <div
                    key={index}
                    className={`w-16 h-16 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center border-2 transition-all duration-300 p-1 ${
                      index === currentIndex ? 'border-primary scale-110' : 'border-border/50'
                    }`}
                  >
                    <img
                      src={integration.logo}
                      alt={integration.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-3 text-center">Full Fledged Integrations</h4>
            <p className="text-muted-foreground text-sm mb-6 text-center">
              So simple, you'll forget it's even integrated. Built for teams that hate complexity but love when things just work.
            </p>
            <Button className="w-full group">
              View Integrations
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>

          {/* Multi Language Card */}
          <Card className={`p-8 hover-lift border-border/50 backdrop-blur-sm overflow-hidden ${cardGradient}`}>
            <div className="h-48 mb-6 overflow-hidden relative">
              <div ref={languagesRef} className="flex flex-col gap-2">
                {[...languages, ...languages].map((lang, index) => (
                  <div
                    key={index}
                    className="h-12 flex items-center justify-center py-2 px-4 rounded text-lg text-black"
                    style={{ background: 'transparent' }} // matches card gradient
                  >
                    {lang}
                  </div>
                ))}
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-3 text-center">Multi Language Support</h4>
            <p className="text-muted-foreground text-sm mb-6 text-center">
              Whether it's English, Español, or Emoji, we speak your customers' language, so nothing gets lost in translation.
            </p>
            <Button className="w-full group">
              View Languages Supported
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsShowcase;
