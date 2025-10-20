import { Users, BookOpen, Search, Zap } from "lucide-react";

export function Stats() {
  const stats = [
    {
      icon: Users,
      value: "1,000+",
      label: "Active Users"
    },
    {
      icon: BookOpen,
      value: "100%",
      label: "Maryland Coverage"
    },
    {
      icon: Search,
      value: "10K+",
      label: "Searches Daily"
    },
    {
      icon: Zap,
      value: "<2s",
      label: "Avg Response Time"
    }
  ];
  
  return (
    <div className="border-y bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
