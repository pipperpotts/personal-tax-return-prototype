'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { TrustSection } from '@/components/trust-section';
import { Qualification } from '@/components/qualification';
import { Process } from '@/components/process';
import { Pricing } from '@/components/pricing';
import { Guarantee } from '@/components/guarantee';
import { SocialProof } from '@/components/social-proof';
import { FAQ } from '@/components/faq';
import { FinalCTA } from '@/components/final-cta';
import { Footer } from '@/components/footer';
import { IntakeForm } from '@/components/intake-form';

export default function Home() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="bg-background">
      <Header onFormOpen={() => setFormOpen(true)} />
      <Hero onFormOpen={() => setFormOpen(true)} />
      <Features />
      <TrustSection />
      <Qualification onFormOpen={() => setFormOpen(true)} />
      <Process />
      <Pricing onFormOpen={() => setFormOpen(true)} />
      <Guarantee />
      <SocialProof />
      <FAQ />
      <FinalCTA onFormOpen={() => setFormOpen(true)} />
      <Footer />
      <IntakeForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  );
}
