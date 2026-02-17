import { CheckCircle } from 'lucide-react';

const qualifications = [
  'Self-employed (sole trader or partnership)',
  'PAYE employees with other income (rental, freelance)',
  'Rental income from one or more properties',
  'Investment or dividend income',
  'Previously filed returns needing updates',
];

interface QualificationProps {
  onFormOpen: () => void;
}

export function Qualification({ onFormOpen }: QualificationProps) {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Is This for You?
          </h2>
          <p className="text-lg text-foreground mb-8">
            We work with anyone who needs a professional tax return filed. You're a good fit if:
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {qualifications.map((qualification) => (
            <div
              key={qualification}
              className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border hover:shadow-sm transition-shadow"
            >
              <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-lg">{qualification}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onFormOpen}
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Start my tax return
          </button>
          <p className="text-sm text-muted-foreground mt-4">
            Unsure? Email us at info@hart-and-co.com and we'll advise.
          </p>
        </div>
      </div>
    </section>
  );
}
