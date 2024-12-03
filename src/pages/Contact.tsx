import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ContactHeader />

            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 animate-fade-in-delayed hover:shadow-blue-100/50 transition-all duration-500">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5 rounded-2xl overflow-hidden">
                <div className="bg-grid-pattern w-full h-full"></div>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;