import Navbar from "@/components/Navbar";
import { Shield, Server, Cloud, Database, Laptop, Network, Lock, HeadsetHelp, Cog } from "lucide-react";
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
      icon: HeadsetHelp,
      title: "IT Support",
      description: "24/7 technical support and help desk services for your entire organization.",
      features: ["Help Desk", "Remote Support", "On-site Support"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl font-mono font-bold text-blue-600 relative inline-block">
              /PRODUCTS & SERVICES
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 transform origin-left"></span>
            </h1>
            <p className="text-xl text-blue-600/80 max-w-2xl mx-auto">
              Comprehensive IT solutions designed to transform your business operations
              and drive technological excellence.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {products.map((product, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm animate-fade-in"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-blue-600/10 p-3 group-hover:bg-blue-600/20 transition-colors duration-300">
                      <product.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-blue-900">{product.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-blue-600/80">
                    {product.description}
                  </CardDescription>
                  <div className="relative h-40 rounded-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-blue-600/80">
                        <Cog className="h-4 w-4" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
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