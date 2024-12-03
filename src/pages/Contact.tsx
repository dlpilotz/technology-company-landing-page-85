import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import { Mail, Building2, Phone, User } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submission started");
    
    try {
      const form = e.target as HTMLFormElement;
      const data = new FormData(form);
      
      console.log("Form data:", Object.fromEntries(data.entries()));
      
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: ""
      });
      
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl font-mono font-bold text-blue-600 mb-4">
                Get In Touch
              </h1>
              <p className="text-gray-600 max-w-xl mx-auto">
                Let us help transform your business with our expert IT solutions. Fill out the form below and we'll get back to you shortly.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 animate-fade-in-delayed hover:shadow-blue-100/50 transition-all duration-500">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5 rounded-2xl overflow-hidden">
                <div className="bg-grid-pattern w-full h-full"></div>
              </div>

              {/* Hidden form for Netlify */}
              <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
                <input type="text" name="name" />
                <input type="email" name="email" />
                <input type="text" name="company" />
                <input type="tel" name="phone" />
                <textarea name="message"></textarea>
              </form>

              <form 
                onSubmit={handleSubmit}
                className="space-y-6 relative"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="recipient" value="taylor@welkaenterprises.com" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 group">
                    <label htmlFor="name" className="flex items-center space-x-2 text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                      <User className="w-4 h-4" />
                      <span>Name</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-blue-100 focus:border-blue-300 hover:border-blue-200 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2 group">
                    <label htmlFor="email" className="flex items-center space-x-2 text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-blue-100 focus:border-blue-300 hover:border-blue-200 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 group">
                    <label htmlFor="company" className="flex items-center space-x-2 text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                      <Building2 className="w-4 h-4" />
                      <span>Company</span>
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="border-blue-100 focus:border-blue-300 hover:border-blue-200 transition-colors"
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div className="space-y-2 group">
                    <label htmlFor="phone" className="flex items-center space-x-2 text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                      <Phone className="w-4 h-4" />
                      <span>Phone Number</span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-blue-100 focus:border-blue-300 hover:border-blue-200 transition-colors"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label htmlFor="message" className="flex items-center space-x-2 text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                    <span>Message</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] border-blue-100 focus:border-blue-300 hover:border-blue-200 transition-colors"
                    placeholder="Tell us about your IT needs..."
                  />
                </div>

                <div className="flex justify-center pt-4">
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 
                             hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25
                             px-8 py-2 text-lg font-semibold"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;