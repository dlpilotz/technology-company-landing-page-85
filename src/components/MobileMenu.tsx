import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface MobileMenuProps {
  onNavigate: (section: string) => void;
}

const MobileMenu = ({ onNavigate }: MobileMenuProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    console.log("Mobile menu: Scrolling to top");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="flex flex-col space-y-4 mt-8">
          <button
            onClick={scrollToTop}
            className="text-lg font-medium hover:text-primary text-left px-4 py-2 hover:bg-blue-50 rounded-md transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('features')}
            className="text-lg font-medium hover:text-primary text-left px-4 py-2 hover:bg-blue-50 rounded-md transition-colors"
          >
            Products
          </button>
          <button
            onClick={() => onNavigate('integrate')}
            className="text-lg font-medium hover:text-primary text-left px-4 py-2 hover:bg-blue-50 rounded-md transition-colors"
          >
            Solutions
          </button>
          <button
            onClick={() => onNavigate('community')}
            className="text-lg font-medium hover:text-primary text-left px-4 py-2 hover:bg-blue-50 rounded-md transition-colors"
          >
            Resources
          </button>
          <button
            onClick={() => onNavigate('team')}
            className="text-lg font-medium hover:text-primary text-left px-4 py-2 hover:bg-blue-50 rounded-md transition-colors"
          >
            Team
          </button>
          <div className="space-y-4">
            <Button 
              variant="default"
              className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white w-full justify-start"
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
            <Separator className="bg-gray-300 h-[2px]" />
            <Button 
              variant="default"
              className="bg-blue-600 hover:bg-blue-700 text-white w-full justify-start"
              onClick={() => onNavigate('quote-section')}
            >
              Contact Us
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;