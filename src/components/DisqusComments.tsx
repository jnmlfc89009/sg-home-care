import { useEffect, useState } from 'react';

interface DisqusCommentsProps {
  shortname?: string;
  identifier?: string;
  url?: string;
  title?: string;
}

export function DisqusComments({
  shortname,
  identifier,
  url,
  title = 'SGHomeCare Community Discussion',
}: DisqusCommentsProps) {
  const disqusShortname =
    shortname ||
    (import.meta as any).env?.VITE_DISQUS_SHORTNAME ||
    'sg-home-hub';


  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const canonicalUrl =
      url ||
      window.location.origin + window.location.pathname;
    const pageIdentifier =
      identifier ||
      window.location.pathname ||
      'sghomecare-root';

    // 1. If DISQUS is already loaded globally, reset it for the new thread configuration
    if ((window as any).DISQUS) {
      try {
        (window as any).DISQUS.reset({
          reload: true,
          config: function (this: any) {
            this.page.identifier = pageIdentifier;
            this.page.url = canonicalUrl;
            this.page.title = title;
          },
        });
        setHasError(false);
      } catch (err) {
        console.error('Error resetting Disqus:', err);
        setHasError(true);
      }
      return;
    }

    // 2. Set global disqus_config for fresh initial script load
    (window as any).disqus_config = function (this: any) {
      this.page.url = canonicalUrl;
      this.page.identifier = pageIdentifier;
      this.page.title = title;
    };

    // 3. Inject embed script if not present
    const existingScript = document.getElementById('dsq-embed-scr');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = `https://${disqusShortname}.disqus.com/embed.js`;
      script.id = 'dsq-embed-scr';
      script.setAttribute('data-timestamp', new Date().getTime().toString());
      script.async = true;
      script.onerror = () => setHasError(true);
      (document.head || document.body).appendChild(script);
    }

    // 4. Inject count script if not present
    const existingCountScript = document.getElementById('dsq-count-scr');
    if (!existingCountScript) {
      const countScript = document.createElement('script');
      countScript.src = `https://${disqusShortname}.disqus.com/count.js`;
      countScript.id = 'dsq-count-scr';
      countScript.async = true;
      (document.head || document.body).appendChild(countScript);
    }
  }, [disqusShortname, identifier, url, title]);

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
        <div className="mb-6 pb-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Community Discussion</h3>
            <p className="text-sm text-slate-600 mt-1">
              Have questions about home safety assessments, grants, or elder care? Join the discussion below.
            </p>
          </div>
          <span className="text-xs font-semibold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
            Live Q&A
          </span>
        </div>

        {hasError ? (
          <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-sm">
            <p className="font-semibold text-base mb-1">Disqus Comments Unable to Load</p>
            <p>
              This may occur if an ad-blocker is blocking Disqus, or if the shortname (
              <code className="bg-amber-100 px-1 py-0.5 rounded font-mono text-xs">{disqusShortname}</code>
              ) is not yet registered or configured on Disqus.
            </p>
            <p className="mt-2 text-xs text-amber-800">
              Tip: Set <code className="font-mono font-bold">VITE_DISQUS_SHORTNAME</code> in your <code className="font-mono">.env</code> file to match your registered Disqus site shortname.
            </p>
          </div>
        ) : (
          <div id="disqus_thread" className="min-h-[200px]" />
        )}

        <noscript>
          Please enable JavaScript to view the{' '}
          <a href="https://disqus.com/?ref_noscript" className="text-emerald-600 underline">
            comments powered by Disqus.
          </a>
        </noscript>
      </div>
    </section>
  );
}

