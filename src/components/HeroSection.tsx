import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const HeroSection = () => {
  const { toast } = useToast();

  const handleGetStarted = () => {
    toast({
      title: "Welcome aboard!",
      description: "Our team will contact you shortly to get started.",
    });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('features');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 animate-gradient">
      <div className="container mx-auto text-center text-white">
        <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6 animate-fade-in">
          IT MANAGED
          <br />
          SERVICES
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-blue-50 animate-fade-in-delayed opacity-0">
          Comprehensive IT solutions tailored for your business. From network infrastructure
          to cybersecurity, we deliver enterprise-grade managed services across all platforms.
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in-delayed opacity-0">
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