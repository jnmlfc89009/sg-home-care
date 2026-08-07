import { DiscussionEmbed } from 'disqus-react';

export function DisqusComments() {
  const shortname = (import.meta as any).env?.VITE_DISQUS_SHORTNAME || 'https-sg-home-care-vercel-app';

  const pageUrl =
    typeof window !== 'undefined'
      ? (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
          ? 'https://sg-home-care.vercel.app'
          : window.location.href.split('#')[0].split('?')[0])
      : 'https://sg-home-care.vercel.app';

  const pageIdentifier = typeof window !== 'undefined' ? window.location.pathname || 'home' : 'home';

  return (
    <section id="contact" className="py-16 bg-surface-warm border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 mb-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-slate-100">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Have questions about our home hazard assessments, HDB EASE grants, or AI fall monitoring subscriptions?
              </p>
              <div className="space-y-3 text-slate-800 font-semibold">
                <p className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm">📞</span>
                  800-AGE-SAFE (800-243-7233)
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm">✉️</span>
                  hello@sghomecare.sg
                </p>
              </div>
            </div>

            <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-100 text-emerald-900 text-sm">
              <h3 className="font-bold text-base mb-2 text-emerald-950">Approved Frameworks & Subsidies</h3>
              <p className="leading-relaxed mb-4">
                We work directly with Agency for Integrated Care (AIC) and Housing & Development Board (HDB) EASE programs to process grant paperwork for eligible seniors.
              </p>
              <span className="inline-block bg-white px-3 py-1.5 rounded-full text-xs font-bold text-emerald-700 border border-emerald-200">
                Singapore Citizen Subsidies Up to 95%
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Community Discussion & Q&A</h3>
            <p className="text-slate-600 text-sm mb-6">
              Join the conversation below. Ask questions about elder care solutions or leave feedback.
            </p>

            <div className="min-h-[300px]">
              <DiscussionEmbed
                shortname={shortname}
                config={{
                  url: pageUrl,
                  identifier: pageIdentifier,
                  title: "SG Home Care Community",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}







