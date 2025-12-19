'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-primary-500"></div>
      
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
          Your First Class Is Free
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 font-light mb-12 max-w-2xl mx-auto">
          No commitment. No pressure. Just pure energy, expert coaching, and a community ready to push you forward.
        </p>
        
        <Link 
          href="#pricing"
          className="inline-flex items-center gap-3 bg-white text-primary-500 px-10 py-5 text-lg font-semibold hover:bg-white/95 transition-all hover:scale-105 shadow-lg"
        >
          Claim Your Free Class
          <ArrowRight className="w-5 h-5" />
        </Link>
        
        <p className="text-white/70 text-sm mt-8 font-light">
          Join hundreds of Austinites transforming their fitness. Zero risk. All reward.
        </p>
      </div>
    </section>
  );
}