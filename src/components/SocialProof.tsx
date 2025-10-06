const SocialProof = () => {
  const logos = [
    "https://abun.com/wp-content/uploads/2025/02/Inside-logo.jpg",
    "https://abun.com/wp-content/uploads/2025/02/GrowMeOrganicLogo.webp",
    "https://abun.com/wp-content/uploads/2025/02/Jetting.svg",
    "https://abun.com/wp-content/uploads/2025/02/logo-3.avif",
    "https://abun.com/wp-content/uploads/2025/02/Titech.webp",
    "https://abun.com/wp-content/uploads/2025/02/Zappy-logo-2.webp",
    "https://abun.com/wp-content/uploads/2025/02/Group-1.png",
    "https://abun.com/wp-content/uploads/2025/02/cropped-Gu-c-22.png"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-gradient mb-4">
              2,673,000,000
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Our users love us 2.6 Billion.
            </h2>
            <p className="text-muted-foreground">
              That's the amount of AI/LLM tokens used cumulatively by our users.
            </p>
          </div>
        </div>
        
        {/* Logo Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee space-x-12">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              >
                <img 
                  src={logo} 
                  alt={`Customer logo ${index + 1}`} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SocialProof;
