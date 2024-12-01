import Navbar from "@/components/Navbar";
import { Book, Calendar, Clock, User } from "lucide-react";
import { motion } from "framer-motion";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Cloud Computing",
      excerpt: "Exploring emerging trends in cloud technology and their impact on business operations.",
      date: "March 15, 2024",
      readTime: "5 min read",
      author: "Sarah Johnson",
      category: "Cloud Technology",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    },
    {
      title: "Cybersecurity Best Practices",
      excerpt: "Essential security measures every business should implement in 2024.",
      date: "March 10, 2024",
      readTime: "8 min read",
      author: "Michael Chen",
      category: "Security",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      title: "IT Infrastructure Optimization",
      excerpt: "Strategies for improving your IT infrastructure efficiency and performance.",
      date: "March 5, 2024",
      readTime: "6 min read",
      author: "Alex Rivera",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-mono font-bold text-blue-900 mb-6"
          >
            /INSIGHTS & UPDATES
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-blue-600/80 max-w-2xl mx-auto"
          >
            Stay informed with the latest trends, best practices, and industry insights in technology and IT solutions.
          </motion.p>
        </div>
      </section>

      {/* Featured Posts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.article 
                key={index}
                variants={item}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h2 className="text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-blue-600/80">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-blue-600/60">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Book className="w-12 h-12 mx-auto text-blue-200" />
            <h2 className="text-3xl font-mono font-bold">Stay Updated</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights, trends, and best practices in IT solutions.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;