import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { Logo } from './Logo';

interface NavbarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export function Navbar({ activeView, setActiveView }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'grants', label: 'Check Grants' },
    { id: 'pricing', label: 'Plans & Pricing' },
    { id: 'corporate', label: 'For Partners' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-secondary/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => setActiveView('home')}>
            <Logo />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={cn(
                  "text-lg font-semibold transition-colors min-h-[48px] px-2",
                  activeView === item.id 
                    ? "text-accent border-b-2 border-accent" 
                    : "text-text-muted hover:text-accent"
                )}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => setActiveView('grants')}
              className="bg-secondary text-white px-6 py-2.5 rounded-full shadow-sm font-bold text-lg hover:bg-accent transition-colors min-h-[48px]"
            >
              Get Started
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text p-2 rounded-md hover:bg-surface-dim/20 min-h-[48px] min-w-[48px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-b border-secondary/20"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveView(item.id);
                  setIsOpen(false);
                }}
                className={cn(
                  "block w-full text-left px-4 py-4 rounded-lg font-semibold text-lg min-h-[48px]",
                  activeView === item.id 
                    ? "bg-secondary/10 text-accent" 
                    : "text-text hover:bg-surface-dim/10"
                )}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => {
                setActiveView('grants');
                setIsOpen(false);
              }}
              className="w-full mt-4 bg-secondary text-white px-4 py-3 rounded-full shadow-sm font-bold text-lg hover:bg-accent min-h-[48px]"
            >
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
