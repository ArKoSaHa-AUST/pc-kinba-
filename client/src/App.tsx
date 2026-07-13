import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBrands from './components/TrustedBrands';
import Features from './components/Features';
import InteractiveAI from './components/InteractiveAI';
import PCBuilderShowcase from './components/PCBuilderShowcase';
import Comparison from './components/Comparison';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="mouse-glow"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      ></div>

      <Navbar />

      <main>
        <Hero />
        <TrustedBrands />
        <Features />
        <InteractiveAI />
        <PCBuilderShowcase />
        <Comparison />
        <Statistics />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </>
  );
}

export default App;
