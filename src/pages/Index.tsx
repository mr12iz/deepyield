import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Stats } from "@/components/Stats";
import { Features } from "@/components/Features";
import { Twitter, Send, Copy, Bot } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Index = () => {
  const [showAIChat, setShowAIChat] = useState(false);
  const contractAddress = "0x1234...5678"; // Replace with actual CA

  const copyCA = () => {
    navigator.clipboard.writeText(contractAddress);
    toast.success("Contract address copied!");
  };

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
            <div className="mt-10 flex flex-col items-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Earning Now
              </Button>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 text-white">
                <span className="text-sm">CA: {contractAddress}</span>
                <Button variant="ghost" size="icon" onClick={copyCA} className="text-white hover:text-primary">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <Features />

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

      {/* Tokenomics Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Tokenomics</h2>
            <p className="mt-4 text-lg text-gray-600">Understanding $DEEP Token Distribution</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="aspect-square rounded-full bg-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">30%</div>
                  <div className="text-sm text-gray-600">Liquidity & Staking</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full bg-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">20%</div>
                  <div className="text-sm text-gray-600">Team & Advisors</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full bg-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15%</div>
                  <div className="text-sm text-gray-600">Community & Airdrop</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full bg-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">35%</div>
                  <div className="text-sm text-gray-600">Treasury</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Bubble */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setShowAIChat(!showAIChat)}
          className="rounded-full w-16 h-16 shadow-lg"
        >
          <Bot className="h-8 w-8" />
        </Button>
        
        {showAIChat && (
          <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-xl p-4">
            <div className="text-lg font-semibold mb-2">AI Token Analysis</div>
            <p className="text-sm text-gray-600 mb-4">
              Let our AI analyze any token for you. Just paste the contract address below.
            </p>
            <input
              type="text"
              placeholder="Paste token CA here..."
              className="w-full p-2 border rounded mb-2"
            />
            <Button className="w-full">Analyze Token</Button>
          </div>
        )}
      </div>

      {/* Footer */}
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
                <Send className="w-6 h-6" />
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
