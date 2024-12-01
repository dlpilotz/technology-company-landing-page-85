import Navbar from "@/components/Navbar";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import SolutionsGrid from "@/components/solutions/SolutionsGrid";
import SolutionsCTA from "@/components/solutions/SolutionsCTA";

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <SolutionsHero />
      <SolutionsGrid />
      <SolutionsCTA />
    </div>
  );
};

export default Solutions;