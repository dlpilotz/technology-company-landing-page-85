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
    
    // Create a hidden form for Netlify
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data as any).toString(),
    })
      .then(() => {
        console.log("Form submitted successfully");
        toast({
          title: "Quote Request Received",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", company: "", message: "" });
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        toast({
          title: "Submission Error",
          description: "Please try again later or contact us directly.",
          variant: "destructive",
        });
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="quote-section" className="py-24 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-mono font-bold mb-12 text-center text-blue-600 hover:scale-105 transition-transform">
          /GET A QUOTE TODAY
        </h2>
        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
          <form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            data-netlify="true"
            name="quote-request"
            method="POST"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="quote-request" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="hover:border-blue-400 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
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
                  className="hover:border-blue-400 transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium">
                Company
              </label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company Name"
                required
                className="hover:border-blue-400 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your IT needs..."
                className="min-h-[120px] hover:border-blue-400 transition-colors"
                required
              />
            </div>
            <div className="flex justify-center">
              <Button 
                type="submit" 
                size="lg" 
                className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 hover:scale-105 transition-all"
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