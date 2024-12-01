import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-mono font-bold text-blue-600 mb-8">/ABOUT US</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              Welka Enterprises LLC is a leading provider of IT managed services, delivering innovative solutions to businesses across industries.
            </p>
            <p className="text-lg text-gray-600">
              With over 15 years of experience, our team of certified professionals ensures your IT infrastructure runs at peak efficiency.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-600">15+</h3>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-600">500+</h3>
                <p className="text-sm text-gray-600">Clients Served</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              alt="Our Team"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;