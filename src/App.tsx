/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { GrantChecker } from './components/GrantChecker';
import { Pricing } from './components/Pricing';
import { Corporate } from './components/Corporate';
import { Footer } from './components/Footer';
import { DisqusComments } from './components/DisqusComments';

export default function App() {
  const [activeView, setActiveView] = useState('home');

  // Simple scroll-to logic since we are building a one-page flow with sections
  useEffect(() => {
    if (activeView === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(activeView);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [activeView]);

  return (
    <div className="min-h-screen flex flex-col font-body">
      <Navbar activeView={activeView} setActiveView={setActiveView} />
      
      <main className="flex-grow">
        <Hero onCtaClick={() => setActiveView('grants')} />
        <Features />
        
        <div className="relative">
          <div className="absolute inset-0 bg-surface-warm skew-y-[-2deg] transform-origin-top-left -z-10" />
          <GrantChecker />
        </div>
        
        <Pricing />
        <Corporate />
        
        <DisqusComments />
      </main>

      <Footer />
    </div>
  );
}
