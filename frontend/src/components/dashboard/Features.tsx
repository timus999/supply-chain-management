import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Blockchain Transparency",
      description: "Immutable records ensure complete traceability and trust throughout your supply chain. Every transaction is verified and permanent.",
      icon: "🔗",
      gradient: "from-gray-50 to-gray-100",
      shadowClass: "shadow-elegant"
    },
    {
      title: "Smart Contracts",
      description: "Automated processes streamline operations, reduce costs, and eliminate intermediaries for maximum efficiency.",
      icon: "⚡",
      gradient: "from-gray-100 to-gray-50",
      shadowClass: "subtle-pulse"
    },
    {
      title: "Real-Time Tracking",
      description: "Secure, decentralized monitoring provides instant visibility into your goods' location and status across the entire journey.",
      icon: "📍",
      gradient: "from-white to-gray-50",
      shadowClass: "shadow-elegant-lg"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 gradient-minimal-subtle"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Powered by <span className="text-primary border-b-2 border-primary/20">Modern Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our cutting-edge platform leverages blockchain, smart contracts, and decentralized systems 
            to create the most transparent and efficient supply chain solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className={`bg-card border-elegant hover:border-primary/20 transition-all duration-500 ${feature.shadowClass} hover:scale-105 animate-scale-in group`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 border-elegant`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-6 flex items-center text-primary group-hover:text-foreground transition-colors duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical indicators */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-2xl font-bold text-primary mb-2">Ethereum</div>
            <div className="text-sm text-muted-foreground">Network</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="text-2xl font-bold text-foreground mb-2">Solidity</div>
            <div className="text-sm text-muted-foreground">Smart Contracts</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="text-2xl font-bold text-primary mb-2">IPFS</div>
            <div className="text-sm text-muted-foreground">Storage</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '1.4s' }}>
            <div className="text-2xl font-bold text-foreground mb-2">Web3</div>
            <div className="text-sm text-muted-foreground">Integration</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;