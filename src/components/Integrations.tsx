const Integrations = () => {
  const integrations = [
    {
      name: "WordPress",
      logo: "https://abun.com/wp-content/uploads/2025/04/Software-pack.png",
    },
    {
      name: "Shopify",
      logo: "https://abun.com/wp-content/uploads/2025/04/Vector-1.png",
    },
    {
      name: "Wix",
      logo: "https://abun.com/wp-content/uploads/2025/04/Vector.png",
    },
    {
      name: "Webflow",
      logo: "https://abun.com/wp-content/uploads/2025/04/webflow_logo.svg.png",
    },
    {
      name: "Google Search Console",
      logo: "https://abun.com/wp-content/uploads/2025/04/google-search-console-logo-2.png",
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            All Good things Packed into One Software
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We integrate with all the latest tech, so you are not left behind.
            <br />
            Our system is built to support top platforms today, and ready for what's next tomorrow.
          </p>
        </div>
        
        <div className="relative overflow-hidden py-8">
          <div className="flex animate-scroll space-x-16">
            {[...integrations, ...integrations, ...integrations, ...integrations].map((integration, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
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
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Integrations;
