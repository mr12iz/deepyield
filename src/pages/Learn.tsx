import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Learn = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Learn</h1>
          <p className="mt-4 text-lg text-gray-600">
            Welcome to the Learn section! Here you will find resources and information to help you understand our platform and the world of DeFi.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="text-lg text-gray-800">1. Introduction to DeFi</li>
            <li className="text-lg text-gray-800">2. How to Use DeepYield</li>
            <li className="text-lg text-gray-800">3. Understanding Yield Farming</li>
            <li className="text-lg text-gray-800">4. Risk Management Strategies</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Learn;
