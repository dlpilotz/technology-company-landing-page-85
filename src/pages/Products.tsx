import Navbar from "@/components/Navbar";
import { Shield, Server, Cloud } from "lucide-react";

const Products = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-mono font-bold text-blue-600 mb-8">/PRODUCTS</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Shield className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Security Solutions</h2>
            <p className="text-gray-600">Enterprise-grade security infrastructure and monitoring.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Server className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Server Infrastructure</h2>
            <p className="text-gray-600">Robust and scalable server solutions for your business.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Cloud className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Cloud Services</h2>
            <p className="text-gray-600">Flexible cloud solutions for modern enterprises.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;