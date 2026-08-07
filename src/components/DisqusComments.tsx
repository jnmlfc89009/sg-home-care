import { useEffect } from 'react';

export function DisqusComments() {
  useEffect(() => {
    // 1. Configure disqus_config globally
    (window as any).disqus_config = function (this: any) {
      this.page.url = window.location.href;
      this.page.identifier = window.location.pathname;
    };

    // 2. Add embed script for https-sg-home-care-vercel-app
    const d = document;
    const existingEmbed = d.getElementById('dsq-embed-scr');
    
    if (!existingEmbed) {
      const s = d.createElement('script');
      s.src = 'https://https-sg-home-care-vercel-app.disqus.com/embed.js';
      s.id = 'dsq-embed-scr';
      s.setAttribute('data-timestamp', (+new Date()).toString());
      (d.head || d.body).appendChild(s);
    } else if ((window as any).DISQUS) {
      (window as any).DISQUS.reset({
        reload: true,
        config: function (this: any) {
          this.page.url = window.location.href;
          this.page.identifier = window.location.pathname;
        },
      });
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
      <div id="disqus_thread"></div>
      <noscript>
        Please enable JavaScript to view the{' '}
        <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
      </noscript>
    </div>
  );
}



