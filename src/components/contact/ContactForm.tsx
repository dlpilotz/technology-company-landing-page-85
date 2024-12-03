import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Building2, Phone, User } from "lucide-react";

interface ContactFormProps {
  formData: {
    name: string;
    email: string;
    company: string;
    phone: string;
    message: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const ContactForm = ({ formData, handleChange, handleSubmit }: ContactFormProps) => {
  return (
    <>
      {/* Static form for Netlify detection - hidden */}
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="company" />
        <input type="tel" name="phone" />
        <textarea name="message"></textarea>
      </form>

      {/* Actual form */}
      <form 
        name="contact"
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-6 relative"
      >
        <input type="hidden" name="form-name" value="contact" />
        
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
    </>
  );
};

export default ContactForm;