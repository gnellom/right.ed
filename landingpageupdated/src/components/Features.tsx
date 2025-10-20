import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Brain, Database, FileSearch, Shield, Sparkles, Clock } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Brain,
      title: "Novel RAG Technology",
      description: "Advanced Retrieval-Augmented Generation that understands legal context and delivers precise answers from Maryland law."
    },
    {
      icon: Database,
      title: "Complete Legal Catalogue",
      description: "Comprehensive database of Maryland statutes and case law, continuously updated to keep you current."
    },
    {
      icon: FileSearch,
      title: "Intelligent Search",
      description: "Natural language queries that understand legal terminology and return relevant precedents and statutes instantly."
    },
    {
      icon: Shield,
      title: "Trusted & Accurate",
      description: "Built with precision and reliability for everyone. Every answer includes source citations so you can verify information."
    },
    {
      icon: Sparkles,
      title: "AI-Assisted Research",
      description: "Get summaries, find connections between cases, and discover insights that traditional search would miss."
    },
    {
      icon: Clock,
      title: "Save Hours of Research",
      description: "What used to take hours now takes seconds. Get the legal information you need quickly and easily."
    }
  ];
  
  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl">
            Why Marylanders Choose right.ed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Purpose-built for everyday people to understand Maryland law with cutting-edge AI technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
