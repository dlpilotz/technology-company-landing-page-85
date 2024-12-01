import Navbar from "@/components/Navbar";
import { FileText, Download, Video } from "lucide-react";

const Resources = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-mono font-bold text-blue-600 mb-8">/RESOURCES</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FileText className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Documentation</h2>
            <p className="text-gray-600">Comprehensive guides and documentation for our services.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Download className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Downloads</h2>
            <p className="text-gray-600">Access to tools, utilities, and resources.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Video className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Tutorials</h2>
            <p className="text-gray-600">Video tutorials and training materials.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resources;