import { motion } from 'motion/react';
import { Home, FileText, Users, HandHeart } from 'lucide-react';

const features = [
  {
    icon: <Home className="w-8 h-8 text-secondary" />,
    title: "One-Stop Ageing-in-Place",
    description: "Integrating professional hazard audits, barrier-free structural mods, and ambient monitoring into one stress-free experience."
  },
  {
    icon: <FileText className="w-8 h-8 text-secondary" />,
    title: "Frictionless Subsidies",
    description: "We handle the end-to-end administration for local grants like HDB EASE and AIC's SMF so you don't face complex paperwork."
  },
  {
    icon: <Users className="w-8 h-8 text-secondary" />,
    title: "Culturally Sensitive Care",
    description: "Our assessors are multilingual and understand the emotional nuances and spatial realities of multi-generational HDB living."
  },
  {
    icon: <HandHeart className="w-8 h-8 text-secondary" />,
    title: "Continuous Support",
    description: "Complimentary 6-month post-installation physical audits ensure modifications remain sturdy and effective over time."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Comprehensive Care for Independent Living
          </h2>
          <p className="text-xl text-text-muted">
            We bridge the gap between physical safety and digital peace of mind, designed specifically for the Singaporean home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-surface-dim/40 hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
              <p className="text-text-muted text-lg leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
