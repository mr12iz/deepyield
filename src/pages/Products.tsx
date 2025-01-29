import { Coins, Lock, Users, Brain } from "lucide-react";

const Products = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-16">Our Products</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Yield Optimizer */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Coins className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-lg">Yield Optimizer</h3>
              </div>
              <p className="text-gray-600">
                AI-driven platform that automatically finds and allocates funds to the highest-yielding opportunities.
                Smart contract-based system ensures security and efficiency across multiple chains.
              </p>
            </div>

            {/* Deep Staking */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-lg">Deep Staking</h3>
              </div>
              <p className="text-gray-600">
                Enhanced staking protocol with AI-optimized rewards and flexible lock periods.
                Earn maximum returns while maintaining liquidity options.
              </p>
            </div>

            {/* Governance Portal */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-lg">Governance Portal</h3>
              </div>
              <p className="text-gray-600">
                Decentralized governance platform for $DEEP holders to participate in protocol decisions.
                Vote on upgrades, treasury allocation, and strategic partnerships.
              </p>
            </div>

            {/* AI Vaults */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-lg">AI Vaults</h3>
              </div>
              <p className="text-gray-600">
                Smart vaults using machine learning to automate yield farming strategies.
                Minimize impermanent loss while maximizing returns through AI-powered portfolio management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;