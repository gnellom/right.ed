import { Scale, Users, Target, Heart, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

export function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Scale className="w-6 h-6 text-blue-600" />
              <span className="text-xl tracking-tight">right.ed</span>
            </div>
            <Button variant="ghost" asChild>
              <a href="/" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-5xl md:text-6xl tracking-tight">
              About <span className="text-blue-600">right.ed</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Making Maryland law accessible and understandable for everyone
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div>
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="mb-4 text-3xl">Our Mission</h2>
                <p className="text-muted-foreground text-lg">
                  We believe that everyone should have easy access to legal information. 
                  right.ed was created to demystify Maryland law and empower everyday people 
                  to understand their rights and responsibilities.
                </p>
              </div>
              
              <div>
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h2 className="mb-4 text-3xl">Our Values</h2>
                <p className="text-muted-foreground text-lg">
                  We're committed to accuracy, accessibility, and transparency. Every answer 
                  includes source citations, and our AI technology is designed to make complex 
                  legal language clear and understandable.
                </p>
              </div>
            </div>

            {/* Story Section */}
            <div className="mb-20">
              <h2 className="mb-6 text-3xl text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  right.ed was born from a simple observation: legal information shouldn't be 
                  locked behind expensive databases or complex jargon. Too many Marylanders 
                  struggle to find clear answers to basic legal questions.
                </p>
                <p className="mb-4">
                  Using cutting-edge Retrieval-Augmented Generation (RAG) technology, we've built 
                  a tool that makes Maryland statutes and case law searchable in plain language. 
                  Ask a question naturally, and get accurate, cited answers in seconds.
                </p>
                <p>
                  Today, over 1,000 Marylanders trust right.ed to help them understand the law. 
                  And we're just getting started. Our commitment is to keep right.ed free, 
                  accurate, and accessible to everyone who needs it.
                </p>
              </div>
            </div>

            {/* Community Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-12 text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="mb-4 text-3xl">Join Our Community</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Over 1,000 Marylanders already use right.ed to understand their legal questions. 
                Start exploring Maryland law for free today.
              </p>
              <Button size="lg" asChild>
                <a href="app.html">Get Started Free</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Scale className="w-6 h-6 text-blue-600" />
              <span className="text-xl tracking-tight">right.ed</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <a href="about.html" className="hover:text-foreground transition-colors">About</a>
              <a href="#" className="hover:text-foreground transition-colors">Documentation</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2025 right.ed. All rights reserved.
            </p>
          </div>
          
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>
              right.ed is an AI-powered legal research tool. All information should be independently verified. 
              Not a substitute for professional legal advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
