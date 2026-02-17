import { Upload, FileCheck, Send } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: Upload,
    title: 'Send Your Documents',
    description: 'Share your records via our secure form. Takes 5 minutes.',
  },
  {
    number: '2',
    icon: FileCheck,
    title: 'We Prepare Your Return',
    description: 'Our team reviews, prepares, and optimizes your tax return.',
  },
  {
    number: '3',
    icon: Send,
    title: 'We File with HMRC',
    description: 'Done in 3–5 days. You\'ll receive a signed copy.',
  },
];

export function Process() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            How It Works
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            A straightforward, three-step process from your documents to HMRC filing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                {/* Card */}
                <div className="p-8 bg-muted rounded-xl border border-border h-full">
                  <Icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Arrow (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-accent" />
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-3 border-t-transparent border-b-3 border-b-transparent border-l-3 border-l-accent" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
