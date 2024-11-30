import { Database, Server, Network, Users, Code, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";
import HeroSection from "@/components/HeroSection";
import QuoteSection from "@/components/QuoteSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      
      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-mono font-bold mb-12 text-center text-blue-600 hover:scale-105 transition-transform">
            /CAPABILITIES
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Network Management"
              description="24/7 network monitoring, maintenance, and optimization ensuring maximum uptime and performance for your business operations."
              icon={Network}
            />
            <FeatureCard
              title="Cloud Solutions"
              description="Seamless cloud integration and management across multiple platforms, providing scalability and reliability for your infrastructure."
              icon={Server}
            />
            <FeatureCard
              title="Cybersecurity"
              description="Comprehensive security solutions including threat detection, prevention, and response to protect your valuable business assets."
              icon={Database}
            />
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-24 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-mono font-bold text-white mb-12 hover:scale-105 transition-transform">
            /COMMUNITY
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="stats-card p-6 rounded-lg bg-white/10 backdrop-blur">
              <Users className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">500+</h3>
              <p className="text-blue-100">Active Clients</p>
            </div>
            <div className="stats-card p-6 rounded-lg bg-white/10 backdrop-blur">
              <Code className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">24/7</h3>
              <p className="text-blue-100">Support Available</p>
            </div>
            <div className="stats-card p-6 rounded-lg bg-white/10 backdrop-blur">
              <Globe className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">15+</h3>
              <p className="text-blue-100">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section id="integrate" className="py-24 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-mono font-bold mb-6 text-blue-600">/SOLUTIONS</h2>
              <p className="text-lg text-blue-600/80 mb-8">
                Tailored IT solutions designed to meet your specific business needs. Our comprehensive
                service portfolio ensures your technology infrastructure runs at peak efficiency.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <p className="text-blue-600">Proactive IT Management</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <p className="text-blue-600">Remote Support Services</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <p className="text-blue-600">Strategic IT Planning</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                alt="Code on screen"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-mono font-bold mb-12 text-white">/EXPERTISE</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                alt="Team collaboration"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-white">24/7 Support</h3>
              <p className="text-blue-100">Round-the-clock assistance</p>
            </div>
            <div className="p-6">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                alt="Robot"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-white">AI Integration</h3>
              <p className="text-blue-100">Smart automation solutions</p>
            </div>
            <div className="p-6">
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
                alt="Technology"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-white">Infrastructure</h3>
              <p className="text-blue-100">Enterprise-grade systems</p>
            </div>
            <div className="p-6">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
                alt="Smart living"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-white">Security</h3>
              <p className="text-blue-100">Advanced protection</p>
            </div>
          </div>
        </div>
      </section>

      <QuoteSection />

      {/* Footer */}
      <footer className="bg-gradient-to-br from-white to-blue-50 border-t border-blue-100 py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-blue-600">
              © 2024 Welka Enterprises LLC. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-600 hover:text-blue-700 hover:scale-110 transition-transform">
                Twitter
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 hover:scale-110 transition-transform">
                GitHub
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 hover:scale-110 transition-transform">
                Discord
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
