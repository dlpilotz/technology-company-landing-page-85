import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const SolutionsCTA = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
          Let's discuss how our solutions can help your business achieve its technology goals.
        </p>
        <Button
          variant="secondary"
          size="lg"
          className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8"
        >
          Schedule a Consultation
        </Button>
      </motion.div>
    </section>
  );
};

export default SolutionsCTA;