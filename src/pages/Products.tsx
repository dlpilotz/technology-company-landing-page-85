import Navbar from "@/components/Navbar";
import { Shield, Server, Cloud, Database, Laptop, Network, Lock, Headphones, Cog } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Enterprise-grade security infrastructure with 24/7 monitoring, threat detection, and incident response.",
      features: ["Endpoint Protection", "Network Security", "Security Audits"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      icon: Server,
      title: "Infrastructure Management",
      description: "Robust and scalable server solutions with proactive monitoring and maintenance.",
      features: ["Server Optimization", "Performance Monitoring", "Backup Solutions"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Comprehensive cloud solutions for modern enterprises, including migration and optimization.",
      features: ["Cloud Migration", "Hybrid Cloud", "Cloud Security"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "End-to-end data solutions including backup, recovery, and database optimization.",
      features: ["Data Backup", "Recovery Services", "Database Management"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      icon: Network,
      title: "Network Solutions",
      description: "Complete network infrastructure design, implementation, and management services.",
      features: ["Network Design", "WiFi Solutions", "VPN Services"],
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
    },
    {
      icon: Headphones,
      title: "IT Support",
      description: "24/7 technical support and help desk services for your entire organization.",
      features: ["Help Desk", "Remote Support", "On-site Support"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="space-y-12">
          {/* Header Section */}
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl font-bold text-blue-900 relative inline-block">
              Our Products & Services
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-blue-600"></div>
            </h1>
            <p className="text-xl text-blue-600/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT solutions designed to transform your business operations
              and drive technological excellence in the modern digital landscape.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {products.map((product, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm animate-fade-in border-blue-100 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-blue-600/10 p-3 group-hover:bg-blue-600/20 transition-colors duration-300">
                      <product.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-blue-900">{product.title}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <CardDescription className="text-blue-600/80 text-lg">
                    {product.description}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-blue-900">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-blue-600/80 group-hover:text-blue-700 transition-colors">
                          <Cog className="h-4 w-4 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;