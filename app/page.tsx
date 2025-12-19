import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Pricing />
      <Contact />
      <Team />
      <Testimonials />
      <Features />
      <CTA />
      <About />
      <Footer />
    </main>
  );
}
