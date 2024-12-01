import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ArrowRight, Building2, Cloud, Shield } from "lucide-react";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar />
      
      {/* Main content with proper padding to prevent navbar overlap */}
      <main className="pt-24 pb-16 px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto max-w-6xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 font-mono">/CASE STUDIES</h1>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Explore how we've helped businesses transform their IT infrastructure and achieve their goals through innovative solutions and strategic implementations.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* FlyHouse Aviation Case Study */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 group"
            >
              <div className="relative h-48 bg-gradient-to-r from-blue-600 to-blue-800">
                <Cloud className="absolute bottom-4 right-4 w-16 h-16 text-white/20" />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">Aviation</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">FlyHouse Aviation Infrastructure Implementation</h3>
                <p className="text-gray-600 mb-4">
                  Modernized aviation operations with cloud infrastructure and real-time data systems, improving efficiency by 60%.
                </p>
                <div className="space-y-3 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Cloud migration completed in 3 months</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>99.99% system uptime achieved</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Reduced IT costs by 40%</span>
                  </div>
                </div>
                <button className="group inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Manufacturing Company Case Study */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 group"
            >
              <div className="relative h-48 bg-gradient-to-r from-purple-600 to-purple-800">
                <Building2 className="absolute bottom-4 right-4 w-16 h-16 text-white/20" />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full">Manufacturing</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Smart Manufacturing Digital Transformation</h3>
                <p className="text-gray-600 mb-4">
                  Implemented IoT sensors and real-time monitoring systems, resulting in a 35% increase in production efficiency.
                </p>
                <div className="space-y-3 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Automated 70% of quality control processes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Reduced downtime by 45%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>ROI achieved within 8 months</span>
                  </div>
                </div>
                <button className="group inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Tech Startup Case Study */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 group"
            >
              <div className="relative h-48 bg-gradient-to-r from-green-600 to-green-800">
                <Shield className="absolute bottom-4 right-4 w-16 h-16 text-white/20" />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">Technology</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Startup Security Infrastructure Overhaul</h3>
                <p className="text-gray-600 mb-4">
                  Enhanced cybersecurity measures and implemented zero-trust architecture for a rapidly growing tech startup.
                </p>
                <div className="space-y-3 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>100% compliance with SOC 2 requirements</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Zero security breaches post-implementation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Secured Series B funding with enhanced security</span>
                  </div>
                </div>
                <button className="group inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Contact CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your organization achieve similar results through our managed IT services and solutions.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Schedule a Consultation
            </button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default CaseStudies;