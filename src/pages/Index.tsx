import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Stats } from "@/components/Stats";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Bot, Rocket, DollarSign, Search } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { TokenAnalyzer } from "@/components/TokenAnalyzer";

const Index = () => {
  const [showAIChat, setShowAIChat] = useState(false);
  const [showAnalyzer, setShowAnalyzer] = useState(false);
  const contractAddress = "8FsPsBqmpeJxQJTeTwZ8WAdrKEQum2X2VWwSu1RLpump";

  const copyCA = () => {
    navigator.clipboard.writeText(contractAddress);
    toast.success("Contract address copied!");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Animated Icons */}
      <section className="hero-gradient pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center gap-4 mb-6">
              <Rocket className="w-8 h-8 text-white animate-bounce" />
              <Bot className="w-8 h-8 text-white animate-pulse" />
              <DollarSign className="w-8 h-8 text-white animate-bounce" />
            </div>
            <h1 className="text-4xl font-bold text-white sm:text-6xl">
              Maximize Your Yield with AI-Powered DeFi Strategies
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
              Experience the future of decentralized finance with our advanced AI algorithms
              optimizing your yields across multiple chains.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Earning Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                onClick={() => setShowAnalyzer(true)}
              >
                <Search className="mr-2 h-4 w-4" />
                Analyze Token
              </Button>
            </div>
            <div className="mt-6 flex flex-col items-center justify-center gap-3">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl px-6 py-4 text-white/90 w-fit mx-auto border border-white/20 hover:border-primary/50 transition-all duration-300 group cursor-pointer" onClick={copyCA}>
                <div className="text-xs uppercase tracking-wider mb-1 text-white/70">Contract Address</div>
                <div className="flex items-center gap-3">
                  <span className="text-lg font-mono">{contractAddress}</span>
                  <Button variant="ghost" size="icon" className="text-white/70 group-hover:text-primary transition-colors">
                    <Search className="h-5 w-5" />
                  </Button>
                </div>
                <div className="text-xs text-white/50 mt-1">Click to copy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <Features />

      {/* AI Assistant Bubble */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setShowAIChat(!showAIChat)}
          className="rounded-full w-16 h-16 shadow-lg"
        >
          <Bot className="h-8 w-8 animate-pulse" />
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

      {/* Token Analyzer Modal */}
      <TokenAnalyzer open={showAnalyzer} onClose={() => setShowAnalyzer(false)} />

      <Footer />
    </div>
  );
};

export default Index;
