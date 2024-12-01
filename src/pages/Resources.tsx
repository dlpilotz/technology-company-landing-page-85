import Navbar from "@/components/Navbar";
import { FileText, BookOpen, Database, FolderOpen, BookMarked, HelpCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const Resources = () => {
  const { toast } = useToast();
  const resources = [
    {
      icon: FileText,
      title: "Documentation",
      description: "Access comprehensive guides and documentation for all our services and products.",
      items: ["User Guides", "API Documentation", "Integration Tutorials", "Best Practices"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      icon: BookOpen,
      title: "Learning Center",
      description: "Enhance your knowledge with our curated learning materials and tutorials.",
      items: ["Video Tutorials", "Webinars", "Case Studies", "Knowledge Base"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      icon: Database,
      title: "Downloads",
      description: "Get access to tools, utilities, and resources to optimize your workflow.",
      items: ["Software Tools", "Templates", "Sample Projects", "SDKs"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
    },
    {
      icon: FolderOpen,
      title: "Resource Library",
      description: "Browse our extensive collection of technical resources and reference materials.",
      items: ["White Papers", "Research Reports", "Technical Specs", "Industry Insights"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
    }
  ];

  const handleContactSupport = () => {
    toast({
      title: "Support Request Sent",
      description: "Our team will get back to you shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.1]"></div>
        <div className="max-w-7xl mx-auto relative">
          <h1 className="text-5xl md:text-6xl font-mono font-bold text-blue-900 mb-6 relative inline-block">
            /RESOURCES
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform origin-left"></div>
          </h1>
          <p className="text-xl text-blue-600/80 max-w-3xl">
            Access our comprehensive collection of resources, tools, and documentation to help you succeed.
          </p>
        </div>
      </motion.div>

      {/* Resources Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-blue-100">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white flex items-center space-x-2">
                    <resource.icon className="h-6 w-6" />
                    <h2 className="text-2xl font-semibold">{resource.title}</h2>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <p className="text-blue-600/80">{resource.description}</p>
                  
                  <ScrollArea className="h-32 rounded-md border border-blue-100 p-4 bg-white/50">
                    <ul className="space-y-2">
                      {resource.items.map((item, idx) => (
                        <motion.li
                          key={idx}
                          whileHover={{ x: 5 }}
                          className="flex items-center space-x-2 text-blue-600/70 hover:text-blue-600"
                        >
                          <BookMarked className="h-4 w-4" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm rounded-lg p-8 border border-blue-100 shadow-lg"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.1]"></div>
            <HelpCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-semibold text-blue-900 mb-4">Need Additional Help?</h2>
            <p className="text-blue-600/80 mb-6 max-w-2xl mx-auto">
              Our support team is available 24/7 to assist you with any questions or concerns.
              We're here to ensure you get the most out of our resources.
            </p>
            <Button 
              onClick={handleContactSupport}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Contact Support
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resources;