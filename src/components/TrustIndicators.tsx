import { Shield, CheckCircle } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const TrustIndicators = () => {
  const partners = [
    { name: "Microsoft", logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", alt: "Microsoft Partner" },
    { name: "Cisco", logo: "https://images.unsplash.com/photo-1518770660439-4636190af475", alt: "Cisco Partner" },
    { name: "Dell", logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", alt: "Dell Partner" },
  ];

  const certifications = [
    { name: "ISO 27001", icon: Shield },
    { name: "ITIL v4", icon: Shield },
    { name: "SOC 2", icon: Shield },
  ];

  const clients = [
    { name: "Client 1", logo: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7", alt: "Client 1" },
    { name: "Client 2", logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d", alt: "Client 2" },
    { name: "Client 3", logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", alt: "Client 3" },
    { name: "Client 4", logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", alt: "Client 4" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Technology Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-mono font-bold text-blue-600 mb-8 text-center">/TECHNOLOGY PARTNERS</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img src={partner.logo} alt={partner.alt} className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all" />
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-mono font-bold text-blue-600 mb-8 text-center">/CERTIFICATIONS</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <cert.icon className="h-8 w-8 text-blue-600 mb-3" />
                <span className="text-sm font-semibold text-gray-700">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* System Status */}
        <div className="mb-16">
          <h3 className="text-2xl font-mono font-bold text-blue-600 mb-8 text-center">/SYSTEM STATUS</h3>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Network: Online</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Security: Active</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Cloud: Operational</span>
            </div>
          </div>
        </div>

        {/* Client Logos Carousel */}
        <div>
          <h3 className="text-2xl font-mono font-bold text-blue-600 mb-8 text-center">/TRUSTED BY</h3>
          <Carousel className="max-w-xl mx-auto">
            <CarouselContent>
              {clients.map((client) => (
                <CarouselItem key={client.name} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-6">
                    <img 
                      src={client.logo} 
                      alt={client.alt} 
                      className="h-20 w-full object-contain filter grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;