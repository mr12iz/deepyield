import { BookOpen, Video, Newspaper, Book } from "lucide-react";

const Learn = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-16">Learn DeepYield</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Documentation */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-lg">Documentation</h3>
              </div>
              <p className="text-gray-600">
                Comprehensive guides and API references for developers and users to integrate and utilize DeepYield effectively.
                Master the platform with detailed technical documentation.
              </p>
            </div>

            {/* Tutorial */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Video className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-lg">Tutorial</h3>
              </div>
              <p className="text-gray-600">
                Step-by-step video guides and interactive lessons to help you maximize your yields.
                Learn from practical examples and real-world scenarios.
              </p>
            </div>

            {/* Blog */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Newspaper className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-lg">Blog</h3>
              </div>
              <p className="text-gray-600">
                Latest updates, market insights, and deep dives into DeFi strategies and AI technology.
                Stay informed with our expert analysis and community updates.
              </p>
            </div>

            {/* Glossary */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Book className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-lg">Glossary</h3>
              </div>
              <p className="text-gray-600">
                Comprehensive dictionary of DeFi and AI terms to help you understand the ecosystem.
                Master the terminology used in decentralized finance and artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;