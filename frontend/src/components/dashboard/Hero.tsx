import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {

    const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 gradient-minimal"></div>
      
      {/* Minimal floating elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-foreground/20 rounded-full opacity-30 float-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Next-Gen{" "}
            <span className="text-primary border-b-4 border-primary/20">
              Supply Chain
            </span>
            <br />
            Management
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Revolutionize your supply chain with blockchain transparency, 
            smart contracts, and real-time tracking. Built for the modern era.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => navigate("/dashboard")}
              size="lg" 
              className="b   px-8 py-4 text-lg shadow-elegant-lg hover:scale-105 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/20 text-primary hover:bg-primary/5 px-8 py-4 text-lg hover:border-primary/40 transition-all duration-300"
            >
              View Demo
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-slide-in-left">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="text-muted-foreground">Transparency</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-foreground">50%</div>
              <div className="text-muted-foreground">Cost Reduction</div>
            </div>
            <div className="animate-slide-in-right">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Real-time Tracking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;