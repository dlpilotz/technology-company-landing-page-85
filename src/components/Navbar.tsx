import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
          className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
        >
          <img src="/websitelogo.png" alt="Welka Enterprises LLC" className="h-12 w-auto" />
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Products
          </Link>
          <Link 
            to="/solutions" 
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Solutions
          </Link>
          <Link 
            to="/about" 
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            About
          </Link>
          <Link 
            to="/case-studies" 
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Case Studies
          </Link>
          <div className="flex items-center space-x-4">
            <Button 
              variant="default"
              className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white"
              asChild
            >
              <a
                href="https://support.welkaenterprises.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Help Desk
              </a>
            </Button>
            <Separator orientation="vertical" className="h-6 bg-gray-300 w-[2px]" />
            <Button 
              variant="default"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              asChild
            >
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>

        <MobileMenu onNavigate={scrollToSection} />
      </nav>
    </header>
  );
};

export default Navbar;