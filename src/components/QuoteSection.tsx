import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import { useToast } from "@/components/ui/use-toast";

const QuoteSection = () => {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("xeoqvbdn");

  if (state.succeeded) {
    toast({
      title: "Quote Request Received",
      description: "We'll get back to you within 24 hours.",
    });
  }

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
                  placeholder="John Doe"
                  required
                  className="border-blue-100 focus:border-blue-300 hover:border-blue-200 transition-colors backdrop-blur-sm bg-white/50"
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                  className="text-red-500 text-sm"
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
                  placeholder="john@company.com"
                  required
                  className="border-blue-100 focus:border-blue-300 hover:border-blue-200 transition-colors backdrop-blur-sm bg-white/50"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm"
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
                placeholder="Your Company Name"
                required
                className="border-blue-100 focus:border-blue-300 hover:border-blue-200 transition-colors backdrop-blur-sm bg-white/50"
              />
              <ValidationError 
                prefix="Company" 
                field="company"
                errors={state.errors}
                className="text-red-500 text-sm"
              />
            </div>

            <div className="space-y-2 group">
              <label htmlFor="message" className="text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your IT needs..."
                className="min-h-[120px] border-blue-100 focus:border-blue-300 hover:border-blue-200 transition-colors backdrop-blur-sm bg-white/50"
                required
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm"
              />
            </div>

            <div className="flex justify-center pt-4">
              <Button 
                type="submit" 
                size="lg"
                disabled={state.submitting}
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