import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 border border-white/10"
    >
      <div className="rounded-xl bg-white/10 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-100 transition-colors">{title}</h3>
      <p className="text-blue-100/80 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;