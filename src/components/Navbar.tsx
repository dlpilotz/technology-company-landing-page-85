import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    console.log(`Navigating to section: ${id}`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto px-4 flex items-center justify-between h-20">
        <Link 
          to="/" 
          className="font-mono text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          Welka Enterprises LLC
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Products
          </button>
          <button 
            onClick={() => scrollToSection('integrate')} 
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Solutions
          </button>
          <button 
            onClick={() => scrollToSection('community')} 
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Resources
          </button>
          <button 
            onClick={() => scrollToSection('team')} 
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Team
          </button>
          <Button 
            variant="default"
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => scrollToSection('contact')}
          >
            Contact Us
          </Button>
        </div>

        <MobileMenu onNavigate={scrollToSection} />
      </nav>
    </header>
  );
};

export default Navbar;