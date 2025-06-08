import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 gradient-minimal opacity-50"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <Card className="bg-card/90 backdrop-blur-sm border-elegant shadow-elegant-lg">
          <CardContent className="p-12 text-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Transform Your{" "}
                <span className="text-primary border-b-2 border-primary/20">Supply Chain?</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of companies already using our blockchain-powered platform 
                to create more transparent, efficient, and trustworthy supply chains.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg shadow-elegant-lg hover:scale-105 transition-all duration-300"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/20 text-primary hover:bg-primary/5 px-8 py-4 text-lg hover:border-primary/40 transition-all duration-300"
                >
                  Schedule Demo
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  No setup fees
                </div>
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-foreground rounded-full mr-2"></span>
                  24/7 support
                </div>
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Cancel anytime
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
