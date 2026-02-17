import { Check } from 'lucide-react';

const included = [
  'Full tax return preparation and filing',
  'HMRC submission and processing',
  'Tax liability calculation',
  'Extended record review',
  'Estimated tax planning advice',
  'One follow-up phone consultation',
];

const addOns = [
  'Rental property schedules (Additional properties)',
  'Capital gains calculations',
  'Previous years\' amendments or filings',
  'Quarterly planning consultations',
];

interface PricingProps {
  onFormOpen: () => void;
}

export function Pricing({ onFormOpen }: PricingProps) {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Simple, Fixed Pricing
          </h2>
          <p className="text-lg text-foreground">
            One price. Everything included. No surprises.
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="bg-background rounded-2xl border border-border p-8 md:p-12 mb-12">
          <div className="text-center mb-12">
            <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
              £249
            </div>
            <p className="text-foreground text-lg">
              Complete tax return filing
            </p>
          </div>

          {/* Included Items */}
          <div className="mb-8">
            <h3 className="font-semibold text-primary text-lg mb-6">
              What's Included
            </h3>
            <div className="space-y-4">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={onFormOpen}
            className="w-full py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started
          </button>
        </div>

        {/* Add-Ons Section */}
        <div className="bg-background rounded-xl border border-border p-8">
          <h3 className="font-semibold text-primary text-lg mb-6">
            Add-Ons Available
          </h3>
          <p className="text-foreground text-sm mb-6">
            Need additional services? We offer tailored add-ons, quoted upfront:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addOns.map((addOn) => (
              <div key={addOn} className="flex items-start gap-3 pb-4 border-b border-border last:border-b-0">
                <span className="text-accent font-semibold">+</span>
                <span className="text-foreground text-sm">{addOn}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Contact us for pricing on add-ons tailored to your situation.
          </p>
        </div>
      </div>
    </section>
  );
}
