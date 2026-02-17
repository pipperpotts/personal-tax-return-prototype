import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onFormOpen: () => void;
}

export function FinalCTA({ onFormOpen }: FinalCTAProps) {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to get your tax return done?
        </h2>
        <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
          Start now. Fixed price, fast turnaround, fully compliant. No surprises.
        </p>

        <button
          onClick={onFormOpen}
          className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Start my tax return
          <ArrowRight className="w-5 h-5" />
        </button>

        <p className="text-sm mt-6 opacity-80">
          From £249 • 3–5 day turnaround • HMRC-compliant
        </p>
      </div>
    </section>
  );
}
