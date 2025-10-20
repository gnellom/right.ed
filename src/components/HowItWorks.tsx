import { Card, CardContent } from "./ui/card";
import { MessageSquare, Scan, CheckCircle } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Ask Your Question",
      description: "Type your legal query in plain English. No need for complex boolean searches or exact keywords."
    },
    {
      icon: Scan,
      title: "AI Searches Maryland Law",
      description: "Our RAG technology scans thousands of statutes and cases to find the most relevant information."
    },
    {
      icon: CheckCircle,
      title: "Get Cited Answers",
      description: "Receive clear answers with direct citations to statutes and case law for verification."
    }
  ];
  
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Legal research simplified in three steps
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-300 to-blue-100 z-0" />
                  )}
                  <Card className="relative z-10 border-2 bg-white">
                    <CardContent className="pt-6 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-4">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="text-sm text-blue-600 mb-2">Step {index + 1}</div>
                      <h3 className="mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
