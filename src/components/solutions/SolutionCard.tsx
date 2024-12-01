import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

const SolutionCard = ({ icon: Icon, title, description, features, delay = 0 }: SolutionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="text-2xl font-semibold text-blue-900 mb-4">{title}</h3>
      <p className="text-blue-600/80 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-blue-600/70">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SolutionCard;