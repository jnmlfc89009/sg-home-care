import { useEffect } from 'react';

export function DisqusComments() {
  useEffect(() => {
    const existingScript = document.getElementById('dsq-embed-scr');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://sg-home-hub.disqus.com/embed.js';
      script.id = 'dsq-embed-scr';
      script.setAttribute('data-timestamp', new Date().getTime().toString());
      script.async = true;
      (document.head || document.body).appendChild(script);
    }

    return () => {
      // Optional cleanup if needed, but Disqus handles thread reloading gracefully usually
    };
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div id="disqus_thread"></div>
      <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
    </div>
  );
}
