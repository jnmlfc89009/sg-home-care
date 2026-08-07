import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, HeartPulse, Home } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export function Hero({ onCtaClick }: HeroProps) {
  return (
    <div className="relative bg-surface-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-block px-3 py-1 bg-secondary/10 text-accent text-[10px] font-bold uppercase tracking-wider rounded-md mb-4">
              Trusted Elderly Care Singapore
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1] tracking-tight">
              A Safer Home for the Ones You Love
            </h1>
            <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-body">
              The complete ageing-in-place ecosystem for Singapore. We integrate hazard audits, HDB physical modifications, and 24/7 AI smart monitoring.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={onCtaClick}
                className="flex items-center justify-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent transition-all shadow-md hover:shadow-lg min-h-[56px] w-full sm:w-auto"
              >
                Check Subsidy Eligibility
                <ArrowRight size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-surface-dim/40">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <ShieldCheck size={28} />
                </div>
                <span className="font-semibold text-text">HDB EASE & AIC Approved</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                  <HeartPulse size={28} />
                </div>
                <span className="font-semibold text-text">24/7 AI Fall Monitoring</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg text-accent">
                  <Home size={28} />
                </div>
                <span className="font-semibold text-text">Certified OT Audits</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="absolute inset-0 bg-secondary/20 rounded-[2rem] transform rotate-3 scale-105" />
            <img 
              src="/sampleimage.png" 
              alt="Elderly couple at home in Singapore" 
              className="relative rounded-[2rem] shadow-2xl object-cover h-[500px] w-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
