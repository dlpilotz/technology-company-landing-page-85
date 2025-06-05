
import { Wrench, Settings } from "lucide-react";

const MaintenancePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-300/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="text-center z-10 px-4 max-w-2xl mx-auto">
        {/* Logo */}
        <div className="mb-12 animate-fade-in">
          <img 
            src="/websitelogo.png" 
            alt="Welka Enterprises LLC" 
            className="h-24 w-auto mx-auto hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Maintenance Icon */}
        <div className="mb-8 animate-fade-in-delayed">
          <div className="relative inline-block">
            <div className="bg-blue-600 rounded-full p-6 shadow-lg">
              <Wrench className="w-12 h-12 text-white animate-pulse" />
            </div>
            <Settings className="w-6 h-6 text-blue-400 absolute -top-2 -right-2 animate-spin" style={{animationDuration: '3s'}} />
          </div>
        </div>

        {/* Main Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in-delayed">
          Under Maintenance
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 animate-fade-in-delayed leading-relaxed">
          We're working hard to improve your experience.<br />
          Our website will be back online shortly.
        </p>

        {/* Contact Information */}
        <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-lg animate-fade-in-delayed border border-blue-100">
          <p className="text-gray-700 mb-2">
            Need immediate assistance?
          </p>
          <a 
            href="https://support.welkaenterprises.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
          >
            Visit Our Help Desk
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12 animate-fade-in-delayed">
          <p className="text-sm text-gray-500">
            © 2024 Welka Enterprises LLC. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
