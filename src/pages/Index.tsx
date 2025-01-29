import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Stats } from "@/components/Stats";
import { Features } from "@/components/Features";
import { Twitter, Telegram } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-6xl">
              Maximize Your Yield with AI-Powered DeFi Strategies
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
              Experience the future of decentralized finance with our advanced AI algorithms
              optimizing your yields across multiple chains.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Earning Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Explore Features
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <Features />

      {/* Integration Partners */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Trusted by Leading Protocols
            </h2>
            <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
              {/* Replace with actual partner logos */}
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center h-16 bg-gray-100 rounded-lg"
                >
                  <span className="text-gray-400">Partner {i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Roadmap</h2>
            <p className="mt-4 text-lg text-gray-600">Building the future of AI-powered DeFi</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phase 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary font-bold mb-4">Phase 1: Foundation</div>
              <h3 className="font-semibold mb-2">Months 0-6</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Launch AI model beta</li>
                <li>• DEX integrations</li>
                <li>• Smart contract deployment</li>
                <li>• Community building</li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary font-bold mb-4">Phase 2: Expansion</div>
              <h3 className="font-semibold mb-2">Months 6-12</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Multi-chain AI optimization</li>
                <li>• Strategic partnerships</li>
                <li>• Deep Vaults launch</li>
                <li>• Initial governance</li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary font-bold mb-4">Phase 3: Maturity</div>
              <h3 className="font-semibold mb-2">Months 12-18</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Advanced AI predictions</li>
                <li>• Cross-chain expansion</li>
                <li>• Mobile app launch</li>
                <li>• Full DAO governance</li>
              </ul>
            </div>

            {/* Phase 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary font-bold mb-4">Phase 4: Beyond</div>
              <h3 className="font-semibold mb-2">18+ Months</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• AI + ZK-Proofs integration</li>
                <li>• Institutional adoption</li>
                <li>• Global market expansion</li>
                <li>• Advanced ecosystem features</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex space-x-6">
              <a
                href="https://twitter.com/DeepYield"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://t.me/DeepYield"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Telegram className="w-6 h-6" />
              </a>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 DeepYield. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
