import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Building2, Phone, User } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("xldeayvp");

  React.useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
      });
    }
  }, [state.succeeded, toast]);

  return (
    <form 
      onSubmit={handleSubmit}
      className="space-y-6 relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2 group">
          <label htmlFor="name" className="flex items-center space-x-2 text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
            <User className="w-4 h-4" />
            <span>Name</span>
          </label>
          <Input
            id="name"
            name="name"
            required
            className="border-blue-100 focus:border-blue-300 hover:border-blue-200 transition-colors"
            placeholder="John Doe"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
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
            required
            className="border-blue-100 focus:border-blue-300 hover:border-blue-200 transition-colors"
            placeholder="john@company.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
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
            required
            className="border-blue-100 focus:border-blue-300 hover:border-blue-200 transition-colors"
            placeholder="Your Company Name"
          />
          <ValidationError prefix="Company" field="company" errors={state.errors} />
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
            className="border-blue-100 focus:border-blue-300 hover:border-blue-200 transition-colors"
            placeholder="(555) 555-5555"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>
      </div>

      <div className="space-y-2 group">
        <label htmlFor="message" className="flex items-center space-x-2 text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
          <span>Message</span>
        </label>
        <Textarea
          id="message"
          name="message"
          required
          className="min-h-[150px] border-blue-100 focus:border-blue-300 hover:border-blue-200 transition-colors"
          placeholder="Tell us about your IT needs..."
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <div className="flex justify-center pt-4">
        <Button 
          type="submit"
          disabled={state.submitting}
          className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 
                   hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25
                   px-8 py-2 text-lg font-semibold"
        >
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;