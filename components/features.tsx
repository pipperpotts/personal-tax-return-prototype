import { CheckCircle, Clock, FileText, TrendingUp, Shield, Phone } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: 'Fixed Price',
    description: 'No hidden fees. £249 covers everything.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Return completed within 3–5 working days.',
  },
  {
    icon: FileText,
    title: 'HMRC Compliant',
    description: 'Every return meets HM Revenue & Customs standards.',
  },
  {
    icon: TrendingUp,
    title: 'Tax Planning',
    description: 'Recommendations to reduce your tax liability.',
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Professional indemnity insurance included.',
  },
  {
    icon: Phone,
    title: 'Direct Support',
    description: 'Email or phone support throughout the process.',
  },
];

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">
            What You Get
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            No jargon. No rushing. No guesswork.
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <Icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
