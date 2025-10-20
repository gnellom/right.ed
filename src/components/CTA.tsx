import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <div className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-4xl md:text-5xl">
            Ready to Understand Maryland Law?
          </h2>
          <p className="mb-8 text-xl opacity-90">
            Join over 1,000 Marylanders who trust right.ed for accessible legal information. 
            Start using it free today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2 px-8 py-6" asChild>
              <a href="app.html">
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75">
            No credit card required • Free forever • Setup in 30 seconds
          </p>
        </div>
      </div>
    </div>
  );
}
