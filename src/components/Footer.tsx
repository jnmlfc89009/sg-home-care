import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-white p-1.5 rounded-lg inline-block">
            <Logo />
          </div>
          <span className="text-slate-400 text-sm">© 2026 SGHomeCare Pte Ltd. All rights reserved.</span>
        </div>
        <div className="flex gap-6 text-sm text-slate-400">
          <a href="#" className="hover:text-white transition-colors">PDPA Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

