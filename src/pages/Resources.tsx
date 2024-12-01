import Navbar from "@/components/Navbar";
import { FileText, BookOpen, Database, FolderOpen, BookMarked, HelpCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const Resources = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-mono font-bold text-blue-900 mb-4 relative inline-block">
            /RESOURCES
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
          </h1>
          <p className="text-xl text-blue-600/80 max-w-3xl">
            Access our comprehensive collection of resources, tools, and documentation to help you succeed.
          </p>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-blue-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-blue-600/10 p-3 group-hover:bg-blue-600/20 transition-colors duration-300">
                    <resource.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-blue-900">{resource.title}</h2>
                </div>
                
                <p className="text-blue-600/80">{resource.description}</p>
                
                <ScrollArea className="h-32 rounded-md border border-blue-100 p-4">
                  <ul className="space-y-2">
                    {resource.items.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-blue-600/70 hover:text-blue-600">
                        <BookMarked className="h-4 w-4" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </Card>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-16 text-center bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-blue-100">
          <HelpCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Need Additional Help?</h2>
          <p className="text-blue-600/80 mb-6">
            Our support team is available 24/7 to assist you with any questions or concerns.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;