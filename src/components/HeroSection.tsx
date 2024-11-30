import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Shield, Server, Cloud } from "lucide-react";

const HeroSection = () => {
  const { toast } = useToast();

  const handleGetStarted = () => {
    const quoteSection = document.getElementById('quote-section');
    quoteSection?.scrollIntoView({ behavior: 'smooth' });
    toast({
      title: "Welcome aboard!",
      description: "Please fill out the form below to get started.",
    });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('features');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 animate-gradient overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-blue-700/90 to-blue-800/90"></div>
      
      <div className="container relative mx-auto text-center text-white">
        <div className="flex justify-center gap-8 mb-8">
          <Shield className="w-12 h-12 text-blue-200" />
          <Server className="w-12 h-12 text-blue-200" />
          <Cloud className="w-12 h-12 text-blue-200" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6 animate-fade-in">
          IT MANAGED
          <br />
          SERVICES
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-blue-50 animate-fade-in-delayed opacity-0">
          Enterprise-grade IT solutions tailored for Cleveland businesses. From network infrastructure
          to cybersecurity, we deliver comprehensive managed services across all platforms.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-in-delayed opacity-0">
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-transform"
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-white border-white bg-transparent hover:bg-white/10 hover:scale-105 transition-transform"
            onClick={scrollToServices}
          >
            Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;