import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Stats } from "@/components/Stats";
import { Features } from "@/components/Features";
import { Twitter, Send, Copy, Bot } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Index = () => {
  const [showAIChat, setShowAIChat] = useState(false);
  const contractAddress = "0x1234...5678";

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

      {/* Tokenomics Section with Creative Design */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Tokenomics</h2>
            <p className="mt-4 text-lg text-gray-600">$DEEP Token Distribution</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Liquidity & Staking", percentage: 30, color: "primary" },
              { label: "Team & Advisors", percentage: 20, color: "secondary" },
              { label: "Community & Airdrop", percentage: 15, color: "primary" },
              { label: "Treasury", percentage: 35, color: "secondary" }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className={`aspect-square rounded-full bg-${item.color}/10 hover:bg-${item.color}/20 transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center p-8 border-2 border-${item.color}/20`}>
                  <div className="text-center">
                    <div className={`text-4xl font-bold text-${item.color}`}>{item.percentage}%</div>
                    <div className="text-sm text-gray-600 mt-2">{item.label}</div>
                  </div>
                </div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with DexScanner */}
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
              <a
                href="https://dexscreener.com/DeepYield"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors text-sm font-medium"
              >
                DexScreener
              </a>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 DeepYield. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

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
    </div>
  );
};

export default Index;
