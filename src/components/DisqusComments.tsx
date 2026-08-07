import { useEffect } from 'react';

export function DisqusComments() {
  useEffect(() => {
    // Define disqus_config globally
    (window as any).disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = window.location.pathname;
    };

    // Add embed script
    const existingScript = document.getElementById('dsq-embed-scr');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://sg-home-hub.disqus.com/embed.js';
      script.id = 'dsq-embed-scr';
      script.setAttribute('data-timestamp', new Date().getTime().toString());
      script.async = true;
      (document.head || document.body).appendChild(script);
    }

    // Add count script
    const existingCountScript = document.getElementById('dsq-count-scr');
    if (!existingCountScript) {
      const countScript = document.createElement('script');
      countScript.src = 'https://sg-home-hub.disqus.com/count.js';
      countScript.id = 'dsq-count-scr';
      countScript.async = true;
      (document.head || document.body).appendChild(countScript);
    }

    return () => {
      // Optional cleanup if needed
    };
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-8">
      <div id="disqus_thread"></div>
      <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
    </div>
  );
}
