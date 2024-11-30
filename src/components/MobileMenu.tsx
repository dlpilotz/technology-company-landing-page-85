import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  onNavigate: (section: string) => void;
}

const MobileMenu = ({ onNavigate }: MobileMenuProps) => {
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
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;