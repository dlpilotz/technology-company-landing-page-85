import { Laptop, Server, Lock } from "lucide-react";

const SolutionsSection = () => {
  return (
    <section id="integrate" className="py-24 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl font-mono font-bold text-blue-600 relative">
              /SOLUTIONS
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-blue-600 transform origin-left transition-all duration-300 hover:w-full"></span>
            </h2>
            <p className="text-lg text-blue-600/80 leading-relaxed">
              Enterprise-grade IT solutions designed to meet your specific business needs. Our comprehensive
              service portfolio ensures your technology infrastructure runs at peak efficiency.
            </p>
            <div className="space-y-6">
              {[
                { icon: Laptop, text: "Proactive IT Management", description: "24/7 monitoring and maintenance" },
                { icon: Server, text: "Remote Support Services", description: "Instant technical assistance" },
                { icon: Lock, text: "Strategic IT Planning", description: "Future-proof infrastructure" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="rounded-full bg-blue-600/10 p-3 group-hover:bg-blue-600/20 transition-all duration-300">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-600">{item.text}</p>
                    <p className="text-sm text-blue-600/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group animate-fade-in-delayed">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-400/10 to-transparent rounded-lg transform group-hover:scale-105 transition-all duration-500"></div>
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                alt="IT Solutions"
                className="w-full h-full object-cover aspect-video group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;