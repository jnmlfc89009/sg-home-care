/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState, useEffect } from 'react';
import { DiscussionEmbed } from 'disqus-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { GrantChecker } from './components/GrantChecker';
import { Pricing } from './components/Pricing';
import { Corporate } from './components/Corporate';
import { Footer } from './components/Footer';

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

  // Add Disqus comment count script globally as requested
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//sg-home-hub.disqus.com/count.js';
    script.id = 'dsq-count-scr';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById('dsq-count-scr');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

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
        
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 text-center">Community Discussion</h2>
            <DiscussionEmbed
              shortname="sg-home-hub"
              config={{
                url: window.location.href,
                identifier: 'home-page',
                title: 'SGHomeCare Home Page',
              }}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
