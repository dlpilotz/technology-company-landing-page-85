import { Database, Server, Network, Users, Code, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";
import { useState } from "react";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote form submitted:", formData);
    toast({
      title: "Quote Request Received",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-hero-gradient">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6">
            IT MANAGED
            <br />
            SERVICES
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-blue-50">
            Comprehensive IT solutions tailored for your business. From network infrastructure
            to cybersecurity, we deliver enterprise-grade managed services across all platforms.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white bg-transparent hover:bg-white/10">
              Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-mono font-bold mb-12 text-center text-blue-600">
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
      <section id="community" className="py-24 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-mono font-bold text-white mb-12">
            /COMMUNITY
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur">
              <Users className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">500+</h3>
              <p className="text-blue-100">Active Clients</p>
            </div>
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur">
              <Code className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">24/7</h3>
              <p className="text-blue-100">Support Available</p>
            </div>
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur">
              <Globe className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">15+</h3>
              <p className="text-blue-100">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
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

      {/* Quote Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-mono font-bold mb-12 text-center text-blue-600">
            /GET A QUOTE TODAY
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium">
                Company
              </label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company Name"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your IT needs..."
                className="min-h-[120px]"
                required
              />
            </div>
            <div className="flex justify-center">
              <Button type="submit" size="lg" className="w-full md:w-auto">
                Request Quote
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-blue-100 py-12">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-sm text-blue-600">
              © 2024 Welka Enterprises LLC. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Twitter
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                GitHub
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700">
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
