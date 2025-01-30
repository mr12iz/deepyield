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
  const contractAddress = "0x1234...5678";

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
            <div className="mt-4 flex items-center justify-center gap-2 bg-white/10 rounded-lg px-4 py-2 text-white/90 w-fit mx-auto">
              <span className="text-sm">CA: {contractAddress}</span>
              <Button variant="ghost" size="icon" onClick={copyCA} className="text-white hover:text-primary">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <Features />

      {/* Tokenomics Section with Black Text */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black">Tokenomics</h2>
            <p className="mt-4 text-lg text-black">$DEEP Token Distribution</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Liquidity & Staking", percentage: 30, color: "primary" },
              { label: "Team & Advisors", percentage: 20, color: "secondary" },
              { label: "Community & Airdrop", percentage: 15, color: "primary" },
              { label: "Treasury", percentage: 35, color: "secondary" }
            ].map((item, index) => (
              <div key={index} className="relative group animate-pulse hover:animate-none">
                <div className={`aspect-square rounded-full bg-gradient-to-br from-${item.color} to-${item.color}/20 hover:from-${item.color}/80 hover:to-${item.color}/40 transition-all duration-500 transform group-hover:scale-105 flex items-center justify-center p-8`}>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-black">{item.percentage}%</div>
                    <div className="text-sm text-black mt-2">{item.label}</div>
                  </div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

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