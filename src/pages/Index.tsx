import { Shield, Server, Cloud, Network, Database, Users, Code, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";
import HeroSection from "@/components/HeroSection";
import QuoteSection from "@/components/QuoteSection";
import TrustIndicators from "@/components/TrustIndicators";
import SolutionsSection from "@/components/SolutionsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />
      
      <HeroSection />

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-mono font-bold mb-4 text-center text-blue-600 hover:scale-105 transition-transform">
            /CAPABILITIES
          </h2>
          <p className="text-center text-blue-600/80 mb-12 max-w-2xl mx-auto">
            Comprehensive IT solutions designed to protect, optimize, and scale your business infrastructure
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Network Management"
              description="24/7 network monitoring, maintenance, and optimization ensuring maximum uptime and performance for your business operations."
              icon={Network}
            />
            <FeatureCard
              title="Cloud Solutions"
              description="Seamless cloud integration and management across multiple platforms, providing scalability and reliability for your infrastructure."
              icon={Cloud}
            />
            <FeatureCard
              title="Cybersecurity"
              description="Comprehensive security solutions including threat detection, prevention, and response to protect your valuable business assets."
              icon={Shield}
            />
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* Community Section */}
      <section id="community" className="py-24 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-mono font-bold text-white mb-4 hover:scale-105 transition-transform">
            /TRUSTED BY BUSINESSES
          </h2>
          <p className="text-blue-100 mb-12 max-w-2xl mx-auto">
            Join hundreds of Cleveland businesses that trust us with their IT infrastructure
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="stats-card p-8 rounded-lg bg-white/10 backdrop-blur">
              <Users className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">500+</h3>
              <p className="text-blue-100">Active Clients</p>
            </div>
            <div className="stats-card p-8 rounded-lg bg-white/10 backdrop-blur">
              <Code className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">24/7</h3>
              <p className="text-blue-100">Support Available</p>
            </div>
            <div className="stats-card p-8 rounded-lg bg-white/10 backdrop-blur">
              <Globe className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">15+</h3>
              <p className="text-blue-100">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      <SolutionsSection />

      {/* Team Section */}
      <section id="team" className="py-24 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-mono font-bold mb-4 text-white">/EXPERTISE</h2>
          <p className="text-blue-100 mb-12 max-w-2xl mx-auto">
            Our team of certified professionals brings decades of combined experience in delivering cutting-edge IT solutions
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 group bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent group-hover:from-blue-900/90 transition-colors"></div>
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                  alt="24/7 Support"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">24/7 Support</h3>
              <p className="text-blue-100 mb-4">Round-the-clock technical assistance with guaranteed response times</p>
              <ul className="text-left text-blue-200 text-sm space-y-2">
                <li>• Emergency Response Team</li>
                <li>• Live Chat Support</li>
                <li>• Remote Troubleshooting</li>
              </ul>
            </div>

            <div className="p-6 group bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent group-hover:from-blue-900/90 transition-colors"></div>
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="AI Integration"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">AI Integration</h3>
              <p className="text-blue-100 mb-4">Advanced automation and machine learning solutions</p>
              <ul className="text-left text-blue-200 text-sm space-y-2">
                <li>• Process Automation</li>
                <li>• Predictive Analytics</li>
                <li>• Smart Workflows</li>
              </ul>
            </div>

            <div className="p-6 group bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent group-hover:from-blue-900/90 transition-colors"></div>
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="Infrastructure"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Infrastructure</h3>
              <p className="text-blue-100 mb-4">Enterprise-grade systems and network solutions</p>
              <ul className="text-left text-blue-200 text-sm space-y-2">
                <li>• Cloud Architecture</li>
                <li>• Network Design</li>
                <li>• Scalable Solutions</li>
              </ul>
            </div>

            <div className="p-6 group bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent group-hover:from-blue-900/90 transition-colors"></div>
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
                  alt="Security"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Security</h3>
              <p className="text-blue-100 mb-4">Advanced protection and threat prevention</p>
              <ul className="text-left text-blue-200 text-sm space-y-2">
                <li>• Threat Detection</li>
                <li>• Data Encryption</li>
                <li>• Access Control</li>
              </ul>
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
