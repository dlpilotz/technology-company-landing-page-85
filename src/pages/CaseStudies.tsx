import Navbar from "@/components/Navbar";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-mono font-bold text-blue-600 mb-8">/CASE STUDIES</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Case Study 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Healthcare Provider Infrastructure Upgrade</h2>
              <p className="text-gray-600 mb-4">
                Complete IT infrastructure modernization for a major healthcare provider, improving security and efficiency.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">Read More →</button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475"
              alt="Case Study 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Manufacturing Cloud Migration</h2>
              <p className="text-gray-600 mb-4">
                Successful cloud migration project for a manufacturing company, reducing costs and improving scalability.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">Read More →</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaseStudies;