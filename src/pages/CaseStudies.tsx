import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowRight, Plane, Factory } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-mono font-bold text-blue-600 mb-4">/CASE STUDIES</h1>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Explore how we've helped organizations transform their technology infrastructure
            and achieve their business goals through innovative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
                  alt="FlyHouse Aviation Case Study"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Plane className="h-8 w-8 text-white mb-2" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">
                  FlyHouse Aviation Infrastructure Implementation
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Revolutionizing aviation operations through cutting-edge technology integration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Complete digital transformation of FlyHouse Aviation's infrastructure, 
                  implementing cloud-based solutions and real-time monitoring systems that 
                  improved operational efficiency by 45%.
                </p>
                <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group/btn">
                  Read Case Study 
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                  alt="Manufacturing Case Study"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Factory className="h-8 w-8 text-white mb-2" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">
                  Manufacturing Cloud Migration
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Transforming manufacturing operations through cloud technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Successful cloud migration project for a manufacturing company, reducing 
                  operational costs by 30% and improving scalability while maintaining 
                  99.9% uptime during transition.
                </p>
                <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group/btn">
                  Read Case Study
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default CaseStudies;