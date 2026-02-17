'use client';

import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

interface IntakeFormProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormStep = 'form' | 'success';

interface FormData {
  firstName: string;
  email: string;
  incomeTypes: string[];
  notes: string;
}

export function IntakeForm({ isOpen, onClose }: IntakeFormProps) {
  const [step, setStep] = useState<FormStep>('form');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    email: '',
    incomeTypes: [],
    notes: '',
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      incomeTypes: prev.incomeTypes.includes(type)
        ? prev.incomeTypes.filter((t) => t !== type)
        : [...prev.incomeTypes, type],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate
    if (!formData.firstName || !formData.email || formData.incomeTypes.length === 0) {
      alert('Please fill in all required fields.');
      return;
    }

    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setStep('success');
      setLoading(false);
    }, 1000);
  };

  const handleClose = () => {
    setStep('form');
    setFormData({
      firstName: '',
      email: '',
      incomeTypes: [],
      notes: '',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-xl shadow-xl max-w-md w-full max-h-screen overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-primary">
            {step === 'form' ? 'Start Your Tax Return' : 'You\'re All Set!'}
          </h2>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-muted rounded transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="e.g., James"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Income Types */}
              <div>
                <label className="block text-sm font-medium text-primary mb-3">
                  What describes your income? * (select all that apply)
                </label>
                <div className="space-y-3">
                  {[
                    { id: 'self-employed', label: 'Self-employed (sole trader)' },
                    { id: 'paye', label: 'PAYE employment + other income' },
                    { id: 'rental', label: 'Rental income' },
                    { id: 'dividend', label: 'Dividend income' },
                  ].map((option) => (
                    <label
                      key={option.id}
                      className="flex items-center gap-3 cursor-pointer p-3 rounded-lg border border-border hover:bg-muted transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.incomeTypes.includes(option.id)}
                        onChange={() => handleCheckboxChange(option.id)}
                        className="w-4 h-4 accent-accent"
                      />
                      <span className="text-sm text-foreground">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-primary mb-2">
                  Anything else we should know?
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="e.g., Previous years' amendments needed..."
                  rows={3}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? 'Submitting...' : 'Get Started'}
                {!loading && <ArrowRight className="w-4 h-4" />}
              </button>

              {/* Disclaimer */}
              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to our privacy policy and terms of service.
              </p>
            </form>
          ) : (
            <div className="text-center py-8">
              {/* Success Icon */}
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-primary mb-2">Thank you, {formData.firstName}!</h3>
              <p className="text-foreground mb-6 leading-relaxed">
                We've received your information. Our team will review it and be in touch within 24 hours to confirm the next steps and provide a quote.
              </p>

              {/* Next Steps */}
              <div className="bg-muted rounded-lg p-4 mb-6 text-left">
                <p className="text-sm font-semibold text-primary mb-3">Next Steps:</p>
                <ul className="text-sm text-foreground space-y-2">
                  <li>✓ Check your email for confirmation</li>
                  <li>✓ Our team reviews your information</li>
                  <li>✓ We'll contact you within 24 hours</li>
                  <li>✓ Start your tax return immediately</li>
                </ul>
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="w-full py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
