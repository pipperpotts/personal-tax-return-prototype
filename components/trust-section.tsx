import { Zap, Check, Clock } from 'lucide-react';

const trustPoints = [
  {
    icon: Zap,
    title: 'Fixed Price',
    description: '£249 includes everything. No surprises at the end.',
  },
  {
    icon: Check,
    title: 'HMRC-Compliant',
    description: 'Returns submitted to the highest professional standards.',
  },
  {
    icon: Clock,
    title: '3–5 Day Turnaround',
    description: 'Your return completed quickly without compromising quality.',
  },
];

export function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="p-8 bg-background border border-border rounded-xl text-center hover:shadow-md transition-shadow"
              >
                <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {point.title}
                </h3>
                <p className="text-foreground text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
