import Navbar from "@/components/Navbar";
import { Network, Lock, Database } from "lucide-react";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-mono font-bold text-blue-600 mb-8">/SOLUTIONS</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Network className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-xl font-semibold mb-4">Network Management</h2>
              <p className="text-gray-600">24/7 network monitoring and optimization.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Lock className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-xl font-semibold mb-4">Cybersecurity</h2>
              <p className="text-gray-600">Advanced threat protection and security services.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Database className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-xl font-semibold mb-4">Data Management</h2>
              <p className="text-gray-600">Comprehensive data solutions and backup services.</p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              alt="IT Solutions"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Solutions;