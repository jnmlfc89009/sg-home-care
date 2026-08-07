import { useEffect } from 'react';

export function DisqusComments() {
  useEffect(() => {
    // 1. Define disqus_config globally
    (window as any).disqus_config = function (this: any) {
      this.page.url = window.location.href;
      this.page.identifier = window.location.pathname;
    };

    // 2. Add embed script (sg-home-hub.disqus.com/embed.js)
    const d = document;
    const existingEmbed = d.getElementById('dsq-embed-scr');
    
    if (!existingEmbed) {
      const s = d.createElement('script');
      s.src = 'https://sg-home-hub.disqus.com/embed.js';
      s.id = 'dsq-embed-scr';
      s.setAttribute('data-timestamp', (+new Date()).toString());
      (d.head || d.body).appendChild(s);
    } else if ((window as any).DISQUS) {
      // Re-initialize Disqus if SPA component remounts
      (window as any).DISQUS.reset({
        reload: true,
        config: function (this: any) {
          this.page.url = window.location.href;
          this.page.identifier = window.location.pathname;
        },
      });
    }

    // 3. Add count script (//sg-home-hub.disqus.com/count.js)
    const existingCount = d.getElementById('dsq-count-scr');
    if (!existingCount) {
      const countScript = d.createElement('script');
      countScript.src = '//sg-home-hub.disqus.com/count.js';
      countScript.id = 'dsq-count-scr';
      countScript.async = true;
      (d.head || d.body).appendChild(countScript);
    }
  }, []);

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
        <div id="disqus_thread"></div>
        <noscript>
          Please enable JavaScript to view the{' '}
          <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
        </noscript>
      </div>
    </section>
  );
}


