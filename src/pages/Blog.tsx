import Navbar from "@/components/Navbar";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-mono font-bold text-blue-600 mb-8">/BLOG</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              alt="Blog Post 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-sm text-blue-600">March 15, 2024</span>
              <h2 className="text-xl font-semibold my-2">The Future of Cloud Computing</h2>
              <p className="text-gray-600 mb-4">
                Exploring emerging trends in cloud technology and their impact on business operations.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">Read More →</button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Blog Post 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-sm text-blue-600">March 10, 2024</span>
              <h2 className="text-xl font-semibold my-2">Cybersecurity Best Practices</h2>
              <p className="text-gray-600 mb-4">
                Essential security measures every business should implement in 2024.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">Read More →</button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475"
              alt="Blog Post 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-sm text-blue-600">March 5, 2024</span>
              <h2 className="text-xl font-semibold my-2">IT Infrastructure Optimization</h2>
              <p className="text-gray-600 mb-4">
                Strategies for improving your IT infrastructure efficiency and performance.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">Read More →</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;