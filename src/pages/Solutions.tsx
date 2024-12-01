import Navbar from "@/components/Navbar";
import { Network, Lock, Database, Cloud, Server, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-mono font-bold text-blue-600 relative inline-block">
              /ENTERPRISE SOLUTIONS
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-blue-600 transform origin-left transition-all duration-300 hover:w-full"></span>
            </h1>
            <p className="mt-6 text-lg text-blue-600/80 leading-relaxed">
              Comprehensive IT solutions designed to transform your business operations and drive growth through innovative technology.
            </p>
          </div>
        </div>
      </section>

      {/* Main Solutions Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cloud Solutions */}
            <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="rounded-full bg-blue-100 w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Cloud className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Cloud Infrastructure</h3>
              <p className="text-blue-600/80 mb-4">
                Scalable cloud solutions that provide flexibility, security, and reliability for your business operations.
              </p>
              <ul className="space-y-2 text-sm text-blue-600/70">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Cloud Migration Services
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Hybrid Cloud Solutions
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Cloud Optimization
                </li>
              </ul>
            </div>

            {/* Cybersecurity */}
            <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="rounded-full bg-blue-100 w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Lock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Cybersecurity</h3>
              <p className="text-blue-600/80 mb-4">
                Advanced security solutions to protect your business from evolving cyber threats.
              </p>
              <ul className="space-y-2 text-sm text-blue-600/70">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Threat Detection & Response
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Security Assessments
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Compliance Management
                </li>
              </ul>
            </div>

            {/* Network Infrastructure */}
            <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="rounded-full bg-blue-100 w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Network className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Network Infrastructure</h3>
              <p className="text-blue-600/80 mb-4">
                Robust networking solutions for seamless connectivity and communication.
              </p>
              <ul className="space-y-2 text-sm text-blue-600/70">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Network Design & Implementation
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Performance Optimization
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  24/7 Network Monitoring
                </li>
              </ul>
            </div>

            {/* Data Management */}
            <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="rounded-full bg-blue-100 w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Data Management</h3>
              <p className="text-blue-600/80 mb-4">
                Comprehensive data solutions for efficient storage, backup, and recovery.
              </p>
              <ul className="space-y-2 text-sm text-blue-600/70">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Data Backup & Recovery
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Database Management
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Data Analytics Solutions
                </li>
              </ul>
            </div>

            {/* Server Management */}
            <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="rounded-full bg-blue-100 w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Server className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Server Management</h3>
              <p className="text-blue-600/80 mb-4">
                Professional server maintenance and optimization services.
              </p>
              <ul className="space-y-2 text-sm text-blue-600/70">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Server Monitoring & Maintenance
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Performance Optimization
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Capacity Planning
                </li>
              </ul>
            </div>

            {/* IT Consulting */}
            <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="rounded-full bg-blue-100 w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Laptop className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">IT Consulting</h3>
              <p className="text-blue-600/80 mb-4">
                Strategic IT consulting to align technology with business objectives.
              </p>
              <ul className="space-y-2 text-sm text-blue-600/70">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Digital Transformation
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  IT Strategy Development
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Technology Assessment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can help your business achieve its technology goals.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50"
          >
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Solutions;