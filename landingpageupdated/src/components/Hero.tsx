import { Button } from "./ui/button";
import { Scale, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 -z-10" />
      
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Scale className="w-8 h-8 text-blue-600" />
            <span className="text-3xl tracking-tight">right.ed</span>
          </div>
          
          {/* Headline */}
          <h1 className="mb-6 text-5xl md:text-6xl tracking-tight">
            Maryland Legal Knowledge,
            <br />
            <span className="text-blue-600">AI-Powered</span>
          </h1>
          
          {/* Subheadline */}
          <p className="mb-8 max-w-2xl mx-auto text-xl text-muted-foreground">
            Access Maryland statutes and case law instantly with our novel RAG technology. 
            Free, comprehensive, and trusted by over 1,000 Marylanders.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gap-2 px-8 py-6" asChild>
              <a href="/app.html">
                Start Researching Free
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Free Forever</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>1,000+ Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Maryland-Specific</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
}
