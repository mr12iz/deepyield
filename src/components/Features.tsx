import { Shield, ChartBar, Award, Users } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "AI Yield Optimizer",
      description: "Smart algorithms find the best yield farming opportunities across chains",
      icon: ChartBar,
    },
    {
      title: "Risk Shield Technology",
      description: "Advanced risk management powered by AI to protect your assets",
      icon: Shield,
    },
    {
      title: "Premium Staking Tiers",
      description: "Unlock exclusive benefits with our tiered staking system",
      icon: Award,
    },
    {
      title: "Community Governance",
      description: "Shape the future of DeepYield through DAO voting",
      icon: Users,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Powered by Advanced AI
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Experience the next generation of DeFi yield optimization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <feature.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}