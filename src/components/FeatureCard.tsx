import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-gradient-to-br from-white to-blue-50 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-bl-full -z-10 transition-transform group-hover:scale-150 duration-300"></div>
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-blue-600/10 p-3 group-hover:bg-blue-600/20 transition-colors duration-300">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="font-semibold text-blue-900">{title}</h3>
      </div>
      <p className="mt-4 text-sm text-blue-600/80">{description}</p>
    </div>
  );
};

export default FeatureCard;