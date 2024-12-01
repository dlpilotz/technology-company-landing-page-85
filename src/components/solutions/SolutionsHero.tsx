import { motion } from "framer-motion";

const SolutionsHero = () => {
  return (
    <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-mono font-bold relative inline-block mb-6">
            /ENTERPRISE SOLUTIONS
            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-white transform origin-left transition-all duration-300 hover:w-full"></span>
          </h1>
          <p className="mt-6 text-xl text-white/90 leading-relaxed">
            Comprehensive IT solutions designed to transform your business operations and drive growth through innovative technology.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default SolutionsHero;