import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Tokenomics = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Tokenomics Section */}
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

      <Footer />
    </div>
  );
};

export default Tokenomics;