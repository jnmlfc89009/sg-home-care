import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-primary text-white border-t border-primary-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="bg-white p-3 rounded-2xl inline-block mb-6 shadow-sm">
              <Logo />
            </div>
            <p className="text-primary-100 text-lg mb-6">
              The complete ageing-in-place ecosystem for Singapore. Making homes safer, smarter, and more comfortable.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-100 hover:text-white text-lg">Home Hazard Audits</a></li>
              <li><a href="#" className="text-primary-100 hover:text-white text-lg">Physical Modifications</a></li>
              <li><a href="#" className="text-primary-100 hover:text-white text-lg">AI Fall Monitoring</a></li>
              <li><a href="#" className="text-primary-100 hover:text-white text-lg">Grant Assistance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-100 hover:text-white text-lg">About Us</a></li>
              <li><a href="#" className="text-primary-100 hover:text-white text-lg">Corporate Partnerships</a></li>
              <li><a href="#" className="text-primary-100 hover:text-white text-lg">Careers</a></li>
              <li><a href="#" className="text-primary-100 hover:text-white text-lg">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="text-primary-100 text-lg">800-AGE-SAFE</li>
              <li className="text-primary-100 text-lg">hello@sghomecare.sg</li>
              <li className="text-primary-100 text-lg mt-4 font-semibold text-white">
                In Partnership with:<br/>
                AIC & HDB EASE Frameworks
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-100/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-100">© 2026 SGHomeCare Pte Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-primary-100 hover:text-white">PDPA Privacy Policy</a>
            <a href="#" className="text-primary-100 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
