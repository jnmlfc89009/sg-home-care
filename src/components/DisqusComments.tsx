import { DiscussionEmbed } from 'disqus-react';

export function DisqusComments() {
  const shortname = (import.meta as any).env?.VITE_DISQUS_SHORTNAME || 'https-sg-home-care-vercel-app';

  // Ensure clean canonical URL without hash fragments or localhost restrictions
  const pageUrl =
    typeof window !== 'undefined'
      ? (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
          ? 'https://sg-home-care.vercel.app'
          : window.location.href.split('#')[0].split('?')[0])
      : 'https://sg-home-care.vercel.app';

  const pageIdentifier = typeof window !== 'undefined' ? window.location.pathname || 'home' : 'home';

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-8 min-h-[300px]">
      <DiscussionEmbed
        shortname={shortname}
        config={{
          url: pageUrl,
          identifier: pageIdentifier,
          title: "SG Home Care",
        }}
      />
    </div>
  );
}






