import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const QuoteSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submission started");
    console.log("Form data:", formData);
    
    try {
      const response = await fetch("https://formspree.io/f/xeoqvbdn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        toast({
          title: "Quote Request Received",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        console.error("Form submission failed");
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="quote-section" className="relative py-24 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-3xl relative">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-mono font-bold text-blue-600 mb-4 hover:scale-105 transition-transform">
            /GET A QUOTE TODAY
          </h2>
          <p className="text-blue-600/80 max-w-xl mx-auto">
            Transform your IT infrastructure with our expert solutions
          </p>
        </div>

        <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 hover:shadow-blue-100/50 transition-all duration-500">
          {/* Background image */}
          <div className="absolute inset-0 opacity-5 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              alt="Background Pattern"
              className="w-full h-full object-cover"
            />
          </div>

          <form 
            onSubmit={handleSubmit}
            method="POST"
            className="space-y-6 relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 group">
                <label htmlFor="name" className="text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="border-blue-100 focus:border-blue-300 hover:border-blue-200 transition-colors backdrop-blur-sm bg-white/50"
                />
              </div>
              <div className="space-y-2 group">
                <label htmlFor="email" className="text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                  className="border-blue-100 focus:border-blue-300 hover:border-blue-200 transition-colors backdrop-blur-sm bg-white/50"
                />
              </div>
            </div>

            <div className="space-y-2 group">
              <label htmlFor="company" className="text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                Company
              </label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company Name"
                required
                className="border-blue-100 focus:border-blue-300 hover:border-blue-200 transition-colors backdrop-blur-sm bg-white/50"
              />
            </div>

            <div className="space-y-2 group">
              <label htmlFor="message" className="text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your IT needs..."
                className="min-h-[120px] border-blue-100 focus:border-blue-300 hover:border-blue-200 transition-colors backdrop-blur-sm bg-white/50"
                required
              />
            </div>

            <div className="flex justify-center pt-4">
              <Button 
                type="submit" 
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 
                         hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25
                         px-8 py-2 text-lg font-semibold"
              >
                Request Quote
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;