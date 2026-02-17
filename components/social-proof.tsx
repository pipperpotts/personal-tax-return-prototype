import { Star } from 'lucide-react';

const stats = [
  {
    number: '500+',
    label: 'Returns Filed',
  },
  {
    number: '4.9★',
    label: 'Average Rating',
  },
  {
    number: '£2.3M+',
    label: 'Tax Saved for Clients',
  },
  {
    number: '98%',
    label: 'Recommended',
  },
];

const testimonials = [
  {
    quote:
      'Amelia made my tax return process stress-free. No jargon, just clear communication and a professional result.',
    author: 'James M.',
    role: 'Freelance Designer',
  },
  {
    quote:
      'Fixed pricing meant no surprises. The return came back promptly and was fully compliant. Highly recommended.',
    author: 'Sarah P.',
    role: 'Rental Property Owner',
  },
  {
    quote:
      'The tax planning advice alone paid for the service. Best decision for my self-employed business.',
    author: 'David L.',
    role: 'Consultant',
  },
];

export function SocialProof() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <p className="text-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-sm text-muted-foreground">
            Sample testimonials shown for prototype purposes
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="p-8 bg-background rounded-xl border border-border hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-primary">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
