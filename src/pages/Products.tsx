import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Our Products</h1>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Yield Optimizer</h3>
              <p className="text-gray-600 mb-4">
                Maximize your returns with our AI-powered yield optimization engine that automatically finds and allocates funds to the best performing pools.
              </p>
              <button className="text-primary hover:underline">Learn more →</button>
            </div>
            <div className="feature-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Auto-Compounding</h3>
              <p className="text-gray-600 mb-4">
                Automatically reinvest your yields to maximize compound interest across multiple DeFi protocols.
              </p>
              <button className="text-primary hover:underline">Learn more →</button>
            </div>
            <div className="feature-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Analytics</h3>
              <p className="text-gray-600 mb-4">
                Advanced risk assessment tools powered by AI to help you make informed investment decisions.
              </p>
              <button className="text-primary hover:underline">Learn more →</button>
            </div>
            <div className="feature-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cross-Chain Bridge</h3>
              <p className="text-gray-600 mb-4">
                Seamlessly transfer assets across different blockchain networks with our secure bridge solution.
              </p>
              <button className="text-primary hover:underline">Learn more →</button>
            </div>
            <div className="feature-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Liquidity Pools</h3>
              <p className="text-gray-600 mb-4">
                Provide liquidity to earn fees and rewards while supporting the DeFi ecosystem.
              </p>
              <button className="text-primary hover:underline">Learn more →</button>
            </div>
            <div className="feature-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Portfolio Tracker</h3>
              <p className="text-gray-600 mb-4">
                Monitor your DeFi investments across all platforms in one convenient dashboard.
              </p>
              <button className="text-primary hover:underline">Learn more →</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;