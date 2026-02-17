import { Shield, Clock, AlertCircle, CheckCircle } from 'lucide-react';

const guarantees = [
  {
    icon: Shield,
    title: 'Professional Indemnity',
    description: 'Fully insured against professional errors.',
  },
  {
    icon: Clock,
    title: '3–5 Day Turnaround',
    description: 'Your return completed quickly, without rushing quality.',
  },
  {
    icon: AlertCircle,
    title: 'Zero Surprises',
    description: 'Fixed price means no hidden costs or last-minute fees.',
  },
  {
    icon: CheckCircle,
    title: 'HMRC-Compliant',
    description: 'Every return meets the highest standards and requirements.',
  },
];

export function Guarantee() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Why You Can Trust Us
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Four reasons our clients rely on Hart & Co.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guarantees.map((guarantee) => {
            const Icon = guarantee.icon;
            return (
              <div
                key={guarantee.title}
                className="p-8 bg-muted rounded-xl border border-border hover:shadow-md transition-shadow"
              >
                <Icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {guarantee.title}
                </h3>
                <p className="text-foreground text-sm leading-relaxed">
                  {guarantee.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
