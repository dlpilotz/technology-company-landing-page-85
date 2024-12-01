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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submission started");
    console.log("Form data:", formData);
    
    // Create a hidden form for Netlify
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    
    console.log("FormData entries:", Array.from(data.entries()));
    
    // For Netlify forms, we don't need to manually submit - it handles the submission automatically
    // The form will be processed by Netlify's form handling service
    toast({
      title: "Quote Request Received",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
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

          {/* Hidden form for Netlify form detection */}
          <form name="quote-request" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <input type="text" name="company" />
            <textarea name="message"></textarea>
          </form>

          <form 
            onSubmit={handleSubmit} 
            className="space-y-6 relative"
            name="quote-request"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="quote-request" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>

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