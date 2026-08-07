import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, ChevronRight, ArrowLeft } from 'lucide-react';

type Step = 'start' | 'housing' | 'age' | 'mobility' | 'result';

export function GrantChecker() {
  const [step, setStep] = useState<Step>('start');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswer = (key: string, value: string, nextStep: Step) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    setStep(nextStep);
  };

  const getResult = () => {
    const isHDB = answers.housing === 'hdb';
    const isSenior = answers.age === '65+';
    const needsHelp = answers.mobility !== 'none';

    if (isHDB && (isSenior || needsHelp)) {
      return {
        title: "High Probability for HDB EASE & AIC Subsidies",
        description: "Based on your profile, you likely qualify for up to 95% subsidy on home modifications like grab bars and ramps, plus potential support for smart monitoring.",
        type: 'success'
      };
    } else if (!isHDB && isSenior) {
      return {
        title: "Qualifies for AIC Smart Grants",
        description: "While private housing doesn't qualify for HDB EASE, your age profile makes you eligible for Senior's Mobility Fund (SMF) for assistive tech.",
        type: 'partial'
      };
    }
    return {
      title: "Standard Care Assessment Recommended",
      description: "While you may not qualify for major structural grants, our team can help identify affordable, high-impact safety improvements for your home.",
      type: 'neutral'
    };
  };

  const renderStep = () => {
    switch (step) {
      case 'start':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-primary text-center">Check Government Subsidy Eligibility</h3>
            <p className="text-lg text-text-muted text-center max-w-xl mx-auto">
              Find out if your loved one qualifies for HDB EASE, AIC SMF, or CareShield Life subsidies in under 60 seconds.
            </p>
            <div className="pt-6 flex justify-center">
              <button 
                onClick={() => setStep('housing')}
                className="bg-secondary text-white px-8 py-4 rounded-full shadow-md font-bold text-lg hover:bg-accent transition-colors min-h-[56px] flex items-center gap-2"
              >
                Start Assessment <ChevronRight />
              </button>
            </div>
          </motion.div>
        );
      case 'housing':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">What is the senior's housing type?</h3>
            <div className="grid gap-4 max-w-md mx-auto">
              {['HDB Flat', 'Private Condo', 'Landed Property'].map(type => (
                <button
                  key={type}
                  onClick={() => handleAnswer('housing', type.toLowerCase().includes('hdb') ? 'hdb' : 'private', 'age')}
                  className="w-full text-left p-6 rounded-xl border-2 border-surface-dim hover:border-secondary hover:bg-secondary/5 transition-all text-xl font-semibold text-primary min-h-[72px]"
                >
                  {type}
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 'age':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
            <button onClick={() => setStep('housing')} className="flex items-center text-text-muted hover:text-primary mb-4"><ArrowLeft className="w-5 h-5 mr-1"/> Back</button>
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">What is the senior's age?</h3>
            <div className="grid gap-4 max-w-md mx-auto">
              {['Under 60', '60 to 64', '65 and above'].map(age => (
                <button
                  key={age}
                  onClick={() => handleAnswer('age', age.includes('65') ? '65+' : '<65', 'mobility')}
                  className="w-full text-left p-6 rounded-xl border-2 border-surface-dim hover:border-secondary hover:bg-secondary/5 transition-all text-xl font-semibold text-primary min-h-[72px]"
                >
                  {age}
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 'mobility':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
            <button onClick={() => setStep('age')} className="flex items-center text-text-muted hover:text-primary mb-4"><ArrowLeft className="w-5 h-5 mr-1"/> Back</button>
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Any current mobility assistance needed?</h3>
            <div className="grid gap-4 max-w-md mx-auto">
              {[
                { label: 'Independent (No aids)', val: 'none' },
                { label: 'Uses walking cane / frame', val: 'cane' },
                { label: 'Wheelchair user', val: 'wheelchair' }
              ].map(item => (
                <button
                  key={item.val}
                  onClick={() => handleAnswer('mobility', item.val, 'result')}
                  className="w-full text-left p-6 rounded-xl border-2 border-surface-dim hover:border-secondary hover:bg-secondary/5 transition-all text-xl font-semibold text-primary min-h-[72px]"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 'result':
        const res = getResult();
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8 max-w-2xl mx-auto">
            <div className={`p-8 rounded-2xl ${res.type === 'success' ? 'bg-secondary/10 border-2 border-secondary' : 'bg-surface border-2 border-surface-dim'}`}>
              <div className="flex items-center gap-4 mb-4">
                {res.type === 'success' ? <CheckCircle2 className="w-10 h-10 text-secondary" /> : <AlertCircle className="w-10 h-10 text-primary" />}
                <h3 className="text-2xl md:text-3xl font-bold text-primary">{res.title}</h3>
              </div>
              <p className="text-lg text-text-muted">{res.description}</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-surface-dim/40">
              <h4 className="text-xl font-bold text-primary mb-6">Book Your Comprehensive Home Audit</h4>
              <p className="text-text-muted mb-6">Our certified OT will conduct a physical inspection and handle the grant paperwork for you. (PDPA Compliant)</p>
              
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsSubmitting(true); setTimeout(() => alert('Lead captured securely!'), 1000); }}>
                <div>
                  <label className="block text-sm font-bold text-text mb-2">Your Name</label>
                  <input required type="text" className="w-full p-4 rounded-xl border border-surface-dim focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none text-lg transition-colors" placeholder="e.g. John Tan" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-text mb-2">Mobile Number</label>
                  <input required type="tel" className="w-full p-4 rounded-xl border border-surface-dim focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none text-lg transition-colors" placeholder="8xxx xxxx" />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent transition-colors min-h-[56px] mt-4 disabled:opacity-50 shadow-md"
                >
                  {isSubmitting ? 'Securing slot...' : 'Secure My Free Assessment Slot'}
                </button>
                <p className="text-xs text-text-muted text-center mt-4">By submitting, you agree to our PDPA Privacy Policy for healthcare data handling.</p>
              </form>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <section id="grants" className="py-24 bg-surface-warm min-h-[600px] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 border border-surface-dim/30">
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
