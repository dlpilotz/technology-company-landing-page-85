import { Shield, CheckCircle } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const TrustIndicators = () => {
  const partners = [
    { 
      name: "Microsoft", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg", 
      alt: "Microsoft Partner" 
    },
    { 
      name: "Cisco", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg", 
      alt: "Cisco Partner" 
    },
    { 
      name: "Veeam", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Veeam_logo.png", 
      alt: "Veeam Partner" 
    },
    { 
      name: "Meraki", 
      logo: "https://meraki.cisco.com/wp-content/uploads/2020/04/cisco-meraki-logo.png", 
      alt: "Meraki Partner" 
    },
    { 
      name: "Sophos", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Sophos_logo2.svg", 
      alt: "Sophos Partner" 
    },
    { 
      name: "Unifi", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Ubiquiti_Logo_Horizontal.png", 
      alt: "Unifi Partner" 
    },
    { 
      name: "Fortinet", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg", 
      alt: "Fortinet Partner" 
    },
    { 
      name: "Juniper", 
      logo: "https://lh5.googleusercontent.com/proxy/rRCCVhGBxPmIsnZsKz__hG-TqF4ORN92AvACpY1qFyOLuooWrOaHLjlbcX-YGVzwEsxznmrygiSeHlCch8TGNeAvW4Dof81wxV5HNrUF", 
      alt: "Juniper Partner" 
    }
  ];

  const certifications = [
    { name: "ISO 27001", icon: Shield },
    { name: "ITIL v4", icon: Shield },
    { name: "SOC 2", icon: Shield },
  ];

  const clients = [
    { 
      name: "FlyHouse", 
      logo: "https://media.licdn.com/dms/image/v2/D560BAQEPImUqsft3zg/company-logo_200_200/company-logo_200_200/0/1729287458696/flyhouse_logo?e=2147483647&v=beta&t=H42B23GEEWhFMAo5Zruk3A3rBq2UBesk-ct8UCPFEM0", 
      alt: "FlyHouse" 
    },
    { 
      name: "Client 2", 
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d", 
      alt: "Trusted Client" 
    },
    { 
      name: "Client 3", 
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", 
      alt: "Trusted Client" 
    },
    { 
      name: "Client 4", 
      logo: "https://images.unsplash.com/photo-1518770660439-4636190af475", 
      alt: "Trusted Client" 
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Technology Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-mono font-bold text-blue-600 mb-8 text-center">/TECHNOLOGY PARTNERS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <div 
                key={partner.name} 
                className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.alt} 
                  className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
                  onError={(e) => {
                    console.error(`Failed to load image for ${partner.name}`);
                    e.currentTarget.src = "https://via.placeholder.com/150x50?text=" + partner.name;
                  }}
                />
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
