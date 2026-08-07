import { Building2, Activity, Network } from 'lucide-react';
import { motion } from 'motion/react';

export function Corporate() {
  return (
    <section id="corporate" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              B2B Institutional Partnerships
            </h2>
            <p className="text-xl text-primary-100 leading-relaxed">
              Extend your community care footprint with our enterprise-grade Hardware-enabled Service (HeaS) platform. We provide volume-based safety verifications and real-time community monitoring.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex gap-4">
                <div className="bg-white/10 p-3 rounded-lg h-fit">
                  <Activity className="w-6 h-6 text-secondary-light" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">AAC-as-a-Service</h3>
                  <p className="text-primary-100">Tiered SaaS dashboard licenses for Active Ageing Centres (AACs) to monitor the safety risk profiles of up to 500 neighborhood seniors utilizing our devices.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white/10 p-3 rounded-lg h-fit">
                  <Building2 className="w-6 h-6 text-secondary-light" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Developer & Insurance APIs</h3>
                  <p className="text-primary-100">Retainer frameworks for private developers to pre-fit active-ageing luxury condos, alongside risk-reduction referral bounties for silver-generation health insurers.</p>
                </div>
              </div>
            </div>

            <button className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-surface-dim transition-colors min-h-[56px] shadow-sm">
              Schedule Partnership Demo
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-secondary/30 rounded-3xl transform -rotate-3" />
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl text-primary">
              <div className="flex items-center gap-3 mb-6">
                <Network className="w-8 h-8 text-secondary" />
                <h4 className="text-2xl font-bold">Community Dashboard Demo</h4>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-surface-warm rounded-xl border border-surface-dim/30">
                    <div>
                      <p className="font-bold">Block 20{i} Resident Cluster</p>
                      <p className="text-sm text-text-muted">12 Active Nodes • 0 Alerts Today</p>
                    </div>
                    <div className="h-3 w-3 bg-secondary rounded-full shadow-[0_0_8px_rgba(78,135,82,0.6)]" />
                  </div>
                ))}
                <div className="flex items-center justify-between p-4 bg-accent/5 rounded-xl border border-accent/20">
                  <div>
                    <p className="font-bold text-accent">Block 198 Resident Cluster</p>
                    <p className="text-sm text-accent/80">Anomaly Detected • Unit #04-12</p>
                  </div>
                  <div className="h-3 w-3 bg-accent rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
