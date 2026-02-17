import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onFormOpen: () => void;
}

export function Hero({ onFormOpen }: HeroProps) {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Your tax return, sorted.
            </h1>
            
            <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-lg">
              Professional, fixed-price tax returns for UK self-employed professionals. No surprises, no delays.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onFormOpen}
                className="flex items-center justify-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Start my tax return
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-sm text-muted-foreground self-center">
                From £249 • Fixed price • Quick turnaround
              </p>
            </div>
          </div>

          {/* Right: Placeholder Image */}
          <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-muted to-border overflow-hidden flex items-center justify-center">
            <div className="text-center">
              <div className="w-48 h-48 bg-background rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                <span className="text-6xl">👩‍💼</span>
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                Professional headshot placeholder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
