import { ArrowUpRight, DollarSign, Users, LineChart } from "lucide-react";

export function Stats() {
  const stats = [
    {
      label: "Total Value Locked",
      value: "$1.2B",
      icon: DollarSign,
      change: "+12.5%",
    },
    {
      label: "Average APY",
      value: "15.8%",
      icon: LineChart,
      change: "+2.3%",
    },
    {
      label: "$DEEP Price",
      value: "$0.85",
      icon: ArrowUpRight,
      change: "+5.7%",
    },
    {
      label: "Active Users",
      value: "25.4K",
      icon: Users,
      change: "+8.1%",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
      {stats.map((stat) => (
        <div key={stat.label} className="stats-card">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">{stat.label}</span>
            <stat.icon className="h-5 w-5 text-primary" />
          </div>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="text-2xl font-semibold text-white">
              {stat.value}
            </span>
            <span className="text-sm text-green-400">{stat.change}</span>
          </div>
        </div>
      ))}
    </div>
  );
}