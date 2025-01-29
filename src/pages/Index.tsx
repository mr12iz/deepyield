import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Stats } from "@/components/Stats";
import { Features } from "@/components/Features";

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
    </div>
  );
};

export default Index;