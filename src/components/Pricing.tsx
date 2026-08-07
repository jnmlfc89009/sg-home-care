import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

const tiers = [
  {
    name: "SafeHome Basic",
    type: "Transaction-Led",
    price: "S$150",
    period: "one-time audit",
    description: "Ideal for mass-market HDB multi-generational families needing physical safety basics.",
    features: [
      "Professional OT Home Audit",
      "Custom safety blueprint",
      "35% off physical modifications",
      "Full HDB EASE / AIC grant admin"
    ],
    highlight: false,
    cta: "Book Audit"
  },
  {
    name: "SafeHome Smart",
    type: "Hybrid Subscription",
    price: "S$39",
    period: "per month",
    hardware: "+ S$600 upfront hardware",
    description: "For mid-to-high income families demanding active protection and peace of mind.",
    features: [
      "Everything in Basic",
      "AI Fall-Detection Radar installation",
      "Smart panic nodes across home",
      "24/7 automated family alerts",
      "Mobile app access for 5 family members"
    ],
    highlight: true,
    cta: "Subscribe Now"
  },
  {
    name: "SafeHome Premium",
    type: "Managed Care",
    price: "S$149",
    period: "per month",
    hardware: "+ S$600 upfront hardware",
    description: "Comprehensive safety net for solo-living seniors with higher cognitive or physical risks.",
    features: [
      "Everything in Smart",
      "24/7 concierge triage routing",
      "Direct private ambulance dispatch",
      "Bi-annual structural safety tune-ups",
      "Priority customer support line"
    ],
    highlight: false,
    cta: "Contact Sales"
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Transparent Pricing for Peace of Mind
          </h2>
          <p className="text-xl text-text-muted">
            From essential physical modifications to 24/7 AI-powered monitoring, choose the safety net that fits your family's needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative flex flex-col p-8 rounded-3xl border-2 transition-transform hover:-translate-y-1",
                tier.highlight 
                  ? "bg-white text-primary border-secondary shadow-xl z-10 md:scale-[1.03]" 
                  : "bg-surface-warm border-surface-dim hover:border-secondary/50 shadow-sm"
              )}
            >
              {tier.highlight && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-fit px-4 py-1.5 bg-accent text-white text-sm font-bold rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <p className={cn("text-sm font-bold uppercase tracking-wider mb-2", tier.highlight ? "text-accent" : "text-secondary")}>
                  {tier.type}
                </p>
                <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-lg text-text-muted">/{tier.period}</span>
                </div>
                {tier.hardware && (
                  <p className="text-sm font-semibold mb-4 text-text-muted">
                    {tier.hardware}
                  </p>
                )}
                <p className="text-lg text-text-muted">
                  {tier.description}
                </p>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {tier.features.map(feature => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 shrink-0 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Check className={cn("w-3 h-3", tier.highlight ? "text-secondary" : "text-secondary")} strokeWidth={3} />
                    </div>
                    <span className="text-lg leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={cn(
                "w-full py-4 px-6 rounded-xl font-bold text-lg transition-colors min-h-[56px] shadow-sm",
                tier.highlight 
                  ? "bg-secondary hover:bg-accent text-white" 
                  : "border border-secondary text-secondary hover:bg-surface"
              )}>
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
