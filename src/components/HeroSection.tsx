import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Shield, Server, Cloud } from "lucide-react";
import { useCallback, useEffect } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const HeroSection = () => {
  const { toast } = useToast();
  
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Initializing particles");
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded");
  }, []);

  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      video.play().catch(error => {
        console.error('Video playback failed:', error);
      });
      console.log('Video element found and play attempted');
    } else {
      console.log('Video element not found');
    }
  }, []);

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

  const stats = [
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" },
    { value: "15min", label: "Response Time" }
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 animate-gradient overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            opacity: 0
          },
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            opacity: { value: 0.2 },
            size: { value: 3 },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" }
            }
          }
        }}
      />
      
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        style={{ zIndex: 0 }}
        onLoadedData={() => console.log('Video loaded successfully')}
        onError={(e) => console.error('Video loading error:', e)}
      >
        <source src="https://cdn.coverr.co/videos/coverr-computer-coding-2683/1080p.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-blue-700/80 to-blue-800/80" style={{ zIndex: 1 }}></div>
      
      <div className="container relative mx-auto text-center text-white" style={{ zIndex: 2 }}>
        <div className="flex justify-center gap-8 mb-8">
          <Shield className="w-12 h-12 text-blue-200 animate-bounce" />
          <Server className="w-12 h-12 text-blue-200 animate-pulse" />
          <Cloud className="w-12 h-12 text-blue-200 animate-bounce" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6 animate-fade-in">
          IT MANAGED
          <br />
          SERVICES
        </h1>
        
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-blue-50 animate-fade-in-delayed opacity-0">
          Enterprise-grade IT solutions tailored for Cleveland businesses. From network infrastructure
          to cybersecurity, we deliver comprehensive managed services across all platforms.
        </p>

        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl font-bold mb-2 animate-fade-in-delayed opacity-0">
                {stat.value}
              </div>
              <div className="text-blue-200 animate-fade-in-delayed opacity-0">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

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