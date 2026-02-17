'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Do you handle all types of self-employment income?',
    answer:
      'Yes. We work with sole traders, partnerships, contractors, and freelancers across all industries. We also handle additional income like rentals or dividends.',
  },
  {
    question: 'How long does a return take?',
    answer:
      'Standard returns are completed within 3–5 working days. Urgent requests can be accommodated; contact us directly.',
  },
  {
    question: 'What if I have rental income?',
    answer:
      'We handle rental income returns as part of the standard £249 service. If you require rental schedules or have multiple properties, those are available as add-ons, priced separately.',
  },
  {
    question: 'Is there a warranty or guarantee?',
    answer:
      'Yes. We carry professional indemnity insurance and guarantee HMRC compliance. If any issues arise, we address them immediately at no extra cost.',
  },
  {
    question: 'Can you amend previous years\' returns?',
    answer:
      'Yes, amendments and prior-year filings are available as add-on services. Email us for a quote based on the number of years and complexity.',
  },
  {
    question: 'What documents do I need to provide?',
    answer:
      'We provide a checklist during intake, but generally: bank statements, invoices, expense records, any employment or rental summaries, and personal tax code details.',
  },
  {
    question: 'Will I receive a copy of my filed return?',
    answer:
      'Absolutely. Once filed with HMRC, you\'ll receive a signed copy for your records. You\'ll also have online access to download it anytime.',
  },
  {
    question: 'What if I have questions after filing?',
    answer:
      'One follow-up consultation is included with every return. For ongoing support, we offer quarterly tax planning packages.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground">
            Everything you need to know about our service.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <button
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left p-6 bg-muted rounded-xl border border-border hover:bg-muted/70 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-primary flex-1 text-balance">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </div>

              {openIndex === index && (
                <p className="text-foreground text-sm leading-relaxed mt-4">
                  {faq.answer}
                </p>
              )}
            </button>
          ))}
        </div>

        {/* Objection Handling Block */}
        <div className="mt-16 p-8 bg-primary/5 rounded-xl border border-primary/10">
          <h3 className="font-semibold text-primary mb-4">Still have questions?</h3>
          <p className="text-foreground mb-6">
            We're here to help. Email us at{' '}
            <a href="mailto:info@hart-and-co.com" className="font-medium text-accent hover:underline">
              info@hart-and-co.com
            </a>{' '}
            or call us directly. Our team responds within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
