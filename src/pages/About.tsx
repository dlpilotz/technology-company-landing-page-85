import Navbar from "@/components/Navbar";
import { Building2, Users, HeartPulse, HandShake } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const About = () => {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Clients Served" },
    { number: "24/7", label: "Support Available" },
    { number: "99.9%", label: "Client Satisfaction" },
  ];

  const values = [
    {
      icon: HeartPulse,
      title: "Passion",
      description: "We're passionate about delivering innovative IT solutions that drive business success."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together with our clients to achieve their technology goals."
    },
    {
      icon: HandShake,
      title: "Trust",
      description: "Building lasting relationships through reliability and transparency."
    },
    {
      icon: Building2,
      title: "Excellence",
      description: "Committed to delivering excellence in every aspect of our service."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-mono font-bold text-blue-900 mb-6"
          >
            /ABOUT US
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg md:text-xl text-blue-600/80 leading-relaxed">
              Welka Enterprises LLC is a leading provider of IT managed services, delivering innovative 
              solutions to businesses across industries. With over 15 years of experience, our team of 
              certified professionals ensures your IT infrastructure runs at peak efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-blue-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono font-bold text-blue-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="rounded-full bg-blue-600/10 p-4 w-fit mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{value.title}</h3>
                <p className="text-blue-600/80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-mono font-bold text-blue-900">Our Team</h2>
              <p className="text-lg text-blue-600/80 leading-relaxed">
                Our team of certified professionals brings together decades of combined experience
                in IT management, cybersecurity, and digital transformation. We're committed to
                delivering excellence and driving innovation in everything we do.
              </p>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.location.href = '/contact'}
              >
                Join Our Team
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Our Team"
                className="rounded-lg shadow-2xl w-full object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;