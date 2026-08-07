import { useEffect, useState } from 'react';

export function DisqusComments() {
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    // 1. Configure disqus_config globally
    (window as any).disqus_config = function (this: any) {
      const cleanUrl = window.location.href.split('#')[0].split('?')[0];
      this.page.url = cleanUrl;
      this.page.identifier = window.location.pathname || '/';
    };

    // 2. Add embed script for https-sg-home-care-vercel-app
    const d = document;
    const existingEmbed = d.getElementById('dsq-embed-scr');
    
    if (!existingEmbed) {
      const s = d.createElement('script');
      s.src = 'https://https-sg-home-care-vercel-app.disqus.com/embed.js';
      s.id = 'dsq-embed-scr';
      s.setAttribute('data-timestamp', (+new Date()).toString());
      s.onerror = () => {
        setLoadError('Failed to load Disqus. Please check if an ad-blocker is blocking Disqus scripts, or verify that your Disqus site shortname matches "https-sg-home-care-vercel-app".');
      };
      (d.head || d.body).appendChild(s);
    } else if ((window as any).DISQUS) {
      try {
        (window as any).DISQUS.reset({
          reload: true,
          config: function (this: any) {
            const cleanUrl = window.location.href.split('#')[0].split('?')[0];
            this.page.url = cleanUrl;
            this.page.identifier = window.location.pathname || '/';
          },
        });
      } catch (e) {
        console.error('Disqus reset error:', e);
      }
    }

    // 3. Add count script for https-sg-home-care-vercel-app
    const existingCount = d.getElementById('dsq-count-scr');
    if (!existingCount) {
      const countScript = d.createElement('script');
      countScript.src = '//https-sg-home-care-vercel-app.disqus.com/count.js';
      countScript.id = 'dsq-count-scr';
      countScript.async = true;
      (d.head || d.body).appendChild(countScript);
    }
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      {loadError && (
        <div className="p-4 mb-4 bg-amber-50 border border-amber-200 text-amber-900 rounded-lg text-sm">
          {loadError}
        </div>
      )}
      <div id="disqus_thread" className="min-h-[250px]"></div>
      <noscript>
        Please enable JavaScript to view the{' '}
        <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
      </noscript>
    </div>
  );
}




