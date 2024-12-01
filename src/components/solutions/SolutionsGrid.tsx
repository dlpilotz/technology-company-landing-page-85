import { Cloud, Lock, Network, Database, Server, Laptop } from "lucide-react";
import SolutionCard from "./SolutionCard";

const solutions = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions that provide flexibility, security, and reliability for your business operations.",
    features: ["Cloud Migration Services", "Hybrid Cloud Solutions", "Cloud Optimization"]
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description: "Advanced security solutions to protect your business from evolving cyber threats.",
    features: ["Threat Detection & Response", "Security Assessments", "Compliance Management"]
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description: "Robust networking solutions for seamless connectivity and communication.",
    features: ["Network Design & Implementation", "Performance Optimization", "24/7 Network Monitoring"]
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Comprehensive data solutions for efficient storage, backup, and recovery.",
    features: ["Data Backup & Recovery", "Database Management", "Data Analytics Solutions"]
  },
  {
    icon: Server,
    title: "Server Management",
    description: "Professional server maintenance and optimization services.",
    features: ["Server Monitoring & Maintenance", "Performance Optimization", "Capacity Planning"]
  },
  {
    icon: Laptop,
    title: "IT Consulting",
    description: "Strategic IT consulting to align technology with business objectives.",
    features: ["Digital Transformation", "IT Strategy Development", "Technology Assessment"]
  }
];

const SolutionsGrid = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              {...solution}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;